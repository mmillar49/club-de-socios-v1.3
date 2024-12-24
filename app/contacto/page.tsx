"use client";
import { TextInput, Button, Textarea, Label } from "flowbite-react";
import { Navbar, DarkThemeToggle } from "flowbite-react";
import axios from "axios";
import { FormEvent } from "react";
import Image from "next/image";

export default function ContactoPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = axios.post("../../api/enviar-correo-contacto", {
        nombreCompleto: formData.get("nombreCompleto"),
        email: formData.get("email"),
        mensaje: formData.get("mensaje"),
      });
    } catch (error) {
      throw new Error(error as string);
    }
  }

  return (
    <div className="h-screen w-full dark:bg-slate-900">
      <Navbar fluid rounded className="shadow-lg">
        <Navbar.Brand href="/">
          {/* <Image
            src="/logo.png"
            className="mr-3 h-6 rounded sm:h-9"
            alt="Bomberos Logo"
            width={50}
            height={50}
          /> */}
          <span className="self-center whitespace-nowrap text-sm font-semibold dark:text-white md:text-xl">
            Club de Socios
          </span>
        </Navbar.Brand>
        <div className="flex flex-wrap gap-4 md:order-2">
          <DarkThemeToggle />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="my-2" href="/">
            Inicio
          </Navbar.Link>
          <Navbar.Link className="my-2" href="/como-funciona">
            ¿ Cómo Funciona ?
          </Navbar.Link>
          <Navbar.Link className="my-2" href="/contacto" active>
            Contacto
          </Navbar.Link>
          <Button
            className="my-2 md:absolute md:end-52"
            href="#"
            gradientDuoTone={"pinkToOrange"}
          >
            Hazte Socio
          </Button>
          <Button
            className="md:absolute md:end-20"
            href="/#beneficios"
            gradientDuoTone={"pinkToOrange"}
          >
            Beneficios
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <div className="mt-20 flex flex-col items-center px-4 pb-10 sm:px-8 lg:px-20">
        <h2 className="mb-4 text-center text-2xl font-extrabold tracking-tight text-red-500 sm:text-4xl">
          Contáctanos ✨
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
          <div>
            <Label htmlFor="nombreCompleto" value="Nombre y Apellido *" />
            <TextInput
              id="nombreCompleto"
              name="nombreCompleto"
              type="text"
              placeholder=""
              required
            />
          </div>
          <div>
            <Label htmlFor="email" value="Correo *" />
            <TextInput id="email" name="email" type="email" required />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="mensaje" value="Mensaje *" />
            <Textarea
              id="mensaje"
              name="mensaje"
              className="resize-none"
              rows={6}
              placeholder="En qué te podemos ayudar?"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-48">
              <Button className="w-full" type="submit" color="red">
                Enviar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
