import { useState, useRef, useEffect } from "react";
import "./TokenDistributionChart.css";

export default function TokenDistributionChart() {
  const [active, setActive] = useState(null);
  const containerRef = useRef(null);
  const [svgSize, setSvgSize] = useState(240);

  /* Responsive SVG sizing */
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        const size = Math.max(200, Math.min(280, width * 0.8));
        setSvgSize(size);
      }
    });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const SEGMENTS = [
    { label: "EMRQ", color: "#4F46E5", value: 50 },
    { label: "ZMED", color: "#10B981", value: 32 },
    { label: "PLXR", color: "#F59E0B", value: 18 },
  ];

  return (
    <div className="td-card">
      <h3 className="td-title">Token Distribution</h3>
      <p className="td-subtitle">Portfolio allocation</p>

      <div className="td-chart" ref={containerRef}>
        <svg
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          width={svgSize}
          height={svgSize}
          className="td-donut"
          role="img"
          aria-label="Token distribution donut chart"
        >
          {/* Outer ring */}
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={svgSize * 0.46}
            className="td-donut-border"
          />

          {/* Inner ring */}
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={svgSize * 0.29}
            className="td-donut-border"
          />

          {/* Segments */}
          <g transform={`rotate(-90 ${svgSize / 2} ${svgSize / 2})`}>
            {SEGMENTS.reduce(
              (acc, seg, i) => {
                const radius = svgSize * 0.375;
                const circumference = 2 * Math.PI * radius;
                const gap = svgSize * 0.02;
                const length = (seg.value / 100) * circumference - gap;

                acc.items.push(
                  <circle
                    key={seg.label}
                    cx={svgSize / 2}
                    cy={svgSize / 2}
                    r={radius}
                    stroke={seg.color}
                    strokeDasharray={`${length} ${circumference}`}
                    strokeDashoffset={-acc.offset}
                    className={`td-donut-segment ${active === i ? 'is-active' : ''}`}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(active === i ? null : i)}
                  />
                );

                acc.offset += length + gap;
                return acc;
              },
              { offset: 0, items: [] }
            ).items}
          </g>

          {/* Center content */}
          <g transform={`translate(${svgSize / 2} ${svgSize / 2})`}>
            {/* Icon */}
            <g transform={`translate(-18 -18)`} className="td-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.68 20.4401C16.5181 20.4401 20.44 16.5181 20.44 11.6801C20.44 6.84209 16.5181 2.9201 11.68 2.9201C6.84203 2.9201 2.92004 6.84209 2.92004 11.6801C2.92004 16.5181 6.84203 20.4401 11.68 20.4401Z" stroke="#90A1B9" stroke-width="2.92" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.4114 15.141C27.7916 15.6555 29.0197 16.5098 29.9822 17.6247C30.9448 18.7397 31.6106 20.0794 31.9182 21.5198C32.2258 22.9603 32.1652 24.4551 31.742 25.8659C31.3188 27.2768 30.5467 28.5581 29.497 29.5915C28.4474 30.6249 27.1542 31.3769 25.7369 31.778C24.3196 32.1791 22.8241 32.2164 21.3886 31.8864C19.9531 31.5564 18.624 30.8697 17.5242 29.8899C16.4244 28.9101 15.5894 27.6688 15.0964 26.2808" stroke="#90A1B9" stroke-width="2.92" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.22 8.76013H11.68V14.6001" stroke="#90A1B9" stroke-width="2.92" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.3966 20.2643L25.4186 21.3009L21.3014 25.4181" stroke="#90A1B9" stroke-width="2.92" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </g>

            {/* Label */}
            <text y={svgSize * 0.15} className="td-center-text">
              Total
            </text>
          </g>
        </svg>
      </div>

      {/* Legend */}
      <div className="td-legend">
        {SEGMENTS.map((s, i) => (
          <div
            key={s.label}
            className={`td-legend-item ${active === i ? "is-active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(active === i ? null : i)}
          >
            <span className="td-dot" style={{ background: s.color }} />
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}
