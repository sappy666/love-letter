import React from 'react';
import { InteractiveVectorMockup } from './InteractiveVectorMockup';
import { StationeryConfig } from '../types';
import { Grid, Ruler, Layers, Type, Sparkles } from 'lucide-react';

interface GridAndSpecsViewProps {
  config: StationeryConfig;
}

export const GridAndSpecsView: React.FC<GridAndSpecsViewProps> = ({ config }) => {
  return (
    <div className="w-full h-full bg-black text-white p-4 lg:p-8 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Vector Layout Mockup with Grid Lines Force-Enabled */}
        <div className="lg:col-span-7 bg-neutral-950 border border-neutral-900 rounded-xl p-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-3 left-3 z-10 flex items-center space-x-2 bg-pink-950/80 border border-pink-500/40 text-pink-200 text-xs px-2.5 py-1 rounded-md font-mono">
            <Grid className="w-3.5 h-3.5" />
            <span>SWISS LAYOUT GRID ACTIVE</span>
          </div>
          <InteractiveVectorMockup config={config} showGridLines={true} />
        </div>

        {/* Right Side: Editorial Metric Callouts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-pink-400 font-mono">
              Precision Metrics & Ratios
            </span>
            <h2 className="font-serif text-2xl text-pink-100 font-light">
              Swiss Editorial Alignment
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every typographic element and vector motif adheres strictly to a 12-column Swiss grid scale, balancing negative space with copperplate calligraphy flourishes.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {/* Envelope Spec Block */}
            <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-lg space-y-2">
              <div className="flex items-center justify-between text-pink-300 font-bold border-b border-neutral-800 pb-2">
                <span className="flex items-center space-x-1.5">
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Envelope Geometry</span>
                </span>
                <span className="text-[10px] text-neutral-400">A7 Standard</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
                <div>Dimensions: 133mm × 184mm</div>
                <div>Paper: 600 GSM Cotton</div>
                <div>Flap Angle: 55° Geometric</div>
                <div>Calligraphy Slant: 55° Slant</div>
              </div>
            </div>

            {/* Letter Spec Block */}
            <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-lg space-y-2">
              <div className="flex items-center justify-between text-pink-300 font-bold border-b border-neutral-800 pb-2">
                <span className="flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Letter Insert Geometry</span>
                </span>
                <span className="text-[10px] text-neutral-400">Half-Exposed</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
                <div>Dimensions: 127mm × 178mm</div>
                <div>Paper: 320 GSM Ivory</div>
                <div>Margin Trim: 18mm Offset</div>
                <div>Exposure: 50% Upper Half</div>
              </div>
            </div>

            {/* Typography Metrics Block */}
            <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-lg space-y-2">
              <div className="flex items-center justify-between text-pink-300 font-bold border-b border-neutral-800 pb-2">
                <span className="flex items-center space-x-1.5">
                  <Type className="w-3.5 h-3.5" />
                  <span>Typographic Hairlines</span>
                </span>
                <span className="text-[10px] text-neutral-400">0.15pt Fine Line</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
                <div>Primary Script: Copperplate</div>
                <div>Secondary Serif: Didot</div>
                <div>Headline Size: 64pt / 38pt</div>
                <div>Body Size: 12pt Didot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
