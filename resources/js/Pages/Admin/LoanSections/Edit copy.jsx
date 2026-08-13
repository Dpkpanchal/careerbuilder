import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { School, CreditCard, ShieldCheck, Users } from "lucide-react";

const ICON_MAP = {
  School,
  CreditCard,
  ShieldCheck,
  Users,
};

const ICON_OPTIONS = [
  "School",
  "CreditCard",
  "ShieldCheck",
  "Users",
];

export default function Edit({ item }) {

  const { data, setData, post, processing,put } = useForm({
    type: item.type || "fact_card",
    icon: item.icon || "",
    title: item.title || "",
    description: item.description || "",
    short: item.short || "",
    link: item.link || "",
    order: item.order || 0,
  });

const submit = (e) => {
  e.preventDefault();

  put(route("admin.loan-sections.update", item.id), {
    preserveScroll: true,
  });
};

  const Icon = ICON_MAP[data.icon];

  return (
    <AdminLayout header="Edit Loan Section">
      <Head title="Edit Loan Section" />

      {/* HEADER */}
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Edit Item</h5>

        
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

                    <select
                      className="form-control"
                      value={data.icon || ""}
                      onChange={(e) => setData("icon", e.target.value)}
                    >
                      <option value="">Select Icon</option>

                      {ICON_OPTIONS.map((icon) => (
                        <option key={icon} value={icon}>
                          {icon}
                        </option>
                      ))}
                    </select>

                    {/* ICON PREVIEW */}
                    {Icon && (
                      <div className="mt-2">
                        <Icon size={24} />
                      </div>
                    )}
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
                {processing ? "Updating..." : "Update"}
              </button>
            </div>

          </form>

        </div>
      </div>
    </AdminLayout>
  );
}