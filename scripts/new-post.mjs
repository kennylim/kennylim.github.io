#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('usage: npm run post -- "My post title"');
  process.exit(1);
}
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const file = new URL(`../src/content/blog/${slug}.mdx`, import.meta.url).pathname;
if (existsSync(file)) {
  console.error(`already exists: ${file}`);
  process.exit(1);
}
const template = readFileSync(new URL("../src/content/blog/_template.mdx", import.meta.url), "utf8");
const today = new Date().toISOString().slice(0, 10);
writeFileSync(file, template.replace('title: "Untitled post"', `title: "${title}"`).replace("date: 2026-01-01", `date: ${today}`).replace("draft: true", "draft: true"));
console.log(`created ${file}\nedit it, set draft: false when ready, then: git add -A && git commit -m "post: ${slug}" && git push`);
