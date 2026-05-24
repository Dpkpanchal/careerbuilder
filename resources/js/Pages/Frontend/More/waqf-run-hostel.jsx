// src/pages/more/waqf-run-hostels.js
"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';

/* =========================
   DATA (INLINE – AS ASKED)
   ========================= */

// const WAQF_HOSTELS = [
//   {
//     no: 1,
//     name: "Suri Muslim Girls’ Hostel",
//     address: "P.O. & P.S. Suri, Dist. Birbhum",
//     seats: 84,
//     contact: "9734271936",
//   },
//   {
//     no: 2,
//     name: "Suri Muslim Boys’ Hostel",
//     address: "P.O. & P.S. Suri, Dist. Birbhum",
//     seats: 65,
//     contact: "9475365138",
//   },
//   {
//     no: 3,
//     name: "Burdwan Muslim Girls’ Hostel",
//     address: "127, B.C. Road, Boro Bazar, Dist. Burdwan",
//     seats: 95,
//     contact: "9734796791",
//   },
//   {
//     no: 4,
//     name: "Berhampore Muslim Girls’ Hostel",
//     address: "P.O. & P.S. Berhampore, Dist. Murshidabad",
//     seats: 235,
//     contact: "0342-22566226",
//   },
//   {
//     no: 5,
//     name: "Sayedul Hoque Muslim Girls’ Hostel",
//     address: "Narohari Mukherjee Lane, Judge Court Para, Krishnanagar, Dist. Nadia",
//     seats: 111,
//     contact: "9474078424",
//   },
//   {
//     no: 6,
//     name: "Bashirhat Begum Rokeya Muslim Girls’ Hostel",
//     address: "P.O. Bashirhat, Dist. North 24 Parganas",
//     seats: 60,
//     contact: "9732973866",
//   },
//   {
//     no: 7,
//     name: "Midnapore Muslim Girls’ Hostel",
//     address: "Shipai Bazar, Dist. West Midnapore",
//     seats: 60,
//     contact: "9434438733",
//   },
//   {
//     no: 8,
//     name: "Maldah Muslim Girls’ Hostel",
//     address: "Kuttitola Lane, Malda Town, Dist. Malda",
//     seats: 58,
//     contact: "9233302173",
//   },
//   {
//     no: 9,
//     name: "Islampur Muslim Girls’ Hostel",
//     address: "P.O. & P.S. Islampur, Dist. Uttar Dinajpur",
//     seats: 66,
//     contact: "9434676162",
//   },
//   {
//     no: 10,
//     name: "Balurghat Muslim Girls’ Hostel",
//     address: "P.O. & P.S. Balurghat, Dist. Dakshin Dinajpur",
//     seats: 95,
//     contact: "8906708042",
//   },
//   {
//     no: 11,
//     name: "Purulia Muslim Girls’ Hostel",
//     address: "P.O. & P.S. Purulia, Dist. Purulia",
//     seats: 21,
//     contact: "0351-2251304",
//   },
//   {
//     no: 12,
//     name: "Boo-Ali Muslim Boys’ Hostel & Empowerment Centre",
//     address: "1, No. Kaiser Street, Kolkata – 09",
//     seats: 140,
//     contact: "7031931750",
//   },
//   {
//     no: 13,
//     name: "A.K. Fazlul Hoque Muslim Girls’ Hostel",
//     address: "31, Dilkhusa Street, Park Circus, Kolkata – 17",
//     seats: 113,
//     contact: "9002913922",
//   },
//   {
//     no: 14,
//     name: "Abdul Hakim Boys’ Waqf Hostel",
//     address: "20A, Peary Mohan Ray Road, Chetla, Kolkata – 27",
//     seats: 120,
//     contact: "9932601811",
//   },
//   {
//     no: 15,
//     name: "Kolkata Muslim Girls’ Hostel",
//     address: "43, Dilkhusa Street, Park Circus, Kolkata – 17",
//     seats: 276,
//     contact: "9883852617 / 8622076799 / 033-22901701 / 9433185651",
//   },
// ];

/* =========================
   PAGE
   ========================= */

export default function WaqfRunHostelsPage({hostels}) {
  const WAQF_HOSTELS = hostels || [];
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Waqf-Run Hostels"
        breadcrumb="More → Waqf-Run Hostels"
        description="Information on Waqf-run hostels for students in West Bengal, including location, seat capacity, and contact details."
      />

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">Information About Waqf-Run Hostels</h2>
          <p className="jobsSectorNote">
            Waqf Board Office: 6/2, Madan Street, Kolkata – 700072
          </p>

          {/* Responsive scroll wrapper */}
          <div className="tableScrollWrap">
            <table className="table table-bordered align-middle mb-0 waqfTable">
              <thead>
                <tr>
                  <th style={{ width: 70 }}>No.</th>
                  <th style={{ width: 280 }}>Name of the Hostel</th>
                  <th>Address</th>
                  <th style={{ width: 120 }}>Seat Capacity</th>
                  <th style={{ width: 200 }}>Contact No.</th>
                </tr>
              </thead>
              <tbody>
                {WAQF_HOSTELS.map((h) => (
                  <tr key={h.no}>
                    <td className="fw-semibold">{h.no}</td>
                    <td className="fw-semibold">{h.name}</td>
                    <td>{h.address}</td>
                    <td>{h.seats}</td>
                    <td>{h.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-muted small mt-3">
            Tip: On mobile devices, swipe horizontally to view all columns.
          </div>
        </div>
      </section>

      {/* Page-local CSS (you can move to globals.css later) */}
      <style jsx global>{`
        .jobsSection {
          padding: 46px 0;
          background: #fff;
          scroll-margin-top: 160px;
        }

        .jobsSectorTitle {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin: 0 0 6px 0;
        }

        .jobsSectorNote {
          font-size: 14px;
          color: #666;
          margin: 0 0 18px 0;
          max-width: 900px;
        }

        /* Responsive table wrapper */
        .tableScrollWrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          background: #fff;
        }

        .waqfTable {
          min-width: 980px; /* forces horizontal scroll on mobile */
          margin: 0;
        }

        .waqfTable thead th {
          background: #f6f7f9;
          font-weight: 500;
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.35px;
          white-space: nowrap;
        }

        .waqfTable td {
          font-size: 14px;
          vertical-align: top;
        }
      `}</style>
      </FrontendLayout>
    </>
  );
}
