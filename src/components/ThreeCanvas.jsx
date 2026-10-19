import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer, frameId;
    let scene, camera;
    let geometry, particleMaterial;
    let icoGeo, icoMat, innerGeo, innerMat, ring1Geo, ring1Mat, ring2Geo, ring2Mat, shockwaveGeo, shockwaveMat;

    try {
      // Check if WebGL context can be created
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        console.warn('WebGL is not supported or blocked by browser shields. Falling back gracefully.');
        setWebGlSupported(false);
        return;
      }

      // --- Scene, Camera, Renderer ---
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x04060d, 0.0018);

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      camera.position.z = 400;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      // --- 1. Starfield / Floating Constellation ---
      const particleCount = 1200;
      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const scales = new Float32Array(particleCount);

      const palette = [
        new THREE.Color('#00f2fe'), // Cyan
        new THREE.Color('#8a2be2'), // Violet
        new THREE.Color('#38bdf8'), // Sky
        new THREE.Color('#00ff88'), // Neon Emerald
        new THREE.Color('#a855f7')  // Purple
      ];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1600;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1600;

        const col = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;

        scales[i] = Math.random() * 3 + 1;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      particleMaterial = new THREE.PointsMaterial({
        size: 4,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const particles = new THREE.Points(geometry, particleMaterial);
      scene.add(particles);

      // --- 2. Central 3D Quantum Hologram ---
      const coreGroup = new THREE.Group();
      coreGroup.position.set(220, 40, -100);

      icoGeo = new THREE.IcosahedronGeometry(75, 1);
      icoMat = new THREE.MeshBasicMaterial({
        color: 0x00f2fe,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const icoMesh = new THREE.Mesh(icoGeo, icoMat);
      coreGroup.add(icoMesh);

      innerGeo = new THREE.OctahedronGeometry(42, 0);
      innerMat = new THREE.MeshBasicMaterial({
        color: 0x8a2be2,
        wireframe: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      coreGroup.add(innerMesh);

      ring1Geo = new THREE.TorusGeometry(110, 0.8, 16, 100);
      ring1Mat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.45
      });
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.rotation.x = Math.PI / 3;
      coreGroup.add(ring1);

      ring2Geo = new THREE.TorusGeometry(130, 0.6, 16, 100);
      ring2Mat = new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.35
      });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.y = Math.PI / 4;
      ring2.rotation.x = Math.PI / 6;
      coreGroup.add(ring2);

      scene.add(coreGroup);

      // --- 3. Interactive Mouse & Scroll Parallax ---
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      let scrollY = 0;

      const onMouseMove = (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.4;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.4;
      };

      const onScroll = () => {
        scrollY = window.scrollY;
      };

      // --- 4. Click Shockwave Effect ---
      shockwaveGeo = new THREE.RingGeometry(1, 3, 64);
      shockwaveMat = new THREE.MeshBasicMaterial({
        color: 0x00f2fe,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending
      });
      const shockwave = new THREE.Mesh(shockwaveGeo, shockwaveMat);
      shockwave.position.z = 250;
      scene.add(shockwave);

      let shockwaveActive = false;
      let shockwaveScale = 1;

      const onPointerDown = (e) => {
        try {
          const vector = new THREE.Vector3(
            (e.clientX / window.innerWidth) * 2 - 1,
            -(e.clientY / window.innerHeight) * 2 + 1,
            0.5
          );
          vector.unproject(camera);
          const dir = vector.sub(camera.position).normalize();
          const distance = (250 - camera.position.z) / dir.z;
          const pos = camera.position.clone().add(dir.multiplyScalar(distance));

          shockwave.position.x = pos.x;
          shockwave.position.y = pos.y;
          shockwave.scale.set(1, 1, 1);
          shockwaveScale = 1;
          shockwaveMat.opacity = 0.9;
          shockwaveActive = true;
        } catch (err) {
          // ignore shockwave error
        }
      };

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('pointerdown', onPointerDown, { passive: true });

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        if (window.innerWidth < 768) {
          coreGroup.position.set(0, 150, -150);
          coreGroup.scale.set(0.65, 0.65, 0.65);
        } else {
          coreGroup.position.set(240, 40, -100);
          coreGroup.scale.set(1, 1, 1);
        }
      };
      onResize();
      window.addEventListener('resize', onResize);

      // --- Animation Loop ---
      const clock = new THREE.Clock();

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.04;
        targetY += (mouseY - targetY) * 0.04;

        camera.position.x = targetX * 0.35;
        camera.position.y = -targetY * 0.35 - (scrollY * 0.25);
        camera.lookAt(0, -scrollY * 0.25, 0);

        particles.rotation.y = elapsedTime * 0.035;
        particles.rotation.x = elapsedTime * 0.015;

        coreGroup.rotation.y = elapsedTime * 0.3;
        coreGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.25;

        icoMesh.rotation.y = -elapsedTime * 0.4;
        innerMesh.rotation.x = elapsedTime * 0.5;
        ring1.rotation.z = elapsedTime * 0.45;
        ring2.rotation.z = -elapsedTime * 0.35;

        const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
        innerMesh.scale.set(pulse, pulse, pulse);

        if (shockwaveActive) {
          shockwaveScale += 8;
          shockwave.scale.set(shockwaveScale, shockwaveScale, 1);
          shockwaveMat.opacity *= 0.92;
          if (shockwaveMat.opacity < 0.01) {
            shockwaveActive = false;
          }
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        if (frameId) cancelAnimationFrame(frameId);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('resize', onResize);

        if (mount && renderer && renderer.domElement) {
          try { mount.removeChild(renderer.domElement); } catch (e) {}
        }
        if (geometry) geometry.dispose();
        if (particleMaterial) particleMaterial.dispose();
        if (icoGeo) icoGeo.dispose();
        if (icoMat) icoMat.dispose();
        if (innerGeo) innerGeo.dispose();
        if (innerMat) innerMat.dispose();
        if (ring1Geo) ring1Geo.dispose();
        if (ring1Mat) ring1Mat.dispose();
        if (ring2Geo) ring2Geo.dispose();
        if (ring2Mat) ring2Mat.dispose();
        if (shockwaveGeo) shockwaveGeo.dispose();
        if (shockwaveMat) shockwaveMat.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.warn('Three.js canvas initialization encountered error:', err);
      setWebGlSupported(false);
    }
  }, []);

  if (!webGlSupported) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#03050c] via-[#050917] to-[#04060d] opacity-80" />
    );
  }

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
}
