export default function ProfileSidebar() {
  return (
    <div className="profile-sidebar">
      {/* Quick Stats */}
      <div className="sidebar-card">
        <h3 className="sidebar-card-title">Quick Stats</h3>
        <div className="sidebar-stats">
          <div className="sidebar-stat-item">
            <div className="sidebar-stat-label">Available Balance</div>
            <div className="sidebar-stat-value green">$4.1M</div>
            <div className="sidebar-stat-subtext">of $6M total</div>
          </div>

          <div className="sidebar-divider" />

          <div className="sidebar-stat-item">
            <div className="sidebar-stat-label">Available Balance</div>
            <div className="sidebar-stat-value">0</div>
          </div>

          <div className="sidebar-divider" />
          
          <div className="sidebar-stat-item">
            <div className="sidebar-stat-label">Profile Status</div>
            <span className="sidebar-status-badge approved">Approved</span>
          </div>
        </div>
      </div>

      {/* Account Timeline */}
      <div className="sidebar-card">
        <h3 className="sidebar-card-title">Account Timeline</h3>
        <div className="sidebar-timeline">
          <div className="timeline-item">
            <div className="timeline-icon approved">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="timeline-content">
              <div className="timeline-title">Approved</div>
              <div className="timeline-date">October 26, 2025</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon registered">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.6667 1.33333V4M5.33333 1.33333V4M2 6.66667H14" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="timeline-content">
              <div className="timeline-title">Registered</div>
              <div className="timeline-date">October 26, 2025</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon updated">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#7F22FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 4.66667V8L10.6667 10.6667" stroke="#7F22FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="timeline-content">
              <div className="timeline-title">Last Updated</div>
              <div className="timeline-date">October 26, 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="sidebar-card">
        <h3 className="sidebar-card-title">Next Steps</h3>
        <div className="next-steps-list">
          <div className="next-step-item kyc">
            <div className="next-step-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.33333V8M8 10.6667H8.00667M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="next-step-content">
              <div className="next-step-title">Complete KYC verification</div>
              <div className="next-step-description">Upload required documents</div>
            </div>
          </div>

          <div className="next-step-item sectors">
            <div className="next-step-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.33333V8M8 10.6667H8.00667M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="next-step-content">
              <div className="next-step-title">Add sector preferences</div>
              <div className="next-step-description">Help us match you with startups</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

