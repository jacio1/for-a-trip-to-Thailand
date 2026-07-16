import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

interface SelectFullProps {
  label?: string;
  size: "s" | "l";
  options: any[];
  activeIndex?: number;
  onChange: (item: any) => void;
}

function SelectFull({ label, size, options, activeIndex = 0, onChange }: SelectFullProps) {
  const { t } = useTranslation();

  const [activeIndexState, setActiveIndexState] = useState(activeIndex);

  useEffect(() => {
    setActiveIndexState(activeIndex);
  }, [activeIndex]);

  const ElementFontSize = size === "s" ? "fs-s" : "fs-m";
  const ElementFontWeight = size === "s" ? "fw-500" : "fw-600";
  const LabelFontSize = size === "s" ? "fs-m" : "fs-l";
  const LabelFontWeight = size === "s" ? "fw-500" : "fw-600";

  const handleClick = (item: any, index: number) => {
    setActiveIndexState(index);
    onChange(item);
  };

  return (
    <div className="w-full flex flex-col gap-1 pointer-events-auto">
      {label ? <p className={`${LabelFontSize} ${LabelFontWeight}`}>{t(label)}</p> : null}
      <div className="w-full px-3 py-2 rounded-4xl flex flex-col justify-between relative default-wrap">
        {options.map((item, index) => (
          <button key={index} onClick={() => handleClick(item, index)}
            className={`w-full relative z-3 p-2 flex justify-between`}
            style={{ borderBottom: index < options.length - 1 ? "1px solid var(--wrap-border)" : "none" }}>
            <p className={`w-fit transition-all duration-200 ${ElementFontSize} ${ElementFontWeight}`} style={{ color: activeIndexState === index ? "var(--text-main)" : "var(--text-sub)", textAlign: "left" }}>
              {t(item.title)}
            </p>
            <Check className="transition-all duration-200" color={activeIndexState === index ? "var(--focus-color)" : "var(--wrap-bg)"} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectFull;
