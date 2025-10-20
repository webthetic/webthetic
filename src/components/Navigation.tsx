import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/d8bcda8240f99100c1e38745616bdee99eecd9b6.png";

interface NavigationProps {
  onGetWebsite: () => void;
  onContact?: () => void;
}

export function Navigation({
  onGetWebsite,
  onContact,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div
        className="max-w-7xl mx-auto rounded-2xl px-6 py-4"
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(194, 220, 242, 0.5)",
        }}
      >
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="webthetic"
              className="h-12 w-auto"
              style={{ mixBlendMode: "multiply" }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              Pricing
            </a>
            <button
              onClick={onContact}
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              Contact Us
            </button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(160, 204, 242, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="px-6 py-2 rounded-xl text-gray-800 transition-colors"
              style={{ background: "rgba(160, 204, 242, 0.2)" }}
              onClick={onGetWebsite}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4"
          >
            <a
              href="#features"
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              Pricing
            </a>
            <button
              onClick={onContact}
              className="text-gray-700 hover:text-[#3B82F6] transition-colors text-left"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}