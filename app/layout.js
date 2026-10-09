import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SampleDataBanner from "@/components/SampleDataBanner";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "CityPulse | Explore Smart. Travel Safe.",
    template: "%s | CityPulse",
  },
  description:
    "CityPulse is a hackathon prototype for exploring Pune: attractions, history, food and budget-friendly places, using clearly labelled sample data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased`}>
        <Navbar />
        <SampleDataBanner />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
