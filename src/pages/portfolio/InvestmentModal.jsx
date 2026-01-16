import { useEffect, useState } from "react";
import "./InvestmentModal.css";

export default function InvestmentModal({ investment, onClose }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleCopyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1500);
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleDownloadReport = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // Create a simple text report
      const reportContent = `
Investment Report - ${investment.name}
======================================

Investment Details:
- Invested Amount: ${formatCurrency(investment.invested)}
- Current Value: ${formatCurrency(investment.currentValue)}
- ROI: ${investment.roi}%
- Gain/Loss: ${formatCurrency(gainLoss)}

Additional Information:
- Sector: ${investment.sector}
- Region: ${investment.region}
- Stage: ${investment.stage}
- Investment Date: March 15, 2024
- Status: Active

Generated on: ${new Date().toLocaleDateString()}
      `;
      
      const blob = new Blob([reportContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${investment.name.replace(/\s+/g, '_')}_Report.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setIsDownloading(false);
    }, 500);
  };

  const gainLoss = investment.currentValue - investment.invested;
  const isPositive = gainLoss >= 0;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{investment.name}</h2>
          <p className="modal-subtitle">Investment details and performance metrics</p>
        </div>

        <div className="modal-metrics">
          <div 
            className={`modal-metric-card ${copiedField === 'invested' ? 'copied' : ''}`}
            onClick={() => handleCopyToClipboard(formatCurrency(investment.invested), 'invested')}
            title="Click to copy"
          >
            <p className="modal-metric-label">Invested Amount</p>
            <h3 className="modal-metric-value">{formatCurrency(investment.invested)}</h3>
          </div>
          <div 
            className={`modal-metric-card ${copiedField === 'current' ? 'copied' : ''}`}
            onClick={() => handleCopyToClipboard(formatCurrency(investment.currentValue), 'current')}
            title="Click to copy"
          >
            <p className="modal-metric-label">Current Value</p>
            <h3 className="modal-metric-value">{formatCurrency(investment.currentValue)}</h3>
          </div>
          <div 
            className={`modal-metric-card ${copiedField === 'roi' ? 'copied' : ''}`}
            onClick={() => handleCopyToClipboard(`${investment.roi > 0 ? '+' : ''}${investment.roi}%`, 'roi')}
            title="Click to copy"
          >
            <p className="modal-metric-label">ROI</p>
            <div className="modal-metric-value-with-icon">
              {investment.roi > 0 ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83337 5.83333H14.1667V14.1667" stroke="#00B031" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83337 14.1667L14.1667 5.83333" stroke="#00B031" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83337 14.1667H14.1667V5.83333" stroke="#EF4444" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83337 5.83333L14.1667 14.1667" stroke="#EF4444" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <span className={`modal-metric-value ${investment.roi > 0 ? 'positive' : 'negative'}`}>
                {investment.roi > 0 ? '+' : '-'}{Math.abs(investment.roi)}%
              </span>
            </div>
          </div>
          <div 
            className={`modal-metric-card ${copiedField === 'gain' ? 'copied' : ''}`}
            onClick={() => handleCopyToClipboard(formatCurrency(gainLoss), 'gain')}
            title="Click to copy"
          >
            <p className="modal-metric-label">Gain/Loss</p>
            <h3 className={`modal-metric-value ${isPositive ? 'positive' : 'negative'}`}>
              {formatCurrency(Math.abs(gainLoss))}
            </h3>
          </div>
        </div>

        <div className="modal-details">
          <div className="modal-detail-item">
            <span className="modal-detail-label">Sector</span>
            <span className="modal-detail-value">{investment.sector}</span>
          </div>
          <div className="modal-detail-item">
            <span className="modal-detail-label">Region</span>
            <span className="modal-detail-value">{investment.region}</span>
          </div>
          <div className="modal-detail-item">
            <span className="modal-detail-label">Stage</span>
            <span className="modal-detail-badge">{investment.stage}</span>
          </div>
          <div className="modal-detail-item">
            <span className="modal-detail-label">Investment Date</span>
            <span className="modal-detail-value">March 15, 2024</span>
          </div>
          <div className="modal-detail-item">
            <span className="modal-detail-label">Status</span>
            <span className="modal-detail-badge active">Active</span>
          </div>
        </div>

        <div className="modal-actions">
          <button className="modal-btn modal-btn-secondary" onClick={onClose}>
            Close
          </button>
          <button 
            className="modal-btn modal-btn-primary" 
            onClick={handleDownloadReport}
            disabled={isDownloading}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10V2" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.66663 6.66669L7.99996 10L11.3333 6.66669" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            {isDownloading ? 'Downloading...' : 'Download Report'}
          </button>
        </div>
      </div>
    </div>
  );
}

