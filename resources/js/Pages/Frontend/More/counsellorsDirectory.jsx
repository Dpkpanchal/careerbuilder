"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';

/* =========================
   HELPERS
   ========================= */
const cleanPhone = (phone) => String(phone || "").replace(/[^\d+]/g, "");
const telHref = (phone) => {
  const p = cleanPhone(phone);
  if (!p) return "";
  // if multiple numbers, take first valid
  const first = p.split("+").filter(Boolean)[0] ? `+${p.split("+").filter(Boolean)[0]}` : p;
  return `tel:${first}`;
};

/* =========================
   REAL DATA (INLINE)
   Grouped by Subject
   ========================= */
const COUNSELLOR_GROUPS = [
  {
    no: 1,
    subject: "General Subjects (Science / Arts / Commerce)",
    persons: [
      { name: "Dr Nurul Alam (Science)", qualification: "Ph.D (Physics)", phone: "8906964777", email: "nurulalam.ju@gmail.com" },
      { name: "Dr Abu Saleh (Arts)", qualification: "Ph.D (English)", phone: "9494242645", email: "abusalehenglish@gmail.com" },
      { name: "Md Sayeedul Islam (Science)", qualification: "Ph.D (Math)", phone: "9051048847", email: "sayeedul.jumath@gmail.com" },
      { name: "Anwarul Haque (Commerce)", qualification: "M.Com, MBA (HRM)", phone: "9007276709", email: "molla_anwarul@yahoo.com" },
    ],
  },
  {
    no: 2,
    subject: "D.Ed / B.Ed / M.Ed",
    persons: [
      { name: "Dr Mosarraf Hossain", qualification: "M.Sc, B.Ed, M.Ed, Ph.D", phone: "8617705375", email: "mosarrafhossain2103@gmail.com" },
    ],
  },
  {
    no: 3,
    subject: "Vocational / ITI / Diploma",
    persons: [
      { name: "Dr Syed Mahamud Hossain", qualification: "B.Tech, M.Tech, Ph.D", phone: "9143467342 / 9475890484", email: "mahamud123@gmail.com" },
    ],
  },
  {
    no: 4,
    subject: "Engineering (WBJEE / IIT JEE)",
    persons: [
      { name: "Kh. Jinnatul Islam", qualification: "B.Tech in CSE, M.E in CSE", phone: "9830072424 / 9748383342", email: "kjislam@gmail.com" },
    ],
  },
  {
    no: 5,
    subject: "Medical",
    persons: [
      { name: "Dr Anwar Sadat Halder", qualification: "MBBS, MD", phone: "8902408420", email: "anwarpg786@gmail.com" },
    ],
  },
  {
    no: 6,
    subject: "Pharmacy",
    persons: [
      { name: "Dr Chowdhury Masoom Hossain", qualification: "M.Pharm (Gold Medalist), Ph.D (JU), Post-Doc (USA)", phone: "7001686560", email: "masoomchowdhury@gmail.com" },
    ],
  },
  {
    no: 7,
    subject: "GATE / GRE / TOEFL / IELTS",
    persons: [
      { name: "Dr Nurul Alam", qualification: "Ph.D (Physics)", phone: "8906964777", email: "nurulalam.ju@gmail.com" },
      { name: "Dr Samirul Islam", qualification: "Ph.D (Chemistry)", phone: "8582811632", email: "samirul.iitd@gmail.com" },
      { name: "Dr Chowdhury Masoom Hossain", qualification: "Ph.D (Pharmacy)", phone: "7001686560", email: "masoomchowdhury@gmail.com" },
    ],
  },
  {
    no: 8,
    subject: "Law / CLAT / Judicial / NET / SLET",
    persons: [
      { name: "Wasif Reza", qualification: "LLB, LLM, UGC-NET", phone: "9681145095", email: "wasifreza@yahoo.in" },
    ],
  },
  {
    no: 9,
    subject: "WBCS / UPSC Exam",
    persons: [
      { name: "Aaqueel Khan", qualification: "B.Sc., M.Sc.", phone: "7003121151", email: "aaquelkhan72@gmail.com" },
    ],
  },
  {
    no: 10,
    subject: "BBA / MBA / BCA / MCA",
    persons: [
      { name: "Y R Gazi", qualification: "B.Tech, MBA", phone: "9775100771", email: "gaziengg@gmail.com" },
      { name: "Md Nazimuddin", qualification: "B.Tech, MBA", phone: "9474411115", email: "suman_2266@yahoo.co.in" },
    ],
  },
  {
    no: 11,
    subject: "Journalism & Mass Communication",
    persons: [
      { name: "Dr Md Reyaz", qualification: "Ph.D", phone: "8017596380", email: "reyazmd@gmail.com" },
    ],
  },
  {
    no: 12,
    subject: "BSW / MSW",
    persons: [
      { name: "Ruksar Khatun", qualification: "Ph.D", phone: "6295823627 / 8967449086", email: "ruksar1khatun@gmail.com" },
    ],
  },
  {
    no: 13,
    subject: "Hotel Management",
    persons: [
      { name: "Enam Ali", qualification: "DHMC and CT", phone: "9836121110", email: "enam.himalaya@gmail.com" },
    ],
  },
  {
    no: 14,
    subject: "Paramedical Courses / Nursing",
    persons: [
      { name: "Dr Iqbal", qualification: "Ph.D", phone: "9953971178", email: "iqbalasc@yahoo.com" },
      { name: "Dr Abdus Samad (Medicine)", qualification: "Ph.D", phone: "8777607967", email: "profdrsasamad@gmail.com" },
    ],
  },
  {
    no: 15,
    subject: "Microbiology",
    persons: [
      { name: "Dr Mir Musaraf Hussain", qualification: "Ph.D", phone: "9434306914", email: "mirmusaraf@rediffmail.com" },
    ],
  },
  {
    no: 16,
    subject: "Biotechnology",
    persons: [
      { name: "Dr Abdus Samad", qualification: "Ph.D", phone: "9500130279", email: "abdussamad77@yahoo.co.in" },
    ],
  },
  {
    no: 17,
    subject: "Data Analysis / STATA / R / Software",
    persons: [
      { name: "Sabir Ahamed", qualification: "M.A", phone: "9831632697", email: "sabirahamed@gmail.com" },
    ],
  },
  {
    no: 18,
    subject: "Graphic Design / Animation / Video Editing",
    persons: [
      { name: "Jahangir Alam", qualification: "Diploma in Animation", phone: "9339961668", email: "jahangir.net@gmail.com" },
    ],
  },
  {
    no: 19,
    subject: "Ocean Engineering / Marine Science / Petroleum Engg",
    persons: [
      { name: "Dr Abdus Samad", qualification: "Ph.D", phone: "9500130279", email: "abdussamad77@yahoo.co.in" },
    ],
  },
  {
    no: 20,
    subject: "Agriculture",
    persons: [
      { name: "Dr Aftabuz Zaman", qualification: "Ph.D", phone: "9433208363", email: "profazaman@gmail.com" },
    ],
  },
  {
    no: 21,
    subject: "Visual / Fine Arts",
    persons: [
      { name: "Touhidul Islam", qualification: "Bachelor of Visual Arts, Master of Fine Arts, B.Ed, M.Ed", phone: "9609732404", email: "touhidulislam132@gmail.com" },
    ],
  },

  // Additional subjects (22–33)
  {
    no: 22,
    subject: "Arabic Language",
    persons: [{ name: "Dr Mohd. Tabish Khan", qualification: "Ph.D", phone: "8972815804", email: "tabishkhan05@gmail.com" }],
  },
  {
    no: 23,
    subject: "Persian Language",
    persons: [{ name: "Sk. Md. Hafizur", qualification: "Ph.D", phone: "9891144521", email: "-" }],
  },
  {
    no: 24,
    subject: "Japanese Language",
    persons: [{ name: "Sk Sabir Ali", qualification: "Master in Library Science", phone: "9153121883 / 7384835499", email: "sksabirali333@gmail.com" }],
  },
  {
    no: 25,
    subject: "BLIS / MLIS",
    persons: [{ name: "Dr Ziaur Rahman", qualification: "Ph.D", phone: "9434890165", email: "ziaurnbu@gmail.com" }],
  },
  {
    no: 26,
    subject: "Chartered Accountant",
    persons: [{ name: "Dr Abdur Rahim Faiz Anwar", qualification: "Chartered Accountant", phone: "8100051555 / 8444057949", email: "arahimcal@gmail.com" }],
  },
  {
    no: 27,
    subject: "GIS & Remote Sensing",
    persons: [{ name: "Tanvir Islam", qualification: "M.A", phone: "9831140809", email: "tanvir888islam@gmail.com" }],
  },
  {
    no: 28,
    subject: "Population Science / Demography / Public Health",
    persons: [{ name: "Samarul Islam", qualification: "M.Phil, Ph.D", phone: "7407359942", email: "samarulislam123@gmail.com" }],
  },
  {
    no: 29,
    subject: "Disaster Management",
    persons: [{ name: "Nasidul Islam", qualification: "M.Sc, Ph.D", phone: "8850009490", email: "nasidulphd@gmail.com" }],
  },
  {
    no: 30,
    subject: "Museology",
    persons: [{ name: "Debarghya Dey", qualification: "M.A", phone: "9083786793", email: "-" }],
  },
  {
    no: 31,
    subject: "Nutrition",
    persons: [{ name: "Sultana Parvin", qualification: "M.A, M.Phil", phone: "7585063330", email: "p.sulu2018@gmail.com" }],
  },
  {
    no: 32,
    subject: "Development Studies",
    persons: [{ name: "Mohona Maitra", qualification: "M.Sc, M.Phil", phone: "9830042676", email: "mohona.maitra@gmail.com" }],
  },
  {
    no: 33,
    subject: "Statistics",
    persons: [{ name: "Siddhartha Mitra", qualification: "M.A", phone: "7059787929 / 9674216255", email: "siddhartha.13mitra@gmail.com" }],
  },
];

/* =========================
   PAGE / COMPONENT
   ========================= */

export default function CounsellorsDirectory({groups}) {


  const COUNSELLOR_GROUPS = groups || [];
  console.log('data', groups)
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Counsellors Directory"
        breadcrumb="More → Counsellors Directory"
        description="Contact details of SNAP career counsellors (subject-wise). Tap a phone number on mobile to call directly."
      />

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">Contact Details of SNAP Career Counsellors</h2>
          <p className="jobsSectorNote">
            This directory is subject-wise. If a subject has multiple resource persons, all are listed under that subject.
          </p>

          {/* Responsive table wrapper (mobile horizontal scroll) */}
          <div className="tableScrollWrap">
            <table className="table table-bordered align-middle mb-0 counsellorTable">
              <thead>
                <tr>
                  <th style={{ width: 70 }}>No.</th>
                  <th style={{ width: 320 }}>Subject</th>
                  <th>Resource Person(s)</th>
                  <th style={{ width: 220 }}>Contact</th>
                  <th style={{ width: 260 }}>Email</th>
                </tr>
              </thead>
              <tbody>
                {COUNSELLOR_GROUPS.map((g) => (
                  <tr key={g.no}>
                    <td className="fw-semibold">{String(g.no).padStart(2, "0")}</td>
                    <td className="fw-semibold">{g.subject}</td>

                    <td>
                      <div className="d-flex flex-column gap-2">
                        {g.persons.map((p, idx) => (
                          <div key={idx}>
                            <div className="fw-semibold">{p.name}</div>
                            <div className="text-muted small">{p.qualification}</div>
                          </div>
                        ))}
                      </div>
                    </td>

                    <td>
                      <div className="d-flex flex-column gap-2">
                        {g.persons.map((p, idx) => {
                          // if multiple numbers in one string, split by /
                          const parts = String(p.phone || "-").split("/").map((x) => x.trim()).filter(Boolean);
                          if (!parts.length) return <div key={idx}>-</div>;

                          return (
                            <div key={idx} className="d-flex flex-column gap-1">
                              {parts.map((ph, j) => {
                                const href = `tel:${cleanPhone(ph)}`;
                                const valid = cleanPhone(ph).length >= 10;
                                return (
                                  <div key={j}>
                                    {valid ? (
                                      <a className="callLink" href={href}>
                                        {ph}
                                      </a>
                                    ) : (
                                      <span>{ph}</span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </td>

                    <td>
                      <div className="d-flex flex-column gap-2">
                        {g.persons.map((p, idx) => (
                          <div key={idx}>
                            {p.email && p.email !== "-" ? (
                              <a className="mailLink" href={`mailto:${p.email}`}>
                                {p.email}
                              </a>
                            ) : (
                              <span>-</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </td>
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

      {/* Styles (professional + consistent with other resources pages) */}
      <style jsx global>{`
        .jobsSection {
          padding: 46px 0;
          background: #fff;
        }

        .jobsSectorTitle {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .jobsSectorNote {
          font-size: 14px;
          color: #666;
          margin: 0 0 18px 0;
          max-width: 920px;
        }

        .tableScrollWrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          background: #fff;
        }

        .counsellorTable {
          min-width: 1100px;
          margin: 0;
        }

        .counsellorTable thead th {
          background: #f6f7f9;
          font-weight: 500;
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.35px;
          white-space: nowrap;
        }

        .counsellorTable td {
          font-size: 14px;
          vertical-align: top;
        }

        .callLink {
          color: var(--bs-primary);
          text-decoration: none;
          font-weight: 500;
        }
        .callLink:hover {
          text-decoration: underline;
        }

        .mailLink {
          color: var(--bs-primary);
          text-decoration: none;
          font-weight: 650;
          word-break: break-word;
        }
        .mailLink:hover {
          text-decoration: underline;
        }
      `}</style>
      </FrontendLayout>
    </>
  );
}
