import React, { useMemo } from "react";

export const emptyEducationPath = () => ({
    type: "",
    title: "",
    description: "",
    options: [""],
    features: [""],
    contact: "",
});

export const emptyVocationalCourse = () => ({
    title: "",
    duration: "",
    institutes: [""],
});

export const emptyKeyInstructions = () => ({
    instructions: [""],
});

export const defaultContentData = () => ({
    menu_id: "",
    tab_id: "",
    section_id: "",
    link_id: "",

    education_pathways: [emptyEducationPath()],
    vocational_courses: [emptyVocationalCourse()],
    key_instructions_eligibility: emptyKeyInstructions(),

    is_active: true,
});

// ---------------- Stable, top-level sub components ----------------

const RepeatableCard = ({ title, onRemove, disableRemove, children }) => (
    <div className="card mb-3">
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <strong>{title}</strong>
                <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={onRemove}
                    disabled={disableRemove}
                >
                    Remove
                </button>
            </div>
            {children}
        </div>
    </div>
);

const StringListField = ({ label, values, onChange, onAdd, onRemove }) => (
    <div className="form-group mt-3">
        <label>{label}</label>

        {values && values.map((value, idx) => (
            <div className="input-group mb-2" key={idx}>
                <input
                    type="text"
                    className="form-control"
                    value={value}
                    onChange={(e) => onChange(idx, e.target.value)}
                />
                <div className="input-group-append">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => onRemove(idx)}
                        disabled={values.length === 1}
                    >
                        Remove
                    </button>
                </div>
            </div>
        ))}

        <button type="button" className="btn btn-sm btn-outline-primary" onClick={onAdd}>
            + Add {label}
        </button>
    </div>
);

const SubStringListField = ({ subLabel, values, onChange, onAdd, onRemove }) => (
    <div className="mt-2">
        <label className="small font-weight-bold">{subLabel}</label>

        {values && values.map((value, idx) => (
            <div className="input-group mb-1" key={idx}>
                <input
                    type="text"
                    className="form-control"
                    value={value}
                    onChange={(e) => onChange(idx, e.target.value)}
                />
                <div className="input-group-append">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => onRemove(idx)}
                        disabled={values.length === 1}
                    >
                        &times;
                    </button>
                </div>
            </div>
        ))}

        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onAdd}>
            + Add {subLabel}
        </button>
    </div>
);

// New component for Key Instructions only
const KeyInstructionsField = ({ data, setData }) => {
    const updateInstruction = (index, value) => {
        const instructions = [...data.instructions];
        instructions[index] = value;
        setData('key_instructions_eligibility', {
            ...data,
            instructions,
        });
    };

    const addInstruction = () => {
        const instructions = [...data.instructions, ""];
        setData('key_instructions_eligibility', {
            ...data,
            instructions,
        });
    };

    const removeInstruction = (index) => {
        const instructions = [...data.instructions];
        instructions.splice(index, 1);
        if (instructions.length === 0) {
            instructions.push("");
        }
        setData('key_instructions_eligibility', {
            ...data,
            instructions,
        });
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="mb-3">Key Instructions & Eligibility</h5>
                
                <div className="form-group">
                    <label>Instructions</label>
                    <div className="small text-muted mb-2">
                        Add important instructions for students
                    </div>
                    {data.instructions && data.instructions.map((instruction, idx) => (
                        <div className="input-group mb-2" key={idx}>
                            <textarea
                                className="form-control"
                                rows="2"
                                value={instruction}
                                onChange={(e) => updateInstruction(idx, e.target.value)}
                                placeholder="Enter instruction..."
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeInstruction(idx)}
                                    disabled={data.instructions.length === 1}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                        onClick={addInstruction}
                    >
                        + Add Instruction
                    </button>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------------------
// Main fields block
// ---------------------------------------------------------------------

const CareerAfterClass8Fields = ({ data, setData, errors, tabs }) => {
    // Ensure data has all required fields with defaults
    const safeData = {
        ...defaultContentData(),
        ...data,
        education_pathways: data?.education_pathways || [emptyEducationPath()],
        vocational_courses: data?.vocational_courses || [emptyVocationalCourse()],
        key_instructions_eligibility: data?.key_instructions_eligibility || emptyKeyInstructions(),
    };

    const selectedTab = useMemo(
        () => tabs?.find((tab) => String(tab.id) === String(safeData.tab_id)),
        [tabs, safeData.tab_id]
    );

    const sections = selectedTab?.children || [];

    const selectedSection = useMemo(() => {
        let found = sections.find(
            (section) => String(section.id) === String(safeData.section_id)
        );

        if (!found && safeData.link_id) {
            found = sections.find(
                (section) =>
                    Array.isArray(section.children) &&
                    section.children.some(
                        (child) => String(child.id) === String(safeData.link_id)
                    )
            );
        }

        return found;
    }, [sections, safeData.section_id, safeData.link_id]);

    const isStringArrayField = (field) =>
        field === "industries" || field === "role_examples";

    const templateFor = (field) => {
        switch (field) {
            case "branch_groups":
                return emptyBranchGroup;
            case "pathways":
                return emptyPathway;
            case "courses":
                return emptyCourse;
            case "exams":
                return emptyExam;
            case "institute_links":
                return emptyInstituteLink;
            default:
                return () => "";
        }
    };

    const addItem = (field, template) => {
        const currentData = safeData[field] || [];
        setData(field, [...currentData, template()]);
    };

    const removeItem = (field, index) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        updated.splice(index, 1);

        if (updated.length === 0) {
            updated.push(isStringArrayField(field) ? "" : templateFor(field)());
        }

        setData(field, updated);
    };

    const updateObjectItem = (field, index, key, value) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        updated[index] = { ...updated[index], [key]: value };
        setData(field, updated);
    };

    const updateStringItem = (field, index, value) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        updated[index] = value;
        setData(field, updated);
    };

    const addSubItem = (field, index, subKey) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        const currentSubArray = updated[index][subKey] || [];
        updated[index] = {
            ...updated[index],
            [subKey]: [...currentSubArray, ""],
        };
        setData(field, updated);
    };

    const removeSubItem = (field, index, subKey, subIndex) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        const subArr = [...(updated[index][subKey] || [])];
        subArr.splice(subIndex, 1);
        updated[index] = {
            ...updated[index],
            [subKey]: subArr.length ? subArr : [""],
        };
        setData(field, updated);
    };

    const updateSubItem = (field, index, subKey, subIndex, value) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        const subArr = [...(updated[index][subKey] || [])];
        subArr[subIndex] = value;
        updated[index] = { ...updated[index], [subKey]: subArr };
        setData(field, updated);
    };

    return (
        <>
            {/* ---------------- Tab / Section / Link (3 level) ---------------- */}

            {tabs && tabs.length > 0 && (
                <div className="form-group mt-3">
                    <label>Tab</label>
                    <select
                        className="form-control"
                        value={safeData.tab_id}
                        onChange={(e) =>
                            setData({
                                ...safeData,
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
                </div>
            )}

            {sections.length > 0 && (
                <div className="form-group mt-3">
                    <label>Section</label>
                    <select
                        className="form-control"
                        value={safeData.section_id}
                        onChange={(e) =>
                            setData({
                                ...safeData,
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
                </div>
            )}

            {safeData.section_id && selectedSection?.children?.length > 0 && (
                <div className="form-group mt-3">
                    <label>Link</label>
                    <select
                        className="form-control"
                        value={safeData.link_id}
                        onChange={(e) => setData({ ...safeData, link_id: e.target.value })}
                    >
                        <option value="">Select Link</option>
                        {selectedSection.children.map((link) => (
                            <option key={link.id} value={link.id}>
                                {link.label}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* ---------------- Common fields (same for every link) ---------------- */}

            {safeData.link_id && (
                <>
                    <hr />
                    <h5>Education Pathways</h5>

                    {safeData.education_pathways && safeData.education_pathways.map((item, idx) => (
                        <RepeatableCard
                            key={idx}
                            title={item.title || `Education Pathway ${idx + 1}`}
                            onRemove={() => removeItem("education_pathways", idx)}
                            disableRemove={safeData.education_pathways.length === 1}
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={item.type}
                                            onChange={(e) =>
                                                updateObjectItem(
                                                    "education_pathways",
                                                    idx,
                                                    "type",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={item.title}
                                            onChange={(e) =>
                                                updateObjectItem(
                                                    "education_pathways",
                                                    idx,
                                                    "title",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            rows="3"
                                            className="form-control"
                                            value={item.description}
                                            onChange={(e) =>
                                                updateObjectItem(
                                                    "education_pathways",
                                                    idx,
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <SubStringListField
                                        subLabel="Options"
                                        values={item.options || [""]}
                                        onChange={(subIdx, value) =>
                                            updateSubItem(
                                                "education_pathways",
                                                idx,
                                                "options",
                                                subIdx,
                                                value
                                            )
                                        }
                                        onAdd={() =>
                                            addSubItem(
                                                "education_pathways",
                                                idx,
                                                "options"
                                            )
                                        }
                                        onRemove={(subIdx) =>
                                            removeSubItem(
                                                "education_pathways",
                                                idx,
                                                "options",
                                                subIdx
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-6">
                                    <SubStringListField
                                        subLabel="Features"
                                        values={item.features || [""]}
                                        onChange={(subIdx, value) =>
                                            updateSubItem(
                                                "education_pathways",
                                                idx,
                                                "features",
                                                subIdx,
                                                value
                                            )
                                        }
                                        onAdd={() =>
                                            addSubItem(
                                                "education_pathways",
                                                idx,
                                                "features"
                                            )
                                        }
                                        onRemove={(subIdx) =>
                                            removeSubItem(
                                                "education_pathways",
                                                idx,
                                                "features",
                                                subIdx
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Contact</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={item.contact}
                                            onChange={(e) =>
                                                updateObjectItem(
                                                    "education_pathways",
                                                    idx,
                                                    "contact",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </RepeatableCard>
                    ))}

                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mb-3"
                        onClick={() =>
                            addItem("education_pathways", emptyEducationPath)
                        }
                    >
                        + Add Education Pathway
                    </button>

                    <hr />
                    <h5>Vocational Courses</h5>

                    {safeData.vocational_courses && safeData.vocational_courses.map((course, idx) => (
                        <RepeatableCard
                            key={idx}
                            title={course.title || `Vocational Course ${idx + 1}`}
                            onRemove={() => removeItem("vocational_courses", idx)}
                            disableRemove={safeData.vocational_courses.length === 1}
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Course Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.title}
                                            onChange={(e) =>
                                                updateObjectItem(
                                                    "vocational_courses",
                                                    idx,
                                                    "title",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Duration</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.duration}
                                            onChange={(e) =>
                                                updateObjectItem(
                                                    "vocational_courses",
                                                    idx,
                                                    "duration",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <SubStringListField
                                        subLabel="Institutes"
                                        values={course.institutes || [""]}
                                        onChange={(subIdx, value) =>
                                            updateSubItem(
                                                "vocational_courses",
                                                idx,
                                                "institutes",
                                                subIdx,
                                                value
                                            )
                                        }
                                        onAdd={() =>
                                            addSubItem(
                                                "vocational_courses",
                                                idx,
                                                "institutes"
                                            )
                                        }
                                        onRemove={(subIdx) =>
                                            removeSubItem(
                                                "vocational_courses",
                                                idx,
                                                "institutes",
                                                subIdx
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </RepeatableCard>
                    ))}

                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mb-3"
                        onClick={() =>
                            addItem("vocational_courses", emptyVocationalCourse)
                        }
                    >
                        + Add Vocational Course
                    </button>

                    {/* Add Key Instructions Field */}
                    <hr />
                    <KeyInstructionsField 
                        data={safeData.key_instructions_eligibility} 
                        setData={(field, value) => setData(field, value)}
                    />

                    <div className="form-group form-check mt-3" style={{ display: "none" }}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="is_active"
                            checked={safeData.is_active}
                            onChange={(e) => setData("is_active", e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="is_active">
                            Active
                        </label>
                    </div>
                </>
            )}
        </>
    );
};

export default CareerAfterClass8Fields;
