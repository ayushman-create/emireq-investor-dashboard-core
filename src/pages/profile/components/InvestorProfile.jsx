import { useState } from "react";

export default function InvestorProfile() {
  const [isEditing, setIsEditing] = useState(true); // Start in edit mode
  const [investorData, setInvestorData] = useState({
    investorType: "",
    organization: "",
    investmentGoal: "",
    preferredStages: [],
  });

  const [editFormData, setEditFormData] = useState({
    investorType: "",
    organization: "",
    investmentGoal: "",
    preferredStages: [],
  });

  const availableStages = ["Seed", "MVP", "Series A", "Series B", "Growth"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggleStage = (stage) => {
    if (editFormData.preferredStages.includes(stage)) {
      setEditFormData({
        ...editFormData,
        preferredStages: editFormData.preferredStages.filter((s) => s !== stage),
      });
    } else {
      setEditFormData({
        ...editFormData,
        preferredStages: [...editFormData.preferredStages, stage],
      });
    }
  };

  const handleSaveChanges = () => {
    setInvestorData(editFormData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditFormData(investorData);
    setIsEditing(true);
  };

  return (
    <div className="investor-profile-content">
      <div className="profile-section">
        <div className="profile-section-header">
          <div>
            <h3 className="profile-section-title">Investor Profile</h3>
            <p className="profile-section-subtitle">Investor strategy and preferences</p>
          </div>
          {isEditing ? (
            <button className="profile-save-button" onClick={handleSaveChanges}>
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1333 2C10.485 2.00501 10.8205 2.14878 11.0667 2.4L13.6 4.93333C13.8512 5.17951 13.995 5.51497 14 5.86667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.1333Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3334 14V9.33329C11.3334 9.15648 11.2631 8.98691 11.1381 8.86189C11.0131 8.73686 10.8435 8.66663 10.6667 8.66663H5.33335C5.15654 8.66663 4.98697 8.73686 4.86195 8.86189C4.73693 8.98691 4.66669 9.15648 4.66669 9.33329V14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66669 2V4.66667C4.66669 4.84348 4.73693 5.01305 4.86195 5.13807C4.98697 5.2631 5.15654 5.33333 5.33335 5.33333H10" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              Save Changes
            </button>
          ) : (
            <button className="profile-edit-button" onClick={handleEdit}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3333 1.99998C11.5084 1.82487 11.7163 1.68698 11.9439 1.59499C12.1715 1.503 12.4142 1.45898 12.6667 1.45898C12.9191 1.45898 13.1618 1.503 13.3894 1.59499C13.617 1.68698 13.8249 1.82487 14 1.99998C14.1751 2.17509 14.313 2.38296 14.405 2.61055C14.497 2.83814 14.541 3.08084 14.541 3.33331C14.541 3.58579 14.497 3.82849 14.405 4.05608C14.313 4.28367 14.1751 4.49154 14 4.66665L5.00001 13.6666L1.33334 14.6666L2.33334 11L11.3333 1.99998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Edit
            </button>
          )}
        </div>

        {isEditing ? (
          // Edit Mode - Form Inputs
          <div className="investor-profile-grid">
            <div className="investor-profile-item">
              <label className="profile-form-label">Investor Type</label>
              <input
                type="text"
                name="investorType"
                value={editFormData.investorType}
                onChange={handleInputChange}
                className="profile-form-input"
                placeholder="Angel Investor / Venture Capital"
              />
            </div>

            <div className="investor-profile-item">
              <label className="profile-form-label">Organization</label>
              <input
                type="text"
                name="organization"
                value={editFormData.organization}
                onChange={handleInputChange}
                className="profile-form-input"
                placeholder="Individual"
              />
            </div>

            <div className="investor-profile-item full-width">
              <label className="profile-form-label">Investment Goal</label>
              <input
                type="text"
                name="investmentGoal"
                value={editFormData.investmentGoal}
                onChange={handleInputChange}
                className="profile-form-input"
                placeholder="Create a balanced halal portfolio"
              />
            </div>

            <div className="investor-profile-item full-width">
              <label className="profile-form-label">Preferred Stages</label>
              <div className="preferred-stages-edit">
                {availableStages.map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    className={`stage-tag ${editFormData.preferredStages.includes(stage) ? "active" : ""}`}
                    onClick={() => handleToggleStage(stage)}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // View Mode - Read-only Display
          <div className="investor-profile-view-grid">
            <div className="investor-profile-view-item">
              <span className="investor-profile-label">Investor Type</span>
              <span className="investor-profile-value">{investorData.investorType || "—"}</span>
            </div>
            <div className="investor-profile-divider"></div>
            <div className="investor-profile-view-item">
              <span className="investor-profile-label">Organization</span>
              <span className="investor-profile-value">{investorData.organization || "—"}</span>
            </div>
            <div className="investor-profile-divider"></div>
            <div className="investor-profile-view-item">
              <span className="investor-profile-label">Investment Goal</span>
              <span className="investor-profile-value">{investorData.investmentGoal || "—"}</span>
            </div>
            <div className="investor-profile-divider"></div>
            <div className="investor-profile-view-item">
              <span className="investor-profile-label">Preferred Stages</span>
              <div className="preferred-stages-display">
                {investorData.preferredStages.length > 0 ? (
                  investorData.preferredStages.map((stage) => (
                    <span key={stage} className="stage-tag-display">
                      {stage}
                    </span>
                  ))
                ) : (
                  <span className="investor-profile-value">—</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
