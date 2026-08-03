// RelatedExamsField.jsx
import React from "react";

const RelatedExamsField = ({ data, setData, errors }) => {
    const relatedExams = data.related_exams || [];

    const addCategory = () => {
        setData("related_exams", [
            ...relatedExams,
            {
                key: "",
                title: "",
                icon: "",
                description: "",
                items: [
                    {
                        title: "",
                        eligibility: "",
                        usedFor: "",
                        outcomes: "",
                        authority: "",
                        website: "",
                        websiteLabel: "",
                    },
                ],
            },
        ]);
    };

    const removeCategory = (index) => {
        const updated = [...relatedExams];
        updated.splice(index, 1);
        setData("related_exams", updated);
    };

    const updateCategory = (index, field, value) => {
        const updated = [...relatedExams];
        updated[index] = { ...updated[index], [field]: value };
        setData("related_exams", updated);
    };

    const addItem = (categoryIndex) => {
        const updated = [...relatedExams];
        updated[categoryIndex].items.push({
            title: "",
            eligibility: "",
            usedFor: "",
            outcomes: "",
            authority: "",
            website: "",
            websiteLabel: "",
        });
        setData("related_exams", updated);
    };

    const removeItem = (categoryIndex, itemIndex) => {
        const updated = [...relatedExams];
        updated[categoryIndex].items.splice(itemIndex, 1);
        if (updated[categoryIndex].items.length === 0) {
            updated[categoryIndex].items.push({
                title: "",
                eligibility: "",
                usedFor: "",
                outcomes: "",
                authority: "",
                website: "",
                websiteLabel: "",
            });
        }
        setData("related_exams", updated);
    };

    const updateItem = (categoryIndex, itemIndex, field, value) => {
        const updated = [...relatedExams];
        updated[categoryIndex].items[itemIndex] = {
            ...updated[categoryIndex].items[itemIndex],
            [field]: value,
        };
        setData("related_exams", updated);
    };

    return (
        <div className="mt-4">
            <hr />
            <h5>Related Entrance Exams</h5>
            <p className="text-muted small">
                Add categories and their associated exam details for this career path.
            </p>

            {relatedExams.map((category, catIdx) => (
                <div key={catIdx} className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <strong>{category.title || `Category ${catIdx + 1}`}</strong>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeCategory(catIdx)}
                            disabled={relatedExams.length === 1}
                        >
                            Remove Category
                        </button>
                    </div>

                    <div className="card-body">
                        {/* Category Fields */}
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Key</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., law, ug"
                                        value={category.key || ""}
                                        onChange={(e) =>
                                            updateCategory(catIdx, "key", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Law & Legal Education Entrance Exams"
                                        value={category.title || ""}
                                        onChange={(e) =>
                                            updateCategory(catIdx, "title", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Icon (Font Awesome Class)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., fa-scale-balanced"
                                        value={category.icon || ""}
                                        onChange={(e) =>
                                            updateCategory(catIdx, "icon", e.target.value)
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
                                        placeholder="Category description"
                                        value={category.description || ""}
                                        onChange={(e) =>
                                            updateCategory(catIdx, "description", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="mt-3">
                            <h6 className="mb-3">Exams / Items</h6>

                            {category.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="card mb-3 bg-light">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 d-flex justify-content-between align-items-center mb-2">
                                                <strong className="text-primary">
                                                    Item {itemIdx + 1}
                                                </strong>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() =>
                                                        removeItem(catIdx, itemIdx)
                                                    }
                                                    disabled={category.items.length === 1}
                                                >
                                                    Remove
                                                </button>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Exam/Item title"
                                                        value={item.title || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                catIdx,
                                                                itemIdx,
                                                                "title",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Eligibility</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Eligibility criteria"
                                                        value={item.eligibility || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                catIdx,
                                                                itemIdx,
                                                                "eligibility",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Used For</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="What it's used for"
                                                        value={item.usedFor || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                catIdx,
                                                                itemIdx,
                                                                "usedFor",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Outcomes</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Career outcomes"
                                                        value={item.outcomes || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                catIdx,
                                                                itemIdx,
                                                                "outcomes",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Authority</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Conducting authority"
                                                        value={item.authority || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                catIdx,
                                                                itemIdx,
                                                                "authority",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Website URL</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="https://example.com"
                                                        value={item.website || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                catIdx,
                                                                itemIdx,
                                                                "website",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Website Label (Optional)</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="e.g., NTA, University website"
                                                        value={item.websiteLabel || ""}
                                                        onChange={(e) =>
                                                            updateItem(
                                                                catIdx,
                                                                itemIdx,
                                                                "websiteLabel",
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
                                onClick={() => addItem(catIdx)}
                            >
                                + Add Exam / Item
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={addCategory}
            >
                + Add Category
            </button>
        </div>
    );
};

export default RelatedExamsField;