import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const ItiCollegeCreate = () => {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        type: 'government',
        address: '',
        phone: '',
        trades: [
            { name: '', duration: '2YR' }
        ]
    });

    // Add trade row
    const addTrade = () => {
        setData("trades", [...data.trades, { name: "", duration: "2YR" }]);
    };

    // Remove trade row
    const removeTrade = (index) => {
        if (data.trades.length === 1) return;
        setData("trades", data.trades.filter((_, i) => i !== index));
    };

    // Update trade row
    const updateTrade = (index, key, value) => {
        const updated = [...data.trades];
        updated[index][key] = value;
        setData("trades", updated);
    };

    const submit = (e) => {
        e.preventDefault();
        post('/admin/iti-colleges');
    };

    return (
        <AdminLayout header="Add ITI College">
            <Head title="Create ITI College" />

            <div className="container-fluid">
                <div className="row">

                    {/* LEFT SIDE FORM */}
                    <div className="col-md-8">

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">ITI College Details</h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* Name */}
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                            placeholder="Enter ITI Name"
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>

                                    {/* Type */}
                                    <div className="form-group mt-3">
                                        <label>Institute Type</label>
                                        <select
                                            className="form-control"
                                            value={data.type}
                                            onChange={(e) => setData("type", e.target.value)}
                                        >
                                            <option value="government">Government ITI</option>
                                            <option value="private">Private ITI</option>
                                            <option value="sponsored">Govt Sponsored ITC</option>
                                            <option value="women">Women's ITI</option>
                                            <option value="special">Special ITI</option>
                                        </select>
                                    </div>

                                    {/* Address */}
                                    <div className="form-group mt-3">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.address}
                                            onChange={(e) => setData("address", e.target.value)}
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="form-group mt-3">
                                        <label>Phone</label>
                                        <input
                                            className="form-control"
                                            value={data.phone}
                                            onChange={(e) => setData("phone", e.target.value)}
                                        />
                                    </div>

                                    {/* Trades */}
                                    <div className="mt-4">
                                        <h5 className="mb-3">Trades Offered</h5>

                                        {data.trades.map((trade, index) => (
                                            <div key={index} className="row align-items-center mb-2">

                                                <div className="col-md-6">
                                                    <input
                                                        placeholder="Trade Name"
                                                        className="form-control"
                                                        value={trade.name}
                                                        onChange={(e) =>
                                                            updateTrade(index, "name", e.target.value)
                                                        }
                                                    />
                                                </div>

                                                <div className="col-md-4">
                                                    <select
                                                        className="form-control"
                                                        value={trade.duration}
                                                        onChange={(e) =>
                                                            updateTrade(index, "duration", e.target.value)
                                                        }
                                                    >
                                                        <option value="2YR">2 Years</option>
                                                        <option value="1YR">1 Year</option>
                                                        <option value="6MO">6 Months</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-2">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => removeTrade(index)}
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}

                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm mt-2"
                                            onClick={addTrade}
                                        >
                                            <i className="fas fa-plus mr-1"></i> Add More Trade
                                        </button>
                                    </div>

                                    {/* Buttons */}
                                    <div className="form-group mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? "Saving..." : "Save ITI"}
                                        </button>

                                        <Link
                                            href="/admin/iti-colleges"
                                            className="btn btn-default ml-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Guidelines</h3>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>✔ Add at least one trade</li>
                                    <li>✔ Duration must be valid</li>
                                    <li>✔ Use official details</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
};

export default ItiCollegeCreate;
