import { motion } from "motion/react";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "figma:asset/d8bcda8240f99100c1e38745616bdee99eecd9b6.png";

interface FooterProps {
  onContact?: () => void;
}

export function Footer({ onContact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 relative mt-24">
      <div className="max-w-7xl mx-auto">
        <div
          className="p-12 rounded-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(194, 220, 242, 0.5)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div className="mx-[0px] my-[-8px]">
              <img
                src={logo}
                alt="webthetic"
                className="h-14 w-auto mb-3"
                style={{ mixBlendMode: "multiply" }}
              />
              <h3 className="text-gray-900 mb-4">webthetic</h3>
              <p className="text-gray-600">
                Create beautiful websites without the
                complexity.
              </p>
            </div>

            <div>
              <h4 className="text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Examples
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 mb-4 font-bold">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <button
                    onClick={onContact}
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: "rgba(194, 220, 242, 0.5)" }}
          >
            <p className="text-gray-600">
              © {currentYear} webthetic. All rights reserved.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/webthetic.sites/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:text-[#3B82F6] transition-colors"
                style={{
                  background: "rgba(160, 204, 242, 0.2)",
                }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:text-[#3B82F6] transition-colors"
                style={{
                  background: "rgba(160, 204, 242, 0.2)",
                }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:text-[#3B82F6] transition-colors"
                style={{
                  background: "rgba(160, 204, 242, 0.2)",
                }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}