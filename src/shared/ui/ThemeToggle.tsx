"use client";

import { useEffect, useState } from "react";
import { DarkModeIcon, LightModeIcon } from "./icons";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  toLight: string;
  toDark: string;
}

export function ThemeToggle({ toLight, toDark }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const explicit = document.documentElement.dataset.theme as Theme | undefined;
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(explicit ?? system);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  const label = theme === "dark" ? toLight : toDark;
  const Icon = theme === "dark" ? LightModeIcon : DarkModeIcon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full text-lg text-clay transition-colors hover:text-saffron"
    >
      <Icon fontSize="inherit" />
    </button>
  );
}
