import { useState, useRef, useEffect } from "react";
import "./SectorPerformanceChart.css";

export default function SectorPerformanceChart() {
  const [hovered, setHovered] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 550, height: 400 });
  const containerRef = useRef(null);

  const sectors = [
    { name: "HealthTech", roi: 48, value: 128, color: "#22C55E" },
    { name: "FinTech", roi: 32, value: 96, color: "#3B82F6" },
    { name: "AI/ML", roi: 28, value: 84, color: "#8B5CF6" },
    { name: "CleanTech", roi: 22, value: 66, color: "#F59E0B" },
    { name: "EdTech", roi: 18, value: 34, color: "#EC4899" }
  ];

  const total = sectors.reduce((sum, s) => sum + s.value, 0);

  // Container-based responsiveness
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        // Responsive height based on container width
        const height = Math.max(300, Math.min(450, width * 0.8));
        setDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  // Calculate responsive donut dimensions
  const donutSize = Math.min(dimensions.width * 0.6, dimensions.height * 0.5, 240);
  const strokeWidth = Math.max(donutSize * 0.15, 20);
  const innerRadius = Math.max(donutSize * 0.3, 30);
  const outerRadius = innerRadius + strokeWidth;

  return (
    <div 
      ref={containerRef}
      className="em-sector-performance-chart"
    >
      {/* ================= HEADER ================= */}
      <header className="em-sector-performance-header">
        <div className="em-sector-performance-header-left">
          <div className="em-sector-performance-title-group">
            <div className="em-sector-performance-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3333 10H16.2667C15.9025 9.99924 15.548 10.1178 15.2576 10.3375C14.9671 10.5572 14.7567 10.866 14.6583 11.2167L12.7 18.1834C12.6874 18.2266 12.6611 18.2646 12.625 18.2917C12.5889 18.3187 12.5451 18.3334 12.5 18.3334C12.4549 18.3334 12.4111 18.3187 12.375 18.2917C12.3389 18.2646 12.3126 18.2266 12.3 18.1834L7.69999 1.81669C7.68737 1.77341 7.66105 1.7354 7.62499 1.70835C7.58893 1.68131 7.54507 1.66669 7.49999 1.66669C7.45491 1.66669 7.41105 1.68131 7.37499 1.70835C7.33893 1.7354 7.31261 1.77341 7.29999 1.81669L5.34166 8.78335C5.24371 9.13265 5.03447 9.44045 4.74571 9.66003C4.45695 9.87961 4.10442 9.99898 3.74166 10H1.66666" stroke="#FFC300" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="em-sector-performance-title-text">
              <h2 className="em-sector-performance-title">
                Sector Performance
                <span className="em-info-icon" aria-label="Information" tabIndex={0}>
                  <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
                  </svg>
                </span>
              </h2>
              <p className="em-sector-performance-subtitle">ROI by industry sector</p>
            </div>
          </div>
        </div>

        <div className="em-sector-performance-actions">
          <button className="em-icon-button" aria-label="Expand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10 19H5V14M14 5H19V10" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="em-icon-button" aria-label="Edit">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.333 2a2.121 2.121 0 0 1 3 3L5.333 14l-4 1.333L2.667 11l8-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="em-icon-button" aria-label="More">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="4" r="1" fill="currentColor" />
              <circle cx="8" cy="8" r="1" fill="currentColor" />
              <circle cx="8" cy="12" r="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="em-sector-performance-content">
        {/* Donut */}
        <div className="em-sector-performance-chart-wrap">
          <svg
            viewBox={`0 0 ${donutSize} ${donutSize}`}
            className="em-sector-performance-donut"
            style={{ width: donutSize, height: donutSize }}
            role="img"
            aria-label="Sector performance donut chart"
          >
            <circle
              cx={donutSize / 2}
              cy={donutSize / 2}
              r={outerRadius + 2}
              className="em-sector-performance-donut-border"
            />
            <circle
              cx={donutSize / 2}
              cy={donutSize / 2}
              r={innerRadius - 2}
              className="em-sector-performance-donut-border"
            />

            <g transform={`rotate(-90 ${donutSize / 2} ${donutSize / 2})`}>
              {sectors.reduce(
                (acc, sector, i) => {
                  const radius = (outerRadius + innerRadius) / 2;
                  const circumference = 2 * Math.PI * radius;
                  const gap = 4;
                  const length =
                    (sector.value / total) * circumference - gap;

                  acc.elements.push(
                    <circle
                      key={sector.name}
                      cx={donutSize / 2}
                      cy={donutSize / 2}
                      r={radius}
                      stroke={sector.color}
                      strokeWidth={strokeWidth}
                      strokeDasharray={`${length} ${circumference}`}
                      strokeDashoffset={-acc.offset}
                      className={`em-sector-performance-donut-segment ${
                        hovered === i ? "is-hovered" : ""
                      }`}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    />
                  );

                  acc.offset += length + gap;
                  return acc;
                },
                { offset: 0, elements: [] }
              ).elements}
            </g>
          </svg>
        </div>

        {/* Legend */}
        <div className="em-sector-performance-legend">
          {sectors.map((sector, i) => (
            <div
              key={sector.name}
              className="em-sector-legend-item"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className="em-sector-legend-dot"
                style={{ backgroundColor: sector.color }}
              />
              <span className="em-sector-legend-name">
                {sector.name}
              </span>
              <span className="em-sector-legend-roi">
                +{sector.roi}%
              </span>
              <span className="em-sector-legend-value">
                ${sector.value}k
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
