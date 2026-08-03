import React, { useMemo, useRef, useState } from "react";
import { Head, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout"; // adjust to your actual admin layout path
import {
  Plus,
  Trash2,
  Save,
  ExternalLink,
  Sparkles,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  Building2,
  ShieldCheck,
  Stethoscope,
  FileText,
  BadgeCheck,
  Activity,
  Hospital,
  Syringe,
  Pill,
  Leaf,
  HelpCircle,
  CheckCircle2,
  CalendarDays,
  Target,
  MapPin,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

/* =================================================================
   Admin / LandingPages / Edit.jsx
   Tabbed, schema-driven editor for the `content` JSON column of
   landing_page_contents. Works for any slug (medical, engineering,
   commerce, law, ...) since the content shape is shared.
   ================================================================= */

// ---------------------------------------------------------------
// Icon registry — used both in <select> dropdowns and as live
// previews so the admin actually sees what they're picking.
// ---------------------------------------------------------------
const ICONS = {
  Stethoscope,
  HeartPulse,
  GraduationCap,
  FileText,
  Building2,
  BadgeCheck,
  Activity,
  Hospital,
  Syringe,
  Pill,
  Leaf,
  ClipboardList,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  CalendarDays,
  Target,
  MapPin,
};
const ICON_OPTIONS = Object.keys(ICONS);

const IconPreview = ({ name, size = 16 }) => {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} />;
};

// ---------------------------------------------------------------
// Default skeleton — used when a slug has never been saved before
// ---------------------------------------------------------------
const defaultContent = () => ({
  hero: {
    title: "",
    subtitle: "",
    description: "",
    description2: "",
    heroStats: [{ label: "", value: "", icon: "ClipboardList" }],
    quickLinks: [{ icon: "GraduationCap", title: "", desc: "", href: "" }],
  },
  primaryExam: {
    heading: "",
    intro: "",
    quickFacts: [{ label: "", value: "" }],
    purpose: "",
    eligibility: [{ category: "", details: "" }],
    applyMode: "",
    officialWebsite: "",
    unlocks: [""],
    whoShouldFocusIntro: "",
    whoShouldFocusPoints: [""],
    prepPlan: [{ title: "", description: "" }],
  },
  pathways: {
    after10: {
      title: "After Class 10th",
      description: "",
      points: [""],
      links: [{ label: "", meta: "", href: "" }],
    },
    after12: {
      title: "After Class 12th",
      description: "",
      points: [""],
      links: [{ label: "", meta: "", href: "" }],
    },
  },
  courseBranches: {
    intro: "",
    cards: [
      {
        icon: "Hospital",
        title: "",
        description: "",
        points: [""],
        links: [{ label: "", href: "" }],
      },
    ],
  },
  colleges: {
    intro: "",
    listings: [{ label: "", href: "", meta: "" }],
    checklist: [""],
  },
});

const deepMerge = (base, incoming) => {
  if (!incoming) return base;
  const out = { ...base };
  for (const key of Object.keys(base)) {
    const b = base[key];
    const i = incoming[key];
    if (Array.isArray(b)) {
      out[key] = Array.isArray(i) && i.length ? i : b;
    } else if (b && typeof b === "object") {
      out[key] = deepMerge(b, i);
    } else {
      out[key] = i !== undefined ? i : b;
    }
  }
  return out;
};

// ---------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------

const Field = ({ label, children, hint, required }) => (
  <div className="mb-3">
    <label className="form-label small fw-semibold text-uppercase text-muted mb-1">
      {label}
      {required ? <span className="text-danger"> *</span> : null}
    </label>
    {children}
    {hint ? <div className="form-text">{hint}</div> : null}
  </div>
);

const TextInput = (props) => (
  <input type="text" className="form-control" {...props} />
);

const TextArea = (props) => (
  <textarea className="form-control" rows={props.rows || 3} {...props} />
);

const IconSelect = ({ value, onChange }) => (
  <div className="d-flex align-items-center gap-2">
    <div
      className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
      style={{
        width: 38,
        height: 38,
        background: "rgba(13,110,253,.08)",
        border: "1px solid rgba(13,110,253,.15)",
        color: "#0d6efd",
      }}
    >
      <IconPreview name={value} size={18} />
    </div>
    <select
      className="form-select"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">-- choose icon --</option>
      {ICON_OPTIONS.map((ic) => (
        <option key={ic} value={ic}>
          {ic}
        </option>
      ))}
    </select>
  </div>
);

const SectionIntro = ({ title, subtitle }) => (
  <div className="mb-4">
    <h2 className="h5 fw-bold mb-1">{title}</h2>
    {subtitle ? <div className="text-muted small">{subtitle}</div> : null}
  </div>
);

const SubHeading = ({ children }) => (
  <div
    className="small fw-bold text-uppercase mb-3 pb-2 border-bottom"
    style={{ letterSpacing: ".06em", color: "#495057" }}
  >
    {children}
  </div>
);

// Array of plain strings (bullet points, checklists, etc.)
const StringListEditor = ({ items, onChange, placeholder }) => {
  const list = items && items.length ? items : [""];

  const updateAt = (i, v) => {
    const next = [...list];
    next[i] = v;
    onChange(next);
  };
  const removeAt = (i) => {
    const next = list.filter((_, idx) => idx !== i);
    onChange(next.length ? next : [""]);
  };
  const add = () => onChange([...list, ""]);

  return (
    <div>
      {list.map((val, i) => (
        <div key={i} className="d-flex align-items-center gap-2 mb-2">
          <span
            className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 small fw-semibold text-muted"
            style={{ width: 24, height: 24, background: "#f1f3f5" }}
          >
            {i + 1}
          </span>
          <input
            type="text"
            className="form-control"
            value={val}
            placeholder={placeholder}
            onChange={(e) => updateAt(i, e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-danger btn-sm flex-shrink-0"
            onClick={() => removeAt(i)}
            title="Remove"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1"
        onClick={add}
      >
        <Plus size={14} /> Add item
      </button>
    </div>
  );
};

// Array of objects, driven by a `fields` schema.
// fields: [{ key, label, type: 'text' | 'textarea' | 'icon' }]
const ObjectListEditor = ({ items, fields, onChange, emptyItem, itemName = "Item" }) => {
  const list = items && items.length ? items : [emptyItem];

  const updateAt = (i, key, value) => {
    const next = list.map((it, idx) => (idx === i ? { ...it, [key]: value } : it));
    onChange(next);
  };
  const removeAt = (i) => {
    const next = list.filter((_, idx) => idx !== i);
    onChange(next.length ? next : [emptyItem]);
  };
  const add = () => onChange([...list, emptyItem]);

  return (
    <div>
      {list.map((item, i) => (
        <div key={i} className="border rounded-3 p-3 mb-3 bg-light bg-opacity-50 position-relative">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="badge bg-white border text-muted fw-semibold">
              {itemName} #{i + 1}
            </span>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeAt(i)}
              title="Remove item"
            >
              <Trash2 size={14} />
            </button>
          </div>

          <div className="row g-3">
            {fields.map((f) => (
              <div key={f.key} className={f.type === "textarea" ? "col-12" : "col-md-6"}>
                <label className="form-label small fw-semibold text-muted mb-1">{f.label}</label>
                {f.type === "textarea" ? (
                  <TextArea value={item[f.key] || ""} onChange={(e) => updateAt(i, f.key, e.target.value)} />
                ) : f.type === "icon" ? (
                  <IconSelect value={item[f.key]} onChange={(v) => updateAt(i, f.key, v)} />
                ) : (
                  <TextInput value={item[f.key] || ""} onChange={(e) => updateAt(i, f.key, e.target.value)} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1"
        onClick={add}
      >
        <Plus size={14} /> Add {itemName.toLowerCase()}
      </button>
    </div>
  );
};

// ---------------------------------------------------------------
// Tab configuration
// ---------------------------------------------------------------
const TABS = [
  { key: "hero", label: "Hero Section", icon: Sparkles, hint: "Banner, stats & quick links" },
  { key: "exam", label: "Entrance Exam", icon: ClipboardList, hint: "e.g. NEET details" },
  { key: "pathways", label: "Pathways", icon: GraduationCap, hint: "After 10th / After 12th" },
  { key: "courses", label: "Courses & Branches", icon: HeartPulse, hint: "Course family cards" },
  { key: "colleges", label: "Colleges", icon: Building2, hint: "Listings & checklist" },
  { key: "settings", label: "Publish Settings", icon: ShieldCheck, hint: "Status & preview" },
];

export default function LandingPageEdit({ initialData, pageSlug, pageTitle, pageUrl }) {
  const initialRef = useRef({
    content: deepMerge(defaultContent(), initialData),
    is_active: initialData?.is_active !== undefined ? !!initialData.is_active : true,
  });

  const [content, setContent] = useState(initialRef.current.content);
  const [isActive, setIsActive] = useState(initialRef.current.is_active);
  const [activeTab, setActiveTab] = useState("hero");
  const [processing, setProcessing] = useState(false);
  const [savedAt, setSavedAt] = useState(null);
  const [errors, setErrors] = useState({});

  const isDirty = useMemo(() => {
    return (
      JSON.stringify(content) !== JSON.stringify(initialRef.current.content) ||
      isActive !== initialRef.current.is_active
    );
  }, [content, isActive]);

  const set = (path, value) => {
    setContent((prev) => {
      const next = structuredClone(prev);
      const keys = path.split(".");
      let obj = next;
      for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
      obj[keys[keys.length - 1]] = value;
      return next;
    });
  };
  const get = (path) => path.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), content);

  const handleSubmit = (e) => {
    e?.preventDefault();
    setProcessing(true);
    setErrors({});
    router.put(
      route("admin.landing-pages.update", pageSlug),
      { content, is_active: isActive },
      {
        preserveScroll: true,
        onSuccess: () => {
          initialRef.current = { content, is_active: isActive };
          setSavedAt(new Date().toLocaleTimeString());
        },
        onError: (errs) => setErrors(errs),
        onFinish: () => setProcessing(false),
      }
    );
  };

  return (
    <AdminLayout>
      <Head title={`Edit Landing Page — ${pageTitle}`} />

      {/* ===== Sticky premium header ===== */}
      <div
        className="sticky-top mb-4"
        style={{
          top: 0,
          zIndex: 20,
          background: "linear-gradient(135deg, #f8f9ff 0%, #ffffff 60%)",
          borderBottom: "1px solid rgba(0,0,0,.06)",
        }}
      >
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h1 className="h4 fw-bold mb-0">{pageTitle}</h1>
              <span className="badge bg-light text-dark border small">slug: {pageSlug}</span>
              {isDirty ? (
                <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle d-inline-flex align-items-center gap-1">
                  <AlertCircle size={12} /> Unsaved changes
                </span>
              ) : savedAt ? (
                <span className="badge bg-success-subtle text-success-emphasis border border-success-subtle d-inline-flex align-items-center gap-1">
                  <CheckCircle size={12} /> Saved at {savedAt}
                </span>
              ) : null}
            </div>
            <div className="small text-muted">Edit every section of this landing page below.</div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <div className="form-check form-switch mb-0 me-1">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="isActive"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
              <label className="form-check-label small fw-semibold" htmlFor="isActive">
                {isActive ? "Published" : "Draft"}
              </label>
            </div>

            {pageUrl ? (
              <a
                href={pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-1"
              >
                Preview <ExternalLink size={14} />
              </a>
            ) : null}

            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2 px-3"
              disabled={processing || !isDirty}
            >
              <Save size={15} />
              {processing ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>

        {Object.keys(errors).length ? (
          <div className="alert alert-danger py-2 small mb-3">
            Please fix the highlighted errors and try saving again.
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="pb-5">
        <div className="row g-4">
          {/* ===== Left tab navigation ===== */}
          <div className="col-lg-3">
            <div className="sticky-top" style={{ top: 90 }}>
              <div className="nav flex-column gap-1">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActiveTab = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`btn text-start d-flex align-items-center gap-3 px-3 py-2 rounded-3 border-0 ${
                        isActiveTab ? "text-white" : "text-dark"
                      }`}
                      style={{
                        background: isActiveTab
                          ? "linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)"
                          : "transparent",
                        transition: "background .15s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActiveTab) e.currentTarget.style.background = "#f1f3f5";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActiveTab) e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <Icon size={18} className="flex-shrink-0" />
                      <span>
                        <span className="d-block fw-semibold small">{tab.label}</span>
                        <span
                          className="d-block"
                          style={{
                            fontSize: 11,
                            opacity: isActiveTab ? 0.85 : 0.6,
                          }}
                        >
                          {tab.hint}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ===== Right content panel ===== */}
          <div className="col-lg-9">
            <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
              {/* ---------------- HERO ---------------- */}
              {activeTab === "hero" && (
                <>
                  <SectionIntro
                    title="Hero Section"
                    subtitle="The top banner visitors see first — title, description, stat cards and the 4 quick-link cards."
                  />

                  <SubHeading>Basic Content</SubHeading>
                  <Field label="Title" required>
                    <TextInput
                      value={get("hero.title")}
                      onChange={(e) => set("hero.title", e.target.value)}
                      placeholder="e.g. Medical & Healthcare Career Guide"
                    />
                  </Field>
                  <Field label="Subtitle">
                    <TextInput
                      value={get("hero.subtitle")}
                      onChange={(e) => set("hero.subtitle", e.target.value)}
                      placeholder="e.g. Courses, Entrance Exams, Colleges & Career Scope"
                    />
                  </Field>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <Field label="Description (paragraph 1)">
                        <TextArea
                          value={get("hero.description")}
                          onChange={(e) => set("hero.description", e.target.value)}
                        />
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="Description (paragraph 2)">
                        <TextArea
                          value={get("hero.description2")}
                          onChange={(e) => set("hero.description2", e.target.value)}
                        />
                      </Field>
                    </div>
                  </div>

                  <SubHeading>Stat Cards (right-side mini cards)</SubHeading>
                  <ObjectListEditor
                    items={get("hero.heroStats")}
                    onChange={(v) => set("hero.heroStats", v)}
                    emptyItem={{ label: "", value: "", icon: "ClipboardList" }}
                    itemName="Stat"
                    fields={[
                      { key: "label", label: "Label", type: "text" },
                      { key: "value", label: "Value", type: "text" },
                      { key: "icon", label: "Icon", type: "icon" },
                    ]}
                  />

                  <SubHeading>Quick Link Cards</SubHeading>
                  <ObjectListEditor
                    items={get("hero.quickLinks")}
                    onChange={(v) => set("hero.quickLinks", v)}
                    emptyItem={{ icon: "GraduationCap", title: "", desc: "", href: "" }}
                    itemName="Card"
                    fields={[
                      { key: "icon", label: "Icon", type: "icon" },
                      { key: "title", label: "Title", type: "text" },
                      { key: "desc", label: "Description", type: "text" },
                      { key: "href", label: "Link (href)", type: "text" },
                    ]}
                  />
                </>
              )}

              {/* ---------------- ENTRANCE EXAM ---------------- */}
              {activeTab === "exam" && (
                <>
                  <SectionIntro
                    title="Entrance Exam Section"
                    subtitle="Details block for the main entrance exam (e.g. NEET) — facts, eligibility and prep plan."
                  />

                  <SubHeading>Overview</SubHeading>
                  <Field label="Section Heading">
                    <TextInput
                      value={get("primaryExam.heading")}
                      onChange={(e) => set("primaryExam.heading", e.target.value)}
                      placeholder="e.g. NEET: The Main Medical Entrance Exam"
                    />
                  </Field>
                  <Field label="Intro Paragraph">
                    <TextArea
                      value={get("primaryExam.intro")}
                      onChange={(e) => set("primaryExam.intro", e.target.value)}
                    />
                  </Field>

                  <SubHeading>Quick Facts</SubHeading>
                  <ObjectListEditor
                    items={get("primaryExam.quickFacts")}
                    onChange={(v) => set("primaryExam.quickFacts", v)}
                    emptyItem={{ label: "", value: "" }}
                    itemName="Fact"
                    fields={[
                      { key: "label", label: "Label", type: "text" },
                      { key: "value", label: "Value", type: "text" },
                    ]}
                  />

                  <SubHeading>Purpose & Application</SubHeading>
                  <Field label="Purpose">
                    <TextArea
                      value={get("primaryExam.purpose")}
                      onChange={(e) => set("primaryExam.purpose", e.target.value)}
                    />
                  </Field>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <Field label="Apply Mode">
                        <TextInput
                          value={get("primaryExam.applyMode")}
                          onChange={(e) => set("primaryExam.applyMode", e.target.value)}
                          placeholder="e.g. Online Application Mode"
                        />
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="Official Website URL">
                        <TextInput
                          value={get("primaryExam.officialWebsite")}
                          onChange={(e) => set("primaryExam.officialWebsite", e.target.value)}
                          placeholder="https://neet.nta.nic.in/"
                        />
                      </Field>
                    </div>
                  </div>

                  <SubHeading>Eligibility (by category)</SubHeading>
                  <ObjectListEditor
                    items={get("primaryExam.eligibility")}
                    onChange={(v) => set("primaryExam.eligibility", v)}
                    emptyItem={{ category: "", details: "" }}
                    itemName="Category"
                    fields={[
                      { key: "category", label: "Category (General / SC-ST-OBC / PWD)", type: "text" },
                      { key: "details", label: "Details", type: "textarea" },
                    ]}
                  />

                  <SubHeading>What This Exam Unlocks</SubHeading>
                  <StringListEditor
                    items={get("primaryExam.unlocks")}
                    onChange={(v) => set("primaryExam.unlocks", v)}
                    placeholder="e.g. MBBS (Doctor) and BDS (Dental) admissions"
                  />

                  <SubHeading>Who Should Focus On This Exam</SubHeading>
                  <Field label="Intro Paragraph">
                    <TextArea
                      value={get("primaryExam.whoShouldFocusIntro")}
                      onChange={(e) => set("primaryExam.whoShouldFocusIntro", e.target.value)}
                    />
                  </Field>
                  <Field label="Bullet Points">
                    <StringListEditor
                      items={get("primaryExam.whoShouldFocusPoints")}
                      onChange={(v) => set("primaryExam.whoShouldFocusPoints", v)}
                    />
                  </Field>

                  <SubHeading>Preparation Plan (ordered steps)</SubHeading>
                  <ObjectListEditor
                    items={get("primaryExam.prepPlan")}
                    onChange={(v) => set("primaryExam.prepPlan", v)}
                    emptyItem={{ title: "", description: "" }}
                    itemName="Step"
                    fields={[
                      { key: "title", label: "Step Title", type: "text" },
                      { key: "description", label: "Step Description", type: "textarea" },
                    ]}
                  />
                </>
              )}

              {/* ---------------- PATHWAYS ---------------- */}
              {activeTab === "pathways" && (
                <>
                  <SectionIntro
                    title="Choose Your Pathway"
                    subtitle="Two blocks students see based on their current stage."
                  />

                  <SubHeading>After Class 10th</SubHeading>
                  <Field label="Title">
                    <TextInput
                      value={get("pathways.after10.title")}
                      onChange={(e) => set("pathways.after10.title", e.target.value)}
                    />
                  </Field>
                  <Field label="Description">
                    <TextArea
                      value={get("pathways.after10.description")}
                      onChange={(e) => set("pathways.after10.description", e.target.value)}
                    />
                  </Field>
                  <Field label="Bullet Points">
                    <StringListEditor
                      items={get("pathways.after10.points")}
                      onChange={(v) => set("pathways.after10.points", v)}
                    />
                  </Field>
                  <Field label="Links">
                    <ObjectListEditor
                      items={get("pathways.after10.links")}
                      onChange={(v) => set("pathways.after10.links", v)}
                      emptyItem={{ label: "", meta: "", href: "" }}
                      itemName="Link"
                      fields={[
                        { key: "label", label: "Label", type: "text" },
                        { key: "meta", label: "Meta badge", type: "text" },
                        { key: "href", label: "Link (href / route)", type: "text" },
                      ]}
                    />
                  </Field>

                  <SubHeading>After Class 12th</SubHeading>
                  <Field label="Title">
                    <TextInput
                      value={get("pathways.after12.title")}
                      onChange={(e) => set("pathways.after12.title", e.target.value)}
                    />
                  </Field>
                  <Field label="Description">
                    <TextArea
                      value={get("pathways.after12.description")}
                      onChange={(e) => set("pathways.after12.description", e.target.value)}
                    />
                  </Field>
                  <Field label="Bullet Points">
                    <StringListEditor
                      items={get("pathways.after12.points")}
                      onChange={(v) => set("pathways.after12.points", v)}
                    />
                  </Field>
                  <Field label="Links">
                    <ObjectListEditor
                      items={get("pathways.after12.links")}
                      onChange={(v) => set("pathways.after12.links", v)}
                      emptyItem={{ label: "", meta: "", href: "" }}
                      itemName="Link"
                      fields={[
                        { key: "label", label: "Label", type: "text" },
                        { key: "meta", label: "Meta badge", type: "text" },
                        { key: "href", label: "Link (href / route)", type: "text" },
                      ]}
                    />
                  </Field>
                </>
              )}

              {/* ---------------- COURSES & BRANCHES ---------------- */}
              {activeTab === "courses" && (
                <>
                  <SectionIntro
                    title="Courses & Branches"
                    subtitle="The course-family cards (Core Medical, Nursing, Paramedical, Pharmacy, etc.)."
                  />

                  <Field label="Intro Paragraph">
                    <TextArea
                      value={get("courseBranches.intro")}
                      onChange={(e) => set("courseBranches.intro", e.target.value)}
                    />
                  </Field>

                  <SubHeading>Cards</SubHeading>
                  {(get("courseBranches.cards") || []).map((card, i) => (
                    <div key={i} className="border rounded-3 p-3 mb-3 bg-light bg-opacity-50">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="badge bg-white border text-muted fw-semibold">Card #{i + 1}</span>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => {
                            const cards = get("courseBranches.cards").filter((_, idx) => idx !== i);
                            set(
                              "courseBranches.cards",
                              cards.length
                                ? cards
                                : [{ icon: "Hospital", title: "", description: "", points: [""], links: [{ label: "", href: "" }] }]
                            );
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="row g-3 mb-3">
                        <div className="col-md-4">
                          <label className="form-label small fw-semibold text-muted">Icon</label>
                          <IconSelect
                            value={card.icon}
                            onChange={(v) => {
                              const cards = [...get("courseBranches.cards")];
                              cards[i] = { ...cards[i], icon: v };
                              set("courseBranches.cards", cards);
                            }}
                          />
                        </div>
                        <div className="col-md-8">
                          <label className="form-label small fw-semibold text-muted">Title</label>
                          <TextInput
                            value={card.title || ""}
                            onChange={(e) => {
                              const cards = [...get("courseBranches.cards")];
                              cards[i] = { ...cards[i], title: e.target.value };
                              set("courseBranches.cards", cards);
                            }}
                          />
                        </div>
                      </div>

                      <label className="form-label small fw-semibold text-muted">Description</label>
                      <TextArea
                        value={card.description || ""}
                        onChange={(e) => {
                          const cards = [...get("courseBranches.cards")];
                          cards[i] = { ...cards[i], description: e.target.value };
                          set("courseBranches.cards", cards);
                        }}
                      />

                      <div className="mt-3">
                        <label className="form-label small fw-semibold text-muted">Bullet Points</label>
                        <StringListEditor
                          items={card.points}
                          onChange={(v) => {
                            const cards = [...get("courseBranches.cards")];
                            cards[i] = { ...cards[i], points: v };
                            set("courseBranches.cards", cards);
                          }}
                        />
                      </div>

                      <div className="mt-3">
                        <label className="form-label small fw-semibold text-muted">Links</label>
                        <ObjectListEditor
                          items={card.links}
                          onChange={(v) => {
                            const cards = [...get("courseBranches.cards")];
                            cards[i] = { ...cards[i], links: v };
                            set("courseBranches.cards", cards);
                          }}
                          emptyItem={{ label: "", href: "" }}
                          itemName="Link"
                          fields={[
                            { key: "label", label: "Label", type: "text" },
                            { key: "href", label: "Link (href / route)", type: "text" },
                          ]}
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1"
                    onClick={() =>
                      set("courseBranches.cards", [
                        ...(get("courseBranches.cards") || []),
                        { icon: "Hospital", title: "", description: "", points: [""], links: [{ label: "", href: "" }] },
                      ])
                    }
                  >
                    <Plus size={14} /> Add card
                  </button>
                </>
              )}

              {/* ---------------- COLLEGES ---------------- */}
              {activeTab === "colleges" && (
                <>
                  <SectionIntro
                    title="Colleges & Institutes"
                    subtitle="Intro text, listing links, and the shortlisting checklist."
                  />

                  <Field label="Intro Paragraph">
                    <TextArea
                      value={get("colleges.intro")}
                      onChange={(e) => set("colleges.intro", e.target.value)}
                    />
                  </Field>

                  <SubHeading>Browse Listings</SubHeading>
                  <ObjectListEditor
                    items={get("colleges.listings")}
                    onChange={(v) => set("colleges.listings", v)}
                    emptyItem={{ label: "", href: "", meta: "" }}
                    itemName="Listing"
                    fields={[
                      { key: "label", label: "Label", type: "text" },
                      { key: "href", label: "Link (href / route)", type: "text" },
                      { key: "meta", label: "Meta badge", type: "text" },
                    ]}
                  />

                  <SubHeading>Shortlisting Checklist</SubHeading>
                  <StringListEditor
                    items={get("colleges.checklist")}
                    onChange={(v) => set("colleges.checklist", v)}
                  />
                </>
              )}

              {/* ---------------- SETTINGS ---------------- */}
              {activeTab === "settings" && (
                <>
                  <SectionIntro
                    title="Publish Settings"
                    subtitle="Control visibility and preview this page's live status."
                  />

                  <div className="p-4 rounded-3 border bg-light bg-opacity-50 mb-4">
                    <div className="form-check form-switch mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="isActiveSettings"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                      />
                      <label className="form-check-label fw-semibold" htmlFor="isActiveSettings">
                        {isActive ? "Page is Published (visible to public)" : "Page is a Draft (hidden from public)"}
                      </label>
                    </div>
                    <div className="small text-muted">
                      Toggle off if you're still editing content and don't want visitors to see it yet.
                    </div>
                  </div>

                  {pageUrl ? (
                    <div className="p-4 rounded-3 border bg-light bg-opacity-50">
                      <div className="fw-semibold mb-1">Live URL</div>
                      <a href={pageUrl} target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-1">
                        {pageUrl} <ExternalLink size={14} />
                      </a>
                    </div>
                  ) : null}
                </>
              )}
            </div>
          </div>
        </div>
      </form>

      {/* ===== Floating save button for long scroll convenience ===== */}
      {isDirty ? (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={processing}
          className="btn btn-primary shadow-lg d-inline-flex align-items-center gap-2 px-4 py-2"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 30,
            borderRadius: 999,
          }}
        >
          <Save size={16} />
          {processing ? "Saving..." : "Save Changes"}
        </button>
      ) : null}
    </AdminLayout>
  );
}
