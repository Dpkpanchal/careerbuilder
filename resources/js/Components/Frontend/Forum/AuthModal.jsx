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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, usePage } from "@inertiajs/react";



const MODES = {
  LOGIN: "login",
  REGISTER: "register",
  FORGOT: "forgot",
};

const FORGOT_STEPS = {
  EMAIL: "email",
  RESET: "reset",
};

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = MODES.LOGIN,
}) {
  const [mode, setMode] = useState(initialMode);

  // Login form
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  const loginForm = useForm({
  email: "",
  password: "",
  remember: false,
});

const { flash } = usePage().props;





  // Register form
  // const [regFirstName, setRegFirstName] = useState("");
  // const [regLastName, setRegLastName] = useState("");
  // const [regType, setRegType] = useState("student");
  // const [regEmail, setRegEmail] = useState("");
  // const [regPassword, setRegPassword] = useState("");
  // const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regError, setRegError] = useState("");


  const registerForm = useForm({
    first_name: "",
    last_name: "",
    role: "student",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const forgotEmailForm = useForm({
    email: "",
  });

  const forgotResetForm = useForm({
    email: "",
    password: "",
    password_confirmation: "",
  });




  // Forgot flow
  const [forgotStep, setForgotStep] = useState(FORGOT_STEPS.EMAIL);
  // const [forgotEmail, setForgotEmail] = useState("");
  // const [resetPassword, setResetPassword] = useState("");
  // const [resetConfirmPassword, setResetConfirmPassword] = useState("");
  // const [forgotError, setForgotError] = useState("");
  const [forgotInfo, setForgotInfo] = useState("");

  const [showSuccess, setShowSuccess] = useState(true);

  // Reset mode when opened
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setRegError("");
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


  useEffect(() => {
  if (flash.success) {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000); // 3 sec
  }
}, [flash.success]);

  if (!isOpen) return null;

const resetForgotFlow = () => {
  setForgotStep(FORGOT_STEPS.EMAIL);
  setForgotInfo("");
  forgotEmailForm.reset();
  forgotResetForm.reset();
};


const handleLoginSubmit = (e) => {
  e.preventDefault();

  loginForm.post(route("login"), {
    onSuccess: () => {
      // close only if no errors
      if (Object.keys(loginForm.errors).length === 0) {
        onClose();
      }
    },
  });
};

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    registerForm.post(route("register"), {
     onSuccess: () => {
        registerForm.reset();   // ✅ reset all fields
      },
    });
  };




  // Step 1: verify email (mock)
  // const handleForgotEmailSubmit = (e) => {
  //   e.preventDefault();
  //   setForgotError("");
  //   setForgotInfo("");

  //   if (!forgotEmail.trim()) {
  //     setForgotError("Please enter your registered email address.");
  //     return;
  //   }

  //   // Here you would call your API to verify email.
  //   // For now we assume it's valid.
  //   setForgotInfo("Email verified. Please enter your new password.");
  //   setForgotStep(FORGOT_STEPS.RESET);
  // };


const handleForgotEmailSubmit = (e) => {
  e.preventDefault();

  forgotEmailForm.post(route("verify.email"), {
    preserveScroll: true,
    onSuccess: () => {
      // pass verified email to reset form
      forgotResetForm.setData("email", forgotEmailForm.data.email);
      setForgotStep(FORGOT_STEPS.RESET);
    },
  });
};





  // Step 2: set new password
  // const handleForgotResetSubmit = (e) => {
  //   e.preventDefault();
  //   setForgotError("");
  //   setForgotInfo("");

  //   if (resetPassword.length < 6) {
  //     setForgotError("Password should be at least 6 characters.");
  //     return;
  //   }

  //   if (resetPassword !== resetConfirmPassword) {
  //     setForgotError("Passwords do not match.");
  //     return;
  //   }

  //   // TODO: call API to actually reset password
  //   console.log("Reset password:", {
  //     email: forgotEmail,
  //     newPassword: resetPassword,
  //   });

  //   setForgotInfo("Your password has been updated. You can now sign in.");
  //   // Optionally auto-switch back to login after a short delay
  //   setTimeout(() => {
  //     setMode(MODES.LOGIN);
  //     resetForgotFlow();
  //   }, 1500);
  // };


 const handleForgotResetSubmit = (e) => {
  e.preventDefault();

  forgotResetForm.post(route("password.reset.direct"), {
    preserveScroll: true,
    onSuccess: () => {
      setForgotInfo("Password updated successfully");

      setTimeout(() => {
        setMode(MODES.LOGIN);
        resetForgotFlow();
        forgotResetForm.reset();
      }, 1500);
    },
  });
};




  const headerTitle =
    mode === MODES.LOGIN
      ? "Sign in to your account"
      : mode === MODES.REGISTER
      ? "Create your account"
      : forgotStep === FORGOT_STEPS.EMAIL
      ? "Reset your password"
      : "Set a new password";

  const headerSubtitle =
    mode === MODES.LOGIN
      ? "Access your questions, replies, and saved preferences."
      : mode === MODES.REGISTER
      ? "It takes less than a minute. Join as a student, parent, or teacher."
      : forgotStep === FORGOT_STEPS.EMAIL
      ? "Enter your registered email address to verify your account."
      : "Choose a strong password that you haven't used before.";

  const showTabs = mode === MODES.LOGIN || mode === MODES.REGISTER;

  // --- Forms ---

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
              onChange={(e) =>
                registerForm.setData("first_name", e.target.value)
              }
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
              onChange={(e) =>
                registerForm.setData("last_name", e.target.value)
              }
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
            onChange={(e) =>
              registerForm.setData("role", e.target.value)
            }
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
            onChange={(e) =>
              registerForm.setData("email", e.target.value)
            }
            required
          />
        </div>
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
        onChange={(e) =>
          registerForm.setData("password", e.target.value)
        }
        required
      />
    </div>
  </div>

  <div className="col-12 col-sm-6">
    <label className="auth-label">Confirm password</label>
    <div className="auth-input-group">
      <input
        type="password"
        className="form-control auth-input"
        placeholder="Confirm password"
        value={registerForm.data.password_confirmation}
        onChange={(e) =>
          registerForm.setData(
            "password_confirmation",
            e.target.value
          )
        }
        required
      />
    </div>
  </div>
</div>


      

      {/* {forgotResetForm.errors.password && (
        <div className="alert alert-danger py-1 px-2 mb-2 auth-error">
          {forgotResetForm.errors.password}
        </div>
      )}

      {forgotResetForm.errors.password_confirmation && (
        <div className="alert alert-danger py-1 px-2 mb-2 auth-error">
          {forgotResetForm.errors.password_confirmation}
        </div>
      )} */}

      {/* {forgotResetForm.errors.password && (
        <div className="alert alert-danger py-1 px-2 mb-2 auth-error">
          {forgotResetForm.errors.password}
        </div>
      )}

      {forgotResetForm.errors.password_confirmation && (
        <div className="alert alert-danger py-1 px-2 mb-2 auth-error">
          {forgotResetForm.errors.password_confirmation}
        </div>
      )} */}

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
    </form>
  );



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
                // value={forgotEmail}
                // onChange={(e) => setForgotEmail(e.target.value)}
                onChange={(e) => {
                  forgotEmailForm.setData("email", e.target.value);
                  forgotEmailForm.clearErrors("email");
                }}
                required
              />
            </div>
          </div>

          {forgotEmailForm.errors.email && (
            <div className="alert alert-danger py-1 px-2 mb-2 auth-error">
              {forgotEmailForm.errors.email}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary  auth-primary-btn"
          >
            Verify email
          </button>

          <button
            type="button"
            className="btn btn-link  mt-2 auth-link"
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

    // RESET STEP
    return (
      <form onSubmit={handleForgotResetSubmit} className="auth-form">
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
          className="btn btn-primary  auth-primary-btn"
        >
          Update password
        </button>

        <button
          type="button"
          className="btn btn-link  mt-2 auth-link"
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

                  {mode === MODES.REGISTER && flash.success && (
                    <div className="alert alert-success py-2 px-2 mb-2">
                      {flash.success}
                    </div>
                  )}





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
