import { useState } from "react";
import "./AnalyticsHeader.css";

export default function AnalyticsHeader() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("12M");

  const timeRanges = ["1M", "3M", "6M", "12M", "YTD", "All"];

  const handleExportCSV = () => {
    const csvContent = "Quarter,ROI,Portfolio Value\nQ1,$12,000,$150,000\nQ2,$18,000,$200,000\nQ3,$35,000,$280,000\nQ4,$45,000,$350,000";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'analytics-data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="em-analytics-header">
      <div className="em-analytics-header-top">
        <div className="em-analytics-header-title-section">
          <h1 className="em-analytics-header-title">Analytics Dashboard</h1>
          <p className="em-analytics-header-subtitle">Comprehensive performance insights and portfolio analytics</p>
        </div>
        
        <div className="em-analytics-header-controls">
          <div className="em-analytics-time-range-selector">
            {timeRanges.map((range) => (
              <button
                key={range}
                className={`em-time-range-btn ${selectedTimeRange === range ? 'active' : ''}`}
                onClick={() => setSelectedTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
          
          <button className="em-analytics-export-btn" onClick={handleExportCSV}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 11.3333V1.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.33333 8.66667L8 11.3333L10.6667 8.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.66667 14.6667H13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}

