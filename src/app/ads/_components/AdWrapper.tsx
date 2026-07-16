"use client";

import { CpuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Ad } from "@/src/types/types";
import { getAds } from "../actions";

export default function AdWrapper() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const data = await getAds();
        setAds(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {ads.length > 0 ? (
        ads.map((ad) => (
          <div
            key={ad.id}
            className="flex items-center border-b w-full pb-3 mt-3 gap-2"
            style={{ borderColor: "rgba(43, 43, 43, 0.8)" }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-3xl default-wrap shrink-0"
              style={{ background: "rgba(31, 31, 31, 0.8)" }}
            >
              <CpuIcon className="text-(--svg-filler)" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-base">{ad.title}</h2>
              <p className="font-medium text-xs text-(--text-sub)">
                {ad.description}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div>No ads found</div>
      )}
    </>
  );
}