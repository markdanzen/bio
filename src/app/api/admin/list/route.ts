import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function scanDir(dir: string, base = ""): string[] {
  return fs.readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    return fs.statSync(full).isDirectory() ? scanDir(full, rel) : [rel];
  });
}

export function GET() {
  const files = scanDir(contentDir).filter((f) => f.endsWith(".mdx"));
  return NextResponse.json({ files });
}
