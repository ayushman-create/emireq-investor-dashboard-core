import React, { useState, useEffect, useRef } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './FinancialsTab.css';

export default function FinancialsTab({ isDarkMode, sidebarCollapsed }) {
  const data = [
    { year: '2021', Revenue: 2.4, EBITDA: 1.1 },
    { year: '2022', Revenue: 3.1, EBITDA: 1.4 },
    { year: '2023', Revenue: 3.8, EBITDA: 1.9 },
    { year: '2024', Revenue: 4.6, EBITDA: 2.3 },
    { year: '2025', Revenue: 5.1, EBITDA: 2.9 },
  ];

  const incomeRows = [
    { metric: 'Total Revenue', actual: '$4.20M', projected: '$6.85M', yoy: '+63.1%' },
    { metric: 'EBITDA (Adjusted)', actual: '$1.20M', projected: '$2.44M', yoy: '+117.8%' },
    { metric: 'Net Profit Margin', actual: '18.4%', projected: '22.1%', yoy: '+3.7bps' },
    { metric: 'Operating Cash Flow', actual: '$0.88M', projected: '$1.92M', yoy: '+118.1%' },
  ];

  function CustomTooltip({ active, payload, label }) {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className="ftooltip">
        <div className="ftooltip-year">{label}</div>
        <div className="ftooltip-row"><span className="dot rev"/>Revenue: <strong>{payload.find(p => p.dataKey === 'Revenue')?.value}M</strong></div>
        <div className="ftooltip-row"><span className="dot ebt"/>EBITDA: <strong>{payload.find(p => p.dataKey === 'EBITDA')?.value}M</strong></div>
      </div>
    );
  }

  const [showRevenue, setShowRevenue] = useState(true);
  const [showEbitda, setShowEbitda] = useState(true);
  // Confidence card activity
  const [confCursorActive, setConfCursorActive] = useState(false);
  const [confVisible, setConfVisible] = useState(true);
  const confTimeout = useRef(null);
  // Ratios card activity
  const [ratiosCursorActive, setRatiosCursorActive] = useState(false);
  const ratiosTimeout = useRef(null);
  const [hoveredRatio, setHoveredRatio] = useState(null);

  useEffect(() => {
    function handleVis() {
      setConfVisible(!document.hidden);
    }
    handleVis();
    document.addEventListener('visibilitychange', handleVis);
    return () => document.removeEventListener('visibilitychange', handleVis);
  }, []);

  function handleConfMouseMove() {
    setConfCursorActive(true);
    if (confTimeout.current) clearTimeout(confTimeout.current);
    confTimeout.current = setTimeout(() => setConfCursorActive(false), 18000);
  }

  function handleRatiosMouseMove() {
    setRatiosCursorActive(true);
    if (ratiosTimeout.current) clearTimeout(ratiosTimeout.current);
    ratiosTimeout.current = setTimeout(() => setRatiosCursorActive(false), 18000);
  }

  return (
    <div className={`em-financials-root ${isDarkMode ? 'em-app--dark' : ''} ${sidebarCollapsed ? 'em-sidebar-collapsed' : ''}`}>
      <div className="em-financials-container">
        <div className="em-financials-left">
          <div className="em-financials-card em-financials-chart-card" role="region" aria-label="Revenue and EBITDA trend">
            <h3 className="em-financials-title">Revenue & EBITDA Trend</h3>
            <div className="em-financials-chart">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 20 }} barGap={8}>
                  <CartesianGrid vertical={false} strokeDasharray="0" stroke="rgba(0,0,0,0.04)" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fill: '#0F1724', fontSize: 14, fontWeight: 500 }} 
                    axisLine={false}
                    tickLine={false}
                    dy={10}
                  />
                  <YAxis 
                    tick={{ fill: '#6B7280', fontSize: 12 }} 
                    axisLine={false}
                    tickLine={false}
                    dx={-10}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
                  <Bar 
                    dataKey="Revenue" 
                    className={`bar revenue-bar ${!showRevenue ? 'hidden' : ''}`} 
                    fill="url(#gradRevenue)" 
                    radius={[6,6,0,0]} 
                    barSize={50} 
                    hide={!showRevenue}
                  />
                  <Bar 
                    dataKey="EBITDA" 
                    className={`bar ebitda-bar ${!showEbitda ? 'hidden' : ''}`} 
                    fill="url(#gradEbitda)" 
                    radius={[6,6,0,0]} 
                    barSize={50} 
                    hide={!showEbitda}
                  />
                  <defs>
                    <linearGradient id="gradRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="1" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="gradEbitda" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9333EA" stopOpacity="1" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="em-financials-legend" role="list" aria-label="Chart legend">
              <div className={`legend-item ${!showRevenue ? 'legend-disabled' : ''}`} role="listitem" onClick={() => setShowRevenue(s => !s)}>
                <svg width="16" height="16" viewBox="0 0 16 16" className="legend-svg">
                  <defs>
                    <linearGradient id="lgRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <rect width="16" height="16" rx="3" fill="url(#lgRev)" />
                </svg>
                <span className="legend-text">Revenue</span>
              </div>
              <div className={`legend-item ${!showEbitda ? 'legend-disabled' : ''}`} role="listitem" onClick={() => setShowEbitda(s => !s)}>
                <svg width="16" height="16" viewBox="0 0 16 16" className="legend-svg">
                  <defs>
                    <linearGradient id="lgEbt" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9333EA" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <rect width="16" height="16" rx="3" fill="url(#lgEbt)" />
                </svg>
                <span className="legend-text">EBITDA</span>
              </div>
            </div>
          </div>

          <div className="em-financials-card em-income-statement">
            <h3 className="em-financials-title">Income Statement
              <span className="em-info-icon" aria-label="Information" tabIndex={0}>
                <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden>
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
                </svg>
              </span>
            </h3>
            <div className="income-block">
              <table className="income-table">
              <thead>
                <tr>
                  <th>METRIC</th>
                  <th>FY-1 (ACTUAL)</th>
                  <th>FY (PROJECTED)</th>
                  <th>YOY GROWTH</th>
                  <th>TREND</th>
                </tr>
              </thead>
              <tbody>
                {incomeRows.map((r) => (
                  <tr key={r.metric} className="income-row">
                    <td>{r.metric}</td>
                    <td className="mono">{r.actual}</td>
                    <td className="mono">{r.projected}</td>
                    <td className="yoy positive">{r.yoy}</td>
                    <td className="trend">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden focusable="false">
                        <path d="M16 7H22V13" stroke="#00A63E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="#00A63E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
              <div className="income-foot">Market data is updated in real-time. Prices are for reference only and may vary across exchanges.</div>
            </div>
          </div>
        </div>

        <aside className="em-financials-right">
          <div className="em-financials-card confidence-card" onMouseMove={handleConfMouseMove}>
            <h4 className="conf-title">Investment Confidence</h4>

            <div className="conf-meta-row">
              <div className="conf-label">Due Diligence Score</div>
              <div className="conf-score-display">94%</div>
            </div>

            <div className="conf-progress">
              <div className="conf-track">
                <div className="conf-fill" style={{ width: '94%' }} />
              </div>
            </div>

            <p className="conf-note">Score based on audited financials, legal standing, and market competitive analysis.</p>
          </div>

          <div className="em-financials-card ratios-card" onMouseMove={handleRatiosMouseMove}>
            <h4>Key Financial Ratios</h4>
            <ul className="ratios-list">
              <li onMouseEnter={() => setHoveredRatio(0)} onMouseLeave={() => setHoveredRatio(null)} className={hoveredRatio === 0 ? 'hovered' : ''}>
                <div className="ratio-row">
                  <span>Gross Margin</span>
                  <strong>45.3%</strong>
                </div>
                <small>Industry avg: 42%</small>
              </li>
              <li onMouseEnter={() => setHoveredRatio(1)} onMouseLeave={() => setHoveredRatio(null)} className={hoveredRatio === 1 ? 'hovered' : ''}>
                <div className="ratio-row">
                  <span>EBITDA Margin</span>
                  <strong>28.7%</strong>
                </div>
                <small>Industry avg: 25%</small>
              </li>
              <li onMouseEnter={() => setHoveredRatio(2)} onMouseLeave={() => setHoveredRatio(null)} className={hoveredRatio === 2 ? 'hovered' : ''}>
                <div className="ratio-row">
                  <span>Net Margin</span>
                  <strong>18.2%</strong>
                </div>
                <small>Industry avg: 15%</small>
              </li>
              <li onMouseEnter={() => setHoveredRatio(3)} onMouseLeave={() => setHoveredRatio(null)} className={hoveredRatio === 3 ? 'hovered' : ''}>
                <div className="ratio-row">
                  <span>ROE</span>
                  <strong>24.6%</strong>
                </div>
                <small>Strong returns</small>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
