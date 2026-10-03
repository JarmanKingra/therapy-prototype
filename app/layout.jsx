import "./globals.css";

export const metadata = {
  title: "Therapy Practice",
  description: "A calm, welcoming therapy practice website."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}