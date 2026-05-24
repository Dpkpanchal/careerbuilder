import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm , router} from "@inertiajs/react";

export default function Edit({ domain }) {

  const { data, setData, post, processing } = useForm({
    title: domain.title || "",
    subtitle: domain.subtitle || "",
    image: null,
    link: domain.link || "",
    details: domain.details || "",
  });

  const [preview, setPreview] = useState(
    domain.image ? `/storage/${domain.image}` : null
  );

  const handleImage = (e) => {
    const file = e.target.files[0];
    setData("image", file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

 

   const handleSubmit = (e) => {
              e.preventDefault();
      
              router.post(
                  `/admin/career-domains/${domain.id}`,
                  {
                      ...data,
                      _method: "PUT",
                  },
                  {
                      forceFormData: true,
                      preserveScroll: true,
                  }
              );
          };


  return (
    <AdminLayout header="Edit Career Domain">
      <Head title="Edit Career Domain" />

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
                  rows="5"
                  placeholder="Details"
                  value={data.details}
                  onChange={(e) => setData("details", e.target.value)}
                />

                <button className="btn btn-primary">
                  {processing ? "Updating..." : "Update"}
                </button>

              </div>

              {/* RIGHT PREVIEW */}
              <div className="col-md-6">

                <div className="card shadow-sm">

                  <img
                    src={preview || "/images/default.png"}
                    className="card-img-top"
                    style={{ height: 180, objectFit: "contain" , background: "#f8f9fa"}}
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