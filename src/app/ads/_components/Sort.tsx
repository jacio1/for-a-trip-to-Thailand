import { useState } from "react";
import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react";

const sortOptions = [
  { id: "most-relevant", label: "Most relevant", icon: ArrowDownWideNarrow },
  { id: "oldest", label: "Oldest", icon: ArrowUpWideNarrow },
];

export default function Sort() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("most-relevant");

  const handleSelect = (id: string) => {
    setSelectedSort(id);
    setIsOpen(false);
  };

  const selectedOption = sortOptions.find((opt) => opt.id === selectedSort);
  const SelectedIcon = selectedOption?.icon || ArrowDownWideNarrow;

  return (
    <div className="flex items-center justify-between gap-3 w-full">
      <div className="relative w-full ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="default-wrap  flex items-center justify-between gap-2 px-4 py-2 h-12 rounded-3xl w-full "
        >
          <span className=" whitespace-nowrap text-(--text-sub)">
            Sort by: {""}
            <span style={{color: "rgba(240, 240, 240, 0.6)"}}>{selectedOption?.label}</span>
          </span>
          <div className="w-7 h-7 flex items-center justify-center rounded-2xl default-wrap" style={{background: "rgba(43, 43, 43, 0.8)"}}>
            <SelectedIcon className="w-5 h-5 text-(--svg-filler) rounded-2xl" style={{background: "rgba(43, 43, 43, 0.8)"}}/>
          </div>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10 "
              onClick={() => setIsOpen(false)}
            />

            <div className="absolute top-full bg-(--wrap-filler) left-0 mt-2 w-64 rounded-2xl z-20 py-2 overflow-hidden ">
              {sortOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-(--wrap-bg) flex items-center gap-2
                      `}
                  >
                    <Icon className={`w-4 h-4 `} />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

