"use client";

import { useTranslation } from "react-i18next";

interface TagProps {
  text: string;
  size?: "s" | "l";
  isActive: boolean;
  onClick?: () => void;
}

export default function Tag({ text, size, isActive, onClick }: TagProps) {
  const { t } = useTranslation();

  const fontsize = size === "s" ? "fs-xs" : "fs-s";
  const border = isActive ? "1px solid var(--focus-color)" : "1px solid var(--wrap-border)";
  const backgroundColor = isActive ? "var(--focus-color)" : "var(--wrap-bg)";
  const color = isActive ? "var(--onfocus-color)" : "var(--text-sub)";

  return (
    <button className={`px-3 py-1.5 rounded-4xl ${fontsize} default-wrap transition-all duration-200 cursor-pointer`}
    style={{ border: border, backgroundColor: backgroundColor, color: color }} onClick={onClick}>
      {t(text)}
    </button>
  );
}
