import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, domainName } = body;

    if (!email || !domainName) {
      return new Response(
        JSON.stringify({ error: "Champs email et domainName requis." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // SMTP configuration check from environment variables
    const host = import.meta.env.SMTP_HOST || process.env.SMTP_HOST;
    const port = Number(import.meta.env.SMTP_PORT || process.env.SMTP_PORT) || 587;
    const user = import.meta.env.SMTP_USER || process.env.SMTP_USER;
    const pass = import.meta.env.SMTP_PASS || process.env.SMTP_PASS;
    const from = import.meta.env.SMTP_FROM || process.env.SMTP_FROM || "no-reply@point.ml";

    let emailSent = false;
    let emailError = "";

    if (host && user && pass) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass }
        });

        const mailSubject = `[Point.ml] Enregistrement réussi : ${domainName}`;

        const htmlContent = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #1a56db; border-bottom: 2px solid #1a56db; padding-bottom: 10px;">
              Confirmation d'Enregistrement de Domaine
            </h2>
            <p>Bonjour,</p>
            <p>Nous vous confirmons que le nom de domaine <strong>${domainName}</strong> a été enregistré avec succès dans notre base de données ccTLD .ml.</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin-top: 20px; border-left: 4px solid #1a56db;">
              <h3 style="margin-top: 0; color: #1a56db;">Détails de l'enregistrement :</h3>
              <p><strong>Nom de domaine :</strong> ${domainName}</p>
              <p><strong>Propriétaire (E-mail) :</strong> ${email}</p>
              <p><strong>Serveurs de noms (DNS) :</strong> ns1.point.ml, ns2.point.ml</p>
              <p><strong>Date d'enregistrement :</strong> ${new Date().toLocaleDateString('fr-FR')}</p>
              <p><strong>Date d'expiration :</strong> ${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString('fr-FR')}</p>
            </div>
            
            <p style="margin-top: 20px;">Vous pouvez gérer vos serveurs de noms, configurer vos zones DNS (enregistrements A, MX, CNAME, TXT) ou rediriger votre nom de domaine à tout moment depuis votre tableau de bord.</p>
            <p><a href="https://point-siteweb-redesign.vercel.app/dashboard" style="display: inline-block; background-color: #1a56db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 10px;">Accéder au Tableau de Bord</a></p>
            
            <p style="font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
              Ceci est un e-mail automatique envoyé par Point.ml. Merci de ne pas y répondre directement. Pour toute assistance, veuillez soumettre un ticket via notre page de support.
            </p>
          </div>
        `;

        await transporter.sendMail({
          from: `"Point.ml Registry" <${from}>`,
          to: email,
          subject: mailSubject,
          html: htmlContent,
          text: `Confirmation d'Enregistrement de Domaine\n\nLe nom de domaine ${domainName} a été enregistré avec succès pour l'adresse ${email}.\n\nPour le gérer, accédez à votre tableau de bord.`
        });

        emailSent = true;
      } catch (err: any) {
        console.error("SMTP sending failed:", err);
        emailError = err?.message || String(err);
      }
    } else {
      console.warn("SMTP credentials not configured. SMTP email simulation completed (skipped mail transport).");
      emailError = "SMTP credentials missing from environment variables.";
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Enregistrement de domaine simulé avec succès.",
        emailSent,
        ...(emailError ? { warning: emailError } : {})
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error: any) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
