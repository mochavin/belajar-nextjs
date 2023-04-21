import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
  // title: "Create Next App",
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>{children}
        {<Navbar />}
        </body>
      </html>
    </>
  );
}
