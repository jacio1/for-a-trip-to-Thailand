"use client";
import {
  LayoutGrid,
  LucideIcon,
  MessageCircle,
  Plus,
  User,
} from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  icon: LucideIcon;
};

export default function NavigationBar() {
  const [activeLabel, setActiveLabel] = useState("Ads");

  const navItems: NavItem[] = [
    { label: "Ads", icon: LayoutGrid },
    { label: "Chats", icon: MessageCircle },
    { label: "Create", icon: Plus },
  ];

  const activeIndex = navItems.findIndex((item) => item.label === activeLabel);

  const renderButton = ({ label, icon: Icon }: NavItem) => {
    const isActive = label === activeLabel;

    return (
      <button
        key={label}
        onClick={() => setActiveLabel(label)}
        className={`relative z-10 flex flex-1 h-full flex-col items-center justify-center gap-0.5 transition-colors ${
          isActive ? "text-red-500" : "text-(--svg-filler)"
        }`}
      >
        <Icon className="w-5 h-5" />
        <span className="text-sm font-semibold">{label}</span>
      </button>
    );
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 px-3 pb-3.5">
      <div className="flex items-center justify-between gap-3">
        <div className=" default-wrap relative flex items-center rounded-[26px] h-13 w-52 text-xs pt-1.5">
          <div
            className="absolute inset-y-0.75 rounded-[22px] transition-all duration-300 ease-out"
            style={{
              width: `calc((100% - 0.375rem) / ${navItems.length})`,
              left: `calc(0.1875rem + (100% - 0.375rem) / ${navItems.length} * ${activeIndex})`,
              background: "rgba(43, 43, 43, 0.8)"
            }}
          />
          {navItems.map(renderButton)}
        </div>

        <button className="default-wrap flex flex-col items-center justify-center rounded-3xl w-17.5 h-13 ">
          <User className="size-5 text-(--svg-filler)" />
          <span className=" text-xs text-(--svg-filler)">Profile</span>
        </button>
      </div>
    </div>
  );
}
