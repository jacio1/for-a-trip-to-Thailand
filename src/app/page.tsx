"use client";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="">
      <h1>{t("Theme")} </h1>
    </div>
  );
}
