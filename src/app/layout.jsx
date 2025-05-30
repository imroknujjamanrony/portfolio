// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Md Roknujjaman Rony",
//   description: "Portfolio of Md Roknujjaman Rony",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" data-theme="light">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased `}
//       >
//         <Navbar></Navbar>
//         {children}
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Md Roknujjaman Rony",
  description: "Portfolio of Md Roknujjaman Rony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
