import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("HASNAIN.OS runtime error:", error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <main style={{ minHeight: "100vh", padding: "40px", background: "#030405", color: "#eef7ff", fontFamily: "monospace" }}>
        <p style={{ color: "#62d8ff", letterSpacing: "0.15em" }}>HASNAIN.OS / RUNTIME ERROR</p>
        <h1>System halted instead of showing a blank screen.</h1>
        <pre style={{ whiteSpace: "pre-wrap", color: "#ffb4b4", lineHeight: 1.6 }}>{this.state.error?.stack || String(this.state.error)}</pre>
        <button type="button" onClick={() => window.location.reload()} style={{ marginTop: "20px", padding: "10px 16px", cursor: "pointer" }}>
          RELOAD SYSTEM
        </button>
      </main>
    );
  }
}