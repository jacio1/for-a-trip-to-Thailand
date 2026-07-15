"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import Switcher from "@/src/components/ui/Switcher";
import Tag from "@/src/components/ui/buttons/Tag";

interface Option {
  title: string;
  value: string;
}

interface TagItem {
  name: string;
  isActive: boolean;
}

interface PlanProps {
  setNewTrial: (trial: "free" | "paid", duration: "month" | "year") => void;
}

export default function Plan({ setNewTrial }: PlanProps) {
  const { t } = useTranslation();

  const [trial, settrial] = useState<"free" | "paid">("free");
  const [activeperiod, setactiveperiod] = useState<"month" | "year">("month");
  const [pricedrop, setpricedrop] = useState<string>("");
  const [price, setprice] = useState<"2.99$" | "24.99$">("2.99$");

  const paidtags: TagItem[] = [
    { name: "up to 15 chats", isActive: true },
    { name: "up to 10 own advertisements", isActive: true },
    { name: "full customization", isActive: true },
  ];

  const freetags: TagItem[] = [
    { name: "up to 5 chats", isActive: false },
    { name: "up to 3 own advertisements", isActive: false },
    { name: "limited customization", isActive: false },
  ];

  const period: Option[] = [
    { title: "month", value: "month" },
    { title: "year", value: "year" },
  ];

  const changePeriod = (option: Option) => {
    const value = option.value as "month" | "year";
    if (value === "year") {
      setpricedrop("35.99$");
      setprice("24.99$");
    } else {
      setpricedrop("");
      setprice("2.99$");
    }
    setactiveperiod(value);
  };

  const handleTrial = (data: "paid" | "free") => {
    settrial(data);
    setNewTrial(data, activeperiod);
  };

  const isPaidSelected = trial === "paid";
  const isFreeSelected = trial === "free";

  return (
    <div className="w-full h-full p-3 flex flex-col gap-3 justify-center">
      <Switcher size="l" options={period} activeIndex={0} onChange={changePeriod} />
      {/* Paid trial */}
      <div className={`p-4 rounded-4xl flex flex-col default-wrap cursor-pointer transition-all duration-200 ${isPaidSelected ? "border-[--focus-color]" : ""}`} onClick={() => handleTrial("paid")}>
        <div className="w-full flex gap-3 items-center">
          {pricedrop && (
            <p className="fs-m fw-500 line-through" style={{ color: "var(--text-sub)" }}>
              {pricedrop}
            </p>
          )}
          <p className="fs-l fw-500">{price + " / " + t(activeperiod)}</p>
          <Check className="ml-auto transition-all duration-200" style={{ color: isPaidSelected ? "var(--focus-color)" : "var(--wrap-bg)" }} />
        </div>
        <p className="fs-m fw-500" style={{ color: "var(--text-sub)" }}>
          Paid trial with extended functional.
        </p>
        <div className="w-full mt-2 flex gap-2 flex-wrap">
          {paidtags.map((tag) => (
            <Tag key={tag.name} isActive={tag.isActive} text={tag.name} size="s" />
          ))}
        </div>
      </div>
      {/* Free trial */}
      <div className={`p-4 rounded-4xl flex flex-col default-wrap cursor-pointer transition-all duration-200 ${isFreeSelected ? "border-[--focus-color]" : ""}`} onClick={() => handleTrial("free")}>
        <div className="w-full flex gap-3 items-center">
          <p className="fs-l fw-500">{"0.00$" + " / " + t(activeperiod)}</p>
          <Check className="ml-auto transition-all duration-200" style={{ color: isFreeSelected ? "var(--focus-color)" : "var(--wrap-bg)" }} />
        </div>
        <p className="fs-m fw-500" style={{ color: "var(--text-sub)" }}>
          Free trial with basic functional.
        </p>
        <div className="w-full mt-2 flex gap-2 flex-wrap">
          {freetags.map((tag) => (
            <Tag key={tag.name} isActive={tag.isActive} text={tag.name} size="s" />
          ))}
        </div>
      </div>
    </div>
  );
}
