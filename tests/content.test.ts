import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { navigation, works } from "../lib/data";

describe("static content", () => {
  it("has unique work routes with local assets", () => { expect(new Set(works.map((work) => work.slug)).size).toBe(works.length); for (const work of works) expect(existsSync(join(process.cwd(), "public", work.image))).toBe(true); });
  it("uses internal absolute navigation paths", () => { for (const item of navigation) expect(item.href).toMatch(/^\//); });
});
