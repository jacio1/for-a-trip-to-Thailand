"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import Navigation from "./_components/navigation";
import Settings from "./_components/settings";
import Terms from "./_components/terms";
import Account from "./_components/account";
import Start from "./_components/start";
import Plan from "./_components/plan";

export default function SignUpPage() {
  const { t } = useTranslation();
  const router = useRouter();

  // NAVIGATION
  const [pageindex, setpageindex] = useState<0 | 1 | 2>(2);
  const [pageoverlay, setpageoverlay] = useState<"none" | "settings" | "terms">("none");

  // START
  const [role, setrole] = useState<"student" | "teacher" | "none">("student");
  const [tags, settags] = useState<string[]>([]);
  const handleSetNewRole = (role: "student" | "teacher" | "none") => {
    setrole(role);
    console.log("Role selected:", role);
  };
  const handleSetNewTags = (tags: string[]) => {
    settags(tags);
    console.log("Tags selected:", tags);
  };

  // PLAN
  const [trialduration, settrialduration] = useState<"month" | "year">("month");
  const [trial, settrial] = useState<"free" | "paid">("free");
  const handleSetNewTrial = (trial: "free" | "paid", duration: "month" | "year") => {
    settrial(trial);
    settrialduration(duration);
    console.log("Trial selected:", trial, "Duration:", duration);
  };

  // ACCOUNT
  const [email, setemail] = useState<string>("");
  const [login, setlogin] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const handleSetNewEmail = (email: string) => {
    setemail(email);
    console.log("Email:", email);
  };
  const handleSetNewLogin = (login: string) => {
    setlogin(login);
    console.log("Login:", login);
  };
  const handleSetNewPassword = (password: string) => {
    setpassword(password);
    console.log("Password:", password);
  };

  // SETTINGS
  const [theme, settheme] = useState<"dark" | "light">("dark");
  const [language, setlanguage] = useState<string>("english");

  // TERMS
  // nothing

  return (
    <div className="w-full h-full flex overflow-hidden relative">
      {pageoverlay === "none" ? <Navigation currentPageIndex={pageindex} setNewPageIndex={(index) => setpageindex(index)} openSettings={() => setpageoverlay("settings")} goToSignin={() => router.push("/signin")} /> : null}
      {pageoverlay === "settings" ? <Settings goBack={() => setpageoverlay("none")} setNewTheme={(theme) => settheme(theme)} setNewLanguage={(language) => setlanguage(language)} /> : null}
      {pageoverlay === "terms" ? <Terms goBack={() => setpageoverlay("none")} /> : null}
      {pageindex === 0 && <Start setNewTags={handleSetNewTags} setNewRole={handleSetNewRole} />}
      {pageindex === 1 && <Plan setNewTrial={handleSetNewTrial} />}
      {pageindex === 2 && <Account setNewEmail={handleSetNewEmail} setNewLogin={handleSetNewLogin} setNewPassword={handleSetNewPassword} openTerms={() => setpageoverlay("terms")} />}{" "}
    </div>
  );
}
