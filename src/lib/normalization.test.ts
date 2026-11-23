import { describe, expect, it } from "vitest";
import { demoDays } from "./fixtures";

describe("demo normalization", () => {
  it("keeps missing observations missing", () => {
    expect(demoDays.find(d => d.date === "2026-10-26")?.hrv).toBeNull();
  });
  it("produces exactly 30 deterministic dates", () => {
    expect(demoDays).toHaveLength(30);
    expect(new Set(demoDays.map(d => d.date)).size).toBe(30);
  });
  it("uses one consistent source label for fixtures", () => {
    expect(demoDays.every(d => typeof d.date === "string")).toBe(true);
  });
});
