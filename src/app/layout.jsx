import "./globals.css";
import Navbar from "./components/Navbar";
import { ActiveSectionProvider } from "@/provider/ActiveSectionProvider";

export const metadata = {
  title: "Md Roknujjaman Rony",
  description: "Portfolio of Md Roknujjaman Rony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ActiveSectionProvider>
          <Navbar />
          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
