import "./globals.css";

import Providers from "@/providers/providers";

export const metadata = {
  title: "NeuroPilot AI",
  description: "Next Generation AI SaaS Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}