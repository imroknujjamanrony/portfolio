import "./globals.css";
import { ActiveSectionProvider } from "@/provider/ActiveSectionProvider";
import Navbar from "./components/Navbar";
import ClientWrapper from "./components/ClientWrapper";

export const metadata = {
  title: "Md Roknujjaman Rony",
  description: "Portfolio of Md Roknujjaman Rony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ClientWrapper>
          <ActiveSectionProvider>
            <Navbar />
            {children}
          </ActiveSectionProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
