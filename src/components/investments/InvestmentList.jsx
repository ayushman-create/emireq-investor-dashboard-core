import React from "react";
import "./InvestmentList.css";

const investments = [
  {
    name: "Dubai Real Estate Fund",
    category: "Real Estate",
    invested: "$125,000",
    value: "$148,125",
    change: "+3.2%",
  },
  {
    name: "Halal Tech Innovation",
    category: "Technology",
    invested: "$85,000",
    value: "$100,125",
    change: "+3.2%",
  },
  {
    name: "Healthcare Growth Fund",
    category: "Healthcare",
    invested: "$65,000",
    value: "$81,125",
    change: "+3.2%",
  },
  {
    name: "Islamic Finance Portfolio",
    category: "Finance",
    invested: "$55,000",
    value: "$57,600",
    change: "+3.2%",
  },
];

export default function InvestmentList() {
  return (
    <section className="investment-wrapper">
      {/* HEADER */}
      <div className="investment-header">
        <div>
          <h2 className="investment-title">
            Active Investments
            <span className="em-info-icon"><svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
</svg>
</span>
          </h2>
          <p className="investment-subtitle">
            Your current investment portfolio
          </p>
        </div>

        <button className="view-all-btn">View all</button>
      </div>

      {/* LIST */}
      <div className="investment-list">
        {investments.map((item, index) => (
          <div className="investment-card" key={index}>
            {/* LEFT */}
            <div className="investment-left">
              <div className="investment-icon">DR</div>

              <div>
                <div className="investment-name">{item.name}</div>
                <div className="investment-category">{item.category}</div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="investment-right">
              <div className="investment-amount">
                <div className="amount-value">{item.invested}</div>
                <div className="amount-label">Invested</div>
              </div>

              <div className="investment-amount">
                <div className="amount-value">{item.value}</div>
                <div className="amount-label">Current Value</div>
              </div>

              <div className="investment-change">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_114_12668)">
                    <path d="M8 3.5H11V6.5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 3.5L6.75 7.75L4.25 5.25L1 8.5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_114_12668">
                      <rect width="12" height="12" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                {item.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
