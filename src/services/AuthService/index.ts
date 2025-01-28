"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      const myCookies = await cookies();
      myCookies.set("accessToken", data.data.accessToken);
      myCookies.set("refreshToken", data.data.refreshToken);
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
