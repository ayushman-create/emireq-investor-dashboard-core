import { useState } from "react";
import "./ERC20HoldingsList.css";

export default function ERC20HoldingsList() {
  const [searchQuery, setSearchQuery] = useState("");

  const holdings = [
    {
      symbol: "EMRQ",
      balance: "12,000",
      valueUSD: "$48,000",
      status: "Active"
    },
    {
      symbol: "ZMED",
      balance: "8,500",
      valueUSD: "$31,000",
      status: "Active"
    },
    {
      symbol: "PLXR",
      balance: "4,200",
      valueUSD: "$15,000",
      status: "Active"
    }
  ];

  const filteredHoldings = holdings.filter(holding =>
    holding.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="em-erc20-holdings">
      <div className="em-erc20-holdings-header">
        <div>
          <h3 className="em-erc20-holdings-title">
            ERC-20 Holdings
           <span className="em-info-icon" aria-label="Information" tabIndex={0}>
             <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
</svg>

            </span>
          </h3>
          <p className="em-erc20-holdings-subtitle">Your current token balance across chains</p>
        </div>
        
        <div className="em-erc20-holdings-actions">
          <div className="em-erc20-holdings-search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="em-erc20-holdings-search-input"
            />
          </div>
          
          <button className="em-erc20-holdings-view-btn">
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2H14V6" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66663 9.33333L14 2" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            View On-Chain
          </button>
        </div>
      </div>
      
      <div className="em-erc20-holdings-list">
        {filteredHoldings.map((holding, index) => (
          <div key={index} className="em-erc20-holding-card">
            <div className="em-erc20-holding-left">
              <div className="em-erc20-holding-avatar">
                <span>DR</span>
              </div>
              <div className="em-erc20-holding-info">
                <div className="em-erc20-holding-symbol">{holding.symbol}</div>
                <div className="em-erc20-holding-label">Token Balance</div>
              </div>
            </div>
            
            <div className="em-erc20-holding-right">
              <div className="em-erc20-holding-detail">
                <span className="em-erc20-holding-detail-label">Balance:</span>
                <span className="em-erc20-holding-detail-value">{holding.balance}</span>
              </div>
              <div className="em-erc20-holding-detail">
                <span className="em-erc20-holding-detail-label">Value (USD):</span>
                <span className="em-erc20-holding-detail-value">{holding.valueUSD}</span>
              </div>
              <div className="em-erc20-holding-status">
                <span className={`em-erc20-holding-status-badge em-erc20-holding-status-badge--${holding.status.toLowerCase()}`}>
                  {holding.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

