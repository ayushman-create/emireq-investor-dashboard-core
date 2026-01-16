import { useState } from "react";
import "./RiskDistributionChart.css";

export default function RiskDistributionChart() {
  const risks = [
    { name: "Immunology", value: 35, color: "#22C55E" },
    { name: "Medium Risk", value: 45, color: "#F59E0B" },
    { name: "High Risk", value: 20, color: "#EF4444" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const total = risks.reduce((sum, r) => sum + r.value, 0);

  const centerX = 100;
  const centerY = 100;
  const radius = 72;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  const segments = risks.map((risk) => {
    const percent = risk.value / total;
    const dashLength = percent * circumference;
    const dashGap = circumference - dashLength;

    const midPercent = cumulativePercent + percent / 2;
    const midAngle = (midPercent * 360 - 90) * (Math.PI / 180);

    const pillX = centerX + radius * Math.cos(midAngle);
    const pillY = centerY + radius * Math.sin(midAngle);

    const offset = -cumulativePercent * circumference;
    cumulativePercent += percent;

    return {
      ...risk,
      length: dashLength,
      gap: dashGap,
      offset,
      pillX,
      pillY,
    };
  });

  const highRiskSegment = segments.find(
    (s) => s.name === "High Risk"
  );

  return (
    <div className="em-risk-distribution-chart">
      {/* ================= HEADER ================= */}
      <div className="em-risk-distribution-header">
        <div className="em-risk-distribution-left">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z"
              fill="#E7000B"
              fillOpacity="0.12"
            />
            <path
              d="M20 28.3333C24.6024 28.3333 28.3333 24.6023 28.3333 20C28.3333 15.3976 24.6024 11.6666 20 11.6666C15.3976 11.6666 11.6667 15.3976 11.6667 20C11.6667 24.6023 15.3976 28.3333 20 28.3333Z"
              stroke="#E7000B"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16.6666V20"
              stroke="#E7000B"
              strokeWidth="1.66667"
              strokeLinecap="round"
            />
            <path
              d="M20 23.3334H20.0083"
              stroke="#E7000B"
              strokeWidth="1.66667"
              strokeLinecap="round"
            />
          </svg>

          <div className="em-risk-text">
            <h3 className="em-risk-title">Risk Distribution</h3>
            <p className="em-risk-subtitle">Portfolio allocation</p>
          </div>
        </div>

        <button className="em-risk-menu-btn">
          <svg width="20" height="20">
            <circle cx="10" cy="4" r="1.5" fill="#6B7280" />
            <circle cx="10" cy="10" r="1.5" fill="#6B7280" />
            <circle cx="10" cy="16" r="1.5" fill="#6B7280" />
          </svg>
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="em-risk-distribution-content">
        <div className="em-risk-distribution-chart-wrapper">
          <svg viewBox="0 0 200 200" className="em-risk-distribution-svg">
            {segments.map((segment, index) => (
              <circle
                key={index}
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth={
                  activeIndex === index ? strokeWidth + 3 : strokeWidth
                }
                strokeLinecap="round"
                strokeDasharray={`${segment.length} ${segment.gap}`}
                strokeDashoffset={segment.offset}
                transform="rotate(-90 100 100)"
                className="em-risk-segment"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              />
            ))}
          </svg>

          {/* FLOATING VALUE PILL */}
          <div
            className="em-risk-float-pill"
            style={{
              left: `${highRiskSegment.pillX}px`,
              top: `${highRiskSegment.pillY}px`,
            }}
          >
            {highRiskSegment.value}%
          </div>
        </div>

        {/* ================= LEGEND ================= */}
        <div className="em-risk-distribution-legend">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="em-risk-legend-item"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span
                className="em-risk-legend-dot"
                style={{ backgroundColor: risk.color }}
              />
              <span className="em-risk-legend-label">{risk.name}</span>
              <span className="em-risk-legend-value">{risk.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
