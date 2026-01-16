import React, { useState, useMemo, useRef, useEffect } from 'react';
import './PortfolioPerformanceChart.css';

const PortfolioPerformanceChart = () => {
  const [dimensions, setDimensions] = useState({ width: 600, height: 300 });
  const containerRef = useRef(null);

  // Data for 12 months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Portfolio and benchmark data - matching Figma proportions
  const portfolioData = [150, 165, 180, 200, 220, 240, 260, 280, 300, 330, 360, 375];
  const benchmarkData = [150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260];

  // Dynamic padding based on container size
  const PADDING = {
    top: Math.max(20, dimensions.height * 0.08),
    right: Math.max(20, dimensions.width * 0.04),
    bottom: Math.max(40, dimensions.height * 0.15),
    left: Math.max(40, dimensions.width * 0.08)
  };

  const maxValue = 600;
  const yStep = 150;

  // Container-based responsiveness
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        // Responsive height based on container width
        const height = Math.max(250, Math.min(350, width * 0.5));
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

  const chartWidth = dimensions.width - PADDING.left - PADDING.right;
  const chartHeight = dimensions.height - PADDING.top - PADDING.bottom;
  const xStep = chartWidth / (months.length - 1);

  // Calculate points for portfolio line
  const portfolioPoints = useMemo(() => {
    return portfolioData.map((value, index) => {
      const x = PADDING.left + index * xStep;
      const y = PADDING.top + chartHeight - (value / maxValue) * chartHeight;
      return { x, y, value };
    });
  }, [dimensions, chartWidth, chartHeight]);

  // Calculate points for benchmark line
  const benchmarkPoints = useMemo(() => {
    return benchmarkData.map((value, index) => {
      const x = PADDING.left + index * xStep;
      const y = PADDING.top + chartHeight - (value / maxValue) * chartHeight;
      return { x, y, value };
    });
  }, [dimensions, chartWidth, chartHeight]);

  // Create smooth curve path for portfolio
  const createPortfolioPath = () => {
    let path = `M ${portfolioPoints[0].x} ${portfolioPoints[0].y}`;
    for (let i = 1; i < portfolioPoints.length; i++) {
      const prev = portfolioPoints[i - 1];
      const curr = portfolioPoints[i];
      const next = portfolioPoints[i + 1];
      
      if (i === portfolioPoints.length - 1) {
        path += ` L ${curr.x} ${curr.y}`;
      } else {
        const dx = (next.x - prev.x) / 6;
        const dy = (next.y - prev.y) / 6;
        const cp1x = prev.x + dx;
        const cp1y = prev.y + dy;
        const cp2x = curr.x - dx;
        const cp2y = curr.y - dy;
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
      }
    }
    return path;
  };

  // Create smooth curve path for benchmark
  const createBenchmarkPath = () => {
    let path = `M ${benchmarkPoints[0].x} ${benchmarkPoints[0].y}`;
    for (let i = 1; i < benchmarkPoints.length; i++) {
      const prev = benchmarkPoints[i - 1];
      const curr = benchmarkPoints[i];
      const next = benchmarkPoints[i + 1];
      
      if (i === benchmarkPoints.length - 1) {
        path += ` L ${curr.x} ${curr.y}`;
      } else {
        const dx = (next.x - prev.x) / 6;
        const dy = (next.y - prev.y) / 6;
        const cp1x = prev.x + dx;
        const cp1y = prev.y + dy;
        const cp2x = curr.x - dx;
        const cp2y = curr.y - dy;
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
      }
    }
    return path;
  };

  // Create area fill paths
  const createPortfolioAreaPath = () => {
    const firstPoint = portfolioPoints[0];
    const lastPoint = portfolioPoints[portfolioPoints.length - 1];
    const baseY = PADDING.top + chartHeight;
    return `${createPortfolioPath()} L ${lastPoint.x} ${baseY} L ${firstPoint.x} ${baseY} Z`;
  };

  const createBenchmarkAreaPath = () => {
    const firstPoint = benchmarkPoints[0];
    const lastPoint = benchmarkPoints[benchmarkPoints.length - 1];
    const baseY = PADDING.top + chartHeight;
    return `${createBenchmarkPath()} L ${lastPoint.x} ${baseY} L ${firstPoint.x} ${baseY} Z`;
  };

  // Generate grid lines
  const horizontalGridLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i <= 4; i++) {
      const value = i * yStep;
      const y = PADDING.top + chartHeight - (value / maxValue) * chartHeight;
      lines.push({ y, value });
    }
    return lines;
  }, [chartHeight]);

  const verticalGridLines = useMemo(() => {
    return portfolioPoints.map((point, i) => ({
      x: point.x,
      month: months[i]
    }));
  }, [portfolioPoints]);

  return (
    <section 
      ref={containerRef}
      className="em-portfolio-performance-chart"
      aria-label="Portfolio Performance Chart"
    >
      {/* Header */}
      <header className="em-portfolio-performance-header">
        <div className="em-portfolio-performance-header-left">
          <div className="em-portfolio-performance-title-group">
            <div className="em-portfolio-performance-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3333 10H16.2667C15.9025 9.99924 15.548 10.1178 15.2576 10.3375C14.9671 10.5572 14.7567 10.866 14.6583 11.2167L12.7 18.1834C12.6874 18.2266 12.6611 18.2646 12.625 18.2917C12.5889 18.3187 12.5451 18.3334 12.5 18.3334C12.4549 18.3334 12.4111 18.3187 12.375 18.2917C12.3389 18.2646 12.3126 18.2266 12.3 18.1834L7.69999 1.81669C7.68737 1.77341 7.66105 1.7354 7.62499 1.70835C7.58893 1.68131 7.54507 1.66669 7.49999 1.66669C7.45491 1.66669 7.41105 1.68131 7.37499 1.70835C7.33893 1.7354 7.31261 1.77341 7.29999 1.81669L5.34166 8.78335C5.24371 9.13265 5.03447 9.44045 4.74571 9.66003C4.45695 9.87961 4.10442 9.99898 3.74166 10H1.66666" stroke="#00B031" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="em-portfolio-performance-title-text">
              <h2 className="em-portfolio-performance-title">
                Portfolio Performance
                <span className="em-info-icon" aria-label="Information" tabIndex={0}>
                  <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
                  </svg>
                </span>
              </h2>
              <p className="em-portfolio-performance-subtitle">vs Market Benchmark</p>
            </div>
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
              <path d="M10 19H5V14M14 5H19V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
      </header>

      {/* Chart Area */}
      <div className="em-portfolio-performance-content">
        <svg
          width={dimensions.width}
          height={dimensions.height}
          className="em-portfolio-performance-svg"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
          {/* Definitions for gradients */}
          <defs>
            <linearGradient id="benchmarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.1"/>
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          {horizontalGridLines.map((line, i) => (
            <g key={`h-grid-${i}`}>
              <line
                x1={PADDING.left}
                y1={line.y}
                x2={dimensions.width - PADDING.right}
                y2={line.y}
                className="em-grid-line-horizontal"
              />
              <text
                x={PADDING.left - 10}
                y={line.y + 3}
                className="em-y-label"
                textAnchor="end"
              >
                ${line.value}k
              </text>
            </g>
          ))}

          {verticalGridLines.map((line, i) => (
            <line
              key={`v-grid-${i}`}
              x1={line.x}
              y1={PADDING.top + 2}
              x2={line.x}
              y2={PADDING.top + chartHeight - 2}
              className="em-grid-line-vertical"
            />
          ))}

          {/* Area fills */}
          <path
            d={createBenchmarkAreaPath()}
            fill="url(#benchmarkGradient)"
            opacity="0.3"
          />
          <path
            d={createPortfolioAreaPath()}
            fill="url(#portfolioGradient)"
            opacity="0.3"
          />

          {/* Lines */}
          <path
            d={createBenchmarkPath()}
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <path
            d={createPortfolioPath()}
            fill="none"
            stroke="#22C55E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* X-axis labels */}
        <div className="em-portfolio-performance-xaxis">
          {months.map((month, index) => (
            <span key={index} className="em-portfolio-performance-month">
              {month}
            </span>
          ))}
        </div>

        {/* Legend */}
        <div className="em-portfolio-performance-legend">
          <div className="em-legend-item">
            <div className="em-legend-dot em-legend-dot--benchmark"></div>
            <span>Market Benchmark</span>
          </div>
          <div className="em-legend-item">
            <div className="em-legend-dot em-legend-dot--portfolio"></div>
            <span>Your Portfolio</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPerformanceChart;