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

const KPI_ITEMS = [
  { key: "logged_in_users", label: "Logged-in Users", icon: "fa-user-check", color: "#10b981" },
  { key: "total_student", label: "Students", icon: "fa-user-graduate", color: "#06b6d4" },
  { key: "total_teacher", label: "Teachers", icon: "fa-chalkboard-teacher", color: "#22c55e" },
  { key: "total_parent", label: "Parents", icon: "fa-users", color: "#f59e0b" },
  { key: "total_counselor", label: "Verified Counsellors", icon: "fa-user-tie", color: "#f43f5e" },
  { key: "unsolved_reports", label: "Unsolved Reports", icon: "fa-times-circle", color: "#ef4444" },
  { key: "total_iti_colleges", label: "ITI Colleges", icon: "fa-university", color: "#3b82f6" },
  { key: "total_central_universities", label: "Central Universities", icon: "fa-school", color: "#475569" },
];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const formatDate = () =>
  new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const getAvatarUrl = (avatarPath, name) => {
  if (avatarPath && avatarPath.trim() !== "") {
    return avatarPath.startsWith("http") ? avatarPath : `/storage/${avatarPath}`;
  }
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "User")}&background=007bff&color=fff&size=40`;
};

const formatRole = (role) =>
  (role || "").replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());

const Dashboard = ({
  stats = {},
  recentUsers = [],
  weeklyUsers = {},
  userDistribution = {},
  user = {},
}) => {

 // console.log('weeklyUsers:', weeklyUsers); // TEMP - debug
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
        backgroundColor: ["#06b6d4", "#22c55e", "#f59e0b"],
        borderWidth: 0,
        hoverOffset: 6,
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 10,
          padding: 16,
          font: { size: 12, weight: 500 },
          usePointStyle: true,
          pointStyle: "circle",
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
        backgroundColor: "#4f46e5",
        borderRadius: 8,
        maxBarThickness: 36,
      },
    ],
  };

  const barOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111827",
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "#f1f2f6" },
        ticks: { font: { size: 11 } },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
    },
  };

  const totalActiveish =
    (stats.total_student ?? 0) +
    (stats.total_teacher ?? 0) +
    (stats.total_parent ?? 0) +
    (stats.total_counselor ?? 0);

  return (
    <AdminLayout header="Dashboard">
      <Head title="Dashboard" />

      <style>{`
        .pd-greeting {
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 45%, #06b6d4 100%);
          border-radius: 16px;
          padding: 28px 32px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .pd-greeting::after {
          content: "";
          position: absolute;
          right: -60px;
          top: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }
        .pd-greeting::before {
          content: "";
          position: absolute;
          right: 40px;
          bottom: -80px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
        }
        .pd-greeting h2 { font-weight: 700; margin-bottom: 4px; position: relative; }
        .pd-greeting p { opacity: 0.9; margin-bottom: 0; position: relative; font-size: 0.92rem; }
        .pd-greeting .pd-pill {
          background: rgba(255,255,255,0.16);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.82rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .pd-kpi {
          background: #fff;
          border-radius: 14px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
          border: 1px solid #f1f2f6;
          transition: transform .18s ease, box-shadow .18s ease;
          height: 100%;
        }
        .pd-kpi:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(16, 24, 40, 0.09);
        }
        .pd-kpi-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
        }
        .pd-kpi-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          line-height: 1.1;
        }
        .pd-kpi-label {
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 500;
          margin-top: 2px;
        }

        .pd-card {
          border-radius: 16px;
          border: 1px solid #f1f2f6;
          box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
        }
        .pd-card .card-header {
          background: transparent;
          border-bottom: 1px solid #f1f2f6;
          border-radius: 16px 16px 0 0 !important;
        }
        .pd-card .card-title {
          font-weight: 700;
          font-size: 1rem;
          color: #111827;
        }
        .pd-card-subtitle {
          font-size: 0.8rem;
          color: #9ca3af;
          margin-top: 2px;
        }

        .pd-table thead th {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #6b7280;
          border-top: none;
          border-bottom: 1px solid #f1f2f6;
          font-weight: 600;
        }
        .pd-table td {
          vertical-align: middle;
          border-color: #f5f6fa;
        }
        .pd-table tbody tr:hover { background: #fafbff; }
        .pd-role-badge {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
        }

       .pd-corner-btn {
          position: absolute;
          top: 16px;
          right: 16px;
        }

      `}</style>

      <div className="container-fluid">

        {/* ================= GREETING HEADER ================= */}
        <div className="pd-greeting mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap" style={{ gap: 12 }}>
            <div>
              <h2>{getGreeting()}, {user?.name || "Admin"} 👋</h2>
              <p>{formatDate()} — here's what's happening on Career Builder today.</p>
            </div>
            <span className="pd-pill">
              <i className="fas fa-bolt"></i>
              {totalActiveish} people on the platform
            </span>
          </div>
        </div>

        {/* ================= KPI CARDS ================= */}
        <div className="row">
          {KPI_ITEMS.map(({ key, label, icon, color }) => (
            <div className="col-xl-3 col-md-6 mb-4" key={key}>
              <div className="pd-kpi">
                <div
                  className="pd-kpi-icon"
                  style={{ background: `${color}1A`, color }}
                >
                  <i className={`fas ${icon}`}></i>
                </div>
                <div>
                  <div className="pd-kpi-value">{stats[key] ?? 0}</div>
                  <div className="pd-kpi-label">{label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CHARTS ================= */}
        <div className="row">
          {/* Pie */}
          <div className="col-md-4 mb-4">
            <div className="pd-card card h-100">
              <div className="card-header border-0 pb-0">
                <h3 className="card-title">User Distribution</h3>
                <div className="pd-card-subtitle">Students, teachers & parents</div>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div style={{ width: 220, height: 220 }}>
                  <Pie data={pieData} options={pieOptions} />
                </div>
              </div>
            </div>
          </div>

          {/* Bar */}
          <div className="col-md-8 mb-4">
            <div className="pd-card card h-100">
              <div className="card-header border-0 pb-0">
                <h3 className="card-title">Weekly User Registration</h3>
                <div className="pd-card-subtitle">New sign-ups over the last 7 days</div>
              </div>
              <div className="card-body" style={{ height: 260 }}>
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RECENT USERS ================= */}
        <div className="row">
          <div className="col-12 mb-4">
            <div className="pd-card card">
              <div className="card-header border-0 pb-0 d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="card-title">Recent Users</h3>
                  <div className="pd-card-subtitle">Latest people who joined the platform</div>
                </div>
                <Link href="/admin/users" className="btn btn-sm btn-outline-primary pd-corner-btn">
                  View All <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table pd-table mb-0">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.length ? (
                        recentUsers.map((u) => (
                          <tr key={u.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={getAvatarUrl(u.avatar, u.name)}
                                  alt={u.name}
                                  className="img-circle mr-2"
                                  width="32"
                                  height="32"
                                  onError={(e) => {
                                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name || "User")}&background=007bff&color=fff&size=32`;
                                  }}
                                />
                                <span className="font-weight-500">{u.name}</span>
                              </div>
                            </td>
                            <td>
                              <span
                                className={`pd-role-badge ${
                                  u.role === "super_admin"
                                    ? "badge-danger"
                                    : u.role === "teacher"
                                    ? "badge-warning"
                                    : u.role === "parent"
                                    ? "badge-info"
                                    : "badge-secondary"
                                }`}
                              >
                                {formatRole(u.role)}
                              </span>
                            </td>
                            <td className="text-muted">{u.email}</td>
                            <td className="text-muted">
                              {u.created_at
                                ? new Date(u.created_at).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  })
                                : "-"}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center text-muted py-4">
                            No recent users to show.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Dashboard;
