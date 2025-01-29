import { Spinner } from "@heroui/spinner";
import React from "react";

function Loading() {
  return (
    <div className=" h-screen fixed inset-0 z-[999] backdrop-blur-md bg-black/10 flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}

export default Loading;
