import React from 'react';
import './LegalTab.css';

export default function LegalTab({ isDarkMode, sidebarCollapsed }) {
  const complianceItems = [
    { title: 'Entity registration verified', subtitle: 'Verified with DIFC Registrar' },
    { title: 'No material litigation', subtitle: 'No pending legal disputes' },
    { title: 'UBO & sanctions screening cleared', subtitle: 'All beneficial owners identified and screened' },
    { title: 'Operating licenses current', subtitle: 'All required licenses valid' },
    { title: 'Good standing certificate obtained', subtitle: 'Current as of December 2025' },
  ];

  return (
    <div className={`em-legal-root ${isDarkMode ? 'em-app--dark' : ''} ${sidebarCollapsed ? 'em-sidebar-collapsed' : ''}`}>
      <div className="em-legal-container">
        <div className="em-legal-left">
          <div className="em-legal-card entity-card">
            <h3 className="entity-title">Entity Information</h3>
            <div className="entity-grid">
              <div className="entity-col">
                <div className="entity-row"><div className="label">Legal Entity</div><div className="value">Crescent GreenTech SPV Ltd.</div></div>
                <div className="entity-row"><div className="label">Jurisdiction</div><div className="value">DIFC, Dubai</div></div>
              </div>
              <div className="entity-col">
                <div className="entity-row"><div className="label">Registration No.</div><div className="value">CL-4582-2020</div></div>
                <div className="entity-row"><div className="label">Registration Date</div><div className="value">March 15, 2020</div></div>
              </div>
            </div>
          </div>

          <div className="em-legal-card compliance-card">
            <h3 className="entity-title">Compliance Verification</h3>
            <ul className="compliance-list">
              {complianceItems.map((it, idx) => (
                <li className="compliance-item" key={idx}>
                  <div className="check-icon" aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1678 8.33332C18.5484 10.2011 18.2772 12.1428 17.3994 13.8348C16.5216 15.5268 15.0902 16.8667 13.3441 17.6311C11.5979 18.3955 9.64252 18.5381 7.80391 18.0353C5.9653 17.5325 4.35465 16.4145 3.24056 14.8678C2.12646 13.3212 1.57626 11.4394 1.68171 9.53615C1.78717 7.63294 2.54189 5.8234 3.82004 4.4093C5.09818 2.9952 6.82248 2.06202 8.70538 1.76537C10.5883 1.46872 12.516 1.82654 14.167 2.77916" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </div>
                  <div className="compliance-text">
                    <div className="compliance-title">{it.title}</div>
                    <div className="compliance-sub">{it.subtitle}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column removed to match Figma (no right content) */}
      </div>
    </div>
  );
}
