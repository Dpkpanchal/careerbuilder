import React from 'react';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function ItiEdit({ college }) {

    const { data, setData, put, processing } = useForm({
        name: college.name,
        type: college.type,
        address: college.address,
        phone: college.phone,
        trades: college.trades?.map(t => ({
            name: t.name,
            duration: t.duration
        })) ?? [{ name: "", duration: "2YR" }]
    });

    const updateTrade = (i, key, val) => {
        const updated = [...data.trades];
        updated[i][key] = val;
        setData("trades", updated);
    };

    const addTrade = () => {
        setData("trades", [...data.trades, { name:"", duration:"2YR" }]);
    };

    const removeTrade = (i) => {
        if (data.trades.length === 1) return;
        setData("trades", data.trades.filter((_,index)=> index!==i));
    };

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/iti-colleges/${college.id}`);
    };

    return (
        <AdminLayout header={`Edit: ${college.name}`}>
            <Head title={`Edit ITI - ${college.name}`} />

            <div className="container-fluid">
                <div className="row">

                    {/* MAIN FORM */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header"><h4>Edit ITI</h4></div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            className="form-control"
                                            value={data.name}
                                            onChange={e => setData("name", e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Type</label>
                                        <select
                                            className="form-control"
                                            value={data.type}
                                            onChange={(e)=> setData("type", e.target.value)}
                                        >
                                            <option value="government">Government ITI</option>
                                            <option value="private">Private ITI</option>
                                            <option value="sponsored">Govt Sponsored ITC</option>
                                            <option value="women">Women's ITI</option>
                                            <option value="special">Special ITI</option>
                                        </select>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Address</label>
                                        <input
                                            className="form-control"
                                            value={data.address}
                                            onChange={(e)=>setData("address", e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Phone</label>
                                        <input
                                            className="form-control"
                                            value={data.phone}
                                            onChange={(e)=>setData("phone", e.target.value)}
                                        />
                                    </div>

                                    {/* TRADES */}
                                    <div className="mt-4">
                                        <h5>Trades</h5>

                                        {data.trades.map((trade, i)=>(
                                            <div key={i} className="row align-items-center mb-2">

                                                <div className="col-md-6">
                                                    <input
                                                        className="form-control"
                                                        value={trade.name}
                                                        onChange={(e)=>updateTrade(i, "name", e.target.value)}
                                                        placeholder="Trade name"
                                                    />
                                                </div>

                                                <div className="col-md-4">
                                                    <select
                                                        className="form-control"
                                                        value={trade.duration}
                                                        onChange={(e)=>updateTrade(i, "duration", e.target.value)}
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
                                                        onClick={() => removeTrade(i)}
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}

                                        <button
                                            type="button"
                                            onClick={addTrade}
                                            className="btn btn-secondary btn-sm mt-2"
                                        >
                                            + Add Trade
                                        </button>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="btn btn-primary mt-4"
                                    >
                                        {processing ? "Updating..." : "Update ITI"}
                                    </button>

                                    <Link
                                        href="/admin/iti-colleges"
                                        className="btn btn-default ml-2 mt-4"
                                    >
                                        Cancel
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-md-4">

                        <div className="card">
                            <div className="card-header"><h4>Record Info</h4></div>
                            <div className="card-body">
                                <p><strong>ID:</strong> {college.id}</p>
                                <p><strong>Created:</strong> {new Date(college.created_at).toLocaleDateString()}</p>
                                <p><strong>Updated:</strong> {new Date(college.updated_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="card mt-3 border-danger">
                            <div className="card-header bg-danger">
                                <h4 className="text-white">Danger Zone</h4>
                            </div>
                            <div className="card-body">
                                <p>Deleting this ITI will remove all its trades.</p>

                                <Link
                                    as="button"
                                    method="delete"
                                    href={`/admin/iti-colleges/${college.id}`}
                                    className="btn btn-danger btn-block"
                                    onClick={(e)=> !confirm("Delete permanently?") && e.preventDefault()}
                                >
                                    Delete ITI
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
