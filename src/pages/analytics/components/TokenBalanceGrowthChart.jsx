import React, { useState, useMemo, useRef, useEffect } from 'react';
import './TokenBalanceGrowthChart.css';

const TokenBalanceGrowthChart = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 740, height: 420 });
  const containerRef = useRef(null);

  // Data for quarters - matching Figma proportions
  const data = [
    { quarter: 'Q1', value: 12000, roi: 12000 },
    { quarter: 'Q2', value: 28000, roi: 28000 },
    { quarter: 'Q3', value: 35000, roi: 35000 },
    { quarter: 'Q4', value: 52000, roi: 52000 }
  ];

  // Chart constants
  const PADDING = {
    top: 40,
    right: 40,
    bottom: 60,
    left: 60
  };

  const maxValue = 60000;
  const yStep = 15000;

  // Responsive dimensions
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        const height = Math.max(320, Math.min(420, width * 0.57));
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
  const barWidth = chartWidth / (data.length * 2);
  const barSpacing = barWidth;

  // Calculate bar positions and heights
  const bars = useMemo(() => {
    return data.map((item, i) => {
      const barHeight = (item.value / maxValue) * chartHeight;
      const x = PADDING.left + i * (barWidth + barSpacing) + barSpacing / 2;
      const y = PADDING.top + chartHeight - barHeight;
      
      return {
        ...item,
        x,
        y,
        width: barWidth,
        height: barHeight,
        centerX: x + barWidth / 2,
        topY: y
      };
    });
  }, [dimensions, chartWidth, chartHeight]);

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
    return bars.map(bar => ({
      x: bar.centerX,
      quarter: bar.quarter
    }));
  }, [bars]);

  const handleBarHover = (index) => {
    setHoveredBar(index);
  };

  const handleBarLeave = () => {
    setHoveredBar(null);
  };

  return (
    <section 
      ref={containerRef}
      className="tbg-card"
      aria-label="Token Balance Growth Chart"
    >
      {/* Header */}
      <header className="tbg-header">
        <div className="tbg-header-left">
          <div className="tbg-title-info-group">
            <div className="tbg-title-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0001 7.00049H22.0001V13.0005" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9999 7.00049L13.4999 15.5005L8.49988 10.5005L1.99988 17.0005" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="tbg-title-text-group">
              <div className="tbg-title-row">
                <h2 className="tbg-title">Token Balance Growth</h2>
                <span className="tbg-info-icon" aria-label="Information" tabIndex={0}>
                 <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
</svg>

                </span>
              </div>
              <p className="tbg-subtitle">6-month trend of total token value</p>
            </div>
          </div>
        </div>

        <div className="tbg-header-actions">
          <button 
            className="tbg-icon-button" 
            aria-label="Expand" 
            type="button"
            tabIndex={0}
          >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19H5V14M14 5H19V10" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
          <button 
            className="tbg-icon-button" 
            aria-label="Edit" 
            type="button"
            tabIndex={0}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.333 2a2.121 2.121 0 0 1 3 3L5.333 14l-4 1.333L2.667 11l8-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="tbg-icon-button" 
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
      <div className="tbg-chart-container">
        <svg
          width={dimensions.width}
          height={dimensions.height}
          className="tbg-svg"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
          {/* Definitions for gradients */}
          <defs>
            {bars.map((bar, i) => (
              <linearGradient key={`bg-gradient-${i}`} id={`bg-gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {/* Grid Lines */}
          {horizontalGridLines.map((line, i) => (
            <g key={`h-grid-${i}`}>
              <line
                x1={PADDING.left}
                y1={line.y}
                x2={dimensions.width - PADDING.right}
                y2={line.y}
                className="tbg-grid-line"
              />
              <text
                x={PADDING.left - 8}
                y={line.y + 4}
                className="tbg-y-label"
                textAnchor="end"
              >
                ${line.value / 1000}k
              </text>
            </g>
          ))}

          {verticalGridLines.map((line, i) => (
            <line
              key={`v-grid-${i}`}
              x1={line.x}
              y1={PADDING.top}
              x2={line.x}
              y2={PADDING.top + chartHeight}
              className="tbg-grid-line"
            />
          ))}

          {/* Background gradient bars */}
          {bars.map((bar, i) => (
            <rect
              key={`bg-bar-${i}`}
              x={bar.x}
              y={PADDING.top}
              width={bar.width}
              height={chartHeight}
              fill={`url(#bg-gradient-${i})`}
              className="tbg-bg-bar"
            />
          ))}

          {/* Foreground bars */}
          {bars.map((bar, i) => (
            <rect
              key={`bar-${i}`}
              x={bar.x}
              y={bar.y}
              width={bar.width}
              height={bar.height}
              className="tbg-bar"
              onMouseEnter={() => handleBarHover(i)}
              onMouseLeave={handleBarLeave}
              style={{ cursor: 'pointer' }}
            />
          ))}

          {/* Hover dot */}
          {hoveredBar !== null && (
            <circle
              cx={bars[hoveredBar].centerX}
              cy={bars[hoveredBar].topY}
              r="4"
              fill="white"
              stroke="#3B82F6"
              strokeWidth="2"
              className="tbg-hover-dot"
            />
          )}

          {/* X-axis labels */}
          {bars.map((bar, i) => (
            <text
              key={`x-label-${i}`}
              x={bar.centerX}
              y={dimensions.height - PADDING.bottom + 20}
              className="tbg-x-label"
              textAnchor="middle"
            >
              {bar.quarter}
            </text>
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredBar !== null && (
          <div
            className="tbg-tooltip"
            style={{
              left: `${bars[hoveredBar].centerX}px`,
              top: `${bars[hoveredBar].topY - 8}px`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="tbg-tooltip-quarter">{bars[hoveredBar].quarter}</div>
            <div className="tbg-tooltip-roi">ROI: ${bars[hoveredBar].roi.toLocaleString()}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TokenBalanceGrowthChart;