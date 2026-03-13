import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ReviewPage.css";
import backgroundImg from "../../assets/background-login.png";
import emireqLogo from "../../assets/emireq-logo.png";
import { investorOnboarding } from "../../apiRequests/investorsAPI/investorsApiCall";
import { INVESTROR_ONBOARDING } from "../../services/endPoints";

export default function ReviewPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("previewData");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  // Handle input section changes
  const handleInputChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      input: {
        ...prev.input,
        [field]: value,
      },
    }));
  };

  // Handle firmographic changes
  const handleFirmoChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      firmographics: {
        ...prev.firmographics,
        [field]: value,
      },
    }));
  };

  // Handle email change
  const handleEmailChange = (index, value) => {
    const updatedEmails = [...data.firmographics.contacts.emails];
    updatedEmails[index].address = value;

    setData((prev) => ({
      ...prev,
      firmographics: {
        ...prev.firmographics,
        contacts: {
          ...prev.firmographics.contacts,
          emails: updatedEmails,
        },
      },
    }));
  };

  // Submit handler
  const handleSubmit = async () => {
    const payload = {
      action: "confirm",
      full_name: data.firmographics.full_name,
      country: data.input.country,
      investor_category: "individual",
    };
    const response = await investorOnboarding(
      INVESTROR_ONBOARDING + "1/",
      payload,
      true,
    );
    if (response.ok) {
      navigate("/dashboard");
    }
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="review-container">
      <div
        className="review-left"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="review-left-header">
          <img src={emireqLogo} alt="Emireq" className="review-logo" />
          <div className="review-language">
            <span>English(UK)</span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="review-left-content">
          <div className="review-trust-badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_68_12726)">
                <path
                  d="M8.28086 12.9167C8.20647 12.6283 8.05615 12.3651 7.84555 12.1545C7.63494 11.9439 7.37176 11.7935 7.08336 11.7192L1.97086 10.4008C1.88364 10.3761 1.80687 10.3235 1.75221 10.2512C1.69754 10.1788 1.66797 10.0907 1.66797 9.99998C1.66797 9.90931 1.69754 9.82112 1.75221 9.74878C1.80687 9.67644 1.88364 9.62391 1.97086 9.59915L7.08336 8.27998C7.37166 8.20566 7.63477 8.05546 7.84537 7.84502C8.05596 7.63457 8.20634 7.37156 8.28086 7.08332L9.5992 1.97082C9.6237 1.88325 9.67618 1.8061 9.74863 1.75115C9.82108 1.69619 9.90951 1.66644 10.0004 1.66644C10.0914 1.66644 10.1798 1.69619 10.2523 1.75115C10.3247 1.8061 10.3772 1.88325 10.4017 1.97082L11.7192 7.08332C11.7936 7.37171 11.9439 7.6349 12.1545 7.8455C12.3651 8.0561 12.6283 8.20642 12.9167 8.28082L18.0292 9.59832C18.1171 9.62257 18.1946 9.67499 18.2499 9.74755C18.3052 9.8201 18.3351 9.90878 18.3351 9.99998C18.3351 10.0912 18.3052 10.1799 18.2499 10.2524C18.1946 10.325 18.1171 10.3774 18.0292 10.4017L12.9167 11.7192C12.6283 11.7935 12.3651 11.9439 12.1545 12.1545C11.9439 12.3651 11.7936 12.6283 11.7192 12.9167L10.4009 18.0292C10.3764 18.1167 10.3239 18.1939 10.2514 18.2488C10.179 18.3038 10.0905 18.3335 9.99961 18.3335C9.90868 18.3335 9.82025 18.3038 9.7478 18.2488C9.67535 18.1939 9.62287 18.1167 9.59836 18.0292L8.28086 12.9167Z"
                  stroke="#FFC300"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.666 2.5V5.83333"
                  stroke="#FFC300"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3333 4.16669H15"
                  stroke="#FFC300"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33398 14.1667V15.8334"
                  stroke="#FFC300"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.16667 15H2.5"
                  stroke="#FFC300"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_68_12726">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Trusted by 50,000+ users worldwide</span>
          </div>
          <h1 className="review-left-title">
            Get Access to Your Investor Profile and Unlock Exclusive Deals.
          </h1>
        </div>
      </div>

      <div className="review-right">
        <div className="review-header">
          <img src={emireqLogo} alt="Emireq" className="review-header-logo" />
        </div>

        <div className="review-content">
          <div className="review-icon">
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_68_13461)">
                <path
                  d="M12 18C12 9.16344 19.1634 2 28 2H60C68.8366 2 76 9.16344 76 18V50C76 58.8366 68.8366 66 60 66H28C19.1634 66 12 58.8366 12 50V18Z"
                  fill="url(#paint0_linear_68_13461)"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M41.2486 38.6667C41.1296 38.2052 40.8891 37.7841 40.5521 37.4472C40.2151 37.1102 39.794 36.8697 39.3326 36.7507L31.1526 34.6413C31.013 34.6017 30.8902 34.5177 30.8028 34.4019C30.7153 34.2862 30.668 34.1451 30.668 34C30.668 33.8549 30.7153 33.7138 30.8028 33.5981C30.8902 33.4823 31.013 33.3983 31.1526 33.3587L39.3326 31.248C39.7939 31.1291 40.2149 30.8888 40.5518 30.5521C40.8888 30.2153 41.1294 29.7945 41.2486 29.3333L43.3579 21.1533C43.3971 21.0132 43.4811 20.8898 43.597 20.8019C43.7129 20.7139 43.8544 20.6663 43.9999 20.6663C44.1454 20.6663 44.2869 20.7139 44.4028 20.8019C44.5188 20.8898 44.6027 21.0132 44.6419 21.1533L46.7499 29.3333C46.869 29.7948 47.1095 30.2159 47.4464 30.5528C47.7834 30.8898 48.2045 31.1303 48.6659 31.2493L56.8459 33.3573C56.9866 33.3961 57.1107 33.48 57.1991 33.5961C57.2875 33.7122 57.3353 33.8541 57.3353 34C57.3353 34.1459 57.2875 34.2878 57.1991 34.4039C57.1107 34.52 56.9866 34.6039 56.8459 34.6427L48.6659 36.7507C48.2045 36.8697 47.7834 37.1102 47.4464 37.4472C47.1095 37.7841 46.869 38.2052 46.7499 38.6667L44.6406 46.8467C44.6014 46.9868 44.5174 47.1102 44.4015 47.1981C44.2856 47.2861 44.1441 47.3337 43.9986 47.3337C43.8531 47.3337 43.7116 47.2861 43.5957 47.1981C43.4798 47.1102 43.3958 46.9868 43.3566 46.8467L41.2486 38.6667Z"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M54.666 22V27.3333"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M57.3333 24.6667H52"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.334 40.6667V43.3333"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.6667 42H32"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_68_13461"
                  x="0"
                  y="0"
                  width="88"
                  height="88"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="4"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_68_13461"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.854405 0 0 0 0 0.697794 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_68_13461"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="3"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect2_dropShadow_68_13461"
                  />
                  <feOffset dy="10" />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.854405 0 0 0 0 0.697794 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_68_13461"
                    result="effect2_dropShadow_68_13461"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_68_13461"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_68_13461"
                  x1="12"
                  y1="2"
                  x2="76"
                  y2="66"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9810FA" />
                  <stop offset="1" stopColor="#155DFC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="review-title">Review & Confirm</h2>
          <p className="review-subtitle">
            Almost there! Review your information and submit your application
          </p>

          <div>
            {/* -------- INPUT SECTION -------- */}
            {Object.entries(data.input).map(([key, value]) => (
              <div className="register-form-group" key={key}>
                <label className="register-form-label">
                  {key.replaceAll("_", " ")}
                </label>
                <input
                  type="text"
                  className="register-form-input"
                  value={value || ""}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                />
              </div>
            ))}

            {/* -------- FIRMOGRAPHICS -------- */}

            <div className="register-form-group">
              <label className="register-form-label">Full Name</label>
              <input
                type="text"
                className="register-form-input"
                value={data.firmographics.full_name || ""}
                onChange={(e) => handleFirmoChange("full_name", e.target.value)}
              />
            </div>

            <div className="register-form-group">
              <label className="register-form-label">LinkedIn</label>
              <input
                type="text"
                className="register-form-input"
                value={data.firmographics.linkedin || ""}
                onChange={(e) => handleFirmoChange("linkedin", e.target.value)}
              />
            </div>

            {/* -------- EMAIL LIST -------- */}
            {data.firmographics.contacts.emails.map((email, i) => (
              <div className="register-form-group" key={i}>
                <label className="register-form-label">
                  {email.type.replaceAll("_", " ")}
                </label>
                <input
                  type="text"
                  className="register-form-input"
                  value={email.address}
                  onChange={(e) => handleEmailChange(i, e.target.value)}
                />
              </div>
            ))}
          </div>
          <button className="review-submit-btn" onClick={handleSubmit}>
            Submit Application
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
