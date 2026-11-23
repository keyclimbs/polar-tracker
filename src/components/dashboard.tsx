"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  ["Today", "/"], ["Sleep", "/sleep"], ["Recovery", "/recovery"],
  ["Training", "/training"], ["Trends", "/trends"], ["Settings", "/settings"],
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="app-shell">
      <aside className={open ? "sidebar open" : "sidebar"}>
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">P</span><span>Polar Tracker</span>
        </Link>
        <nav aria-label="Primary">
          {nav.map(([label, href]) => (
            <Link key={href} className={pathname === href ? "nav-link active" : "nav-link"} href={href} onClick={() => setOpen(false)}>
              <span className="nav-dot" />{label}
            </Link>
          ))}
        </nav>
        <div className="demo-label"><span>Demo data</span><small>30 deterministic days</small></div>
      </aside>
      <main className="main">
        <header className="topbar">
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
          <div className="sync-status"><span className="status-dot" />Demo sync · 2026-10-30 08:24</div>
          <button className="avatar" aria-label="Account menu">KC</button>
        </header>
        {children}
      </main>
    </div>
  );
}

export function MetricCard({ title, value, unit, detail, kind = "Polar-provided" }: {
  title: string; value: string; unit?: string; detail: string; kind?: string;
}) {
  return (
    <article className="metric-card">
      <div className="metric-heading"><span>{title}</span><span className="info">i</span></div>
      <div className="metric-value">{value}{unit && <small>{unit}</small>}</div>
      <p>{detail}</p>
      <span className="kind-label">{kind}</span>
    </article>
  );
}

export function DateHeader({ title = "Today", date = "Friday, Oct 30" }: { title?: string; date?: string }) {
  return (
    <div className="page-heading">
      <div><p className="eyebrow">{title}</p><h1>{date}</h1></div>
      <div className="date-controls" aria-label="Date navigation">
        <button aria-label="Previous day">‹</button><button aria-label="Next day">›</button>
      </div>
    </div>
  );
}

export function SimpleSpark({ values, color = "#72ddbf" }: { values: (number | null)[]; color?: string }) {
  const clean = values.filter((value): value is number => value !== null);
  if (!clean.length) return <div className="no-data">Not available</div>;
  const width = 280, height = 72, min = Math.min(...clean), max = Math.max(...clean);
  const points = clean.map((value, index) => {
    const x = clean.length === 1 ? width / 2 : (index / (clean.length - 1)) * width;
    const y = max === min ? height / 2 : height - ((value - min) / (max - min)) * (height - 12) - 6;
    return `${x},${y}`;
  }).join(" ");
  return <svg className="spark" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="7-day trend"><polyline points={points} fill="none" stroke={color} strokeWidth="3" /></svg>;
}
