
import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Create() {

  const { data, setData, post, processing } = useForm({
    type: "fact_card",
    icon: "",
    title: "",
    description: "",
    short: "",
    link: "",
    order: 0,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("admin.loan-sections.store"));
  };

  

  return (
    <AdminLayout header="Create Loan Section">
      <Head title="Create Loan Section" />

      {/* HEADER */}
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Add New Item</h5>

        
        </div>
      </div>

      {/* FORM */}
      <div className="card">
        <div className="card-body">

          <form onSubmit={submit}>
            <div className="row">

              {/* TYPE */}
              <div className="col-md-6 mb-3">
                <label>Type</label>
                <select
                  className="form-control"
                  value={data.type}
                  onChange={(e) => setData("type", e.target.value)}
                >
                  <option value="fact_card">Fact Card</option>
                  <option value="scheme">Scheme</option>
                </select>
              </div>

              {/* ORDER */}
              <div className="col-md-6 mb-3">
                <label>Order</label>
                <input
                  type="number"
                  className="form-control"
                  value={data.order}
                  onChange={(e) => setData("order", e.target.value)}
                />
              </div>

              {/* FACT CARD */}
              {data.type === "fact_card" && (
                <>
                  <div className="col-md-6 mb-3">
                    <label>Icon</label>
                    {/* <input
                      className="form-control"
                      placeholder="e.g. School, CreditCard"
                      value={data.icon}
                      onChange={(e) => setData("icon", e.target.value)}
                    /> */}

                    <select
                      className="form-control"
                      value={data.icon || ""}
                      onChange={(e) => setData("icon", e.target.value)}
                    >
                      <option value="">Select Icon</option>
                      <option value="School">School</option>
                      <option value="CreditCard">Credit Card</option>
                      <option value="ShieldCheck">Shield Check</option>
                      <option value="Users">Users</option>
                    </select>

                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Title</label>
                    <input
                      className="form-control"
                      value={data.title}
                      onChange={(e) => setData("title", e.target.value)}
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      value={data.description}
                      onChange={(e) => setData("description", e.target.value)}
                    />
                  </div>
                </>
              )}

              {/* SCHEME */}
              {data.type === "scheme" && (
                <>
                  <div className="col-md-6 mb-3">
                    <label>Full Title</label>
                    <input
                      className="form-control"
                      value={data.title}
                      onChange={(e) => setData("title", e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Short Title</label>
                    <input
                      className="form-control"
                      placeholder="Use \n for line break"
                      value={data.short}
                      onChange={(e) => setData("short", e.target.value)}
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label>Link</label>
                    <input
                      className="form-control"
                      value={data.link}
                      onChange={(e) => setData("link", e.target.value)}
                    />
                  </div>
                </>
              )}

            </div>

            {/* BUTTONS */}
            <div className="d-flex justify-content-end mt-3">
              <Link
                href={route("admin.loan-sections.index")}
                className="btn btn-light mr-2"
              >
                Cancel
              </Link>

              <button className="btn btn-primary">
                {processing ? "Saving..." : "Save"}
              </button>
            </div>

          </form>

        </div>
      </div>
    </AdminLayout>
  );
}