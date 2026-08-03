import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Default empty structure for Naturopathy & Yoga Page
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
    naturopathy_ladder: [
        {
            title: "",
            duration: "",
            focus: "",
        },
    ],
    what_you_do: [
        {
            title: "",
            desc: "",
        },
    ],
    eligibility_notes: [""],
    where_you_work: [
        { title: "", description: "" },
    ],
    admission_notes: [""],
    common_docs: [""],
    build_profile: [""],
    sort_order: 0,
    is_active: true,
});

// Helper functions
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

export default function NaturopathyYogaFields({ data, setData, errors, tabs }) {
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
   

    // ---------------- Naturopathy Ladder ----------------
    const naturopathyLadder = Array.isArray(data.naturopathy_ladder) ? data.naturopathy_ladder : [];

    const addNaturopathyLadder = () =>
        setData("naturopathy_ladder", [
            ...naturopathyLadder,
            { title: "", duration: "", focus: "" },
        ]);

    const removeNaturopathyLadder = (idx) =>
        setData("naturopathy_ladder", removeArrayItem(naturopathyLadder, idx));

    const updateNaturopathyLadder = (idx, field, value) =>
        setData(
            "naturopathy_ladder",
            updateArrayItem(naturopathyLadder, idx, {
                ...naturopathyLadder[idx],
                [field]: value,
            })
        );

    // ---------------- What You Do ----------------
    const whatYouDo = Array.isArray(data.what_you_do) ? data.what_you_do : [];

    const addWhatYouDo = () =>
        setData("what_you_do", [
            ...whatYouDo,
            { title: "", desc: "" },
        ]);

    const removeWhatYouDo = (idx) =>
        setData("what_you_do", removeArrayItem(whatYouDo, idx));

    const updateWhatYouDo = (idx, field, value) =>
        setData(
            "what_you_do",
            updateArrayItem(whatYouDo, idx, {
                ...whatYouDo[idx],
                [field]: value,
            })
        );

    // ---------------- Where You Work ----------------
    const whereYouWork = Array.isArray(data.where_you_work) ? data.where_you_work : [];

    const addWhereYouWork = () =>
        setData("where_you_work", [
            ...whereYouWork,
            { title: "", description: "" },
        ]);

    const removeWhereYouWork = (idx) =>
        setData("where_you_work", removeArrayItem(whereYouWork, idx));

    const updateWhereYouWork = (idx, field, value) =>
        setData(
            "where_you_work",
            updateArrayItem(whereYouWork, idx, {
                ...whereYouWork[idx],
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

            {/* ---------------- Snapshot ---------------- */}
           <GenericSnapshotFields data={data} setData={setData} errors={errors} />

            {/* ---------------- Naturopathy Ladder ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Course Pathways</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addNaturopathyLadder}>
                        <Plus size={14} className="me-1" /> Add Level
                    </button>
                </div>
            </div>

            {naturopathyLadder.map((level, lIdx) => (
                <div className="col-12" key={lIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Level #{lIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeNaturopathyLadder(lIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Certificate / Diploma (Entry routes)"
                                        value={level.title || ""}
                                        onChange={(e) => updateNaturopathyLadder(lIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., 3 Months – 2 Years"
                                        value={level.duration || ""}
                                        onChange={(e) => updateNaturopathyLadder(lIdx, "duration", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <label className="form-label">Focus</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What this level focuses on"
                                        value={level.focus || ""}
                                        onChange={(e) => updateNaturopathyLadder(lIdx, "focus", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- What You Do ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">What You Do</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addWhatYouDo}>
                        <Plus size={14} className="me-1" /> Add Activity
                    </button>
                </div>
            </div>

            {whatYouDo.map((item, wIdx) => (
                <div className="col-12" key={wIdx}>
                    <div className="row g-2">
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                value={item.title || ""}
                                onChange={(e) => updateWhatYouDo(wIdx, "title", e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={item.desc || ""}
                                onChange={(e) => updateWhatYouDo(wIdx, "desc", e.target.value)}
                            />
                        </div>
                        <div className="col-md-1">
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100"
                                onClick={() => removeWhatYouDo(wIdx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.what_you_do && <div className="text-danger small">{errors.what_you_do}</div>}

            {/* ---------------- Eligibility Notes ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Eligibility Notes</h5>
            </div>

            <div className="col-12">
                {(Array.isArray(data.eligibility_notes) ? data.eligibility_notes : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Eligibility note"
                            value={item || ""}
                            onChange={(e) => updateStringItem("eligibility_notes", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("eligibility_notes", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("eligibility_notes")}
                >
                    <Plus size={14} className="me-1" /> Add Note
                </button>
                {errors?.eligibility_notes && <div className="text-danger small">{errors.eligibility_notes}</div>}
            </div>

            {/* ---------------- Where You Work ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Where You Work</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addWhereYouWork}>
                        <Plus size={14} className="me-1" /> Add Setting
                    </button>
                </div>
            </div>

            {whereYouWork.map((setting, wIdx) => (
                <div className="col-12" key={wIdx}>
                    <div className="row g-2">
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Setting title"
                                value={setting.title || ""}
                                onChange={(e) => updateWhereYouWork(wIdx, "title", e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={setting.description || ""}
                                onChange={(e) => updateWhereYouWork(wIdx, "description", e.target.value)}
                            />
                        </div>
                        <div className="col-md-1">
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100"
                                onClick={() => removeWhereYouWork(wIdx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.where_you_work && <div className="text-danger small">{errors.where_you_work}</div>}

            {/* ---------------- Admission Notes ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Admission Notes</h5>
            </div>

            <div className="col-12">
                {(Array.isArray(data.admission_notes) ? data.admission_notes : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Admission note"
                            value={item || ""}
                            onChange={(e) => updateStringItem("admission_notes", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("admission_notes", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("admission_notes")}
                >
                    <Plus size={14} className="me-1" /> Add Note
                </button>
                {errors?.admission_notes && <div className="text-danger small">{errors.admission_notes}</div>}
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

            {/* ---------------- Build Profile ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Build Your Profile</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={() => addStringItem("build_profile")}>
                        <Plus size={14} className="me-1" /> Add Point
                    </button>
                </div>
            </div>

            <div className="col-12">
                {(Array.isArray(data.build_profile) ? data.build_profile : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Profile building point"
                            value={item || ""}
                            onChange={(e) => updateStringItem("build_profile", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("build_profile", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                {errors?.build_profile && <div className="text-danger small">{errors.build_profile}</div>}
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