import React from 'react';
import { EDITORIAL_SPECS } from '../data/stationeryData';
import { X, FileText, CheckCircle2, ShieldCheck, Printer, Copy, Award } from 'lucide-react';

interface SpecSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySpec: () => void;
}

export const SpecSheetModal: React.FC<SpecSheetModalProps> = ({
  isOpen,
  onClose,
  onCopySpec,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-neutral-950 border border-neutral-800 rounded-xl max-w-2xl w-full text-white overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-800 bg-neutral-900/50">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-pink-400" />
            <div>
              <h2 className="font-serif text-base tracking-widest uppercase text-pink-100 font-light">
                Editorial Design & Craft Brief
              </h2>
              <p className="text-xs text-neutral-400">
                Museum Quality Production Specifications
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto font-sans">
          {/* Section 1: Overview */}
          <div className="bg-neutral-900/70 border border-neutral-800 rounded-lg p-4 space-y-2">
            <div className="text-xs text-pink-300 uppercase tracking-widest font-mono">
              {EDITORIAL_SPECS.title}
            </div>
            <div className="text-sm font-serif text-pink-100 italic">
              "{EDITORIAL_SPECS.subject}"
            </div>
          </div>

          {/* Section 2: Detailed Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-neutral-900/40 border border-neutral-800/80 p-3.5 rounded-lg space-y-1">
              <span className="text-neutral-400 font-mono text-[10px] block uppercase">
                Paper Substrate
              </span>
              <p className="text-neutral-200 font-medium">
                {EDITORIAL_SPECS.paperWeight}
              </p>
              <p className="text-neutral-400 text-[11px]">
                Soft matte finish with raw visible cotton fibers and zero optical brighteners.
              </p>
            </div>

            <div className="bg-neutral-900/40 border border-neutral-800/80 p-3.5 rounded-lg space-y-1">
              <span className="text-neutral-400 font-mono text-[10px] block uppercase">
                Dimensions
              </span>
              <p className="text-neutral-200 font-medium">
                {EDITORIAL_SPECS.dimensions}
              </p>
              <p className="text-neutral-400 text-[11px]">
                A7 Envelope layout with 55° geometric flap folds and partially exposed inserted letter.
              </p>
            </div>

            <div className="bg-neutral-900/40 border border-neutral-800/80 p-3.5 rounded-lg space-y-1">
              <span className="text-neutral-400 font-mono text-[10px] block uppercase">
                Print Technique
              </span>
              <p className="text-neutral-200 font-medium">
                {EDITORIAL_SPECS.printMethod}
              </p>
              <p className="text-neutral-400 text-[11px]">
                Crisp monochrome black ink line art with fine etched details and 0.15pt hairline strokes.
              </p>
            </div>

            <div className="bg-neutral-900/40 border border-neutral-800/80 p-3.5 rounded-lg space-y-1">
              <span className="text-neutral-400 font-mono text-[10px] block uppercase">
                Studio Photography Setup
              </span>
              <p className="text-neutral-200 font-medium">
                {EDITORIAL_SPECS.lightingSetup}
              </p>
              <p className="text-neutral-400 text-[11px]">
                Perpendicular camera angle, ultra-sharp focus, seamless velvet background with soft gradient falloff.
              </p>
            </div>
          </div>

          {/* Section 3: Typography & Motif Checklist */}
          <div className="border-t border-neutral-800 pt-4 space-y-3">
            <h3 className="text-xs font-serif uppercase tracking-wider text-pink-200">
              Editorial Typography & Illustration Motifs
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Envelope Front:</strong> Vintage cherub engraving illustration centered, flowing copperplate script "Darling", scattered celestial stars, and vertical Didot micro typography.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Ivory Letter:</strong> Hand-drawn engraved ribbon header crest with curled tails, "Just for You" copperplate title, thin margin border lines, and classic Didot quotation.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Quiet Luxury Rules:</strong> Zero foil stamping, zero wax seals, zero artificial props — pure paper craftsmanship focus.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 border-t border-neutral-800 bg-neutral-900/50">
          <span className="text-[11px] text-neutral-400 font-mono">
            ARCHIVAL SPEC SHEET • REV 1.0
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={onCopySpec}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs text-neutral-200 transition-all"
            >
              <Copy className="w-3.5 h-3.5 text-pink-400" />
              <span>Copy Parameters</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-md bg-pink-600 hover:bg-pink-500 text-xs text-white font-medium transition-all"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
