import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Default empty structure — used by Create.jsx
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
    sectors: [
        {
            code: "",
            title: "",
            description: "",
            courses: [""],
        },
    ],
    admission_heading: "",
    admission_description: "",
    admission_info: [""],
    next_steps: [""],
    skill_agencies: [
        {
            title: "",
            subtitle: "",
            links: [{ label: "", url: "" }],
        },
    ],
    sort_order: 0,
    is_active: true,
});

// small helpers to update nested arrays immutably
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

// `tabs` = menu tree (Tab -> Section -> Link), same shape used by
// CareerAfterClass8Fields: [{ id, label, children: [{ id, label, children: [{id,label}] }] }]
export default function CourseContentFields({ data, setData, errors, tabs }) {
    const set = (key, value) => setData(key, value);

    // ---------------- Tab / Section / Link (cascading dropdowns) ----------------
    const selectedTab = useMemo(
        () => tabs?.find((tab) => String(tab.id) === String(data.tab_id)),
        [tabs, data.tab_id]
    );

   const sections = selectedTab?.sections || [];

  const selectedSection = useMemo(
    () => sections.find(section => String(section.id) === String(data.section_id)),
    [sections, data.section_id]
);

const links = selectedSection?.links || [];

    // ---------------- Snapshot ----------------


    // ---------------- Sectors ----------------
    const addSector = () =>
        setData("sectors", [
            ...data.sectors,
            { code: "", title: "", description: "", courses: [""] },
        ]);

    const removeSector = (idx) =>
        setData("sectors", removeArrayItem(data.sectors, idx));

    const updateSector = (idx, field, value) =>
        setData(
            "sectors",
            updateArrayItem(data.sectors, idx, { ...data.sectors[idx], [field]: value })
        );

    const addSectorCourse = (sIdx) => {
        const sector = data.sectors[sIdx];
        updateSector(sIdx, "courses", [...sector.courses, ""]);
    };

    const updateSectorCourse = (sIdx, cIdx, value) => {
        const sector = data.sectors[sIdx];
        updateSector(sIdx, "courses", updateArrayItem(sector.courses, cIdx, value));
    };

    const removeSectorCourse = (sIdx, cIdx) => {
        const sector = data.sectors[sIdx];
        updateSector(sIdx, "courses", removeArrayItem(sector.courses, cIdx));
    };

    // ---------------- Admission info / next steps (simple string arrays) ----------------
    const addStringItem = (key) => setData(key, [...data[key], ""]);
    const updateStringItem = (key, idx, value) =>
        setData(key, updateArrayItem(data[key], idx, value));
    const removeStringItem = (key, idx) =>
        setData(key, removeArrayItem(data[key], idx));

    // ---------------- Skill agencies ----------------
    const addAgency = () =>
        setData("skill_agencies", [
            ...data.skill_agencies,
            { title: "", subtitle: "", links: [{ label: "", url: "" }] },
        ]);

    const removeAgency = (idx) =>
        setData("skill_agencies", removeArrayItem(data.skill_agencies, idx));

    const updateAgency = (idx, field, value) =>
        setData(
            "skill_agencies",
            updateArrayItem(data.skill_agencies, idx, {
                ...data.skill_agencies[idx],
                [field]: value,
            })
        );

    const addAgencyLink = (aIdx) => {
        const agency = data.skill_agencies[aIdx];
        updateAgency(aIdx, "links", [...agency.links, { label: "", url: "" }]);
    };

    const updateAgencyLink = (aIdx, lIdx, field, value) => {
        const agency = data.skill_agencies[aIdx];
        const newLinks = updateArrayItem(agency.links, lIdx, {
            ...agency.links[lIdx],
            [field]: value,
        });
        updateAgency(aIdx, "links", newLinks);
    };

    const removeAgencyLink = (aIdx, lIdx) => {
        const agency = data.skill_agencies[aIdx];
        updateAgency(aIdx, "links", removeArrayItem(agency.links, lIdx));
    };

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
            </div>

            <div className="col-12">
                <label className="form-label">Intro Description</label>
                <textarea
                    className="form-control"
                    rows={3}
                    value={data.intro_description || ""}
                    onChange={(e) => set("intro_description", e.target.value)}
                />
            </div>

            <div className="col-12">
                <label className="form-label">Intro Description (secondary paragraph)</label>
                <textarea
                    className="form-control"
                    rows={2}
                    value={data.intro_description_secondary || ""}
                    onChange={(e) => set("intro_description_secondary", e.target.value)}
                />
            </div>

            {/* ---------------- Snapshot ---------------- */}
          

          <GenericSnapshotFields data={data} setData={setData} errors={errors} />

            {/* ---------------- Sectors ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Sectors</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addSector}>
                        <Plus size={14} className="me-1" /> Add Sector
                    </button>
                </div>
            </div>

            {data.sectors.map((sector, sIdx) => (
                <div className="col-12" key={sIdx}>
                    <div className="card mb-2">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start">
                                <h6>Sector #{sIdx + 1}</h6>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => removeSector(sIdx)}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>

                            <div className="row g-2">
                                <div className="col-md-2">
                                    <label className="form-label small">Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="ET"
                                        value={sector.code}
                                        onChange={(e) => updateSector(sIdx, "code", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label small">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={sector.title}
                                        onChange={(e) => updateSector(sIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={sector.description}
                                        onChange={(e) =>
                                            updateSector(sIdx, "description", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label small mt-2">Courses</label>
                                    {sector.courses.map((course, cIdx) => (
                                        <div className="input-group mb-2" key={cIdx}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={course}
                                                onChange={(e) =>
                                                    updateSectorCourse(sIdx, cIdx, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => removeSectorCourse(sIdx, cIdx)}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addSectorCourse(sIdx)}
                                    >
                                        <Plus size={14} className="me-1" /> Add Course
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Admission ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Admission & Where to Study</h5>
            </div>

            <div className="col-md-6">
                <label className="form-label">Section Heading</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.admission_heading || ""}
                    onChange={(e) => set("admission_heading", e.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Section Description</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.admission_description || ""}
                    onChange={(e) => set("admission_description", e.target.value)}
                />
            </div>

            <div className="col-md-6">
                <label className="form-label">Admission Info (bullet points)</label>
                {data.admission_info.map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            value={item}
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
            </div>

            <div className="col-md-6">
                <label className="form-label">Simple Next Steps (ordered list)</label>
                {data.next_steps.map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            value={item}
                            onChange={(e) => updateStringItem("next_steps", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("next_steps", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("next_steps")}
                >
                    <Plus size={14} className="me-1" /> Add Step
                </button>
            </div>

            {/* ---------------- Skill agencies ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Key Skill Agencies</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addAgency}>
                        <Plus size={14} className="me-1" /> Add Agency
                    </button>
                </div>
            </div>

            {data.skill_agencies.map((agency, aIdx) => (
                <div className="col-12" key={aIdx}>
                    <div className="card mb-2">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start">
                                <h6>Agency #{aIdx + 1}</h6>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => removeAgency(aIdx)}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>

                            <div className="row g-2">
                                <div className="col-md-6">
                                    <label className="form-label small">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={agency.title}
                                        onChange={(e) => updateAgency(aIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small">Subtitle</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={agency.subtitle}
                                        onChange={(e) =>
                                            updateAgency(aIdx, "subtitle", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label small mt-2">Links</label>
                                    {agency.links.map((link, lIdx) => (
                                        <div className="row g-2 mb-2" key={lIdx}>
                                            <div className="col-md-5">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Label"
                                                    value={link.label}
                                                    onChange={(e) =>
                                                        updateAgencyLink(
                                                            aIdx,
                                                            lIdx,
                                                            "label",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="https://..."
                                                    value={link.url}
                                                    onChange={(e) =>
                                                        updateAgencyLink(
                                                            aIdx,
                                                            lIdx,
                                                            "url",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-1">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger w-100"
                                                    onClick={() => removeAgencyLink(aIdx, lIdx)}
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addAgencyLink(aIdx)}
                                    >
                                        <Plus size={14} className="me-1" /> Add Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Meta ---------------- */}
            <div className="col-12">
                <hr />
            </div>

            <div className="col-md-3">
                <label className="form-label">Sort Order</label>
                <input
                    type="number"
                    className="form-control"
                    value={data.sort_order}
                    onChange={(e) => set("sort_order", Number(e.target.value))}
                />
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
