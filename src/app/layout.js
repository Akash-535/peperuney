import "./globals.css";

export const metadata = {
  title: "Peperuney",
  description:
    "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse",
  openGraph: {
    title: "Peperuney",
    description:
      "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
