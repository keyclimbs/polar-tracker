import { describe, expect, it } from "vitest";
import { validatePolarUrl } from "./polar";

describe("Polar host restrictions", () => {
  it("accepts approved HTTPS Polar hosts", () => {
    expect(validatePolarUrl("https://www.polar.com/accesslink-api").hostname).toBe("www.polar.com");
  });
  it("rejects HTTP", () => {
    expect(() => validatePolarUrl("http://www.polar.com/accesslink-api")).toThrow();
  });
  it("rejects arbitrary hosts", () => {
    expect(() => validatePolarUrl("https://example.com/polar")).toThrow();
  });
});
