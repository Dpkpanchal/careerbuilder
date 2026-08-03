// GenericSnapshotFields.jsx
import React from "react";
import { Plus, Trash2 } from "lucide-react";

export default function GenericSnapshotFields({ data, setData, errors }) {
    const set = (key, value) => setData(key, value);

    // ---------------- Snapshot (Dynamic Key-Value pairs) ----------------
    const snapshot = Array.isArray(data.snapshot) ? data.snapshot : [];

    const addSnapshotItem = () =>
        setData("snapshot", [
            ...snapshot,
            { key: "", value: "" },
        ]);

    const removeSnapshotItem = (idx) =>
        setData("snapshot", snapshot.filter((_, i) => i !== idx));

    const updateSnapshotItem = (idx, field, value) =>
        setData(
            "snapshot",
            snapshot.map((item, i) =>
                i === idx ? { ...item, [field]: value } : item
            )
        );

    return (
        <div className="col-12">
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Quick Snapshot</h5>
                <button 
                    type="button" 
                    className="btn btn-sm btn-primary" 
                    onClick={addSnapshotItem}
                >
                    <Plus size={14} className="me-1" /> Add Field
                </button>
            </div>

            <div className="col-12">
                {snapshot.map((item, idx) => (
                    <div className="row g-2 mb-2" key={idx}>
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Label (e.g., Degree type)"
                                value={item.key || ""}
                                onChange={(e) => updateSnapshotItem(idx, "key", e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Value (e.g., B.Com)"
                                value={item.value || ""}
                                onChange={(e) => updateSnapshotItem(idx, "value", e.target.value)}
                            />
                        </div>
                        <div className="col-md-1">
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100"
                                onClick={() => removeSnapshotItem(idx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                ))}
                {errors?.snapshot && <div className="text-danger small">{errors.snapshot}</div>}
            </div>
        </div>
    );
}