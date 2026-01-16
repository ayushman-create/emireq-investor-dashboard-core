import React, { useState, useMemo, useRef, useEffect } from 'react';
import './TokenBalanceGrowthChart.css';

const TokenBalanceGrowthChart = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 740, height: 420 });
  const containerRef = useRef(null);

  // Data for quarters
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
          <div className="tbg-title-row">
            <h2 className="tbg-title">Token Balance Growth</h2>
            <button className="tbg-info-btn" aria-label="Information">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 4V8M8 12H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className="tbg-subtitle">6-month trend of total token value</p>
        </div>
        <div className="tbg-header-actions">
          <button className="tbg-action-btn" aria-label="Expand">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2H6V6M10 2H14V6M2 14H6V10M10 14H14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className="tbg-action-btn" aria-label="Edit">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11 2L14 5L5 14H2V11L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="tbg-action-btn" aria-label="More options">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="4" r="1" fill="currentColor" />
              <circle cx="8" cy="8" r="1" fill="currentColor" />
              <circle cx="8" cy="12" r="1" fill="currentColor" />
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
            <defs key={`defs-${i}`}>
              <linearGradient id={`bg-gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          ))}

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
