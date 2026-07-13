"use client";

import { useTranslation } from "react-i18next";
import BackButton from "@/src/components/ui/buttons/BackButton";

interface TermsProps {
  goBack: () => void;
}

export default function Terms({ goBack }: TermsProps) {
  const { t } = useTranslation();

  return (
    <div className="min-w-full h-full p-3 flex gap-3 flex-col relative overflow-y-auto">
      <div className="absolute top-3 left-3">
        <BackButton onClick={goBack} />
      </div>
      <h1 className="fs-xl fw-500 pt-16">{t("Terms")}</h1>
      {[...Array(12)].map((_, index) => (
        <p key={index} className="fs-s fw-400" style={{ color: "var(--text-sub)" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quod vero molestiae facilis. Doloremque eos modi totam optio, natus quos officia aliquid nam rem? Nemo provident pariatur consequatur totam quidem?
        </p>
      ))}
    </div>
  );
}
