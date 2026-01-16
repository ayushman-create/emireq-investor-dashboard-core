import PersonalInformation from "./PersonalInformation";
import LocationContact from "./LocationContact";
import DocumentUpload from "./DocumentUpload";

export default function ProfileOverview({ onEditClick }) {
  return (
    <div className="profile-overview">
      {/* Personal Information */}
      <PersonalInformation />

      {/* Location & Contact */}
      <LocationContact />

      {/* KYC & Compliance */}
      <div className="profile-section overview-section">
        <div className="profile-section-header">
          <div>
            <h3 className="profile-section-title">KYC & Compliance</h3>
            <p className="profile-section-subtitle">Regulatory and compliance information</p>
          </div>
        </div>

        <div className="kyc-compliance-list">
          <div className="kyc-item kyc-item-success">
            <div className="kyc-item-left">
              <div className="kyc-icon success">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="kyc-item-title">Terms & Conditions</div>
                <div className="kyc-item-status">Accepted</div>
              </div>
            </div>
            <span className="kyc-badge active">Active</span>
          </div>

          <div className="kyc-item kyc-item-warning">
            <div className="kyc-item-left">
              <div className="kyc-icon warning">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5.33333V8M8 10.6667H8.00667M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="kyc-item-title">KYC Verification</div>
                <div className="kyc-item-status">Under review</div>
              </div>
            </div>
            <span className="kyc-badge pending">Pending</span>
          </div>

          <div className="kyc-item kyc-item-default">
            <div className="kyc-item-left">
              <div className="kyc-icon default">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66675 11.6667C9.42817 11.6667 11.6667 9.42817 11.6667 6.66675C11.6667 3.90532 9.42817 1.66675 6.66675 1.66675C3.90532 1.66675 1.66675 3.90532 1.66675 6.66675C1.66675 9.42817 3.90532 11.6667 6.66675 11.6667Z" stroke="#121212" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.075 8.6416C15.8628 8.93529 16.5638 9.42288 17.1132 10.0593C17.6625 10.6957 18.0426 11.4603 18.2182 12.2825C18.3937 13.1047 18.3591 13.9579 18.1176 14.7631C17.876 15.5684 17.4353 16.2998 16.8362 16.8896C16.2371 17.4794 15.499 17.9087 14.69 18.1376C13.8811 18.3666 13.0275 18.3879 12.2081 18.1995C11.3888 18.0111 10.6301 17.6192 10.0024 17.0599C9.37465 16.5007 8.89806 15.7922 8.6167 14.9999" stroke="#121212" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83325 5H6.66659V8.33333" stroke="#121212" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.925 11.5667L14.5083 12.1583L12.1583 14.5083" stroke="#121212" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <div>
                <div className="kyc-item-title">Shariah Compliance</div>
                <div className="kyc-item-status">Not verified</div>
              </div>
            </div>
            <span className="kyc-badge pending">Pending</span>
          </div>
        </div>
      </div>

      {/* Document Upload */}
      <DocumentUpload />
    </div>
  );
}
