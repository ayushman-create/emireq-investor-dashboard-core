import "./AnalyticsStatsCards.css";

export default function AnalyticsStatsCards() {
  const stats = [
    {
      icon: "roi",
      color: "green",
      title: "Overall ROI Growth",
      value: "$442,000",
      subtitle: "↑ +$98,000 vs last year",
      badge: "+28%",
      badgeColor: "green"
    },
    {
      icon: "sector",
      color: "blue",
      title: "Top Sector",
      value: "HealthTech",
      subtitle: "$128,000 invested",
      badge: "+48%",
      badgeColor: "purple"
    },
    {
      icon: "duration",
      color: "purple",
      title: "Avg Holding Duration",
      value: "18 months",
      subtitle: "Across 12 startups",
      badge: "Optimal",
      badgeColor: "purple"
    },
    {
      icon: "projected",
      color: "orange",
      title: "Projected Q4 Gain",
      value: "$156,880+",
      subtitle: "↑ +13% expected ROI",
      badge: "Projected",
      badgeColor: "orange"
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "roi":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7H22V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case "sector":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12.0001C21.552 12.0001 22.005 11.5511 21.95 11.0021C21.7194 8.70623 20.702 6.56076 19.0703 4.92938C17.4385 3.298 15.2928 2.28109 12.997 2.05106C12.447 1.99606 11.999 2.44906 11.999 3.00106V11.0011C11.999 11.2663 12.1043 11.5206 12.2919 11.7082C12.4794 11.8957 12.7337 12.0011 12.999 12.0011L21 12.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.21 15.8895C20.5739 17.394 19.5788 18.7198 18.3119 19.7508C17.045 20.7819 15.5448 21.487 13.9425 21.8043C12.3401 22.1217 10.6845 22.0417 9.12018 21.5713C7.55591 21.101 6.13066 20.2546 4.96906 19.1062C3.80745 17.9578 2.94485 16.5423 2.45667 14.9835C1.96849 13.4247 1.8696 11.77 2.16863 10.1642C2.46767 8.55832 3.15553 7.05017 4.17208 5.77157C5.18863 4.49298 6.50292 3.48286 8.00004 2.82954" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case "duration":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V12L16 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case "projected":
        return (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99999 14C3.81076 14.0006 3.62522 13.9476 3.46495 13.847C3.30467 13.7464 3.17623 13.6024 3.09454 13.4317C3.01286 13.261 2.98129 13.0706 3.00349 12.8827C3.0257 12.6947 3.10077 12.517 3.21999 12.37L13.12 2.17C13.1943 2.08428 13.2955 2.02635 13.407 2.00573C13.5185 1.9851 13.6337 2.00301 13.7337 2.0565C13.8337 2.10999 13.9126 2.19589 13.9573 2.3001C14.0021 2.40431 14.0101 2.52064 13.98 2.63L12.06 8.64999C12.0034 8.80152 11.9844 8.96452 12.0046 9.125C12.0248 9.28549 12.0837 9.43868 12.1761 9.57142C12.2685 9.70417 12.3918 9.81251 12.5353 9.88716C12.6788 9.9618 12.8382 10.0005 13 10H20C20.1892 9.99935 20.3748 10.0524 20.535 10.153C20.6953 10.2536 20.8238 10.3976 20.9054 10.5683C20.9871 10.739 21.0187 10.9294 20.9965 11.1173C20.9743 11.3053 20.8992 11.483 20.78 11.63L10.88 21.83C10.8057 21.9157 10.7045 21.9736 10.593 21.9943C10.4815 22.0149 10.3663 21.997 10.2663 21.9435C10.1663 21.89 10.0874 21.8041 10.0427 21.6999C9.99791 21.5957 9.98991 21.4793 10.02 21.37L11.94 15.35C11.9966 15.1985 12.0156 15.0355 11.9954 14.875C11.9752 14.7145 11.9163 14.5613 11.8239 14.4286C11.7315 14.2958 11.6082 14.1875 11.4647 14.1128C11.3212 14.0382 11.1617 13.9995 11 14H3.99999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      default:
        return null;
    }
  };

  return (
    <div className="em-analytics-stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className={`em-analytics-stat-card em-analytics-stat-card--${stat.color}`}>
          <div className={`em-analytics-stat-icon em-analytics-stat-icon--${stat.color}`}>
            {getIcon(stat.icon)}
          </div>
          <div className={`em-analytics-stat-badge em-analytics-stat-badge--${stat.badgeColor}`}>
            {stat.badge}
          </div>
          <div className="em-analytics-stat-content">
            <h3 className="em-analytics-stat-title">{stat.title}</h3>
            <p className="em-analytics-stat-value">{stat.value}</p>
            <p className="em-analytics-stat-subtitle" data-green={stat.subtitle.includes("↑")}>
              {stat.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

