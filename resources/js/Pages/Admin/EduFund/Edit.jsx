// resources/js/Pages/Admin/EduFund/Edit.jsx

import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const ICON_OPTIONS = [
  "Award", "BadgeCheck", "ShieldCheck", "GraduationCap",
  "BadgeIndianRupee", "CalendarClock", "UserCheck", "Landmark",
];

export default function Edit({ section }) {
  const { data, setData, put, processing, errors } = useForm({
    heading_prefix: section.heading_prefix || "",
    heading_highlight: section.heading_highlight || "",
    description: section.description || "",
    cta_label: section.cta_label || "",
    cta_link: section.cta_link || "",
    extra_note: section.extra_note || "",
    note_title: section.note_title || "",
    note_text: section.note_text || "",
    note_icon: section.note_icon || "Landmark",
    bg_style: section.bg_style || "light",
    cards: section.cards.length
      ? section.cards.map((c) => ({
          icon: c.icon,
          title: c.title,
          content: c.content,
          status: !!c.status,
        }))
      : [],
    schemes: section.schemes.length
      ? section.schemes.map((s) => ({
          full_name: s.full_name,
          short_name: s.short_name,
          href: s.href,
          status: !!s.status,
        }))
      : [],
  });

  const submit = (e) => {
    e.preventDefault();
    put(route("admin.eduFund.update", section.id));
  };

  // ---- Cards helpers ----
  const addCard = () => {
    setData("cards", [
      ...data.cards,
      { icon: "Award", title: "", content: "", status: true },
    ]);
  };
  const updateCard = (idx, field, value) => {
    const updated = [...data.cards];
    updated[idx][field] = value;
    setData("cards", updated);
  };
  const removeCard = (idx) => {
    setData("cards", data.cards.filter((_, i) => i !== idx));
  };

  // ---- Schemes helpers ----
  const addScheme = () => {
    setData("schemes", [
      ...data.schemes,
      { full_name: "", short_name: "", href: "", status: true },
    ]);
  };
  const updateScheme = (idx, field, value) => {
    const updated = [...data.schemes];
    updated[idx][field] = value;
    setData("schemes", updated);
  };
  const removeScheme = (idx) => {
    setData("schemes", data.schemes.filter((_, i) => i !== idx));
  };

  return (
    <AdminLayout header={`Edit Section — ${section.key}`}>
      <Head title={`Edit ${section.key} Section`} />

      <form onSubmit={submit}>
        {/* SECTION DETAILS */}
        <div className="card mb-3">
          <div className="card-header">
            <b>Section Details</b>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Heading Prefix</label>
                <input
                  type="text"
                  className={`form-control ${errors.heading_prefix ? "is-invalid" : ""}`}
                  placeholder="Scholarships that"
                  value={data.heading_prefix}
                  onChange={(e) => setData("heading_prefix", e.target.value)}
                />
                {errors.heading_prefix && <div className="invalid-feedback">{errors.heading_prefix}</div>}
              </div>

              <div className="col-md-6 form-group">
                <label>Heading Highlight (gradient text)</label>
                <input
                  type="text"
                  className={`form-control ${errors.heading_highlight ? "is-invalid" : ""}`}
                  placeholder="reduce your burden"
                  value={data.heading_highlight}
                  onChange={(e) => setData("heading_highlight", e.target.value)}
                />
                {errors.heading_highlight && <div className="invalid-feedback">{errors.heading_highlight}</div>}
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                rows={3}
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
              />
            </div>

            <div className="row">
              <div className="col-md-4 form-group">
                <label>CTA Label</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Explore Scholarships"
                  value={data.cta_label}
                  onChange={(e) => setData("cta_label", e.target.value)}
                />
              </div>

              <div className="col-md-4 form-group">
                <label>CTA Link</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="/scholarship/overview"
                  value={data.cta_link}
                  onChange={(e) => setData("cta_link", e.target.value)}
                />
              </div>

              <div className="col-md-4 form-group">
                <label>Background</label>
                <select
                  className="form-control"
                  value={data.bg_style}
                  onChange={(e) => setData("bg_style", e.target.value)}
                >
                  <option value="light">Light (bg-light)</option>
                  <option value="white">White (bg-white)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Extra Note <small className="text-muted">(shown as small text above CTA — used by Loan section, optional)</small></label>
              <textarea
                className="form-control"
                rows={2}
                placeholder="Best for: ... <br/> Smart strategy: ..."
                value={data.extra_note}
                onChange={(e) => setData("extra_note", e.target.value)}
              />
              <small className="text-muted">HTML allowed (e.g. &lt;b&gt;, &lt;br/&gt;)</small>
            </div>
          </div>
        </div>

        {/* INFO NOTE BOX */}
        <div className="card mb-3">
          <div className="card-header">
            <b>Info Note Box</b> <small className="text-muted">(optional — leave blank to hide)</small>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 form-group">
                <label>Icon</label>
                <select
                  className="form-control"
                  value={data.note_icon}
                  onChange={(e) => setData("note_icon", e.target.value)}
                >
                  {ICON_OPTIONS.map((icon) => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-9 form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="How West Bengal supports students"
                  value={data.note_title}
                  onChange={(e) => setData("note_title", e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Text</label>
              <textarea
                className="form-control"
                rows={2}
                value={data.note_text}
                onChange={(e) => setData("note_text", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* FACT CARDS */}
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <b>Fact Cards</b>
            <button type="button" className="btn btn-sm btn-primary" onClick={addCard}>
              + Add Card
            </button>
          </div>
          <div className="card-body">
            {data.cards.length === 0 && (
              <p className="text-muted mb-0">No cards added yet.</p>
            )}

            {data.cards.map((card, idx) => (
              <div key={idx} className="border rounded p-3 mb-3">
                <div className="row">
                  <div className="col-md-3 form-group">
                    <label>Icon</label>
                    <select
                      className="form-control"
                      value={card.icon}
                      onChange={(e) => updateCard(idx, "icon", e.target.value)}
                    >
                      {ICON_OPTIONS.map((icon) => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-7 form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={card.title}
                      onChange={(e) => updateCard(idx, "title", e.target.value)}
                    />
                  </div>
                  <div className="col-md-2 d-flex align-items-end form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={card.status}
                        onChange={(e) => updateCard(idx, "status", e.target.checked)}
                      />
                      <label className="form-check-label">Active</label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Content <small className="text-muted">(HTML allowed — use &lt;ul&gt;&lt;li&gt; for lists, &lt;b&gt; for bold)</small>
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    value={card.content}
                    onChange={(e) => updateCard(idx, "content", e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeCard(idx)}
                >
                  Remove Card
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SCHEMES (only relevant for scholarship section, but shown for all) */}
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <b>Scheme Logos / Links</b>
            <button type="button" className="btn btn-sm btn-primary" onClick={addScheme}>
              + Add Scheme
            </button>
          </div>
          <div className="card-body">
            {data.schemes.length === 0 && (
              <p className="text-muted mb-0">No schemes added yet.</p>
            )}

            {data.schemes.map((scheme, idx) => (
              <div key={idx} className="border rounded p-3 mb-3">
                <div className="row">
                  <div className="col-md-4 form-group">
                    <label>Full Name (tooltip)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="National Scholarship Portal (NSP)"
                      value={scheme.full_name}
                      onChange={(e) => updateScheme(idx, "full_name", e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 form-group">
                    <label>Short Name (line break with \n)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="NSP\nScholarships"
                      value={scheme.short_name}
                      onChange={(e) => updateScheme(idx, "short_name", e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 form-group">
                    <label>Link</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://scholarships.gov.in"
                      value={scheme.href}
                      onChange={(e) => updateScheme(idx, "href", e.target.value)}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={scheme.status}
                      onChange={(e) => updateScheme(idx, "status", e.target.checked)}
                    />
                    <label className="form-check-label">Active</label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeScheme(idx)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <button type="submit" className="btn btn-primary" disabled={processing}>
            Save Changes
          </button>
          <Link href={route("admin.eduFund.index")} className="btn btn-secondary ml-1">
            Cancel
          </Link>
        </div>
      </form>
    </AdminLayout>
  );
}