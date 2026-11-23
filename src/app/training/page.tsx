import { DateHeader } from "@/components/dashboard";
import { demoWorkouts } from "@/lib/fixtures";
export default function TrainingPage() {
  return <div className="page"><DateHeader title="Training" date="October 24 – 30" /><section className="panel"><div className="panel-title"><div><p className="eyebrow">Workout log</p><h2>Recent sessions</h2></div><button className="secondary-button" disabled title="Journal entry support requires live persistence">+ Manual entry</button></div><table className="table"><thead><tr><th>Date</th><th>Sport</th><th>Duration</th><th>Distance</th><th>Calories</th><th>Source</th></tr></thead><tbody>{demoWorkouts.map(w=><tr key={w.id}><td>{w.date}</td><td>{w.sport}</td><td>{w.duration} min</td><td>{w.distance ? `${w.distance} km` : "Not recorded"}</td><td>{w.calories} kcal</td><td>{w.source}</td></tr>)}</tbody></table></section></div>;
}
