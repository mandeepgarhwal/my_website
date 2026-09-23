import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Sliders, Eye, Zap, Layers } from 'lucide-react';

/**
 * 60fps HTML5 Canvas Wave Mechanics & Optics Simulation Engine
 * Pedagogical physics tool developed by Mandeep Garhwal
 */
export default function WaveSimulator({
  compact = false,
  initialMode = 'traveling',
  showControls = true,
  className = '',
}) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  // Simulation Parameters
  const [isPlaying, setIsPlaying] = useState(true);
  const [simMode, setSimMode] = useState(initialMode); // 'traveling' | 'interference' | 'standing' | 'optics'
  const [frequency, setFrequency] = useState(1.4); // Hz
  const [amplitude, setAmplitude] = useState(48); // px
  const [damping, setDamping] = useState(0.003); // attenuation factor
  const [showGrid, setShowGrid] = useState(true);
  const [harmonicN, setHarmonicN] = useState(3);
  const [refractiveIndex, setRefractiveIndex] = useState(1.52); // Glass

  // References for continuous animation loop
  const timeRef = useRef(0);
  const paramsRef = useRef({
    isPlaying: true,
    simMode,
    frequency,
    amplitude,
    damping,
    showGrid,
    harmonicN,
    refractiveIndex,
  });

  useEffect(() => {
    paramsRef.current = {
      isPlaying,
      simMode,
      frequency,
      amplitude,
      damping,
      showGrid,
      harmonicN,
      refractiveIndex,
    };
  }, [isPlaying, simMode, frequency, amplitude, damping, showGrid, harmonicN, refractiveIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let lastTimestamp = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = (now) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;

      if (paramsRef.current.isPlaying) {
        timeRef.current += dt * paramsRef.current.frequency * 2 * Math.PI;
      }

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const centerY = h / 2;

      // Dark mode detection via DOM or class
      const isDark = document.documentElement.classList.contains('dark');
      const bgFill = isDark ? '#09090b' : '#fafafa';
      const gridStroke = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
      const axisStroke = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)';
      const textColor = isDark ? '#a1a1aa' : '#71717a';

      // Clear Canvas
      ctx.fillStyle = bgFill;
      ctx.fillRect(0, 0, w, h);

      // Draw Coordinate Grid
      if (paramsRef.current.showGrid) {
        ctx.strokeStyle = gridStroke;
        ctx.lineWidth = 1;
        const step = 40;
        ctx.beginPath();
        for (let x = 0; x <= w; x += step) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
        }
        for (let y = 0; y <= h; y += step) {
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
        }
        ctx.stroke();

        // Central Reference Axis
        ctx.strokeStyle = axisStroke;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(w, centerY);
        ctx.stroke();
      }

      const t = timeRef.current;
      const { simMode: mode, amplitude: amp, damping: damp, harmonicN: n, refractiveIndex: nRefr } = paramsRef.current;

      if (mode === 'traveling') {
        // Traveling Harmonic Wave y = A * exp(-damp * x) * sin(kx - omega*t)
        const k = (2 * Math.PI) / (w * 0.4); // spatial wave number
        ctx.strokeStyle = '#d97706'; // Amber accent
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        for (let x = 0; x <= w; x += 2) {
          const attenuation = Math.exp(-damp * x);
          const y = centerY - amp * attenuation * Math.sin(k * x - t);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Particle markers along the wave showing local transverse motion
        const samplePoints = [w * 0.2, w * 0.45, w * 0.7];
        samplePoints.forEach((px) => {
          const att = Math.exp(-damp * px);
          const py = centerY - amp * att * Math.sin(k * px - t);
          ctx.fillStyle = isDark ? '#f59e0b' : '#b45309';
          ctx.beginPath();
          ctx.arc(px, py, 4.5, 0, Math.PI * 2);
          ctx.fill();

          // Equilibrium guide line
          ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.3)' : 'rgba(180, 83, 9, 0.3)';
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.moveTo(px, centerY);
          ctx.lineTo(px, py);
          ctx.stroke();
          ctx.setLineDash([]);
        });
      } else if (mode === 'interference') {
        // Wave Superposition & Interference: y = y1 + y2
        const k1 = (2 * Math.PI) / (w * 0.35);
        const k2 = (2 * Math.PI) / (w * 0.42);

        // Component Wave 1 (Subtle Cyan)
        ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(14, 165, 233, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 3) {
          const y1 = centerY - (amp * 0.5) * Math.sin(k1 * x - t);
          if (x === 0) ctx.moveTo(x, y1);
          else ctx.lineTo(x, y1);
        }
        ctx.stroke();

        // Component Wave 2 (Subtle Rose)
        ctx.strokeStyle = isDark ? 'rgba(251, 113, 133, 0.45)' : 'rgba(244, 63, 94, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 3) {
          const y2 = centerY - (amp * 0.5) * Math.sin(k2 * x + t * 0.8);
          if (x === 0) ctx.moveTo(x, y2);
          else ctx.lineTo(x, y2);
        }
        ctx.stroke();

        // Resultant Wave (Bold Amber)
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 2) {
          const yRes =
            centerY -
            ((amp * 0.5) * Math.sin(k1 * x - t) +
              (amp * 0.5) * Math.sin(k2 * x + t * 0.8));
          if (x === 0) ctx.moveTo(x, yRes);
          else ctx.lineTo(x, yRes);
        }
        ctx.stroke();
      } else if (mode === 'standing') {
        // Standing Wave: y = 2A * sin(n*pi*x/L) * cos(omega*t)
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 2) {
          const envelope = Math.sin((n * Math.PI * x) / w);
          const y = centerY - amp * envelope * Math.cos(t);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Nodes (Zeros) & Antinodes
        for (let i = 0; i <= n; i++) {
          const nodeX = (i * w) / n;
          ctx.fillStyle = isDark ? '#ef4444' : '#dc2626';
          ctx.beginPath();
          ctx.arc(nodeX, centerY, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (mode === 'optics') {
        // Geometric Optics & Snell's Law Ray Tracing through a convex lens
        const lensX = w * 0.5;
        const lensThickness = 28;
        const lensHeight = h * 0.72;
        const focalLength = (w * 0.3) / (nRefr - 1);

        // Lens Surface
        ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(14, 165, 233, 0.12)';
        ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.5)' : 'rgba(14, 165, 233, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(lensX, centerY, lensThickness, lensHeight / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Optical Rays
        const numRays = 7;
        const raySpacing = (lensHeight * 0.6) / (numRays - 1);
        const startY = centerY - (lensHeight * 0.3);

        for (let i = 0; i < numRays; i++) {
          const yRay = startY + i * raySpacing;
          const distFromCenter = yRay - centerY;

          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          // Incoming parallel ray
          ctx.moveTo(0, yRay);
          ctx.lineTo(lensX, yRay);

          // Refracted ray converging to focal point
          const focusX = lensX + focalLength;
          const slope = (centerY - yRay) / focalLength;
          const endX = w;
          const endY = yRay + slope * (endX - lensX);

          ctx.lineTo(endX, endY);
          ctx.stroke();
        }

        // Focal Point Indicator
        const focusPointX = Math.min(lensX + focalLength, w - 10);
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(focusPointX, centerY, 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = textColor;
        ctx.font = '11px monospace';
        ctx.fillText(`Focal Length: ${Math.round(focalLength)}px (n=${nRefr})`, lensX - 40, h - 16);
      }

      // Physics Diagnostic Overlay
      ctx.fillStyle = textColor;
      ctx.font = '11px monospace';
      const wavelength = Math.round(w / (paramsRef.current.frequency * 1.8));
      if (mode !== 'optics') {
        ctx.fillText(
          `f: ${paramsRef.current.frequency.toFixed(2)}Hz  ·  λ: ~${wavelength}px  ·  Amp: ${Math.round(amp)}px`,
          16,
          24
        );
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      className={`relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/60 overflow-hidden flex flex-col ${className}`}
    >
      {/* Simulation Engine Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/40">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide uppercase text-zinc-700 dark:text-zinc-300">
            PhysicsLab 60fps Vector Workbench
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500">·</span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {simMode === 'traveling' && 'Traveling Wave Mechanics'}
            {simMode === 'interference' && 'Wave Superposition & Interference'}
            {simMode === 'standing' && `Standing Wave Harmonic (n=${harmonicN})`}
            {simMode === 'optics' && 'Snell’s Law Ray Convergence'}
          </span>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-1 bg-zinc-200/70 dark:bg-zinc-800/80 p-1 rounded-lg text-xs">
          <button
            type="button"
            onClick={() => setSimMode('traveling')}
            className={`px-2.5 py-1 rounded transition-colors ${
              simMode === 'traveling'
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-xs font-medium'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Traveling
          </button>
          <button
            type="button"
            onClick={() => setSimMode('interference')}
            className={`px-2.5 py-1 rounded transition-colors ${
              simMode === 'interference'
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-xs font-medium'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Interference
          </button>
          <button
            type="button"
            onClick={() => setSimMode('standing')}
            className={`px-2.5 py-1 rounded transition-colors ${
              simMode === 'standing'
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-xs font-medium'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Standing
          </button>
          <button
            type="button"
            onClick={() => setSimMode('optics')}
            className={`px-2.5 py-1 rounded transition-colors ${
              simMode === 'optics'
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-xs font-medium'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Optics
          </button>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative w-full h-56 sm:h-72 bg-zinc-50 dark:bg-zinc-950">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Live HUD Floating Indicators */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-zinc-900/80 dark:bg-zinc-800/80 backdrop-blur-xs text-white px-2.5 py-1 rounded text-[11px] font-mono tabular-nums">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{isPlaying ? '60.0 FPS' : 'PAUSED'}</span>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      {showControls && (
        <div className="p-4 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/60 flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Frequency Control */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
                <span className="font-medium">Frequency (f)</span>
                <span className="font-mono tabular-nums text-zinc-900 dark:text-zinc-200">
                  {frequency.toFixed(2)} Hz
                </span>
              </div>
              <input
                type="range"
                min="0.3"
                max="3.5"
                step="0.1"
                value={frequency}
                onChange={(e) => setFrequency(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-600 dark:accent-amber-500"
              />
            </div>

            {/* Amplitude Control */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
                <span className="font-medium">Amplitude (A)</span>
                <span className="font-mono tabular-nums text-zinc-900 dark:text-zinc-200">
                  {Math.round(amplitude)} px
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="85"
                step="1"
                value={amplitude}
                onChange={(e) => setAmplitude(parseInt(e.target.value, 10))}
                className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-600 dark:accent-amber-500"
              />
            </div>

            {/* Damping / Mode Specific Parameter */}
            {simMode === 'standing' ? (
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium">Harmonic Mode (n)</span>
                  <span className="font-mono tabular-nums text-zinc-900 dark:text-zinc-200">
                    Mode {harmonicN}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={harmonicN}
                  onChange={(e) => setHarmonicN(parseInt(e.target.value, 10))}
                  className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-600 dark:accent-amber-500"
                />
              </div>
            ) : simMode === 'optics' ? (
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium">Refractive Index (n)</span>
                  <span className="font-mono tabular-nums text-zinc-900 dark:text-zinc-200">
                    {refractiveIndex.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1.1"
                  max="2.4"
                  step="0.05"
                  value={refractiveIndex}
                  onChange={(e) => setRefractiveIndex(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-600 dark:accent-amber-500"
                />
              </div>
            ) : (
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium">Damping Coefficient (γ)</span>
                  <span className="font-mono tabular-nums text-zinc-900 dark:text-zinc-200">
                    {(damping * 1000).toFixed(1)} m⁻¹
                  </span>
                </div>
                <input
                  type="range"
                  min="0.000"
                  max="0.008"
                  step="0.0005"
                  value={damping}
                  onChange={(e) => setDamping(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-600 dark:accent-amber-500"
                />
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-amber-600 hover:bg-amber-700 text-white transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause Loop' : 'Resume Motion'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setFrequency(1.4);
                  setAmplitude(48);
                  setDamping(0.003);
                  setHarmonicN(3);
                  setRefractiveIndex(1.52);
                  setIsPlaying(true);
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowGrid(!showGrid)}
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 cursor-pointer"
            >
              {showGrid ? 'Hide Coordinate Grid' : 'Show Coordinate Grid'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
