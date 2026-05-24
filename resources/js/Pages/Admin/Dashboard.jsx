// // resources/js/Pages/Admin/Dashboard.jsx
// import React from 'react';
// import AdminLayout from '@/Layouts/AdminLayout';
// import { Head, Link } from '@inertiajs/react';

// const Dashboard = ({ stats, recentUsers }) => {
//   console.log('Dashboard stats:', stats);
//     return (
//         <AdminLayout header="Dashboard">
//             <Head title="Dashboard" />
            
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-lg-3 col-6">
//                         <div className="small-box bg-info">
//                             <div className="inner">
//                                 <h3>{stats.total_student}</h3>
//                                 <p>Total Student</p>
//                             </div>
//                             <div className="icon">
//                                 <i className="fas fa-users"></i>
//                             </div>
//                             <Link href="/admin/users" className="small-box-footer">
//                                 More info <i className="fas fa-arrow-circle-right"></i>
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="col-lg-3 col-6">
//                         <div className="small-box bg-success">
//                             <div className="inner">
//                                 <h3>{stats.total_teacher}</h3>
//                                 <p>Total Teacher</p>
//                             </div>
//                             <div className="icon">
//                                 <i className="fas fa-user-plus"></i>
//                             </div>
//                             <Link href="/admin/users" className="small-box-footer">
//                                 More info <i className="fas fa-arrow-circle-right"></i>
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="col-lg-3 col-6">
//                         <div className="small-box bg-warning">
//                             <div className="inner">
//                                 <h3>{stats.total_parent}</h3>
//                                 <p>Total Parent</p>
//                             </div>
//                             <div className="icon">
//                                 <i className="fas fa-user-check"></i>
//                             </div>
//                             <Link href="/admin/users" className="small-box-footer">
//                                 More info <i className="fas fa-arrow-circle-right"></i>
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="col-lg-3 col-6">
//                         <div className="small-box bg-danger">
//                             <div className="inner">
//                                 <h3>{stats.total_counselor}</h3>
//                                 <p>Total Counsellor</p>
//                             </div>
//                             <div className="icon">
//                                 <i className="fas fa-dollar-sign"></i>
//                             </div>
//                             <a href={"counsellors"} className="small-box-footer">
//                                 More info <i className="fas fa-arrow-circle-right"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Recent Users</h3>
//                             </div>
//                             <div className="card-body">
//                                 <table className="table table-bordered">
//                                     <thead>
//                                         <tr>
//                                             <th>Name</th>
//                                             <th>Email</th>
//                                             <th>Role</th>
//                                             <th>Joined</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {recentUsers.map(user => (
//                                             <tr key={user.id}>
//                                                 <td>{user.name}</td>
//                                                 <td>{user.email}</td>
//                                                <td>
//                                                     <span
//                                                         className={`badge ${
//                                                         user.role === "student"
//                                                             ? "bg-info"
//                                                             : user.role === "teacher"
//                                                             ? "bg-success"
//                                                             : user.role === "parent"
//                                                             ? "bg-warning text-dark"
//                                                             : "bg-success"
//                                                         }`}
//                                                     >
//                                                         {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
//                                                     </span>
//                                                     </td>
//                                                 <td>{new Date(user.created_at).toLocaleDateString()}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="col-md-4">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Quick Actions</h3>
//                             </div>
//                             <div className="card-body">
//                                 <Link href="/admin/users/create" className="btn btn-primary btn-block mb-2">
//                                     <i className="fas fa-plus mr-2"></i> Add User
//                                 </Link>
//                                 <button className="btn btn-success btn-block mb-2">
//                                     <i className="fas fa-chart-bar mr-2"></i> View Reports
//                                 </button>
//                                 <button className="btn btn-info btn-block">
//                                     <i className="fas fa-cog mr-2"></i> Settings
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default Dashboard;

import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";

/* ===== Chart.js ===== */
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Dashboard = ({
  stats = {},
  recentUsers = [],
  weeklyUsers = {},
  userDistribution = {},
}) => {
  /* ================= PIE CHART ================= */
  const pieData = {
    labels: ["Students", "Teachers", "Parents"],
    datasets: [
      {
        data: [
          userDistribution?.student ?? 0,
          userDistribution?.teacher ?? 0,
          userDistribution?.parent ?? 0,
        ],
        backgroundColor: ["#17a2b8", "#28a745", "#ffc107"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          padding: 12,
          font: { size: 12 },
        },
      },
    },
  };

  /* ================= BAR CHART ================= */
  const barData = {
    labels: Object.keys(weeklyUsers || {}),
    datasets: [
      {
        label: "Users Added",
        data: Object.values(weeklyUsers || {}),
        backgroundColor: "#007bff",
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <AdminLayout header="Dashboard">
      <Head title="Dashboard" />

      <div className="container-fluid">

        {/* ================= CHARTS ================= */}
    

        {/* ================= KPI BOXES ================= */}
        <div className="row mt-3">
          {[
            ["bg-success", stats.logged_in_users, "Logged-in Users", "fa-user-check"],
            ["bg-info", stats.total_student, "Students", "fa-user-graduate"],
            ["bg-success", stats.total_teacher, "Teachers", "fa-chalkboard-teacher"],
            ["bg-warning", stats.total_parent, "Parents", "fa-users"],
            ["bg-danger", stats.total_counselor, "Counsellors", "fa-user-tie"],
            // ["bg-secondary", stats.total_categories, "Categories", "fa-list"],
            // ["bg-primary", stats.total_reports, "Reports", "fa-file-alt"],
            // ["bg-success", stats.solved_reports, "Solved Reports", "fa-check-circle"],
            ["bg-danger", stats.unsolved_reports, "Unsolved Reports", "fa-times-circle"],
            ["bg-info", stats.total_iti_colleges, "ITI Colleges", "fa-university"],
            ["bg-dark", stats.total_central_universities, "Central Universities", "fa-school"],
            
          ].map(([bg, value, label, icon], i) => (
            <div className="col-lg-3 col-6" key={i}>
              <div className={`small-box ${bg}`}>
                <div className="inner">
                  <h3>{value ?? 0}</h3>
                  <p>{label}</p>
                </div>
                <div className="icon">
                  <i className={`fas ${icon}`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>

            <div className="row">
          {/* Pie */}
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-header">
                <h3 className="card-title">User Distribution</h3>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div style={{ width: 200, height: 200 }}>
                  <Pie data={pieData} options={pieOptions} />
                </div>
              </div>
            </div>
          </div>

          {/* Bar */}
          <div className="col-md-8">
            <div className="card h-100">
              <div className="card-header">
                <h3 className="card-title">Weekly User Registration</h3>
              </div>
              <div className="card-body" style={{ height: 260 }}>
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>
        </div>



    

      </div>
    </AdminLayout>
  );
};

export default Dashboard;

