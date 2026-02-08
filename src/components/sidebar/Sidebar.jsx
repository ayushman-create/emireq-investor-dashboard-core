import "./sidebar.css";
import logo from "../../assets/emireq-logo.png";
import { NavLink } from "react-router-dom";

export default function Sidebar({ collapsed, onToggle, onLogoutClick }) {
  return (
    <aside className={`em-sidebar ${collapsed ? "em-sidebar--collapsed" : ""}`}>
      <div className="em-sidebar-header">
        <div className="em-sidebar-logo">
          <img src={logo} alt="Emireq" className="em-sidebar-logo-img" />
        </div>

        <button
          className="em-sidebar-toggle"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 16L1 11L6 6"
              stroke="#121212"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 16L8 11L13 6"
              stroke="#121212"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="em-sidebar-section">
        <p className="em-sidebar-title">MAIN</p>

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `em-sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66667 2H2V6.66667H6.66667V2Z"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.0007 2H9.33398V6.66667H14.0007V2Z"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.0007 9.33398H9.33398V14.0007H14.0007V9.33398Z"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66667 9.33398H2V14.0007H6.66667V9.33398Z"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/diligence"
          end
          className={({ isActive }) =>
            `em-sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33398 2H3.33398C2.97436 2 2.62984 2.1405 2.37479 2.39054C2.11974 2.64059 1.97998 2.98511 1.97998 3.34473V12.6553C1.97998 13.0149 2.11974 13.3594 2.37479 13.6095C2.62984 13.8595 2.97436 14 3.33398 14H10.6673C11.0269 14 11.3714 13.8595 11.6265 13.6095C11.8815 13.3594 12.0213 13.0149 12.0213 12.6553V4.66667L9.33398 2Z"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33398 2V4.66667C9.33398 5.02029 9.47446 5.35943 9.72451 5.60948C9.97456 5.85952 10.3137 6 10.6673 6H13.334"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.33398 7.33398H4.66732"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33398 10H4.66732"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Due Diligence</span>
        </NavLink>

        <NavLink
          to="/profile"
          end
          className={({ isActive }) =>
            `em-sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_351_965)">
              <path
                d="M8.00065 14.6673C11.6825 14.6673 14.6673 11.6825 14.6673 8.00065C14.6673 4.31875 11.6825 1.33398 8.00065 1.33398C4.31875 1.33398 1.33398 4.31875 1.33398 8.00065C1.33398 11.6825 4.31875 14.6673 8.00065 14.6673Z"
                stroke="#121212"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 8.66602C9.10457 8.66602 10 7.77059 10 6.66602C10 5.56145 9.10457 4.66602 8 4.66602C6.89543 4.66602 6 5.56145 6 6.66602C6 7.77059 6.89543 8.66602 8 8.66602Z"
                stroke="#121212"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.66602 13.7753V12.6673C4.66602 12.3137 4.80649 11.9746 5.05654 11.7245C5.30659 11.4745 5.64573 11.334 5.99935 11.334H9.99935C10.353 11.334 10.6921 11.4745 10.9422 11.7245C11.1922 11.9746 11.3327 12.3137 11.3327 12.6673V13.7753"
                stroke="#121212"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_351_965">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>Profile</span>
        </NavLink>
      </div>

      <div className="em-sidebar-section">
        <p className="em-sidebar-title">ASSETS</p>
        <NavLink
          to="/portfolio"
          end
          className={({ isActive }) =>
            `em-sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 8.5V14H1.5V8.5M8 11V9M10 4C10 4 10 2 8 2C6 2 6 4 6 4M1 4H15V8C15 8 12 10 8 10C4 10 1 8 1 8V4Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Portfolio</span>
        </NavLink>
        <NavLink
          to="/dashboard/token"
          end
          className={({ isActive }) =>
            `em-sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33398 9.33398C7.54312 9.33398 9.33398 7.54312 9.33398 5.33398C9.33398 3.12485 7.54312 1.33398 5.33398 1.33398C3.12485 1.33398 1.33398 3.12485 1.33398 5.33398C1.33398 7.54312 3.12485 9.33398 5.33398 9.33398Z"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0592 6.91406C12.6895 7.14901 13.2502 7.53908 13.6897 8.04819C14.1293 8.55731 14.4333 9.16902 14.5737 9.82677C14.7142 10.4845 14.6865 11.1671 14.4933 11.8113C14.3 12.4555 13.9475 13.0406 13.4682 13.5125C12.9889 13.9843 12.3984 14.3277 11.7512 14.5109C11.1041 14.694 10.4212 14.7111 9.7657 14.5604C9.11022 14.4097 8.50332 14.0961 8.00113 13.6487C7.49894 13.2013 7.11767 12.6345 6.89258 12.0007"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66602 4H5.33268V6.66667"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.1399 9.25391L11.6066 9.72724L9.72656 11.6072"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Token</span>
        </NavLink>
      </div>

      <div className="em-sidebar-section">
        <p className="em-sidebar-title">INSIGHTS</p>
        <NavLink
          to="/dashboard/analytics"
          end
          className={({ isActive }) =>
            `em-sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H14"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 11.3333V6"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.66602 11.334V3.33398"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33398 11.334V9.33398"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Analytics</span>
        </NavLink>
        <NavLink
          to="/documents"
          end
          className={({ isActive }) =>
            `em-sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_351_976)">
              <path
                d="M9.99935 1.33398H3.99935C3.64573 1.33398 3.30659 1.47446 3.05654 1.72451C2.80649 1.97456 2.66602 2.3137 2.66602 2.66732V13.334C2.66602 13.6876 2.80649 14.0267 3.05654 14.2768C3.30659 14.5268 3.64573 14.6673 3.99935 14.6673H11.9993C12.353 14.6673 12.6921 14.5268 12.9422 14.2768C13.1922 14.0267 13.3327 13.6876 13.3327 13.334V4.66732L9.99935 1.33398Z"
                stroke="#121212"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.33398 1.33398V4.00065C9.33398 4.35427 9.47446 4.69341 9.72451 4.94346C9.97456 5.19351 10.3137 5.33398 10.6673 5.33398H13.334"
                stroke="#121212"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66732 6H5.33398"
                stroke="#121212"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6673 8.66602H5.33398"
                stroke="#121212"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6673 11.334H5.33398"
                stroke="#121212"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_351_976">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>Documents</span>
        </NavLink>
      </div>

      <div className="em-sidebar-footer">
        <button
          className="em-sidebar-item em-sidebar-item--logout"
          onClick={onLogoutClick}
          aria-label="Log out"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.666 11.3327L13.9993 7.99935L10.666 4.66602"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 8H6"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
