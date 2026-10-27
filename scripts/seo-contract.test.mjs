import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
const read=path=>readFileSync(new URL("../"+path,import.meta.url),"utf8");
test("stable organization identity",()=>{
  const root=read("src/app/layout.tsx");
  assert.match(root,/"@id": "https:\/\/teihsra\.com\/#organization"/);
  assert.match(root,/canonical: "\/"/);
});
test("each product has server-owned self canonical",()=>{
  for(const slug of ["anvaya","shalya","nukta","reva"]){
    const layout=read("src/app/products/"+slug+"/layout.tsx");
    assert.ok(layout.includes('canonical: "/products/'+slug+'"'));
    assert.match(layout,/export const metadata: Metadata/);
    assert.match(read("src/app/products/"+slug+"/page.tsx"),/"use client"/);
  }
});
test("sitemap contains all public routes without fictional updated dates",()=>{
  const s=read("src/app/sitemap.ts");
  for(const route of ["/products/anvaya","/products/shalya","/products/nukta","/products/reva","/contact","/privacy","/terms"])
    assert.ok(s.includes("${base}"+route),"Missing "+route);
  assert.doesNotMatch(s,/new Date\(\)/);
});
test("Anvaya links to live product information; secondary canonicals exist",()=>{
  assert.match(read("src/app/products/anvaya/page.tsx"),/https:\/\/anvaya\.teihsra\.com\/product\.html/);
  for(const slug of ["contact","privacy","terms"])
    assert.ok(read("src/app/"+slug+"/page.tsx").includes('canonical: "/'+slug+'"'));
});

test("Anvaya parent product metadata includes a real social image and absolute publisher profile URL", () => {
  const product = read("src/app/products/anvaya/layout.tsx");
  const root = read("src/app/layout.tsx");
  assert.match(product, /images: \[\{ url: "https:\/\/teihsra\.com\/opengraph-image\.png", width: 1731, height: 909/);
  assert.match(product, /images: \["https:\/\/teihsra\.com\/opengraph-image\.png"\]/);
  assert.match(root, /"https:\/\/www\.linkedin\.com\/company\/teihsra"/);
  assert.doesNotMatch(root, /"linkedin\.com\/company\/teihsra"/);
});
