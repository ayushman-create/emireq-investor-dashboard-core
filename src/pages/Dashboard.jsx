import Header from '../components/header/Header';
import StatCard from '../components/stat-card/StatCard';
import PortfolioChart from '../components/charts/PortfolioChart';
import QuickActions from '../components/quick-actions/QuickActions';
import SectorAllocation from '../components/charts/SectorAllocation';
import InvestmentList from '../components/investments/InvestmentList';
import GlobalInsights from '../components/global-insights/GlobalInsights';
import './Dashboard.css';

export default function Dashboard({ isDarkMode, toggleTheme, sidebarCollapsed }) {
  return (
    <div className={`em-dashboard ${sidebarCollapsed ? 'em-dashboard--sidebar-collapsed' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <div className="em-dashboard-content">
        <section className="em-dashboard-overview">
          <h1 className="em-dashboard-title">Dashboard Overview</h1>
          <p className="em-dashboard-subtitle">Here's what's happening with your investments today.</p>
          
          <div className="em-stat-grid">
            <StatCard
              icon="dollar"
              color="blue"
              title="Total Portfolio Value"
              value="$410,000"
              change="+12.5%"
              description="vs last month"
            />
            <StatCard
              icon="target"
              color="purple"
              title="Total Invested"
              value="$320,000"
              change="+$45,000"
              description="new investments"
            />
            <StatCard
              icon="trend"
              color="green"
              title="Return On Investment"
              value="28%"
              change="+3.2%"
              description="annual ROI"
            />
            <StatCard
              icon="check"
              color="orange"
              title="Active Investments"
              value="12"
              change="+22.5%"
              description="Shariah compliant"
            />
          </div>
        </section>

        <div className="em-grid-2">
          <PortfolioChart />
          <QuickActions />
        </div>

        <div className="em-grid-2 em-grid-sectors-investments">
          <SectorAllocation />
          <InvestmentList />
        </div>

        <div className="em-global-insights-wrapper">
          <GlobalInsights />
        </div>
      </div>
    </div>
  );
}

