import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Portfolio } from "./components/Portfolio";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { GetWebsitePage } from "./components/GetWebsitePage";
import { ContactPage } from "./components/ContactPage";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "get-website" | "contact"
  >("home");

  if (currentPage === "get-website") {
    return (
      <GetWebsitePage onBack={() => setCurrentPage("home")} />
    );
  }

  if (currentPage === "contact") {
    return (
      <ContactPage onBack={() => setCurrentPage("home")} />
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom right, #F2F2F2, #D0D5D9, #B8CAD9)",
        }}
      />

      <Navigation
        onGetWebsite={() => setCurrentPage("get-website")}
        onContact={() => setCurrentPage("contact")}
      />
      <Hero
        onGetWebsite={() => setCurrentPage("get-website")}
      />
      <Features />
      <Portfolio />
      <HowItWorks />
      <Pricing
        onContact={() => setCurrentPage("contact")}
        onGetWebsite={() => setCurrentPage("get-website")}
      />
      <Footer onContact={() => setCurrentPage("contact")} />
    </div>
  );
}