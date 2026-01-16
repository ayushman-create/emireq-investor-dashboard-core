import { useState } from "react";
import "./ERC20TransactionsTable.css";

export default function ERC20TransactionsTable() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const transactions = [
    {
      date: "2025-11-12",
      type: "SuperToken",
      entity: "StartupA",
      amount: "$25,000/TN-235B",
      status: "Confirmed"
    },
    {
      date: "2025-11-12",
      type: "Investment",
      entity: "StartupA",
      amount: "$20,000/TN-234A",
      status: "Completed"
    },
    {
      date: "2025-11-12",
      type: "Dividend",
      entity: "StartupB",
      amount: "$30,000/TN-236C",
      status: "Pending"
    },
    {
      date: "2025-11-12",
      type: "Investment",
      entity: "Emerg Marketplace",
      amount: "$20,000/TN-234A",
      status: "Completed"
    },
    {
      date: "2025-11-10",
      type: "SuperToken",
      entity: "StartupC",
      amount: "$15,000/TN-237D",
      status: "Confirmed"
    },
    {
      date: "2025-11-09",
      type: "Investment",
      entity: "StartupD",
      amount: "$18,000/TN-238E",
      status: "Completed"
    },
    {
      date: "2025-11-08",
      type: "Dividend",
      entity: "StartupE",
      amount: "$22,000/TN-239F",
      status: "Pending"
    },
    {
      date: "2025-11-07",
      type: "Investment",
      entity: "StartupF",
      amount: "$28,000/TN-240G",
      status: "Completed"
    },
    {
      date: "2025-11-06",
      type: "SuperToken",
      entity: "StartupG",
      amount: "$35,000/TN-241H",
      status: "Confirmed"
    },
    {
      date: "2025-11-05",
      type: "Investment",
      entity: "StartupH",
      amount: "$24,000/TN-242I",
      status: "Completed"
    },
    {
      date: "2025-11-04",
      type: "Dividend",
      entity: "StartupI",
      amount: "$26,000/TN-243J",
      status: "Pending"
    },
    {
      date: "2025-11-03",
      type: "Investment",
      entity: "StartupJ",
      amount: "$32,000/TN-244K",
      status: "Completed"
    }
  ];

  // Filter transactions
  const filteredTransactions = transactions.filter((tx) => {
    const matchesStatus = statusFilter === "all" || tx.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch = 
      tx.entity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.amount.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "confirmed";
      case "completed":
        return "completed";
      case "pending":
        return "pending";
      default:
        return "";
    }
  };

  return (
    <div className="em-erc20-transactions">
      <div className="em-erc20-transactions-header">
        <div>
          <h3 className="em-erc20-transactions-title">
            ERC-20 Holdings
            <span className="em-info-icon" aria-label="Information" tabIndex={0}>
             <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
</svg>

            </span>
          </h3>
          <p className="em-erc20-transactions-subtitle">Your current token balance across chains</p>
          <div className="em-erc20-transactions-filters">
          <div className="em-erc20-transactions-status-filter">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="em-erc20-transactions-select"
              aria-label="Filter transactions by status"
            >
              <option value="all">Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          
          <div className="em-erc20-transactions-search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="em-erc20-transactions-search-input"
              aria-label="Search transactions"
            />
          </div>
        </div>
        </div>
        
        
      </div>
      
      <div className="em-erc20-transactions-table-wrapper">
        <table className="em-erc20-transactions-table" role="table" aria-label="ERC-20 Holdings transactions table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>TYPE</th>
              <th>ENTITY</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((tx, index) => (
              <tr 
                key={index} 
                tabIndex={0} 
                aria-label={`Transaction ${index + 1}: ${tx.date}, ${tx.type}, ${tx.entity}, ${tx.amount}, ${tx.status}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    // Optional: handle row selection or action
                  }
                }}
              >
                <td>{tx.date}</td>
                <td>
                  <span className="em-erc20-transaction-type-pill">{tx.type}</span>
                </td>
                <td>{tx.entity}</td>
                <td>{tx.amount}</td>
                <td>
                  <span className={`em-erc20-transaction-status-badge em-erc20-transaction-status-badge--${getStatusClass(tx.status)}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="em-erc20-transactions-footer">
        <div className="em-erc20-transactions-count">
    Showing 
    <span className="em-results-input">
      {String(paginatedTransactions.length).padStart(2, '0')}
    </span> 
    / {filteredTransactions.length} Results
  </div>
  
  <div className="em-erc20-transactions-pagination" role="navigation" aria-label="Pagination">
    <button 
      className="em-pagination-arrow" 
      onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
      disabled={currentPage === 1}
      aria-label="Previous page"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
    
    <button 
      className={`em-pagination-number ${currentPage === 1 ? 'active' : ''}`}
      onClick={() => setCurrentPage(1)}
      aria-label="Page 1"
      aria-current={currentPage === 1 ? 'page' : undefined}
    >
      1
    </button>
    <button 
      className={`em-pagination-number ${currentPage === 2 ? 'active' : ''}`}
      onClick={() => setCurrentPage(2)}
      aria-label="Page 2"
      aria-current={currentPage === 2 ? 'page' : undefined}
    >
      2
    </button>
    <button 
      className={`em-pagination-number ${currentPage === 3 ? 'active' : ''}`}
      onClick={() => setCurrentPage(3)}
      aria-label="Page 3"
      aria-current={currentPage === 3 ? 'page' : undefined}
    >
      3
    </button>
    <span className="em-pagination-ellipsis">...</span>
    <button 
      className={`em-pagination-number ${currentPage === 20 ? 'active' : ''}`}
      onClick={() => setCurrentPage(20)}
      aria-label="Page 20"
      aria-current={currentPage === 20 ? 'page' : undefined}
    >
      20
    </button>
    
    <button 
      className="em-pagination-arrow" 
      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
      disabled={currentPage === totalPages}
      aria-label="Next page"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  </div>
      </div>
      
      {/* Disclaimer */}
      <div className="em-erc20-transactions-disclaimer">
        Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
      </div>
    </div>
  );
}

