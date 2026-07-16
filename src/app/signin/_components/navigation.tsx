"use client";

import { Cog, UserCircle } from "lucide-react";
import BackButton from "@/src/components/ui/buttons/BackButton";
import Switcher from "@/src/components/ui/Switcher";

interface Option {
  title: string;
  value: string;
}

interface SignUpNavigationProps {
  currentPageIndex: 0 | 1 | 2;
  setNewPageIndex: (index: 0 | 1 | 2) => void;
  openSettings: () => void;
  goToSignin: () => void;
  trySignUp: () => void;
}

function SignUpNavigation({ currentPageIndex, setNewPageIndex, openSettings, goToSignin, trySignUp }: SignUpNavigationProps) {
  const options: Option[] = [
    { title: "start", value: "start" },
    { title: "plan", value: "plan" },
    { title: "account", value: "account" },
  ];

  const handleSwitcherChange = (option: Option) => {
    const index = options.findIndex((item) => item.value === option.value) as 0 | 1 | 2;
    setNewPageIndex(index);
  };

  const handleBack = () => {
    if (currentPageIndex > 0) {
      setNewPageIndex((currentPageIndex - 1) as 0 | 1 | 2);
    }
  };

  const handleContinue = () => {
    if (currentPageIndex < options.length - 1) setNewPageIndex((currentPageIndex + 1) as 0 | 1 | 2);
    if (currentPageIndex === 2) trySignUp();
  };

  return (
    <div className="w-full h-full p-3 absolute top-0 left-0 flex flex-col justify-between z-3 pointer-events-none">
      <Switcher size="s" options={options} activeIndex={currentPageIndex} onChange={handleSwitcherChange} />
      <div className="w-full flex gap-2 pointer-events-auto">
        {currentPageIndex === 0 ? null : <BackButton onClick={handleBack} /> }
        <button className="h-14 flex items-center justify-center flex-1 bg-(--focus-color) rounded-4xl fs-l fw-500" onClick={handleContinue}>
          continue
        </button>
        <div className="h-14 flex items-center gap-2 py-2 px-3 rounded-4xl default-wrap">
          <Cog color="var(--svg-filler)" className="w-8 h-8 cursor-pointer" onClick={openSettings} />
          <UserCircle color="var(--svg-filler)" className="w-8 h-8 cursor-pointer" onClick={goToSignin} />
        </div>
      </div>
    </div>
  );
}

export default SignUpNavigation;
