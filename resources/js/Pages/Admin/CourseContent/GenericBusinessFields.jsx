import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Default empty structure for Generic Business Pages
// Supports: B.Com, M.Com, BBA, MBA
// ----------------------------------------------------
export const defaultContentData = (ladderFieldName = 'business_ladder') => ({
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
    [ladderFieldName]: [
        {
            title: "",
            duration: "",
            focus: "",
        },
    ],
    who_should_do: [
        {
            title: "",
            desc: "",
            icon: "",
        },
    ],
    core_areas: [""],
    eligibility_notes: [""],
    work_settings: [
        { title: "", description: "", icon: "" },
    ],
    admission_notes: [""],
    common_docs: [""],
    build_profile: [""],
    // Specialisation tracks - can be simple strings OR objects with title, desc, icon
    specialisation_tracks: [
        {
            title: "",
            desc: "",
            icon: "",
        },
    ],
    typical_roles: [""],
    next_step_options: [
        { title: "", desc: "" },
    ],
    business_types: [
        { title: "", desc: "", icon: "" },
    ],
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

export default function GenericBusinessFields({ 
    data, 
    setData, 
    errors, 
    tabs,
    ladderFieldName = 'business_ladder',
    hasWhoShouldDo = true,
    hasSpecialisations = true,
    hasCoreAreas = true,
    hasTypicalRoles = true,
    hasNextStepOptions = true,
    hasBusinessTypes = false,
    hasAdmissionNotes = true,
    pageTitle = 'Business Course'
}) {
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

   

    // ---------------- Ladder (dynamic field name) ----------------
    const ladderData = Array.isArray(data[ladderFieldName]) ? data[ladderFieldName] : [];

    const addLadderItem = () =>
        setData(ladderFieldName, [
            ...ladderData,
            { title: "", duration: "", focus: "" },
        ]);

    const removeLadderItem = (idx) =>
        setData(ladderFieldName, removeArrayItem(ladderData, idx));

    const updateLadderItem = (idx, field, value) =>
        setData(
            ladderFieldName,
            updateArrayItem(ladderData, idx, {
                ...ladderData[idx],
                [field]: value,
            })
        );

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

    // ---------------- Work Settings ----------------
    const workSettings = Array.isArray(data.work_settings) ? data.work_settings : [];

    const addWorkSetting = () =>
        setData("work_settings", [
            ...workSettings,
            { title: "", description: "", icon: "" },
        ]);

    const removeWorkSetting = (idx) =>
        setData("work_settings", removeArrayItem(workSettings, idx));

    const updateWorkSetting = (idx, field, value) =>
        setData(
            "work_settings",
            updateArrayItem(workSettings, idx, {
                ...workSettings[idx],
                [field]: value,
            })
        );

    // ---------------- Specialisation Tracks (Enhanced - with title, desc, icon) ----------------
    const specialisationTracks = Array.isArray(data.specialisation_tracks) ? data.specialisation_tracks : [];

    const addSpecialisationTrack = () =>
        setData("specialisation_tracks", [
            ...specialisationTracks,
            { title: "", desc: "", icon: "" },
        ]);

    const removeSpecialisationTrack = (idx) =>
        setData("specialisation_tracks", removeArrayItem(specialisationTracks, idx));

    const updateSpecialisationTrack = (idx, field, value) =>
        setData(
            "specialisation_tracks",
            updateArrayItem(specialisationTracks, idx, {
                ...specialisationTracks[idx],
                [field]: value,
            })
        );

    // ---------------- Typical Roles ----------------
    const typicalRoles = Array.isArray(data.typical_roles) ? data.typical_roles : [];

    const addTypicalRole = () =>
        setData("typical_roles", [...typicalRoles, ""]);

    const updateTypicalRole = (idx, value) =>
        setData("typical_roles", updateArrayItem(typicalRoles, idx, value));

    const removeTypicalRole = (idx) =>
        setData("typical_roles", removeArrayItem(typicalRoles, idx));

    // ---------------- Next Step Options ----------------
    const nextStepOptions = Array.isArray(data.next_step_options) ? data.next_step_options : [];

    const addNextStepOption = () =>
        setData("next_step_options", [
            ...nextStepOptions,
            { title: "", desc: "" },
        ]);

    const removeNextStepOption = (idx) =>
        setData("next_step_options", removeArrayItem(nextStepOptions, idx));

    const updateNextStepOption = (idx, field, value) =>
        setData(
            "next_step_options",
            updateArrayItem(nextStepOptions, idx, {
                ...nextStepOptions[idx],
                [field]: value,
            })
        );

    // ---------------- Business Types ----------------
    const businessTypes = Array.isArray(data.business_types) ? data.business_types : [];

    const addBusinessType = () =>
        setData("business_types", [
            ...businessTypes,
            { title: "", desc: "", icon: "" },
        ]);

    const removeBusinessType = (idx) =>
        setData("business_types", removeArrayItem(businessTypes, idx));

    const updateBusinessType = (idx, field, value) =>
        setData(
            "business_types",
            updateArrayItem(businessTypes, idx, {
                ...businessTypes[idx],
                [field]: value,
            })
        );

    // ---------------- String Arrays ----------------
    const addStringItem = (key) => setData(key, [...(Array.isArray(data[key]) ? data[key] : []), ""]);
    const updateStringItem = (key, idx, value) =>
        setData(key, updateArrayItem(Array.isArray(data[key]) ? data[key] : [], idx, value));
    const removeStringItem = (key, idx) =>
        setData(key, removeArrayItem(Array.isArray(data[key]) ? data[key] : [], idx));

    // ---------------- Core Areas ----------------
    const coreAreas = Array.isArray(data.core_areas) ? data.core_areas : [];

    const addCoreArea = () =>
        setData("core_areas", [...coreAreas, ""]);

    const updateCoreArea = (idx, value) =>
        setData("core_areas", updateArrayItem(coreAreas, idx, value));

    const removeCoreArea = (idx) =>
        setData("core_areas", removeArrayItem(coreAreas, idx));

    // Get ladder title
    const getLadderTitle = () => {
        const titles = {
            'business_ladder': 'Course Ladder',
            'bcom_ladder': 'B.Com Ladder',
            'mcom_ladder': 'M.Com Ladder',
            'bba_ladder': 'BBA Ladder',
            'mba_ladder': 'MBA Ladder'
        };
        return titles[ladderFieldName] || 'Course Ladder';
    };

    // Get who should do title
    const getWhoShouldDoTitle = () => {
        const titles = {
            'business_ladder': 'Who Should Consider This',
            'bcom_ladder': 'Who Should Consider B.Com',
            'mcom_ladder': 'Who Should Consider M.Com',
            'bba_ladder': 'Who Should Consider BBA',
            'mba_ladder': 'Who Should Consider MBA'
        };
        return titles[ladderFieldName] || 'Who Should Consider This';
    };

    return (
        <div className="row g-4">
            {/* ---------------- Tab / Section / Link ---------------- */}
            <div className="col-12">
                <h5 className="mb-3">Menu Linking</h5>
            </div>

            {tabs && tabs.length > 0 && (
                <div className="col-md-4">
                    <label className="form-label">Tab</label>
                    <select
                        className="form-control"
                        value={data.tab_id || ""}
                        onChange={(e) =>
                            setData({
                                ...data,
                                tab_id: e.target.value,
                                section_id: "",
                                link_id: "",
                            })
                        }
                    >
                        <option value="">Select Tab</option>
                        {tabs.map((tab) => (
                            <option key={tab.id} value={tab.id}>
                                {tab.label}
                            </option>
                        ))}
                    </select>
                    {errors?.tab_id && <div className="text-danger small">{errors.tab_id}</div>}
                </div>
            )}

            {sections.length > 0 && (
                <div className="col-md-4">
                    <label className="form-label">Section</label>
                    <select
                        className="form-control"
                        value={data.section_id || ""}
                        onChange={(e) =>
                            setData({
                                ...data,
                                section_id: e.target.value,
                                link_id: "",
                            })
                        }
                    >
                        <option value="">Select Section</option>
                        {sections.map((section) => (
                            <option key={section.id} value={section.id}>
                                {section.label}
                            </option>
                        ))}
                    </select>
                    {errors?.section_id && (
                        <div className="text-danger small">{errors.section_id}</div>
                    )}
                </div>
            )}

            {links.length > 0 && (
                <div className="col-md-4">
                    <label className="form-label">Link</label>
                    <select
                        className="form-control"
                        value={data.link_id || ""}
                        onChange={(e) => setData({ ...data, link_id: e.target.value })}
                    >
                        <option value="">Select Link</option>
                        {links.map((link) => (
                            <option key={link.id} value={link.id}>
                                {link.label}
                            </option>
                        ))}
                    </select>
                    {errors?.link_id && <div className="text-danger small">{errors.link_id}</div>}
                </div>
            )}

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

            {/* ---------------- Ladder ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">{getLadderTitle()}</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addLadderItem}>
                        <Plus size={14} className="me-1" /> Add Level
                    </button>
                </div>
            </div>

            {ladderData.map((level, lIdx) => (
                <div className="col-12" key={lIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Level #{lIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeLadderItem(lIdx)}
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
                                        placeholder="Level title"
                                        value={level.title || ""}
                                        onChange={(e) => updateLadderItem(lIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Duration"
                                        value={level.duration || ""}
                                        onChange={(e) => updateLadderItem(lIdx, "duration", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <label className="form-label">Focus</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What this level focuses on"
                                        value={level.focus || ""}
                                        onChange={(e) => updateLadderItem(lIdx, "focus", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Business Types (for B.Com) ---------------- */}
            {hasBusinessTypes && (
                <>
                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Course Types / Variants</h5>
                            <button type="button" className="btn btn-sm btn-primary" onClick={addBusinessType}>
                                <Plus size={14} className="me-1" /> Add Type
                            </button>
                        </div>
                    </div>

                    {businessTypes.map((item, bIdx) => (
                        <div className="col-12" key={bIdx}>
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        value={item.title || ""}
                                        onChange={(e) => updateBusinessType(bIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        value={item.desc || ""}
                                        onChange={(e) => updateBusinessType(bIdx, "desc", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <select
                                        className="form-control"
                                        value={item.icon || ""}
                                        onChange={(e) => updateBusinessType(bIdx, "icon", e.target.value)}
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
                                        onClick={() => removeBusinessType(bIdx)}
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {errors?.business_types && <div className="text-danger small">{errors.business_types}</div>}
                </>
            )}

            {/* ---------------- Who Should Do ---------------- */}
            {hasWhoShouldDo && (
                <>
                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">{getWhoShouldDoTitle()}</h5>
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
                </>
            )}

            {/* ---------------- Core Areas ---------------- */}
            {hasCoreAreas && (
                <>
                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Core Areas</h5>
                            <button type="button" className="btn btn-sm btn-primary" onClick={addCoreArea}>
                                <Plus size={14} className="me-1" /> Add Area
                            </button>
                        </div>
                    </div>

                    <div className="col-12">
                        {coreAreas.map((item, idx) => (
                            <div className="input-group mb-2" key={idx}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Core area"
                                    value={item || ""}
                                    onChange={(e) => updateCoreArea(idx, e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeCoreArea(idx)}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                        {errors?.core_areas && <div className="text-danger small">{errors.core_areas}</div>}
                    </div>
                </>
            )}

            {/* ---------------- Typical Roles ---------------- */}
            {hasTypicalRoles && (
                <>
                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Typical Roles</h5>
                            <button type="button" className="btn btn-sm btn-primary" onClick={addTypicalRole}>
                                <Plus size={14} className="me-1" /> Add Role
                            </button>
                        </div>
                    </div>

                    <div className="col-12">
                        {typicalRoles.map((item, idx) => (
                            <div className="input-group mb-2" key={idx}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Typical role"
                                    value={item || ""}
                                    onChange={(e) => updateTypicalRole(idx, e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeTypicalRole(idx)}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                        {errors?.typical_roles && <div className="text-danger small">{errors.typical_roles}</div>}
                    </div>
                </>
            )}

            {/* ---------------- Specialisation Tracks (Enhanced) ---------------- */}
            {hasSpecialisations && (
                <>
                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Specialisation Tracks</h5>
                            <button type="button" className="btn btn-sm btn-primary" onClick={addSpecialisationTrack}>
                                <Plus size={14} className="me-1" /> Add Track
                            </button>
                        </div>
                    </div>

                    {specialisationTracks.map((item, idx) => (
                        <div className="col-12" key={idx}>
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        value={item.title || ""}
                                        onChange={(e) => updateSpecialisationTrack(idx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        value={item.desc || ""}
                                        onChange={(e) => updateSpecialisationTrack(idx, "desc", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <select
                                        className="form-control"
                                        value={item.icon || ""}
                                        onChange={(e) => updateSpecialisationTrack(idx, "icon", e.target.value)}
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
                                        onClick={() => removeSpecialisationTrack(idx)}
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {errors?.specialisation_tracks && <div className="text-danger small">{errors.specialisation_tracks}</div>}
                </>
            )}

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

            {/* ---------------- Work Settings ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Work Settings</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addWorkSetting}>
                        <Plus size={14} className="me-1" /> Add Setting
                    </button>
                </div>
            </div>

            {workSettings.map((setting, wIdx) => (
                <div className="col-12" key={wIdx}>
                    <div className="row g-2">
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Setting title"
                                value={setting.title || ""}
                                onChange={(e) => updateWorkSetting(wIdx, "title", e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={setting.description || ""}
                                onChange={(e) => updateWorkSetting(wIdx, "description", e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-control"
                                value={setting.icon || ""}
                                onChange={(e) => updateWorkSetting(wIdx, "icon", e.target.value)}
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
                                onClick={() => removeWorkSetting(wIdx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.work_settings && <div className="text-danger small">{errors.work_settings}</div>}

            {/* ---------------- Next Step Options ---------------- */}
            {hasNextStepOptions && (
                <>
                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Next Step Options</h5>
                            <button type="button" className="btn btn-sm btn-primary" onClick={addNextStepOption}>
                                <Plus size={14} className="me-1" /> Add Option
                            </button>
                        </div>
                    </div>

                    {nextStepOptions.map((item, nIdx) => (
                        <div className="col-12" key={nIdx}>
                            <div className="row g-2">
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        value={item.title || ""}
                                        onChange={(e) => updateNextStepOption(nIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        value={item.desc || ""}
                                        onChange={(e) => updateNextStepOption(nIdx, "desc", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-1">
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger w-100"
                                        onClick={() => removeNextStepOption(nIdx)}
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {errors?.next_step_options && <div className="text-danger small">{errors.next_step_options}</div>}
                </>
            )}

            {/* ---------------- Admission Notes ---------------- */}
            {hasAdmissionNotes && (
                <>
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
                </>
            )}

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