import { DateHeader, MetricCard, SimpleSpark } from "@/components/dashboard";
import { demoDays, demoWorkouts } from "@/lib/fixtures";

export default function Home() {
  const day = demoDays.at(-1)!;
  const week = demoDays.slice(-7);
  return (
    <div className="page">
      <DateHeader date="Friday, October 30" />
      <section className="metrics-grid">
        <MetricCard title="Recovery" value={day.recovery ? `${day.recovery}` : "Not available"} unit={day.recovery ? "/ 100" : undefined} detail="Demo fixture · Nightly Recharge status" />
        <MetricCard title="Sleep" value="7h 18m" detail="11:02 PM – 7:20 AM · Demo fixture" />
        <MetricCard title="Training" value="98" unit="min" detail="Climbing · 620 kcal" />
        <MetricCard title="Baseline" value="52" unit="ms" detail="HRV nightly average · Demo fixture" />
      </section>
      <section className="content-grid">
        <article className="panel wide"><div className="panel-title"><div><p className="eyebrow">Sleep trend</p><h2>7-day rhythm</h2></div><a href="/sleep">View sleep →</a></div><SimpleSpark values={week.map(d => d.sleepMinutes ? d.sleepMinutes / 60 : null)} /><div className="trend-axis"><span>Oct 24</span><span>Oct 30</span></div></article>
        <article className="panel observation"><p className="eyebrow">Observation</p><h2>Training looks steady</h2><p>This is a demo rule: climbing was the longest recent session.</p><a href="/training">See supporting activity →</a></article>
      </section>
      <section className="panel">
        <div className="panel-title"><div><p className="eyebrow">Recent workouts</p><h2>Latest activity</h2></div><a href="/training">All training →</a></div>
        <div className="workout-list">{demoWorkouts.map(workout => (
          <a className="workout-row" href="/training" key={workout.id}><span className="sport-icon">{workout.sport === "Running" ? "↗" : workout.sport === "Climbing" ? "◇" : "◆"}</span><div><strong>{workout.sport}</strong><small>{workout.date}</small></div><span>{workout.duration} min</span><span>{workout.distance ? `${workout.distance} km` : "—"}</span><span>{workout.calories} kcal</span></a>
        ))}</div>
      </section>
    </div>
  );
}
