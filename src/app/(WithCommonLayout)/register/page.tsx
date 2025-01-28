"use client";

import registerValidationSchema from "@/app/schemas/register.schema";
import FXForm from "@/components/form/FXForm";
import FXInput from "@/components/form/FXInput";
import { registerUser } from "@/services/AuthService";
import { Button } from "@heroui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import React from "react";
export default function page() {
  const onSubmit = async (data: any) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    console.log(userData, "inside form user data");
     registerUser(userData);
  };
  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <FXForm
          onSubmit={onSubmit}
          resolver={zodResolver(registerValidationSchema)}
          defaultValues={{
            name: "Kazi Morshed",
            email: "morshedmto@gmail.com",
            mobileNumber: "01327187920",
            password: "123456",
          }}
        >
          <div className="py-4">
            <FXInput label="Name" type="text" name="name" />
          </div>
          <div className="py-4">
            <FXInput label="Email" type="email" name="email" />
          </div>
          <div className="py-4">
            <FXInput label="Mobile Number" type="number" name="mobileNumber" />
          </div>

          <div className="py-4">
            <FXInput label="Password" type="password" name="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-foreground text-background font-semibold"
            size="lg"
            type="submit"
          >
            Register
          </Button>
        </FXForm>

        <div className="text-center">
          Already have an account ?{" "}
          <Link className="underline text-primary" href={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
