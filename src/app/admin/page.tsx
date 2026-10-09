"use client";

import { useEffect, useState, useCallback } from "react";

export default function AdminPage() {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const loadFiles = useCallback(async () => {
    const res = await fetch("/api/admin/list");
    const data = await res.json();
    setFiles(data.files ?? []);
    if (data.files?.length) setSelected(data.files[0]);
  }, []);

  const loadFile = useCallback(async (file: string) => {
    setStatus("");
    const res = await fetch(`/api/admin/read?file=${encodeURIComponent(file)}`);
    const data = await res.json();
    setContent(data.content ?? "");
  }, []);

  useEffect(() => {
    if (authed) loadFiles();
  }, [authed, loadFiles]);

  useEffect(() => {
    if (selected) loadFile(selected);
  }, [selected, loadFile]);

  async function save() {
    setStatus("Saving…");
    const res = await fetch("/api/admin/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: selected, content, secret }),
    });
    const data = await res.json();
    setStatus(res.ok ? "Saved." : `Error: ${data.error}`);
  }

  if (!authed) {
    return (
      <div style={s.center}>
        <div style={s.loginBox}>
          <h1 style={s.heading}>Admin</h1>
          <input
            type="password"
            placeholder="Password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setAuthed(true)}
            style={s.input}
            autoFocus
          />
          <button onClick={() => setAuthed(true)} style={s.btn}>
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={s.page}>
      <div style={s.sidebar}>
        <p style={s.sideLabel}>Content files</p>
        {files.map((f) => (
          <button
            key={f}
            onClick={() => setSelected(f)}
            style={{ ...s.fileBtn, ...(f === selected ? s.fileBtnActive : {}) }}
          >
            {f}
          </button>
        ))}
      </div>

      <div style={s.editor}>
        <div style={s.toolbar}>
          <span style={s.filename}>{selected}</span>
          <span style={s.statusText}>{status}</span>
          <button onClick={save} style={s.btn}>
            Save
          </button>
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={s.textarea}
          spellCheck={false}
        />
        <p style={s.hint}>
          ⚠ On Vercel, file saves only persist until the next deploy. Edit
          locally → commit → push to permanently update content.
        </p>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  center: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0a0a0a",
  },
  loginBox: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 280,
  },
  heading: {
    color: "#ededed",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 4,
  },
  page: {
    display: "flex",
    height: "100vh",
    background: "#0a0a0a",
    color: "#ededed",
    fontFamily: "monospace",
  },
  sidebar: {
    width: 220,
    minWidth: 220,
    borderRight: "1px solid #262626",
    padding: "16px 8px",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    overflowY: "auto",
  },
  sideLabel: {
    fontSize: 11,
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    padding: "0 8px 8px",
  },
  fileBtn: {
    background: "none",
    border: "none",
    color: "#aaa",
    textAlign: "left",
    padding: "6px 8px",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 13,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  fileBtnActive: {
    background: "#1a1a1a",
    color: "#ededed",
  },
  editor: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 16px",
    borderBottom: "1px solid #262626",
  },
  filename: {
    flex: 1,
    fontSize: 13,
    color: "#666",
  },
  statusText: {
    fontSize: 13,
    color: "#666",
  },
  textarea: {
    flex: 1,
    background: "#0a0a0a",
    color: "#ededed",
    border: "none",
    padding: 20,
    fontSize: 14,
    lineHeight: 1.6,
    fontFamily: "monospace",
    resize: "none",
    outline: "none",
  },
  input: {
    background: "#1a1a1a",
    border: "1px solid #262626",
    borderRadius: 6,
    color: "#ededed",
    padding: "8px 12px",
    fontSize: 14,
    outline: "none",
  },
  btn: {
    background: "#ededed",
    color: "#0a0a0a",
    border: "none",
    borderRadius: 6,
    padding: "8px 16px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  hint: {
    fontSize: 12,
    color: "#555",
    padding: "8px 20px 12px",
    borderTop: "1px solid #1a1a1a",
  },
};
