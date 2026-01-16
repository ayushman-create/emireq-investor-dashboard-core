import "./TokenHeader.css";

export default function TokenHeader() {
  const handleExportCSV = () => {
    // Create CSV content
    const csvContent = "Date,Type,Entity,Amount,Status\n2025-11-12,SuperToken,StartupA,$25,000/TN-235B,Confirmed\n2025-11-12,Investment,StartupA,$20,000/TN-234A,Completed";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'token-data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSyncWallet = () => {
    // Simulate loading state
    const button = document.querySelector('.em-token-header-sync-btn');
    if (button) {
      button.disabled = true;
      button.textContent = 'Syncing...';
      setTimeout(() => {
        button.disabled = false;
        button.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.33398V4.66732" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 11.3327V14.666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3333 8.00065H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 8.00065H2.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.3333 5.33398L13.3333 3.33398L11.3333 1.33398" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.66667 5.33398L2.66667 3.33398L4.66667 1.33398" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.3333 10.6673L13.3333 12.6673L11.3333 14.6673" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.66667 10.6673L2.66667 12.6673L4.66667 14.6673" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Sync Wallet
        `;
      }, 2000);
    }
  };

  return (
    <div className="em-token-header">
      <div className="em-token-header-top">
        <div className="em-token-header-title-section">
          <h1 className="em-token-header-title">Tokenization Management</h1>
          <p className="em-token-header-subtitle">View and Manage token holdings and transactions</p>
        </div>
        
        <div className="em-token-header-actions">
          <button className="em-token-header-export-btn" onClick={handleExportCSV}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 11.3333V1.33333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.33333 8.66667L8 11.3333L10.6667 8.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.66667 14.6667H13.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Export CSV
          </button>
          
          <button className="em-token-header-sync-btn" onClick={handleSyncWallet}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1.33398V4.66732" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 11.3327V14.666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.3333 8.00065H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 8.00065H2.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.3333 5.33398L13.3333 3.33398L11.3333 1.33398" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.66667 5.33398L2.66667 3.33398L4.66667 1.33398" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.3333 10.6673L13.3333 12.6673L11.3333 14.6673" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.66667 10.6673L2.66667 12.6673L4.66667 14.6673" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Sync Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

