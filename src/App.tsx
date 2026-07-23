/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode, StationeryConfig } from './types';
import { Navbar } from './components/Navbar';
import { StationeryViewer } from './components/StationeryViewer';
import { InteractiveVectorMockup } from './components/InteractiveVectorMockup';
import { GridAndSpecsView } from './components/GridAndSpecsView';
import { CustomizerPanel } from './components/CustomizerPanel';
import { SpecSheetModal } from './components/SpecSheetModal';
import { EDITORIAL_SPECS } from './data/stationeryData';
import { Sparkles, Check, Info } from 'lucide-react';

const DEFAULT_CONFIG: StationeryConfig = {
  envelopeText: 'Darling',
  letterHeadline: 'Just for You',
  letterQuote: '“To love and be loved is to feel the sun from both sides.”',
  paperId: 'pastel-pink-ivory',
  showGridLines: false,
  showAnnotations: true,
  zoomLevel: 1,
};

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('photo');
  const [config, setConfig] = useState<StationeryConfig>(DEFAULT_CONFIG);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleConfigChange = (updated: Partial<StationeryConfig>) => {
    setConfig((prev) => ({ ...prev, ...updated }));
  };

  const handleReset = () => {
    setConfig(DEFAULT_CONFIG);
    setCurrentView('photo');
    showToast('Reset to original museum editorial specifications');
  };

  const handleDownloadSpec = () => {
    const specText = `
==================================================
MAISON DE PAPIER • EDITORIAL STATIONERY SPEC SHEET
==================================================

Subject: ${EDITORIAL_SPECS.subject}
Paper Substrate: ${EDITORIAL_SPECS.paperWeight}
Dimensions: ${EDITORIAL_SPECS.dimensions}
Print Method: ${EDITORIAL_SPECS.printMethod}
Lighting Setup: ${EDITORIAL_SPECS.lightingSetup}

CUSTOM INSCRIPTIONS:
- Envelope Calligraphy: "${config.envelopeText}"
- Letter Headline: "${config.letterHeadline}"
- Letter Quotation: "${config.letterQuote}"
- Substrate ID: ${config.paperId}

==================================================
100% Archival Cotton Paper • Monochrome Ink Line Art
==================================================
    `.trim();

    const blob = new Blob([specText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Maison_De_Papier_Spec_${config.envelopeText.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Spec sheet downloaded successfully!');
  };

  const handleCopySpec = () => {
    navigator.clipboard.writeText(JSON.stringify(EDITORIAL_SPECS, null, 2));
    showToast('Copied editorial specifications to clipboard!');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-pink-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currentView={currentView}
        onViewChange={(mode) => setCurrentView(mode)}
        onOpenSpecs={() => setIsSpecsOpen(true)}
        onReset={handleReset}
        onDownloadSpec={handleDownloadSpec}
      />

      {/* Main Viewport Stage */}
      <main className="flex-1 flex flex-col justify-center items-center relative overflow-hidden">
        {/* VIEW MODE 1: High Resolution Product Photography */}
        {currentView === 'photo' && (
          <StationeryViewer
            isMacroView={false}
            showGridLines={config.showGridLines}
          />
        )}

        {/* VIEW MODE 2: Fiber Macro Zoom */}
        {currentView === 'macro' && (
          <StationeryViewer
            isMacroView={true}
            showGridLines={config.showGridLines}
          />
        )}

        {/* VIEW MODE 3: Live Interactive Vector Mockup */}
        {currentView === 'vector' && (
          <InteractiveVectorMockup
            config={config}
            showGridLines={config.showGridLines}
          />
        )}

        {/* VIEW MODE 4: Swiss Grid Layout & Metrics */}
        {currentView === 'grid' && <GridAndSpecsView config={config} />}
      </main>

      {/* Interactive Customizer Control Panel */}
      <CustomizerPanel
        config={config}
        onChange={handleConfigChange}
        onReset={handleReset}
      />

      {/* Editorial Specs Modal */}
      <SpecSheetModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
        onCopySpec={handleCopySpec}
      />

      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-pink-950/90 border border-pink-500/50 text-pink-100 text-xs px-4 py-2 rounded-full shadow-2xl backdrop-blur-md flex items-center space-x-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
