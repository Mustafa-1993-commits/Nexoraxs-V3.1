import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexoraxs.com"),
  title: "NexoraXS — Business Operating System",
  description:
    "Modular SaaS platform powering modern businesses with shared auth, workspaces, and cloud-native apps.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.nexoraxs.com",
    title: "NexoraXS — Business Operating System",
    description:
      "Modular SaaS platform powering modern businesses with shared auth, workspaces, and cloud-native apps.",
    images: [
      {
        url: "/branding/Splash.png",
        width: 1200,
        height: 630,
        alt: "NexoraXS — Business Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexoraXS — Business Operating System",
    description:
      "Modular SaaS platform powering modern businesses with shared auth, workspaces, and cloud-native apps.",
    images: ["/branding/Splash.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
