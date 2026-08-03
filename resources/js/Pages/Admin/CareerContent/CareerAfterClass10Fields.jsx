import React, { useMemo } from "react";

export const emptyOverview = () => ({
    id: "",
    title: "",
    subtitle: "",
    icon: "",
    colorClass: "",
    content: [""],
});

export const emptyStream = () => ({
    id: "",
    name: "",
    code: "",
    colorClass: "",
    languageGroups: {
        groupA: [""],
        groupB: [""],
    },
    mainSubjects: [""],
    optionalSubjects: [""],
    instruction: "",
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

    overview: [emptyOverview()],
    stream_selection: [emptyStream()],
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

// Key Instructions Field Component
const KeyInstructionsField = ({ data, setData }) => {
    const instructions = data?.instructions || [""];
    
    const updateInstruction = (index, value) => {
        const newInstructions = [...instructions];
        newInstructions[index] = value;
        setData('key_instructions_eligibility', {
            ...data,
            instructions: newInstructions,
        });
    };

    const addInstruction = () => {
        setData('key_instructions_eligibility', {
            ...data,
            instructions: [...instructions, ""],
        });
    };

    const removeInstruction = (index) => {
        const newInstructions = [...instructions];
        newInstructions.splice(index, 1);
        if (newInstructions.length === 0) {
            newInstructions.push("");
        }
        setData('key_instructions_eligibility', {
            ...data,
            instructions: newInstructions,
        });
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="mb-3">Key Instructions</h5>
                
                <div className="form-group">
                    <label>Instructions</label>
                    <div className="small text-muted mb-2">
                        Add important instructions for students
                    </div>
                    {instructions.map((instruction, idx) => (
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
                                    disabled={instructions.length === 1}
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
// Main fields block: Tab -> Section -> Link selects + saare repeatable
// groups. `data` / `setData` / `errors` Inertia ke useForm se aate hain
// (Create.jsx / Edit.jsx dono se), `tabs` = us menu ke Tabs (children).
// ---------------------------------------------------------------------

const CareerAfterClass10Fields = ({ data, setData, errors, tabs }) => {
    // Ensure data has all required fields with defaults
    const safeData = {
        ...defaultContentData(),
        ...data,
        overview: data?.overview || [emptyOverview()],
        stream_selection: data?.stream_selection || [emptyStream()],
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

    const addItem = (field, template) => {
        const currentData = safeData[field] || [];
        setData(field, [...currentData, template()]);
    };

    const removeItem = (field, index) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        updated.splice(index, 1);

        if (updated.length === 0) {
            updated.push(templateForField(field)());
        }

        setData(field, updated);
    };

    const templateForField = (field) => {
        if (field === "overview") return emptyOverview;
        if (field === "stream_selection") return emptyStream;
        if (field === "vocational_courses") return emptyVocationalCourse;
        return () => ({});
    };

    const updateObjectItem = (field, index, key, value) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        updated[index] = { ...updated[index], [key]: value };
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

    // Nested sub-item functions for languageGroups
    const updateNestedSubItem = (field, index, parentKey, childKey, subIndex, value) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        const subArr = [...(updated[index][parentKey][childKey] || [])];
        subArr[subIndex] = value;
        updated[index] = {
            ...updated[index],
            [parentKey]: {
                ...updated[index][parentKey],
                [childKey]: subArr,
            },
        };
        setData(field, updated);
    };

    const addNestedSubItem = (field, index, parentKey, childKey) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        const currentSubArray = updated[index][parentKey][childKey] || [];
        updated[index] = {
            ...updated[index],
            [parentKey]: {
                ...updated[index][parentKey],
                [childKey]: [...currentSubArray, ""],
            },
        };
        setData(field, updated);
    };

    const removeNestedSubItem = (field, index, parentKey, childKey, subIndex) => {
        const currentData = safeData[field] || [];
        const updated = [...currentData];
        const subArr = [...(updated[index][parentKey][childKey] || [])];
        subArr.splice(subIndex, 1);
        updated[index] = {
            ...updated[index],
            [parentKey]: {
                ...updated[index][parentKey],
                [childKey]: subArr.length ? subArr : [""],
            },
        };
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
                    <h5>Overview</h5>

                    {safeData.overview && safeData.overview.map((item, idx) => (
                        <RepeatableCard
                            key={idx}
                            title={item.title || `Overview ${idx + 1}`}
                            onRemove={() => removeItem("overview", idx)}
                            disableRemove={safeData.overview.length === 1}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <label>ID</label>
                                    <input
                                        className="form-control"
                                        value={item.id}
                                        onChange={(e) =>
                                            updateObjectItem("overview", idx, "id", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label>Title</label>
                                    <input
                                        className="form-control"
                                        value={item.title}
                                        onChange={(e) =>
                                            updateObjectItem("overview", idx, "title", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label>Subtitle</label>
                                    <input
                                        className="form-control"
                                        value={item.subtitle}
                                        onChange={(e) =>
                                            updateObjectItem("overview", idx, "subtitle", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label>Icon</label>
                                    <input
                                        className="form-control"
                                        placeholder="BookOpen"
                                        value={item.icon}
                                        onChange={(e) =>
                                            updateObjectItem("overview", idx, "icon", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label>Color Class</label>
                                    <input
                                        className="form-control"
                                        placeholder="styles.red"
                                        value={item.colorClass}
                                        onChange={(e) =>
                                            updateObjectItem("overview", idx, "colorClass", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-md-12">
                                    <SubStringListField
                                        subLabel="Content"
                                        values={item.content}
                                        onChange={(subIdx, value) =>
                                            updateSubItem("overview", idx, "content", subIdx, value)
                                        }
                                        onAdd={() => addSubItem("overview", idx, "content")}
                                        onRemove={(subIdx) =>
                                            removeSubItem("overview", idx, "content", subIdx)
                                        }
                                    />
                                </div>
                            </div>
                        </RepeatableCard>
                    ))}

                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => addItem("overview", emptyOverview)}
                    >
                        + Add Overview
                    </button>

                    <hr />
                    <h5>Stream Selection</h5>

                    {safeData.stream_selection && safeData.stream_selection.map((stream, idx) => (
                        <RepeatableCard
                            key={idx}
                            title={stream.name || `Stream ${idx + 1}`}
                            onRemove={() => removeItem("stream_selection", idx)}
                            disableRemove={safeData.stream_selection.length === 1}
                        >
                            <div className="row">
                                <div className="col-md-3">
                                    <label>ID</label>
                                    <input
                                        className="form-control"
                                        value={stream.id}
                                        onChange={(e) =>
                                            updateObjectItem("stream_selection", idx, "id", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-md-5">
                                    <label>Name</label>
                                    <input
                                        className="form-control"
                                        value={stream.name}
                                        onChange={(e) =>
                                            updateObjectItem("stream_selection", idx, "name", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-md-2">
                                    <label>Code</label>
                                    <input
                                        className="form-control"
                                        value={stream.code}
                                        onChange={(e) =>
                                            updateObjectItem("stream_selection", idx, "code", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-md-2">
                                    <label>Color Class</label>
                                    <input
                                        className="form-control"
                                        value={stream.colorClass}
                                        onChange={(e) =>
                                            updateObjectItem("stream_selection", idx, "colorClass", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-md-6">
                                    <SubStringListField
                                        subLabel="Language Group A"
                                        values={stream.languageGroups?.groupA || [""]}
                                        onChange={(i, value) =>
                                            updateNestedSubItem(
                                                "stream_selection",
                                                idx,
                                                "languageGroups",
                                                "groupA",
                                                i,
                                                value
                                            )
                                        }
                                        onAdd={() =>
                                            addNestedSubItem(
                                                "stream_selection",
                                                idx,
                                                "languageGroups",
                                                "groupA"
                                            )
                                        }
                                        onRemove={(i) =>
                                            removeNestedSubItem(
                                                "stream_selection",
                                                idx,
                                                "languageGroups",
                                                "groupA",
                                                i
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-6">
                                    <SubStringListField
                                        subLabel="Language Group B"
                                        values={stream.languageGroups?.groupB || [""]}
                                        onChange={(i, value) =>
                                            updateNestedSubItem(
                                                "stream_selection",
                                                idx,
                                                "languageGroups",
                                                "groupB",
                                                i,
                                                value
                                            )
                                        }
                                        onAdd={() =>
                                            addNestedSubItem(
                                                "stream_selection",
                                                idx,
                                                "languageGroups",
                                                "groupB"
                                            )
                                        }
                                        onRemove={(i) =>
                                            removeNestedSubItem(
                                                "stream_selection",
                                                idx,
                                                "languageGroups",
                                                "groupB",
                                                i
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-6">
                                    <SubStringListField
                                        subLabel="Main Subjects"
                                        values={stream.mainSubjects || [""]}
                                        onChange={(i, value) =>
                                            updateSubItem(
                                                "stream_selection",
                                                idx,
                                                "mainSubjects",
                                                i,
                                                value
                                            )
                                        }
                                        onAdd={() =>
                                            addSubItem(
                                                "stream_selection",
                                                idx,
                                                "mainSubjects"
                                            )
                                        }
                                        onRemove={(i) =>
                                            removeSubItem(
                                                "stream_selection",
                                                idx,
                                                "mainSubjects",
                                                i
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-6">
                                    <SubStringListField
                                        subLabel="Optional Subjects"
                                        values={stream.optionalSubjects || [""]}
                                        onChange={(i, value) =>
                                            updateSubItem(
                                                "stream_selection",
                                                idx,
                                                "optionalSubjects",
                                                i,
                                                value
                                            )
                                        }
                                        onAdd={() =>
                                            addSubItem(
                                                "stream_selection",
                                                idx,
                                                "optionalSubjects"
                                            )
                                        }
                                        onRemove={(i) =>
                                            removeSubItem(
                                                "stream_selection",
                                                idx,
                                                "optionalSubjects",
                                                i
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label>Instruction</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        value={stream.instruction}
                                        onChange={(e) =>
                                            updateObjectItem(
                                                "stream_selection",
                                                idx,
                                                "instruction",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </RepeatableCard>
                    ))}

                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => addItem("stream_selection", emptyStream)}
                    >
                        + Add Stream
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

export default CareerAfterClass10Fields;
