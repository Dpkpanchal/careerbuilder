import React from "react";

const TopCollegesAndUniversitiesField = ({ data, setData, errors }) => {
    const colleges = data.top_colleges_and_universities || [];

    const addSection = () => {
        setData("top_colleges_and_universities", [
            ...colleges,
            {
                key: "",
                title: "",
                description: "",
                items: [
                    {
                        name: "",
                        city: "",
                        state: "",
                        website: "",
                    },
                ],
            },
        ]);
    };

    const removeSection = (index) => {
        const updated = [...colleges];
        updated.splice(index, 1);
        if (updated.length === 0) {
            updated.push({
                key: "",
                title: "",
                description: "",
                items: [
                    {
                        name: "",
                        city: "",
                        state: "",
                        website: "",
                    },
                ],
            });
        }
        setData("top_colleges_and_universities", updated);
    };

    const updateSection = (index, field, value) => {
        const updated = [...colleges];
        updated[index] = { ...updated[index], [field]: value };
        setData("top_colleges_and_universities", updated);
    };

    const addItem = (sectionIndex) => {
        const updated = [...colleges];
        updated[sectionIndex].items.push({
            name: "",
            city: "",
            state: "",
            website: "",
        });
        setData("top_colleges_and_universities", updated);
    };

    const removeItem = (sectionIndex, itemIndex) => {
        const updated = [...colleges];
        updated[sectionIndex].items.splice(itemIndex, 1);
        if (updated[sectionIndex].items.length === 0) {
            updated[sectionIndex].items.push({
                name: "",
                city: "",
                state: "",
                website: "",
            });
        }
        setData("top_colleges_and_universities", updated);
    };

    const updateItem = (sectionIndex, itemIndex, field, value) => {
        const updated = [...colleges];
        updated[sectionIndex].items[itemIndex] = {
            ...updated[sectionIndex].items[itemIndex],
            [field]: value,
        };
        setData("top_colleges_and_universities", updated);
    };

    return (
        <div className="mt-4">
            <hr />
            <h5>Top Colleges & Universities</h5>
            <p className="text-muted small">
                Add categories and their associated colleges/universities for this career path.
            </p>

            {colleges.map((section, secIdx) => (
                <div key={secIdx} className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <strong>{section.title || `Section ${secIdx + 1}`}</strong>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeSection(secIdx)}
                            disabled={colleges.length === 1}
                        >
                            Remove Section
                        </button>
                    </div>

                    <div className="card-body">
                        {/* Section Fields */}
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Key</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., central, state-wb"
                                        value={section.key || ""}
                                        onChange={(e) =>
                                            updateSection(secIdx, "key", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="col-md-9">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Central Universities & National Institutions"
                                        value={section.title || ""}
                                        onChange={(e) =>
                                            updateSection(secIdx, "title", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control"
                                        rows="2"
                                        placeholder="Section description"
                                        value={section.description || ""}
                                        onChange={(e) =>
                                            updateSection(secIdx, "description", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="mt-3">
                            <h6 className="mb-3">Colleges / Universities</h6>

                            {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="card mb-3 bg-light">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 d-flex justify-content-between align-items-center mb-2">
                                                <strong className="text-primary">
                                                    Institution {itemIdx + 1}
                                                </strong>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() =>
                                                        removeItem(secIdx, itemIdx)
                                                    }
                                                    disabled={section.items.length === 1}
                                                >
                                                    Remove
                                                </button>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="University/College name"
                                                        value={item.name || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                secIdx,
                                                                itemIdx,
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label>City</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="City"
                                                        value={item.city || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                secIdx,
                                                                itemIdx,
                                                                "city",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label>State</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="State"
                                                        value={item.state || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                secIdx,
                                                                itemIdx,
                                                                "state",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Website URL</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="https://example.com"
                                                        value={item.website || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                secIdx,
                                                                itemIdx,
                                                                "website",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => addItem(secIdx)}
                            >
                                + Add Institution
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={addSection}
            >
                + Add Section
            </button>
        </div>
    );
};

export default TopCollegesAndUniversitiesField;