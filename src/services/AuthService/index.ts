"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      const cookieStore = await cookies();
      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }
    return data
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      const cookieStore = await cookies();
      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }
    return data
  } catch (error: any) {
    throw new Error(error);
  }
};


export const getCurrentUser = async () => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    let decodedToken = null;

    if(accessToken){
      decodedToken = await jwtDecode(accessToken)
    }

    return decodedToken

  } catch (error: any) {
    throw new Error(error);
  }
};

