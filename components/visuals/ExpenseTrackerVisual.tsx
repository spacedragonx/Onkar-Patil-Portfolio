import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface Transaction {
  id: string;
  rawDate: string;
  rawMerchant: string;
  normalizedCategory: string;
  amount: number;
  type: 'debit' | 'credit';
  status: 'valid' | 'duplicate_flagged';
  hashSignature: string;
}

const SAMPLE_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-01',
    rawDate: '2026-10-18',
    rawMerchant: 'GITHUB *SPONSORS / API',
    normalizedCategory: 'Developer Infrastructure',
    amount: -24.00,
    type: 'debit',
    status: 'valid',
    hashSignature: '0x8f2a...c4b1',
  },
  {
    id: 'tx-02',
    rawDate: '2026-10-18',
    rawMerchant: 'GITHUB *SPONSORS / API',
    normalizedCategory: 'Developer Infrastructure',
    amount: -24.00,
    type: 'debit',
    status: 'duplicate_flagged',
    hashSignature: '0x8f2a...c4b1', // Identical hash caught
  },
  {
    id: 'tx-03',
    rawDate: '2026-10-16',
    rawMerchant: 'AWS EMEA CLOUD SVCS',
    normalizedCategory: 'Cloud Hosting & Storage',
    amount: -48.75,
    type: 'debit',
    status: 'valid',
    hashSignature: '0x19d3...77fa',
  },
  {
    id: 'tx-04',
    rawDate: '2026-10-14',
    rawMerchant: 'UNIV RESEARCH STIPEND ACH',
    normalizedCategory: 'Direct Inflow / Stipend',
    amount: 650.00,
    type: 'credit',
    status: 'valid',
    hashSignature: '0x6e90...bb12',
  },
  {
    id: 'tx-05',
    rawDate: '2026-10-11',
    rawMerchant: 'METRO RAIL TRANSIT TAP',
    normalizedCategory: 'Transit & Transportation',
    amount: -18.50,
    type: 'debit',
    status: 'valid',
    hashSignature: '0x43b2...a891',
  }
];

const CATEGORY_TOTALS = [
  { name: 'Developer Infrastructure', amount: 48.00, pct: 28, budget: 60.00 },
  { name: 'Cloud Hosting & Storage', amount: 48.75, pct: 29, budget: 80.00 },
  { name: 'Transit & Transportation', amount: 52.50, pct: 31, budget: 70.00 },
  { name: 'Books & Research Subscriptions', amount: 20.00, pct: 12, budget: 35.00 },
];

export const ExpenseTrackerVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'parser' | 'breakdown'>('parser');
  const [filterDuplicates, setFilterDuplicates] = useState<boolean>(true);

  const displayedTransactions = filterDuplicates
    ? SAMPLE_TRANSACTIONS.filter(t => t.status === 'valid')
    : SAMPLE_TRANSACTIONS;

  const duplicatesCount = SAMPLE_TRANSACTIONS.filter(t => t.status === 'duplicate_flagged').length;

  return (
    <div className="bg-paper-card border border-paper-border rounded-lg p-5 font-sans shadow-sm">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-paper-border text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-ink-muted">FIG 3.1</span>
          <span className="text-ink-muted">·</span>
          <span className="font-medium text-ink">Statement Ingestion & Ledger Pipeline</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-paper border border-paper-border rounded p-0.5">
            <button
              onClick={() => setActiveTab('parser')}
              className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                activeTab === 'parser'
                  ? 'bg-white text-cobalt font-semibold shadow-xs'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              Statement Preview
            </button>
            <button
              onClick={() => setActiveTab('breakdown')}
              className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                activeTab === 'breakdown'
                  ? 'bg-white text-cobalt font-semibold shadow-xs'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              Category Allocation
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'parser' ? (
        <div>
          {/* Parser status controls */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-ink-muted">
                INGESTION: <strong className="text-ink">Oct_Statement.csv</strong>
              </span>
              <span className="text-ink-muted">·</span>
              <span className="font-mono text-[11px] text-ink-secondary">
                {displayedTransactions.length} records shown
              </span>
            </div>

            <button
              onClick={() => setFilterDuplicates(!filterDuplicates)}
              className={`px-2.5 py-1 text-[11px] font-mono rounded border transition-colors flex items-center gap-1.5 ${
                filterDuplicates
                  ? 'border-emerald-600/30 bg-emerald-50 text-emerald-800'
                  : 'border-amber-600/30 bg-amber-50 text-amber-800'
              }`}
            >
              <ShieldCheck size={13} />
              <span>
                {filterDuplicates
                  ? `Duplicate Filter: ON (${duplicatesCount} suppressed)`
                  : 'Duplicate Filter: OFF (Show all raw)'}
              </span>
            </button>
          </div>

          {/* Transaction Ledger Table */}
          <div className="overflow-x-auto border border-paper-border rounded bg-paper">
            <table className="w-full text-left text-xs">
              <thead className="bg-paper-subtle border-b border-paper-border font-mono text-[10px] text-ink-muted uppercase">
                <tr>
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Raw Merchant Input</th>
                  <th className="py-2 px-3">Normalized Category</th>
                  <th className="py-2 px-3">Hash Signature</th>
                  <th className="py-2 px-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-border font-mono text-[11px]">
                {displayedTransactions.map((tx) => {
                  const isDuplicate = tx.status === 'duplicate_flagged';
                  return (
                    <tr
                      key={tx.id}
                      className={isDuplicate ? 'bg-amber-50/70 text-amber-900' : 'hover:bg-white'}
                    >
                      <td className="py-2 px-3 text-ink-muted tabular-nums whitespace-nowrap">
                        {tx.rawDate}
                      </td>
                      <td className="py-2 px-3 font-sans font-medium text-ink truncate max-w-[150px]">
                        {tx.rawMerchant}
                      </td>
                      <td className="py-2 px-3 font-sans text-ink-secondary">
                        <span className="text-[11px]">{tx.normalizedCategory}</span>
                      </td>
                      <td className="py-2 px-3 text-ink-muted text-[10px] tabular-nums whitespace-nowrap">
                        {tx.hashSignature}
                        {isDuplicate && (
                          <span className="ml-1 text-[9px] text-amber-700 bg-amber-100 px-1 py-0.5 rounded">
                            DUPLICATE HASH
                          </span>
                        )}
                      </td>
                      <td
                        className={`py-2 px-3 text-right font-semibold tabular-nums whitespace-nowrap ${
                          tx.type === 'credit' ? 'text-emerald-700' : 'text-ink'
                        }`}
                      >
                        {tx.type === 'credit' ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Engine Note */}
          <div className="mt-3 text-[11px] text-ink-muted flex items-center justify-between font-mono">
            <span>DETERMINISTIC FINGERPRINT: SHA-256(date + merchant + amount)</span>
            <span className="text-cobalt">Zero Duplicate Ingestion</span>
          </div>
        </div>
      ) : (
        /* Breakdown view */
        <div className="space-y-3">
          <div className="text-xs font-semibold text-ink mb-1">
            Budget Burn & Category Ledger (Monthly Allocation)
          </div>

          {CATEGORY_TOTALS.map((cat, idx) => (
            <div key={idx} className="bg-paper p-3 rounded border border-paper-border text-xs">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-ink">{cat.name}</span>
                <span className="font-mono text-ink tabular-nums font-semibold">
                  ${cat.amount.toFixed(2)}{' '}
                  <span className="text-ink-muted text-[10px] font-normal">/ ${cat.budget.toFixed(2)} limit</span>
                </span>
              </div>
              <div className="h-1.5 bg-paper-border rounded-full overflow-hidden mb-1">
                <div
                  className="h-full bg-cobalt rounded-full transition-all duration-500"
                  style={{ width: `${(cat.amount / cat.budget) * 100}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted">
                <span>{( (cat.amount / cat.budget) * 100 ).toFixed(0)}% utilized</span>
                <span>${(cat.budget - cat.amount).toFixed(2)} remaining</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
