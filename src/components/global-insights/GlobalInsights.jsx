import './GlobalInsights.css';

export default function GlobalInsights() {
  const insights = [
    {
      icon: 'heartbeat',
      text: 'Healthtech investments in GCC grew ~13% in 2025',
    },
    {
      icon: 'trend',
      text: 'AI-driven platforms projected to ROI by 2026',
    },
    {
      icon: 'dollar',
      text: 'FinTech sees early-stage funding in India & MENA',
    },
    {
      icon: 'globe',
      text: 'Islamic finance market expected to reach $3.8T by 2026',
    },
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'heartbeat':
        return (
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z" fill="white"/>
<g clip-path="url(#clip0_21_6108)">
<path d="M22.6667 16H21.0133C20.722 15.9994 20.4384 16.0942 20.2061 16.27C19.9737 16.4458 19.8053 16.6928 19.7267 16.9734L18.16 22.5467C18.1499 22.5813 18.1289 22.6117 18.1 22.6334C18.0712 22.655 18.0361 22.6667 18 22.6667C17.9639 22.6667 17.9289 22.655 17.9 22.6334C17.8712 22.6117 17.8501 22.5813 17.84 22.5467L14.16 9.45337C14.1499 9.41875 14.1289 9.38834 14.1 9.36671C14.0712 9.34507 14.0361 9.33337 14 9.33337C13.9639 9.33337 13.9289 9.34507 13.9 9.36671C13.8712 9.38834 13.8501 9.41875 13.84 9.45337L12.2733 15.0267C12.195 15.3061 12.0276 15.5524 11.7966 15.728C11.5656 15.9037 11.2836 15.9992 10.9933 16H9.33334" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_21_6108">
<rect width="16" height="16" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

        );
      case 'trend':
        return (
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z" fill="white"/>
<g clip-path="url(#clip0_21_6113)">
<path d="M18.6667 12.6666H22.6667V16.6666" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6666 12.6666L17 18.3333L13.6666 15L9.33331 19.3333" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_21_6113">
<rect width="16" height="16" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

        );
      case 'dollar':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z" fill="white"/>
<path d="M16 9.33337V22.6667" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3333 11.3334H14.3333C13.7145 11.3334 13.121 11.5792 12.6834 12.0168C12.2458 12.4544 12 13.0479 12 13.6667C12 14.2855 12.2458 14.879 12.6834 15.3166C13.121 15.7542 13.7145 16 14.3333 16H17.6667C18.2855 16 18.879 16.2459 19.3166 16.6835C19.7542 17.121 20 17.7145 20 18.3334C20 18.9522 19.7542 19.5457 19.3166 19.9833C18.879 20.4209 18.2855 20.6667 17.6667 20.6667H12" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case 'globe':
        return (
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z" fill="white"/>
<g clip-path="url(#clip0_21_6126)">
<path d="M16 22.6667C19.6819 22.6667 22.6666 19.6819 22.6666 16C22.6666 12.3181 19.6819 9.33337 16 9.33337C12.3181 9.33337 9.33331 12.3181 9.33331 16C9.33331 19.6819 12.3181 22.6667 16 22.6667Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9.33337C14.2881 11.1308 13.3333 13.5179 13.3333 16C13.3333 18.4822 14.2881 20.8693 16 22.6667C17.7118 20.8693 18.6666 18.4822 18.6666 16C18.6666 13.5179 17.7118 11.1308 16 9.33337Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33331 16H22.6666" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_21_6126">
<rect width="16" height="16" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

        );
      default:
        return null;
    }
  };

  return (
    <div className="em-global-insights">
      <div className="em-global-insights-header">
        <div className="em-global-insights-title-wrapper">
          <div className="em-global-insights-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_21_6093)">
<path d="M9.99999 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6024 1.66663 9.99999 1.66663C5.39762 1.66663 1.66666 5.39759 1.66666 9.99996C1.66666 14.6023 5.39762 18.3333 9.99999 18.3333Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99999 1.66663C7.86019 3.91342 6.66666 6.89724 6.66666 9.99996C6.66666 13.1027 7.86019 16.0865 9.99999 18.3333C12.1398 16.0865 13.3333 13.1027 13.3333 9.99996C13.3333 6.89724 12.1398 3.91342 9.99999 1.66663Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.66666 10H18.3333" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_21_6093">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

          </div>
          <div>
            <h3 className="em-global-insights-title">
              Global Insights
              <span className="em-info-icon" aria-label="Information" tabIndex={0}>
             <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H1.5H2.5C3.05273 4 3.5 4.44727 3.5 5V6V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z" fill="white"/>
</svg>

            </span>

            </h3>
            <p className="em-global-insights-subtitle">Market trends and opportunities</p>
          </div>
        </div>
      </div>

      <div className="em-global-insights-grid">
        {insights.map((insight, index) => (
          <div key={index} className="em-global-insight-card">
            <div className="em-global-insight-icon">
              {getIcon(insight.icon)}
            </div>
            <p className="em-global-insight-text">{insight.text}</p>
          </div>
        ))}
      </div>

      <p className="em-global-insights-footer">Updated daily from global market data</p>
    </div>
  );
}

