import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rezzen | High-End Systems Architecture & Engineering",
  description: "Arquitetura Delicada. Engenharia Intensa. Consultoria especializada em sistemas escaláveis, CRM Veterinário (Sirius) e infraestrutura FinTech por Babi Rezende, Engenheira da Computação pela UNIVESP.",
  keywords: ["Engenharia de Software", "CRM Veterinário", "FinTech", "Next.js", "Go", "Docker", "Sistemas Escaláveis", "Babi Rezende", "UNIVESP"],
  authors: [{ name: "Bárbara Rezende" }],
  openGraph: {
    title: "Rezzen | High-End Systems Architecture",
    description: "Engenharia de elite para ecossistemas digitais complexos.",
    url: "https://rezzen.engineering", // Substituiremos quando você tiver o domínio
    siteName: "Rezzen",
    images: [
      {
        url: "/assets/rezzenicon.png", // Imagem que aparece no link do WhatsApp/LinkedIn
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/assets/rezzenicon.png", // Isso define o Favicon na aba do navegador
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      {/* Adicionei o antialiased para as fontes ficarem mais suaves, padrão Apple */}
      <body className="selection:bg-gold-muted/30 antialiased">
        {children}
      </body>
    </html>
  );
}