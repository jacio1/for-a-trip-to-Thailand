"use client";

import { SearchIcon, X } from "lucide-react";
import { useState } from "react";

export default function SearchInput() {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="relative w-full mb-2">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <SearchIcon className="w-6 h-6 text-(--svg-filler)" />
      </div>

      <input
        type="text"
        placeholder="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="default-wrap w-full rounded-3xl h-12 pl-12 pr-12 outline-none"
      />

      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 cursor-pointer rounded-2xl"
          style={{ background: "rgba(43, 43, 43, 0.8)" }}
          type="button"
        >
          <X className="w-6 h-6 text-(--svg-filler)" />
        </button>
      )}
    </div>
  );
}
