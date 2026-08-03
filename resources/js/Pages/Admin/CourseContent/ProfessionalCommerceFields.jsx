import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";
// ----------------------------------------------------
// Default empty structure for Professional Commerce (CA/CS/CMA) Page
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
    professional_commerce_ladder: [
        {
            key: "",
            title: "",
            focus: "",
            icon: "",
            ladder: [""],
            roles: [""],
        },
    ],
    who_should_do: [
        {
            title: "",
            desc: "",
            icon: "",
        },
    ],
    choose_right: [
        {
            title: "",
            desc: "",
            icon: "",
        },
    ],
    common_prep: [""],
    common_docs: [""],
    important_notes: [""],
    sort_order: 0,
    is_active: true,
});

// Helper functions
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

// Icon options
const ICON_OPTIONS = [
    "Briefcase", "GraduationCap", "ShieldCheck", "Users", "Calculator", 
    "Landmark", "LineChart", "Megaphone", "UserRound", "Settings", 
    "FileText", "Scale", "BookOpen", "ClipboardList", "Handshake",
    "Banknote", "Layers3", "Cpu", "Code2", "Database", "Network", "Cloud"
];

export default function ProfessionalCommerceFields({ data, setData, errors, tabs }) {
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

    // ---------------- Snapshot (Dynamic Key-Value pairs) ----------------
   

    // ---------------- Professional Commerce Ladder (CA/CS/CMA) ----------------
    const professionalLadder = Array.isArray(data.professional_commerce_ladder) ? data.professional_commerce_ladder : [];

    const addProfessionalLadder = () =>
        setData("professional_commerce_ladder", [
            ...professionalLadder,
            { key: "", title: "", focus: "", icon: "", ladder: [""], roles: [""] },
        ]);

    const removeProfessionalLadder = (idx) =>
        setData("professional_commerce_ladder", removeArrayItem(professionalLadder, idx));

    const updateProfessionalLadder = (idx, field, value) =>
        setData(
            "professional_commerce_ladder",
            updateArrayItem(professionalLadder, idx, {
                ...professionalLadder[idx],
                [field]: value,
            })
        );

    const addProfessionalLadderItem = (pIdx, field) => {
        const item = professionalLadder[pIdx];
        updateProfessionalLadder(pIdx, field, [...(item[field] || []), ""]);
    };

    const updateProfessionalLadderItem = (pIdx, field, iIdx, value) => {
        const item = professionalLadder[pIdx];
        const newItems = updateArrayItem(item[field] || [], iIdx, value);
        updateProfessionalLadder(pIdx, field, newItems);
    };

    const removeProfessionalLadderItem = (pIdx, field, iIdx) => {
        const item = professionalLadder[pIdx];
        updateProfessionalLadder(pIdx, field, removeArrayItem(item[field] || [], iIdx));
    };

    // ---------------- Who Should Do ----------------
    const whoShouldDo = Array.isArray(data.who_should_do) ? data.who_should_do : [];

    const addWhoShouldDo = () =>
        setData("who_should_do", [
            ...whoShouldDo,
            { title: "", desc: "", icon: "" },
        ]);

    const removeWhoShouldDo = (idx) =>
        setData("who_should_do", removeArrayItem(whoShouldDo, idx));

    const updateWhoShouldDo = (idx, field, value) =>
        setData(
            "who_should_do",
            updateArrayItem(whoShouldDo, idx, {
                ...whoShouldDo[idx],
                [field]: value,
            })
        );

    // ---------------- Choose Right ----------------
    const chooseRight = Array.isArray(data.choose_right) ? data.choose_right : [];

    const addChooseRight = () =>
        setData("choose_right", [
            ...chooseRight,
            { title: "", desc: "", icon: "" },
        ]);

    const removeChooseRight = (idx) =>
        setData("choose_right", removeArrayItem(chooseRight, idx));

    const updateChooseRight = (idx, field, value) =>
        setData(
            "choose_right",
            updateArrayItem(chooseRight, idx, {
                ...chooseRight[idx],
                [field]: value,
            })
        );

    // ---------------- String Arrays ----------------
    const addStringItem = (key) => setData(key, [...(Array.isArray(data[key]) ? data[key] : []), ""]);
    const updateStringItem = (key, idx, value) =>
        setData(key, updateArrayItem(Array.isArray(data[key]) ? data[key] : [], idx, value));
    const removeStringItem = (key, idx) =>
        setData(key, removeArrayItem(Array.isArray(data[key]) ? data[key] : [], idx));

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

            {/* ---------------- Snapshot (Dynamic Key-Value) ---------------- */}
          <GenericSnapshotFields data={data} setData={setData} errors={errors} />

            {/* ---------------- Professional Commerce Ladder (CA/CS/CMA) ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Professional Courses</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addProfessionalLadder}>
                        <Plus size={14} className="me-1" /> Add Course
                    </button>
                </div>
            </div>

            {professionalLadder.map((item, pIdx) => (
                <div className="col-12" key={pIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Course #{pIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeProfessionalLadder(pIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-3">
                                    <label className="form-label">Key</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., ca, cs, cma"
                                        value={item.key || ""}
                                        onChange={(e) => updateProfessionalLadder(pIdx, "key", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-9">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., CA (Chartered Accountant)"
                                        value={item.title || ""}
                                        onChange={(e) => updateProfessionalLadder(pIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Focus</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="What this course focuses on"
                                        value={item.focus || ""}
                                        onChange={(e) => updateProfessionalLadder(pIdx, "focus", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Icon</label>
                                    <select
                                        className="form-control"
                                        value={item.icon || ""}
                                        onChange={(e) => updateProfessionalLadder(pIdx, "icon", e.target.value)}
                                    >
                                        <option value="">Select Icon</option>
                                        {ICON_OPTIONS.map((icon) => (
                                            <option key={icon} value={icon}>
                                                {icon}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Ladder / Levels</label>
                                    {(item.ladder || []).map((lvl, lIdx) => (
                                        <div className="input-group mb-2" key={lIdx}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Level"
                                                value={lvl || ""}
                                                onChange={(e) =>
                                                    updateProfessionalLadderItem(pIdx, "ladder", lIdx, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => removeProfessionalLadderItem(pIdx, "ladder", lIdx)}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addProfessionalLadderItem(pIdx, "ladder")}
                                    >
                                        <Plus size={14} className="me-1" /> Add Level
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Roles</label>
                                    {(item.roles || []).map((role, rIdx) => (
                                        <div className="input-group mb-2" key={rIdx}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Role"
                                                value={role || ""}
                                                onChange={(e) =>
                                                    updateProfessionalLadderItem(pIdx, "roles", rIdx, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => removeProfessionalLadderItem(pIdx, "roles", rIdx)}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addProfessionalLadderItem(pIdx, "roles")}
                                    >
                                        <Plus size={14} className="me-1" /> Add Role
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.professional_commerce_ladder && <div className="text-danger small">{errors.professional_commerce_ladder}</div>}

            {/* ---------------- Who Should Do ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Who Should Pursue These</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addWhoShouldDo}>
                        <Plus size={14} className="me-1" /> Add Option
                    </button>
                </div>
            </div>

            {whoShouldDo.map((item, wIdx) => (
                <div className="col-12" key={wIdx}>
                    <div className="row g-2">
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                value={item.title || ""}
                                onChange={(e) => updateWhoShouldDo(wIdx, "title", e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={item.desc || ""}
                                onChange={(e) => updateWhoShouldDo(wIdx, "desc", e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-control"
                                value={item.icon || ""}
                                onChange={(e) => updateWhoShouldDo(wIdx, "icon", e.target.value)}
                            >
                                <option value="">Select Icon</option>
                                {ICON_OPTIONS.map((icon) => (
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
                                onClick={() => removeWhoShouldDo(wIdx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.who_should_do && <div className="text-danger small">{errors.who_should_do}</div>}

            {/* ---------------- Choose Right ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">How to Choose</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addChooseRight}>
                        <Plus size={14} className="me-1" /> Add Option
                    </button>
                </div>
            </div>

            {chooseRight.map((item, cIdx) => (
                <div className="col-12" key={cIdx}>
                    <div className="row g-2">
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                value={item.title || ""}
                                onChange={(e) => updateChooseRight(cIdx, "title", e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={item.desc || ""}
                                onChange={(e) => updateChooseRight(cIdx, "desc", e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-control"
                                value={item.icon || ""}
                                onChange={(e) => updateChooseRight(cIdx, "icon", e.target.value)}
                            >
                                <option value="">Select Icon</option>
                                {ICON_OPTIONS.map((icon) => (
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
                                onClick={() => removeChooseRight(cIdx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.choose_right && <div className="text-danger small">{errors.choose_right}</div>}

            {/* ---------------- Common Prep ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Preparation Basics</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={() => addStringItem("common_prep")}>
                        <Plus size={14} className="me-1" /> Add Point
                    </button>
                </div>
            </div>

            <div className="col-12">
                {(Array.isArray(data.common_prep) ? data.common_prep : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Preparation tip"
                            value={item || ""}
                            onChange={(e) => updateStringItem("common_prep", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("common_prep", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                {errors?.common_prep && <div className="text-danger small">{errors.common_prep}</div>}
            </div>

            {/* ---------------- Important Notes ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Important Notes</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={() => addStringItem("important_notes")}>
                        <Plus size={14} className="me-1" /> Add Note
                    </button>
                </div>
            </div>

            <div className="col-12">
                {(Array.isArray(data.important_notes) ? data.important_notes : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Important note"
                            value={item || ""}
                            onChange={(e) => updateStringItem("important_notes", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("important_notes", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                {errors?.important_notes && <div className="text-danger small">{errors.important_notes}</div>}
            </div>

            {/* ---------------- Common Docs ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Common Documents</h5>
            </div>

            <div className="col-12">
                {(Array.isArray(data.common_docs) ? data.common_docs : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Document name"
                            value={item || ""}
                            onChange={(e) => updateStringItem("common_docs", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("common_docs", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("common_docs")}
                >
                    <Plus size={14} className="me-1" /> Add Document
                </button>
                {errors?.common_docs && <div className="text-danger small">{errors.common_docs}</div>}
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