import React, { useState, useRef, useEffect } from "react";
import { Tag, Check } from "lucide-react";
import { useForm, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react'; // Import separately
import AuthModal from "@/Components/Frontend/Forum/AuthModal"; 

const TITLE_MAX = 80;
const DESC_MAX = 300;

export default function AskQuestionBox({ onAddThread, forumCategory }) {
  const [authOpen, setAuthOpen] = useState(false);
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    description: '',
    category_ids: [] // This should match your backend expectation
  });
  
  // Fixed: Properly get user auth data
  const { props } = usePage();
  const { auth } = props;
  
  const getCategoryOptions = () => {
    if (!forumCategory || !Array.isArray(forumCategory)) return [];
    return forumCategory.map(category => ({
      value: category.name, // Use ID instead of name for backend processing
      label: category.name
    }));
  };

  const CATEGORY_OPTIONS = getCategoryOptions();
  
  const [categories, setCategories] = useState([]);
  const [tempCategories, setTempCategories] = useState([]);
  const [catOpen, setCatOpen] = useState(false);
  const [catSearch, setCatSearch] = useState("");
  const [catError, setCatError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const catWrapperRef = useRef(null);

  const titleCount = data.title.length;
  const descCount = data.description.length;

  const isValid =
    categories.length >= 1 &&
    categories.length <= 3 &&
    data.title.trim().length > 0 &&
    data.description.trim().length > 0 &&
    titleCount <= TITLE_MAX &&
    descCount <= DESC_MAX;

  // Close dropdown on outside click
  useEffect(() => {
    if (!catOpen) return;

    const handleClickOutside = (e) => {
      if (catWrapperRef.current && !catWrapperRef.current.contains(e.target)) {
        setCatOpen(false);
        setTempCategories(categories);
        setCatError("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [catOpen, categories]);

  const handlePost = (e) => {
  e.preventDefault();

  // Check if user is authenticated
  if (!auth?.user) {
    setAuthOpen(true);
    return;
  }

  if (!isValid || processing) return;

  setSubmitError("");

  const formDataToSend = {
    title: data.title.trim(),
    description: data.description.trim(),
    category_ids: categories.map((c) => c.value)
  };

  // Call the parent callback FIRST with optimistic data
  if (onAddThread) {
    // Get category names from the forumCategory prop
    const categoryNames = categories.map(cat => {
      const foundCategory = forumCategory.find(fc => fc.id === cat.value);
      return foundCategory ? foundCategory.name : cat.label;
    });

    const optimisticPayload = {
      title: data.title.trim(),
      description: data.description.trim(),
      categoryLabels: categoryNames,
      categories: categories.map(cat => ({
        id: cat.value,
        name: cat.label
      }))
    };
    
    onAddThread(optimisticPayload);
  }

  // THEN send to server
  router.post('/save/forum/questions', formDataToSend, {
    forceFormData: true,
    preserveScroll: true,
    onSuccess: () => {
      // Clear form after successful submission
      reset();
      setCategories([]);
      setTempCategories([]);
      setCatSearch("");
      setCatError("");
      setCatOpen(false);
      setSubmitError("");
    },
    onError: (errors) => {
      console.error('Errors:', errors);
      setSubmitError(Object.values(errors).join(', '));
    }
  });
};

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= TITLE_MAX) {
      setData('title', value);
    }
  };

  const handleDescChange = (e) => {
    const value = e.target.value;
    if (value.length <= DESC_MAX) {
      setData('description', value);
    }
  };

  const handleToggleDropdown = () => {
    setCatOpen((open) => {
      const next = !open;
      if (next) {
        setTempCategories(categories);
        setCatSearch("");
        setCatError("");
      }
      return next;
    });
  };

  const handleToggleCategory = (opt) => {
    const exists = tempCategories.some((c) => c.value === opt.value);

    if (exists) {
      setTempCategories((prev) => prev.filter((c) => c.value !== opt.value));
      setCatError("");
    } else {
      if (tempCategories.length >= 3) {
        setCatError("You can select minimum 1 and maximum 3 categories.");
        return;
      }
      setTempCategories((prev) => [...prev, opt]);
      setCatError("");
    }
  };

  const handleApplyCategories = () => {
    if (tempCategories.length < 1 || tempCategories.length > 3) {
      setCatError("You can select minimum 1 and maximum 3 categories.");
      return;
    }
    setCategories(tempCategories);
    // Update the form data with category IDs
    setData('category_ids', tempCategories.map(c => c.value));
    setCatOpen(false);
    setCatError("");
  };

  const filteredOptions = CATEGORY_OPTIONS.filter((opt) =>
    opt.label.toLowerCase().includes(catSearch.toLowerCase())
  );

  const selectedLabels =
    categories.length === 0
      ? "Add category (min 1, max 3)"
      : categories.map((c) => c.label).join(", ");

  if (!forumCategory) {
    return (
      <div className="card border-0 shadow-0 mb-1 ask-box nitLightGradient">
        <div className="card-body p-4 text-center">
          <div className="spinner-border spinner-border-sm text-primary" role="status">
            <span className="visually-hidden">Loading categories...</span>
          </div>
          <span className="ms-2">Loading categories...</span>
        </div>
      </div>
    );
  }

  if (CATEGORY_OPTIONS.length === 0) {
    return (
      <div className="card border-0 shadow-0 mb-1 ask-box nitLightGradient">
        <div className="card-body p-4 text-center">
          <span className="text-danger">No categories available.</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card border-0 shadow-0 mb-1 ask-box nitLightGradient">
        <div className="card-body p-0">
          <form onSubmit={handlePost}>
            {/* Title */}
            <div className="mb-2">
              <div className="position-relative">
                <input
                  type="text"
                  className={`form-control ask-input ${errors.title ? 'is-invalid' : ''}`}
                  placeholder="Type your question title..."
                  value={data.title}
                  onChange={handleTitleChange}
                />
                {errors.title && (
                  <div className="invalid-feedback d-block">{errors.title}</div>
                )}
                <small
                  className={
                    "ask-char-counter " +
                    (titleCount > TITLE_MAX * 0.9 ? "text-danger" : "text-muted")
                  }
                >
                  {titleCount}/{TITLE_MAX}
                </small>
              </div>
            </div>

            {/* Description */}
            <div className="mb-2">
              <div className="position-relative">
                <textarea
                  rows={2}
                  className={`form-control ask-textarea ${errors.description ? 'is-invalid' : ''}`}
                  placeholder="Add a short description or context for your question..."
                  value={data.description}
                  onChange={handleDescChange}
                />
                {errors.description && (
                  <div className="invalid-feedback d-block">{errors.description}</div>
                )}
                <small
                  className={
                    "ask-char-counter " +
                    (descCount > DESC_MAX * 0.9 ? "text-danger" : "text-muted")
                  }
                >
                  {descCount}/{DESC_MAX}
                </small>
              </div>
            </div>

            {/* Form validation errors */}
            {errors.category_ids && (
              <div className="alert alert-danger py-1 mb-2">
                <small>{errors.category_ids}</small>
              </div>
            )}

            {/* Submit error message */}
            {submitError && (
              <div className="alert alert-danger py-1 mb-2">
                <small>{submitError}</small>
              </div>
            )}

            {/* Footer: category selector and Post button */}
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div
                className="d-flex align-items-center gap-2 position-relative ask-cat-selector"
                ref={catWrapperRef}
              >
                <button
                  type="button"
                  className="btn btn-light rounded-circle ask-cat-icon-btn"
                  onClick={handleToggleDropdown}
                >
                  <Tag size={16} />
                </button>

                <span className="text-muted ask-cat-selected text-truncate">
                  {selectedLabels}
                </span>

                {catOpen && (
                  <div className="ask-cat-dropdown card shadow-sm p-0">
                    <div className="p-2 border-bottom">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search categories..."
                        value={catSearch}
                        onChange={(e) => setCatSearch(e.target.value)}
                      />
                    </div>

                    <div className="ask-cat-options">
                      {filteredOptions.map((opt) => {
                        const selected = tempCategories.some(
                          (c) => c.value === opt.value
                        );
                        return (
                          <button
                            type="button"
                            key={opt.value}
                            className="w-100 text-start px-2 py-1 d-flex align-items-center ask-cat-option-btn"
                            onClick={() => handleToggleCategory(opt)}
                          >
                            <span className="me-0 ask-cat-check">
                              {selected ? <Check size={14} /> : null}
                            </span>
                            <span className="small">{opt.label}</span>
                          </button>
                        );
                      })}

                      {filteredOptions.length === 0 && (
                        <div className="px-2 py-2 small text-muted">
                          No matches found.
                        </div>
                      )}
                    </div>

                    <div className="px-2 py-1 border-top d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        {tempCategories.length}/3 selected
                      </small>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm px-3 py-1"
                        onClick={handleApplyCategories}
                      >
                        Apply
                      </button>
                    </div>

                    {catError && (
                      <div className="px-2 pb-2 small text-danger">
                        {catError}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Conditional button rendering */}
              <button
                type="submit"
                className="btn btn-primary btn-sm d-flex align-items-center px-3 post-btn"
                disabled={!isValid || processing}
              >
                {processing ? "Posting..." : "Post"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        initialMode="login"
      />
    </>
  );
}