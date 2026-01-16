import { useState, useRef, useEffect } from "react";
import "./Portfolio.css";
import "../pages/profile/profile.css";
import avatar from "../assets/arab1.png";
import InvestmentModal from "./portfolio/InvestmentModal";

export default function Portfolio({ toggleTheme }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedStage, setSelectedStage] = useState("Stage");
  const [showSectorDropdown, setShowSectorDropdown] = useState(false);
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [showStageDropdown, setShowStageDropdown] = useState(false);
  const profileRef = useRef(null);

  const investments = [
    {
      id: 1,
      name: "Synesthia",
      sector: "HealthTech",
      region: "USA",
      roi: 40,
      invested: 250000,
      currentValue: 150000,
      stage: "Growth",
      initial: "S"
    },
    {
      id: 2,
      name: "EnerTech Labs",
      sector: "Clean Energy",
      region: "Europe",
      roi: -10,
      invested: 250000,
      currentValue: 240000,
      stage: "Series A",
      initial: "E"
    },
    {
      id: 3,
      name: "Emireq Metaverse",
      sector: "VR/AR",
      region: "UAE",
      roi: 40,
      invested: 250000,
      currentValue: 230000,
      stage: "Seed",
      initial: "E"
    },
    {
      id: 4,
      name: "Voxel Capital",
      sector: "FinTech",
      region: "Asia",
      roi: 40,
      invested: 250000,
      currentValue: 220000,
      stage: "Series B",
      initial: "V"
    },
    {
      id: 5,
      name: "BioGenix",
      sector: "AL/ML",
      region: "UAE",
      roi: 40,
      invested: 250000,
      currentValue: 210000,
      stage: "Growth",
      initial: "B"
    }
  ];

  // Get unique values for filters
  const sectors = ["All Sectors", ...new Set(investments.map(inv => inv.sector))];
  const regions = ["All Regions", ...new Set(investments.map(inv => inv.region))];
  const stages = ["Stage", ...new Set(investments.map(inv => inv.stage))];

  // Filter investments
  const filteredInvestments = investments.filter(investment => {
    const matchesSearch = investment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         investment.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         investment.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === "All Sectors" || investment.sector === selectedSector;
    const matchesRegion = selectedRegion === "All Regions" || investment.region === selectedRegion;
    const matchesStage = selectedStage === "Stage" || investment.stage === selectedStage;
    
    return matchesSearch && matchesSector && matchesRegion && matchesStage;
  });

  const totalInvested = investments.reduce((sum, inv) => sum + inv.invested, 0);
  const totalCurrentValue = investments.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalROI = ((totalCurrentValue - totalInvested) / totalInvested * 100).toFixed(1);
  const activeInvestments = investments.length;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      // Close filter dropdowns when clicking outside
      if (!e.target.closest('.filter-btn') && !e.target.closest('.filter-dropdown')) {
        setShowSectorDropdown(false);
        setShowRegionDropdown(false);
        setShowStageDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleViewDetails = (investment) => {
    setSelectedInvestment(investment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInvestment(null);
  };

  const handleExportCSV = () => {
    // Create CSV headers
    const headers = ['Name', 'Sector', 'Region', 'ROI (%)', 'Invested', 'Current Value', 'Stage'];
    
    // Create CSV rows
    const rows = filteredInvestments.map(inv => [
      inv.name,
      inv.sector,
      inv.region,
      inv.roi,
      inv.invested,
      inv.currentValue,
      inv.stage
    ]);
    
    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `portfolio_investments_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportPDF = () => {
    // Create a printable HTML content
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Investment Portfolio</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #121212; margin-bottom: 10px; }
          .subtitle { color: #6B7280; margin-bottom: 30px; }
          .summary { margin-bottom: 30px; }
          .summary-item { display: inline-block; margin-right: 30px; margin-bottom: 10px; }
          .summary-label { font-weight: bold; color: #6B7280; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #E5E7EB; }
          th { background-color: #F9FAFB; font-weight: 600; color: #374151; }
          .positive { color: #009966; }
          .negative { color: #EC003F; }
          .footer { margin-top: 30px; font-size: 12px; color: #6B7280; }
        </style>
      </head>
      <body>
        <h1>Investment Portfolio</h1>
        <p class="subtitle">Generated on ${new Date().toLocaleDateString()}</p>
        
        <div class="summary">
          <div class="summary-item">
            <span class="summary-label">Total Invested:</span> ${formatCurrency(totalInvested)}
          </div>
          <div class="summary-item">
            <span class="summary-label">Current Value:</span> ${formatCurrency(totalCurrentValue)}
          </div>
          <div class="summary-item">
            <span class="summary-label">Total ROI:</span> ${totalROI}%
          </div>
          <div class="summary-item">
            <span class="summary-label">Active Investments:</span> ${activeInvestments}
          </div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sector</th>
              <th>Region</th>
              <th>ROI</th>
              <th>Invested</th>
              <th>Current Value</th>
              <th>Stage</th>
            </tr>
          </thead>
          <tbody>
            ${filteredInvestments.map(inv => `
              <tr>
                <td>${inv.name}</td>
                <td>${inv.sector}</td>
                <td>${inv.region}</td>
                <td class="${inv.roi >= 0 ? 'positive' : 'negative'}">${inv.roi > 0 ? '+' : ''}${inv.roi}%</td>
                <td>${formatCurrency(inv.invested)}</td>
                <td>${formatCurrency(inv.currentValue)}</td>
                <td>${inv.stage}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="footer">
          Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
        </div>
      </body>
      </html>
    `;
    
    // Open print dialog
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <div className="header-container">
        {/* LEFT: Breadcrumbs */}
        <div className="breadcrumb-section">
          <span className="breadcrumb-item inactive">Dashboard</span>
          <span className="separator">›</span>
          <span className="breadcrumb-item active">Portfolio</span>
        </div>

        {/* RIGHT: Header Actions */}
        <div className="em-header-actions">
          {/* THEME TOGGLE */}
          <button
            className="em-header-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_114_12193)">
                <path d="M7.99935 11.3327C9.8403 11.3327 11.3327 9.8403 11.3327 7.99935C11.3327 6.1584 9.8403 4.66602 7.99935 4.66602C6.1584 4.66602 4.66602 6.1584 4.66602 7.99935C4.66602 9.8403 6.1584 11.3327 7.99935 11.3327Z" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 0.666016V1.99935" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14V15.3333" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.8125 2.8125L3.75917 3.75917" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.2402 12.2402L13.1869 13.1869" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0.666016 8H1.99935" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 8H15.3333" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.8125 13.1869L3.75917 12.2402" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.2402 3.75917L13.1869 2.8125" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_114_12193">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>

          {/* SEARCH */}
          <div className="em-header-search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="em-header-search-icon"
            >
              <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.9996 13.9996L11.0996 11.0996"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="em-header-search-input"
            />
          </div>

          {/* NOTIFICATION */}
          <button className="em-header-notification">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="em-header-notification-icon"
            >
              <path
                d="M12 5.33398C12 4.27312 11.5786 3.2557 10.8284 2.50556C10.0783 1.75541 9.06087 1.33398 8 1.33398C6.93913 1.33398 5.92172 1.75541 5.17157 2.50556C4.42143 3.2557 4 4.27312 4 5.33398C4 10.0007 2 11.334 2 11.334H14C14 11.334 12 10.0007 12 5.33398Z"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.15237 14C9.03516 14.2021 8.86693 14.3698 8.66452 14.4864C8.46211 14.6029 8.23262 14.6643 7.99904 14.6643C7.76545 14.6643 7.53596 14.6029 7.33355 14.4864C7.13114 14.3698 6.96291 14.2021 6.8457 14"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="em-header-notification-dot" />
          </button>

          {/* PROFILE */}
          <div className="em-header-profile" ref={profileRef}>
            <button
              className="em-header-profile-menu"
              onClick={(e) => {
                e.stopPropagation();
                setProfileOpen((prev) => !prev);
              }}
            >
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path
                  d="M0.75 0.75H14.75"
                  stroke="#2F2F33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0.75 6.75H11.75"
                  stroke="#2F2F33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="em-header-profile-avatar">
              <img
                src={avatar}
                alt="User profile"
                className="em-header-avatar-img"
              />
            </div>

            {profileOpen && (
              <div className="em-profile-dropdown">
                <div className="em-profile-user">
                  <img src={avatar} alt="User" />
                  <div>
                    <div className="em-profile-name">John Doe</div>
                    <div className="em-profile-email">johndoe@gmail.com</div>
                  </div>
                </div>

                <div className="em-profile-divider" />

                <button className="em-profile-item">
                  <span className="em-profile-item-icon">👤</span>
                  My Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="portfolio-content">
        {/* Page Header */}
        <div className="portfolio-header">
          <div className="portfolio-header-left">
            <h1 className="portfolio-title">Investment Portfolio</h1>
            <p className="portfolio-subtitle">Track and manage your startup investments</p>
          </div>
          <div className="portfolio-header-actions">
            <button className="export-btn export-csv" onClick={handleExportCSV}>
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10V2" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66663 6.66666L7.99996 10L11.3333 6.66666" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              Export CSV
            </button>
            <button className="export-btn export-pdf" onClick={handleExportPDF}>
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V10" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3333 5.33333L7.99996 2L4.66663 5.33333" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              Export pdf
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="portfolio-metrics">
          <div className="metric-card metric-blue">
            <div className="metric-icon blue">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <div className="metric-content">
              <p className="metric-label">Total Invested</p>
              <h2 className="metric-value">{formatCurrency(totalInvested)}</h2>
            </div>
            <span className="metric-badge blue">Total</span>
          </div>

          <div className="metric-card metric-green">
            <div className="metric-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7H22V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <div className="metric-content">
              <p className="metric-label">Current Value</p>
              <h2 className="metric-value">{formatCurrency(totalCurrentValue)}</h2>
            </div>
            <span className="metric-badge green">Current</span>
          </div>

          <div className="metric-card metric-purple">
            <div className="metric-icon purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <div className="metric-content">
              <p className="metric-label">Total ROI</p>
              <h2 className="metric-value">{totalROI}%</h2>
            </div>
            <span className="metric-badge purple">ROI</span>
          </div>

          <div className="metric-card metric-orange">
            <div className="metric-icon orange">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 6H4C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <div className="metric-content">
              <p className="metric-label">Active Investments</p>
              <h2 className="metric-value">{activeInvestments}</h2>
            </div>
            <span className="metric-badge orange">Active</span>
          </div>
        </div>

        {/* Startup Investments Section */}
        <div className="investments-section">
          <div className="investments-header">
            <div>
              <h3 className="investments-title">
                Startup Investments
                <span className="em-info-icon" aria-label="Information" tabIndex={0}>
                  <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
                  </svg>
                </span>
              </h3>
              <p className="investments-subtitle">Your portfolio of startup investments</p>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="investments-filters">
            <div style={{ position: 'relative' }}>
              <button 
                className="filter-btn"
                onClick={() => {
                  setShowSectorDropdown(!showSectorDropdown);
                  setShowRegionDropdown(false);
                  setShowStageDropdown(false);
                }}
              >
                {selectedSector}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showSectorDropdown && (
                <div className="filter-dropdown">
                  {sectors.map((sector) => (
                    <div
                      key={sector}
                      className="filter-dropdown-item"
                      onClick={() => {
                        setSelectedSector(sector);
                        setShowSectorDropdown(false);
                      }}
                    >
                      {sector}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div style={{ position: 'relative' }}>
              <button 
                className="filter-btn"
                onClick={() => {
                  setShowRegionDropdown(!showRegionDropdown);
                  setShowSectorDropdown(false);
                  setShowStageDropdown(false);
                }}
              >
                {selectedRegion}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showRegionDropdown && (
                <div className="filter-dropdown">
                  {regions.map((region) => (
                    <div
                      key={region}
                      className="filter-dropdown-item"
                      onClick={() => {
                        setSelectedRegion(region);
                        setShowRegionDropdown(false);
                      }}
                    >
                      {region}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div style={{ position: 'relative' }}>
              <button 
                className="filter-btn"
                onClick={() => {
                  setShowStageDropdown(!showStageDropdown);
                  setShowSectorDropdown(false);
                  setShowRegionDropdown(false);
                }}
              >
                {selectedStage}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showStageDropdown && (
                <div className="filter-dropdown">
                  {stages.map((stage) => (
                    <div
                      key={stage}
                      className="filter-dropdown-item"
                      onClick={() => {
                        setSelectedStage(stage);
                        setShowStageDropdown(false);
                      }}
                    >
                      {stage}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="investments-search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="investments-search-input"
              />
            </div>
          </div>

          {/* Investments Table */}
          <div className="investments-table-container">
            <table className="investments-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>SECTOR</th>
                  <th>REGION</th>
                  <th>ROI</th>
                  <th>INVESTED</th>
                  <th>CURRENT VALUE</th>
                  <th>STAGE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvestments.length > 0 ? (
                  filteredInvestments.map((investment) => (
                  <tr key={investment.id} className="investment-row">
                    <td>
                      <div className="investment-name">
                        <div className="investment-avatar">{investment.initial}</div>
                        <span>{investment.name}</span>
                      </div>
                    </td>
                    <td>{investment.sector}</td>
                    <td>{investment.region}</td>
                    <td>
                      <div className={`roi-badge ${investment.roi >= 0 ? 'positive' : 'negative'}`}>
                        {investment.roi >= 0 ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66669 4.66669H11.3334V11.3334" stroke="#009966" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.66669 11.3334L11.3334 4.66669" stroke="#009966" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66669 4.66669L11.3334 11.3334" stroke="#EC003F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.3334 4.66669V11.3334H4.66669" stroke="#EC003F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {investment.roi > 0 ? '+' : ''}{investment.roi}%
                      </div>
                    </td>
                    <td>{formatCurrency(investment.invested)}</td>
                    <td>{formatCurrency(investment.currentValue)}</td>
                    <td>
                      <span className="stage-badge">{investment.stage}</span>
                    </td>
                    <td>
                      <button
                        className="action-btn"
                        onClick={() => handleViewDetails(investment)}
                        aria-label="View details"
                      >
                        <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3747 16.232C11.3191 16.0823 11.3191 15.9177 11.3747 15.768C11.9158 14.4559 12.8344 13.334 14.0139 12.5446C15.1934 11.7552 16.5807 11.3337 18 11.3337C19.4193 11.3337 20.8067 11.7552 21.9862 12.5446C23.1657 13.334 24.0842 14.4559 24.6253 15.768C24.6809 15.9177 24.6809 16.0823 24.6253 16.232C24.0842 17.5441 23.1657 18.666 21.9862 19.4554C20.8067 20.2448 19.4193 20.6663 18 20.6663C16.5807 20.6663 15.1934 20.2448 14.0139 19.4554C12.8344 18.666 11.9158 17.5441 11.3747 16.232Z" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14C16.8954 14 16 14.8954 16 16C16 17.1046 16.8954 18 18 18Z" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      </button>
                    </td>
                  </tr>
                ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#6B7280' }}>
                      No investments match the selected filters
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="investments-pagination">
            <div className="pagination-info">
              Showing <span className="pagination-count">{String(filteredInvestments.length).padStart(2, '0')}</span> / 1280 Results
            </div>
            <div className="pagination-controls">
              <button className="pagination-btn" disabled={currentPage === 1}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={`pagination-page ${currentPage === 1 ? 'active' : ''}`} onClick={() => setCurrentPage(1)}>1</button>
              <button className={`pagination-page ${currentPage === 2 ? 'active' : ''}`} onClick={() => setCurrentPage(2)}>2</button>
              <button className={`pagination-page ${currentPage === 3 ? 'active' : ''}`} onClick={() => setCurrentPage(3)}>3</button>
              <span className="pagination-ellipsis">...</span>
              <button className={`pagination-page ${currentPage === 20 ? 'active' : ''}`} onClick={() => setCurrentPage(20)}>20</button>
              <button className="pagination-btn" disabled={currentPage === 20}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="investments-disclaimer">
            Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
          </div>
        </div>
      </div>

      {/* Investment Detail Modal */}
      {isModalOpen && selectedInvestment && (
        <InvestmentModal
          investment={selectedInvestment}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

