export type Theme = "light" | "system" | "dark";

const STORAGE_KEY = "theme";

let listeners: Array<() => void> = [];

export function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function getSnapshot(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "system";
}

export function getServerSnapshot(): Theme {
  return "system";
}

export function setTheme(theme: Theme) {
  if (theme === "system") {
    localStorage.removeItem(STORAGE_KEY);
    document.documentElement.removeAttribute("data-theme");
  } else {
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }
  listeners.forEach((listener) => listener());
}
