import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { IEEE_REGIONS, IeeeRegion } from '../../data/communityData';
import { Globe2, Building2, ExternalLink, Network, Sparkles, Compass, ShieldCheck, MapPin } from 'lucide-react';

interface GlobalHub {
  name: string;
  region: string;
  lat: number;
  lng: number;
  leadResearch: string;
  activeChapters: string;
}

const GLOBAL_HUBS: GlobalHub[] = [
  { name: 'Boston / MIT & Harvard', region: 'Region 1 (USA)', lat: 42.36, lng: -71.09, leadResearch: 'Autonomous Mobility & Robot Learning', activeChapters: '18 Chapters' },
  { name: 'Silicon Valley / Stanford', region: 'Region 6 (USA)', lat: 37.42, lng: -122.16, leadResearch: 'Embodied AI & Tactile Manipulation', activeChapters: '24 Chapters' },
  { name: 'Zurich / ETH & EPFL', region: 'Region 8 (Europe)', lat: 47.37, lng: 8.54, leadResearch: 'Quadrupeds & Drone Aerodynamics', activeChapters: '16 Chapters' },
  { name: 'Munich / DLR & TUM', region: 'Region 8 (Europe)', lat: 48.13, lng: 11.58, leadResearch: 'Surgical & Space Robotics', activeChapters: '14 Chapters' },
  { name: 'Tokyo / Kyoto Universities', region: 'Region 10 (Asia)', lat: 35.67, lng: 139.65, leadResearch: 'Humanoids & Dexterous Hands', activeChapters: '28 Chapters' },
  { name: 'Singapore / NUS & NTU', region: 'Region 10 (Asia)', lat: 1.35, lng: 103.81, leadResearch: 'Soft Robotics & Port Automation', activeChapters: '8 Chapters' },
  { name: 'Toronto / Waterloo', region: 'Region 7 (Canada)', lat: 43.65, lng: -79.38, leadResearch: 'Field Robotics & Medical Vision', activeChapters: '14 Chapters' },
  { name: 'São Paulo / USP', region: 'Region 9 (Latin America)', lat: -23.55, lng: -46.63, leadResearch: 'Agri-Robotics & Amazon Sensing', activeChapters: '10 Chapters' },
  { name: 'Bengaluru / IISc', region: 'Region 10 (Asia)', lat: 12.97, lng: 77.59, leadResearch: 'Drone Swarms & Micro-Automation', activeChapters: '15 Chapters' },
  { name: 'Sydney / UTS', region: 'Region 10 (Pacific)', lat: -33.86, lng: 151.20, leadResearch: 'Subsea AUVs & Mining Autonomy', activeChapters: '9 Chapters' }
];

export const CommunityNetwork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedHub, setSelectedHub] = useState<GlobalHub>(GLOBAL_HUBS[0]);
  const [selectedRegion, setSelectedRegion] = useState<IeeeRegion>(IEEE_REGIONS[0]);
  const [networkFilter, setNetworkFilter] = useState<'all' | 'students' | 'researchers' | 'industry'>('all');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Earth Sphere Core
    const sphereGeo = new THREE.SphereGeometry(1.6, 48, 48);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x061226,
      emissive: 0x030814,
      roughness: 0.8,
      metalness: 0.3
    });
    const earthMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(earthMesh);

    // Holographic Wireframe Grid
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.14
    });
    const wireframeSphere = new THREE.Mesh(sphereGeo, wireframeMat);
    globeGroup.add(wireframeSphere);

    // Outer Atmosphere Glow Ring
    const atmosphereGeo = new THREE.RingGeometry(1.65, 1.95, 64);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    atmosphere.rotation.x = Math.PI / 2.3;
    globeGroup.add(atmosphere);

    // Convert Lat/Lng to 3D Cartesian coordinates
    const latLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // Plot Global Hubs
    const hubMarkers: THREE.Mesh[] = [];
    GLOBAL_HUBS.forEach((hub) => {
      const pos = latLngToVector3(hub.lat, hub.lng, 1.62);
      const markerGeo = new THREE.SphereGeometry(0.045, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(pos);
      globeGroup.add(marker);
      hubMarkers.push(marker);

      // Radial pulse ring around each hub
      const pulseGeo = new THREE.RingGeometry(0.06, 0.09, 24);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0x00d2ff,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide
      });
      const pulse = new THREE.Mesh(pulseGeo, pulseMat);
      pulse.position.copy(pos);
      pulse.lookAt(pos.clone().multiplyScalar(2));
      globeGroup.add(pulse);
    });

    // Create Geodesic Curved Flight Arcs between major hubs
    const hubPairs = [
      [0, 2], // Boston -> Zurich
      [0, 1], // Boston -> Silicon Valley
      [1, 4], // Silicon Valley -> Tokyo
      [2, 3], // Zurich -> Munich
      [4, 5], // Tokyo -> Singapore
      [5, 8], // Singapore -> Bengaluru
      [0, 6], // Boston -> Toronto
      [1, 7], // Silicon Valley -> Sao Paulo
      [5, 9]  // Singapore -> Sydney
    ];

    hubPairs.forEach(([idxA, idxB]) => {
      const pA = latLngToVector3(GLOBAL_HUBS[idxA].lat, GLOBAL_HUBS[idxA].lng, 1.62);
      const pB = latLngToVector3(GLOBAL_HUBS[idxB].lat, GLOBAL_HUBS[idxB].lng, 1.62);

      // Elevate curve control point above sphere
      const mid = pA.clone().add(pB).multiplyScalar(0.5);
      const distance = pA.distanceTo(pB);
      mid.normalize().multiplyScalar(1.62 + distance * 0.28);

      const curve = new THREE.QuadraticBezierCurve3(pA, mid, pB);
      const points = curve.getPoints(36);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.45
      });
      const arc = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(arc);
    });

    // Lighting
    const dirLight = new THREE.DirectionalLight(0x00f0ff, 2.5);
    dirLight.position.set(5, 4, 5);
    scene.add(dirLight);

    const blueLight = new THREE.DirectionalLight(0x004b77, 3.0);
    blueLight.position.set(-5, -2, -4);
    scene.add(blueLight);

    const ambLight = new THREE.AmbientLight(0x0a1628, 1.5);
    scene.add(ambLight);

    // Mouse Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x += deltaY * 0.006;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch Interaction
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x += deltaY * 0.006;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    // ANIMATION LOOP
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // Gentle auto-rotation when not dragging
      if (!isDragging) {
        globeGroup.rotation.y += 0.0025;
      }

      // Pulse markers
      const scale = 1 + Math.sin(time * 3) * 0.15;
      hubMarkers.forEach(m => m.scale.set(scale, scale, scale));

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="space-y-10">
      {/* 3D Global Earth Collaborative Topology Section */}
      <div className="tech-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-[#070d1c]/95 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-code text-xs font-semibold tracking-wider uppercase mb-1">
              <Globe2 className="w-4 h-4" />
              GLOBAL SYNAPTIC ROBOTICS NETWORK
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Interactive Global Geodesic Collaboration Grid
            </h3>
          </div>
          
          {/* Ecosystem Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setNetworkFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-code font-semibold transition ${
                networkFilter === 'all' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Streams
            </button>
            <button
              onClick={() => setNetworkFilter('students')}
              className={`px-3 py-1 rounded-lg text-xs font-code font-semibold transition ${
                networkFilter === 'students' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Student SAC
            </button>
            <button
              onClick={() => setNetworkFilter('researchers')}
              className={`px-3 py-1 rounded-lg text-xs font-code font-semibold transition ${
                networkFilter === 'researchers' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Researchers
            </button>
            <button
              onClick={() => setNetworkFilter('industry')}
              className={`px-3 py-1 rounded-lg text-xs font-code font-semibold transition ${
                networkFilter === 'industry' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Industry
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Earth Globe Canvas */}
          <div className="lg:col-span-7 relative bg-[#040711] rounded-2xl border border-slate-800/80 h-[360px] sm:h-[440px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.1)_0%,transparent_75%)] pointer-events-none" />

            <div ref={containerRef} className="w-full h-full block relative z-10" />

            {/* Interaction Helper Tag */}
            <div className="absolute bottom-3 left-3 z-20 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg px-2.5 py-1 text-[10px] font-code text-cyan-300 pointer-events-none">
              Drag globe to rotate • Geodesic streams active
            </div>
          </div>

          {/* Telemetry & Hub Inspector Panel */}
          <div className="lg:col-span-5 bg-slate-900/70 rounded-2xl border border-slate-800 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-code text-xs text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-1 rounded-full uppercase">
                {selectedHub.region}
              </span>
              <span className="text-xs font-code text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {selectedHub.activeChapters}
              </span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-1 font-heading">{selectedHub.name}</h4>
              <p className="text-xs text-slate-400 font-code">Coordinates: {selectedHub.lat}°N, {selectedHub.lng}°E</p>
            </div>

            <div className="bg-[#050914] p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-code text-slate-500 uppercase block">PRIMARY RESEARCH DIRECTION</span>
              <p className="text-xs text-slate-200 font-sans font-medium">{selectedHub.leadResearch}</p>
            </div>

            {/* Quick Hub Switcher */}
            <div>
              <span className="text-[11px] font-code text-slate-400 uppercase tracking-wider block mb-2">
                Select Major Robotics Center:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {GLOBAL_HUBS.slice(0, 4).map(hub => (
                  <button
                    key={hub.name}
                    onClick={() => setSelectedHub(hub)}
                    className={`text-left p-2 rounded-lg font-code text-xs transition-all border ${
                      selectedHub.name === hub.name
                        ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="line-clamp-1 font-semibold">{hub.name.split(' / ')[0]}</span>
                    <span className="text-[10px] text-slate-500 block">{hub.activeChapters}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.ieee-ras.org/chapters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-code text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <span>Browse Chapter Network Directory</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Global Regional Directory Explorer (Regions 1-10) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-code text-cyan-400 uppercase tracking-wider block">GEOGRAPHIC INFRASTRUCTURE</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Explore IEEE RAS Global Regions (1–10)
            </h3>
          </div>
          <span className="text-xs font-code text-slate-400">
            Over 180+ Active Society Chapters Worldwide
          </span>
        </div>

        {/* Region selector tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          {IEEE_REGIONS.map(reg => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg)}
              className={`px-4 py-2 rounded-lg font-code text-xs font-medium transition-all ${
                selectedRegion.id === reg.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {reg.code}
            </button>
          ))}
        </div>

        {/* Selected Region Detailed Card */}
        <div className="tech-card rounded-2xl p-6 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-code font-semibold">
                {selectedRegion.code}
              </span>
              <h4 className="text-lg font-bold text-white font-heading">{selectedRegion.name}</h4>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{selectedRegion.summary}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-code">
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">GEOGRAPHIC REACH</span>
                <span className="text-slate-200 font-semibold">{selectedRegion.geographicScope}</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">CHAPTER DENSITY</span>
                <span className="text-cyan-300 font-semibold">{selectedRegion.chaptersCount}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-3">
            <span className="text-xs font-code text-slate-400 uppercase tracking-wider block flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              Prominent Academic & Research Hubs
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300 font-code">
              {selectedRegion.keyHubs.map((hub, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {hub}
                </li>
              ))}
            </ul>
            <a
              href="https://www.ieee-ras.org/chapters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-code text-cyan-400 hover:text-cyan-300 pt-2 border-t border-slate-800 w-full"
            >
              Locate Your Nearest Chapter
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
