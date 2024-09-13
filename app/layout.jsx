import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { OverpassMono, ChivoMono } from "@/lib/fonts";

export const metadata = {
  title: "Neil Bae",
  description: "An aspiring software engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <div
          className={`flex flex-col md:flex-row min-h-screen ${OverpassMono.variable} ${ChivoMono.variable}`}
        >
          <Navbar />
          <div className="w-full md:p-12 p-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
