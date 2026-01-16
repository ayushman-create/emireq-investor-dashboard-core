import React, { useState } from "react";
import "./SectorAllocation.css";

const DATA = [
  { label: "Real Estate", value: 35, color: "#1F5EFF" },
  { label: "Technology", value: 25, color: "#7C2CF5" },
  { label: "Healthcare", value: 20, color: "#14B87A" },
  { label: "Finance", value: 12, color: "#F59E0B" },
  { label: "Manufacturing", value: 8, color: "#EF4444" },
];

export default function SectorAllocation() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="sa-card" aria-label="Sector Allocation">
      {/* Header */}
      <header className="sa-header">
  <div className="sa-title-wrap">
    <h3 className="sa-title">Sector Allocation</h3>

    <span
      className="em-info-icon"
      tabIndex={0}
      aria-label="About sector allocation"
    >
     <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
</svg>

    </span>
  </div>

  <div className="sa-actions">
    {/* SVGs will be injected here */}
    <button className="sa-action-btn" aria-label="Expand" >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19H5V14M14 5H19V10" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </button>
    <button className="sa-action-btn" aria-label="Edit" >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7697 5.17029C15.4037 4.53917 16.429 4.54036 17.0616 5.17295L18.8289 6.94024C19.4614 7.57274 19.4627 8.59782 18.8318 9.23193L8.67324 19.4424L4.55927 19.4424L4.55927 15.3333L14.7697 5.17029Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.4805 6.46289L17.5368 10.5192" stroke="#888888" stroke-width="1.5" stroke-linecap="round"/>
</svg>

 </button>

    <button className="sa-action-btn" aria-label="More options" >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10.1504C6.50986 10.1504 6.94252 10.3302 7.30664 10.6943C7.67076 11.0585 7.85023 11.4909 7.84961 12L7.8418 12.1875C7.8024 12.617 7.6243 12.988 7.30566 13.3066C6.94155 13.6708 6.50908 13.8502 6 13.8496C5.49014 13.8496 5.05748 13.6698 4.69336 13.3057C4.32924 12.9415 4.14977 12.5091 4.15039 12C4.15039 11.4901 4.33022 11.0575 4.69434 10.6934C5.01294 10.3748 5.38368 10.1971 5.8125 10.1582L6 10.1504ZM12 10.1504C12.5099 10.1504 12.9425 10.3302 13.3066 10.6943C13.6708 11.0585 13.8502 11.4909 13.8496 12L13.8418 12.1875C13.8024 12.617 13.6243 12.988 13.3057 13.3066C12.9415 13.6708 12.5091 13.8502 12 13.8496C11.4901 13.8496 11.0575 13.6698 10.6934 13.3057C10.3292 12.9415 10.1498 12.5091 10.1504 12C10.1504 11.4901 10.3302 11.0575 10.6943 10.6934C11.0129 10.3748 11.3837 10.1971 11.8125 10.1582L12 10.1504ZM18 10.1504C18.5099 10.1504 18.9425 10.3302 19.3066 10.6943C19.6708 11.0585 19.8502 11.4909 19.8496 12L19.8418 12.1875C19.8024 12.617 19.6243 12.988 19.3057 13.3066C18.9415 13.6708 18.5091 13.8502 18 13.8496C17.4901 13.8496 17.0575 13.6698 16.6934 13.3057C16.3292 12.9415 16.1498 12.5091 16.1504 12C16.1504 11.4901 16.3302 11.0575 16.6943 10.6934C17.0129 10.3748 17.3837 10.1971 17.8125 10.1582L18 10.1504Z" fill="#888888" stroke="white" stroke-width="0.3"/>
</svg>

       </button>
  </div>
</header>

<p className="sa-subtitle">Portfolio diversification by sector</p>

{/* Donut */}
<div className="sa-chart-wrap">
  <svg
    viewBox="0 0 240 240"
    className="sa-donut"
    role="img"
    aria-label="Sector allocation donut chart"
  >
    {/* Outer thin ring */}
    <circle cx="120" cy="120" r="110" className="sa-donut-border" />
    
    {/* Inner thin ring */}
    <circle cx="120" cy="120" r="70" className="sa-donut-border" />

    {/* Segments */}
    <g transform="rotate(-90 120 120)">
      {DATA.reduce(
        (acc, item, i) => {
          // Radius is halfway between inner (70) and outer (110) borders
          const radius = 90; 
          const circumference = 2 * Math.PI * radius;
          const gap = 4; // Adjusted for visual balance
          const valueLength = (item.value / 100) * circumference - gap;

          acc.elements.push(
            <circle
              key={item.label}
              cx="120"
              cy="120"
              r={radius}
              className={`sa-donut-segment ${hovered === i ? "is-hovered" : ""}`}
              stroke={item.color}
              strokeDasharray={`${valueLength} ${circumference}`}
              strokeDashoffset={-acc.offset}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
          );

          acc.offset += valueLength + gap;
          return acc;
        },
        { offset: 0, elements: [] }
      ).elements}
    </g>
  </svg>
</div>


     {/* Legend */}
<ul className="sa-legend">
  {DATA.map((item, i) => (
    <li
      key={item.label}
      className={`sa-legend-row ${hovered === i ? "is-active" : ""}`}
      onMouseEnter={() => setHovered(i)}
      onMouseLeave={() => setHovered(null)}
      tabIndex={0}
    >
      {/* The color indicator (Rounded Square/Squircle) */}
      <div
        className="sa-indicator"
        style={{ backgroundColor: item.color }}
      />
      
      {/* Label - Sector Name */}
      <span className="sa-label">{item.label}</span>
      
      {/* Value - Percentage */}
      <span className="sa-value">{item.value}%</span>
      
      {/* Progress Bar Container */}
      <div className="sa-bar-container">
        <div className="sa-bar-bg">
          <div
            className="sa-bar-fill"
            style={{
              width: `${item.value}%`,
              backgroundColor: item.color,
            }}
          />
        </div>
      </div>
    </li>
  ))}
</ul>
    </section>
  );
}
