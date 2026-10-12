import "./globals.css";
import { ScrollReveal } from "../hooks/useScrollReveal";

export const metadata = {
  title: "Therapy Practice",
  description: "A calm, welcoming therapy practice website."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="reveal-pending">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `setTimeout(function(){if(!window.__revealReady){document.documentElement.classList.remove("reveal-pending")}},8000)`,
          }}
        />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}