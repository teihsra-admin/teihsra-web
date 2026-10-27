import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("homepage describes Anvaya consistently in search and social metadata", () => {
  const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
  assert.ok(layout.includes("TEIHSRA Health Intelligence builds Anvaya, AI-assisted clinical documentation"));
  assert.equal(layout.split("description:\n    homepageDescription").length - 1, 3);
  assert.ok(layout.includes('"@id": "https://teihsra.com/#organization"'));
});
