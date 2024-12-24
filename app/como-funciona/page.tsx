"use client";
import { Navbar, DarkThemeToggle, Button, Card } from "flowbite-react";
import Image from "next/image";

export default function ComoFuncionaPage() {
  return (
    <div className="h-screen w-screen dark:bg-slate-900">
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
          <Navbar.Link className="my-2" href="/como-funciona" active>
            ¿ Cómo Funciona ?
          </Navbar.Link>
          <Navbar.Link className="my-2" href="/contacto">
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
      <h2 className="mb-10 mt-20 text-center text-4xl font-bold text-red-500">
        ¿ Cómo Funciona ?
      </h2>
      <div className="mt-20 flex w-screen flex-col items-center">
        <ol className="relative border-s border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <li className="mb-10 ms-6">
            <span className="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-green-900 dark:ring-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
                strokeWidth="2"
              >
                <path d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304z"></path>
                <path d="M15 4h1a1 1 0 0 1 1 1v3.5"></path>
                <path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374"></path>
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Beneficios</h3>
            <p className="text-sm">Beneficios disponibles</p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
                strokeWidth="2"
              >
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Consultar</h3>
            <p className="text-sm">Consultamos tus datos</p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
              <svg
                className="size-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Revisar</h3>
            <p className="text-sm">Revisamos tus datos</p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
              <svg
                className="size-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Confirmación</h3>
            <p className="text-sm">Confirmamos el Beneficio</p>
          </li>
          <li className="ms-6">
            <span className="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
                strokeWidth="2"
              >
                <path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path>
                <path d="M16 19h6"></path> <path d="M19 16v6"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Correo</h3>
            <p className="text-sm">Te enviamos un correo</p>
          </li>
        </ol>
      </div>
    </div>
  );
}
