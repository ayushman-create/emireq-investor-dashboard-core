import './StatCard.css';

export default function StatCard({ icon, color, title, value, change, description }) {

  /* ================= ICON (LEFT SQUARE) ================= */
  const getIcon = () => {
    switch (icon) {
      case 'dollar':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M17 5H9.5C7.6 5 6 6.6 6 8.5S7.6 12 9.5 12H14.5C16.4 12 18 13.6 18 15.5S16.4 19 14.5 19H6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'target':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
            <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2"/>
            <circle cx="12" cy="12" r="2" stroke="white" strokeWidth="2"/>
          </svg>
        );

      case 'trend':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 7H22V13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 7L13.5 15.5L8.5 10.5L2 17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'check':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.8 10A10 10 0 1 1 17 3.3" stroke="white" strokeWidth="2"/>
            <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2"/>
          </svg>
        );

      default:
        return null;
    }
  };

  /* ================= BADGE ICON (TOP RIGHT) ================= */
  const getBadgeIcon = () => {
    switch (color) {
      case 'blue':
        return (
       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.5H11V6.5" stroke="#155DFC" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 3.5L6.75 7.75L4.25 5.25L1 8.5" stroke="#155DFC" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );

      case 'purple':
        return (
         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.5H11V6.5" stroke="#7F22FE" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 3.5L6.75 7.75L4.25 5.25L1 8.5" stroke="#7F22FE" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );

      case 'green':
        return (
         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.5H11V6.5" stroke="#00B031" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 3.5L6.75 7.75L4.25 5.25L1 8.5" stroke="#00B031" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );

      case 'orange':
         return (
         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.5H11V6.5" stroke="#F59E0B" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 3.5L6.75 7.75L4.25 5.25L1 8.5" stroke="#F59E0B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        ); // Figma: no arrow for Active Investments

      default:
        return null;
    }
  };

  /* ================= JSX ================= */
  return (
    <div className={`em-stat-card em-stat-card--${color}`}>
      <div className={`em-stat-card-icon em-stat-card-icon--${color}`}>
        {getIcon()}
      </div>

      <div className="em-stat-card-content">
        <h3 className="em-stat-card-title">{title}</h3>
        <p className="em-stat-card-value">{value}</p>
        <p className="em-stat-card-description">{description}</p>
      </div>

      <div className={`em-stat-card-badge em-stat-card-badge--${color}`}>
        {getBadgeIcon()}
        <span>{change}</span>
      </div>
    </div>
  );
}
