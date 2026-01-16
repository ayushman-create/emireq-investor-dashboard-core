import { useEffect, useMemo, useRef, useState } from "react";
import "./TokenBalanceChart.css";

/* ================== DATA ================== */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const VALUES = [35, 62, 140, 62, 108, 102, 148, 102, 190];

const Y_TICKS = [0, 50, 100, 150, 200, 250];

export default function TokenBalanceChart() {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, visible: false, value: 0, percentage: 0 });
  const [dimensions, setDimensions] = useState({ width: 740, height: 420 });
  const [isInteracting, setIsInteracting] = useState(false);

  const PADDING = {
    top: 28,
    right: 28,
    bottom: 58,
    left: 56,
  };

  const chartWidth = dimensions.width - PADDING.left - PADDING.right;
  const chartHeight = dimensions.height - PADDING.top - PADDING.bottom;

  const maxY = 250;

  const xStep = chartWidth / (MONTHS.length - 1);
  const yStep = chartHeight / maxY;

  // Responsive dimensions using ResizeObserver
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        // Calculate responsive height based on width (aspect ratio)
        const height = Math.max(320, Math.min(420, width * 0.57));
        
        // Update dimensions smoothly
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

  /* ================== POINT CALC ================== */
  const points = useMemo(() => {
    return VALUES.map((v, i) => ({
      x: PADDING.left + i * xStep,
      y: PADDING.top + chartHeight - v * yStep,
      value: v,
      label: MONTHS[i],
    }));
  }, [dimensions]);

  /* ================== SMOOTH PATH ================== */
  const pathD = useMemo(() => {
    return points.reduce((acc, p, i, arr) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = arr[i - 1];
      const cx = (prev.x + p.x) / 2;
      return `${acc} C ${cx} ${prev.y}, ${cx} ${p.y}, ${p.x} ${p.y}`;
    }, "");
  }, [points]);

  /* ================== TOOLTIP ================== */
  const showTooltip = (index, evt) => {
    const point = points[index];
    const rect = containerRef.current.getBoundingClientRect();
    const svgRect = svgRef.current.getBoundingClientRect();
    
    // Calculate position relative to the container
    const tooltipX = point.x;
    const tooltipY = point.y + 100; // Position right above the dot
    
    const currentValue = VALUES[index];
    const previousValue = index > 0 ? VALUES[index - 1] : VALUES[index];
    const percentage = index > 0 ? Math.round(((currentValue - previousValue) / previousValue) * 100) : 0;
    
    console.log('Tooltip data:', { index, currentValue, percentage, point, tooltipX, tooltipY });
    
    setTooltip({
      x: tooltipX,
      y: tooltipY,
      visible: true,
      value: currentValue,
      percentage: percentage
    });
    setHoverIndex(index);
  };

  const hideTooltip = () => {
    // Only hide tooltip if not in a clicked/active state
    if (hoverIndex !== null && activeIndex === null) {
      setHoverIndex(null);
      setTooltip((t) => ({ ...t, visible: false }));
    }
  };

  const handleMonthHover = (index) => {
    // Simple hover without conflicts
    const point = points[index];
    const tooltipX = point.x;
    const tooltipY = point.y + 100; // Same spacing as showTooltip
    
    const currentValue = VALUES[index];
    const previousValue = index > 0 ? VALUES[index - 1] : VALUES[index];
    const percentage = index > 0 ? Math.round(((currentValue - previousValue) / previousValue) * 100) : 0;
    
    setTooltip({
      x: tooltipX,
      y: tooltipY,
      visible: true,
      value: currentValue,
      percentage: percentage
    });
    setHoverIndex(index);
  };

  const active = hoverIndex !== null ? hoverIndex : activeIndex;

  return (
    <section
      ref={containerRef}
      className="tbc-card"
      aria-label="Token Balance Growth Chart"
    >
      {/* ================= HEADER ================= */}
      <header className="tbc-header">
        <div>
          <h2 className="tbc-title">
            Token Balance Growth
            <span className="em-info-icon" aria-label="Information" tabIndex={0}>
             <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
</svg>

            </span>
          </h2>
          <p className="tbc-subtitle">
            6-month trend of total token value
          </p>
        </div>

        <div className="em-portfolio-chart-actions">
          <button 
            className="em-icon-button" 
            aria-label="Expand" 
            type="button"
            tabIndex={0}
          >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19H5V14M14 5H19V10" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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

      {/* ================= CHART ================= */}
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="tbc-svg"
        role="img"
      >
        {/* GRIDLINES */}
        {Y_TICKS.map((tick) => {
          const y =
            PADDING.top + chartHeight - tick * yStep;
          return (
            <g key={tick}>
              <line
                x1={PADDING.left}
                x2={dimensions.width - PADDING.right}
                y1={y}
                y2={y}
                className={`tbc-grid ${
                  activeIndex !== null && tick === Math.round(points[activeIndex].value / 50) * 50
                    ? "is-active"
                    : ""
                }`}
              />
              <text
                x={PADDING.left - 12}
                y={y + 4}
                className="tbc-y-label"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {/* LINE */}
        <path d={pathD} className="tbc-line" />

        {/* POINTS */}
        {points.map((p, i) => {
          const isActive = i === active;
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={isActive ? 8 : 5}
              className={`tbc-point ${isActive ? "is-active" : ""}`}
              tabIndex={0}
              role="button"
              aria-label={`${p.label} value ${p.value}`}
              onMouseEnter={(e) => showTooltip(i, e)}
              onMouseMove={(e) => showTooltip(i, e)}
              onMouseLeave={hideTooltip}
              onFocus={(e) => showTooltip(i, e)}
              onBlur={hideTooltip}
            />
          );
        })}

        {/* X AXIS */}
        <line
          x1={PADDING.left}
          x2={dimensions.width - PADDING.right}
          y1={PADDING.top + chartHeight}
          y2={PADDING.top + chartHeight}
          className="tbc-x-axis"
        />

        {/* MONTH LABELS */}
        {MONTHS.map((m, i) => (
          <text
            key={m}
            x={PADDING.left + i * xStep}
            y={dimensions.height - 22}
            className={`tbc-x-label ${i === activeIndex ? "is-active" : ""}`}
            onMouseEnter={() => handleMonthHover(i)}
            onMouseLeave={hideTooltip}
            onClick={() => {
              setActiveIndex(i);
              // Show tooltip for clicked month
              const point = points[i];
              const tooltipX = point.x;
              const tooltipY = point.y + 100;
              const currentValue = VALUES[i];
              const previousValue = i > 0 ? VALUES[i - 1] : VALUES[i];
              const percentage = i > 0 ? Math.round(((currentValue - previousValue) / previousValue) * 100) : 0;
              
              setTooltip({
                x: tooltipX,
                y: tooltipY,
                visible: true,
                value: currentValue,
                percentage: percentage
              });
            }}
            style={{ cursor: 'pointer' }}
          >
            {m}
          </text>
        ))}
        
        {/* ACTIVE MONTH PILL */}
        {activeIndex !== null && (
          <g>
            <rect
              x={PADDING.left + activeIndex * xStep - 26}
              y={dimensions.height - 40}
              width={52}
              height={24}
              rx={12}
              className="tbc-month-pill"
            />
            <text
              x={PADDING.left + activeIndex * xStep}
              y={dimensions.height - 22}
              className="tbc-month-pill-text"
              textAnchor="middle"
            >
              {MONTHS[activeIndex]}
            </text>
          </g>
        )}
      </svg>


      {/* ================= TOOLTIP ================= */}
      {tooltip.visible && (
        <div
          className="tbc-tooltip"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translate(-50%, -100%) translateY(-20px)'
          }}
        >
          <span className="tbc-tooltip-main">${tooltip.value}K</span>
          <span className="tbc-tooltip-sub">{tooltip.percentage > 0 ? '+' : ''}{tooltip.percentage}%</span>
        </div>
      )}
    </section>
  );
}
