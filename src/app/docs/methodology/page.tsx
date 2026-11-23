export default function MethodologyPage() {
  return <main className="page"><p className="eyebrow">Documentation</p><h1>Metric methodology</h1><section className="panel" style={{lineHeight:1.7}}>
    <h2>Source classes</h2><p><strong>Polar-provided:</strong> native values, names, units, and scales returned by Polar. <strong>Application-derived:</strong> documented calculations only. <strong>User-entered:</strong> RPE, notes, goals, and configuration. <strong>Demo fixture:</strong> deterministic sample data.</p>
    <h2>Missing data</h2><p>Absence remains missing. The application does not convert missing observations to zero or interpolate gaps.</p>
    <h2>Local dates</h2><p>Live nightly records will use the wake date in the configured IANA timezone, while preserving source timestamps and offsets.</p>
    <h2>Experimental readiness</h2><p>No readiness estimate is implemented. No formula, population cutoff, or clinical interpretation is presented.</p>
  </section></main>;
}
