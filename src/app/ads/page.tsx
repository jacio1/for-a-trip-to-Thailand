"use client";

import AdWrapper from "./_components/AdWrapper";
import Filter from "./_components/Filter";
import SearchInput from "./_components/SearchInput";
import Sort from "./_components/Sort";

export default function AdsPage() {

  return (
    <div className="p-3">
        <SearchInput/>
        <div className="flex justify-between gap-2">
            <Sort/>
            <Filter/>
        </div>
      <div>
        <h1 className="text-xl font-extrabold pt-4">All advertisements</h1>
        <AdWrapper/>
      </div>
    </div>
  );
}
