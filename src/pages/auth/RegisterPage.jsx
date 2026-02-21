import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backgroundImg from "../../assets/background-login.png";
import oneImg from "../../assets/one.png";
import emireqLogo from "../../assets/emireq-logo.png";
import "./RegisterPage.css";
import { getPreview } from "../../apiRequests/investorsAPI/investorsApiCall";
import { INVESTROR_PREVIEW } from "../../services/endPoints";

export default function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(
    location.state?.currentStep || 1,
  );

  // Form data for all steps
  const [formData, setFormData] = useState(
    location.state?.formData || {
      fullName: "",
      country: "",
      linkedin: "",
      investorType: "",
    },
  );

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const getUserDetails = async () => {
    const payload = {
      full_name: formData.fullName,
      country: formData.country,
      investor_category: "individual",
      ai_linkedin: formData.linkedin,
    };
    const isToken = true;
    const response = await getPreview(INVESTROR_PREVIEW, payload, isToken);
    console.log(response);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleContinue = () => {};

  return (
    <div className="register-page">
      {/* Left Side - Background with gradient overlay */}
      <div className="register-left">
        <div className="register-left-overlay">
          <img
            src={backgroundImg}
            alt="Background"
            className="register-background-image"
          />
          <div className="register-left-content">
            <div className="register-image-container">
              <img
                src={oneImg}
                alt="Investment"
                className="register-main-image"
              />
            </div>

            <div className="register-left-info">
              <>
                <h1 className="register-left-heading">
                  Tell Us About Yourself
                </h1>
                <p className="register-left-description">
                  We'd love to get to know you better. This information helps us
                  personalize your investment experience.
                </p>
              </>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="register-right">
        <div className="register-form-container">
          <div className="register-form-header">
            <img src={emireqLogo} alt="Emireq" className="register-form-logo" />
            <div className="register-language-selector">
              <span>English(UK)</span>
              <svg
                width="14"
                height="10"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="register-form-content">
            <>
              <h2 className="register-form-title">Personal Information</h2>
              <p className="register-form-subtitle">
                Let's start by getting to know you
              </p>

              <div className="register-form-group">
                <label htmlFor="fullName" className="register-form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("fullName")}
                  className={`register-form-input ${errors.fullName ? "register-form-input--error" : ""}`}
                  placeholder="username"
                />
                {errors.fullName && (
                  <span className="register-form-error">{errors.fullName}</span>
                )}
              </div>

              <div className="register-form-group">
                <label htmlFor="country" className="register-form-label">
                  Country
                </label>
                <div className="register-select-wrapper">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    onBlur={() => handleBlur("country")}
                    className={`register-form-select ${errors.country ? "register-form-input--error" : ""}`}
                  >
                    <option value="">Country</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="India">India</option>
                    <option value="Singapore">Singapore</option>
                  </select>
                  <svg
                    className="register-select-arrow"
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {errors.country && (
                  <span className="register-form-error">{errors.country}</span>
                )}
              </div>

              <div className="register-form-group">
                <label htmlFor="investorType" className="register-form-label">
                  Investor Type
                </label>
                <div className="register-select-wrapper">
                  <select
                    id="investorType"
                    name="investorType"
                    value={formData.investorType}
                    onChange={handleChange}
                    onBlur={() => handleBlur("investorType")}
                    className={`register-form-select ${errors.investorType ? "register-form-input--error" : ""}`}
                  >
                    <option value="">Investor</option>
                    <option value="Personal Investors">
                      Personal Investors
                    </option>
                    <option value="Angel Investors">Angel Investors</option>
                    <option value="Venture Capitalist">
                      Venture Capitalist
                    </option>
                    <option value="Peer to Peer Lenders">
                      Peer to Peer Lenders
                    </option>
                    <option value="Incubators and Accelerators">
                      Incubators and Accelerators
                    </option>
                    <option value="Banks and Financial Institutions">
                      Banks and Financial Institutions
                    </option>
                    <option value="Corporate Investors">
                      Corporate Investors
                    </option>
                  </select>
                  <svg
                    className="register-select-arrow"
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {errors.investorType && (
                  <span className="register-form-error">
                    {errors.investorType}
                  </span>
                )}
              </div>
              <div className="register-form-group">
                <label htmlFor="linkedin" className="register-form-label">
                  Linkedin
                </label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  onBlur={() => handleBlur("linkedin")}
                  className={`register-form-input ${errors.linkedin ? "register-form-input--error" : ""}`}
                  placeholder="linkedin link"
                />
                {errors.linkedin && (
                  <span className="register-form-error">{errors.linkedin}</span>
                )}
              </div>
            </>

            <div className="register-form-actions">
              <button
                type="button"
                onClick={() => getUserDetails()}
                className="register-back-btn"
              >
                Fetch Data
              </button>

              <button
                type="button"
                onClick={handleContinue}
                className="register-continue-btn"
              >
                Continue
              </button>
            </div>

            <p className="register-support-text">
              Need assistance?{" "}
              <a href="/support" className="register-support-link">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
