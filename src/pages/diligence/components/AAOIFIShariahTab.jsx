import React from 'react';
import './AAOIFIShariahTab.css';

export default function AAOIFIShariahTab({ isDarkMode, sidebarCollapsed }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/sample-docs/shariah-opinion.pdf';
    link.download = 'Shariah_Opinion.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProceed = () => {
    alert('Proceed to invest — implement routing as needed.');
  };

  return (
    <div className={`em-shariah-root ${isDarkMode ? 'em-shariah--dark' : ''} ${sidebarCollapsed ? 'em-shariah--wide' : ''}`}>
      <div className="em-shariah-hero card">
        <h3>AAOIFI &amp; Shariah Compliance</h3>
        <p>Crescent GreenTech SPV Ltd. has been reviewed in accordance with AAOIFI Shariah and accounting standards.</p>
      </div>

      <div className="em-shariah-grid">
        <div className="card em-shariah-card">
          <h4>Business Activity Screening</h4>
          <ul className="em-check-list">
            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1669 8.33332C18.5474 10.2011 18.2762 12.1428 17.3984 13.8348C16.5206 15.5268 15.0893 16.8667 13.3431 17.6311C11.597 18.3955 9.64154 18.5381 7.80293 18.0353C5.96433 17.5325 4.35368 16.4145 3.23958 14.8678C2.12548 13.3212 1.57529 11.4394 1.68074 9.53615C1.78619 7.63294 2.54092 5.8234 3.81906 4.4093C5.0972 2.9952 6.8215 2.06202 8.7044 1.76537C10.5873 1.46872 12.515 1.82654 14.166 2.77916" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Core business is halal</li>
            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1669 8.33332C18.5474 10.2011 18.2762 12.1428 17.3984 13.8348C16.5206 15.5268 15.0893 16.8667 13.3431 17.6311C11.597 18.3955 9.64154 18.5381 7.80293 18.0353C5.96433 17.5325 4.35368 16.4145 3.23958 14.8678C2.12548 13.3212 1.57529 11.4394 1.68074 9.53615C1.78619 7.63294 2.54092 5.8234 3.81906 4.4093C5.0972 2.9952 6.8215 2.06202 8.7044 1.76537C10.5873 1.46872 12.515 1.82654 14.166 2.77916" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
No riba-based lending</li>
            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1669 8.33332C18.5474 10.2011 18.2762 12.1428 17.3984 13.8348C16.5206 15.5268 15.0893 16.8667 13.3431 17.6311C11.597 18.3955 9.64154 18.5381 7.80293 18.0353C5.96433 17.5325 4.35368 16.4145 3.23958 14.8678C2.12548 13.3212 1.57529 11.4394 1.68074 9.53615C1.78619 7.63294 2.54092 5.8234 3.81906 4.4093C5.0972 2.9952 6.8215 2.06202 8.7044 1.76537C10.5873 1.46872 12.515 1.82654 14.166 2.77916" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
No prohibited activities</li>
          </ul>
        </div>

        <div className="card em-shariah-card">
          <h4>Financial Ratio Screening</h4>
          <div className="em-ratio-row"><span>Interest bearing debt:</span><strong>1.8% (≤ 30%)</strong></div>
          <div className="em-ratio-row"><span>Interest income:</span><strong>1.2% (≤ 5%)</strong></div>
          <div className="em-ratio-row"><span>Non-compliant income:</span><strong>0.8% (≤ 5%)</strong></div>
        </div>

        <div className="card em-shariah-card">
          <h4>Structure Validation</h4>
          <p>Wakalah + Ijarah hybrid structure with asset ownership linked to investors and profit based on actual performance.</p>
        </div>

        <div className="card em-shariah-card">
          <h4>Purification Mechanism</h4>
          <p>0.8% income subject to purification<br/>Auto-purification enabled</p>
        </div>

        <div className="card em-shariah-card em-shariah-gov">
          <h4>Shariah Governance</h4>
          <ul className="em-check-list">
            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1669 8.33332C18.5474 10.2011 18.2762 12.1428 17.3984 13.8348C16.5206 15.5268 15.0893 16.8667 13.3431 17.6311C11.597 18.3955 9.64154 18.5381 7.80293 18.0353C5.96433 17.5325 4.35368 16.4145 3.23958 14.8678C2.12548 13.3212 1.57529 11.4394 1.68074 9.53615C1.78619 7.63294 2.54092 5.8234 3.81906 4.4093C5.0972 2.9952 6.8215 2.06202 8.7044 1.76537C10.5873 1.46872 12.515 1.82654 14.166 2.77916" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Independent Shariah Scholar Appointed</li>
            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1669 8.33332C18.5474 10.2011 18.2762 12.1428 17.3984 13.8348C16.5206 15.5268 15.0893 16.8667 13.3431 17.6311C11.597 18.3955 9.64154 18.5381 7.80293 18.0353C5.96433 17.5325 4.35368 16.4145 3.23958 14.8678C2.12548 13.3212 1.57529 11.4394 1.68074 9.53615C1.78619 7.63294 2.54092 5.8234 3.81906 4.4093C5.0972 2.9952 6.8215 2.06202 8.7044 1.76537C10.5873 1.46872 12.515 1.82654 14.166 2.77916" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Quarterly Shariah Reviews</li>
            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1669 8.33332C18.5474 10.2011 18.2762 12.1428 17.3984 13.8348C16.5206 15.5268 15.0893 16.8667 13.3431 17.6311C11.597 18.3955 9.64154 18.5381 7.80293 18.0353C5.96433 17.5325 4.35368 16.4145 3.23958 14.8678C2.12548 13.3212 1.57529 11.4394 1.68074 9.53615C1.78619 7.63294 2.54092 5.8234 3.81906 4.4093C5.0972 2.9952 6.8215 2.06202 8.7044 1.76537C10.5873 1.46872 12.515 1.82654 14.166 2.77916" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Annual External Shariah Audit</li>
          </ul>
        </div>
      </div>

      <div className="em-shariah-actions">
        <button className="em-btn em-btn--ghost" onClick={handleDownload} aria-label="Download Shariah Opinion">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10V2" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66602 6.6665L7.99935 9.99984L11.3327 6.6665" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          Download Shariah Opinion
        </button>

        <button className="em-btn em-btn--primary" onClick={handleProceed} aria-label="Proceed to Invest">
          Proceed to Invest
        </button>
      </div>
    </div>
  );
}
