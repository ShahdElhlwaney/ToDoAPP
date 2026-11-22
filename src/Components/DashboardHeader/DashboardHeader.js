import "./dashboardHeader.css";
export default function DashboardHeader({ onSearch }) {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="dashboard-header">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="header-actions">
        {/* Search */}
        <div className="header-search">
          <i className="fa fa-search search-icon"></i>

          <input
            type="text"
            placeholder="Search tasks..."
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>

        {/* Notifications */}
        <button className="notification-btn" aria-label="Notifications">
          <i className="far fa-bell" style={{ fontSize: "24px" }}></i>

          <span className="notification-dot"></span>
        </button>

        {/* Date */}
        <div className="header-date">Today, {formattedDate}</div>
      </div>
    </header>
  );
}
