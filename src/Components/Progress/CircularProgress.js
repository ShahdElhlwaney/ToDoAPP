import "./progress.css";
export default function CircularProgress({ progress }) {
  return (
    <div className="circular-progress" style={{ "--progress": `${progress}%` }}>
      <div className="circular-progress-inner">
        <span>{progress}%</span>
      </div>
    </div>
  );
}
