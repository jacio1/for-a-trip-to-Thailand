"use client";

import SelectFull from "@/src/ui/select/SelectFull";
import Switcher from "@/src/ui/Switcher";
import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SignInPage() {
  const { t } = useTranslation();
  const THEMES = [
    { title: "light", value: "light" },
    { title: "dark", value: "dark" },
  ];
  const handleSwitcherChange = (option: any) => {
    const index = THEMES.findIndex((item) => item.value === option.value);
    console.log("Select index:", index);
  };

  const LANGUAGES = [
    { title: "english", value: "english" },
    { title: "russian", value: "russian" },
    { title: "espaniol", value: "espaniol" },
    { title: "china", value: "china" },
  ];
  return (
    <div>
      <h1>{t("Language")}</h1>
      <p>send me 50 000 dollars for my trip</p>
    </div>
  );
}
