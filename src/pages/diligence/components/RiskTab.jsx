import React from 'react';
import './RiskTab.css';

export default function RiskTab({ isDarkMode, sidebarCollapsed }) {
  const risks = [
    {
      id: 'regulatory',
      title: 'Regulatory Risk',
      level: 'Low',
      desc: 'The investment structure complies with all UAE regulatory requirements and has obtained necessary approvals from relevant authorities. Regular compliance audits are conducted.',
      mitigations: [
        'Ongoing regulatory monitoring and compliance updates',
        'Legal counsel retained for regulatory matters',
        'Annual third-party compliance verification',
      ],
    },
    {
      id: 'financial',
      title: 'Financial Risk',
      level: 'Medium',
      desc: 'Moderate exposure to interest rate fluctuations, currency exchange risks, and potential cash flow variations due to project payment cycles and seasonal energy demand.',
      mitigations: [
        'Diversified revenue streams across multiple contracts',
        'Hedging strategies for currency exposure',
        'Maintained cash reserves for 6+ months operations',
      ],
    },
    {
      id: 'market',
      title: 'Market Risk',
      level: 'Medium',
      desc: 'Energy price volatility, evolving competitive landscape, and potential changes in government renewable energy policies could impact revenue projections.',
      mitigations: [
        'Long-term fixed-price power purchase agreements (15+ years)',
        'Strong government support for renewable energy targets',
        'Established market position with proven technology',
      ],
    },
    {
      id: 'operational',
      title: 'Operational Risk',
      level: 'Low',
      desc: 'Well-established operational procedures with experienced management team. Equipment reliability is high with proven solar technology and comprehensive maintenance protocols.',
      mitigations: [
        '24/7 monitoring systems with predictive maintenance',
        'Equipment warranties and insurance coverage',
        'Experienced technical team with strong track record',
      ],
    },
  ];

  const getRiskIcon = (riskId) => {
    if (riskId === 'regulatory') {
      return (
       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_436_8253)">
<path d="M13.3337 8.66664C13.3337 12 11.0003 13.6666 8.22699 14.6333C8.08177 14.6825 7.92402 14.6802 7.78033 14.6266C5.00033 13.6666 2.66699 12 2.66699 8.66664V3.99997C2.66699 3.82316 2.73723 3.65359 2.86225 3.52857C2.98728 3.40355 3.15685 3.33331 3.33366 3.33331C4.66699 3.33331 6.33366 2.53331 7.49366 1.51997C7.6349 1.39931 7.81456 1.33301 8.00033 1.33301C8.18609 1.33301 8.36576 1.39931 8.50699 1.51997C9.67366 2.53997 11.3337 3.33331 12.667 3.33331C12.8438 3.33331 13.0134 3.40355 13.1384 3.52857C13.2634 3.65359 13.3337 3.82316 13.3337 3.99997V8.66664Z" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_436_8253">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

      );
    }
    if (riskId === 'financial') {
      return (
       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_436_8291)">
<path d="M8 1.33325V14.6666" stroke="#E17100" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3333 3.33325H6.33333C5.71449 3.33325 5.121 3.57908 4.68342 4.01667C4.24583 4.45425 4 5.04775 4 5.66659C4 6.28542 4.24583 6.87892 4.68342 7.3165C5.121 7.75409 5.71449 7.99992 6.33333 7.99992H9.66667C10.2855 7.99992 10.879 8.24575 11.3166 8.68334C11.7542 9.12092 12 9.71441 12 10.3333C12 10.9521 11.7542 11.5456 11.3166 11.9832C10.879 12.4208 10.2855 12.6666 9.66667 12.6666H4" stroke="#E17100" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_436_8291">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

      );
    }
    if (riskId === 'market') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_436_8330)">
<path d="M10.667 4.66675H14.667V8.66675" stroke="#E17100" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6663 4.66675L8.99967 10.3334L5.66634 7.00008L1.33301 11.3334" stroke="#E17100" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_436_8330">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

      );
    }
    if (riskId === 'operational') {
      return (
   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_436_8368)">
<path d="M14.6663 8.00016H13.013C12.7217 7.99954 12.4381 8.09437 12.2058 8.27014C11.9734 8.44592 11.805 8.69296 11.7263 8.9735L10.1597 14.5468C10.1496 14.5814 10.1285 14.6119 10.0997 14.6335C10.0708 14.6551 10.0357 14.6668 9.99967 14.6668C9.96361 14.6668 9.92852 14.6551 9.89967 14.6335C9.87082 14.6119 9.84977 14.5814 9.83967 14.5468L6.15967 1.4535C6.14958 1.41888 6.12852 1.38847 6.09967 1.36683C6.07082 1.34519 6.03574 1.3335 5.99967 1.3335C5.96361 1.3335 5.92852 1.34519 5.89967 1.36683C5.87083 1.38847 5.84977 1.41888 5.83967 1.4535L4.27301 7.02683C4.19465 7.30627 4.02726 7.55251 3.79625 7.72817C3.56524 7.90384 3.28322 7.99933 2.99301 8.00016H1.33301" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_436_8368">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

      );
    }
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="transparent" />
      </svg>
    );
  };

  return (
    <div className={`em-risk-root ${isDarkMode ? 'em-app--dark' : ''} ${sidebarCollapsed ? 'em-sidebar-collapsed' : ''}`}>
      <div className="em-risk-container">
        <div className="em-risk-left">
          <h3 className="em-risk-title">Detailed Risk Analysis</h3>
          {risks.map((r) => (
            <div className="em-risk-card" key={r.id}>
              <div className="em-risk-card-head">
                <div className="em-risk-icon" aria-hidden>
                  {getRiskIcon(r.id)}
                </div>
                <div className="em-risk-head-text">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ margin: 0 }}>{r.title}</h4>
                    <p className={`em-risk-level ${r.level === 'Low' ? 'risk-low' : r.level === 'Medium' ? 'risk-medium' : ''}`}>{r.level}</p>
                  </div>
                </div>
              </div>
              <p className="em-risk-desc">{r.desc}</p>

              <div className="em-risk-mitigations">
                <div className="mitigations-box">
                  {r.mitigations.map((m, i) => (
                    <div className="mitigation" key={i}>
                      <span className="check-icon" aria-hidden>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_436_8309)">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71427 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke={r.level === 'Medium' ? '#E17100' : '#10B981'} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33341L8 9.33341L14.6667 2.66675" stroke={r.level === 'Medium' ? '#E17100' : '#10B981'} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_436_8309">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

                      </span>
                      <span className="mitigation-text">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="em-risk-right">
          <div className="em-risk-card summary-card" tabIndex={0} role="group" aria-label="Overall Risk Rating">
            <div className="summary-title">Overall Risk Rating</div>
            <div className="risk-score-wrap">
              <div className="risk-score-circle">
                <div className="score">B+</div>
              </div>
              <div className="risk-subtitle">Low–Medium Risk</div>
            </div>

            <div className="summary-divider" />

            <div className="summary-meta">
              <div className="meta-row">
                <span className="meta-label">Risk Score</span>
                <span className="meta-value">35/100</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Category</span>
                <span className="meta-value">Investment Grade</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Last Review</span>
                <span className="meta-value">Dec 2025</span>
              </div>
            </div>
          </div>

          <div className="em-risk-card monitor-card" role="region" aria-label="Active Monitoring">
            <h4>Active Monitoring</h4>
            <ul className="monitor-list" role="list">
              <li className="monitor-item" tabIndex={0} role="button" aria-label="Regulatory Watch: UAE energy policy updates">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.2002 12.5476C2.11686 12.3231 2.11686 12.0761 2.2002 11.8516C3.0119 9.88343 4.38972 8.20062 6.15897 7.01648C7.92823 5.83234 10.0092 5.2002 12.1382 5.2002C14.2672 5.2002 16.3482 5.83234 18.1174 7.01648C19.8867 8.20062 21.2645 9.88343 22.0762 11.8516C22.1595 12.0761 22.1595 12.3231 22.0762 12.5476C21.2645 14.5157 19.8867 16.1985 18.1174 17.3827C16.3482 18.5668 14.2672 19.199 12.1382 19.199C10.0092 19.199 7.92823 18.5668 6.15897 17.3827C4.38972 16.1985 3.0119 14.5157 2.2002 12.5476Z" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1387 15.1992C13.7955 15.1992 15.1387 13.8561 15.1387 12.1992C15.1387 10.5424 13.7955 9.19922 12.1387 9.19922C10.4818 9.19922 9.13867 10.5424 9.13867 12.1992C9.13867 13.8561 10.4818 15.1992 12.1387 15.1992Z" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <div className="monitor-text">
                  <strong>Regulatory Watch</strong>
                  <small>UAE energy policy updates</small>
                </div>
              </li>

              <li className="monitor-item" tabIndex={0} role="button" aria-label="Market Alerts: Energy price tracking">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9521 19.4128C11.0926 19.6561 11.2946 19.858 11.5378 19.9984C11.781 20.1389 12.0569 20.2128 12.3378 20.2128C12.6186 20.2128 12.8945 20.1389 13.1377 19.9984C13.3809 19.858 13.5829 19.6561 13.7234 19.4128" stroke="#155DFC" stroke-width="1.60001" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.34671 14.8737C5.2422 14.9883 5.17323 15.1307 5.1482 15.2838C5.12316 15.4368 5.14313 15.5938 5.20568 15.7357C5.26823 15.8775 5.37066 15.9982 5.50052 16.0829C5.63037 16.1677 5.78206 16.2128 5.93711 16.2129H18.7372C18.8922 16.213 19.0439 16.168 19.1739 16.0834C19.3038 15.9989 19.4064 15.8783 19.4691 15.7366C19.5318 15.5948 19.552 15.4378 19.5271 15.2848C19.5023 15.1317 19.4335 14.9892 19.3292 14.8745C18.2652 13.7777 17.1372 12.6121 17.1372 9.01291C17.1372 7.73987 16.6314 6.51896 15.7313 5.61878C14.8311 4.71861 13.6102 4.21289 12.3371 4.21289C11.0641 4.21289 9.84319 4.71861 8.94302 5.61878C8.04284 6.51896 7.53712 7.73987 7.53712 9.01291C7.53712 12.6121 6.40832 13.7777 5.34671 14.8737Z" stroke="#155DFC" stroke-width="1.60001" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <div className="monitor-text">
                  <strong>Market Alerts</strong>
                  <small>Energy price tracking</small>
                </div>
              </li>

              <li className="monitor-item" tabIndex={0} role="button" aria-label="Quarterly Review: Next Mar 2026">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1377 20.2256C16.556 20.2256 20.1377 16.6439 20.1377 12.2256C20.1377 7.80731 16.556 4.22559 12.1377 4.22559C7.71942 4.22559 4.1377 7.80731 4.1377 12.2256C4.1377 16.6439 7.71942 20.2256 12.1377 20.2256Z" stroke="#155DFC" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1387 7.42529V12.2253L15.3387 13.8253" stroke="#155DFC" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <div className="monitor-text">
                  <strong>Quarterly Review</strong>
                  <small>Next: Mar 2026</small>
                </div>
              </li>
            </ul>
          </div>

          <div className="em-risk-card trend-card" tabIndex={0} role="region" aria-label="Risk Trend">
            <h4><span className="trend-icon" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_436_8464)">
<path d="M10.667 11.3333H14.667V7.33325" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6663 11.3334L8.99967 5.66675L5.66634 9.00008L1.33301 4.66675" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_436_8464">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

            </span>Risk Trend</h4>
            <ul className="trend-list">
              <li className="trend-item"><span className="t-check" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_436_8471)">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71427 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33317L8 9.33317L14.6667 2.6665" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_436_8471">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

              </span><span>No critical risk alerts</span></li>
              <li className="trend-item"><span className="t-check" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_436_8471)">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71427 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33317L8 9.33317L14.6667 2.6665" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_436_8471">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

              </span><span>Risk profile improving over 12 months</span></li>
              <li className="trend-item"><span className="t-check" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_436_8471)">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71427 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33317L8 9.33317L14.6667 2.6665" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_436_8471">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

              </span><span>All mitigation plans active</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
