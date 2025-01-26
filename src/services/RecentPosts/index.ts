import envConfig from "@/config/envConfig";
import { delay } from "@/utils/delay";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`,
    { cache: "force-cache" }
  );

  // await delay();

  return res.json();
};
