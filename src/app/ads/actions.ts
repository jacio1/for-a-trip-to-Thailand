"use server"; 

import { PrismaClient } from "@/src/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { Ad } from "@/src/types/types";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function getAds(): Promise<Ad[]> {
  try {
    const ads = await prisma.ad.findMany({
      include: {
        user: true,
      },
    });
    return ads;
  } catch (error) {
    console.error("Error fetching ads:", error);
    return [];
  }
}

export async function getAd(adId: string): Promise<Ad | null> {
  try {
    const ad = await prisma.ad.findUnique({
      where: { id: adId },
      include: {
        user: true,
      },
    });
    return ad;
  } catch (error) {
    console.error("Error fetching ad:", error);
    return null;
  }
}