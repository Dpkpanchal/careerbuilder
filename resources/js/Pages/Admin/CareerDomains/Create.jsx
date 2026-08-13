import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm,Link } from "@inertiajs/react";

export default function Create() {

  const { data, setData, post, processing } = useForm({
    title: "",
    subtitle: "",
    image: null,
    link: "",
    details: "",
  });

  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setData("image", file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route("admin.career-domains.store"), {
      forceFormData: true,
    });
  };

  return (
    <AdminLayout header="Create Career Domain">
      <Head title="Create Career Domain" />

      <div className="card">
        <div className="card-body">

          <form onSubmit={handleSubmit}>
            <div className="row">

              {/* LEFT FORM */}
              <div className="col-md-6">

                <input
                  className="form-control mb-3"
                  placeholder="Title"
                  value={data.title}
                  onChange={(e) => setData("title", e.target.value)}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Subtitle"
                  value={data.subtitle}
                  onChange={(e) => setData("subtitle", e.target.value)}
                />

                <input
                  type="file"
                  className="form-control mb-3"
                  onChange={handleImage}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Link"
                  value={data.link}
                  onChange={(e) => setData("link", e.target.value)}
                />

                <textarea
                  className="form-control mb-3"
                  placeholder="Details"
                  value={data.details}
                  onChange={(e) => setData("details", e.target.value)}
                  rows="5"
                />

                <button className="btn btn-primary">
                  {processing ? "Saving..." : "Save"}
                </button>

                  <Link
                    href={route('admin.career-domains.index')}
                    className="btn btn-secondary ml-2"
                >
                    <i className="fas fa-times mr-1"></i> Cancel
                </Link>



              </div>

              {/* RIGHT PREVIEW */}
              <div className="col-md-6">

                <div className="card shadow-sm">

                <img
                    src={preview || "/images/preview.jpg"}
                    alt="Preview"
                    className="card-img-top"
                    style={{
                      height: 180,
                      width: "100%",
                      objectFit: "contain",
                      background: "#f8f9fa",
                      padding: "10px",
                    }}
                  />
                  <div className="card-body">

                    <h5>{data.title || "Title Preview"}</h5>

                    <p className="text-muted">
                      {data.subtitle || "Subtitle preview"}
                    </p>

                    <p style={{ fontSize: 14 }}>
                      {data.details || "Details preview..."}
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </form>

        </div>
      </div>
    </AdminLayout>
  );
}
