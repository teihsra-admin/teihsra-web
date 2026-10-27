import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const src = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const css = readFileSync(new URL("../src/app/homepage.css", import.meta.url), "utf8");

test("TEIHSRA homepage prioritises Anvaya and real hospital buyer paths", () => {
  assert.match(src, /Built for the way/);
  assert.match(src, /id="anvaya"/);
  assert.match(src, /https:\/\/anvaya\.teihsra\.com\/product\.html/);
  assert.match(src, /https:\/\/anvaya\.teihsra\.com\/hospital-evaluation\.html/);
  assert.match(src, /mailto:connect@teihsra\.com/);
  assert.match(src, /Illustrative workflow — no patient data/);
});
test("homepage contains navigable product routes and no misleading interactive scaffold", () => {
  for (const slug of ["shalya", "nukta", "reva"])
    assert.ok(src.includes('href: "/products/' + slug + '"'), "Missing product " + slug);
  assert.doesNotMatch(src, /Sankalan Launchpad|Hospital Scaffold|setActiveProduct|setDragged|onClick=|setInterval|IntersectionObserver/);
  assert.doesNotMatch(src, /"use client"/);
});
test("homepage has semantic structure, focus and mobile motion support", () => {
  assert.match(src, /<main id="main">/);
  assert.match(src, /aria-label="Main navigation"/);
  assert.match(src, /href="#main"/);
  assert.match(css, /\.te-site a:focus-visible/);
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
});
