import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const USER_MAIL = "clubdesocioscorreo@gmail.com";
  const USER_PASS = "rzbm jpbg tjea hmwd";
  try {
    const { nombreCompleto, email, mensaje } = await req.json();

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
      to: email,
      subject: "Contacto Club de Socios",
      html: `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contacto Club de Socios</title>
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
                    color: #f05252;
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
                h2 {
                    display: block;
                    text-align: center;
                    font-weight: 600;
                    font-size: 40px;
                    color: #f05252;
                    width: auto;
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
                    color: #f05252;
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
                    background-color: #f05252;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                textarea {
                    resize: none;
                    margin-top: 10px;
                    border-radius: 10px;
                    padding: 20px;
                    font-size: 18px;
                    font-weight: 700;
                    border: none;
                    color: #444;
                    background-color: #f05252;
                    width: 100%;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
            </style>
        </head>
        <body>
            <h1>Contacto Club de Socios</h1>
            <main>
                <div class="label-input">
                    <label for="nombre">Nombre Completo</label>
                    <input id="nombre" type="text" value="${nombreCompleto}" disabled>
                </div>
                <h2>Mensaje</h2>
                <textarea rows="17" cols="50" disabled>${mensaje}</textarea>
            </main>
        </body>
        </html>`,
    });

    return NextResponse.json({
      message: "Correo de Contacto enviado!",
      data: {
        nombreCompleto: nombreCompleto,
        email: email,
        mensaje: mensaje,
      },
    });
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
