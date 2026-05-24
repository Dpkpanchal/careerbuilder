import React, { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePage } from '@inertiajs/react';

const REASONS = [
  "Spam or misleading",
  "Abusive or harmful content",
  "Incorrect or unsafe guidance",
  "Other",
];

export default function ReportDialog({
  isOpen,
  onClose,
  onConfirm,
  targetLabel,
  questionId,
  question,
  targetType = "content",
}) {
  const [selectedReason, setSelectedReason] = useState("");
  const [details, setDetails] = useState("");
  const [step, setStep] = useState("form"); // "form" | "success" | "error"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  
  const { auth } = usePage().props;
  const isLoggedIn = auth?.user;

  useEffect(() => {
    if (isOpen) {
      setSelectedReason("");
      setDetails("");
      setStep("form");
      setError("");
      setIsSubmitting(false);
    }
  }, [isOpen, questionId]);
  
  if (!isOpen) return null;

  const getTitle = () => {
    if (targetLabel) return `Report ${targetLabel}`;
    return "Report Content";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      setError("You must be logged in to report content.");
      return;
    }
    
    const reason = selectedReason || (details.trim() ? "Other" : "");
    if (!reason) {
      setError("Please select a reason or provide details.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Use regular fetch instead of Inertia router.post
      // because the backend returns plain JSON
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      // Determine endpoint
      //alert(targetType)
      let endpoint;
      switch(targetType) {
        case 'question':
          endpoint = `/questions/${questionId}/report`;
          break;
        case 'answer':
          endpoint = `/questions/${questionId}/report`;
          break;
        case 'reply':
          endpoint = `/questions/${questionId}/report`;
          break;
        default:
          endpoint = `/reports`;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken || '',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
          reason,
          details: details.trim(),
          target_type: targetType,
          target_id: questionId
        }),
        credentials: 'include', // Important for session cookies
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 419) {
          setError("Session expired. Please refresh the page and try again.");
        } else {
          setError(result.message || result.error || "Failed to submit report.");
        }
        return;
      }

      // Success! Call the parent component's onConfirm
      onConfirm?.({
        reason,
        details: details.trim(),
        targetType,
        targetId: questionId,
        questionTitle: question
      });

      setStep("success");
      
    } catch (err) {
      console.error('Report error:', err);
      setError(err.message || "Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAfterSuccess = () => {
    setStep("form");
    onClose();
  };

  return (
    <div
      className="forum-report-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-dialog-title"
      onClick={onClose}
    >
      <div
        className="forum-report-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          className="btn btn-sm btn-light forum-report-close-btn"
          onClick={onClose}
          aria-label="Close report dialog"
          disabled={isSubmitting}
        >
          <X size={16} />
        </button>

        <AnimatePresence mode="wait">
          {step === "form" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <h2 id="report-dialog-title" className="forum-report-title">
                {getTitle()}
              </h2>
              
              <p className="forum-report-subtitle">
                Let us know what is wrong. Our team will review reports and
                take appropriate action.
              </p>
              <hr />

              {error && (
                <div className="alert alert-danger alert-sm mb-3 py-1">
                  <div className="small">{error}</div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <fieldset className="forum-report-group" disabled={isSubmitting}>
                  <legend className="forum-report-group-label">
                    Reason for reporting
                  </legend>
                  {REASONS.map((reason) => (
                    <label
                      key={reason}
                      className="forum-report-radio-label"
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={reason}
                        checked={selectedReason === reason}
                        onChange={() => {
                          setSelectedReason(reason);
                          setError("");
                        }}
                        disabled={isSubmitting}
                      />
                      <span>{reason}</span>
                    </label>
                  ))}
                </fieldset>

                <div className="mb-2">
                  <label
                    htmlFor="report-details"
                    className="forum-report-textarea-label small mb-1"
                  >
                    Additional details (optional)
                  </label>
                  <textarea
                    id="report-details"
                    name="details"
                    className="form-control forum-report-textarea"
                    rows={3}
                    placeholder="Briefly describe the issue (language used, context, etc.)"
                    value={details}
                    onChange={(e) => {
                      setDetails(e.target.value);
                      setError("");
                    }}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="d-flex justify-content-end gap-2 mt-3">
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={onClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger btn-sm"
                    disabled={(!selectedReason && !details.trim()) || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      "Confirm report"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-center"
            >
              <motion.div
                className="forum-report-success-icon-wrapper"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <motion.div
                  className="forum-report-success-icon-circle"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  <Check size={28} />
                </motion.div>
              </motion.div>
              <h3 className="forum-report-success-title">
                Report submitted
              </h3>
              <p className="forum-report-success-text">
                Thank you for helping us keep this community safe and useful
                for everyone.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-sm mt-1"
                onClick={handleCloseAfterSuccess}
              >
                Done
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}