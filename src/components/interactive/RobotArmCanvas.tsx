import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sliders, 
  Cpu, 
  Activity, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

export const RobotArmCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activePreset, setActivePreset] = useState<string>('inspection');
  
  // Joint angle state (in degrees for human-readable controls)
  const [joints, setJoints] = useState({
    base: 35,
    shoulder: -25,
    elbow: 55,
    wrist: -30,
    gripper: 18
  });

  // End-effector telemetry
  const [telemetry, setTelemetry] = useState({
    x: '412.8 mm',
    y: '286.4 mm',
    z: '520.1 mm',
    status: 'INVERSE KINEMATICS OPTIMAL',
    payload: '4.85 kg',
    torque: '18.4 Nm'
  });

  // Internal Three.js references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const armMeshesRef = useRef<{
    baseGroup: THREE.Group;
    shoulderGroup: THREE.Group;
    elbowGroup: THREE.Group;
    wristGroup: THREE.Group;
    gripperLeft: THREE.Mesh;
    gripperRight: THREE.Mesh;
  } | null>(null);

  const animIdRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  // Initialize Three.js Scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(2.8, 2.2, 3.2);
    camera.lookAt(0, 0.7, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // ================= LIGHTING =================
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f0ff, 3.0);
    keyLight.position.set(4, 6, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00629b, 2.0);
    fillLight.position.set(-4, 3, -3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 2.5, 10);
    rimLight.position.set(0, 3, -2);
    scene.add(rimLight);

    // ================= WORKCELL GROUND & HOLOGRAPHIC GRID =================
    const grid = new THREE.GridHelper(4, 20, 0x00d2ff, 0x0c2d48);
    grid.position.y = 0;
    scene.add(grid);

    // Subtle reflective circular pedestal
    const pedestalGeo = new THREE.CylinderGeometry(0.8, 0.9, 0.08, 32);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x071120,
      roughness: 0.3,
      metalness: 0.8,
      wireframe: false
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = 0.04;
    scene.add(pedestal);

    // Glowing ring boundary
    const ringGeo = new THREE.RingGeometry(0.88, 0.92, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.085;
    scene.add(ring);

    // ================= 6-AXIS ROBOTIC MANIPULATOR HIERARCHY =================
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.25
    });
    const cyanJointMat = new THREE.MeshStandardMaterial({
      color: 0x00629b,
      emissive: 0x003b5c,
      metalness: 0.9,
      roughness: 0.2
    });
    const glowAccentMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00a3cc,
      emissiveIntensity: 0.6,
      metalness: 0.5,
      roughness: 0.1
    });

    // 1. Robot Base Link
    const baseGroup = new THREE.Group();
    baseGroup.position.y = 0.08;
    scene.add(baseGroup);

    const baseCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.42, 0.25, 24), darkMetalMat);
    baseCylinder.position.y = 0.125;
    baseGroup.add(baseCylinder);

    const baseJointRing = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.06, 24), glowAccentMat);
    baseJointRing.position.y = 0.26;
    baseGroup.add(baseJointRing);

    // 2. Shoulder Link
    const shoulderGroup = new THREE.Group();
    shoulderGroup.position.y = 0.29;
    baseGroup.add(shoulderGroup);

    const shoulderJoint = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 24), cyanJointMat);
    shoulderGroup.add(shoulderJoint);

    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.75, 16), darkMetalMat);
    upperArm.position.y = 0.38;
    shoulderGroup.add(upperArm);

    // Accent line along upper arm
    const upperArmGlow = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.65, 0.04), glowAccentMat);
    upperArmGlow.position.set(0.12, 0.38, 0);
    shoulderGroup.add(upperArmGlow);

    // 3. Elbow Link
    const elbowGroup = new THREE.Group();
    elbowGroup.position.y = 0.76;
    shoulderGroup.add(elbowGroup);

    const elbowJoint = new THREE.Mesh(new THREE.SphereGeometry(0.18, 20, 20), cyanJointMat);
    elbowGroup.add(elbowJoint);

    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.65, 16), darkMetalMat);
    forearm.position.y = 0.33;
    elbowGroup.add(forearm);

    // 4. Wrist Link
    const wristGroup = new THREE.Group();
    wristGroup.position.y = 0.66;
    elbowGroup.add(wristGroup);

    const wristJoint = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), cyanJointMat);
    wristGroup.add(wristJoint);

    // End-Effector Tool Head
    const toolHead = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.12, 16), darkMetalMat);
    toolHead.position.y = 0.09;
    wristGroup.add(toolHead);

    // Parallel Gripper Fingers
    const fingerGeo = new THREE.BoxGeometry(0.025, 0.14, 0.035);
    const gripperLeft = new THREE.Mesh(fingerGeo, glowAccentMat);
    gripperLeft.position.set(-0.05, 0.2, 0);
    wristGroup.add(gripperLeft);

    const gripperRight = new THREE.Mesh(fingerGeo, glowAccentMat);
    gripperRight.position.set(0.05, 0.2, 0);
    wristGroup.add(gripperRight);

    armMeshesRef.current = {
      baseGroup,
      shoulderGroup,
      elbowGroup,
      wristGroup,
      gripperLeft,
      gripperRight
    };

    // Orbit/Mouse rotation controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let cameraAngleX = 0.7;
    let cameraAngleY = 0.55;
    const cameraRadius = 4.2;

    const updateCameraPos = () => {
      camera.position.x = cameraRadius * Math.sin(cameraAngleX) * Math.cos(cameraAngleY);
      camera.position.y = cameraRadius * Math.sin(cameraAngleY) + 0.4;
      camera.position.z = cameraRadius * Math.cos(cameraAngleX) * Math.cos(cameraAngleY);
      camera.lookAt(0, 0.7, 0);
    };
    updateCameraPos();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      cameraAngleX += deltaX * 0.008;
      cameraAngleY = Math.max(0.1, Math.min(1.4, cameraAngleY - deltaY * 0.008));
      updateCameraPos();
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize handler
    const onResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  // Preset Handler
  const applyPreset = (preset: string) => {
    setActivePreset(preset);
    if (preset === 'inspection') {
      setJoints({ base: 45, shoulder: -30, elbow: 65, wrist: -35, gripper: 22 });
    } else if (preset === 'assembly') {
      setJoints({ base: -20, shoulder: -15, elbow: 40, wrist: -25, gripper: 12 });
    } else if (preset === 'park') {
      setJoints({ base: 0, shoulder: -65, elbow: 110, wrist: -45, gripper: 5 });
    }
  };

  // Animation Loop: Kinematics solver & smooth interpolation
  useEffect(() => {
    let animTime = 0;

    const loop = () => {
      animTime += 0.015;
      timeRef.current = animTime;

      const arm = armMeshesRef.current;
      if (arm) {
        if (isPlaying) {
          // Automated fluid trajectory motion
          const baseTarget = Math.sin(animTime * 0.8) * 0.75;
          const shoulderTarget = -0.4 + Math.sin(animTime * 1.2) * 0.25;
          const elbowTarget = 0.95 + Math.cos(animTime * 1.0) * 0.35;
          const wristTarget = -0.55 + Math.sin(animTime * 1.5) * 0.3;
          const gripTarget = 0.04 + Math.sin(animTime * 2.0) * 0.025;

          arm.baseGroup.rotation.y += (baseTarget - arm.baseGroup.rotation.y) * 0.08;
          arm.shoulderGroup.rotation.z += (shoulderTarget - arm.shoulderGroup.rotation.z) * 0.08;
          arm.elbowGroup.rotation.z += (elbowTarget - arm.elbowGroup.rotation.z) * 0.08;
          arm.wristGroup.rotation.z += (wristTarget - arm.wristGroup.rotation.z) * 0.08;
          arm.gripperLeft.position.x = -gripTarget;
          arm.gripperRight.position.x = gripTarget;

          // Update telemetry values dynamically
          const posX = (400 + Math.sin(animTime * 0.8) * 120).toFixed(1);
          const posY = (310 + Math.cos(animTime * 1.2) * 95).toFixed(1);
          const posZ = (510 + Math.sin(animTime * 1.0) * 70).toFixed(1);
          const torqueVal = (16.5 + Math.abs(Math.sin(animTime * 1.5) * 4.2)).toFixed(1);

          setTelemetry({
            x: `${posX} mm`,
            y: `${posY} mm`,
            z: `${posZ} mm`,
            status: 'TRAJECTORY TRACKING: ACTIVE',
            payload: '4.85 kg',
            torque: `${torqueVal} Nm`
          });
        } else {
          // Manual slider angle interpolation
          const bRad = (joints.base * Math.PI) / 180;
          const sRad = (joints.shoulder * Math.PI) / 180;
          const eRad = (joints.elbow * Math.PI) / 180;
          const wRad = (joints.wrist * Math.PI) / 180;
          const gOffset = (joints.gripper / 100) * 0.07;

          arm.baseGroup.rotation.y += (bRad - arm.baseGroup.rotation.y) * 0.1;
          arm.shoulderGroup.rotation.z += (sRad - arm.shoulderGroup.rotation.z) * 0.1;
          arm.elbowGroup.rotation.z += (eRad - arm.elbowGroup.rotation.z) * 0.1;
          arm.wristGroup.rotation.z += (wRad - arm.wristGroup.rotation.z) * 0.1;
          arm.gripperLeft.position.x = -gOffset;
          arm.gripperRight.position.x = gOffset;

          setTelemetry(prev => ({
            ...prev,
            status: 'MANUAL JOINT CONTROL: READY'
          }));
        }
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      animIdRef.current = requestAnimationFrame(loop);
    };

    animIdRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animIdRef.current);
    };
  }, [isPlaying, joints]);

  return (
    <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0a1428] via-[#050b17] to-[#02050e] p-5 shadow-2xl shadow-cyan-950/40 overflow-hidden hud-corner">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/90 pb-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <div className="flex flex-col">
            <span className="font-code text-xs tracking-wider uppercase text-cyan-300 font-bold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              6-AXIS MANIPULATOR // DIGITAL TWIN
            </span>
            <span className="text-[10px] font-code font-semibold tracking-wider text-emerald-400">
              ● {telemetry.status}
            </span>
          </div>
        </div>

        {/* Play/Pause & Preset Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-code font-semibold transition shadow-sm ${
              isPlaying
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 hover:bg-cyan-500/30'
                : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Auto Cycle' : 'Manual Mode'}</span>
          </button>

          <div className="hidden sm:flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => { applyPreset('inspection'); setIsPlaying(false); }}
              className={`px-2 py-0.5 rounded text-[10px] font-code font-semibold transition ${
                activePreset === 'inspection' && !isPlaying ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              Inspection
            </button>
            <button
              onClick={() => { applyPreset('assembly'); setIsPlaying(false); }}
              className={`px-2 py-0.5 rounded text-[10px] font-code font-semibold transition ${
                activePreset === 'assembly' && !isPlaying ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              Assembly
            </button>
            <button
              onClick={() => { applyPreset('park'); setIsPlaying(false); }}
              className={`px-2 py-0.5 rounded text-[10px] font-code font-semibold transition ${
                activePreset === 'park' && !isPlaying ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              Park
            </button>
          </div>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative h-[340px] sm:h-[390px] w-full rounded-2xl bg-[#02050e] overflow-hidden border border-slate-800/80 cursor-grab active:cursor-grabbing">
        <div ref={containerRef} className="w-full h-full block" />

        {/* Viewport Overlay Hints */}
        <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
          <div className="w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/80" />
          <span className="text-[9px] font-code text-cyan-400/80 tracking-widest uppercase">KINEMATICS WORKCELL // ORBIT 3D</span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-2 pointer-events-none">
          <span className="text-[9px] font-code text-slate-500 tracking-wider">CLICK & DRAG TO ROTATE</span>
          <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400/80" />
        </div>
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400/80 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400/80 pointer-events-none" />

        {/* End-Effector Coordinate Floating Card */}
        <div className="absolute bottom-3 right-3 bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 font-code text-[11px] backdrop-blur-sm pointer-events-none space-y-1">
          <div className="text-[9px] text-slate-500 uppercase tracking-wider">End-Effector (X, Y, Z)</div>
          <div className="text-cyan-300 font-bold flex items-center gap-2">
            <span>X: {telemetry.x}</span>
            <span>Y: {telemetry.y}</span>
            <span>Z: {telemetry.z}</span>
          </div>
        </div>
      </div>

      {/* Manual Joint Sliders (Visible when Manual Mode is active) */}
      {!isPlaying && (
        <div className="mt-3 p-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 font-code text-xs">
          <div>
            <div className="flex justify-between text-[11px] text-slate-400 mb-1">
              <span>J1 (Base)</span>
              <span className="text-cyan-300">{joints.base}°</span>
            </div>
            <input 
              type="range" 
              min="-90" 
              max="90" 
              value={joints.base} 
              onChange={e => setJoints({...joints, base: Number(e.target.value)})}
              className="w-full accent-cyan-400 h-1 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between text-[11px] text-slate-400 mb-1">
              <span>J2 (Shoulder)</span>
              <span className="text-cyan-300">{joints.shoulder}°</span>
            </div>
            <input 
              type="range" 
              min="-75" 
              max="45" 
              value={joints.shoulder} 
              onChange={e => setJoints({...joints, shoulder: Number(e.target.value)})}
              className="w-full accent-cyan-400 h-1 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between text-[11px] text-slate-400 mb-1">
              <span>J3 (Elbow)</span>
              <span className="text-cyan-300">{joints.elbow}°</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="120" 
              value={joints.elbow} 
              onChange={e => setJoints({...joints, elbow: Number(e.target.value)})}
              className="w-full accent-cyan-400 h-1 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between text-[11px] text-slate-400 mb-1">
              <span>Gripper</span>
              <span className="text-cyan-300">{joints.gripper}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="50" 
              value={joints.gripper} 
              onChange={e => setJoints({...joints, gripper: Number(e.target.value)})}
              className="w-full accent-cyan-400 h-1 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Telemetry Footer */}
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 font-code text-xs">
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2 flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase">Payload Capacity</span>
          <span className="text-cyan-300 font-bold mt-0.5">{telemetry.payload}</span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2 flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase">Actuator Torque</span>
          <span className="text-white font-bold mt-0.5">{telemetry.torque}</span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2 flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase">Degrees of Freedom</span>
          <span className="text-emerald-300 font-bold mt-0.5">6-DOF + Gripper</span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2 flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase">Interpolation Cycle</span>
          <span className="text-slate-200 font-semibold mt-0.5">1 kHz Real-Time</span>
        </div>
      </div>
    </div>
  );
};
