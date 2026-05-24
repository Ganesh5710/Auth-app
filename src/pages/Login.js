import React, { useState } from "react";
import securityImage from "../assets/security.png";
import { useNavigate } from "react-router-dom";
import translations from "../utils/translations";
import { useLanguage } from "../context/LanguageContext";
import {
  SunMedium,
  Moon,
  Globe,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const { language, setLanguage } =
    useLanguage();

  const t = translations[language];

  // THEME

  const [darkMode, setDarkMode] =
    useState(true);

  // STATES

  const [isSignup, setIsSignup] =
    useState(false);

  const [forgotStep, setForgotStep] =
    useState(0);

  const [generatedOtp, setGeneratedOtp] =
    useState("");

  const [loginType, setLoginType] =
    useState("user");

  // PASSWORD STRENGTH

  const [
    passwordStrength,
    setPasswordStrength,
  ] = useState("");

  const [strengthColor, setStrengthColor] =
    useState("");

  // LOGIN DATA

  const [loginData, setLoginData] =
    useState({
      email: "",
      password: "",
    });

  // SIGNUP DATA

  const [signupData, setSignupData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      securityQuestion: "",
      securityAnswer: "",
    });

  // FORGOT PASSWORD DATA

  const [forgotData, setForgotData] =
    useState({
      email: "",
      securityAnswer: "",
      otp: "",
      newPassword: "",
    });

  // INPUT STYLE

  const inputClass = `w-full p-4 rounded-xl outline-none transition-all duration-300 ${
    darkMode
      ? "bg-[#0F172A] text-white border border-white/10"
      : "bg-gray-100 text-black border border-gray-300"
  }`;

  // PASSWORD STRENGTH CHECKER

  const checkPasswordStrength = (
    value
  ) => {
    let score = 0;

    if (value.length >= 8) score++;

    if (/[a-z]/.test(value)) score++;

    if (/[0-9]/.test(value)) score++;

    if (/[^A-Za-z0-9]/.test(value))
      score++;

    if (value.length < 6) {
      setPasswordStrength("Very Weak");
      setStrengthColor("text-red-500");
    } else if (score <= 2) {
      setPasswordStrength("Weak");
      setStrengthColor(
        "text-orange-400"
      );
    } else if (score === 3) {
      setPasswordStrength("Medium");
      setStrengthColor(
        "text-yellow-400"
      );
    } else {
      setPasswordStrength("Strong");
      setStrengthColor(
        "text-green-400"
      );
    }
  };

  // SIGNUP FUNCTION

  const handleSignup = () => {
    if (
      !signupData.name ||
      !signupData.email ||
      !signupData.password ||
      !signupData.confirmPassword ||
      !signupData.securityQuestion ||
      !signupData.securityAnswer
    ) {
      alert("Please fill all fields");
      return;
    }

    if (
      passwordStrength !== "Strong" &&
      passwordStrength !== "Medium"
    ) {
      alert(
        "Password should be Medium or Strong"
      );
      return;
    }

    if (
      signupData.password !==
      signupData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    const cleanEmail =
      signupData.email
        .trim()
        .toLowerCase();

    const existingUser =
      localStorage.getItem(cleanEmail);

    if (existingUser) {
      alert(
        "User already exists with this email"
      );
      return;
    }

    const userData = {
      ...signupData,
      email: cleanEmail,
      blocked: false,
      registeredAt:
        new Date().toLocaleString(),
      lastLogin: "Never",
      lastLogout: "Never",
    };

    localStorage.setItem(
      cleanEmail,
      JSON.stringify(userData)
    );

    alert(
      "Account Created Successfully"
    );

    setSignupData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      securityQuestion: "",
      securityAnswer: "",
    });

    setPasswordStrength("");
    setStrengthColor("");

    setIsSignup(false);
  };

  // LOGIN FUNCTION

  const handleLogin = () => {
    const cleanEmail =
      loginData.email
        .trim()
        .toLowerCase();

    const password =
      loginData.password;

    // ADMIN LOGIN

    if (loginType === "admin") {
      const adminEmail =
        "admin@enkonix.com";

      const adminPassword =
        "Admin@123";

      if (
        cleanEmail === adminEmail &&
        password === adminPassword
      ) {
        localStorage.setItem(
          "isAdmin",
          "true"
        );

        localStorage.removeItem(
          "isUser"
        );

        localStorage.setItem(
          "loggedInUser",
          cleanEmail
        );

        alert(
          "Admin Login Successful"
        );

        navigate("/admin");

        return;
      }

      alert(
        "Invalid Admin Credentials"
      );

      return;
    }

    // USER LOGIN

    const user = JSON.parse(
      localStorage.getItem(cleanEmail)
    );

    if (!user) {
      alert("User Not Found");
      return;
    }

    if (user.password !== password) {
      alert("Invalid Password");
      return;
    }

    if (user.blocked) {
      alert(
        "Your account has been blocked by admin"
      );

      return;
    }

    user.lastLogin =
      new Date().toLocaleString();

    localStorage.setItem(
      cleanEmail,
      JSON.stringify(user)
    );

    localStorage.setItem(
      "isUser",
      "true"
    );

    localStorage.removeItem(
      "isAdmin"
    );

    localStorage.setItem(
      "loggedInUser",
      cleanEmail
    );

    alert("User Login Successful");

    navigate("/user");
  };

  // VERIFY SECURITY QUESTION

  const verifySecurity = () => {
    const cleanEmail =
      forgotData.email
        .trim()
        .toLowerCase();

    const user = JSON.parse(
      localStorage.getItem(cleanEmail)
    );

    if (!user) {
      alert("User Not Found");
      return;
    }

    if (
      user.securityAnswer.toLowerCase() !==
      forgotData.securityAnswer.toLowerCase()
    ) {
      alert("Wrong Security Answer");
      return;
    }

    const otp = Math.floor(
      100000 +
        Math.random() * 900000
    );

    setGeneratedOtp(otp.toString());

    alert("Your OTP is: " + otp);

    setForgotStep(2);
  };

  // VERIFY OTP

  const verifyOtp = () => {
    if (
      forgotData.otp !== generatedOtp
    ) {
      alert("Invalid OTP");
      return;
    }

    setForgotStep(3);
  };

  // RESET PASSWORD

  const resetPassword = () => {
    const cleanEmail =
      forgotData.email
        .trim()
        .toLowerCase();

    const user = JSON.parse(
      localStorage.getItem(cleanEmail)
    );

    user.password =
      forgotData.newPassword;

    localStorage.setItem(
      cleanEmail,
      JSON.stringify(user)
    );

    alert(
      "Password Reset Successful"
    );

    setForgotStep(0);

    setForgotData({
      email: "",
      securityAnswer: "",
      otp: "",
      newPassword: "",
    });
  };

  return (
    <div
      className={`min-h-screen flex overflow-hidden transition-all duration-300 ${
        darkMode
          ? "bg-[#020617] text-white"
          : "bg-[#F3F4F6] text-black"
      }`}
    >
      {/* LEFT SIDE */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 items-center justify-center relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>

        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

        <div className="relative z-10 text-center px-10">
          <img
            src={securityImage}
            alt="Security"
            className="w-[320px] md:w-[420px] mx-auto animate-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            draggable="false"
          />

          <h1 className="text-6xl font-black mt-10 leading-tight animate-fadeIn">
            {t.welcome}
          </h1>

          <p className="text-white/80 text-lg mt-5 animate-fadeIn">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        {/* TOP CONTROLS */}

       <div className="absolute top-3 right-3 z-40 flex items-center gap-1">
          {/* THEME */}

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className={`w-[50px] h-[50px] rounded-2xl border flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.08)] hover:scale-105 transition-all duration-300 ${
              darkMode
                ? "bg-[#071225] border-cyan-500/20"
                : "bg-white border-gray-300"
            }`}
          >
            {darkMode ? (
              <SunMedium
                size={20}
                className="text-cyan-400"
              />
            ) : (
              <Moon
                size={20}
                className="text-yellow-500"
              />
            )}
          </button>

          {/* LANGUAGE */}

          <div
            className={`flex items-center gap-2 px-2 h-[50px] rounded-2xl border transition-all duration-300 ${
              darkMode
                ? "bg-[#071225] border-white/10 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            <Globe
              size={18}
              className="text-gray-400"
            />

            <select
              value={language}
              onChange={(e) =>
                setLanguage(
                  e.target.value
                )
              }
              className={`bg-transparent text-[16px] font-semibold outline-none cursor-pointer ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              <option
                value="en"
                style={{
                  backgroundColor:
                    darkMode
                      ? "#071225"
                      : "#ffffff",
                  color: darkMode
                    ? "#ffffff"
                    : "#000000",
                }}
              >
                English
              </option>

              <option
                value="ar"
                style={{
                  backgroundColor:
                    darkMode
                      ? "#071225"
                      : "#ffffff",
                  color: darkMode
                    ? "#ffffff"
                    : "#000000",
                }}
              >
                عربي
              </option>

              <option
                value="he"
                style={{
                  backgroundColor:
                    darkMode
                      ? "#071225"
                      : "#ffffff",
                  color: darkMode
                    ? "#ffffff"
                    : "#000000",
                }}
              >
                עברית
              </option>
            </select>
          </div>
        </div>

        <div className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

        {/* CARD */}

        <div
          className={`w-full max-w-md backdrop-blur-xl rounded-3xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] relative z-10 transition-all duration-300 ${
            darkMode
              ? "bg-white/5 border border-white/10"
              : "bg-white border border-gray-200"
          } ${
            language === "ar" ||
            language === "he"
              ? "text-right"
              : "text-left"
          }`}
        >
          {/* FORGOT PASSWORD */}

          {forgotStep > 0 ? (
            <>
              <h2 className="text-4xl font-bold mb-8">
                Forgot Password
              </h2>

              {forgotStep === 1 && (
                <>
                  <input
                    type="email"
                    placeholder={t.email}
                    className={`${inputClass} mb-4`}
                    onChange={(e) =>
                      setForgotData({
                        ...forgotData,
                        email:
                          e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Security Answer"
                    className={`${inputClass} mb-6`}
                    onChange={(e) =>
                      setForgotData({
                        ...forgotData,
                        securityAnswer:
                          e.target.value,
                      })
                    }
                  />

                  <button
                    onClick={verifySecurity}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500"
                  >
                    Verify Security
                    Question
                  </button>
                </>
              )}

              {forgotStep === 2 && (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className={`${inputClass} mb-6`}
                    onChange={(e) =>
                      setForgotData({
                        ...forgotData,
                        otp:
                          e.target.value,
                      })
                    }
                  />

                  <button
                    onClick={verifyOtp}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500"
                  >
                    Verify OTP
                  </button>
                </>
              )}

              {forgotStep === 3 && (
                <>
                  <input
                    type="password"
                    placeholder="New Password"
                    className={`${inputClass} mb-6`}
                    onChange={(e) =>
                      setForgotData({
                        ...forgotData,
                        newPassword:
                          e.target.value,
                      })
                    }
                  />

                  <button
                    onClick={resetPassword}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500"
                  >
                    Reset Password
                  </button>
                </>
              )}

              <button
                onClick={() =>
                  setForgotStep(0)
                }
                className="mt-6 text-cyan-400"
              >
                Back to Login
              </button>
            </>
          ) : (
            <>
              <h2 className="text-5xl font-black mb-3">
                {isSignup
                  ? "Create Account"
                  : t.welcome}
              </h2>

              <p className="text-gray-400 mb-8">
                {t.subtitle}
              </p>

              {!isSignup && (
                <div className="flex bg-[#0F172A] p-1 rounded-full mb-8 border border-white/10">
                  <button
                    onClick={() =>
                      setLoginType(
                        "user"
                      )
                    }
                    className={`flex-1 py-3 rounded-full transition-all duration-300 font-semibold ${
                      loginType ===
                      "user"
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    User
                  </button>

                  <button
                    onClick={() =>
                      setLoginType(
                        "admin"
                      )
                    }
                    className={`flex-1 py-3 rounded-full transition-all duration-300 font-semibold ${
                      loginType ===
                      "admin"
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Admin
                  </button>
                </div>
              )}

              {/* FULL NAME */}

              {isSignup && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`${inputClass} mb-4`}
                  value={signupData.name}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      name:
                        e.target.value,
                    })
                  }
                />
              )}

              {/* EMAIL */}

              <input
                type="email"
                placeholder={t.email}
                className={`${inputClass} mb-4`}
                value={
                  isSignup
                    ? signupData.email
                    : loginData.email
                }
                onChange={(e) =>
                  isSignup
                    ? setSignupData({
                        ...signupData,
                        email:
                          e.target.value,
                      })
                    : setLoginData({
                        ...loginData,
                        email:
                          e.target.value,
                      })
                }
              />

              {/* PASSWORD */}

              <input
                type="password"
                placeholder={t.password}
                className={`${inputClass} mb-2`}
                value={
                  isSignup
                    ? signupData.password
                    : loginData.password
                }
                onChange={(e) => {
                  const value =
                    e.target.value;

                  if (isSignup) {
                    setSignupData({
                      ...signupData,
                      password:
                        value,
                    });

                    checkPasswordStrength(
                      value
                    );
                  } else {
                    setLoginData({
                      ...loginData,
                      password:
                        value,
                    });
                  }
                }}
              />

              {/* PASSWORD STRENGTH */}

              {isSignup &&
                signupData.password && (
                  <div className="mb-4">
                    <p
                      className={`text-sm font-semibold ${strengthColor}`}
                    >
                      Password
                      Strength:{" "}
                      {
                        passwordStrength
                      }
                    </p>
                  </div>
                )}

              {/* CONFIRM PASSWORD */}

              {isSignup && (
                <>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={`${inputClass} mb-4`}
                    value={
                      signupData.confirmPassword
                    }
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        confirmPassword:
                          e.target.value,
                      })
                    }
                  />

                  <select
                    className={`${inputClass} mb-4`}
                    value={
                      signupData.securityQuestion
                    }
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        securityQuestion:
                          e.target.value,
                      })
                    }
                  >
                    <option value="">
                      Select Security
                      Question
                    </option>

                    <option value="pet">
                      What is your pet
                      name?
                    </option>

                    <option value="school">
                      What is your school
                      name?
                    </option>

                    <option value="city">
                      What is your birth
                      city?
                    </option>
                  </select>

                  <input
                    type="text"
                    placeholder="Security Answer"
                    className={`${inputClass} mb-4`}
                    value={
                      signupData.securityAnswer
                    }
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        securityAnswer:
                          e.target.value,
                      })
                    }
                  />
                </>
              )}

              {!isSignup && (
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() =>
                      setForgotStep(
                        1
                      )
                    }
                    className="text-cyan-400"
                  >
                    {t.forgot}
                  </button>
                </div>
              )}

              <button
                onClick={
                  isSignup
                    ? handleSignup
                    : handleLogin
                }
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 font-semibold text-lg"
              >
                {isSignup
                  ? "Create Account"
                  : t.login}
              </button>

              <div className="mt-8 text-center text-gray-400">
                {isSignup
                  ? "Already have an account?"
                  : t.noAccount}

                <button
                  onClick={() =>
                    setIsSignup(
                      !isSignup
                    )
                  }
                  className="ml-2 text-cyan-400 font-semibold"
                >
                  {isSignup
                    ? t.login
                    : t.register}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* STYLES */}

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-20px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </div>
  );
}