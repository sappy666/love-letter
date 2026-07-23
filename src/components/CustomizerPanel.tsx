import React from 'react';
import { StationeryConfig } from '../types';
import { PAPER_OPTIONS, PRESET_QUOTES } from '../data/stationeryData';
import { Sliders, Type, Palette, Sparkles, Check, Grid, RefreshCw } from 'lucide-react';

interface CustomizerPanelProps {
  config: StationeryConfig;
  onChange: (updated: Partial<StationeryConfig>) => void;
  onReset: () => void;
}

export const CustomizerPanel: React.FC<CustomizerPanelProps> = ({
  config,
  onChange,
  onReset,
}) => {
  return (
    <div className="bg-neutral-950 border-t border-neutral-800 p-4 lg:p-6 text-white max-w-7xl mx-auto w-full rounded-t-xl shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
        <div className="flex items-center space-x-2">
          <Sliders className="w-4 h-4 text-pink-400" />
          <h2 className="font-serif text-sm tracking-wider uppercase text-pink-200 font-medium">
            Editorial Stationery Customizer
          </h2>
        </div>

        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-2 text-xs text-neutral-400 cursor-pointer">
            <input
              type="checkbox"
              checked={config.showGridLines}
              onChange={(e) => onChange({ showGridLines: e.target.checked })}
              className="rounded bg-neutral-900 border-neutral-700 text-pink-500 focus:ring-pink-500"
            />
            <span className="flex items-center space-x-1">
              <Grid className="w-3.5 h-3.5 text-pink-400" />
              <span>Grid & Metrics</span>
            </span>
          </label>

          <button
            onClick={onReset}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs transition-all"
          >
            <RefreshCw className="w-3 h-3 text-neutral-400" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Calligraphy & Text Inscriptions */}
        <div className="space-y-4">
          <div className="flex items-center space-x-1.5 text-xs text-pink-300 font-medium uppercase tracking-wider">
            <Type className="w-3.5 h-3.5" />
            <span>Copperplate Inscriptions</span>
          </div>

          <div>
            <label className="block text-xs text-neutral-400 mb-1">
              Envelope Calligraphy Text:
            </label>
            <input
              type="text"
              value={config.envelopeText}
              onChange={(e) => onChange({ envelopeText: e.target.value })}
              placeholder="e.g. Darling"
              className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-pink-100 focus:outline-none focus:border-pink-500 font-serif italic"
            />
            <div className="flex flex-wrap gap-1.5 mt-2">
              {['Darling', 'Dearest', 'Mon Amour', 'Beloved'].map((preset) => (
                <button
                  key={preset}
                  onClick={() => onChange({ envelopeText: preset })}
                  className={`text-[11px] px-2 py-0.5 rounded border transition-all ${
                    config.envelopeText === preset
                      ? 'bg-pink-950 border-pink-500 text-pink-200'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs text-neutral-400 mb-1">
              Letter Headline Title:
            </label>
            <input
              type="text"
              value={config.letterHeadline}
              onChange={(e) => onChange({ letterHeadline: e.target.value })}
              placeholder="e.g. Just for You"
              className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-pink-100 focus:outline-none focus:border-pink-500 font-serif italic"
            />
          </div>
        </div>

        {/* Column 2: Quotation & Didot Micro Typography */}
        <div className="space-y-4">
          <div className="flex items-center space-x-1.5 text-xs text-pink-300 font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Didot Quotation & Body</span>
          </div>

          <div>
            <label className="block text-xs text-neutral-400 mb-1">
              Letter Supporting Quotation:
            </label>
            <textarea
              rows={2}
              value={config.letterQuote}
              onChange={(e) => onChange({ letterQuote: e.target.value })}
              className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-1.5 text-xs text-neutral-200 focus:outline-none focus:border-pink-500 font-serif"
            />
          </div>

          <div>
            <label className="block text-xs text-neutral-400 mb-1">
              Preset Quotation Ideas:
            </label>
            <select
              onChange={(e) => {
                if (e.target.value) onChange({ letterQuote: e.target.value });
              }}
              className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-neutral-300 focus:outline-none focus:border-pink-500"
            >
              <option value="">Choose a classic quote...</option>
              {PRESET_QUOTES.map((q, idx) => (
                <option key={idx} value={q}>
                  {q.length > 45 ? q.substring(0, 45) + '...' : q}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Column 3: Paper Materials & Cotton GSM */}
        <div className="space-y-4">
          <div className="flex items-center space-x-1.5 text-xs text-pink-300 font-medium uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5" />
            <span>Cotton Paper & Ink Palette</span>
          </div>

          <div className="space-y-2">
            {PAPER_OPTIONS.map((paper) => {
              const isSelected = config.paperId === paper.id;
              return (
                <button
                  key={paper.id}
                  onClick={() => onChange({ paperId: paper.id })}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-neutral-900 border-pink-500 text-pink-100 ring-1 ring-pink-500/50'
                      : 'bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {/* Swatch Preview Circle */}
                    <div className="relative w-6 h-6 rounded-full border border-white/20 overflow-hidden shadow-inner flex-shrink-0">
                      <div
                        className="absolute inset-0 w-1/2"
                        style={{ backgroundColor: paper.envelopeColor }}
                      />
                      <div
                        className="absolute inset-0 left-1/2 w-1/2"
                        style={{ backgroundColor: paper.letterColor }}
                      />
                    </div>

                    <div>
                      <div className="text-xs font-medium text-pink-200">
                        {paper.name}
                      </div>
                      <div className="text-[10px] text-neutral-400">
                        {paper.gsm} GSM Cotton Rag
                      </div>
                    </div>
                  </div>

                  {isSelected && <Check className="w-4 h-4 text-pink-400" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
