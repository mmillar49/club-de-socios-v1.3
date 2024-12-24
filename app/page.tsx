"use client";
import { useState, FormEvent } from "react";
import {
  Navbar,
  DarkThemeToggle,
  Carousel,
  Button,
  Card,
  TextInput,
  Label,
  Spinner,
} from "flowbite-react";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import AlertFailure from "@/components/alertFailure";
import AlertSuccess from "@/components/alertSuccess";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [beneficio, setBeneficio] = useState<string>();
  const [showAlertFailure, setShowAlertFailure] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmitBeneficio(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);

    try {
      setLoading(true); // Activa el spinner
      await axios.post("/api/enviar-beneficio", {
        beneficio: formData.get("beneficio"),
        correo: formData.get("correo"),
        rut: formData.get("rut"),
      });

      setIsModalOpen(true);
      setShowAlertSuccess(true);
      currentTarget.reset(); // Limpia el formulario en caso de éxito

      // Oculta la alerta de éxito después de 3 segundos
      setTimeout(() => {
        setShowAlertSuccess(false);
        setIsModalOpen(false);
      }, 3000);
    } catch (error) {
      setShowAlertFailure(true);
      currentTarget.reset(); // Limpia el formulario en caso de error

      // Oculta la alerta de error después de 3 segundos
      setTimeout(() => {
        setShowAlertFailure(false);
        setIsModalOpen(false);
      }, 3000);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  }

  return (
    <div className="relative dark:bg-slate-900">
      {showAlertFailure && <AlertFailure beneficio={beneficio as string} />}
      {showAlertSuccess && <AlertSuccess beneficio={beneficio as string} />}
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
          <Navbar.Link className="my-2" href="/" active>
            Inicio
          </Navbar.Link>
          <Navbar.Link className="my-2" href="/como-funciona">
            ¿ Cómo Funciona ?
          </Navbar.Link>
          <Navbar.Link className="my-2" href="/contacto">
            Contacto
          </Navbar.Link>
          <Button
            className="my-2 md:absolute md:end-52 md:hidden"
            href="#"
            gradientDuoTone={"pinkToOrange"}
          >
            Hazte Socio
          </Button>
          <Button
            className="md:absolute md:end-20 md:hidden"
            href="/#beneficios"
            gradientDuoTone={"pinkToOrange"}
          >
            Beneficios
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
        <Button
          className="absolute right-52 top-20 hidden w-52 md:block lg:block"
          size="xl"
          gradientDuoTone="pinkToOrange"
        >
          <p className="w-full text-center">Hazte Socio</p>
        </Button>
        <Button
          className="absolute right-52 top-40 hidden w-52 text-center md:block lg:block"
          size="xl"
          gradientDuoTone="pinkToOrange"
          href="/#beneficios"
        >
          <p className="w-full text-center">Beneficios</p>
        </Button>
      </div>
      <h2 className="mb-5 mt-20 text-center text-4xl font-bold text-red-500">
        Beneficios
      </h2>
      <div
        id="beneficios"
        className="mx-5 grid py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card
          className="max-w-sm"
          renderImage={() => (
            <Image
              width={500}
              height={500}
              src="/beneficios/rockford.jpg"
              alt="Logo Rockford"
              className="rounded"
            />
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Beneficio de 10% de Descuento en Rockford
          </h5>
          <Button
            color="red"
            onClick={() => setIsModalOpen(true)}
            onClickCapture={() => setBeneficio("Rockford")}
          >
            Obtener Beneficio
          </Button>
        </Card>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">
                Obtener Beneficio {beneficio}
              </h3>
              <form onSubmit={handleSubmitBeneficio}>
                <input type="hidden" name="beneficio" value={beneficio} />
                <div className="mb-4">
                  <Label
                    htmlFor="correo"
                    value="Ingrese su Correo Eléctronico"
                  />
                  <TextInput
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="Ej.: juan.vargas@gmail.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="rut" value="Ingrese su RUT" />
                  <TextInput
                    id="rut"
                    name="rut"
                    placeholder="Ej.: 12323775-2"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    color="red"
                    className="mr-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" color="red" disabled={loading}>
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <Spinner color="failure" size="md" />
                        Consultando...
                      </div>
                    ) : (
                      "Consultar"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
