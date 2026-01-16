import { useState } from "react";

export default function Financials() {
  const [isEditing, setIsEditing] = useState(true); // Start in edit mode
  const [financialData, setFinancialData] = useState({
    totalFunds: "",
    totalInvested: "",
    availableBalance: "",
    portfolioValue: "",
  });

  const [editFormData, setEditFormData] = useState({
    totalFunds: "",
    totalInvested: "",
    availableBalance: "",
    portfolioValue: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Remove all non-numeric characters (commas, spaces, etc.)
    const numericValue = value.replace(/[^\d]/g, '');
    
    if (name === "totalFunds" || name === "totalInvested") {
      setEditFormData((prev) => {
        const updated = { ...prev, [name]: numericValue };
        // Auto-calculate Available Balance
        const totalFunds = parseFloat(updated.totalFunds) || 0;
        const totalInvested = parseFloat(updated.totalInvested) || 0;
        const availableBalance = totalFunds - totalInvested;
        updated.availableBalance = availableBalance > 0 ? availableBalance.toString() : "";
        return updated;
      });
    } else {
      setEditFormData((prev) => ({ ...prev, [name]: numericValue }));
    }
  };

  const handleSaveChanges = () => {
    setFinancialData(editFormData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditFormData(financialData);
    setIsEditing(true);
  };

  const formatCurrency = (value) => {
    if (!value || value === "") return "$0";
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "$0";
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numValue);
  };

  const formatNumber = (value) => {
    if (!value || value === "") return "";
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "";
    return numValue.toLocaleString('en-US');
  };

  const getCurrentData = () => isEditing ? editFormData : financialData;
  const currentData = getCurrentData();
  
  const totalFunds = parseFloat(currentData.totalFunds) || 0;
  const totalInvested = parseFloat(currentData.totalInvested) || 0;
  const availableBalance = isEditing 
    ? (totalFunds - totalInvested) 
    : (parseFloat(currentData.availableBalance) || 0);
  const portfolioValue = parseFloat(currentData.portfolioValue) || 0;
  
  const investmentCapacity = totalFunds > 0 
    ? ((availableBalance / totalFunds) * 100).toFixed(1) 
    : "0";

  return (
    <div className="financials-content">
      {/* Financial Overview */}
      <div className="profile-section">
        <div className="profile-section-header">
          <div>
            <h3 className="profile-section-title">Financial Overview</h3>
            <p className="profile-section-subtitle">Investment capacity and portfolio details</p>
          </div>
          {isEditing ? (
            <button className="profile-save-button" onClick={handleSaveChanges}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1333 2C10.485 2.00501 10.8205 2.14878 11.0667 2.4L13.6 4.93333C13.8512 5.17951 13.995 5.51497 14 5.86667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.1333Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3334 14V9.33329C11.3334 9.15648 11.2631 8.98691 11.1381 8.86189C11.0131 8.73686 10.8435 8.66663 10.6667 8.66663H5.33335C5.15654 8.66663 4.98697 8.73686 4.86195 8.86189C4.73693 8.98691 4.66669 9.15648 4.66669 9.33329V14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66669 2V4.66667C4.66669 4.84348 4.73693 5.01305 4.86195 5.13807C4.98697 5.2631 5.15654 5.33333 5.33335 5.33333H10" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              Save Changes
            </button>
          ) : (
            <button className="profile-edit-button" onClick={handleEdit}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3333 1.99998C11.5084 1.82487 11.7163 1.68698 11.9439 1.59499C12.1715 1.503 12.4142 1.45898 12.6667 1.45898C12.9191 1.45898 13.1618 1.503 13.3894 1.59499C13.617 1.68698 13.8249 1.82487 14 1.99998C14.1751 2.17509 14.313 2.38296 14.405 2.61055C14.497 2.83814 14.541 3.08084 14.541 3.33331C14.541 3.58579 14.497 3.82849 14.405 4.05608C14.313 4.28367 14.1751 4.49154 14 4.66665L5.00001 13.6666L1.33334 14.6666L2.33334 11L11.3333 1.99998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Edit
            </button>
          )}
        </div>

        {isEditing ? (
          // Edit Mode - Form Inputs
          <div className="financial-overview-grid">
            <div className="financial-form-group">
              <label className="profile-form-label">Total Funds Available</label>
              <input
                type="text"
                name="totalFunds"
                value={editFormData.totalFunds ? formatNumber(editFormData.totalFunds) : ""}
                onChange={handleInputChange}
                className="profile-form-input"
                placeholder="6000000"
              />
            </div>

            <div className="financial-form-group">
              <label className="profile-form-label">Total Invested</label>
              <input
                type="text"
                name="totalInvested"
                value={editFormData.totalInvested ? formatNumber(editFormData.totalInvested) : ""}
                onChange={handleInputChange}
                className="profile-form-input"
                placeholder="1900000"
              />
            </div>

            <div className="financial-highlight-box">
              <div className="financial-highlight-label">Available Balance</div>
              <div className="financial-highlight-value green">
                {formatCurrency(availableBalance)}
              </div>
              <div className="financial-highlight-note">Auto Calculated</div>
            </div>

            <div className="financial-highlight-box">
              <div className="financial-highlight-label">Portfolio Value</div>
              <input
                type="text"
                name="portfolioValue"
                value={editFormData.portfolioValue ? formatNumber(editFormData.portfolioValue) : ""}
                onChange={handleInputChange}
                className="profile-form-input financial-input-large"
                placeholder="1900000"
              />
              <div className="financial-highlight-note">Based on current value</div>
            </div>
          </div>
        ) : (
          // View Mode - Read-only Display
          <div className="financial-overview-grid">
            <div className="financial-view-item">
              <span className="financial-view-label">Total Funds Available</span>
              <span className="financial-view-value">{formatCurrency(totalFunds)}</span>
            </div>
            <div className="financial-view-item">
              <span className="financial-view-label">Total Invested</span>
              <span className="financial-view-value">{formatCurrency(totalInvested)}</span>
            </div>
            <div className="financial-highlight-box">
              <div className="financial-highlight-label">Available Balance</div>
              <div className="financial-highlight-value green">
                {formatCurrency(availableBalance)}
              </div>
              <div className="financial-highlight-note">Auto Calculated</div>
            </div>
            <div className="financial-highlight-box">
              <div className="financial-highlight-label">Portfolio Value</div>
              <div className="financial-highlight-value">
                {formatCurrency(portfolioValue)}
              </div>
              <div className="financial-highlight-note">Based on current value</div>
            </div>
          </div>
        )}
      </div>

      {/* Investment Summary */}
      <div className="profile-section">
        <div className="profile-section-header">
          <div>
            <h3 className="profile-section-title">Investment Summary</h3>
            <p className="profile-section-subtitle">Key financial metrics</p>
          </div>
        </div>

        <div className="investment-summary">
          <div className="investment-metric">
            <div className="investment-metric-header">
              <span className="investment-metric-label">Investment Capacity</span>
              <span className="investment-metric-percentage">{investmentCapacity}% available</span>
            </div>
            <div className="investment-progress-bar">
              <div 
                className="investment-progress-fill" 
                style={{ width: `${investmentCapacity}%` }}
              ></div>
            </div>
            <div className="investment-metric-detail">
              ${(parseFloat(financialData.availableBalance) / 1000000).toFixed(1)}M of ${(parseFloat(financialData.totalFunds) / 1000000).toFixed(0)}M total
            </div>
          </div>

          <div className="investment-metric">
            <div className="investment-metric-label">Active Investments</div>
            <div className="investment-metric-value">Information to be provided</div>
          </div>

          <div className="investment-metric">
            <div className="investment-metric-label">Average Investment Size</div>
            <div className="investment-metric-value">Information to be provided</div>
          </div>
        </div>
      </div>
    </div>
  );
}

