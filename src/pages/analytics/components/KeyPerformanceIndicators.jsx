import "./KeyPerformanceIndicators.css";

export default function KeyPerformanceIndicators() {
  const kpis = [
    {
      icon: "trend",
      title: "Best Performer",
      value: "HealthTech",
      metric: "+48% ROI",
      metricColor: "green"
    },
    {
      icon: "building",
      title: "Active Startups",
      value: "12 Companies",
      metric: "Across 5 sectors"
    },
    {
      icon: "clock",
      title: "Risk-Adjusted Return (Sharpe Ratio)",
      value: "2.8",
      metric: "Strong risk-adjusted performance"
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "trend":
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 4.66663H14.6667V8.66663" stroke="#717182" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6666 4.66663L8.99998 10.3333L5.66665 6.99996L1.33331 11.3333" stroke="#717182" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case "building":
        return (
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_57_1708)">
<path d="M4 14.6667V2.66671C4 2.31309 4.14048 1.97395 4.39052 1.7239C4.64057 1.47385 4.97971 1.33337 5.33333 1.33337H10.6667C11.0203 1.33337 11.3594 1.47385 11.6095 1.7239C11.8595 1.97395 12 2.31309 12 2.66671V14.6667H4Z" stroke="#717182" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00004 8H2.66671C2.31309 8 1.97395 8.14048 1.7239 8.39052C1.47385 8.64057 1.33337 8.97971 1.33337 9.33333V13.3333C1.33337 13.687 1.47385 14.0261 1.7239 14.2761C1.97395 14.5262 2.31309 14.6667 2.66671 14.6667H4.00004" stroke="#717182" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6H13.3333C13.687 6 14.0261 6.14048 14.2761 6.39052C14.5262 6.64057 14.6667 6.97971 14.6667 7.33333V13.3333C14.6667 13.687 14.5262 14.0261 14.2761 14.2761C14.0261 14.5262 13.687 14.6667 13.3333 14.6667H12" stroke="#717182" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66663 4H9.33329" stroke="#717182" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66663 6.66663H9.33329" stroke="#717182" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66663 9.33337H9.33329" stroke="#717182" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66663 12H9.33329" stroke="#717182" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_57_1708">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

        );
      case "clock":
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_57_1716)">
<path d="M14.0001 8.00007C14.3681 8.00007 14.6701 7.70074 14.6334 7.33474C14.4797 5.80418 13.8014 4.37387 12.7136 3.28628C11.6258 2.1987 10.1953 1.52076 8.66472 1.3674C8.29806 1.33074 7.99939 1.63274 7.99939 2.00074V7.33407C7.99939 7.51088 8.06963 7.68045 8.19465 7.80547C8.31968 7.9305 8.48925 8.00074 8.66606 8.00074L14.0001 8.00007Z" stroke="#717182" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1401 10.5933C13.7159 11.5963 13.0526 12.4801 12.208 13.1675C11.3634 13.8549 10.3632 14.3249 9.29502 14.5365C8.2268 14.748 7.12301 14.6947 6.08016 14.3811C5.03731 14.0676 4.08715 13.5033 3.31274 12.7377C2.53834 11.9721 1.96327 11.0284 1.63782 9.98923C1.31237 8.95003 1.24644 7.84692 1.4458 6.77635C1.64515 5.70578 2.10373 4.70035 2.78143 3.84795C3.45913 2.99555 4.33532 2.32214 5.3334 1.8866" stroke="#717182" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_57_1716">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

        );
      default:
        return null;
    }
  };

  return (
    <div className="em-key-performance-indicators">
      {/* ================= HEADER ================= */}
      <div className="em-risk-distribution-header">
        <div className="em-risk-distribution-left">
          <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 11C0 4.92487 4.92487 0 11 0H33C39.0751 0 44 4.92487 44 11V33C44 39.0751 39.0751 44 33 44H11C4.92487 44 0 39.0751 0 33V11Z" fill="#7F22FE" fill-opacity="0.12"/>
<path d="M13.75 13.7507V28.4174C13.75 28.9036 13.9432 29.3699 14.287 29.7138C14.6308 30.0576 15.0971 30.2507 15.5833 30.2507H30.25" stroke="#7F22FE" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4999 26.5839V19.2506" stroke="#7F22FE" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.9166 26.584V15.584" stroke="#7F22FE" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3332 26.5842V23.8342" stroke="#7F22FE" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <div className="em-risk-text">
            <h3 className="em-risk-title">Key Performance Indicators<span className="em-info-icon" aria-label="Information" tabIndex={0}>
                  <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
                  </svg>
                </span></h3>  
            <p className="em-risk-subtitle">Detailed overview of performance</p>
          </div>
        </div>

       <div className="em-portfolio-performance-actions">
          <button 
            className="em-icon-button" 
            aria-label="Expand" 
            type="button"
            tabIndex={0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 19H5V14M14 5H19V10" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="em-icon-button" 
            aria-label="Edit" 
            type="button"
            tabIndex={0}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.333 2a2.121 2.121 0 0 1 3 3L5.333 14l-4 1.333L2.667 11l8-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="em-icon-button" 
            aria-label="More options" 
            type="button"
            tabIndex={0}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="4" r="1" fill="currentColor"/>
              <circle cx="8" cy="8" r="1" fill="currentColor"/>
              <circle cx="8" cy="12" r="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="em-kpi-content">
        <div className="em-kpi-grid">
          {kpis.map((kpi, index) => (
            <div key={index} className={`em-kpi-card ${index === 2 ? 'em-kpi-card--full' : ''}`}>
              <div className="em-kpi-card-icon">
                {getIcon(kpi.icon)}
              </div>
              <div className="em-kpi-card-content">
                <div className="em-kpi-card-title">{kpi.title}</div>
                <div className="em-kpi-card-value">{kpi.value}</div>
                <div className={`em-kpi-card-metric ${kpi.metricColor ? `em-kpi-card-metric--${kpi.metricColor}` : ''}`}>
                  {kpi.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

