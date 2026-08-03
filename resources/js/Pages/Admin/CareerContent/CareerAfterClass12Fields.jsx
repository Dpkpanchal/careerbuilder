// CareerAfterClass12Fields.jsx
import React, { useMemo } from "react";
import RelatedExamsField from "./RelatedExamsField";
import TopCollegesAndUniversitiesField from "./TopCollegesAndUniversitiesField";

export const emptyOverviewTreeNode = () => ({
    key: "",
    label: "",
    type: "course",
    notes: [""],
    children: [],
});
 
export const defaultContentData = () => ({
    menu_id: "",
    tab_id: "",
    section_id: "",
    link_id: "",
    overview_tree: {
        key: "after-12",
        title: "",
        type: "root",
        entries: [],
    },
    related_exams: [],
    top_colleges_and_universities: [],
    is_active: true,
});

// ---------------- Helper Functions ----------------

export const updateNode = (nodes, path, field, value) => {
    if (!Array.isArray(nodes)) return [];
    
    const updated = [...nodes];

    if (path.length === 1) {
        updated[path[0]] = {
            ...updated[path[0]],
            [field]: value,
        };
        return updated;
    }

    const [head, ...rest] = path;

    updated[head] = {
        ...updated[head],
        children: updateNode(
            updated[head].children || [],
            rest,
            field,
            value
        ),
    };

    return updated;
};

export const addChildNode = (nodes, path) => {
    if (!Array.isArray(nodes)) return [emptyOverviewTreeNode()];
    
    const updated = [...nodes];

    if (path.length === 1) {
        const node = updated[path[0]];

        updated[path[0]] = {
            ...node,
            children: [...(node.children || []), emptyOverviewTreeNode()],
        };

        return updated;
    }

    const [head, ...rest] = path;

    updated[head] = {
        ...updated[head],
        children: addChildNode(updated[head].children || [], rest),
    };

    return updated;
};

export const removeNode = (nodes, path) => {
    if (!Array.isArray(nodes)) return [];
    
    const updated = [...nodes];

    if (path.length === 1) {
        updated.splice(path[0], 1);
        return updated;
    }

    const [head, ...rest] = path;

    updated[head] = {
        ...updated[head],
        children: removeNode(updated[head].children || [], rest),
    };

    return updated;
};

// ---------------- Recursive Component ----------------

const TreeNode = ({
    node,
    path,
    rootData,
    setRootData,
}) => {
    const updateField = (field, value) => {
        setRootData({
            ...rootData,
            entries: updateNode(
                rootData.entries || [],
                path,
                field,
                value
            ),
        });
    };

    const addChild = () => {
        setRootData({
            ...rootData,
            entries: addChildNode(
                rootData.entries || [],
                path
            ),
        });
    };

    const remove = () => {
        setRootData({
            ...rootData,
            entries: removeNode(
                rootData.entries || [],
                path
            ),
        });
    };

    return (
        <div
            className="card mb-3"
            style={{
                marginLeft: path.length * 20,
            }}
        >
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <label>Key</label>
                        <input
                            className="form-control"
                            value={node?.key || ""}
                            onChange={(e) =>
                                updateField("key", e.target.value)
                            }
                        />
                    </div>

                    <div className="col-md-4">
                        <label>Label</label>
                        <input
                            className="form-control"
                            value={node?.label || ""}
                            onChange={(e) =>
                                updateField("label", e.target.value)
                            }
                        />
                    </div>

                    <div className="col-md-3">
                        <label>Type</label>
                        <select
                            className="form-control"
                            value={node?.type || "course"}
                            onChange={(e) =>
                                updateField("type", e.target.value)
                            }
                        >
                            <option value="course">Course</option>
                            <option value="exam">Exam</option>
                            <option value="exam_group">Exam Group</option>
                            <option value="outcome">Outcome</option>
                            <option value="root">Root</option>
                        </select>
                    </div>

                    <div className="col-md-2 d-flex align-items-end">
                        <button
                            type="button"
                            className="btn btn-success btn-sm mr-2"
                            onClick={addChild}
                        >
                            + Child
                        </button>

                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={remove}
                        >
                            Remove
                        </button>
                    </div>
                </div>

                {/* Notes field */}
                {node?.type !== "root" && (
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <label>Notes</label>
                            {(node?.notes || []).map((note, idx) => (
                                <div className="input-group mb-2" key={idx}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={note || ""}
                                        onChange={(e) => {
                                            const newNotes = [...(node?.notes || [])];
                                            newNotes[idx] = e.target.value;
                                            updateField("notes", newNotes);
                                        }}
                                    />
                                    <div className="input-group-append">
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                            onClick={() => {
                                                const newNotes = [...(node?.notes || [])];
                                                newNotes.splice(idx, 1);
                                                if (newNotes.length === 0) {
                                                    newNotes.push("");
                                                }
                                                updateField("notes", newNotes);
                                            }}
                                            disabled={(node?.notes || []).length === 1}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => {
                                    updateField("notes", [...(node?.notes || []), ""]);
                                }}
                            >
                                + Add Note
                            </button>
                        </div>
                    </div>
                )}

                {/* Children */}
                {(node?.children || []).map((child, index) => (
                    <TreeNode
                        key={index}
                        node={child}
                        path={[...path, index]}
                        rootData={rootData}
                        setRootData={setRootData}
                    />
                ))}
            </div>
        </div>
    );
};

// ---------------- Overview Component ----------------

const CareerAfterClass12Overview = ({ data, setData }) => {
    // FIX: Use overview_tree consistently
    const overview_tree = data?.overview_tree || {
        key: "after-12",
        title: "",
        type: "root",
        entries: [],
    };

    // Ensure entries is always an array
    const entries = Array.isArray(overview_tree.entries) ? overview_tree.entries : [];

    const setOverviewTree = (updated) => {
        setData("overview_tree", updated);
    };

    const updateRootField = (field, value) => {
        setOverviewTree({
            ...overview_tree,
            [field]: value,
        });
    };

    const addRootEntry = () => {
        setOverviewTree({
            ...overview_tree,
            entries: [
                ...entries,
                emptyOverviewTreeNode(),
            ],
        });
    };

    return (
        <>
            <hr />
            <h5>Overview Tree</h5>

            {/* Root Node */}
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <label>Key</label>
                            <input
                                className="form-control"
                                value={overview_tree.key || ""}
                                onChange={(e) =>
                                    updateRootField("key", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-5">
                            <label>Title</label>
                            <input
                                className="form-control"
                                value={overview_tree.title || ""}
                                onChange={(e) =>
                                    updateRootField("title", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-3">
                            <label>Type</label>
                            <select
                                className="form-control"
                                value={overview_tree.type || "root"}
                                onChange={(e) =>
                                    updateRootField("type", e.target.value)
                                }
                            >
                                <option value="root">Root</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Entries */}
            {entries.map((entry, index) => (
                <TreeNode
                    key={index}
                    node={entry}
                    path={[index]}
                    rootData={overview_tree}
                    setRootData={setOverviewTree}
                />
            ))}

            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={addRootEntry}
            >
                + Add Entry
            </button>
        </>
    );
};

// ---------------- Main Fields Component ----------------

const CareerAfterClass12Fields = ({ data, setData, errors, tabs }) => {
    // Ensure data has all required fields
    const safeData = {
        ...defaultContentData(),
        ...data,
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

    return (
        <>
            {/* Tab Selection */}
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

            {/* Section Selection */}
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

            {/* Link Selection */}
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

            {/* Overview Tree Fields */}
            {safeData.link_id && (
                <>
                    <CareerAfterClass12Overview
                        data={safeData}
                        setData={setData}
                    />

                       {/* Add Related Exams Field */}
                    <RelatedExamsField
                        data={safeData}
                        setData={setData}
                        errors={errors}
                    />


                     <TopCollegesAndUniversitiesField
                        data={safeData}
                        setData={setData}
                        errors={errors}
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

export default CareerAfterClass12Fields;