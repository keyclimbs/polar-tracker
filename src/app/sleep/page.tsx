import { DateHeader, MetricCard, SimpleSpark } from "@/components/dashboard";
import { demoDays } from "@/lib/fixtures";
export default function SleepPage() {
  const week = demoDays.slice(-7);
  return <div className="page"><DateHeader title="Sleep" date="Friday, October 30" /><section className="metrics-grid">
    <MetricCard title="Time asleep" value="7h 18m" detail="Excludes awake periods" />
    <MetricCard title="Time in bed" value="8h 18m" detail="11:02 PM – 7:20 AM" />
    <MetricCard title="Sleep score" value="82" unit="/ 100" detail="Polar-provided label and scale · If available" />
    <MetricCard title="Goal" value="8h" detail="User-configured sleep duration" kind="User-entered" />
  </section><section className="detail-grid"><article className="panel"><div className="panel-title"><div><p className="eyebrow">Stage breakdown</p><h2>Time in stage</h2></div></div><div className="stage-bar"><span className="deep" style={{width:"21%"}} /><span className="light" style={{width:"47%"}} /><span className="rem" style={{width:"27%"}} /><span className="awake" style={{width:"5%"}} /></div><div className="trend-axis"><span>Deep 1h 32m</span><span>Light 3h 25m</span><span>REM 1h 58m</span></div></article><article className="panel"><p className="eyebrow">Duration trend</p><h2>7 nights</h2><SimpleSpark values={week.map(d => d.sleepMinutes ? d.sleepMinutes/60 : null)} /></article></section></div>;
}
