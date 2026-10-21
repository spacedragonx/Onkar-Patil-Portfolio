import React, { useState } from 'react';

interface MarketRegime {
  id: string;
  quarter: string;
  regimeTitle: string;
  marketContext: string;
  weights: {
    name: string;
    weight: number; // percentage
    color: string;
  }[];
  sharpeRatio: number;
  expectedReturn: number;
  volatility: number;
  transactionCostPenalty: number;
}

const REGIMES: MarketRegime[] = [
  {
    id: 'q1',
    quarter: 'Period 01 / Q1',
    regimeTitle: 'Momentum Expansion Regime',
    marketContext: 'Low asset cross-correlation with declining implied volatility; strong earnings growth momentum.',
    weights: [
      { name: 'Equities (Large Cap)', weight: 48, color: '#3455DB' },
      { name: 'US Treasuries (7-10Y)', weight: 22, color: '#6366F1' },
      { name: 'Corporate Credit', weight: 18, color: '#94A3B8' },
      { name: 'Commodities / Metals', weight: 8, color: '#CBD5E1' },
      { name: 'Cash Equivalent', weight: 4, color: '#E2E8F0' },
    ],
    sharpeRatio: 1.84,
    expectedReturn: 15.6,
    volatility: 8.4,
    transactionCostPenalty: 0.12,
  },
  {
    id: 'q2',
    quarter: 'Period 02 / Q2',
    regimeTitle: 'Inflation & Rate Shock',
    marketContext: 'Spike in yields and raw commodity inputs; equity factor compression requiring hedging rotations.',
    weights: [
      { name: 'Equities (Large Cap)', weight: 26, color: '#3455DB' },
      { name: 'US Treasuries (7-10Y)', weight: 14, color: '#6366F1' },
      { name: 'Corporate Credit', weight: 12, color: '#94A3B8' },
      { name: 'Commodities / Metals', weight: 32, color: '#CBD5E1' },
      { name: 'Cash Equivalent', weight: 16, color: '#E2E8F0' },
    ],
    sharpeRatio: 1.62,
    expectedReturn: 12.1,
    volatility: 7.5,
    transactionCostPenalty: 0.18,
  },
  {
    id: 'q3',
    quarter: 'Period 03 / Q3',
    regimeTitle: 'High Volatility & Flight to Safety',
    marketContext: 'Broad equity drawdown regime with elevated VIX; LSTM dynamically trims exposure and preserves capital.',
    weights: [
      { name: 'Equities (Large Cap)', weight: 15, color: '#3455DB' },
      { name: 'US Treasuries (7-10Y)', weight: 42, color: '#6366F1' },
      { name: 'Corporate Credit', weight: 10, color: '#94A3B8' },
      { name: 'Commodities / Metals', weight: 11, color: '#CBD5E1' },
      { name: 'Cash Equivalent', weight: 22, color: '#E2E8F0' },
    ],
    sharpeRatio: 1.48,
    expectedReturn: 8.9,
    volatility: 6.0,
    transactionCostPenalty: 0.14,
  },
  {
    id: 'q4',
    quarter: 'Period 04 / Q4',
    regimeTitle: 'Cyclical Re-acceleration',
    marketContext: 'Mean reversion in credit spreads; orderly rotation back into high-Sharpe equity sectors.',
    weights: [
      { name: 'Equities (Large Cap)', weight: 44, color: '#3455DB' },
      { name: 'US Treasuries (7-10Y)', weight: 26, color: '#6366F1' },
      { name: 'Corporate Credit', weight: 16, color: '#94A3B8' },
      { name: 'Commodities / Metals', weight: 9, color: '#CBD5E1' },
      { name: 'Cash Equivalent', weight: 5, color: '#E2E8F0' },
    ],
    sharpeRatio: 1.76,
    expectedReturn: 14.4,
    volatility: 8.1,
    transactionCostPenalty: 0.11,
  }
];

export const DeepSpoVisual: React.FC = () => {
  const [activeRegimeIdx, setActiveRegimeIdx] = useState<number>(0);

  const current = REGIMES[activeRegimeIdx];

  return (
    <div className="bg-paper-card border border-paper-border rounded-lg p-5 font-sans shadow-sm">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-paper-border text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-ink-muted">FIG 2.1</span>
          <span className="text-ink-muted">·</span>
          <span className="font-medium text-ink">Sequential Allocation & Optimization</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-ink-muted">
          <span>OBJECTIVE:</span>
          <span className="text-cobalt font-medium">Sharpe Utility - Friction Penalty</span>
        </div>
      </div>

      {/* Regime Slider / Selector */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-[11px] font-mono text-ink-muted uppercase tracking-wider">
            Sequential Market Regime (LSTM Step):
          </label>
          <span className="font-mono text-[11px] text-cobalt font-semibold">
            {current.quarter}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {REGIMES.map((regime, idx) => {
            const isActive = idx === activeRegimeIdx;
            return (
              <button
                key={regime.id}
                onClick={() => setActiveRegimeIdx(idx)}
                className={`px-3 py-2 text-left rounded border transition-all text-xs ${
                  isActive
                    ? 'border-cobalt bg-cobalt-wash text-cobalt font-medium shadow-xs'
                    : 'border-paper-border bg-paper hover:bg-white text-ink-secondary hover:text-ink'
                }`}
              >
                <div className="font-mono text-[10px] text-ink-muted mb-0.5">{regime.quarter.split(' / ')[1]}</div>
                <div className="truncate font-semibold text-[11px]">{regime.regimeTitle.split(' ')[0]} {regime.regimeTitle.split(' ')[1]}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Allocation breakdown visualization */}
      <div className="bg-paper p-4 rounded border border-paper-border mb-4">
        <div className="flex items-center justify-between mb-2 text-xs">
          <span className="font-semibold text-ink">Target Portfolio Weights (w_t)</span>
          <span className="font-mono text-[11px] text-ink-muted">Total: 100%</span>
        </div>

        {/* Stacked bar visualization */}
        <div className="h-6 w-full rounded overflow-hidden flex border border-paper-border mb-3">
          {current.weights.map((item, idx) => (
            <div
              key={idx}
              className="h-full relative group transition-all duration-500 hover:opacity-90"
              style={{
                width: `${item.weight}%`,
                backgroundColor: item.color,
              }}
              title={`${item.name}: ${item.weight}%`}
            />
          ))}
        </div>

        {/* Legend & percentage values */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs pt-1">
          {current.weights.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span
                  className="w-2 h-2 rounded-xs inline-block shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-ink-secondary truncate">{item.name}</span>
              </div>
              <span className="font-mono text-[13px] font-semibold text-ink tabular-nums">
                {item.weight}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quantitative performance metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        <div className="bg-paper-subtle p-2.5 rounded border border-paper-border">
          <div className="text-[11px] font-mono text-ink-muted uppercase mb-1">Model Sharpe</div>
          <div className="font-mono text-base font-bold text-ink tabular-nums">{current.sharpeRatio}</div>
          <div className="text-[11px] text-ink-muted">vs 1.12 benchmark</div>
        </div>

        <div className="bg-paper-subtle p-2.5 rounded border border-paper-border">
          <div className="text-[11px] font-mono text-ink-muted uppercase mb-1">Annualized Return</div>
          <div className="font-mono text-base font-bold text-ink tabular-nums">{current.expectedReturn}%</div>
          <div className="text-[11px] text-ink-muted">Sequential rolling avg</div>
        </div>

        <div className="bg-paper-subtle p-2.5 rounded border border-paper-border">
          <div className="text-[11px] font-mono text-ink-muted uppercase mb-1">Portfolio Volatility</div>
          <div className="font-mono text-base font-bold text-ink tabular-nums">{current.volatility}%</div>
          <div className="text-[11px] text-ink-muted">Risk constrained</div>
        </div>

        <div className="bg-paper-subtle p-2.5 rounded border border-paper-border">
          <div className="text-[11px] font-mono text-ink-muted uppercase mb-1">Friction Cost</div>
          <div className="font-mono text-base font-bold text-ink tabular-nums">-{current.transactionCostPenalty}%</div>
          <div className="text-[11px] text-ink-muted">Turnover penalty</div>
        </div>
      </div>

      {/* Context note */}
      <div className="text-[13px] text-ink-secondary bg-paper p-3 rounded border border-paper-border flex items-start gap-2.5 leading-relaxed">
        <span className="font-mono text-cobalt font-semibold text-sm mt-0.5">ℹ</span>
        <span>
          <strong className="text-ink font-semibold">Market Observation:</strong> {current.marketContext}
        </span>
      </div>
    </div>
  );
};
