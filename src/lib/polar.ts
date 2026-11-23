export interface PolarProvider {
  syncNow(userId: string): Promise<{ records: number; status: "complete" | "partial" }>;
}

export interface DemoProvider {
  load(userId: string): Promise<unknown>;
}

export const approvedPolarHosts = new Set(["www.polar.com", "api.polar.com"]);

export function validatePolarUrl(value: string) {
  const url = new URL(value);
  if (url.protocol !== "https:" || !approvedPolarHosts.has(url.hostname)) throw new Error("Unapproved Polar host");
  return url;
}
