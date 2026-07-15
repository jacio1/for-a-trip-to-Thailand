import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      className="w-14 h-14 p-2 pr-2.25 pl-1.75 rounded-4xl flex items-center justify-center default-wrap"
      onClick={onClick}>
      <ChevronLeft color="var(--svg-filler)" width={"100%"} height={"100%"} />
    </button>
  );
}

export default BackButton;