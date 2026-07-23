export type ViewMode = 'photo' | 'macro' | 'vector' | 'grid';

export interface PaperOption {
  id: string;
  name: string;
  envelopeColor: string; // CSS or Hex
  envelopeBorder: string;
  letterColor: string;
  inkColor: string;
  description: string;
  gsm: number;
}

export interface StationeryConfig {
  envelopeText: string;
  letterHeadline: string;
  letterQuote: string;
  paperId: string;
  showGridLines: boolean;
  showAnnotations: boolean;
  zoomLevel: number;
}

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  subtitle: string;
  description: string;
  spec: string;
}
