import { useState } from "react";
import Header from "../../components/header/Header";
import TokenHeader from "./components/TokenHeader";
import TokenStatsCards from "./components/TokenStatsCards";
import TokenBalanceChart from "./components/TokenBalanceChart";
import TokenDistributionChart from "./components/TokenDistributionChart";
import ERC20HoldingsList from "./components/ERC20HoldingsList";
import ERC20TransactionsTable from "./components/ERC20TransactionsTable";
import "./TokenPage.css";

export default function TokenPage({ isDarkMode, toggleTheme, sidebarCollapsed }) {
  return (
    <div className={`em-token-page ${sidebarCollapsed ? 'em-token-page--sidebar-collapsed' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <div className="em-token-page-content">
        <TokenHeader />
        <TokenStatsCards />
        
        <div className="em-token-charts-grid">
          <TokenBalanceChart />
          <TokenDistributionChart />
        </div>
        
        <ERC20HoldingsList />
        <ERC20TransactionsTable />
      </div>
    </div>
  );
}

