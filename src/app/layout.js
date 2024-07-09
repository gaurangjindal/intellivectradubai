import { Inter } from "next/font/google";
import "./globals.css";
import { ContactNavbar } from "@/Components/ContactNavbar";
import { Navbar } from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Intelli Vectra</title>
      </head>
      <body className="bg-white max-w-[100%] md:text-justify text-start">
        <div>
          <ContactNavbar></ContactNavbar>
          <Navbar />
          <div>
            {children}
          </div>
          <Footer />
        </div>
        <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} />
      </body>
    </html>
  );
}
