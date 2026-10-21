import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface Specimen {
  id: string;
  name: string;
  scientificName: string;
  crop: string;
  status: 'Infected' | 'Healthy';
  diseaseName: string;
  confidence: number;
  resnetLayer: string;
  featuresDetected: string[];
  remedy: string;
  remedyDetails: string;
  iconColor: string;
}

const SPECIMENS: Specimen[] = [
  {
    id: 'specimen-1',
    name: 'Tomato Foliage Sample #412',
    scientificName: 'Solanum lycopersicum',
    crop: 'Tomato',
    status: 'Infected',
    diseaseName: 'Early Blight (Alternaria solani)',
    confidence: 97.4,
    resnetLayer: 'Conv5_x / Block 3 (High-level spatial lesions)',
    featuresDetected: ['Concentric ring patterns', 'Target-board necrotic spots', 'Chlorotic halo margins'],
    remedy: 'Apply copper-based or chlorothalonil fungicide',
    remedyDetails: 'Prune affected lower leaves (<=15cm from soil), improve row aeration, and switch to drip irrigation to prevent spore splash.',
    iconColor: '#D97706',
  },
  {
    id: 'specimen-2',
    name: 'Apple Leaf Sample #108',
    scientificName: 'Malus domestica',
    crop: 'Apple',
    status: 'Infected',
    diseaseName: 'Black Rot (Diplocarpon coronariae)',
    confidence: 96.1,
    resnetLayer: 'Conv4_x / Residual block 4 (Textural rust lesions)',
    featuresDetected: ['Circular purple-brown spots', 'Fruiting bodies (pycnidia)', 'Leaf yellowing margin'],
    remedy: 'Prune infected twigs & apply captan/myclobutanil',
    remedyDetails: 'Remove mummified fruit mummies in canopy; maintain open pruning structure to maximize sunlight penetration.',
    iconColor: '#DC2626',
  },
  {
    id: 'specimen-3',
    name: 'Corn Leaf Sample #253',
    scientificName: 'Zea mays',
    crop: 'Maize / Corn',
    status: 'Infected',
    diseaseName: 'Common Rust (Puccinia sorghi)',
    confidence: 98.2,
    resnetLayer: 'Conv5_x / Block 2 (Elongated pustule vectors)',
    featuresDetected: ['Golden-brown pustules', 'Epidermal rupture marks', 'Bilateral leaf surface distribution'],
    remedy: 'Rotate strobilurin + triazole fungicide',
    remedyDetails: 'Monitor ambient humidity (>90% threshold); schedule planting with resistant hybrid seed variants for next season.',
    iconColor: '#EA580C',
  },
  {
    id: 'specimen-4',
    name: 'Potato Leaf Sample #091',
    scientificName: 'Solanum tuberosum',
    crop: 'Potato',
    status: 'Healthy',
    diseaseName: 'Healthy Crop — No Pathogen Detected',
    confidence: 99.3,
    resnetLayer: 'Dense Head (Nominal baseline activation)',
    featuresDetected: ['Uniform chlorophyll reflectance', 'Intact stomata margins', 'Zero necrotic lesion vectors'],
    remedy: 'Preventive baseline maintenance',
    remedyDetails: 'Maintain regular 3-year crop rotation with non-solanaceous crops and periodic nitrogen balanced soil feeding.',
    iconColor: '#059669',
  }
];

export const PlantDiseaseVisual: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(SPECIMENS[0].id);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const current = SPECIMENS.find(s => s.id === selectedId) || SPECIMENS[0];

  const handleSelect = (id: string) => {
    if (id === selectedId) return;
    setIsProcessing(true);
    setSelectedId(id);
    setTimeout(() => {
      setIsProcessing(false);
    }, 280);
  };

  return (
    <div className="bg-paper-card border border-paper-border rounded-lg p-5 font-sans shadow-sm">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-paper-border text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-ink-muted">FIG 1.1</span>
          <span className="text-ink-muted">·</span>
          <span className="font-medium text-ink">Inference Diagnostic Pipeline</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-ink-muted">
          <span>MODEL:</span>
          <span className="text-cobalt font-medium">ResNet-34 (Transfer Learning)</span>
        </div>
      </div>

      {/* Interactive specimen selector */}
      <div className="mb-4">
        <label className="block text-[11px] font-mono text-ink-muted uppercase tracking-wider mb-2">
          Select Leaf Specimen to Inspect:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {SPECIMENS.map((specimen) => {
            const isSelected = specimen.id === selectedId;
            return (
              <button
                key={specimen.id}
                onClick={() => handleSelect(specimen.id)}
                className={`px-3 py-2 text-left rounded border transition-all text-xs ${
                  isSelected
                    ? 'border-cobalt bg-cobalt-wash text-cobalt font-medium shadow-xs'
                    : 'border-paper-border bg-paper hover:bg-white text-ink-secondary hover:text-ink'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-mono text-[10px] text-ink-muted">{specimen.crop}</span>
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: specimen.iconColor }}
                  />
                </div>
                <div className="truncate font-semibold text-[11px]">
                  {specimen.status === 'Healthy' ? 'Healthy Specimen' : specimen.diseaseName.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pipeline Stages View */}
      <div className={`transition-opacity duration-200 ${isProcessing ? 'opacity-40' : 'opacity-100'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {/* Stage 1: Input & Augmentation */}
          <div className="bg-paper p-3.5 rounded border border-paper-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] text-ink-muted uppercase">Stage 01</span>
                <span className="font-mono text-[10px] text-cobalt">Input Vector</span>
              </div>
              <p className="text-[13px] font-semibold text-ink mb-1">{current.name}</p>
              <p className="text-xs text-ink-muted italic mb-3 font-serif">{current.scientificName}</p>
            </div>
            <div className="pt-2 border-t border-paper-border font-mono text-[11px] text-ink-secondary space-y-1">
              <div>Resolution: <span className="text-ink">224 × 224 px</span></div>
              <div>Augmentation: <span className="text-ink">Affine + Flip + Jitter</span></div>
            </div>
          </div>

          {/* Stage 2: Feature Extraction */}
          <div className="bg-paper p-3.5 rounded border border-paper-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] text-ink-muted uppercase">Stage 02</span>
                <span className="font-mono text-xs text-cobalt font-medium">Feature Activation</span>
              </div>
              <p className="text-[13px] font-semibold text-ink mb-2">ResNet-34 Conv Layers</p>
              <ul className="text-xs text-ink-secondary space-y-1.5 mb-2">
                {current.featuresDetected.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-cobalt font-mono text-xs mt-0.5">›</span>
                    <span className="truncate">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t border-paper-border font-mono text-[11px] text-ink-muted truncate">
              Peak: <span className="text-ink">{current.resnetLayer}</span>
            </div>
          </div>

          {/* Stage 3: Inference Result */}
          <div className="bg-paper p-3.5 rounded border border-paper-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] text-ink-muted uppercase">Stage 03</span>
                <span className="font-mono text-xs text-cobalt font-medium">Classification</span>
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-[13px] font-semibold text-ink truncate">{current.diseaseName}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-grow bg-paper-border h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cobalt transition-all duration-500 rounded-full"
                    style={{ width: `${current.confidence}%` }}
                  />
                </div>
                <span className="font-mono text-xs font-bold text-ink tabular-nums">
                  {current.confidence}%
                </span>
              </div>
            </div>
            <div className="pt-2 border-t border-paper-border flex items-center justify-between font-mono text-[11px]">
              <span className="text-ink-muted">STATUS</span>
              <span className={`font-semibold ${current.status === 'Healthy' ? 'text-emerald-700' : 'text-amber-700'}`}>
                {current.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Agricultural Remedy Prescribed */}
        <div className="bg-paper-subtle border border-paper-border rounded p-3.5 text-xs">
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 text-cobalt">
              <Layers size={18} />
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                <span className="font-mono text-xs font-semibold text-ink uppercase tracking-wider">
                  Prescribed Agronomic Remedy:
                </span>
                <span className="font-mono text-[11px] text-ink-muted">Lookup Protocol #P-34</span>
              </div>
              <p className="font-semibold text-ink text-sm mb-1">{current.remedy}</p>
              <p className="text-ink-secondary text-[13px] leading-relaxed">{current.remedyDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
