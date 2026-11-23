import { DateHeader, MetricCard, SimpleSpark } from "@/components/dashboard";
import { demoDays } from "@/lib/fixtures";
export default function RecoveryPage() {
  const week = demoDays.slice(-7);
  return <div className="page"><DateHeader title="Recovery" date="Friday, October 30" /><section className="metrics-grid">
    <MetricCard title="Polar Nightly Recharge" value="Not available" detail="Native status and components appear when documented data is returned" />
    <MetricCard title="HRV nightly average" value="52" unit="ms" detail="Demo fixture · 30 min nightly period" />
    <MetricCard title="Overnight heart rate" value="54" unit="bpm" detail="Overnight observations, not inferred resting rate" />
    <MetricCard title="Respiratory rate" value="13.8" unit="/ min" detail="Available only from a compatible device/resource" />
  </section><section className="detail-grid"><article className="panel"><p className="eyebrow">Nightly HRV</p><h2>Personal trend</h2><SimpleSpark values={week.map(d=>d.hrv)} /></article><article className="panel"><p className="eyebrow">Baseline method</p><h2>Insufficient live history</h2><p style={{color:"#98a39e",lineHeight:1.6}}>Comparisons require locally stored personal observations. Demo values are fixtures and do not establish a biological baseline.</p></article></section></div>;
}
