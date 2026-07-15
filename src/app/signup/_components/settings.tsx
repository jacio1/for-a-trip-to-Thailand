"use client";

import BackButton from "@/src/components/ui/buttons/BackButton";
import Switcher from "@/src/components/ui/Switcher";
import SelectFull from "@/src/components/ui/select/SelectFull";

interface Option {
  title: string;
  value: string;
}

interface SettingsProps {
  goBack: () => void;
  setNewTheme: (theme: "light" | "dark") => void;
  setNewLanguage: (language: string) => void;
}

export default function Settings({ goBack, setNewTheme, setNewLanguage }: SettingsProps) {
  const themes: Option[] = [
    { title: "light", value: "light" },
    { title: "dark", value: "dark" },
  ];

  const languages: Option[] = [
    { title: "english", value: "english" },
    { title: "russian", value: "russian" },
    { title: "espaniol", value: "espaniol" },
    { title: "china", value: "china" },
  ];

  const changeTheme = (option: Option) => {
    setNewTheme(option.value as "light" | "dark");
  };

  const changeLanguage = (option: Option) => {
    setNewLanguage(option.value);
  };

  return (
    <div className="min-w-full h-full p-3 flex gap-3 flex-col justify-center relative">
      <div className="absolute top-3 left-3">
        <BackButton onClick={goBack} />
      </div>
      <Switcher label="Theme" size="l" options={themes} activeIndex={1} onChange={changeTheme} />
      <SelectFull label="Language" size="l" options={languages} activeIndex={0} onChange={changeLanguage} />
    </div>
  );
}
