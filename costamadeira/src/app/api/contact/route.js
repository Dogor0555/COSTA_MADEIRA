import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, phone, subject, message } = await request.json();

  // Verifica que las variables de entorno estén presentes
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('EMAIL_USER o EMAIL_PASS no están configuradas en el entorno.');
    return NextResponse.json({ message: 'Error en la configuración del servidor' }, { status: 500 });
  }

  // Configura el transporter de nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Envía el correo electrónico
    await transporter.sendMail({
        from: email,
        to: 'moisesgonzalez747@gmail.com',
        subject: `Futuro cliente se quiere comunicar: `,
        html: `
          <html>
            <body style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
              <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden;">
                <header style="background-color: #6f4f28; padding: 20px; text-align: center;">
                 
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nuevo mensaje de contacto</h1>
                </header>
                <div style="padding: 20px;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 16px; color: #333;">
                    <thead>
                      <tr style="background-color: #f8f9fa;">
                        <th style="text-align: left; padding: 12px; border-bottom: 2px solid #ddd; font-weight: bold;">Campo</th>
                        <th style="text-align: left; padding: 12px; border-bottom: 2px solid #ddd; font-weight: bold;">Detalle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="background-color: #ffffff;">
                        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Nombre</td>
                        <td style="padding: 12px; border-bottom: 1px solid #ddd;">${name}</td>
                      </tr>
                      <tr style="background-color: #f8f9fa;">
                        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Email</td>
                        <td style="padding: 12px; border-bottom: 1px solid #ddd;">${email}</td>
                      </tr>
                      <tr style="background-color: #ffffff;">
                        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Teléfono</td>
                        <td style="padding: 12px; border-bottom: 1px solid #ddd;">${phone}</td>
                      </tr>
                      <tr style="background-color: #f8f9fa;">
                        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Mensaje</td>
                        <td style="padding: 12px; border-bottom: 1px solid #ddd;">${message}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <footer style="background-color: #6f4f28; color: #ffffff; text-align: center; padding: 15px;">
                  <p style="margin: 0; font-size: 14px;">Gracias por ponerte en contacto con nosotros.</p>
                  <p style="margin: 5px 0 0; font-size: 12px;">&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
                </footer>
              </div>
            </body>
          </html>
        `,
      });
      
      
      
      

    return NextResponse.json({ message: 'Email enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return NextResponse.json({ message: 'Error al enviar el email', error: error.message }, { status: 500 });
  }
}
