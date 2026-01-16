import React, { useState, useRef } from 'react';
import './GovernanceTab.css';

export default function GovernanceTab({ isDarkMode, sidebarCollapsed }) {
  const [hoveredMgmt, setHoveredMgmt] = useState(null);
  const [mgmtCursorActive, setMgmtCursorActive] = useState(false);
  const mgmtTimeout = useRef(null);
  const [hoveredPractice, setHoveredPractice] = useState(null);

  // Data driven content matching the Figma cards
  const management = [
    { name: 'Ahmed Al-Kuwari', role: 'Chief Executive Officer', years: '15 years experience', initials: 'AK', color: '#C7E3FF', textColor: '#0B63D6' },
    { name: 'Sarah Hassan', role: 'Chief Financial Officer', years: '12 years experience', initials: 'SH', color: '#DFF7E8', textColor: '#059669' },
    { name: 'Mohammed Rashid', role: 'Chief Operating Officer', years: '10 years experience', initials: 'MR', color: '#F3D9FF', textColor: '#7C3AED' },
    { name: 'Layla Mahmoud', role: 'Head of Legal & Compliance', years: '8 years experience', initials: 'LM', color: '#FFE9D2', textColor: '#EA580C' },
  ];

  const boardStats = [
    { label: 'Total Directors', value: '7 Members' },
    { label: 'Independent Directors', value: '5 (71%)' },
    { label: 'Executive Directors', value: '2 (29%)' },
    { label: 'Board Chair', value: 'Independent' },
  ];

  const governancePractices = [
    { title: 'Board meetings held quarterly', sub: '4 meetings conducted in 2025' },
    { title: 'Audit committee established', sub: 'Independent oversight of financial reporting' },
    { title: 'Code of conduct implemented', sub: 'All employees trained annually' },
    { title: 'Conflict of interest policy active', sub: 'Regular disclosures maintained' },
  ];

  function handleMgmtMouseMove() {
    setMgmtCursorActive(true);
    if (mgmtTimeout.current) clearTimeout(mgmtTimeout.current);
    mgmtTimeout.current = setTimeout(() => setMgmtCursorActive(false), 18000);
  }

  return (
    <div className={`em-gov-root ${isDarkMode ? 'em-app--dark' : ''} ${sidebarCollapsed ? 'em-sidebar-collapsed' : ''}`}>
      <div className="em-gov-container">
        <div className="gov-card wide management" onMouseMove={handleMgmtMouseMove}>
          <h4>Management Team</h4>
          <div className="management-grid">
            {management.map((m, i) => (
              <div 
                className={`mgmt-item ${hoveredMgmt === i ? 'hovered' : ''}`}
                key={i}
                onMouseEnter={() => setHoveredMgmt(i)}
                onMouseLeave={() => setHoveredMgmt(null)}
              >
                <div className="avatar" style={{ background: m.color, color: m.textColor }}>{m.initials}</div>
                <div className="mgmt-text">
                  <div className="mgmt-name">{m.name}</div>
                  <div className="mgmt-role">{m.role}</div>
                  <div className="mgmt-years">{m.years}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gov-card wide board-composition">
          <h4>Board Composition</h4>
          <div className="board-grid-two">
            <div className="board-left">
              <div className="stat"><div className="stat-label">Total Directors</div><div className="stat-value">7 Members</div></div>
              <div className="stat"><div className="stat-label">Executive Directors</div><div className="stat-value">2 (29%)</div></div>
            </div>
            <div className="board-right">
              <div className="stat"><div className="stat-label">Independent Directors</div><div className="stat-value">5 (71%)</div></div>
              <div className="stat"><div className="stat-label">Board Chair</div><div className="stat-value">Independent</div></div>
            </div>
          </div>
        </div>

        <div className="gov-card wide governance-practices">
          <h4>Governance Practices</h4>
          <ul className="practices-list">
            {governancePractices.map((g, i) => (
              <li 
                key={i} 
                className={`practice-item ${hoveredPractice === i ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredPractice(i)}
                onMouseLeave={() => setHoveredPractice(null)}
              >
                <div className="practice-left">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_438_11703)">
<path d="M18.1669 8.33332C18.5474 10.2011 18.2762 12.1428 17.3984 13.8348C16.5206 15.5268 15.0893 16.8667 13.3431 17.6311C11.597 18.3955 9.64154 18.5381 7.80293 18.0353C5.96433 17.5325 4.35368 16.4145 3.23958 14.8678C2.12548 13.3212 1.57529 11.4394 1.68074 9.53615C1.78619 7.63294 2.54092 5.8234 3.81906 4.4093C5.0972 2.9952 6.8215 2.06202 8.7044 1.76537C10.5873 1.46872 12.515 1.82654 14.166 2.77916" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_438_11703">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

                </div>
                <div className="practice-text">
                  <div className="practice-title">{g.title}</div>
                  <div className="practice-sub">{g.sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
