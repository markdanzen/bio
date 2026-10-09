import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function safePath(file: string) {
  const resolved = path.resolve(contentDir, file);
  if (!resolved.startsWith(contentDir + path.sep) && resolved !== contentDir) {
    return null;
  }
  return resolved;
}

export function GET(req: NextRequest) {
  const file = req.nextUrl.searchParams.get("file");
  if (!file) return NextResponse.json({ error: "Missing file" }, { status: 400 });

  const filePath = safePath(file);
  if (!filePath || !fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const content = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json({ content });
}
