import React, { useMemo } from "react";

// ---------------------------------------------------------------------
// "engineering_career_contents" ke liye common fields component.
// Create.jsx aur Edit.jsx dono isi ek component ko reuse karte hain.
//
// IMPORTANT FIX: RepeatableCard / StringListField / SubStringListField
// ab is FILE ke top-level (module scope) pe define hain, kisi component
// ke render body ke ANDAR nahi. Pehle ye andar define the, jiski wajah se
// React har render pe inhe "naya" component maan kar unmount+remount kar
// deta tha — ismein har keystroke pe input focus chala jaata tha aur
// data fill nahi ho pa raha tha (Branch Group wala issue). Ab in sabko
// values/onChange/onAdd/onRemove props diye jaate hain, koi closure over
// component state nahi.
// ---------------------------------------------------------------------

export const emptyBranchGroup = () => ({ title: "", points: [""] });
export const emptyPathway = () => ({ title: "", steps: [""] });
export const emptyCourse = () => ({ title: "", text: "", url: "", cta: "" });
export const emptyExam = () => ({ title: "", text: "", url: "" });
export const emptyInstituteLink = () => ({ title: "", url: "" });

export const defaultCareerContentData = () => ({
    menu_id: "",
    tab_id: "",
    section_id: "",
    link_id: "",

    branch_groups: [emptyBranchGroup()],
    pathways: [emptyPathway()],
    courses: [emptyCourse()],
    exams: [emptyExam()],
    institute_links: [emptyInstituteLink()],
    industries: [""],
    role_examples: [""],

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

        {values.map((value, idx) => (
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

        {values.map((value, idx) => (
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

// ---------------------------------------------------------------------
// Main fields block: Tab -> Section -> Link selects + saare repeatable
// groups. `data` / `setData` / `errors` Inertia ke useForm se aate hain
// (Create.jsx / Edit.jsx dono se), `tabs` = us menu ke Tabs (children).
// ---------------------------------------------------------------------

const CareerContentFields = ({ data, setData, errors, tabs }) => {
    const selectedTab = useMemo(
        () => tabs.find((tab) => String(tab.id) === String(data.tab_id)),
        [tabs, data.tab_id]
    );

    const sections = selectedTab?.children || [];

    const selectedSection = useMemo(() => {
        let found = sections.find(
            (section) => String(section.id) === String(data.section_id)
        );

        if (!found && data.link_id) {
            found = sections.find(
                (section) =>
                    Array.isArray(section.children) &&
                    section.children.some(
                        (child) => String(child.id) === String(data.link_id)
                    )
            );
        }

        return found;
    }, [sections, data.section_id, data.link_id]);

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
        setData(field, [...data[field], template()]);
    };

    const removeItem = (field, index) => {
        const updated = [...data[field]];
        updated.splice(index, 1);

        if (updated.length === 0) {
            updated.push(isStringArrayField(field) ? "" : templateFor(field)());
        }

        setData(field, updated);
    };

    const updateObjectItem = (field, index, key, value) => {
        const updated = [...data[field]];
        updated[index] = { ...updated[index], [key]: value };
        setData(field, updated);
    };

    const updateStringItem = (field, index, value) => {
        const updated = [...data[field]];
        updated[index] = value;
        setData(field, updated);
    };

    const addSubItem = (field, index, subKey) => {
        const updated = [...data[field]];
        updated[index] = {
            ...updated[index],
            [subKey]: [...updated[index][subKey], ""],
        };
        setData(field, updated);
    };

    const removeSubItem = (field, index, subKey, subIndex) => {
        const updated = [...data[field]];
        const subArr = [...updated[index][subKey]];
        subArr.splice(subIndex, 1);
        updated[index] = {
            ...updated[index],
            [subKey]: subArr.length ? subArr : [""],
        };
        setData(field, updated);
    };

    const updateSubItem = (field, index, subKey, subIndex, value) => {
        const updated = [...data[field]];
        const subArr = [...updated[index][subKey]];
        subArr[subIndex] = value;
        updated[index] = { ...updated[index], [subKey]: subArr };
        setData(field, updated);
    };

    return (
        <>
            {/* ---------------- Tab / Section / Link (3 level) ---------------- */}

            {tabs.length > 0 && (
                <div className="form-group mt-3">
                    <label>Tab</label>
                    <select
                        className="form-control"
                        value={data.tab_id}
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
                </div>
            )}

            {sections.length > 0 && (
                <div className="form-group mt-3">
                    <label>Section</label>
                    <select
                        className="form-control"
                        value={data.section_id}
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
                </div>
            )}

            {data.section_id && selectedSection?.children?.length > 0 && (
                <div className="form-group mt-3">
                    <label>Link</label>
                    <select
                        className="form-control"
                        value={data.link_id}
                        onChange={(e) => setData({ ...data, link_id: e.target.value })}
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

            {data.link_id && (
                <>
                    <hr />
                    <h5>Branch Groups</h5>
                    {data.branch_groups.map((group, idx) => (
                        <RepeatableCard
                            key={idx}
                            title={group.title || `Branch Group ${idx + 1}`}
                            onRemove={() => removeItem("branch_groups", idx)}
                            disableRemove={data.branch_groups.length === 1}
                        >
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={group.title}
                                    onChange={(e) =>
                                        updateObjectItem("branch_groups", idx, "title", e.target.value)
                                    }
                                />
                            </div>
                            <SubStringListField
                                subLabel="Points"
                                values={group.points}
                                onChange={(subIdx, value) =>
                                    updateSubItem("branch_groups", idx, "points", subIdx, value)
                                }
                                onAdd={() => addSubItem("branch_groups", idx, "points")}
                                onRemove={(subIdx) =>
                                    removeSubItem("branch_groups", idx, "points", subIdx)
                                }
                            />
                        </RepeatableCard>
                    ))}
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mb-3"
                        onClick={() => addItem("branch_groups", emptyBranchGroup)}
                    >
                        + Add Branch Group
                    </button>

                    <hr />
                    <h5>Pathways</h5>
                    {data.pathways.map((pathway, idx) => (
                        <RepeatableCard
                            key={idx}
                            title={pathway.title || `Pathway ${idx + 1}`}
                            onRemove={() => removeItem("pathways", idx)}
                            disableRemove={data.pathways.length === 1}
                        >
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={pathway.title}
                                    onChange={(e) =>
                                        updateObjectItem("pathways", idx, "title", e.target.value)
                                    }
                                />
                            </div>
                            <SubStringListField
                                subLabel="Steps"
                                values={pathway.steps}
                                onChange={(subIdx, value) =>
                                    updateSubItem("pathways", idx, "steps", subIdx, value)
                                }
                                onAdd={() => addSubItem("pathways", idx, "steps")}
                                onRemove={(subIdx) => removeSubItem("pathways", idx, "steps", subIdx)}
                            />
                        </RepeatableCard>
                    ))}
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mb-3"
                        onClick={() => addItem("pathways", emptyPathway)}
                    >
                        + Add Pathway
                    </button>

                    <hr />
                    <h5>Courses</h5>
                    {data.courses.map((course, idx) => (
                        <RepeatableCard
                            key={idx}
                            title={course.title || `Course ${idx + 1}`}
                            onRemove={() => removeItem("courses", idx)}
                            disableRemove={data.courses.length === 1}
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.title}
                                            onChange={(e) =>
                                                updateObjectItem("courses", idx, "title", e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>CTA Text</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.cta}
                                            onChange={(e) =>
                                                updateObjectItem("courses", idx, "cta", e.target.value)
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
                                            value={course.text}
                                            onChange={(e) =>
                                                updateObjectItem("courses", idx, "text", e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={course.url}
                                            onChange={(e) =>
                                                updateObjectItem("courses", idx, "url", e.target.value)
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
                        onClick={() => addItem("courses", emptyCourse)}
                    >
                        + Add Course
                    </button>

                    <hr />
                    <h5>Exams</h5>
                    {data.exams.map((exam, idx) => (
                        <RepeatableCard
                            key={idx}
                            title={exam.title || `Exam ${idx + 1}`}
                            onRemove={() => removeItem("exams", idx)}
                            disableRemove={data.exams.length === 1}
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={exam.title}
                                            onChange={(e) =>
                                                updateObjectItem("exams", idx, "title", e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={exam.url}
                                            onChange={(e) =>
                                                updateObjectItem("exams", idx, "url", e.target.value)
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
                                            value={exam.text}
                                            onChange={(e) =>
                                                updateObjectItem("exams", idx, "text", e.target.value)
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
                        onClick={() => addItem("exams", emptyExam)}
                    >
                        + Add Exam
                    </button>

                    <hr />
                    <h5>Institute Links</h5>
                    {data.institute_links.map((item, idx) => (
                        <div className="row" key={idx}>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={item.title}
                                        onChange={(e) =>
                                            updateObjectItem("institute_links", idx, "title", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={item.url}
                                        onChange={(e) =>
                                            updateObjectItem("institute_links", idx, "url", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-2 d-flex align-items-end">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger mb-3"
                                    onClick={() => removeItem("institute_links", idx)}
                                    disabled={data.institute_links.length === 1}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mb-3"
                        onClick={() => addItem("institute_links", emptyInstituteLink)}
                    >
                        + Add Institute Link
                    </button>

                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <StringListField
                                label="Industries"
                                values={data.industries}
                                onChange={(idx, value) => updateStringItem("industries", idx, value)}
                                onAdd={() => addItem("industries", () => "")}
                                onRemove={(idx) => removeItem("industries", idx)}
                            />
                        </div>
                        <div className="col-md-6">
                            <StringListField
                                label="Role Examples"
                                values={data.role_examples}
                                onChange={(idx, value) => updateStringItem("role_examples", idx, value)}
                                onAdd={() => addItem("role_examples", () => "")}
                                onRemove={(idx) => removeItem("role_examples", idx)}
                            />
                        </div>
                    </div>

                    <div className="form-group form-check mt-3" style={{ display: "none" }}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="is_active"
                            checked={data.is_active}
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

export default CareerContentFields;
