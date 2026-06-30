import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Տաթև և Հայկ",
  description: "Տաթև և Հայկ",
  openGraph: {
    title: "Տաթևի և Հայկի հարսանեկան հրավիրատոմս",
    description: "Best invitation website",
    url: "https://wedding-invitation-1-ecru.vercel.app/",
    siteName: "Տաթև և Հայկ",
    images: [
      {
        url: "/first.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}>
        {children}
      </body>
    </html>
  );
}
