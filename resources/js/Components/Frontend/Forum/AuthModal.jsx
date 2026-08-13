"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  LogIn,
  UserPlus,
  KeyRound,
  Mail,
  Lock,
  User,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Eye, EyeOff
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, usePage } from "@inertiajs/react";
import axios from 'axios';

const MODES = {
  LOGIN: "login",
  REGISTER: "register",
  FORGOT: "forgot",
};

const FORGOT_STEPS = {
  EMAIL: "email",
  VERIFY: "verify",
  RESET: "reset",
};

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = MODES.LOGIN,
}) {
  const [mode, setMode] = useState(initialMode);
  const { flash } = usePage().props;

  // Login form
  const loginForm = useForm({
    email: "",
    password: "",
    remember: false,
  });

  // Register form
  const registerForm = useForm({
    first_name: "",
    last_name: "",
    role: "student",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Forgot flow
  const [forgotStep, setForgotStep] = useState(FORGOT_STEPS.EMAIL);
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [forgotInfo, setForgotInfo] = useState("");
  
  // ✅ NEW: Loading states for buttons
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isResendingOtp, setIsResendingOtp] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const forgotEmailForm = useForm({
    email: "",
  });

  const forgotResetForm = useForm({
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Reset mode when opened
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      resetForgotFlow();
    }
  }, [isOpen, initialMode]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Flash success
  useEffect(() => {
    if (flash.success) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [flash.success]);

  // Resend cooldown timer
  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  if (!isOpen) return null;

  const resetForgotFlow = () => {
    setForgotStep(FORGOT_STEPS.EMAIL);
    setVerificationCode(["", "", "", "", "", ""]);
    setVerificationError("");
    setForgotInfo("");
    forgotEmailForm.reset();
    forgotResetForm.reset();
    setIsVerifying(false);
    setIsSendingOtp(false);
    setIsResendingOtp(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginForm.post(route("login"), {
      onSuccess: () => {
        // Close modal immediately on successful login
        onClose();
      },
      onError: () => {
        // Keep modal open on error, errors will be displayed
      },
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    registerForm.post(route("register"), {
      onSuccess: () => {
        registerForm.reset();
      },
    });
  };

  const handleForgotEmailSubmit = (e) => {
    e.preventDefault();
    
    // ✅ Prevent multiple clicks
    if (isSendingOtp) return;
    
    setIsSendingOtp(true);
    setVerificationError("");
    setForgotInfo("");

    axios.post('/otp/send', {
      email: forgotEmailForm.data.email,
    })
    .then(response => {
      setIsSendingOtp(false);
      if (response.data.success) {
        setForgotStep(FORGOT_STEPS.VERIFY);
        setForgotInfo("A verification code has been sent to your email.");
        setResendCooldown(60);
        forgotEmailForm.clearErrors();
      }
    })
    .catch(error => {
      setIsSendingOtp(false);
      if (error.response?.data?.errors?.email) {
        forgotEmailForm.setError('email', error.response.data.errors.email[0]);
      } else {
        setForgotInfo(error.response?.data?.message || "Failed to send OTP.");
      }
    });
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    const code = verificationCode.join('');
    
    if (code.length !== 6) {
      setVerificationError("Please enter all 6 digits.");
      return;
    }

    // ✅ Prevent multiple clicks
    if (isVerifying) return;

    setIsVerifying(true);
    setVerificationError("");

    axios.post('/otp/verify', {
      email: forgotEmailForm.data.email,
      code: code,
    })
    .then(response => {
      setIsVerifying(false);
      if (response.data.success) {
        forgotResetForm.setData("email", forgotEmailForm.data.email);
        setForgotStep(FORGOT_STEPS.RESET);
        setForgotInfo("Email verified! Please set your new password.");
      }
    })
    .catch(error => {
      setIsVerifying(false);
      setVerificationError(error.response?.data?.message || "Invalid verification code. Please try again.");
    });
  };

  const handleVerificationCodeChange = (index, value) => {
    if (value.length > 1) return;
    
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
    setVerificationError("");

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleResendCode = () => {
    // ✅ Prevent multiple clicks
    if (resendCooldown > 0 || isResendingOtp) return;
    
    setIsResendingOtp(true);
    setVerificationError("");

    axios.post('/otp/send', {
      email: forgotEmailForm.data.email,
    })
    .then(response => {
      setIsResendingOtp(false);
      if (response.data.success) {
        setResendCooldown(60);
        setForgotInfo("A new verification code has been sent to your email.");
        setVerificationError("");
      }
    })
    .catch(error => {
      setIsResendingOtp(false);
      setVerificationError(error.response?.data?.message || "Failed to resend code.");
    });
  };

  const handleForgotResetSubmit = (e) => {
    e.preventDefault();
    
    // ✅ Prevent multiple clicks
    if (forgotResetForm.processing) return;

    axios.post('/password/reset-direct', {
      email: forgotResetForm.data.email,
      password: forgotResetForm.data.password,
      password_confirmation: forgotResetForm.data.password_confirmation,
    })
    .then(response => {
      if (response.data.success) {
        setForgotInfo("Password updated successfully!");
        setTimeout(() => {
          setMode(MODES.LOGIN);
          resetForgotFlow();
          forgotResetForm.reset();
        }, 1500);
      }
    })
    .catch(error => {
      const errors = error.response?.data?.errors;
      if (errors) {
        if (errors.password) {
          forgotResetForm.setError('password', errors.password[0]);
        }
        if (errors.password_confirmation) {
          forgotResetForm.setError('password_confirmation', errors.password_confirmation[0]);
        }
      } else {
        setForgotInfo(error.response?.data?.message || "Failed to reset password.");
      }
    });
  };

  const headerTitle =
    mode === MODES.LOGIN
      ? "Sign in to your account"
      : mode === MODES.REGISTER
      ? "Create your account"
      : forgotStep === FORGOT_STEPS.EMAIL
      ? "Reset your password"
      : forgotStep === FORGOT_STEPS.VERIFY
      ? "Verify your email"
      : "Set a new password";

  const headerSubtitle =
    mode === MODES.LOGIN
      ? "Access your questions, replies, and saved preferences."
      : mode === MODES.REGISTER
      ? "It takes less than a minute. Join as a student, parent, or teacher."
      : forgotStep === FORGOT_STEPS.EMAIL
      ? "Enter your registered email address to verify your account."
      : forgotStep === FORGOT_STEPS.VERIFY
      ? "Enter the 6-digit code sent to your email address."
      : "Choose a strong password that you haven't used before.";

  const showTabs = mode === MODES.LOGIN || mode === MODES.REGISTER;

  // --- Render Login Form ---
  const renderLoginForm = () => (
  
        <form onSubmit={handleLoginSubmit} className="auth-form">
      <div className="mb-3">
        <label className="auth-label">Email</label>
        <div className="auth-input-group">
          <span className="auth-input-icon">
            <Mail size={16} />
          </span>
          <input
            type="email"
            className="form-control auth-input"
            placeholder="you@example.com"
            // value={loginEmail}
            // onChange={(e) => setLoginEmail(e.target.value)}
            value={loginForm.data.email}
            onChange={(e) => loginForm.setData("email", e.target.value)}

            required
          />
        </div>
      </div>

      <div className="mb-2">
        <label className="auth-label">Password</label>
        <div className="auth-input-group">
          <span className="auth-input-icon">
            <Lock size={16} />
          </span>
          <input
            type="password"
            className="form-control auth-input"
            placeholder="Enter password"
            // value={loginPassword}
            // onChange={(e) => setLoginPassword(e.target.value)}
            value={loginForm.data.password}
            onChange={(e) => loginForm.setData("password", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="form-check auth-remember">
          <input
            className="form-check-input"
            type="checkbox"
            id="rememberMe"
            checked={loginForm.data.remember}
            onChange={(e) => loginForm.setData("remember", e.target.checked)}
  
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button
          type="button"
          className="btn btn-link p-0 auth-link"
          onClick={() => {
            setMode(MODES.FORGOT);
            resetForgotFlow();
          }}
        >
          Forgot password?
        </button>
      </div>

      <button type="submit" className="btn btn-primary  auth-primary-btn">
        Continue
      </button>

      {loginForm.errors.email && (
          <div className="alert alert-danger py-1 px-2">
            {loginForm.errors.email}
          </div>
        )}

        {loginForm.errors.password && (
        <div className="alert alert-danger py-1 px-2">
          {loginForm.errors.password}
        </div>
      )}

      {flash.error && (
        <div className="alert alert-danger">
          {flash.error}
        </div>
      )}

    </form>

  );

  // --- Render Register Form ---
  const renderRegisterForm = () => (
    <form onSubmit={handleRegisterSubmit} className="auth-form">
      <div className="row g-2 mb-2">
        <div className="col-12 col-sm-6">
          <label className="auth-label">First name</label>
          <div className="auth-input-group">
            <span className="auth-input-icon">
              <User size={16} />
            </span>
            <input
              type="text"
              className="form-control auth-input"
              placeholder="First name"
              value={registerForm.data.first_name}
              onChange={(e) => registerForm.setData("first_name", e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <label className="auth-label">Last name</label>
          <div className="auth-input-group">
            <input
              type="text"
              className="form-control auth-input"
              placeholder="Last name"
              value={registerForm.data.last_name}
              onChange={(e) => registerForm.setData("last_name", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-2">
        <label className="auth-label">I am a</label>
        <div className="auth-input-group">
          <span className="auth-input-icon">
            <UserPlus size={16} />
          </span>
          <select
            className="form-select auth-input auth-select"
            value={registerForm.data.role}
            onChange={(e) => registerForm.setData("role", e.target.value)}
            required
          >
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
          </select>
          <span className="auth-input-icon-right">
            <ChevronDown size={14} />
          </span>
        </div>
      </div>

      <div className="mb-2">
        <label className="auth-label">Email</label>
        <div className="auth-input-group">
          <span className="auth-input-icon">
            <Mail size={16} />
          </span>
          <input
            type="email"
            className="form-control auth-input"
            placeholder="you@example.com"
            value={registerForm.data.email}
            onChange={(e) => registerForm.setData("email", e.target.value)}
            required
          />
        </div>
        {registerForm.errors.email && (
          <div className="alert alert-danger py-1 px-2 mt-1">{registerForm.errors.email}</div>
        )}
      </div>

      <div className="row g-2 mb-2">
        <div className="col-12 col-sm-6">
          <label className="auth-label">Password</label>
          <div className="auth-input-group">
            <span className="auth-input-icon">
              <Lock size={16} />
            </span>
            <input
              type="password"
              className="form-control auth-input"
              placeholder="Create password"
              value={registerForm.data.password}
              onChange={(e) => registerForm.setData("password", e.target.value)}
              required
            />
          </div>
        </div>


        <div className="col-12 col-sm-6">
          <label className="auth-label">Confirm password</label>

          <div className="auth-input-group position-relative">
              <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control auth-input pe-5"
                  placeholder="Confirm password"
                  value={registerForm.data.password_confirmation}
                  onChange={(e) =>
                      registerForm.setData("password_confirmation", e.target.value)
                  }
                  required
              />

              <button
                  type="button"
                  className="btn border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 p-0"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                  {showConfirmPassword ? (
                      <EyeOff size={18} />
                  ) : (
                      <Eye size={18} />
                  )}
              </button>
          </div>
        </div>


      </div>

      {registerForm.errors.password && (
        <div className="alert alert-danger py-1 px-2 mb-2 auth-error">
          {registerForm.errors.password}
        </div>
      )}
      {registerForm.errors.password_confirmation && (
        <div className="alert alert-danger py-1 px-2 mb-2 auth-error">
          {registerForm.errors.password_confirmation}
        </div>
      )}

      <div className="mb-3 auth-terms text-muted">
        By creating an account, you agree to our{" "}
        <a href="#" className="auth-link">Terms</a> and{" "}
        <a href="#" className="auth-link">Privacy Policy</a>.
      </div>

      <button
        type="submit"
        className="btn btn-primary auth-primary-btn"
        disabled={registerForm.processing}
      >
        {registerForm.processing ? "Creating..." : "Create account"}
      </button>

      {flash.success && (
        <div className="alert alert-success mt-2">{flash.success}</div>
      )}
    </form>
  );


  const handleVerificationCodePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();

    // Sirf digits nikalo, agar user ne extra spaces ya dashes paste kiye ho
    const digitsOnly = pastedData.replace(/\D/g, '');

    if (digitsOnly.length === 0) return;

    const newCode = ["", "", "", "", "", ""];
    for (let i = 0; i < 6 && i < digitsOnly.length; i++) {
      newCode[i] = digitsOnly[i];
    }
    setVerificationCode(newCode);
    setVerificationError("");

    // Focus last filled input ya last input agar sab bhar gaye
    const lastFilledIndex = Math.min(digitsOnly.length, 6) - 1;
    const targetInput = document.getElementById(`code-${lastFilledIndex}`);
    if (targetInput) targetInput.focus();
  };









  // --- Render Verification Code Input ---
  // const renderVerificationCodeInput = () => (
  //   <div className="verification-code-container mb-3">
  //     <div className="d-flex justify-content-center gap-2">
  //       {verificationCode.map((digit, index) => (
  //         <input
  //           key={index}
  //           id={`code-${index}`}
  //           type="text"
  //           className="form-control verification-input"
  //           maxLength="1"
  //           value={digit}
  //           onChange={(e) => handleVerificationCodeChange(index, e.target.value)}
  //           onKeyDown={(e) => {
  //             if (e.key === 'Backspace' && !digit && index > 0) {
  //               const prevInput = document.getElementById(`code-${index - 1}`);
  //               if (prevInput) prevInput.focus();
  //             }
  //           }}
  //           autoFocus={index === 0}
  //           required
  //         />
  //       ))}
  //     </div>
  //     {verificationError && (
  //       <div className="alert alert-danger py-1 px-2 mt-2 auth-error d-flex align-items-center gap-2">
  //         <AlertCircle size={16} />
  //         {verificationError}
  //       </div>
  //     )}
  //   </div>
  // );


  const renderVerificationCodeInput = () => (
  <div className="verification-code-container mb-3">
    <div className="d-flex justify-content-center gap-2">
      {verificationCode.map((digit, index) => (
        <input
          key={index}
          id={`code-${index}`}
          type="text"
          className="form-control verification-input"
          maxLength="1"
          value={digit}
          onChange={(e) => handleVerificationCodeChange(index, e.target.value)}
          onPaste={handleVerificationCodePaste}   // ✅ Ye line add karo
          onKeyDown={(e) => {
            if (e.key === 'Backspace' && !digit && index > 0) {
              const prevInput = document.getElementById(`code-${index - 1}`);
              if (prevInput) prevInput.focus();
            }
          }}
          autoFocus={index === 0}
          required
        />
      ))}
    </div>
    {verificationError && (
      <div className="alert alert-danger py-1 px-2 mt-2 auth-error d-flex align-items-center gap-2">
        <AlertCircle size={16} />
        {verificationError}
      </div>
    )}
  </div>
);

  // --- Render Forgot Form ---
  const renderForgotForm = () => {
    if (forgotStep === FORGOT_STEPS.EMAIL) {
      return (
        <form onSubmit={handleForgotEmailSubmit} className="auth-form">
          <div className="mb-3">
            <label className="auth-label">Registered email</label>
            <div className="auth-input-group">
              <span className="auth-input-icon">
                <Mail size={16} />
              </span>
              <input
                type="email"
                className="form-control auth-input"
                value={forgotEmailForm.data.email}
                placeholder="you@example.com"
                onChange={(e) => {
                  forgotEmailForm.setData("email", e.target.value);
                  forgotEmailForm.clearErrors("email");
                }}
                required
              />
            </div>
            {forgotEmailForm.errors.email && (
              <div className="alert alert-danger py-1 px-2 mt-1 auth-error">
                {forgotEmailForm.errors.email}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-primary-btn"
            disabled={isSendingOtp} // ✅ Disabled when sending
          >
            {isSendingOtp ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              "Send Verification Code"
            )}
          </button>

          <button
            type="button"
            className="btn btn-link mt-2 auth-link"
            onClick={() => {
              setMode(MODES.LOGIN);
              resetForgotFlow();
            }}
          >
            Back to login
          </button>
        </form>
      );
    }

    if (forgotStep === FORGOT_STEPS.VERIFY) {
      return (
        <form onSubmit={handleVerificationSubmit} className="auth-form">
          {forgotInfo && (
            <div className="alert alert-success py-2 px-2 mb-3 d-flex align-items-center gap-2">
              <CheckCircle size={16} />
              {forgotInfo}
            </div>
          )}

          <div className="text-center mb-2">
            <p className="text-muted small">
              Enter the 6-digit code sent to <strong>{forgotEmailForm.data.email}</strong>
            </p>
          </div>

          {renderVerificationCodeInput()}

          <button
            type="submit"
            className="btn btn-primary auth-primary-btn"
            disabled={isVerifying}
          >
            {isVerifying ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Verifying...
              </>
            ) : (
              "Verify Code"
            )}
          </button>

          <div className="text-center mt-2">
            <button
              type="button"
              className="btn btn-link btn-sm auth-link"
              onClick={handleResendCode}
              disabled={resendCooldown > 0 || isResendingOtp} // ✅ Disabled during cooldown or resending
            >
              {isResendingOtp ? (
                <>
                  <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : resendCooldown > 0 ? (
                `Resend in ${resendCooldown}s`
              ) : (
                "Resend Code"
              )}
            </button>
          </div>

          <button
            type="button"
            className="btn btn-link mt-1 auth-link"
            onClick={() => {
              setForgotStep(FORGOT_STEPS.EMAIL);
              setForgotInfo("");
            }}
          >
            Back to email entry
          </button>
        </form>
      );
    }

    // RESET STEP
    return (
      <form onSubmit={handleForgotResetSubmit} className="auth-form">
        {forgotInfo && (
          <div className="alert alert-success py-2 px-2 mb-3 d-flex align-items-center gap-2">
            <CheckCircle size={16} />
            {forgotInfo}
          </div>
        )}

        <div className="mb-2">
          <label className="auth-label">New password</label>
          <div className="auth-input-group">
            <span className="auth-input-icon">
              <Lock size={16} />
            </span>
            <input
              type="password"
              className="form-control auth-input"
              placeholder="Enter new password"
              value={forgotResetForm.data.password}
              onChange={(e) => {
                forgotResetForm.setData("password", e.target.value);
                forgotResetForm.clearErrors("password");
              }}
              required
            />
          </div>
        </div>

        <div className="mb-2">
          <label className="auth-label">Confirm new password</label>
          <div className="auth-input-group">
            <input
              type="password"
              className="form-control auth-input"
              placeholder="Confirm new password"
              value={forgotResetForm.data.password_confirmation}
              onChange={(e) => {
                forgotResetForm.setData("password_confirmation", e.target.value);
                forgotResetForm.clearErrors("password_confirmation");
              }}
              required
            />
          </div>
        </div>

        {forgotResetForm.errors.password && (
          <div className="alert alert-danger py-1 px-2 mb-2 auth-error">
            {forgotResetForm.errors.password}
          </div>
        )}
        {forgotResetForm.errors.password_confirmation && (
          <div className="alert alert-danger py-1 px-2 mb-2 auth-error">
            {forgotResetForm.errors.password_confirmation}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary auth-primary-btn"
          disabled={forgotResetForm.processing}
        >
          {forgotResetForm.processing ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Updating...
            </>
          ) : (
            "Update password"
          )}
        </button>

        <button
          type="button"
          className="btn btn-link mt-2 auth-link"
          onClick={() => {
            setMode(MODES.LOGIN);
            resetForgotFlow();
          }}
        >
          Back to login
        </button>
      </form>
    );
  };

  const iconForMode =
    mode === MODES.LOGIN
      ? <LogIn size={18} />
      : mode === MODES.REGISTER
      ? <UserPlus size={18} />
      : <KeyRound size={18} />;

  const formKey = `${mode}-${forgotStep}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="auth-backdrop"
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="auth-shell"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="auth-card">
              <div className="auth-card-inner card shadow-lg border-0">
                {/* Close */}
                <button
                  type="button"
                  className="auth-close-btn"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="card-body p-3 p-sm-4">
                  {/* Header */}
                  <div className="text-center mb-3">
                    <motion.div
                      className="auth-logo-pill mb-2"
                      key={mode}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {iconForMode}
                    </motion.div>
                    <h5 className="mb-1 auth-title">{headerTitle}</h5>
                    <p className="mb-0 text-muted small auth-subtitle">
                      {headerSubtitle}
                    </p>
                  </div>

                  {/* Tabs */}
                  {showTabs && (
                    <div className="d-flex justify-content-center">
                      <div className="auth-tabs mb-3">
                        <button
                          type="button"
                          className={
                            "auth-tab-btn " +
                            (mode === MODES.LOGIN ? "active" : "")
                          }
                          onClick={() => {
                            setMode(MODES.LOGIN);
                            resetForgotFlow();
                          }}
                        >
                          Login
                        </button>
                        <button
                          type="button"
                          className={
                            "auth-tab-btn " +
                            (mode === MODES.REGISTER ? "active" : "")
                          }
                          onClick={() => {
                            setMode(MODES.REGISTER);
                            resetForgotFlow();
                          }}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Forms with subtle animated swap */}
                  <div className="auth-form-wrapper">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={formKey}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                      >
                        {mode === MODES.LOGIN && renderLoginForm()}
                        {mode === MODES.REGISTER && renderRegisterForm()}
                        {mode === MODES.FORGOT && renderForgotForm()}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

AuthModal.MODES = MODES;

