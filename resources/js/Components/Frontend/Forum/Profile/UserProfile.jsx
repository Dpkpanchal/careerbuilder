import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Mail,
  UserCircle2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "@inertiajs/react";

const TABS = {
  PROFILE: "profile",
  PASSWORD: "password",
};

export default function UserProfile({ user }) {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const roleRef = useRef(null);
  const emailRef = useRef(null);

  // Track which fields are currently editable
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const [isEditingRole, setIsEditingRole] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  // Global "dirty" flag for profile tab
  const [hasProfileChanges, setHasProfileChanges] = useState(false);

  const [activeTab, setActiveTab] = useState(TABS.PROFILE);

  // Info messages
  const [profileInfo, setProfileInfo] = useState("");
  const [passwordInfo, setPasswordInfo] = useState("");

  // Confirmation dialog state
  const [confirmState, setConfirmState] = useState({
    open: false,
    title: "",
    message: "",
    onConfirm: null,
  });

  // Initialize forms with user data
  const profileForm = useForm({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "student",
    avatar: null,
  });

  const passwordForm = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  // For avatar preview
  const [avatarPreview, setAvatarPreview] = useState(null);
  const fileInputRef = useRef(null);

  // Check for changes
  useEffect(() => {
    const hasChanges = 
      profileForm.isDirty || 
      avatarPreview !== null;
    
    setHasProfileChanges(hasChanges);
  }, [profileForm.isDirty, avatarPreview]);

  const openConfirm = (title, message, onConfirm) => {
    setConfirmState({
      open: true,
      title,
      message,
      onConfirm,
    });
  };

  const closeConfirm = () => {
    setConfirmState((prev) => ({ ...prev, open: false }));
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Update form data with the file
    profileForm.setData('avatar', file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatarPreview(event.target.result);
    };
    reader.readAsDataURL(file);
  };

 const handleProfileUpdate = () => {
  openConfirm(
    "Update profile?",
    "Do you want to save these changes to your profile?",
    () => {
      const formData = new FormData();

      Object.keys(profileForm.data).forEach((key) => {
        if (
          profileForm.data[key] !== null &&
          profileForm.data[key] !== undefined
        ) {
          formData.append(key, profileForm.data[key]);
        }
      });

      profileForm.post("/profile", {
        data: formData,
        forceFormData: true, // ⭐ KEY LINE
        preserveScroll: true,

        onSuccess: () => {
          setHasProfileChanges(false);
          setProfileInfo("Your profile has been updated successfully.");
          setAvatarPreview(null);

          setIsEditingFirstName(false);
          setIsEditingLastName(false);
          setIsEditingRole(false);
          setIsEditingEmail(false);

          closeConfirm();
        },

        onError: () => {
          closeConfirm();
        },
      });
    }
  );
};


  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    passwordForm.clearErrors();

    openConfirm(
      "Change password?",
      "Are you sure you want to update your password?",
      () => {
        passwordForm.put("/profile/password", {
          preserveScroll: true,
          onSuccess: () => {
            setPasswordInfo("Your password has been updated.");
            passwordForm.reset();
            closeConfirm();
          },
          onError: () => {
            closeConfirm();
          },
        });
      }
    );
  };

  // Focus effects for editing
  useEffect(() => {
    if (isEditingFirstName && firstNameRef.current) {
      const len = firstNameRef.current.value.length;
      firstNameRef.current.focus();
      firstNameRef.current.setSelectionRange(len, len);
    }
  }, [isEditingFirstName]);

  useEffect(() => {
    if (isEditingLastName && lastNameRef.current) {
      const len = lastNameRef.current.value.length;
      lastNameRef.current.focus();
      lastNameRef.current.setSelectionRange(len, len);
    }
  }, [isEditingLastName]);

  useEffect(() => {
    if (isEditingEmail && emailRef.current) {
      const len = emailRef.current.value.length;
      emailRef.current.focus();
      emailRef.current.setSelectionRange(len, len);
    }
  }, [isEditingEmail]);

  const tabKey = activeTab;

  return (
    <div className="user-profile-shell">
      <div className="border-0 user-profile-card px-lg-5">
        <div className="p-3 p-sm-4">
          <div className="text-center mb-3">
            <h5 className="mb-1 auth-title">My Profile</h5>
            <p className="mb-0 text-muted small auth-subtitle">
              Manage your personal details and account security.
            </p>
          </div>

          <div className="d-flex justify-content-center mb-3">
            <div className="auth-tabs user-profile-tabs">
              <button
                type="button"
                className={
                  "auth-tab-btn " +
                  (activeTab === TABS.PROFILE ? "active" : "")
                }
                onClick={() => setActiveTab(TABS.PROFILE)}
              >
                <User size={16} className="me-1" />
                Profile
              </button>
              <button
                type="button"
                className={
                  "auth-tab-btn " +
                  (activeTab === TABS.PASSWORD ? "active" : "")
                }
                onClick={() => setActiveTab(TABS.PASSWORD)}
              >
                <Lock size={16} className="me-1" />
                Change Password
              </button>
            </div>
          </div>

          <div className="user-profile-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={tabKey}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {activeTab === TABS.PROFILE && (
                  <>
                    <div className="text-center mb-4">
                      <div className="user-avatar-wrapper position-relative d-inline-block">
                        {avatarPreview ? (
                          <img
                            src={avatarPreview}
                            alt="Profile"
                            className="rounded-circle user-avatar-img"
                          />
                        ) : user?.avatar ? (
                          <img
                            src={user.avatar?.startsWith('http')
                              ? user.avatar
                              : `/storage/${user.avatar}`}
                            alt="Profile"
                            className="rounded-circle user-avatar-img"
                          />
                        ) : (
                          <div className="user-avatar-placeholder rounded-circle d-flex align-items-center justify-content-center">
                            <UserCircle2 size={40} />
                          </div>
                        )}

                        <button
                          type="button"
                          className="btn btn-light btn-sm user-avatar-edit-btn d-flex align-items-center"
                          onClick={handleAvatarClick}
                        >
                          <Edit3 size={14} className="me-1" />
                          Edit
                        </button>

                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInputRef}
                          className="d-none"
                          onChange={handleAvatarChange}
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-2">
                      <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <label className="auth-label mb-0">First name</label>
                          <button
                            type="button"
                            className="btn btn-link btn-sm p-0 profile-edit-icon"
                            onClick={() => setIsEditingFirstName(true)}
                            aria-label="Edit first name"
                          >
                            <Edit3 size={15} />
                          </button>
                        </div>
                        <div className="auth-input-group">
                          <span className="auth-input-icon">
                            <User size={16} />
                          </span>
                          <input
                            type="text"
                            className={`form-control auth-input ${isEditingFirstName ? 'editing' : ''}`}
                            value={profileForm.data.name.split(' ')[0] || ''}
                            readOnly={!isEditingFirstName}
                            ref={firstNameRef}
                            onChange={(e) => {
                              const nameParts = profileForm.data.name.split(' ');
                              const lastName = nameParts.slice(1).join(' ') || '';
                              profileForm.setData('name', `${e.target.value} ${lastName}`.trim());
                            }}
                            onBlur={() => setIsEditingFirstName(false)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <label className="auth-label mb-0">Last name</label>
                          <button
                            type="button"
                            className="btn btn-link btn-sm p-0 profile-edit-icon"
                            onClick={() => setIsEditingLastName(true)}
                            aria-label="Edit last name"
                          >
                            <Edit3 size={15} />
                          </button>
                        </div>
                        <div className="auth-input-group">
                          <input
                            type="text"
                            className={`form-control auth-input ${isEditingLastName ? 'editing' : ''}`}
                            value={profileForm.data.name.split(' ').slice(1).join(' ') || ''}
                            readOnly={!isEditingLastName}
                            ref={lastNameRef}
                            onChange={(e) => {
                              const firstName = profileForm.data.name.split(' ')[0] || '';
                              profileForm.setData('name', `${firstName} ${e.target.value}`.trim());
                            }}
                            onBlur={() => setIsEditingLastName(false)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <label className="auth-label mb-0">I am a</label>
                        <button
                          type="button"
                          className="btn btn-link btn-sm p-0 profile-edit-icon"
                          onClick={() => setIsEditingRole(true)}
                          aria-label="Edit role"
                        >
                          <Edit3 size={15} />
                        </button>
                      </div>
                      <div className="auth-input-group">
                        <span className="auth-input-icon">
                          <User size={16} />
                        </span>
                        {/* <select
                          className={`form-select auth-input auth-select ${isEditingRole ? 'editing' : ''}`}
                          value={profileForm.data.role}
                          disabled={!isEditingRole}
                          ref={roleRef}
                          onChange={(e) => profileForm.setData('role', e.target.value)}
                          onBlur={() => setIsEditingRole(false)}
                        >
                          <option value="student">Student</option>
                          <option value="parent">Parent</option>
                          <option value="teacher">Teacher</option>
                          <option value="super_admin">Super Admin</option>
                        </select> */}
                        <select
                          className="form-select auth-input auth-select"
                          value={profileForm.data.role}
                          disabled
                        >
                          <option value="student">Student</option>
                          <option value="parent">Parent</option>
                          <option value="teacher">Teacher</option>
                          <option value="counselor">Counselor</option>
                          <option value="super_admin">Super Admin</option>
                        </select>


                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <label className="auth-label mb-0">Email</label>
                        <button
                          type="button"
                          className="btn btn-link btn-sm p-0 profile-edit-icon"
                          onClick={() => setIsEditingEmail(true)}
                        >
                          <Edit3 size={15} />
                        </button>
                      </div>
                      <div className="auth-input-group">
                        <span className="auth-input-icon">
                          <Mail size={16} />
                        </span>
                        <input
                          type={isEditingEmail ? "text" : "email"}
                          className={`form-control auth-input ${isEditingEmail ? 'editing' : ''}`}
                          value={profileForm.data.email}
                          readOnly={!isEditingEmail}
                          ref={emailRef}
                          onChange={(e) => profileForm.setData('email', e.target.value)}
                          onBlur={() => setIsEditingEmail(false)}
                        />
                      </div>
                    </div>

                    {profileForm.errors && Object.keys(profileForm.errors).length > 0 && (
                      <div className="alert alert-danger py-1 px-2 mb-2 auth-error d-inline-flex align-items-center">
                        <AlertCircle size={16} className="me-2" />
                        <span>{Object.values(profileForm.errors).join(', ')}</span>
                      </div>
                    )}

                    {profileInfo && (
                      <div className="alert alert-success py-1 px-2 mb-2 auth-error d-inline-flex align-items-center">
                        <CheckCircle2 size={16} className="me-2" />
                        <span>{profileInfo}</span>
                      </div>
                    )}

                    {hasProfileChanges && (
                      <div className="mt-4">
                        <button
                          type="button"
                          className="btn btn-primary auth-primary-btn"
                          onClick={handleProfileUpdate}
                          disabled={profileForm.processing}
                        >
                          {profileForm.processing ? "Updating..." : "Update"}
                        </button>
                      </div>
                    )}
                  </>
                )}

                {activeTab === TABS.PASSWORD && (
                  <>
                    <form onSubmit={handlePasswordSubmit} className="auth-form">
                      <div className="mb-2">
                        <label className="auth-label">Current password</label>
                        <div className="auth-input-group">
                          <span className="auth-input-icon">
                            <ShieldCheck size={16} />
                          </span>
                          <input
                            type="password"
                            className="form-control auth-input"
                            value={passwordForm.data.current_password}
                            onChange={(e) =>
                              passwordForm.setData("current_password", e.target.value)
                            }
                            placeholder="Enter current password"
                          />
                        </div>
                      </div>

                      <div className="row g-2 mb-2">
                        <div className="col-12 col-md-6">
                          <label className="auth-label">New password</label>
                          <div className="auth-input-group">
                            <span className="auth-input-icon">
                              <Lock size={16} />
                            </span>
                            <input
                              type="password"
                              className="form-control auth-input"
                              value={passwordForm.data.password}
                              onChange={(e) =>
                                passwordForm.setData("password", e.target.value)
                              }
                              placeholder="Enter new password"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="auth-label">
                            Confirm new password
                          </label>
                          <div className="auth-input-group">
                            <input
                              type="password"
                              className="form-control auth-input"
                              value={passwordForm.data.password_confirmation}
                              onChange={(e) =>
                                passwordForm.setData("password_confirmation", e.target.value)
                              }
                              placeholder="Confirm new password"
                            />
                          </div>
                        </div>
                      </div>

                      {passwordForm.errors && Object.keys(passwordForm.errors).length > 0 && (
                        <div className="alert alert-danger py-1 px-2 mb-2 auth-error d-inline-flex align-items-center">
                          <AlertCircle size={16} className="me-2" />
                          <span>
                            {Object.values(passwordForm.errors).map((error, index) => (
                              <React.Fragment key={index}>
                                {error}
                                {index < Object.values(passwordForm.errors).length - 1 ? ' ' : ''}
                              </React.Fragment>
                            ))}
                          </span>
                        </div>
                      )}

                      {passwordInfo && (
                        <div className="alert alert-success py-1 px-2 mb-2 auth-error d-inline-flex align-items-center">
                          <CheckCircle2 size={16} className="me-2" />
                          <span>{passwordInfo}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn btn-primary auth-primary-btn mt-4"
                        disabled={passwordForm.processing}
                      >
                        {passwordForm.processing ? "Updating..." : "Update password"}
                      </button>

                      <small className="text-muted d-block mt-2">
                        Tip: Use at least 6 characters with a mix of letters,
                        numbers, and symbols.
                      </small>
                    </form>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {confirmState.open && (
          <motion.div
            className="auth-backdrop user-confirm-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeConfirm}
          >
            <motion.div
              className="auth-shell user-confirm-shell"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="auth-card-inner card shadow-lg border-0">
                <div className="card-body p-3 p-sm-4">
                  <div className="d-flex align-items-start mb-2">
                    <div className="me-2">
                      <div className="auth-logo-pill">
                        <ShieldCheck size={18} />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-1">{confirmState.title}</h6>
                      <p className="mb-0 small text-muted">
                        {confirmState.message}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-2 mt-3">
                    <button
                      type="button"
                      className="btn btn-light auth-primary-btn"
                      onClick={closeConfirm}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary auth-primary-btn"
                      onClick={() => {
                        confirmState.onConfirm?.();
                      }}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}