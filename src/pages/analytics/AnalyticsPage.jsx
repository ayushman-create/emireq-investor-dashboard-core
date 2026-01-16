import Header from "../../components/header/Header";
import AnalyticsHeader from "./components/AnalyticsHeader";
import AnalyticsStatsCards from "./components/AnalyticsStatsCards";
import TokenBalanceGrowthChart from "./components/TokenBalanceGrowthChart";
import PortfolioPerformanceChart from "./components/PortfolioPerformanceChart";
import SectorPerformanceChart from "./components/SectorPerformanceChart";
import RiskDistributionChart from "./components/RiskDistributionChart";
import KeyPerformanceIndicators from "./components/KeyPerformanceIndicators";
import "./AnalyticsPage.css";

export default function AnalyticsPage({ isDarkMode, toggleTheme, sidebarCollapsed }) {
  return (
    <div className={`em-analytics-page ${sidebarCollapsed ? 'em-analytics-page--sidebar-collapsed' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <div className="em-analytics-page-content">
        <AnalyticsHeader />
        <AnalyticsStatsCards />
        <TokenBalanceGrowthChart />
        
        {/* Row 1: Portfolio Performance (left) + Sector Performance (right) */}
        <div className="em-analytics-charts-row-1">
          <PortfolioPerformanceChart />
          <SectorPerformanceChart />
        </div>
        
        {/* Row 2: Risk Distribution (left) + Key Performance Indicators (right) */}
        <div className="em-analytics-charts-row-2">
          <RiskDistributionChart />
          <KeyPerformanceIndicators />
        </div>
      </div>
    </div>
  );
}

