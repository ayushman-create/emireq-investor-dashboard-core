import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Header from "../../components/header/Header";
import FinancialsTab from "./components/FinancialsTab";
import RiskTab from "./components/RiskTab";
import LegalTab from "./components/LegalTab";
import GovernanceTab from "./components/GovernanceTab";
import DocumentsTab from "./components/DocumentsTab";
import "./DueDiligencePage.css";
import AAOIFIShariahTab from "./components/AAOIFIShariahTab";

export default function DueDiligencePage({ isDarkMode, toggleTheme, sidebarCollapsed }) {
  const [activeTab, setActiveTab] = useState("Summary");
  const [isDownloading, setIsDownloading] = useState(false);
  const [hoveredRatio, setHoveredRatio] = useState(null);
  const [hoveredTableRow, setHoveredTableRow] = useState(null);
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);

  const handleInfoClick = () => {
    setShowInfoTooltip(!showInfoTooltip);
  };

  const tabs = ["Summary", "Financials", "Risk", "Legal", "Governance", "Documents", "AAOIFI & Shariah"];

  const handleDownloadReport = async () => {
    try {
      setIsDownloading(true);
      
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a blob with sample PDF content or trigger actual download
      // For now, we'll create a downloadable link
      const link = document.createElement('a');
      link.href = '/reports/crescent-greentech-dd-report.pdf'; // Replace with actual report URL
      link.download = 'Crescent_GreenTech_DD_Report.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success notification (you can add a toast notification here)
      console.log('Report download initiated');
      
    } catch (error) {
      console.error('Error downloading report:', error);
      alert('Failed to download report. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const emptyTabs = ["Legal", "Risk", "Governance", "Documents", "AAOIFI & Shariah"];

  return (
    <div className="em-due-diligence-page">
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <div className="em-dd-content">
        {/* Company Header */}
        <div className="em-dd-company-header">
          <div className="em-dd-company-info">
            <div className="em-dd-company-logo">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="64" height="64" rx="32" fill="#C1C1C1" fillOpacity="0.5"/>
                <rect x="12" y="5.6001" width="39.2" height="52.8" fill="url(#pattern0_434_3110)"/>
                <defs>
                  <pattern id="pattern0_434_3110" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_434_3110" transform="matrix(0.0111111 0 0 0.00824916 0 0.128788)"/>
                  </pattern>
                  <image id="image0_434_3110" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsElEQVR4nO3YMW5dMQxE0UG6ZPlOAnuVTpqkvYbx/wYIDEVJnlMTIjnFE56kiIiIiIiIGwE/gN/AX+b8AX4B33Ur4I19vOlGwDfgP/v49zmTbpOgv+6n41W3+ryAgJ/PC2nKO/By9WUYERERcc07xv3vIZv9jNz5HrLh7/Wdv+kJeqFLPx2v2s0m7xhf6z2Ew+kUHE6n4HA6RXUB18I098WkutfYwlN9MZFL98JTfTGRS/fCU30xkUv3wlN9MZFL98JTfTGRC4dTgl4jQS+SoBep7uWqT9BP3fVlHE6m4MaC7h6IzYJL0JvWlyXohwRtrq+SS/fCU30xkUv3wlN9MZELh1OCXiNBL5KgF6nu5apP0E/d9WUcTqbgxoLuHojNgkvQm9aXJeiHBG2ur5JL98JTfTGRS/fCU30xkQuHU4JeI0EvkqAXqe7lqk/QT931ZRxOpuDGgu4eiM2CS9Cb1pcl6IcEba6vkkv3wlN9MZFL98JTfTGRy9RANPftPr9saiCa+3afXzY1EM19u88vmxqI5r7d55dNDURz3+7zy6YGorlv9/kREREREREREbrUB5oUO1k1JHLfAAAAAElFTkSuQmCC"/>
                </defs>
              </svg>
            </div>
            <div className="em-dd-company-details">
              <div className="em-dd-company-name-row">
                <h1 className="em-dd-company-name">Crescent GreenTech SPV Ltd.</h1>
                <span className="em-dd-verified-badge">Verified</span>
              </div>
              <div className="em-dd-company-meta">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_434_3121)">
                    <path d="M4 14.6666V2.66659C4 2.31296 4.14048 1.97382 4.39052 1.72378C4.64057 1.47373 4.97971 1.33325 5.33333 1.33325H10.6667C11.0203 1.33325 11.3594 1.47373 11.6095 1.72378C11.8595 1.97382 12 2.31296 12 2.66659V14.6666H4Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.00016 8H2.66683C2.31321 8 1.97407 8.14048 1.72402 8.39052C1.47397 8.64057 1.3335 8.97971 1.3335 9.33333V13.3333C1.3335 13.687 1.47397 14.0261 1.72402 14.2761C1.97407 14.5262 2.31321 14.6667 2.66683 14.6667H4.00016" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6H13.3333C13.687 6 14.0261 6.14048 14.2761 6.39052C14.5262 6.64057 14.6667 6.97971 14.6667 7.33333V13.3333C14.6667 13.687 14.5262 14.0261 14.2761 14.2761C14.0261 14.5262 13.687 14.6667 13.3333 14.6667H12" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.6665 4H9.33317" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.6665 6.66675H9.33317" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.6665 9.33325H9.33317" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.6665 12H9.33317" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_434_3121">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span>Industrial Sector</span>
                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="em-dd-meta-dot-svg">
                  <path d="M0 1.72949C0 1.25098 0.16862 0.843099 0.505859 0.505859C0.847656 0.16862 1.25553 0 1.72949 0C2.20801 0 2.61589 0.16862 2.95312 0.505859C3.29492 0.843099 3.46582 1.25098 3.46582 1.72949C3.46582 2.20801 3.29492 2.61816 2.95312 2.95996C2.61589 3.2972 2.20801 3.46582 1.72949 3.46582C1.25553 3.46582 0.847656 3.2972 0.505859 2.95996C0.16862 2.61816 0 2.20801 0 1.72949Z" fill="#717182"/>
                </svg>
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
          <button 
            className={`em-dd-report-btn ${isDownloading ? 'em-dd-report-btn--loading' : ''}`}
            onClick={handleDownloadReport}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="em-dd-spinner">
                  <path d="M8 2V4M8 12V14M14 8H12M4 8H2M12.2426 3.75736L10.8284 5.17157M5.17157 10.8284L3.75736 12.2426M12.2426 12.2426L10.8284 10.8284M5.17157 5.17157L3.75736 3.75736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.66602 6.66602L7.99935 9.99935L11.3327 6.66602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Full DD Report
              </>
            )}
          </button>
        </div>

        {/* Metric Cards */}
        <div className="em-dd-metrics-grid">
          <div className="em-dd-metric-card">
            <div className="em-dd-metric-header">
              <div className="em-dd-metric-icon em-dd-metric-icon--green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17L9 11L13 15L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 7H21V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="em-dd-metric-label">Expected IRR</span>
            </div>
            <h3 className="em-dd-metric-value">19–23%</h3>
            <span className="em-dd-metric-desc em-dd-metric-desc--green">Above market average</span>
          </div>

          <div className="em-dd-metric-card">
            <div className="em-dd-metric-header">
              <div className="em-dd-metric-icon em-dd-metric-icon--blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="em-dd-metric-label">Investment Tenure</span>
            </div>
            <h3 className="em-dd-metric-value">48 months</h3>
            <span className="em-dd-metric-desc em-dd-metric-desc--blue">4 years Investment Period</span>
          </div>

          <div className="em-dd-metric-card">
            <div className="em-dd-metric-header">
              <div className="em-dd-metric-icon em-dd-metric-icon--orange">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18C1.64537 18.3024 1.55295 18.6453 1.55199 18.9945C1.55103 19.3437 1.64156 19.6871 1.81442 19.9905C1.98728 20.2939 2.23617 20.5467 2.53716 20.7238C2.83816 20.9009 3.18006 20.9962 3.53 21H20.47C20.8199 20.9962 21.1618 20.9009 21.4628 20.7238C21.7638 20.5467 22.0127 20.2939 22.1856 19.9905C22.3584 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6562 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="em-dd-metric-label">Risk Raiting</span>
            </div>
            <h3 className="em-dd-metric-value">Medium-Low</h3>
            <span className="em-dd-metric-desc em-dd-metric-desc--orange">Score: 3.2/10</span>
          </div>

          <div className="em-dd-metric-card">
            <div className="em-dd-metric-header">
              <div className="em-dd-metric-icon em-dd-metric-icon--purple">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9995 13C19.9995 18 16.4995 20.5 12.3395 21.95C12.1217 22.0238 11.885 22.0203 11.6695 21.94C7.49951 20.5 3.99951 18 3.99951 13V5.99996C3.99951 5.73475 4.10487 5.48039 4.29241 5.29286C4.47994 5.10532 4.7343 4.99996 4.99951 4.99996C6.99951 4.99996 9.49951 3.79996 11.2395 2.27996C11.4514 2.09896 11.7209 1.99951 11.9995 1.99951C12.2782 1.99951 12.5477 2.09896 12.7595 2.27996C14.5095 3.80996 16.9995 4.99996 18.9995 4.99996C19.2647 4.99996 19.5191 5.10532 19.7066 5.29286C19.8942 5.48039 19.9995 5.73475 19.9995 5.99996V13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <span className="em-dd-metric-label">Shariah Status</span>
            </div>
            <h3 className="em-dd-metric-value">Compliant</h3>
            <span className="em-dd-metric-desc em-dd-metric-desc--purple">AAOIFI certified</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="em-dd-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`em-dd-tab ${activeTab === tab ? "em-dd-tab--active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Summary" && (
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_434_3221)">
<path d="M9.99984 1.33325H3.99984C3.64622 1.33325 3.30708 1.47373 3.05703 1.72378C2.80698 1.97382 2.6665 2.31296 2.6665 2.66659V13.3333C2.6665 13.6869 2.80698 14.026 3.05703 14.2761C3.30708 14.5261 3.64622 14.6666 3.99984 14.6666H11.9998C12.3535 14.6666 12.6926 14.5261 12.9426 14.2761C13.1927 14.026 13.3332 13.6869 13.3332 13.3333V4.66659L9.99984 1.33325Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.3335 1.33325V3.99992C9.3335 4.35354 9.47397 4.69268 9.72402 4.94273C9.97407 5.19278 10.3132 5.33325 10.6668 5.33325H13.3335" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66683 6H5.3335" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6668 8.66675H5.3335" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6668 11.3333H5.3335" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_434_3221">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

              )}
              {tab === "Financials" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H14" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11.3333V6" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6665 11.3333V3.33325" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.3335 11.3333V9.33325" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              )}
              {tab === "Risk" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_434_3238)">
<path d="M14.4866 12L9.15329 2.66665C9.037 2.46146 8.86836 2.29078 8.66457 2.17203C8.46078 2.05329 8.22915 1.99072 7.99329 1.99072C7.75743 1.99072 7.52579 2.05329 7.322 2.17203C7.11822 2.29078 6.94958 2.46146 6.83329 2.66665L1.49995 12C1.38241 12.2036 1.32077 12.4346 1.32129 12.6697C1.32181 12.9047 1.38447 13.1355 1.50292 13.3385C1.62136 13.5416 1.79138 13.7097 1.99575 13.8259C2.20011 13.942 2.43156 14.0021 2.66662 14H13.3333C13.5672 13.9997 13.797 13.938 13.9995 13.8208C14.202 13.7037 14.3701 13.5354 14.487 13.3327C14.6038 13.1301 14.6653 12.9002 14.6653 12.6663C14.6652 12.4324 14.6036 12.2026 14.4866 12Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 6V8.66667" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11.3333H8.00667" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_434_3238">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

              )}
              {tab === "Legal" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6665 10.6666L12.6665 5.33325L14.6665 10.6666C14.0865 11.0999 13.3865 11.3333 12.6665 11.3333C11.9465 11.3333 11.2465 11.0999 10.6665 10.6666Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.3335 10.6666L3.3335 5.33325L5.3335 10.6666C4.7535 11.0999 4.0535 11.3333 3.3335 11.3333C2.6135 11.3333 1.9135 11.0999 1.3335 10.6666Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.6665 14H11.3332" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 2V14" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 4.66659H3.33333C4.66667 4.66659 6.66667 3.99992 8 3.33325C9.33333 3.99992 11.3333 4.66659 12.6667 4.66659H14" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              )}
              {tab === "Governance" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_434_3254)">
<path d="M10.6668 14V12.6667C10.6668 11.9594 10.3859 11.2811 9.88578 10.781C9.38568 10.281 8.70741 10 8.00016 10H4.00016C3.29292 10 2.61464 10.281 2.11454 10.781C1.61445 11.2811 1.3335 11.9594 1.3335 12.6667V14" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6665 2.08545C11.2383 2.2337 11.7448 2.56763 12.1063 3.03482C12.4678 3.50202 12.664 4.07604 12.664 4.66678C12.664 5.25752 12.4678 5.83154 12.1063 6.29874C11.7448 6.76594 11.2383 7.09987 10.6665 7.24812" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6665 14V12.6667C14.6661 12.0758 14.4694 11.5019 14.1074 11.0349C13.7454 10.5679 13.2386 10.2344 12.6665 10.0867" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.00016 7.33333C7.47292 7.33333 8.66683 6.13943 8.66683 4.66667C8.66683 3.19391 7.47292 2 6.00016 2C4.5274 2 3.3335 3.19391 3.3335 4.66667C3.3335 6.13943 4.5274 7.33333 6.00016 7.33333Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_434_3254">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

              )}
              {tab === "Documents" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00016 9.3334L5.00016 7.40006C5.10888 7.18416 5.27424 7.00187 5.47857 6.8727C5.6829 6.74352 5.9185 6.67233 6.16016 6.66673H13.3335M13.3335 6.66673C13.5372 6.66637 13.7382 6.71269 13.9213 6.80212C14.1043 6.89155 14.2643 7.02172 14.3892 7.18264C14.5141 7.34356 14.6004 7.53095 14.6416 7.73043C14.6828 7.92991 14.6778 8.13618 14.6268 8.3334L13.6002 12.3334C13.5259 12.6211 13.3576 12.8758 13.1221 13.0569C12.8866 13.2381 12.5973 13.3354 12.3002 13.3334H2.66683C2.31321 13.3334 1.97407 13.1929 1.72402 12.9429C1.47397 12.6928 1.3335 12.3537 1.3335 12.0001V3.3334C1.3335 2.97978 1.47397 2.64064 1.72402 2.39059C1.97407 2.14054 2.31321 2.00006 2.66683 2.00006H5.26683C5.48982 1.99788 5.7098 2.05166 5.90663 2.15648C6.10346 2.2613 6.27086 2.41381 6.3935 2.60006L6.9335 3.40006C7.0549 3.58442 7.22018 3.73574 7.4145 3.84047C7.60881 3.94519 7.82609 4.00003 8.04683 4.00006H12.0002C12.3538 4.00006 12.6929 4.14054 12.943 4.39059C13.193 4.64064 13.3335 4.97978 13.3335 5.3334V6.66673Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              )}
              {tab === "AAOIFI & Shariah" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.6665 12.9999V2.99992C2.6665 2.55789 2.8421 2.13397 3.15466 1.82141C3.46722 1.50885 3.89114 1.33325 4.33317 1.33325H12.6665C12.8433 1.33325 13.0129 1.40349 13.1379 1.52851C13.2629 1.65354 13.3332 1.82311 13.3332 1.99992V13.9999C13.3332 14.1767 13.2629 14.3463 13.1379 14.4713C13.0129 14.5963 12.8433 14.6666 12.6665 14.6666H4.33317C3.89114 14.6666 3.46722 14.491 3.15466 14.1784C2.8421 13.8659 2.6665 13.4419 2.6665 12.9999ZM2.6665 12.9999C2.6665 12.5579 2.8421 12.134 3.15466 11.8214C3.46722 11.5088 3.89114 11.3333 4.33317 11.3333H13.3332" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              )}
              <span>{tab}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`em-dd-tab-content ${activeTab === "Financials" ? 'em-dd-tab-content--financials' : ''} ${emptyTabs.includes(activeTab) ? 'em-dd-tab-content--empty' : ''}`}>
          {activeTab === "Summary" && (
            <div className="em-dd-summary">
              <div className="em-dd-summary-grid">
                <div className="em-dd-summary-left">
                  <section className="em-dd-section">
                    <h2 className="em-dd-section-title">Investment Summary</h2>
                    <p className="em-dd-summary-text">
                      A specialized vehicle focused on Phase IV of the Al Maktoum Solar Park. Leveraging bifacial PV technology with long-term PPA with DEWA.
                    </p>

                    <div className="em-dd-info-grid">
                      <div className="em-dd-info-item">
                        <div className="em-dd-info-icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1.66675V18.3334" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1667 4.16675H7.91667C7.14312 4.16675 6.40125 4.47404 5.85427 5.02102C5.30729 5.568 5 6.30987 5 7.08341C5 7.85696 5.30729 8.59883 5.85427 9.14581C6.40125 9.69279 7.14312 10.0001 7.91667 10.0001H12.0833C12.8569 10.0001 13.5987 10.3074 14.1457 10.8544C14.6927 11.4013 15 12.1432 15 12.9167C15 13.6903 14.6927 14.4322 14.1457 14.9791C13.5987 15.5261 12.8569 15.8334 12.0833 15.8334H5" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div className="em-dd-info-content">
                          <span className="em-dd-info-label">Minimum Investment</span>
                          <span className="em-dd-info-value">$50,000</span>
                        </div>
                      </div>

                      <div className="em-dd-info-item">
                        <div className="em-dd-info-icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3334 10.0001H16.2667C15.9026 9.9993 15.5481 10.1178 15.2577 10.3376C14.9672 10.5573 14.7567 10.8661 14.6584 11.2167L12.7001 18.1834C12.6875 18.2267 12.6611 18.2647 12.6251 18.2917C12.589 18.3188 12.5452 18.3334 12.5001 18.3334C12.455 18.3334 12.4111 18.3188 12.3751 18.2917C12.339 18.2647 12.3127 18.2267 12.3001 18.1834L7.70008 1.81675C7.68746 1.77347 7.66114 1.73546 7.62508 1.70841C7.58902 1.68137 7.54516 1.66675 7.50008 1.66675C7.455 1.66675 7.41114 1.68137 7.37508 1.70841C7.33902 1.73546 7.3127 1.77347 7.30008 1.81675L5.34175 8.78341C5.2438 9.13271 5.03457 9.44051 4.7458 9.66009C4.45704 9.87967 4.10451 9.99904 3.74175 10.0001H1.66675" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div className="em-dd-info-content">
                          <span className="em-dd-info-label">Total Raise</span>
                          <span className="em-dd-info-value">$25M</span>
                        </div>
                      </div>

                      <div className="em-dd-info-item">
                        <div className="em-dd-info-icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0001 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6025 1.66675 10.0001 1.66675C5.39771 1.66675 1.66675 5.39771 1.66675 10.0001C1.66675 14.6025 5.39771 18.3334 10.0001 18.3334Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div className="em-dd-info-content">
                          <span className="em-dd-info-label">Current Progress</span>
                          <span className="em-dd-info-value">68% Funded</span>
                        </div>
                      </div>

                      <div className="em-dd-info-item">
                        <div className="em-dd-info-icon">
                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3334 17.5V15.8333C13.3334 14.9493 12.9822 14.1014 12.3571 13.4763C11.732 12.8512 10.8841 12.5 10.0001 12.5H5.00008C4.11603 12.5 3.26818 12.8512 2.64306 13.4763C2.01794 14.1014 1.66675 14.9493 1.66675 15.8333V17.5" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 2.60669C14.048 2.792 14.6811 3.20941 15.133 3.79341C15.5849 4.37741 15.8301 5.09493 15.8301 5.83336C15.8301 6.57178 15.5849 7.28931 15.133 7.8733C14.6811 8.4573 14.048 8.87471 13.3333 9.06002" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 17.5001V15.8334C18.3327 15.0948 18.0869 14.3774 17.6344 13.7937C17.1819 13.2099 16.5484 12.793 15.8333 12.6084" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.50008 9.16667C9.34103 9.16667 10.8334 7.67428 10.8334 5.83333C10.8334 3.99238 9.34103 2.5 7.50008 2.5C5.65913 2.5 4.16675 3.99238 4.16675 5.83333C4.16675 7.67428 5.65913 9.16667 7.50008 9.16667Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div className="em-dd-info-content">
                          <span className="em-dd-info-label">Investors</span>
                          <span className="em-dd-info-value">142 Backers</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="em-dd-section">
                    <h3 className="em-dd-section-subtitle">Key Highlights</h3>
                    
                    <div className="em-dd-highlight">
                      <div className="em-dd-highlight-icon em-dd-highlight-icon--success">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.1676 8.33332C18.5482 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.09 16.8667 13.3438 17.6311C11.5977 18.3955 9.64227 18.5381 7.80367 18.0353C5.96506 17.5325 4.35441 16.4145 3.24031 14.8678C2.12622 13.3212 1.57602 11.4394 1.68147 9.53615C1.78692 7.63294 2.54165 5.8234 3.81979 4.4093C5.09793 2.9952 6.82223 2.06202 8.70514 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="em-dd-highlight-content">
                        <h4 className="em-dd-highlight-title">Strong Fundamentals</h4>
                        <p className="em-dd-highlight-desc">Solid financial backing with established 5-year track record in renewable energy sector</p>
                      </div>
                    </div>

                    <div className="em-dd-highlight">
                      <div className="em-dd-highlight-icon em-dd-highlight-icon--success">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.1676 8.33332C18.5482 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.09 16.8667 13.3438 17.6311C11.5977 18.3955 9.64227 18.5381 7.80367 18.0353C5.96506 17.5325 4.35441 16.4145 3.24031 14.8678C2.12622 13.3212 1.57602 11.4394 1.68147 9.53615C1.78692 7.63294 2.54165 5.8234 3.81979 4.4093C5.09793 2.9952 6.82223 2.06202 8.70514 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="em-dd-highlight-content">
                        <h4 className="em-dd-highlight-title">Regulatory Compliance</h4>
                        <p className="em-dd-highlight-desc">Full compliance with UAE regulations and AAOIFI Shariah standards</p>
                      </div>
                    </div>

                    <div className="em-dd-highlight">
                      <div className="em-dd-highlight-icon em-dd-highlight-icon--success">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.1676 8.33332C18.5482 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.09 16.8667 13.3438 17.6311C11.5977 18.3955 9.64227 18.5381 7.80367 18.0353C5.96506 17.5325 4.35441 16.4145 3.24031 14.8678C2.12622 13.3212 1.57602 11.4394 1.68147 9.53615C1.78692 7.63294 2.54165 5.8234 3.81979 4.4093C5.09793 2.9952 6.82223 2.06202 8.70514 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="em-dd-highlight-content">
                        <h4 className="em-dd-highlight-title">Asset-Backed Security</h4>
                        <p className="em-dd-highlight-desc">Investments secured by tangible solar infrastructure assets valued at 150% of investment</p>
                      </div>
                    </div>

                    <div className="em-dd-highlight">
                      <div className="em-dd-highlight-icon em-dd-highlight-icon--success">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.1676 8.33332C18.5482 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.09 16.8667 13.3438 17.6311C11.5977 18.3955 9.64227 18.5381 7.80367 18.0353C5.96506 17.5325 4.35441 16.4145 3.24031 14.8678C2.12622 13.3212 1.57602 11.4394 1.68147 9.53615C1.78692 7.63294 2.54165 5.8234 3.81979 4.4093C5.09793 2.9952 6.82223 2.06202 8.70514 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.5 9.16659L10 11.6666L18.3333 3.33325" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="em-dd-highlight-content">
                        <h4 className="em-dd-highlight-title">Long-term Contracts</h4>
                        <p className="em-dd-highlight-desc">20-year power purchase agreements with government entities ensuring stable revenue</p>
                      </div>
                    </div>

                    <div className="em-dd-highlight">
                      <div className="em-dd-highlight-icon em-dd-highlight-icon--warning">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.57501 3.21667L1.51668 15C1.37123 15.252 1.29166 15.5377 1.28598 15.8296C1.28031 16.1215 1.34871 16.4101 1.4851 16.6673C1.62149 16.9246 1.82148 17.1422 2.06476 17.2991C2.30804 17.4559 2.58617 17.5469 2.87501 17.5633H17.0417C17.3285 17.5447 17.604 17.4526 17.8445 17.2958C18.085 17.139 18.2824 16.9227 18.4172 16.6673C18.5525 16.4101 18.6203 16.1226 18.6147 15.8318C18.609 15.541 18.5301 15.2562 18.3858 15.005L11.375 3.21667C11.2281 2.97669 11.0234 2.77873 10.7799 2.64253C10.5363 2.50634 10.2621 2.43604 9.98334 2.43604C9.70461 2.43604 9.43042 2.50634 9.18686 2.64253C8.9433 2.77873 8.7386 2.97669 8.59168 3.21667H8.57501Z" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 7.5V10.8333" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 14.1667H10.0083" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="em-dd-highlight-content">
                        <h4 className="em-dd-highlight-title">Monitored Risks</h4>
                        <p className="em-dd-highlight-desc">Market volatility and regulatory changes require ongoing monitoring</p>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="em-dd-summary-right">
                  <section className="em-dd-section em-dd-confidence-section">
                    <h3 className="em-dd-confidence-title">Due Diligence Confidence</h3>
                    <div className="em-dd-confidence-score">94%</div>
                    <div className="em-dd-confidence-bar">
                      <div className="em-dd-confidence-fill" style={{width: '94%'}}></div>
                    </div>
                    <p className="em-dd-confidence-desc">Audit complete: PriceWaterhouseCoopers (PwC)</p>
                  </section>

                  <section className="em-dd-section em-dd-portfolio-combined-section">
                    <div className="em-dd-portfolio-fit-content">
                      <div className="em-dd-portfolio-header">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0002 11.6668C10.9206 11.6668 11.6668 10.9206 11.6668 10.0002C11.6668 9.07969 10.9206 8.3335 10.0002 8.3335C9.07969 8.3335 8.3335 9.07969 8.3335 10.0002C8.3335 10.9206 9.07969 11.6668 10.0002 11.6668Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        <h3 className="em-dd-section-subtitle">Portfolio Fit Analysis</h3>
                      </div>

                      <div className="em-dd-fit-items">
                        <div className="em-dd-fit-item">
                          <div className="em-dd-fit-icon em-dd-fit-icon--success">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="em-dd-fit-text">Diversifies energy exposure</span>
                        </div>

                        <div className="em-dd-fit-item">
                          <div className="em-dd-fit-icon em-dd-fit-icon--success">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="em-dd-fit-text">Matches risk tolerance</span>
                        </div>

                        <div className="em-dd-fit-item">
                          <div className="em-dd-fit-icon em-dd-fit-icon--warning">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.29 3.86L1.82 18C1.64537 18.3024 1.55295 18.6453 1.55199 18.9945C1.55103 19.3437 1.64156 19.6871 1.81442 19.9905C1.98728 20.2939 2.23617 20.5467 2.53716 20.7238C2.83816 20.9009 3.18006 20.9962 3.53 21H20.47C20.8199 20.9962 21.1618 20.9009 21.4628 20.7238C21.7638 20.5467 22.0127 20.2939 22.1856 19.9905C22.3584 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6562 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="em-dd-fit-text">Increases GCC concentration to 42%</span>
                        </div>
                      </div>
                    </div>

                    <div className="em-dd-portfolio-stats-content">
                      <h3 className="em-dd-section-subtitle">Current Portfolio</h3>
                      
                      <div className="em-dd-portfolio-stats">
                        <div className="em-dd-portfolio-stat">
                          <span className="em-dd-portfolio-label">Current Portfolio</span>
                          <span className="em-dd-portfolio-value">$2.4M</span>
                        </div>

                        <div className="em-dd-portfolio-stat">
                          <span className="em-dd-portfolio-label">Active Investments</span>
                          <span className="em-dd-portfolio-value">8 positions</span>
                        </div>

                        <div className="em-dd-portfolio-stat">
                          <span className="em-dd-portfolio-label">Available Capital</span>
                          <span className="em-dd-portfolio-value">$580K</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Financials" && (
            <div className="em-dd-financials-content">
              <FinancialsTab isDarkMode={isDarkMode} sidebarCollapsed={sidebarCollapsed} />
            </div>
          )}















          {activeTab === "Risk" && (
            <div className="em-dd-risk-content">
              <RiskTab isDarkMode={isDarkMode} sidebarCollapsed={sidebarCollapsed} />
            </div>
          )}

          {activeTab === "Legal" && (
            <div className="em-dd-legal-content">
              <LegalTab isDarkMode={isDarkMode} sidebarCollapsed={sidebarCollapsed} />
            </div>
          )}

          {activeTab === "Governance" && (
            <div className="em-dd-governance-content">
              <GovernanceTab isDarkMode={isDarkMode} sidebarCollapsed={sidebarCollapsed} />
            </div>
          )}

          {activeTab === "Documents" && (
            <div className="em-dd-documents-content">
              <DocumentsTab isDarkMode={isDarkMode} sidebarCollapsed={sidebarCollapsed} />
            </div>
          )}

          {activeTab === "AAOIFI & Shariah" && (
            <div className="em-dd-aaoiifi-content">
              <AAOIFIShariahTab isDarkMode={isDarkMode} sidebarCollapsed={sidebarCollapsed} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
