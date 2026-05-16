import React, { useState } from "react";
import securityImage from "../assets/security.png";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  // STATES

  const [isSignup, setIsSignup] = useState(false);

  const [forgotStep, setForgotStep] = useState(0);

  const [generatedOtp, setGeneratedOtp] = useState("");

  const [loginType, setLoginType] = useState("user");

  const [passwordStrength, setPasswordStrength] = useState("");

  const [strengthColor, setStrengthColor] = useState("");

  // LOGIN DATA

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // SIGNUP DATA

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    securityAnswer: "",
  });

  // FORGOT PASSWORD DATA

  const [forgotData, setForgotData] = useState({
    email: "",
    securityAnswer: "",
    otp: "",
    newPassword: "",
  });

  // PASSWORD STRENGTH CHECKER

  const checkPasswordStrength = (password) => {

    let strength = 0;

    if (password.length >= 8) strength++;

    if (/[A-Z]/.test(password)) strength++;

    if (/[a-z]/.test(password)) strength++;

    if (/[0-9]/.test(password)) strength++;

    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) {

      setPasswordStrength("Weak");

      setStrengthColor("text-red-400");

    }

    else if (strength <= 4) {

      setPasswordStrength("Medium");

      setStrengthColor("text-yellow-400");

    }

    else {

      setPasswordStrength("Strong");

      setStrengthColor("text-green-400");

    }
  };

  // SIGNUP FUNCTION

  const handleSignup = () => {

    // EMPTY FIELD CHECK

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

    // PASSWORD STRENGTH CHECK

    if (passwordStrength !== "Strong") {

      alert(
        "Password is weak. Please create a strong password."
      );

      return;
    }

    // PASSWORD MATCH CHECK

    if (
      signupData.password !==
      signupData.confirmPassword
    ) {

      alert("Passwords do not match");

      return;
    }

    // CLEAN EMAIL

    const cleanEmail =
      signupData.email
        .trim()
        .toLowerCase();

    // DUPLICATE ACCOUNT CHECK

    const existingUser =
      localStorage.getItem(cleanEmail);

    if (existingUser) {

      alert(
        "User already exists with this email"
      );

      return;
    }

    // USER DATA

    const userData = {

      ...signupData,

      email: cleanEmail,

      blocked: false,

      registeredAt:
        new Date().toLocaleString(),

      lastLogin: "Never",

      lastLogout: "Never",
    };

    // SAVE USER

    localStorage.setItem(
      cleanEmail,
      JSON.stringify(userData)
    );

    alert(
      "Account Created Successfully"
    );

    // RESET FORM

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
      loginData.email.trim().toLowerCase();

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

        alert("Admin Login Successful");

        navigate("/admin");

        return;
      }

      alert("Invalid Admin Credentials");

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
      forgotData.email.trim().toLowerCase();

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

    const otp =
      Math.floor(
        100000 +
        Math.random() * 900000
      );

    setGeneratedOtp(
      otp.toString()
    );

    alert("Your OTP is: " + otp);

    setForgotStep(2);
  };

  // VERIFY OTP

  const verifyOtp = () => {

    if (
      forgotData.otp !==
      generatedOtp
    ) {

      alert("Invalid OTP");

      return;
    }

    setForgotStep(3);
  };

  // RESET PASSWORD

  const resetPassword = () => {

    const cleanEmail =
      forgotData.email.trim().toLowerCase();

    const user = JSON.parse(
      localStorage.getItem(cleanEmail)
    );

    user.password =
      forgotData.newPassword;

    localStorage.setItem(
      cleanEmail,
      JSON.stringify(user)
    );

    alert("Password Reset Successful");

    setForgotStep(0);

    setForgotData({
      email: "",
      securityAnswer: "",
      otp: "",
      newPassword: "",
    });
  };

  return (

    <div className="min-h-screen flex bg-[#020617] text-white overflow-hidden">

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

            Welcome
            <br />

            <span className="text-cyan-200">
              Back
            </span>

          </h1>

          <p className="text-white/80 text-lg mt-5 animate-fadeIn">

            Securely access your dashboard and continue your journey

          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">

        <div className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] relative z-10">

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
                    placeholder="Email"
                    className="w-full p-4 mb-4 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                    onChange={(e) =>
                      setForgotData({
                        ...forgotData,
                        email: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Security Answer"
                    className="w-full p-4 mb-6 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                    onChange={(e) =>
                      setForgotData({
                        ...forgotData,
                        securityAnswer: e.target.value,
                      })
                    }
                  />

                  <button
                    onClick={verifySecurity}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500"
                  >
                    Verify Security Question
                  </button>

                </>

              )}

              {forgotStep === 2 && (

                <>

                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full p-4 mb-6 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                    onChange={(e) =>
                      setForgotData({
                        ...forgotData,
                        otp: e.target.value,
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
                    className="w-full p-4 mb-6 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                    onChange={(e) =>
                      setForgotData({
                        ...forgotData,
                        newPassword: e.target.value,
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
                  : "Welcome Back!"}

              </h2>

              <p className="text-gray-400 mb-8">

                {isSignup
                  ? "Create your account to continue"
                  : "Log in to access your services"}

              </p>

              {!isSignup && (

                <div className="flex bg-[#0F172A] p-1 rounded-full mb-8 border border-white/10">

                  <button
                    onClick={() =>
                      setLoginType("user")
                    }
                    className={`flex-1 py-3 rounded-full transition-all duration-300 font-semibold ${
                      loginType === "user"
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    User
                  </button>

                  <button
                    onClick={() =>
                      setLoginType("admin")
                    }
                    className={`flex-1 py-3 rounded-full transition-all duration-300 font-semibold ${
                      loginType === "admin"
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    Admin
                  </button>

                </div>

              )}

              {isSignup && (

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 mb-4 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      name: e.target.value,
                    })
                  }
                />

              )}

              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 mb-4 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                onChange={(e) =>

                  isSignup

                    ? setSignupData({
                        ...signupData,
                        email: e.target.value,
                      })

                    : setLoginData({
                        ...loginData,
                        email: e.target.value,
                      })

                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 mb-2 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                onChange={(e) => {

                  if (isSignup) {

                    setSignupData({
                      ...signupData,
                      password: e.target.value,
                    });

                    checkPasswordStrength(
                      e.target.value
                    );
                  }

                  else {

                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    });
                  }

                }}
              />

              {isSignup && signupData.password && (

                <div className="mb-4">

                  <p className={`text-sm font-semibold ${strengthColor}`}>

                    Password Strength:
                    {" "}
                    {passwordStrength}

                  </p>

                </div>

              )}

              {isSignup && (

                <>

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-4 mb-4 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />

                  <select
                    className="w-full p-4 mb-4 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        securityQuestion: e.target.value,
                      })
                    }
                  >
                    <option>Select Security Question</option>
                    <option>What is your pet name?</option>
                    <option>What is your favorite color?</option>
                    <option>What is your birthplace?</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Security Answer"
                    className="w-full p-4 mb-6 rounded-xl bg-[#0F172A] border border-white/10 outline-none"
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        securityAnswer: e.target.value,
                      })
                    }
                  />

                </>

              )}

              {!isSignup && (

                <div className="flex justify-end mb-6">

                  <button
                    onClick={() =>
                      setForgotStep(1)
                    }
                    className="text-cyan-400"
                  >
                    Forgot Password?
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
                  : "Log In"}

              </button>

              <div className="mt-8 text-center text-gray-400">

                {isSignup
                  ? "Already have an account?"
                  : "New User?"}

                <button
                  onClick={() =>
                    setIsSignup(!isSignup)
                  }
                  className="ml-2 text-cyan-400 font-semibold"
                >

                  {isSignup
                    ? "Login"
                    : "Register"}

                </button>

              </div>

            </>

          )}

        </div>

      </div>

      <style jsx>{`

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