import { useState, useRef } from 'react';
import './PortfolioChart.css';

export default function PortfolioChart() {
  const [selectedRange, setSelectedRange] = useState('');
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const svgRef = useRef(null);
  const timeRanges = ['1W', '1M', '3M', '6M', '1Y', 'ALL'];

  // Chart data + tooltip meta to match Figma visual
  const chartData = [
    {
      month: 'Jan',
      value: 300,
      tooltipDate: 'Jan 29, 01:30 AM',
      tooltipValue: '$11,824.12',
    },
    {
      month: 'Feb',
      value: 420,
      tooltipDate: 'Feb 29, 01:30 AM',
      tooltipValue: '$12,932.10',
    },
    {
      month: 'Mar',
      value: 300,
      tooltipDate: 'Mar 29, 01:30 AM',
      tooltipValue: '$12,204.44',
    },
    {
      month: 'Apr',
      value: 380,
      tooltipDate: 'Apr 29, 01:30 AM',
      tooltipValue: '$13,215.88',
    },
    {
      month: 'May',
      value: 350,
      // Exact value shown in Figma tooltip
      tooltipDate: 'May 29, 01:30 AM',
      tooltipValue: '$14,032.54',
    },
    {
      month: 'Jun',
      value: 450,
      tooltipDate: 'Jun 29, 01:30 AM',
      tooltipValue: '$14,882.32',
    },
    {
      month: 'Jul',
      value: 440,
      tooltipDate: 'Jul 29, 01:30 AM',
      tooltipValue: '$15,104.20',
    },
  ];

  // We use a scale max of 600k so each 150k step
  // (0 → 150 → 300 → 450 → top) occupies equal pixel height.
  // The top tick is labeled "$500k" to match Figma.
  const SCALE_MAX = 600;
  const CHART_BOTTOM = 180;
  const CHART_TOP = 24;
  const CHART_LEFT = 80;
  const CHART_RIGHT = 620;
  const CHART_WIDTH = CHART_RIGHT - CHART_LEFT;

  const getY = (value) => {
    const range = CHART_BOTTOM - CHART_TOP;
    return CHART_BOTTOM - (value / SCALE_MAX) * range;
  };

  const handleChartMouseMove = (e) => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const svgPoint = svg.createSVGPoint();
    svgPoint.x = e.clientX - rect.left;
    svgPoint.y = e.clientY - rect.top;

    const point = svgPoint.matrixTransform(svg.getScreenCTM().inverse());
    const x = point.x;

    // Calculate X positions for all data points (Jan through Jul)
    const dataPointXs = chartData.map((d, i) => {
      return CHART_LEFT + (i * (CHART_WIDTH / (chartData.length - 1)));
    });

    // Only hide tooltip if we're clearly outside the chart area
    if (x < CHART_LEFT - 40 || x > CHART_RIGHT + 40) {
      setHoveredPoint(null);
      return;
    }

    // Find the closest data point by distance (works for all 7 months)
    let closestIndex = 0;
    let minDistance = Infinity;

    dataPointXs.forEach((pointX, i) => {
      const distance = Math.abs(x - pointX);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });

    // Ensure index is valid (should always be 0-6 for 7 months)
    closestIndex = Math.max(0, Math.min(chartData.length - 1, closestIndex));
    
    // Always show tooltip for the closest point
    const pointX = dataPointXs[closestIndex];

    setHoveredPoint({
      index: closestIndex,
      x: pointX,
      y: getY(chartData[closestIndex].value),
      data: chartData[closestIndex],
    });
  };

  const handleChartMouseLeave = () => {
    setHoveredPoint(null);
  };

  // Generate area path
  const generateAreaPath = () => {
    const points = chartData.map((d, i) => {
      const x = CHART_LEFT + (i * (CHART_WIDTH / (chartData.length - 1)));
      const y = getY(d.value);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    });
    
    // Close the path
    const lastX = CHART_LEFT + ((chartData.length - 1) * (CHART_WIDTH / (chartData.length - 1)));
    return `${points.join(' ')} L ${lastX} ${CHART_BOTTOM} L ${CHART_LEFT} ${CHART_BOTTOM} Z`;
  };

  // Generate line path
  const generateLinePath = () => {
    return chartData.map((d, i) => {
      const x = CHART_LEFT + (i * (CHART_WIDTH / (chartData.length - 1)));
      const y = getY(d.value);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <div className="em-portfolio-chart">
      <div className="em-portfolio-chart-header">
        <div className="em-portfolio-chart-heading">
          <h3 className="em-portfolio-chart-title">
            Portfolio Performance
            <span className="em-info-icon" aria-label="Information" tabIndex={0}>
             <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
</svg>

            </span>
          </h3>
          <p className="em-portfolio-chart-subtitle">
            Your investment growth over time.
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
      </div>

      <div className="em-portfolio-chart-content">
        <div className="em-portfolio-chart-top">
          <div className="em-portfolio-chart-value-block">
            <div className="em-portfolio-chart-value">
              <span className="em-portfolio-chart-amount">$410,000</span>
              <span className="em-portfolio-chart-change">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 4.66669H14.6667V8.66669" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6667 4.66669L9.00001 10.3334L5.66668 7.00002L1.33334 11.3334" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                +46.4%
              </span>
            </div>
            <p className="em-portfolio-chart-label">Current portfolio value</p>
          </div>

          <div className="em-portfolio-chart-ranges">
            {timeRanges.map((range) => (
              <button
                key={range}
                type="button"
                className={`em-portfolio-chart-range ${
                  selectedRange === range ? 'active' : ''
                }`}
                onClick={() => setSelectedRange(range)}
                tabIndex={0}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="em-portfolio-chart-graph">
          <svg
            ref={svgRef}
            viewBox="0 0 640 220"
            className="em-chart-svg"
            onMouseMove={handleChartMouseMove}
            onMouseLeave={handleChartMouseLeave}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Gradient for area fill - purple to white */}
              <linearGradient id="chartAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Horizontal gridlines */}
            {/** Evenly-spaced Y grid lines: 0k → 150k → 300k → 450k → 500k.
             *  We map these to a linear scale 0 → 600k so each step is
             *  visually identical in height, exactly like the Figma.
             */}
            {[0, 150, 300, 450, 600].map((tick) => {
              const y = getY(tick);
              return (
                <line
                  key={tick}
                  x1={CHART_LEFT}
                  x2={CHART_RIGHT}
                  y1={y}
                  y2={y}
                  stroke="#E5E7EB"
                  strokeDasharray="6 6"
                  strokeWidth="1"
                  className="em-chart-gridline"
                />
              );
            })}

            {/* Y-axis labels */}
            {[
              { display: '$500k', value: 600 },
              { display: '$450k', value: 450 },
              { display: '$300k', value: 300 },
              { display: '$150k', value: 150 },
              { display: '$0k', value: 0 },
            ].map((tick) => (
              <text
                key={tick.display}
                x="16"
                y={getY(tick.value) + 4}
                className="em-chart-label em-chart-y-label"
              >
                {tick.display}
              </text>
            ))}

            {/* Invisible overlay for hover detection - covers full chart area */}
            <rect
              x={CHART_LEFT}
              y={CHART_TOP}
              width={CHART_WIDTH}
              height={CHART_BOTTOM - CHART_TOP}
              fill="transparent"
              className="em-chart-hover-overlay"
            />

            {/* Area fill */}
            <path
              d={generateAreaPath()}
              fill="url(#chartAreaGradient)"
              className="em-chart-area"
            />

            {/* Chart line */}
            <path
              d={generateLinePath()}
              stroke="#7C3AED"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="em-chart-line"
            />

            {/* X-axis labels */}
            {chartData.map((d, i) => {
              const x = CHART_LEFT + (i * (CHART_WIDTH / (chartData.length - 1)));
              return (
                <text
                  key={d.month}
                  x={x}
                  y="204"
                  textAnchor="middle"
                  className="em-chart-label em-chart-x-label"
                >
                  {d.month}
                </text>
              );
            })}

            {/* Hover indicator line and tooltip (driven by hovered data point) */}
            {hoveredPoint && (
              <>
                <line
                  x1={hoveredPoint.x}
                  x2={hoveredPoint.x}
                  y1={CHART_TOP}
                  y2={CHART_BOTTOM}
                  stroke="#000000"
                  strokeWidth="2"
                  strokeDasharray="1 6"
                  className="em-chart-hover-line"
                />
                <g
                  transform={`translate(${hoveredPoint.x}, ${Math.max(
                    hoveredPoint.y - 20,
                    60,
                  )})`}
                >
                  <rect
                    x="-78"
                    y="-42"
                    width="156"
                    height="56"
                    rx="10"
                    fill="#111827"
                    className="em-chart-tooltip"
                  />
                  <text
                    x="0"
                    y="-18"
                    textAnchor="middle"
                    fill="#E5E7EB"
                    fontSize="12"
                    fontWeight="500"
                    className="em-chart-tooltip-date"
                  >
                    {hoveredPoint.data.tooltipDate}
                  </text>
                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="16"
                    fontWeight="600"
                    className="em-chart-tooltip-value"
                  >
                    {hoveredPoint.data.tooltipValue}
                  </text>
                </g>
              </>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}
