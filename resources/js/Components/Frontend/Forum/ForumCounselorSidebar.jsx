"use client";

import React from "react";
import { Link } from '@inertiajs/react';

import {
  UserRound,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

const counsellors = [
  {
    id: 31,
    name: 'Ruksar Khatoon',
    qualification: 'Ph.D. in Physics',
    subject: 'General Subjects / Science / GATE / GRE / TOEFL / IELTS'
  },
  {
    id: 2,
    name: 'Dr. Mir Musaraf Hussain',
    qualification: 'Ph.D. in Biotechnology',
    subject: 'Microbiology / Biotechnology'
  },
  {
    id: 3,
    name: 'Md. Sayeedul Islam',
    qualification: 'Ph.D. in Mathematics',
    subject: 'Science & Mathematics'
  },
  {
    id: 4,
    name: 'Anwarul Haque',
    qualification: 'M.Com, MBA (HRM)',
    subject: 'Commerce & Business'
  },
  {
    id: 5,
    name: 'Md. Mosaraf Hossain',
    qualification: 'B.Ed, M.Ed, B.Sc, M.Sc',
    subject: 'D.El.Ed / B.Ed / M.Ed'
  },
  {
    id: 6,
    name: 'Engr. Syed Mahmud',
    qualification: 'B.Tech, M.Tech, Ph.D.',
    subject: 'Vocational / ITI / Diploma Programs'
  },
  {
    id: 7,
    name: 'Kh. Jinnatul Islam',
    qualification: 'B.Tech in CSE, M.E, B.Sc',
    subject: 'Engineering / BE / IT / JEE'
  },
  {
    id: 8,
    name: 'Dr. Anwar Saadt Halder',
    qualification: 'MBBS (Medicine), D.Ph.',
    subject: 'Medical & Healthcare'
  },
  {
    id: 9,
    name: 'Dr. Chowdhury Masoom Hossain',
    qualification: 'M.Pharm, Ph.D. (Pharmacy)',
    subject: 'Pharmacy / GATE / GRE'
  },
  {
    id: 10,
    name: 'Mst Reza',
    qualification: 'LL.M, UGC NET',
    subject: 'Law / CLAT / Judicial Services'
  },
  {
    id: 11,
    name: 'Aqueel Khan',
    qualification: 'B.Sc., M.Sc., BMC, WBCS Officer',
    subject: 'WBCS / UPSC / Civil Services'
  },
  {
    id: 12,
    name: 'Md Nazmuddin',
    qualification: 'B.Tech, MBA',
    subject: 'BBA / MBA / Business Management'
  },
  {
    id: 13,
    name: 'Dr. Md Riyaz',
    qualification: 'Ph.D. in Mass Communication',
    subject: 'Journalism / Mass Communication'
  },
  {
    id: 14,
    name: 'Ruksar Khatoon',
    qualification: 'M.A. in Social Work',
    subject: 'Social Work / BSW / MSW'
  },
  {
    id: 15,
    name: 'Enam Ali',
    qualification: 'DHMC and CT',
    subject: 'Hotel Management & Hospitality'
  },
  {
    id: 16,
    name: 'Dr. Abdus Samad',
    qualification: 'Ph.D. in Medical Sciences',
    subject: 'Paramedical / Nursing / Mechanical Engineering'
  },
  {
    id: 17,
    name: 'Dr. Rabi Subel',
    qualification: 'Ph.D. in Arts',
    subject: 'Arts & Humanities'
  },
  {
    id: 18,
    name: 'Abir Ahamed',
    qualification: 'M.A. in Statistics',
    subject: 'Data Analysis / Statistics / Software'
  },
  {
    id: 19,
    name: 'Jahangir Alam',
    qualification: 'Diploma in Animation',
    subject: 'Graphics Design / Animation / Digital Media'
  },
  {
    id: 20,
    name: 'Dr. Afzalur Zaman',
    qualification: 'Ph.D. in Agricultural Engineering',
    subject: 'Agriculture / Mechanical Engineering'
  },
  {
    id: 21,
    name: 'Touhidul Islam',
    qualification: 'Master of Visual Arts, B.Ed, M.Ed',
    subject: 'Visual Arts / Fine Arts'
  }
];

export default function ForumCounselorSidebar({counsellorsData}) {
  console.log("counsellors data", counsellorsData);
  return (
    <div className="forum-counselors">
      <h6
        className="text-uppercase text-muted  px-lg-3 pt-3 px-2"
      >
        Verified Counselors
      </h6>

      <ul className="list-unstyled m-0">
        {counsellorsData.map((c) => (
          <li
            key={c.id}
            className="p-2 px-lg-4 counselor-item"
          >
            <Link href={`/forum/replies?counsellor_id=${c.id}`} className="text-decoration-none text-dark">
              <div className="d-flex align-items-start gap-2">
                <div className="flex-grow-1">
                  <div className="fw-semibold small">{c.name}</div>
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {c.qualification}
                  </div>
                  <div className="small mt-1 text-secondary">
                    {c.subject}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}