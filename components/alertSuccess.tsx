"use client";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function AlertSuccess({ beneficio }: { beneficio: string }) {
  return (
    <div className="flex flex-row justify-center">
      <Alert
        className="absolute top-[400px] z-20 transition-all md:right-10 md:top-[400px] "
        color="success"
        icon={HiInformationCircle}
      >
        <span className="font-medium">
          El Cupon de descuento fue enviado a tu correo!
        </span>
      </Alert>
    </div>
  );
}
