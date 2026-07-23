import React from 'react';
import { StationeryConfig, PaperOption } from '../types';
import { PAPER_OPTIONS } from '../data/stationeryData';

interface InteractiveVectorMockupProps {
  config: StationeryConfig;
  showGridLines: boolean;
}

export const InteractiveVectorMockup: React.FC<InteractiveVectorMockupProps> = ({
  config,
  showGridLines,
}) => {
  const currentPaper = PAPER_OPTIONS.find((p) => p.id === config.paperId) || PAPER_OPTIONS[0];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-black p-4 lg:p-8 min-h-[600px] select-none">
      {/* Studio Backdrop (#000000) */}
      <div className="absolute inset-0 bg-black pointer-events-none" />

      {/* Main SVG Vector Stage */}
      <div className="relative w-full max-w-xl aspect-[3/4] bg-black flex items-center justify-center p-4">
        <svg
          viewBox="0 0 800 1066"
          className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Paper Texture Noise Filter */}
            <filter id="paperFiber" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
              <feColorMatrix type="saturate" values="0" />
              <feBlend in="SourceGraphic" in2="noise" mode="multiply" opacity="0.12" />
            </filter>

            {/* Soft Studio Shadow Filter */}
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#000000" floodOpacity="0.85" />
            </filter>

            {/* Inverted Triangle Opened Flap Gradient */}
            <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={currentPaper.envelopeColor} />
              <stop offset="100%" stopColor={currentPaper.envelopeBorder} />
            </linearGradient>
          </defs>

          {/* BACKGROUND ENVELOPE BACK INTERIOR (Dark interior pocket) */}
          <rect
            x="150"
            y="260"
            width="500"
            height="620"
            rx="6"
            fill={currentPaper.envelopeColor}
            filter="url(#paperFiber)"
          />
          <rect
            x="155"
            y="265"
            width="490"
            height="610"
            rx="4"
            fill="#111111"
            opacity="0.15"
          />

          {/* PARTIALLY INSERTED IVORY LETTER (Upper half visible) */}
          <g filter="url(#softShadow)">
            <rect
              x="180"
              y="160"
              width="440"
              height="580"
              rx="4"
              fill={currentPaper.letterColor}
              stroke="#D4CEBD"
              strokeWidth="1"
              filter="url(#paperFiber)"
            />

            {/* Letter Thin Border Margins */}
            <rect
              x="198"
              y="178"
              width="404"
              height="544"
              fill="none"
              stroke={currentPaper.inkColor}
              strokeWidth="0.75"
              strokeDasharray="none"
              opacity="0.4"
            />
            <rect
              x="202"
              y="182"
              width="396"
              height="536"
              fill="none"
              stroke={currentPaper.inkColor}
              strokeWidth="0.25"
              opacity="0.3"
            />

            {/* Upper Corner Ornament Dots */}
            <circle cx="210" cy="190" r="1.5" fill={currentPaper.inkColor} />
            <circle cx="590" cy="190" r="1.5" fill={currentPaper.inkColor} />

            {/* Engraved Ribbon Header Crest */}
            <g transform="translate(400, 220)" stroke={currentPaper.inkColor} fill="none" opacity="0.85">
              {/* Ribbon Bow & Tail Lines */}
              <path
                d="M -60,0 C -30,-15 30,-15 60,0 C 90,15 -90,15 -60,0 Z"
                strokeWidth="1"
              />
              <path
                d="M -20,0 C -40,25 -65,30 -80,20 C -70,10 -40,10 -20,0 Z"
                strokeWidth="0.75"
              />
              <path
                d="M 20,0 C 40,25 65,30 80,20 C 70,10 40,10 20,0 Z"
                strokeWidth="0.75"
              />
              <circle cx="0" cy="0" r="4" fill={currentPaper.inkColor} />
              {/* Stars around ribbon */}
              <path d="M -90,-10 L -90,-6 M -92,-8 L -88,-8" strokeWidth="0.75" />
              <path d="M 90,-10 L 90,-6 M 88,-8 L 92,-8" strokeWidth="0.75" />
            </g>

            {/* Centered Copperplate Headline Title */}
            <text
              x="400"
              y="285"
              textAnchor="middle"
              fill={currentPaper.inkColor}
              fontFamily="Playfair Display, Great Vibes, Cormorant Garamond, serif"
              fontSize="38"
              fontStyle="italic"
              letterSpacing="1"
              style={{ fontFeatureSettings: '"swsh" 1, "cswh" 1' }}
            >
              {config.letterHeadline || 'Just for You'}
            </text>

            {/* Small Didot Serif Quotation */}
            <text
              x="400"
              y="325"
              textAnchor="middle"
              fill={currentPaper.inkColor}
              fontFamily="Didot, Bodoni MT, Cormorant Garamond, serif"
              fontSize="12"
              letterSpacing="1.5"
              opacity="0.8"
            >
              {config.letterQuote || '“To love and be loved is to feel the sun from both sides.”'}
            </text>

            {/* Micro Editorial Details Line */}
            <text
              x="400"
              y="350"
              textAnchor="middle"
              fill={currentPaper.inkColor}
              fontFamily="Didot, serif"
              fontSize="9"
              letterSpacing="4"
              opacity="0.5"
            >
              • MAISON DE PAPIER • PARIS •
            </text>
          </g>

          {/* FRONT ENVELOPE BODY (Lower rectangle covering bottom half of letter) */}
          <g filter="url(#softShadow)">
            <rect
              x="150"
              y="480"
              width="500"
              height="400"
              rx="4"
              fill={currentPaper.envelopeColor}
              stroke={currentPaper.envelopeBorder}
              strokeWidth="0.75"
              filter="url(#paperFiber)"
            />

            {/* Envelope Geometric Fold Lines */}
            <path
              d="M 150,480 L 400,650 L 650,480"
              fill="none"
              stroke={currentPaper.envelopeBorder}
              strokeWidth="1.5"
              opacity="0.4"
            />
            <path
              d="M 150,880 L 400,650 L 650,880"
              fill="none"
              stroke={currentPaper.envelopeBorder}
              strokeWidth="1"
              opacity="0.25"
            />

            {/* Envelope Front Engraving: Vintage Cherub Illustration */}
            <g transform="translate(400, 680)" fill="none" stroke={currentPaper.inkColor} opacity="0.85">
              {/* Cherub Silhouette & Wings Line Art */}
              <circle cx="0" cy="-25" r="12" strokeWidth="1" /> {/* Head */}
              <path d="M -12,-20 C -35,-35 -40,-5 -15,0 Z" strokeWidth="0.75" /> {/* Left Wing */}
              <path d="M 12,-20 C 35,-35 40,-5 15,0 Z" strokeWidth="0.75" /> {/* Right Wing */}
              <path d="M -15,0 C -20,25 0,35 0,40 C 0,35 20,25 15,0 Z" strokeWidth="0.75" /> {/* Body */}
              {/* Celestial Stars */}
              <path d="M -45,-20 L -45,-14 M -48,-17 L -42,-17" strokeWidth="0.75" />
              <path d="M 45,-20 L 45,-14 M 42,-17 L 48,-17" strokeWidth="0.75" />
              <path d="M -30,20 L -30,24 M -32,22 L -28,22" strokeWidth="0.5" />
              <path d="M 30,20 L 30,24 M 28,22 L 32,22" strokeWidth="0.5" />
            </g>

            {/* Oversized Flowing Copperplate Calligraphy "Darling" */}
            <text
              x="400"
              y="820"
              textAnchor="middle"
              fill={currentPaper.inkColor}
              fontFamily="Playfair Display, Great Vibes, Brush Script MT, serif"
              fontSize="64"
              fontStyle="italic"
              letterSpacing="2"
              className="drop-shadow-sm"
            >
              {config.envelopeText || 'Darling'}
            </text>

            {/* Small Micro Serif Typography Aligned Vertically on Left & Right Margins */}
            <text
              x="175"
              y="680"
              transform="rotate(-90 175 680)"
              textAnchor="middle"
              fill={currentPaper.inkColor}
              fontFamily="Didot, serif"
              fontSize="9"
              letterSpacing="3"
              opacity="0.6"
            >
              EDITION SPECIALE • NO. 01
            </text>
            <text
              x="625"
              y="680"
              transform="rotate(90 625 680)"
              textAnchor="middle"
              fill={currentPaper.inkColor}
              fontFamily="Didot, serif"
              fontSize="9"
              letterSpacing="3"
              opacity="0.6"
            >
              100% COTTON RAG • 600 GSM
            </text>
          </g>

          {/* OPENED TOP FLAP (Fully open pointing upwards behind letter) */}
          <path
            d="M 150,480 L 400,260 L 650,480 Z"
            fill={currentPaper.envelopeColor}
            stroke={currentPaper.envelopeBorder}
            strokeWidth="1"
            filter="url(#paperFiber)"
            opacity="0.95"
          />

          {/* SWISS GRID LINES OVERLAY (When enabled) */}
          {showGridLines && (
            <g stroke="#EC4899" strokeWidth="0.5" opacity="0.4" strokeDasharray="3 3">
              {/* Outer Bounding Guides */}
              <rect x="150" y="160" width="500" height="720" fill="none" strokeWidth="1" />
              {/* Center Vertical Axis */}
              <line x1="400" y1="100" x2="400" y2="940" />
              {/* Baseline Alignments */}
              <line x1="100" y1="285" x2="700" y2="285" />
              <line x1="100" y1="680" x2="700" y2="680" />
              <line x1="100" y1="820" x2="700" y2="820" />
              {/* Dimension Callouts */}
              <text x="400" y="145" textAnchor="middle" fill="#EC4899" fontSize="12" fontFamily="monospace">
                ← 133mm Width →
              </text>
              <text x="130" y="520" textAnchor="end" fill="#EC4899" fontSize="12" fontFamily="monospace">
                184mm Height
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
