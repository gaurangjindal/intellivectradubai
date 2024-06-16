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
      <body className="bg-white">
        <ContactNavbar></ContactNavbar>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} />
      </body>
    </html>
  );
}
