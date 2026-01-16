import { useState } from "react";

export default function PersonalInformation() {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Aurum Strategies",
    username: "investor_aurum",
    email: "invest@aurumstrategies.uk",
    mobile: "+442071230123",
    country: "UK",
    city: "London",
  });

  const [editFormData, setEditFormData] = useState(personalInfo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    setPersonalInfo(editFormData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditFormData(personalInfo);
    setIsEditing(true);
  };

  return (
    <div className="profile-section overview-section">
      <div className="profile-section-header">
        <div>
          <h3 className="profile-section-title">Personal Information</h3>
          <p className="profile-section-subtitle">Core details about the Investor</p>
        </div>
        {isEditing ? (
          <button 
            className="profile-save-button" 
            onClick={handleSaveChanges}
            aria-label="Save Changes"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3333 2H2.66667C2.29848 2 2 2.29848 2 2.66667V13.3333C2 13.7015 2.29848 14 2.66667 14H13.3333C13.7015 14 14 13.7015 14 13.3333V2.66667C14 2.29848 13.7015 2 13.3333 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.66667 2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.66667 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Save Changes
          </button>
        ) : (
          <button 
            className="profile-edit-button" 
            onClick={handleEdit}
            aria-label="Edit Personal Information"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3333 1.99998C11.5084 1.82487 11.7163 1.68698 11.9439 1.59499C12.1715 1.503 12.4142 1.45898 12.6667 1.45898C12.9191 1.45898 13.1618 1.503 13.3894 1.59499C13.617 1.68698 13.8249 1.82487 14 1.99998C14.1751 2.17509 14.313 2.38296 14.405 2.61055C14.497 2.83814 14.541 3.08084 14.541 3.33331C14.541 3.58579 14.497 3.82849 14.405 4.05608C14.313 4.28367 14.1751 4.49154 14 4.66665L5.00001 13.6666L1.33334 14.6666L2.33334 11L11.3333 1.99998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        // Edit Mode - Form Inputs
        <div className="profile-form-grid">
          <div className="profile-form-group">
            <label className="profile-form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={editFormData.fullName}
              onChange={handleInputChange}
              className="profile-form-input"
              placeholder="Enter name"
            />
          </div>
          <div className="profile-form-group">
            <label className="profile-form-label">Username</label>
            <input
              type="text"
              name="username"
              value={editFormData.username}
              onChange={handleInputChange}
              className="profile-form-input"
              placeholder="User name"
            />
          </div>
          <div className="profile-form-group">
            <label className="profile-form-label">Email</label>
            <input
              type="email"
              name="email"
              value={editFormData.email}
              onChange={handleInputChange}
              className="profile-form-input"
              placeholder="Enter email"
            />
          </div>
          <div className="profile-form-group">
            <label className="profile-form-label">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={editFormData.mobile}
              onChange={handleInputChange}
              className="profile-form-input"
              placeholder="Enter Mobile number"
            />
          </div>
          <div className="profile-form-group">
            <label className="profile-form-label">Country</label>
            <input
              type="text"
              name="country"
              value={editFormData.country}
              onChange={handleInputChange}
              className="profile-form-input"
              placeholder="Country"
            />
          </div>
          <div className="profile-form-group">
            <label className="profile-form-label">City</label>
            <input
              type="text"
              name="city"
              value={editFormData.city}
              onChange={handleInputChange}
              className="profile-form-input"
              placeholder="City"
            />
          </div>
        </div>
      ) : (
        // View Mode - Read-only Display
        <div className="overview-info-grid">
          <div className="overview-info-item">
            <span className="overview-info-label">Full Name</span>
            <span className="overview-info-value">{personalInfo.fullName}</span>
          </div>
          <div className="overview-info-item">
            <span className="overview-info-label">Username</span>
            <span className="overview-info-value">{personalInfo.username}</span>
          </div>
          <div className="overview-info-item">
            <span className="overview-info-label">Email</span>
            <span className="overview-info-value">{personalInfo.email}</span>
          </div>
          <div className="overview-info-item">
            <span className="overview-info-label">Mobile Number</span>
            <span className="overview-info-value">{personalInfo.mobile}</span>
          </div>
          <div className="overview-info-item">
            <span className="overview-info-label">Country</span>
            <span className="overview-info-value">{personalInfo.country}</span>
          </div>
          <div className="overview-info-item">
            <span className="overview-info-label">City</span>
            <span className="overview-info-value">{personalInfo.city}</span>
          </div>
        </div>
      )}
    </div>
  );
}
