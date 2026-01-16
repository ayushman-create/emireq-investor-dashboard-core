import { useState, useRef, useEffect } from "react";
import "./profile.css";
import avatar from "../../assets/arab1.png";
import ProfileOverview from "./components/ProfileOverview";
import InvestorProfile from "./components/InvestorProfile";
import Financials from "./components/Financials";
import Interests from "./components/Interests";
import ProfileSidebar from "./components/ProfileSidebar";

export default function ProfilePage({ toggleTheme }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "investor-profile", label: "Investor Profile" },
    { id: "financials", label: "Financials" },
    { id: "interests", label: "Interests" },
  ];

  const handleTabSwitch = (tabId) => {
    setActiveTab(tabId);
    // Smooth scroll to top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <ProfileOverview onEditClick={() => handleTabSwitch("investor-profile")} />;
      case "investor-profile":
        return <InvestorProfile />;
      case "financials":
        return <Financials />;
      case "interests":
        return <Interests />;
      default:
        return <ProfileOverview onEditClick={() => handleTabSwitch("investor-profile")} />;
    }
  };

  return (
    <>
      <div className="header-container">
        {/* LEFT: Breadcrumbs */}
        <div className="breadcrumb-section">
          <span className="breadcrumb-item inactive">Dashboard</span>
          <span className="separator">›</span>
          <span className="breadcrumb-item inactive">Startups</span>
          <span className="separator">›</span>
          <span className="breadcrumb-item active">Startup Details</span>
        </div>

        {/* RIGHT: Header Actions */}
        <div className="em-header-actions">
          {/* THEME TOGGLE */}
          <button
            className="em-header-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_114_12193)">
                <path d="M7.99935 11.3327C9.8403 11.3327 11.3327 9.8403 11.3327 7.99935C11.3327 6.1584 9.8403 4.66602 7.99935 4.66602C6.1584 4.66602 4.66602 6.1584 4.66602 7.99935C4.66602 9.8403 6.1584 11.3327 7.99935 11.3327Z" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 0.666016V1.99935" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14V15.3333" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.8125 2.8125L3.75917 3.75917" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.2402 12.2402L13.1869 13.1869" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0.666016 8H1.99935" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 8H15.3333" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.8125 13.1869L3.75917 12.2402" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.2402 3.75917L13.1869 2.8125" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_114_12193">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>

         
 {/* SEARCH */}
<div className="em-header-search">
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="em-header-search-icon"
  >
    <path
      d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
      stroke="#2F2F33"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.9996 13.9996L11.0996 11.0996"
      stroke="#2F2F33"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  <input
    type="text"
    placeholder="Search"
    className="em-header-search-input"
  />
</div>

          {/* NOTIFICATION */}
          <button className="em-header-notification">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="em-header-notification-icon"
            >
              <path
                d="M12 5.33398C12 4.27312 11.5786 3.2557 10.8284 2.50556C10.0783 1.75541 9.06087 1.33398 8 1.33398C6.93913 1.33398 5.92172 1.75541 5.17157 2.50556C4.42143 3.2557 4 4.27312 4 5.33398C4 10.0007 2 11.334 2 11.334H14C14 11.334 12 10.0007 12 5.33398Z"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.15237 14C9.03516 14.2021 8.86693 14.3698 8.66452 14.4864C8.46211 14.6029 8.23262 14.6643 7.99904 14.6643C7.76545 14.6643 7.53596 14.6029 7.33355 14.4864C7.13114 14.3698 6.96291 14.2021 6.8457 14"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="em-header-notification-dot" />
          </button>

          {/* PROFILE */}
          <div className="em-header-profile" ref={profileRef}>
            <button
              className="em-header-profile-menu"
              onClick={(e) => {
                e.stopPropagation();
                setProfileOpen((prev) => !prev);
              }}
            >
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path
                  d="M0.75 0.75H14.75"
                  stroke="#2F2F33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0.75 6.75H11.75"
                  stroke="#2F2F33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="em-header-profile-avatar">
              <img
                src={avatar}
                alt="User profile"
                className="em-header-avatar-img"
              />
            </div>

            {profileOpen && (
              <div className="em-profile-dropdown">
                <div className="em-profile-user">
                  <img src={avatar} alt="User" />
                  <div>
                    <div className="em-profile-name">John Doe</div>
                    <div className="em-profile-email">johndoe@gmail.com</div>
                  </div>
                </div>

                <div className="em-profile-divider" />

                <button className="em-profile-item">
                  <span className="em-profile-item-icon">👤</span>
                  My Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= PAGE TITLE ================= */}
      <div className="profile-title-row">
        <h1 className="profile-title">My Profile</h1>
        <span className="profile-status-pill">Approved</span>
      </div>

      {/* ================= PROFILE CONTENT ================= */}
      <div className="profile-content-wrapper">
        {/* LEFT: Main Content */}
        <div className="profile-main-content">
          {/* Profile Header Card */}
          <div className="profile-header-card">
            <div className="profile-header-left">
              <div className="profile-avatar-large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main building */}
                  <rect x="3" y="10" width="8" height="10" fill="white"/>
                  <rect x="4" y="11" width="2" height="2" fill="#9CA3AF"/>
                  <rect x="7" y="11" width="2" height="2" fill="#9CA3AF"/>
                  <rect x="4" y="15" width="2" height="2" fill="#9CA3AF"/>
                  <rect x="7" y="15" width="2" height="2" fill="#9CA3AF"/>
                  {/* Taller building */}
                  <rect x="13" y="6" width="6" height="14" fill="white"/>
                  <rect x="14" y="8" width="2" height="2" fill="#9CA3AF"/>
                  <rect x="14" y="12" width="2" height="2" fill="#9CA3AF"/>
                  <rect x="14" y="16" width="2" height="2" fill="#9CA3AF"/>
                </svg>
              </div>
              <div className="profile-header-info">
                <div className="profile-name-row">
                  <h2 className="profile-name">Aurum Strategies</h2>
                  <span className="profile-verification-badge not-verified">Not Verified</span>
                </div>
                <p className="profile-username">investor_aurum • London, UK</p>
              </div>
            </div>
            <div className="profile-header-right">
              <span className="profile-investor-type-badge">Angel Investor</span>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="profile-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`profile-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="profile-tab-content">
            {renderTabContent()}
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div className="profile-sidebar-wrapper">
          <ProfileSidebar />
        </div>
      </div>
    </>
  );
}
