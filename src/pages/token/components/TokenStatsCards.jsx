import "./TokenStatsCards.css";

export default function TokenStatsCards() {
  const stats = [
    {
      icon: "tokens",
      color: "blue",
      title: "Total Tokens Issued",
      value: "2.4M",
      subtitle: "Across 15 startups"
    },
    {
      icon: "wallet",
      color: "green",
      title: "Active Tokens",
      value: "3",
      subtitle: "ERC-20 holdings"
    },
    {
      icon: "activity",
      color: "purple",
      title: "Recent Activity",
      value: "12",
      subtitle: "Last 30 days"
    },
    {
      icon: "clock",
      color: "orange",
      title: "Last Sync",
      value: "2 mins ago",
      subtitle: "Up to date"
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "tokens":
        return (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.09 10.37C19.0353 10.7224 19.8765 11.3075 20.5357 12.0712C21.195 12.8349 21.6511 13.7524 21.8617 14.7391C22.0724 15.7257 22.0309 16.7495 21.741 17.7158C21.4512 18.6822 20.9223 19.5598 20.2034 20.2676C19.4845 20.9754 18.5987 21.4905 17.628 21.7652C16.6572 22.04 15.6329 22.0655 14.6497 21.8395C13.6665 21.6134 12.7561 21.1431 12.0028 20.472C11.2495 19.8009 10.6776 18.9507 10.34 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 6H8V10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.71 13.88L17.41 14.59L14.59 17.41" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case "wallet":
        return (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V12M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 16.2107 15.0391 16.5858 15.4142C16.9609 15.7893 17.4696 16 18 16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case "activity":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case "clock":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V12L16 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      default:
        return null;
    }
  };

  return (
    <div className="em-token-stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className={`em-token-stat-card em-token-stat-card--${stat.color}`}>
          <div className={`em-token-stat-icon em-token-stat-icon--${stat.color}`}>
            {getIcon(stat.icon)}
          </div>
          <div className="em-token-stat-content">
            <h3 className="em-token-stat-title">{stat.title}</h3>
            <p className="em-token-stat-value">{stat.value}</p>
            <p className="em-token-stat-subtitle">{stat.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

