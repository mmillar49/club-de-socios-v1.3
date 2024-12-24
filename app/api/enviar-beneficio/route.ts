import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectDB from "@/lib/model/db/route";
import Socios from "@/lib/model/Socios";

export async function POST(req: NextRequest) {
  const USER_MAIL = "clubdesocioscorreo@gmail.com";
  const USER_PASS = "rzbm jpbg tjea hmwd";

  const sociosArray = [
    { correo: "olhaberry6098@gmail.com", rut: "18173599-6" },
    { correo: "socios@cbpv.cl", rut: "18734382-8" },
    { correo: "tomymilla22@gmail.com", rut: "20916538-4" },
  ];

  try {
    const { beneficio, correo, rut } = await req.json();
    connectDB();

    const sociosDB = await Socios.findOne({ correo: correo, rut: rut });

    if (sociosDB) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: USER_MAIL,
          pass: USER_PASS,
        },
      });
      transporter.sendMail({
        from: USER_MAIL,
        to: correo,
        subject: `Beneficio ${beneficio}`,
        html: `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Beneficio ${beneficio}</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    background-color: white;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                }
                h1 {
                    background-color: white;
                    color: #DA8D2D;
                    text-align: center;
                    font-weight: bold;
                    font-size: 70px;
                    margin-left: 100px;
                    margin-right: 100px;
                    margin-top: 30px;
                    padding: 30px;
                    border-radius: 50px;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                }
                main {
                    display: flex;
                    flex-direction: column;
                    margin-top: 30px;
                    padding: 0 200px 200px 200px;
                }
                .label-input {
                    display: block;
                    position: relative;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                label {
                    display: block;
                    font-size: 22px;
                    font-weight: 600;
                    color: #DA8D2D;
                    width: auto;
                }
                input {
                    display: block;
                    width: 100%;
                    border-radius: 10px;
                    padding: 25px 25px;
                    margin-top: 10px;
                    margin-bottom: 20px;
                    font-size: 18px;
                    border: 0;
                    color: #444;
                    font-weight: 700;
                    background-color: #DA8D2D;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
            </style>
        </head>
        <body>
            <h1>Contacto Beneficio Club de Socios</h1>
            <main>
                <div class="label-input">
                    <label for="beneficio">Beneficio Solicitado</label>
                    <input id="beneficio" type="text" value="${beneficio}" disabled>
                </div>
                <div class="label-input">
                    <label for="beneficio">Correo Electrónico</label>
                    <input id="beneficio" type="text" value="${correo}" disabled>
                </div>
                <div class="label-input">
                    <label for="rut">RUT</label>
                    <input id="rut" type="text" value="${rut}" disabled>
                </div>
            </main>
        </body>
        </html>`,
      });

      return NextResponse.json({
        message: `Correo del Beneficio ${beneficio} enviado!`,
        data: {
          beneficio,
          correo,
          rut,
        },
      });
    } else {
      return NextResponse.json(
        {
          message: "Socio no encontrado",
        },
        {
          status: 404,
        },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error en enviar correo Contacto",
      },
      {
        status: 500,
      },
    );
  }
}
