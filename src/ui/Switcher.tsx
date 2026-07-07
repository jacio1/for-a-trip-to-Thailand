import { useState, useEffect } from "react";
 
import { useTranslation } from "react-i18next";

interface SwitcherProps {
  label?: string;
  size: "s" | "l";
  options: any[];
  activeIndex?: number;
  onChange: (item: any) => void;
}



function Switcher({ label, size, options, activeIndex = 0, onChange }: SwitcherProps) {
  const { t } = useTranslation();

  const [activeIndexState, setActiveIndexState] = useState(activeIndex);

  useEffect(() => {
    setActiveIndexState(activeIndex);
  }, [activeIndex]);

  const elementWidth = (100 / options.length).toFixed(2) + "%";
  const ElementFontSize = size === "s" ? "fs-s" : "fs-m";
  const ElementFontWeight = size === "s" ? "fw-500" : "fw-600";
  const ElementPadding = size === "s" ? "p-0.5" : "p-1.5";
  const LabelFontSize = size === "s" ? "fs-m" : "fs-l";
  const LabelFontWeight = size === "s" ? "fw-500" : "fw-600";

  const handleClick = (item: any, index: number) => {
    setActiveIndexState(index);
    onChange(item);
  };

  return (
    <div className="w-full flex flex-col gap-1 pointer-events-auto">
      {label ? <p className={`${LabelFontSize} ${LabelFontWeight}`}>{t(label)}</p> : null}
      <div className="w-full p-0.75 rounded-4xl flex justify-between relative default-wrap">
        <div className="w-full h-full p-0.75 absolute z-2 top-0 left-0">
          <div className="h-full rounded-4xl bg-(--wrap-filler) transition-all duration-200" style={{ width: elementWidth, transform: `translateX(${activeIndexState * 100}%)` }}></div>
        </div>
        {options.map((item, index) => (
          <button
            className={`relative z-3 transition-all duration-200 ${ElementFontSize} ${ElementFontWeight} ${ElementPadding}`}
            style={{ width: elementWidth, color: activeIndexState === index ? "var(--text-main)" : "var(--text-sub)" }}
            key={index}
            onClick={() => handleClick(item, index)}>
            {t(item.title)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Switcher;
