import "./stat.css";
export default function StateItem({ stat }) {
  return (
    <div className={`stat-item ${stat.className}`} key={stat.id}>
      <div className="stat-icon">{stat.icon}</div>

      <div className="stat-info">
        <span className="stat-title">{stat.title}</span>
        <span className="stat-count">{stat.count}</span>
      </div>
    </div>
  );
}
