import React, { useState, useRef, MouseEvent } from 'react';
import { STATIONERY_IMAGES } from '../assets/images';
import { HOTSPOTS } from '../data/stationeryData';
import { Hotspot } from '../types';
import { Search, Info, Eye, Layers, Maximize2, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface StationeryViewerProps {
  isMacroView?: boolean;
  showGridLines?: boolean;
}

export const StationeryViewer: React.FC<StationeryViewerProps> = ({
  isMacroView = false,
  showGridLines = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HOTSPOTS[0]);
  const [showHotspots, setShowHotspots] = useState(true);
  const [enableLoupe, setEnableLoupe] = useState(false);
  const [loupePos, setLoupePos] = useState({ x: 0, y: 0, bgX: 0, bgY: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentImageSrc = isMacroView ? STATIONERY_IMAGES.macro : STATIONERY_IMAGES.hero;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !enableLoupe) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setLoupePos({
      x,
      y,
      bgX: percentX,
      bgY: percentY,
    });
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-black min-h-[600px] lg:min-h-[750px] p-4 overflow-hidden select-none">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-950/20 via-black to-black pointer-events-none" />

      {/* Main Viewport Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        className={`relative max-w-2xl w-full aspect-[3/4] bg-black rounded-lg shadow-2xl border border-neutral-900 overflow-hidden cursor-${
          enableLoupe ? 'crosshair' : 'default'
        } ${isFullscreen ? 'fixed inset-4 z-50 max-w-none h-[calc(100vh-2rem)]' : ''}`}
      >
        {/* Main Ultra-Realistic Photograph */}
        <img
          src={currentImageSrc}
          alt="Ultra-realistic luxury stationery product photography - pastel pink cotton paper envelope with ivory letter"
          className="w-full h-full object-contain filter contrast-[1.02] brightness-[0.98]"
          referrerPolicy="no-referrer"
        />

        {/* Optional Swiss Grid Overlay */}
        {showGridLines && (
          <div className="absolute inset-0 pointer-events-none z-10 grid grid-cols-12 grid-rows-12 border border-pink-500/20">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-pink-500/10" />
            ))}
            {/* Center Axis Lines */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-pink-400/40 border-dashed" />
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-pink-400/40 border-dashed" />
          </div>
        )}

        {/* Interactive Magnifier Loupe Lens */}
        {enableLoupe && isHovering && (
          <div
            className="absolute w-48 h-48 rounded-full border-2 border-pink-300 shadow-[0_0_30px_rgba(244,114,182,0.4)] pointer-events-none z-30 overflow-hidden bg-black"
            style={{
              left: `${loupePos.x - 96}px`,
              top: `${loupePos.y - 96}px`,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${currentImageSrc})`,
                backgroundPosition: `${loupePos.bgX}% ${loupePos.bgY}%`,
                backgroundSize: '280%',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* Crosshair reticle in magnifier */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-full h-[1px] bg-pink-300" />
              <div className="h-full w-[1px] bg-pink-300 absolute" />
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/80 text-[10px] text-pink-200 font-mono tracking-widest border border-pink-500/30">
              2.5X MAGNIFICATION
            </div>
          </div>
        )}

        {/* Hotspot Interactive Pins */}
        {showHotspots &&
          !isMacroView &&
          HOTSPOTS.map((hotspot) => {
            const isActive = activeHotspot?.id === hotspot.id;
            return (
              <button
                key={hotspot.id}
                onClick={() => setActiveHotspot(hotspot)}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none"
                title={hotspot.title}
              >
                <div className="relative flex items-center justify-center">
                  <span
                    className={`absolute w-7 h-7 rounded-full animate-ping opacity-75 ${
                      isActive ? 'bg-pink-400' : 'bg-white/40'
                    }`}
                  />
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] font-bold transition-all shadow-lg ${
                      isActive
                        ? 'bg-pink-500 border-pink-200 text-white scale-125 ring-4 ring-pink-500/30'
                        : 'bg-black/80 border-white/60 text-white hover:bg-pink-900/90 hover:scale-110'
                    }`}
                  >
                    +
                  </div>
                </div>
              </button>
            );
          })}

        {/* Top Control Bar Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
          <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-pink-100 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
            <span className="font-serif tracking-wider">
              {isMacroView ? '600 GSM Cotton Grain' : 'Museum Archival Quality'}
            </span>
          </div>

          <div className="flex items-center space-x-1.5 bg-black/80 backdrop-blur-md p-1 rounded-lg border border-neutral-800 shadow-md">
            {!isMacroView && (
              <button
                onClick={() => setShowHotspots(!showHotspots)}
                className={`p-1.5 rounded text-xs flex items-center space-x-1 transition-all ${
                  showHotspots
                    ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Toggle Craftsmanship Pins"
              >
                <Info className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Pins</span>
              </button>
            )}

            <button
              onClick={() => setEnableLoupe(!enableLoupe)}
              className={`p-1.5 rounded text-xs flex items-center space-x-1 transition-all ${
                enableLoupe
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Toggle Interactive Magnifier Loupe"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Loupe Lens</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded text-neutral-400 hover:text-white transition-all"
              title="Toggle Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Badge Overlay */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-md border border-neutral-800 px-3 py-1.5 rounded-md text-[11px] text-neutral-300 tracking-wider font-mono">
            #000000 STUDIO VELVET • DIFFUSED KEY LIGHT
          </div>
        </div>
      </div>

      {/* Active Hotspot Craftsmanship Detail Card */}
      {showHotspots && activeHotspot && !isMacroView && (
        <div className="mt-4 max-w-2xl w-full bg-neutral-950/90 border border-pink-900/40 rounded-lg p-4 text-white shadow-xl backdrop-blur-md animate-fadeIn">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              <h3 className="font-serif text-pink-200 text-sm tracking-wider font-medium">
                {activeHotspot.title}
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950/60 border border-pink-800/40 text-pink-300">
              {activeHotspot.spec}
            </span>
          </div>
          <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
            {activeHotspot.description}
          </p>
          <div className="mt-2 text-[11px] text-neutral-400 italic font-serif">
            Note: {activeHotspot.subtitle}
          </div>
        </div>
      )}
    </div>
  );
};
