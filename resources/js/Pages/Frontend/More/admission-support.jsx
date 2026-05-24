"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from "@/Layouts/FrontendLayout";

export default function AdmissionSupportPage({
  connectingPoints,
  indianUniversities,
  foreignUniversities,
}) {
  return (
    <FrontendLayout>
      <HeroInner
        title="Admission Support"
        breadcrumb="More → Admission Support"
        description="Verified contact points and student coordinators assisting with university admissions in India and abroad."
      />

      {/* Connecting Points */}
      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">University Admission Support Team</h2>

          <div className="jobsTable">
            <div className="jobsTableRow jobsTableHead">
              <div>Name</div>
              <div>Contact Details</div>
            </div>

            {connectingPoints.map((p) => (
              <div key={p.id} className="jobsTableRow">
                <div className="jobsCellStrong">{p.name}</div>
                <div>
                  {p.phone && <div>📞 {p.phone}</div>}
                  {p.email && <div>✉ {p.email}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Universities */}
      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">
            Indian Universities – Admission Support Contacts
          </h2>

          <div className="jobsTable">
            <div className="jobsTableRow jobsTableHead">
              <div>Institution / Contact Person</div>
              <div>Mobile & Email</div>
            </div>

            {indianUniversities.map((u) => (
              <div key={u.id} className="jobsTableRow">
                <div>
                  <div className="jobsCellStrong">{u.university}</div>
                  <div className="jobsMutedSmall">{u.name}</div>
                </div>
                <div>
                  {u.phone && <div>{u.phone}</div>}
                  {u.email && <div>{u.email}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foreign Universities */}
      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">
            Foreign Universities – Admission Support Contacts
          </h2>

          <div className="jobsTable">
            <div className="jobsTableRow jobsTableHead">
              <div>Name & University</div>
              <div>Email</div>
            </div>

            {foreignUniversities.map((u) => (
              <div key={u.id} className="jobsTableRow">
                <div>
                  <div className="jobsCellStrong">{u.name}</div>
                  <div className="jobsMutedSmall">{u.university}</div>
                </div>
                <div>{u.email}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
