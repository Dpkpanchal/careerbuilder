import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Default empty structure for Diploma Pages
// ----------------------------------------------------
export const defaultContentData = () => ({
    menu_id: "",
    tab_id: "",
    section_id: "",
    link_id: "",
    url: "",
    intro_heading: "",
    intro_description: "",
    intro_description_secondary: "",
    snapshot: [
        { key: "", value: "" },
    ],
    branch_groups: [
        {
            id: "",
            title: "",
            caption: "",
            branches: [{ name: "", icon: "" }],
        },
    ],
    post_diploma: [
        {
            name: "",
            duration: "",
            path: "",
        },
    ],
    polytechnic_links: [
        {
            label: "",
            url: "",
        },
    ],
    admission_heading: "",
    admission_description: "",
    admission_info: [""],
    sort_order: 0,
    is_active: true,
});

// Helper functions
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

export default function DiplomaEngineeringFields({ data, setData, errors, tabs }) {
    const set = (key, value) => setData(key, value);

    // ---------------- Tab / Section / Link ----------------
    const selectedTab = useMemo(
        () => tabs?.find((tab) => String(tab.id) === String(data.tab_id)),
        [tabs, data.tab_id]
    );

    const sections = selectedTab?.children || [];

    const selectedSection = useMemo(
        () => sections.find(section => String(section.id) === String(data.section_id)),
        [sections, data.section_id]
    );

    const links = selectedSection?.children || [];

    // ---------------- Snapshot ----------------
  

    // ---------------- Branch Groups ----------------
    const branchGroups = data.branch_groups || [];

    const addBranchGroup = () =>
        setData("branch_groups", [
            ...branchGroups,
            { id: "", title: "", caption: "", branches: [{ name: "", icon: "" }] },
        ]);

    const removeBranchGroup = (idx) =>
        setData("branch_groups", removeArrayItem(branchGroups, idx));

    const updateBranchGroup = (idx, field, value) =>
        setData(
            "branch_groups",
            updateArrayItem(branchGroups, idx, {
                ...branchGroups[idx],
                [field]: value,
            })
        );

    const addBranch = (gIdx) => {
        const group = branchGroups[gIdx];
        updateBranchGroup(gIdx, "branches", [...(group.branches || []), { name: "", icon: "" }]);
    };

    const updateBranch = (gIdx, bIdx, field, value) => {
        const group = branchGroups[gIdx];
        const newBranches = updateArrayItem(group.branches || [], bIdx, {
            ...(group.branches || [])[bIdx],
            [field]: value,
        });
        updateBranchGroup(gIdx, "branches", newBranches);
    };

    const removeBranch = (gIdx, bIdx) => {
        const group = branchGroups[gIdx];
        updateBranchGroup(gIdx, "branches", removeArrayItem(group.branches || [], bIdx));
    };

    // ---------------- Post Diploma ----------------
    const postDiploma = data.post_diploma || [];

    const addPostDiploma = () =>
        setData("post_diploma", [
            ...postDiploma,
            { name: "", duration: "", path: "" },
        ]);

    const removePostDiploma = (idx) =>
        setData("post_diploma", removeArrayItem(postDiploma, idx));

    const updatePostDiploma = (idx, field, value) =>
        setData(
            "post_diploma",
            updateArrayItem(postDiploma, idx, {
                ...postDiploma[idx],
                [field]: value,
            })
        );

    // ---------------- Polytechnic Links ----------------
    const polytechnicLinks = data.polytechnic_links || [];

    const addPolytechnicLink = () =>
        setData("polytechnic_links", [
            ...polytechnicLinks,
            { label: "", url: "" },
        ]);

    const removePolytechnicLink = (idx) =>
        setData("polytechnic_links", removeArrayItem(polytechnicLinks, idx));

    const updatePolytechnicLink = (idx, field, value) =>
        setData(
            "polytechnic_links",
            updateArrayItem(polytechnicLinks, idx, {
                ...polytechnicLinks[idx],
                [field]: value,
            })
        );

    // ---------------- Admission info ----------------
    const addStringItem = (key) => setData(key, [...(data[key] || []), ""]);
    const updateStringItem = (key, idx, value) =>
        setData(key, updateArrayItem(data[key] || [], idx, value));
    const removeStringItem = (key, idx) =>
        setData(key, removeArrayItem(data[key] || [], idx));

    // Icon options
    const iconOptions = [
        "Building2", "Cog", "Factory", "Zap", "Bolt", "Settings2", 
        "BatteryCharging", "CarFront", "Beaker", "Sprout", "Mountain", 
        "Map", "FlaskConical", "Radio", "Gauge", "SlidersHorizontal", 
        "HeartPulse", "Utensils", "Footprints", "Layers", "Package", 
        "Printer", "Camera", "LocateFixed", "Globe", "TestTube2"
    ];

    return (
        <div className="row g-4">
            {/* ---------------- Tab / Section / Link ---------------- */}
           

            {/* ---------------- Intro ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Intro Section</h5>
            </div>

            <div className="col-12">
                <label className="form-label">Intro Heading</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.intro_heading || ""}
                    onChange={(e) => set("intro_heading", e.target.value)}
                />
                {errors?.intro_heading && <div className="text-danger small">{errors.intro_heading}</div>}
            </div>

            <div className="col-12">
                <label className="form-label">Intro Description</label>
                <textarea
                    className="form-control"
                    rows={3}
                    value={data.intro_description || ""}
                    onChange={(e) => set("intro_description", e.target.value)}
                />
                {errors?.intro_description && <div className="text-danger small">{errors.intro_description}</div>}
            </div>

            <div className="col-12">
                <label className="form-label">Intro Description (secondary)</label>
                <textarea
                    className="form-control"
                    rows={2}
                    value={data.intro_description_secondary || ""}
                    onChange={(e) => set("intro_description_secondary", e.target.value)}
                />
                {errors?.intro_description_secondary && <div className="text-danger small">{errors.intro_description_secondary}</div>}
            </div>

            {/* ---------------- Snapshot ---------------- */}
           <GenericSnapshotFields data={data} setData={setData} errors={errors} />

            {/* ---------------- Branch Groups ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Branch Groups</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addBranchGroup}>
                        <Plus size={14} className="me-1" /> Add Group
                    </button>
                </div>
            </div>

            {branchGroups.map((group, gIdx) => (
                <div className="col-12" key={gIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Group #{gIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeBranchGroup(gIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <label className="form-label">Group ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., core, electronics"
                                        value={group.id || ""}
                                        onChange={(e) => updateBranchGroup(gIdx, "id", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Group title"
                                        value={group.title || ""}
                                        onChange={(e) => updateBranchGroup(gIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Caption</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Brief description"
                                        value={group.caption || ""}
                                        onChange={(e) => updateBranchGroup(gIdx, "caption", e.target.value)}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Branches</label>
                                    {(group.branches || []).map((branch, bIdx) => (
                                        <div className="row g-2 mb-2" key={bIdx}>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Branch name"
                                                    value={branch.name || ""}
                                                    onChange={(e) =>
                                                        updateBranch(gIdx, bIdx, "name", e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-5">
                                                <select
                                                    className="form-control"
                                                    value={branch.icon || ""}
                                                    onChange={(e) =>
                                                        updateBranch(gIdx, bIdx, "icon", e.target.value)
                                                    }
                                                >
                                                    <option value="">Select Icon</option>
                                                    {iconOptions.map((icon) => (
                                                        <option key={icon} value={icon}>
                                                            {icon}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-1">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger w-100"
                                                    onClick={() => removeBranch(gIdx, bIdx)}
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addBranch(gIdx)}
                                    >
                                        <Plus size={14} className="me-1" /> Add Branch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Post Diploma ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Post-Diploma Programs</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addPostDiploma}>
                        <Plus size={14} className="me-1" /> Add Program
                    </button>
                </div>
            </div>

            {postDiploma.map((program, pIdx) => (
                <div className="col-12" key={pIdx}>
                    <div className="card mb-2">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start">
                                <h6>Program #{pIdx + 1}</h6>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => removePostDiploma(pIdx)}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                            <div className="row g-2">
                                <div className="col-md-5">
                                    <label className="form-label small">Program Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Program name"
                                        value={program.name || ""}
                                        onChange={(e) => updatePostDiploma(pIdx, "name", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label small">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Duration"
                                        value={program.duration || ""}
                                        onChange={(e) => updatePostDiploma(pIdx, "duration", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label small">Pathway</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Eligibility pathway"
                                        value={program.path || ""}
                                        onChange={(e) => updatePostDiploma(pIdx, "path", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Polytechnic Links ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Institution Links</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addPolytechnicLink}>
                        <Plus size={14} className="me-1" /> Add Link
                    </button>
                </div>
            </div>

            {polytechnicLinks.map((link, lIdx) => (
                <div className="col-12" key={lIdx}>
                    <div className="row g-2">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Link Label"
                                value={link.label || ""}
                                onChange={(e) => updatePolytechnicLink(lIdx, "label", e.target.value)}
                            />
                        </div>
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="https://..."
                                value={link.url || ""}
                                onChange={(e) => updatePolytechnicLink(lIdx, "url", e.target.value)}
                            />
                        </div>
                        <div className="col-md-1">
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100"
                                onClick={() => removePolytechnicLink(lIdx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Admission ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Admission Section</h5>
            </div>

            <div className="col-md-6">
                <label className="form-label">Admission Heading</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.admission_heading || ""}
                    onChange={(e) => set("admission_heading", e.target.value)}
                />
                {errors?.admission_heading && <div className="text-danger small">{errors.admission_heading}</div>}
            </div>
            <div className="col-md-6">
                <label className="form-label">Admission Description</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.admission_description || ""}
                    onChange={(e) => set("admission_description", e.target.value)}
                />
                {errors?.admission_description && <div className="text-danger small">{errors.admission_description}</div>}
            </div>

            <div className="col-12">
                <label className="form-label">Admission Info (bullet points)</label>
                {(data.admission_info || []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Admission point"
                            value={item || ""}
                            onChange={(e) =>
                                updateStringItem("admission_info", idx, e.target.value)
                            }
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("admission_info", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("admission_info")}
                >
                    <Plus size={14} className="me-1" /> Add Point
                </button>
                {errors?.admission_info && <div className="text-danger small">{errors.admission_info}</div>}
            </div>

            {/* ---------------- Meta ---------------- */}
            <div className="col-12">
                <hr />
            </div>

            <div className="col-md-3">
                <label className="form-label">Sort Order</label>
                <input
                    type="number"
                    className="form-control"
                    value={data.sort_order || 0}
                    onChange={(e) => set("sort_order", Number(e.target.value))}
                />
                {errors?.sort_order && <div className="text-danger small">{errors.sort_order}</div>}
            </div>

            <div className="col-md-3 d-flex align-items-center">
                <div className="form-check mt-4" style={{ display: "none" }}>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="is_active"
                        checked={!!data.is_active}
                        onChange={(e) => set("is_active", e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="is_active">
                        Active
                    </label>
                </div>
            </div>
        </div>
    );
}