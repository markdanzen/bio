import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");
const ADMIN_SECRET = process.env.ADMIN_SECRET ?? "changeme";

function safePath(file: string) {
  const resolved = path.resolve(contentDir, file);
  if (!resolved.startsWith(contentDir + path.sep) && resolved !== contentDir) {
    return null;
  }
  return resolved;
}

export async function POST(req: NextRequest) {
  const { file, content, secret } = await req.json();

  if (secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!file || typeof content !== "string") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const filePath = safePath(file);
  if (!filePath) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf-8");

  return NextResponse.json({ ok: true });
}
