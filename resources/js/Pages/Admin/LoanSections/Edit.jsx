import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, router } from "@inertiajs/react";

const ICON_OPTIONS = ["School", "CreditCard", "ShieldCheck", "Users"];

export default function Edit({ section, factCards = [], schemes = [] }) {

  /* ============ SECTION HEADING FORM ============ */
  const sectionForm = useForm({
    heading_prefix: section.heading_prefix || "",
    heading_highlight: section.heading_highlight || "",
    subheading: section.subheading || "",
  });

  const submitSection = (e) => {
    e.preventDefault();
    sectionForm.patch(route("admin.loan-sections.update-section", section.id), {
      preserveScroll: true,
    });
  };

  /* ============ FACT CARD MODAL ============ */
  const [showFactModal, setShowFactModal] = useState(false);
  const [editingFact, setEditingFact] = useState(null);

  const factForm = useForm({
    type: "fact_card",
    icon: ICON_OPTIONS[0],
    title: "",
    description: "",
  });

  const openAddFact = () => {
    setEditingFact(null);
    factForm.reset();
    factForm.setData({ type: "fact_card", icon: ICON_OPTIONS[0], title: "", description: "" });
    setShowFactModal(true);
  };

  const openEditFact = (card) => {
    setEditingFact(card);
    factForm.setData({
      type: "fact_card",
      icon: card.icon,
      title: card.title,
      description: card.description,
    });
    setShowFactModal(true);
  };

  const submitFact = (e) => {
    e.preventDefault();
    if (editingFact) {
      factForm.patch(route("admin.loan-sections.update", editingFact.id), {
        preserveScroll: true,
        onSuccess: () => setShowFactModal(false),
      });
    } else {
      factForm.post(route("admin.loan-sections.store"), {
        preserveScroll: true,
        onSuccess: () => setShowFactModal(false),
      });
    }
  };

  const deleteFact = (card) => {
    if (confirm(`Delete "${card.title}"?`)) {
      router.delete(route("admin.loan-sections.destroy", card.id), { preserveScroll: true });
    }
  };

  /* ============ SCHEME MODAL ============ */
  const [showSchemeModal, setShowSchemeModal] = useState(false);
  const [editingScheme, setEditingScheme] = useState(null);

  const schemeForm = useForm({
    type: "scheme",
    title: "",
    short: "",
    link: "",
  });

  const openAddScheme = () => {
    setEditingScheme(null);
    schemeForm.setData({ type: "scheme", title: "", short: "", link: "" });
    setShowSchemeModal(true);
  };

  const openEditScheme = (scheme) => {
    setEditingScheme(scheme);
    schemeForm.setData({
      type: "scheme",
      title: scheme.title,
      short: scheme.short,
      link: scheme.link || "",
    });
    setShowSchemeModal(true);
  };

  const submitScheme = (e) => {
    e.preventDefault();
    if (editingScheme) {
      schemeForm.patch(route("admin.loan-sections.update", editingScheme.id), {
        preserveScroll: true,
        onSuccess: () => setShowSchemeModal(false),
      });
    } else {
      schemeForm.post(route("admin.loan-sections.store"), {
        preserveScroll: true,
        onSuccess: () => setShowSchemeModal(false),
      });
    }
  };

  const deleteScheme = (scheme) => {
    if (confirm(`Delete "${scheme.title}"?`)) {
      router.delete(route("admin.loan-sections.destroy", scheme.id), { preserveScroll: true });
    }
  };

  return (
    <AdminLayout header="Scholarships, Loans & Schemes Section">
      <Head title="Edit Scholarships Section" />

      <div className="container-fluid">

        {/* ============ HEADING TEXT ============ */}
        <div className="card mb-4">
          <div className="card-header">
            <h5 className="mb-0">Section Heading</h5>
          </div>
          <div className="card-body">
            <form onSubmit={submitSection}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Heading Prefix (normal text)</label>
                  <input
                    className="form-control"
                    value={sectionForm.data.heading_prefix}
                    onChange={(e) => sectionForm.setData("heading_prefix", e.target.value)}
                    placeholder="Scholarships,"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Heading Highlight (gradient text)</label>
                  <input
                    className="form-control"
                    value={sectionForm.data.heading_highlight}
                    onChange={(e) => sectionForm.setData("heading_highlight", e.target.value)}
                    placeholder="Loans & Schemes"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label>Subheading</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={sectionForm.data.subheading}
                    onChange={(e) => sectionForm.setData("subheading", e.target.value)}
                  />
                </div>
              </div>
              <button className="btn btn-primary" disabled={sectionForm.processing}>
                {sectionForm.processing ? "Saving..." : "Save Heading"}
              </button>
            </form>
          </div>
        </div>

        {/* ============ FACT CARDS ============ */}
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Fact Cards</h5>
            <button className="btn btn-sm btn-primary" onClick={openAddFact}>
              <i className="fas fa-plus mr-1"></i> Add More
            </button>
          </div>
          <div className="card-body">
            <table className="table table-bordered align-middle mb-0">
              <thead>
                <tr>
                  <th width="60">#</th>
                  <th width="100">Icon</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th width="120">Actions</th>
                </tr>
              </thead>
              <tbody>
                {factCards.length ? factCards.map((card, i) => (
                  <tr key={card.id}>
                    <td>{i + 1}</td>
                    <td><span className="badge bg-light text-dark">{card.icon}</span></td>
                    <td>{card.title}</td>
                    <td className="small text-muted">{card.description}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-info me-1" onClick={() => openEditFact(card)}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => deleteFact(card)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan="5" className="text-center text-muted py-3">No fact cards yet</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ============ SCHEMES ============ */}
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Schemes (Logos Strip)</h5>
            <button className="btn btn-sm btn-primary" onClick={openAddScheme}>
              <i className="fas fa-plus mr-1"></i> Add More
            </button>
          </div>
          <div className="card-body">
            <table className="table table-bordered align-middle mb-0">
              <thead>
                <tr>
                  <th width="60">#</th>
                  <th>Full Title</th>
                  <th>Short Label</th>
                  <th>Link</th>
                  <th width="120">Actions</th>
                </tr>
              </thead>
              <tbody>
                {schemes.length ? schemes.map((scheme, i) => (
                  <tr key={scheme.id}>
                    <td>{i + 1}</td>
                    <td>{scheme.title}</td>
                    <td className="small text-muted" style={{ whiteSpace: "pre-line" }}>
                      {scheme.short?.replace(/\\n/g, "\n")}
                    </td>
                    <td className="small text-truncate" style={{ maxWidth: 180 }}>
                      {scheme.link || "—"}
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-info me-1" onClick={() => openEditScheme(scheme)}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => deleteScheme(scheme)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan="5" className="text-center text-muted py-3">No schemes yet</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* ============ FACT CARD MODAL ============ */}
      {showFactModal && (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }} onClick={() => setShowFactModal(false)}>
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingFact ? "Edit Fact Card" : "Add Fact Card"}</h5>
                <button type="button" className="btn-close" onClick={() => setShowFactModal(false)}></button>
              </div>
              <form onSubmit={submitFact}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Icon</label>
                    <select
                      className="form-control"
                      value={factForm.data.icon}
                      onChange={(e) => factForm.setData("icon", e.target.value)}
                    >
                      {ICON_OPTIONS.map((icon) => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Title</label>
                    <input
                      className="form-control"
                      value={factForm.data.title}
                      onChange={(e) => factForm.setData("title", e.target.value)}
                    />
                    {factForm.errors.title && <small className="text-danger">{factForm.errors.title}</small>}
                  </div>
                  <div className="mb-3">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={factForm.data.description}
                      onChange={(e) => factForm.setData("description", e.target.value)}
                    />
                    {factForm.errors.description && <small className="text-danger">{factForm.errors.description}</small>}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowFactModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={factForm.processing}>
                    {editingFact ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ============ SCHEME MODAL ============ */}
      {showSchemeModal && (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }} onClick={() => setShowSchemeModal(false)}>
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingScheme ? "Edit Scheme" : "Add Scheme"}</h5>
                <button type="button" className="btn-close" onClick={() => setShowSchemeModal(false)}></button>
              </div>
              <form onSubmit={submitScheme}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Full Title</label>
                    <input
                      className="form-control"
                      value={schemeForm.data.title}
                      onChange={(e) => schemeForm.setData("title", e.target.value)}
                      placeholder="Swami Vivekananda Merit-cum-Means Scholarship"
                    />
                    {schemeForm.errors.title && <small className="text-danger">{schemeForm.errors.title}</small>}
                  </div>
                  <div className="mb-3">
                    <label>Short Label (use \n for line break)</label>
                    <input
                      className="form-control"
                      value={schemeForm.data.short}
                      onChange={(e) => schemeForm.setData("short", e.target.value)}
                      placeholder="Swami Vivekananda\nScholarship"
                    />
                    {schemeForm.errors.short && <small className="text-danger">{schemeForm.errors.short}</small>}
                  </div>
                  <div className="mb-3">
                    <label>Link (optional)</label>
                    <input
                      className="form-control"
                      value={schemeForm.data.link}
                      onChange={(e) => schemeForm.setData("link", e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowSchemeModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={schemeForm.processing}>
                    {editingScheme ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}