"use client";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function AlertFailure({ beneficio }: { beneficio: string }) {
  return (
    <div className="flex flex-row justify-center">
      <Alert
        className="absolute top-[400px] transition-all md:right-10 md:top-[400px] "
        color="failure"
        icon={HiInformationCircle}
      >
        <span className="font-medium">El RUT Asociado no es socio</span>
      </Alert>
    </div>
  );
}
