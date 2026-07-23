import React from 'react';
import { ViewMode } from '../types';
import { Camera, ZoomIn, PenTool, Grid, BookOpen, Download, RotateCcw, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onViewChange: (mode: ViewMode) => void;
  onOpenSpecs: () => void;
  onReset: () => void;
  onDownloadSpec: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  onOpenSpecs,
  onReset,
  onDownloadSpec,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3 text-white transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Subtitle */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-pink-300/40 flex items-center justify-center bg-pink-950/30 text-pink-300 font-serif text-sm">
            M
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-serif text-lg tracking-widest text-pink-100 font-light">
                MAISON DE PAPIER
              </h1>
              <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-pink-400/30 text-pink-300 bg-pink-500/10">
                Editorial Studio
              </span>
            </div>
            <p className="text-xs text-neutral-400 tracking-wider">
              Ultra-Realistic Luxury Stationery • Paris / New York
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-neutral-900/90 border border-neutral-800 rounded-lg p-1 space-x-1 shadow-inner">
          <button
            onClick={() => onViewChange('photo')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              currentView === 'photo'
                ? 'bg-pink-500/20 text-pink-200 border border-pink-500/40 shadow'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
            title="Museum Product Photography View"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Photograph</span>
          </button>

          <button
            onClick={() => onViewChange('macro')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              currentView === 'macro'
                ? 'bg-pink-500/20 text-pink-200 border border-pink-500/40 shadow'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
            title="Cotton Fiber Macro Zoom"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Macro Texture</span>
          </button>

          <button
            onClick={() => onViewChange('vector')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              currentView === 'vector'
                ? 'bg-pink-500/20 text-pink-200 border border-pink-500/40 shadow'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
            title="Live Interactive Customizer Mockup"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Interactive Vector</span>
          </button>

          <button
            onClick={() => onViewChange('grid')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              currentView === 'grid'
                ? 'bg-pink-500/20 text-pink-200 border border-pink-500/40 shadow'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
            title="Swiss Layout Grid & Metrics"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Grid & Specs</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenSpecs}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-700 hover:border-pink-400/50 text-xs text-neutral-300 hover:text-white transition-all"
            title="View Editorial Design Specifications"
          >
            <BookOpen className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden sm:inline">Craft Brief</span>
          </button>

          <button
            onClick={onDownloadSpec}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-pink-600/90 hover:bg-pink-500 border border-pink-400/30 text-xs text-white transition-all shadow-lg shadow-pink-950/50 font-medium"
            title="Download Editorial Spec Card PDF/PNG"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Spec</span>
          </button>

          <button
            onClick={onReset}
            className="p-1.5 rounded-md bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all"
            title="Reset All Customizations"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
