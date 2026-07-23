import { PaperOption, Hotspot } from '../types';

export const PAPER_OPTIONS: PaperOption[] = [
  {
    id: 'pastel-pink-ivory',
    name: 'Pastel Pink & Warm Ivory',
    envelopeColor: '#F4C2C2',
    envelopeBorder: '#E0ADAD',
    letterColor: '#FCFBF4',
    inkColor: '#121212',
    description: 'Original editorial specification: 600 GSM double-thick cotton rag in soft bubblegum pink paired with unbleached warm ivory letter paper.',
    gsm: 600,
  },
  {
    id: 'noir-cream',
    name: 'Noir Obsidian & Vanilla',
    envelopeColor: '#1A1A1A',
    envelopeBorder: '#333333',
    letterColor: '#F5F2EB',
    inkColor: '#1A1A1A',
    description: 'Deep matte charcoal cotton paper with crisp monochrome letterpress for ultra-dramatic contrast.',
    gsm: 650,
  },
  {
    id: 'sage-linen',
    name: 'Eucalyptus & Natural Cotton',
    envelopeColor: '#D8E2DC',
    envelopeBorder: '#B1C5B9',
    letterColor: '#FCFAF5',
    inkColor: '#1C2826',
    description: 'Soft organic sage green envelope with tactile botanical cotton fiber texture.',
    gsm: 580,
  },
  {
    id: 'dune-parchment',
    name: 'Dune Sand & Warm Milk',
    envelopeColor: '#E6D2C1',
    envelopeBorder: '#CEB29B',
    letterColor: '#FFFDF9',
    inkColor: '#2B231D',
    description: 'Warm sandy beige cotton pulp with delicate golden-amber tone and hand-torn raw deckle edge option.',
    gsm: 600,
  },
];

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'cherub',
    x: 50,
    y: 72,
    title: 'Vintage Cherub Engraving',
    subtitle: 'Classic Steel-Die Engraving Art',
    description: 'Micro-etched black monochrome line art depicting a classic renaissance cherub motif with fine cross-hatching and celestial stars.',
    spec: '0.15pt Fine Line Density • Black Monochrome Intaglio',
  },
  {
    id: 'calligraphy-envelope',
    x: 50,
    y: 86,
    title: 'English Copperplate "Darling"',
    subtitle: 'Oversized Flowing Calligraphy',
    description: 'High-stroke contrast calligraphy with extreme hair-thin entry strokes, long graceful swashes, and heavy downstrokes.',
    spec: 'Copperplate 55° Slant • Custom Hand-Lettered Script',
  },
  {
    id: 'ribbon-letter',
    x: 50,
    y: 28,
    title: 'Hand-Drawn Ribbon Ornament',
    subtitle: 'Top Letter Crest Illustration',
    description: 'Delicate engraved ribbon line art with flowing curled tails and tiny starburst accents framing the upper margin.',
    spec: 'Custom Archival Gravure • 100% Cotton Rag Letter',
  },
  {
    id: 'headline-letter',
    x: 50,
    y: 42,
    title: 'Headline Script "Just for You"',
    subtitle: 'Centered Copperplate Title',
    description: 'Oversized calligraphic headline balanced symmetrically with Swiss-inspired micro typography margins.',
    spec: 'Master Calligrapher Hand-cut Copperplate Die',
  },
  {
    id: 'cotton-texture',
    x: 22,
    y: 50,
    title: 'Cotton Paper Micro-Fibers',
    subtitle: '600 GSM Archival Cotton Rag',
    description: 'Raw tactile matte finish with natural visible cotton fibers, offering dense weight and luxury hand-feel without artificial brighteners.',
    spec: '100% Pure Cotton Fibers • Acid-Free Archival Grade',
  },
];

export const EDITORIAL_SPECS = {
  title: "MAISON DE PAPIER • Collection No. 01",
  subject: "Luxury Stationery & Editorial Engraving Suite",
  dimensions: "Envelope: 133mm × 184mm (A7) • Letter: 127mm × 178mm",
  paperWeight: "600 GSM Cotton Pulp (Envelope) / 320 GSM (Letter)",
  printMethod: "Traditional Black Ink Letterpress & Steel Die Gravure",
  lightingSetup: "Single Overhead 3000K Softbox Diffusion on #000000 Studio Velvet",
  typography: "English Copperplate Script (Headlines) & Didot Display (Micro-type)",
};

export const PRESET_QUOTES = [
  "“To love and be loved is to feel the sun from both sides.”",
  "“In all the world, there is no heart for me like yours.”",
  "“You are my today and all of my tomorrows.”",
  "“Brief is the light, but eternal is the word written by hand.”",
];
