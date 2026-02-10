import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import styles from "../auth/investorLogin.module.css";
import bgImage from "../../assets/investor-side-img.jpg";
import SideImage from "../../assets/investor-side-top.png";
import ShortLogo from "../../assets/shotLogo.png";
import LogoImg from "../../assets/emireq-logo.png";
import { registerInvestor } from "../../apiRequests/investorsAPI/investorsApiCall";
import { INVESTROR_REGISTER_ENDPOINT } from "../../services/endPoints";

const InvestorRegister = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleRegister = async () => {
    let isValid = true;

    // Reset errors first
    setUsernameError("");
    setPasswordError("");
    setIsError(false);

    // Username validation
    if (!username.trim()) {
      setUsernameError("Username is required");
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    if (!isValid) return;

    const payload = {
      username: username,
      email: email,
      password1: password,
      password2: confirmPassword,
    };

    try {
      const response = await registerInvestor(
        INVESTROR_REGISTER_ENDPOINT,
        payload,
      );

      if (!response.ok) {
        setIsError(true);
        if (response.errors) {
          setErrors(response.errors.password2);
        }
        return;
      }

      sessionStorage.setItem("investor_token", response.token);
      sessionStorage.setItem("user", JSON.stringify(response.user));
      navigate("/register");
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={LogoImg} alt="logo" />
      </div>

      <div className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2 className={styles.welcome}>Welcome back</h2>
          <p className={styles.subtitle}>
            Log in to continue your funding journey.
          </p>

          {isError && (
            <div className={styles.loginErrorContainer}>
              {errors?.length > 0 ? (
                <>
                  {errors.map((error) => (
                    <p>
                      <IoMdInformationCircleOutline /> {error} <br />
                    </p>
                  ))}
                </>
              ) : (
                <p>
                  <IoMdInformationCircleOutline /> Someting went wrong. Please
                  try again.
                </p>
              )}
            </div>
          )}

          <div className={styles.form}>
            <div className={styles.field}>
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (e.target.value.trim()) {
                    setUsernameError("");
                  }
                }}
                className={usernameError ? styles.inputError : ""}
              />
              {usernameError && (
                <span className={styles.errorText}>
                  <IoMdInformationCircleOutline /> {usernameError}
                </span>
              )}
            </div>
            <div className={styles.field}>
              <label>Email</label>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value.trim()) {
                    setEmailError("");
                  }
                }}
                className={emailError ? styles.inputError : ""}
              />
              {emailError && (
                <span className={styles.errorText}>
                  <IoMdInformationCircleOutline /> {emailError}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  const val = e.target.value;
                  setPassword(val);

                  if (val.length > 0 && val.length < 6) {
                    setPasswordError("Password must be at least 6 characters");
                  } else {
                    setPasswordError("");
                  }
                }}
                className={passwordError ? styles.inputError : ""}
              />

              {passwordError && (
                <span className={styles.errorText}>
                  <IoMdInformationCircleOutline /> {passwordError}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => {
                  const val = e.target.value;
                  setConfirmPassword(val);

                  if (val.length > 0 && val.length < 6) {
                    setConfirmPasswordError(
                      "Password must be at least 6 characters",
                    );
                  } else {
                    setConfirmPasswordError("");
                  }
                }}
                className={confirmPasswordError ? styles.inputError : ""}
              />

              {confirmPasswordError && (
                <span className={styles.errorText}>
                  <IoMdInformationCircleOutline /> {confirmPasswordError}
                </span>
              )}
            </div>

            <button
              className={styles.primaryBtn}
              onClick={() => handleRegister()}
            >
              Register
            </button>

            <div className={styles.links}>
              <p>
                have an account?{" "}
                <b>
                  <Link to="/login">Login</Link>
                </b>
              </p>
            </div>

            <div className={styles.divider}>Or</div>

            <p className={styles.businessText}>
              Verify your business email with Google or Linkedin
            </p>
            <div className={styles.socialBtnContainer}>
              <button className={styles.socialBtn}>
                <span>
                  <FcGoogle />
                </span>
              </button>

              <button className={styles.socialBtn}>
                <span>
                  <IoLogoLinkedin color="#0A66C2" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={styles.right}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className={styles.overlay}></div>

          <div className={styles.heroContent}>
            <img src={ShortLogo} style={{ float: "inline-start" }} />
            <p className={styles.accesText}>
              Get Access to Your Investor Profile and Unlock Exclusive Deals.
            </p>
            <img src={SideImage} className={styles.dashboardsImg} />
            <p>
              Experiencing issues?
              <br />
              Get assistance via support@emireq.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorRegister;
