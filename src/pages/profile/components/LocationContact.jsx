import { useState } from "react";

export default function LocationContact() {
  const [isEditing, setIsEditing] = useState(true); // Start in edit mode
  const [contactInfo, setContactInfo] = useState({
    address: "",
    linkedin: "",
    twitter: "",
  });

  const [editFormData, setEditFormData] = useState({
    address: "",
    linkedin: "",
    twitter: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    setContactInfo(editFormData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditFormData(contactInfo);
    setIsEditing(true);
  };

  return (
    <div className="profile-section overview-section">
      <div className="profile-section-header">
        <div>
          <h3 className="profile-section-title">Location & Contact</h3>
          <p className="profile-section-subtitle">Additional contact information</p>
        </div>
        {isEditing ? (
          <button 
            className="profile-save-button" 
            onClick={handleSaveChanges}
            aria-label="Save Changes"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1333 2C10.485 2.00501 10.8205 2.14878 11.0667 2.4L13.6 4.93333C13.8512 5.17951 13.995 5.51497 14 5.86667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.1333Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3334 14V9.33329C11.3334 9.15648 11.2631 8.98691 11.1381 8.86189C11.0131 8.73686 10.8435 8.66663 10.6667 8.66663H5.33335C5.15654 8.66663 4.98697 8.73686 4.86195 8.86189C4.73693 8.98691 4.66669 9.15648 4.66669 9.33329V14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66669 2V4.66667C4.66669 4.84348 4.73693 5.01305 4.86195 5.13807C4.98697 5.2631 5.15654 5.33333 5.33335 5.33333H10" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Save Changes
          </button>
        ) : (
          <button 
            className="profile-edit-button" 
            onClick={handleEdit}
            aria-label="Edit Location & Contact"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3333 1.99998C11.5084 1.82487 11.7163 1.68698 11.9439 1.59499C12.1715 1.503 12.4142 1.45898 12.6667 1.45898C12.9191 1.45898 13.1618 1.503 13.3894 1.59499C13.617 1.68698 13.8249 1.82487 14 1.99998C14.1751 2.17509 14.313 2.38296 14.405 2.61055C14.497 2.83814 14.541 3.08084 14.541 3.33331C14.541 3.58579 14.497 3.82849 14.405 4.05608C14.313 4.28367 14.1751 4.49154 14 4.66665L5.00001 13.6666L1.33334 14.6666L2.33334 11L11.3333 1.99998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        // Edit Mode - Form Inputs (Address full width, LinkedIn and Twitter side by side)
        <div className="profile-form-grid">
          <div className="profile-form-group full-width">
            <label className="profile-form-label">Address</label>
            <input
              type="text"
              name="address"
              value={editFormData.address}
              onChange={handleInputChange}
              className="profile-form-input"
              placeholder="Enter your address"
            />
          </div>
          <div className="profile-form-group">
            <label className="profile-form-label">LinkedIn</label>
            <input
              type="url"
              name="linkedin"
              value={editFormData.linkedin}
              onChange={handleInputChange}
              className="profile-form-input"
              placeholder="https://linkedin.com/in/..."
            />
          </div>
          <div className="profile-form-group">
            <label className="profile-form-label">Twitter</label>
            <input
              type="url"
              name="twitter"
              value={editFormData.twitter}
              onChange={handleInputChange}
              className="profile-form-input"
              placeholder="https://twitter.com/..."
            />
          </div>
        </div>
      ) : (
        // View Mode - Read-only Display
        <div className="overview-info-grid">
          <div className="overview-info-item">
            <span className="overview-info-label">Address</span>
            <span className="overview-info-value">{contactInfo.address || "N/A"}</span>
          </div>
          <div className="overview-info-item">
            <span className="overview-info-label">LinkedIn</span>
            {contactInfo.linkedin && contactInfo.linkedin !== "N/A" && contactInfo.linkedin !== "" ? (
              <a 
                href={contactInfo.linkedin.startsWith('http') ? contactInfo.linkedin : `https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="overview-info-value overview-info-link"
              >
                {contactInfo.linkedin}
              </a>
            ) : (
              <span className="overview-info-value overview-info-link">N/A</span>
            )}
          </div>
          <div className="overview-info-item">
            <span className="overview-info-label">Twitter</span>
            {contactInfo.twitter && contactInfo.twitter !== "N/A" && contactInfo.twitter !== "" ? (
              <a 
                href={contactInfo.twitter.startsWith('http') ? contactInfo.twitter : `https://${contactInfo.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="overview-info-value overview-info-link"
              >
                {contactInfo.twitter}
              </a>
            ) : (
              <span className="overview-info-value overview-info-link">N/A</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
