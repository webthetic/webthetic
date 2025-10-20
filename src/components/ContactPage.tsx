import { motion } from "motion/react";
import {
  ArrowLeft,
  Send,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/d8bcda8240f99100c1e38745616bdee99eecd9b6.png";

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    alert(
      "Thank you for contacting us! We will respond shortly.",
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#F2F2F2" }}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, #A0CCF2 0%, #C2DCF2 50%, transparent 70%)",
            top: "10%",
            right: "10%",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, #C2DCF2 0%, #B8CAD9 50%, transparent 70%)",
            bottom: "20%",
            left: "10%",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
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
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="webthetic"
                className="h-12 w-auto"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <motion.button
              onClick={onBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 hover:text-[#3B82F6] transition-colors"
              style={{ background: "rgba(160, 204, 242, 0.2)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600">
              Have questions? We'd love to hear from you. Send
              us a message and we'll respond as soon as
              possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(194, 220, 242, 0.5)",
                }}
              >
                <h3 className="text-gray-900 mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background: "rgba(160, 204, 242, 0.3)",
                      }}
                    >
                      <Mail className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1">
                        Email
                      </p>
                      <p className="text-gray-600">
                        webthetic@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background: "rgba(160, 204, 242, 0.3)",
                      }}
                    >
                      <Phone className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1">
                        Phone
                      </p>
                      <p className="text-gray-600">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background: "rgba(160, 204, 242, 0.3)",
                      }}
                    >
                      <MapPin className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1">
                        Location
                      </p>
                      <p className="text-gray-600">
                        San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(194, 220, 242, 0.5)",
                }}
              >
                <h3 className="text-gray-900 mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(194, 220, 242, 0.5)",
                }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]"
                        style={{
                          background:
                            "rgba(255, 255, 255, 0.5)",
                          backdropFilter: "blur(10px)",
                        }}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]"
                        style={{
                          background:
                            "rgba(255, 255, 255, 0.5)",
                          backdropFilter: "blur(10px)",
                        }}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]"
                        style={{
                          background:
                            "rgba(255, 255, 255, 0.5)",
                          backdropFilter: "blur(10px)",
                        }}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]"
                        style={{
                          background:
                            "rgba(255, 255, 255, 0.5)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <option value="">
                          Select a subject...
                        </option>
                        <option value="general">
                          General Inquiry
                        </option>
                        <option value="project">
                          New Project
                        </option>
                        <option value="support">Support</option>
                        <option value="partnership">
                          Partnership
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6] resize-none"
                      style={{
                        background: "rgba(255, 255, 255, 0.5)",
                        backdropFilter: "blur(10px)",
                      }}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 rounded-xl text-white flex items-center justify-center gap-2 transition-all"
                    style={{
                      background:
                        "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                    }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div
              className="inline-block px-6 py-3 rounded-xl"
              style={{
                background: "rgba(160, 204, 242, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="text-gray-700">
                <span className="text-gray-900">
                  Quick response time:
                </span>{" "}
                We typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}