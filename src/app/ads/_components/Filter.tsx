import { FilterIcon } from "lucide-react";

export default function Filter() {
  return (
    <div>
      <button
        className="flex items-center justify-center w-12 h-12 rounded-3xl default-wrap"
        style={{ background: "rgba(31, 31, 31, 0.8)" }}
      >
        <FilterIcon className="w-5 h-5 text-(--svg-filler)" />
      </button>
    </div>
  );
}
