import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Default empty structure for Degree Pages
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
    subject_families: [
        {
            title: "",
            items: [""],
        },
    ],
    degree_options: [
        {
            id: "",
            title: "",
            description: "",
            tag: "",
            level: "",
            icon: "",
        },
    ],
    course_groups: [
        {
            id: "",
            title: "",
            caption: "",
            courses: [{ name: "", icon: "" }],
        },
    ],
    after_degree: [
        {
            title: "",
            desc: "",
            points: [""],
        },
    ],
    admission_points: [""],
    documents: [""],
    careers_snapshot: [
        { title: "", description: "" },
    ],
    sort_order: 0,
    is_active: true,
});

// Helper functions
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

// Icon options — must match the icon lookup used on the frontend page
// (e.g. ArtsDegree.jsx's ICON_MAP) so every icon picked here renders.
const ICON_OPTIONS = [
    "BookOpen", "GraduationCap", "Landmark", "Scale", "Users",
    "ClipboardList", "Sparkles", "Layers3", "Calculator",
    "Briefcase", "PieChart", "Cpu", "Code2", "Monitor", "Database",
    "Globe", "Palette", "HardDrive", "CircuitBoard"
];

export default function DegreeFields({ data, setData, errors, tabs }) {
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
   

    // ---------------- Subject Families ----------------
    const subjectFamilies = data.subject_families || [];

    const addSubjectFamily = () =>
        setData("subject_families", [
            ...subjectFamilies,
            { title: "", items: [""] },
        ]);

    const removeSubjectFamily = (idx) =>
        setData("subject_families", removeArrayItem(subjectFamilies, idx));

    const updateSubjectFamily = (idx, field, value) =>
        setData(
            "subject_families",
            updateArrayItem(subjectFamilies, idx, {
                ...subjectFamilies[idx],
                [field]: value,
            })
        );

    const addSubjectItem = (sIdx) => {
        const family = subjectFamilies[sIdx];
        updateSubjectFamily(sIdx, "items", [...(family.items || []), ""]);
    };

    const updateSubjectItem = (sIdx, iIdx, value) => {
        const family = subjectFamilies[sIdx];
        const newItems = updateArrayItem(family.items || [], iIdx, value);
        updateSubjectFamily(sIdx, "items", newItems);
    };

    const removeSubjectItem = (sIdx, iIdx) => {
        const family = subjectFamilies[sIdx];
        updateSubjectFamily(sIdx, "items", removeArrayItem(family.items || [], iIdx));
    };

    // ---------------- Degree Options ----------------
    const degreeOptions = data.degree_options || [];

    const addDegreeOption = () =>
        setData("degree_options", [
            ...degreeOptions,
            { id: "", title: "", description: "", tag: "", level: "", icon: "" },
        ]);

    const removeDegreeOption = (idx) =>
        setData("degree_options", removeArrayItem(degreeOptions, idx));

    const updateDegreeOption = (idx, field, value) =>
        setData(
            "degree_options",
            updateArrayItem(degreeOptions, idx, {
                ...degreeOptions[idx],
                [field]: value,
            })
        );

    // ---------------- Course Groups ----------------
    const courseGroups = data.course_groups || [];

    const addCourseGroup = () =>
        setData("course_groups", [
            ...courseGroups,
            { id: "", title: "", caption: "", courses: [{ name: "", icon: "" }] },
        ]);

    const removeCourseGroup = (idx) =>
        setData("course_groups", removeArrayItem(courseGroups, idx));

    const updateCourseGroup = (idx, field, value) =>
        setData(
            "course_groups",
            updateArrayItem(courseGroups, idx, {
                ...courseGroups[idx],
                [field]: value,
            })
        );

    const addCourse = (gIdx) => {
        const group = courseGroups[gIdx];
        updateCourseGroup(gIdx, "courses", [...(group.courses || []), { name: "", icon: "" }]);
    };

    const updateCourse = (gIdx, cIdx, field, value) => {
        const group = courseGroups[gIdx];
        const newCourses = updateArrayItem(group.courses || [], cIdx, {
            ...(group.courses || [])[cIdx],
            [field]: value,
        });
        updateCourseGroup(gIdx, "courses", newCourses);
    };

    const removeCourse = (gIdx, cIdx) => {
        const group = courseGroups[gIdx];
        updateCourseGroup(gIdx, "courses", removeArrayItem(group.courses || [], cIdx));
    };

    // ---------------- After Degree ----------------
    const afterDegree = data.after_degree || [];

    const addAfterDegree = () =>
        setData("after_degree", [
            ...afterDegree,
            { title: "", desc: "", points: [""] },
        ]);

    const removeAfterDegree = (idx) =>
        setData("after_degree", removeArrayItem(afterDegree, idx));

    const updateAfterDegree = (idx, field, value) =>
        setData(
            "after_degree",
            updateArrayItem(afterDegree, idx, {
                ...afterDegree[idx],
                [field]: value,
            })
        );

    const addAfterDegreePoint = (aIdx) => {
        const item = afterDegree[aIdx];
        updateAfterDegree(aIdx, "points", [...(item.points || []), ""]);
    };

    const updateAfterDegreePoint = (aIdx, pIdx, value) => {
        const item = afterDegree[aIdx];
        const newPoints = updateArrayItem(item.points || [], pIdx, value);
        updateAfterDegree(aIdx, "points", newPoints);
    };

    const removeAfterDegreePoint = (aIdx, pIdx) => {
        const item = afterDegree[aIdx];
        updateAfterDegree(aIdx, "points", removeArrayItem(item.points || [], pIdx));
    };

    // ---------------- Admission Points / Documents ----------------
    const addStringItem = (key) => setData(key, [...(data[key] || []), ""]);
    const updateStringItem = (key, idx, value) =>
        setData(key, updateArrayItem(data[key] || [], idx, value));
    const removeStringItem = (key, idx) =>
        setData(key, removeArrayItem(data[key] || [], idx));

    // ---------------- Careers Snapshot ----------------
    const careersSnapshot = data.careers_snapshot || [];

    const addCareerSnapshot = () =>
        setData("careers_snapshot", [
            ...careersSnapshot,
            { title: "", description: "" },
        ]);

    const removeCareerSnapshot = (idx) =>
        setData("careers_snapshot", removeArrayItem(careersSnapshot, idx));

    const updateCareerSnapshot = (idx, field, value) =>
        setData(
            "careers_snapshot",
            updateArrayItem(careersSnapshot, idx, {
                ...careersSnapshot[idx],
                [field]: value,
            })
        );

    return (
        <div className="row g-4">
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

            {/* ---------------- Subject Families ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Subject Families</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addSubjectFamily}>
                        <Plus size={14} className="me-1" /> Add Family
                    </button>
                </div>
            </div>

            {subjectFamilies.map((family, sIdx) => (
                <div className="col-12" key={sIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Family #{sIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeSubjectFamily(sIdx)}
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
                                        placeholder="e.g., Languages & Literature"
                                        value={family.title || ""}
                                        onChange={(e) => updateSubjectFamily(sIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Items</label>
                                    {(family.items || []).map((item, iIdx) => (
                                        <div className="input-group mb-2" key={iIdx}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject name"
                                                value={item || ""}
                                                onChange={(e) =>
                                                    updateSubjectItem(sIdx, iIdx, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => removeSubjectItem(sIdx, iIdx)}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addSubjectItem(sIdx)}
                                    >
                                        <Plus size={14} className="me-1" /> Add Subject
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Degree Options ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Degree Options</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addDegreeOption}>
                        <Plus size={14} className="me-1" /> Add Option
                    </button>
                </div>
                <p className="text-muted small mb-3">
                    Each option here renders as its own full section on the page (title, description,
                    tag, level and icon).
                </p>
            </div>

            {degreeOptions.map((option, oIdx) => (
                <div className="col-12" key={oIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Option #{oIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeDegreeOption(oIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-3">
                                    <label className="form-label">ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., ba-general"
                                        value={option.id || ""}
                                        onChange={(e) => updateDegreeOption(oIdx, "id", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Tag</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., BA"
                                        value={option.tag || ""}
                                        onChange={(e) => updateDegreeOption(oIdx, "tag", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Level</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., UG"
                                        value={option.level || ""}
                                        onChange={(e) => updateDegreeOption(oIdx, "level", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Icon</label>
                                    <select
                                        className="form-control"
                                        value={option.icon || ""}
                                        onChange={(e) => updateDegreeOption(oIdx, "icon", e.target.value)}
                                    >
                                        <option value="">Select Icon</option>
                                        {ICON_OPTIONS.map((icon) => (
                                            <option key={icon} value={icon}>
                                                {icon}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., B.A (General)"
                                        value={option.title || ""}
                                        onChange={(e) => updateDegreeOption(oIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Course description"
                                        value={option.description || ""}
                                        onChange={(e) => updateDegreeOption(oIdx, "description", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Course Groups ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Course Groups</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addCourseGroup}>
                        <Plus size={14} className="me-1" /> Add Group
                    </button>
                </div>
            </div>

            {courseGroups.map((group, gIdx) => (
                <div className="col-12" key={gIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Group #{gIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeCourseGroup(gIdx)}
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
                                        placeholder="e.g., core-computer"
                                        value={group.id || ""}
                                        onChange={(e) => updateCourseGroup(gIdx, "id", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Group title"
                                        value={group.title || ""}
                                        onChange={(e) => updateCourseGroup(gIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Caption</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Brief description"
                                        value={group.caption || ""}
                                        onChange={(e) => updateCourseGroup(gIdx, "caption", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Courses</label>
                                    {(group.courses || []).map((course, cIdx) => (
                                        <div className="row g-2 mb-2" key={cIdx}>
                                            <div className="col-md-7">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Course name"
                                                    value={course.name || ""}
                                                    onChange={(e) =>
                                                        updateCourse(gIdx, cIdx, "name", e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <select
                                                    className="form-control"
                                                    value={course.icon || ""}
                                                    onChange={(e) =>
                                                        updateCourse(gIdx, cIdx, "icon", e.target.value)
                                                    }
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
                                                    onClick={() => removeCourse(gIdx, cIdx)}
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addCourse(gIdx)}
                                    >
                                        <Plus size={14} className="me-1" /> Add Course
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- After Degree ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">After Degree: Next Steps</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addAfterDegree}>
                        <Plus size={14} className="me-1" /> Add Option
                    </button>
                </div>
            </div>

            {afterDegree.map((item, aIdx) => (
                <div className="col-12" key={aIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Option #{aIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeAfterDegree(aIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Higher Studies"
                                        value={item.title || ""}
                                        onChange={(e) => updateAfterDegree(aIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Brief description"
                                        value={item.desc || ""}
                                        onChange={(e) => updateAfterDegree(aIdx, "desc", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Points</label>
                                    {(item.points || []).map((point, pIdx) => (
                                        <div className="input-group mb-2" key={pIdx}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Point"
                                                value={point || ""}
                                                onChange={(e) =>
                                                    updateAfterDegreePoint(aIdx, pIdx, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => removeAfterDegreePoint(aIdx, pIdx)}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addAfterDegreePoint(aIdx)}
                                    >
                                        <Plus size={14} className="me-1" /> Add Point
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Admission Points ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Admission Points</h5>
            </div>

            <div className="col-12">
                {(data.admission_points || []).map((point, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Admission point"
                            value={point || ""}
                            onChange={(e) => updateStringItem("admission_points", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("admission_points", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("admission_points")}
                >
                    <Plus size={14} className="me-1" /> Add Point
                </button>
                {errors?.admission_points && <div className="text-danger small">{errors.admission_points}</div>}
            </div>

            {/* ---------------- Documents ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Documents Checklist</h5>
            </div>

            <div className="col-12">
                {(data.documents || []).map((doc, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Document name"
                            value={doc || ""}
                            onChange={(e) => updateStringItem("documents", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("documents", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("documents")}
                >
                    <Plus size={14} className="me-1" /> Add Document
                </button>
                {errors?.documents && <div className="text-danger small">{errors.documents}</div>}
            </div>

            {/* ---------------- Careers Snapshot ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Careers Snapshot</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addCareerSnapshot}>
                        <Plus size={14} className="me-1" /> Add Career
                    </button>
                </div>
            </div>

            {careersSnapshot.map((career, cIdx) => (
                <div className="col-12" key={cIdx}>
                    <div className="row g-2">
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Career title"
                                value={career.title || ""}
                                onChange={(e) => updateCareerSnapshot(cIdx, "title", e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={career.description || ""}
                                onChange={(e) => updateCareerSnapshot(cIdx, "description", e.target.value)}
                            />
                        </div>
                        <div className="col-md-1">
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100"
                                onClick={() => removeCareerSnapshot(cIdx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.careers_snapshot && <div className="text-danger small">{errors.careers_snapshot}</div>}

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
