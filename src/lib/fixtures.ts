export type DemoDay = {
  date: string;
  recovery: number | null;
  hrv: number | null;
  overnightHeartRate: number | null;
  respiratoryRate: number | null;
  sleepMinutes: number | null;
  sleepScore: number | null;
  load: number | null;
  distanceKm: number | null;
  sport: string | null;
};

export const demoDays: DemoDay[] = Array.from({ length: 30 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 9, 30 - index));
  const cycle = index % 7;
  const missing = index === 4 || index === 11 || index === 23;
  return {
    date: date.toISOString().slice(0, 10),
    recovery: missing ? null : 68 + ((index * 7) % 19),
    hrv: missing ? null : 44 + ((index * 5) % 18),
    overnightHeartRate: missing ? null : 50 + ((index * 3) % 8),
    respiratoryRate: missing ? null : 13.2 + ((index % 5) * 0.3),
    sleepMinutes: missing ? null : 405 + ((index * 29) % 95),
    sleepScore: missing ? null : 70 + ((index * 11) % 21),
    load: cycle === 2 || cycle === 5 ? 420 + ((index * 37) % 180) : cycle === 6 ? 120 : null,
    distanceKm: cycle === 2 ? 8.4 : cycle === 5 ? 18.2 : null,
    sport: cycle === 2 ? "Climbing" : cycle === 5 ? "Running" : cycle === 6 ? "Strength" : null,
  };
}).reverse();

export const demoWorkouts = [
  { id: "ex-101", date: "2026-10-30", sport: "Climbing", duration: 98, distance: null, calories: 620, source: "Demo fixture" },
  { id: "ex-102", date: "2026-10-29", sport: "Running", duration: 42, distance: 8.4, calories: 480, source: "Demo fixture" },
  { id: "ex-103", date: "2026-10-27", sport: "Strength", duration: 64, distance: null, calories: 390, source: "Demo fixture" },
];
