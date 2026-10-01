function BootModule({ module, progress, completed, active }) {
  const isOnline = completed || progress >= 100;

  return (
    <div className={`boot-module ${active ? "active" : ""}`}>
      <div className="boot-module-header">
        <span className="module-name">{module.name}</span>

        <span className={`module-status ${isOnline ? "online" : ""}`}>
          {isOnline ? "ONLINE" : `${progress}%`}
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default BootModule;