import { motion } from "motion/react";
import {
  ArrowLeft,
  Send,
  Paperclip,
  X,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/d8bcda8240f99100c1e38745616bdee99eecd9b6.png";

interface GetWebsitePageProps {
  onBack: () => void;
}

export function GetWebsitePage({
  onBack,
}: GetWebsitePageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [attachments, setAttachments] = useState<File[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    console.log("Attachments:", attachments);
    setShowSuccess(true);
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

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setAttachments([...attachments, ...newFiles]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
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
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-gray-900 mb-4">
              Get Your Website
            </h1>
            <p className="text-gray-600">
              Tell us about your project and we'll create a
              beautiful, professional website tailored to your
              needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(194, 220, 242, 0.5)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                      background: "rgba(255, 255, 255, 0.5)",
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
                      background: "rgba(255, 255, 255, 0.5)",
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
                      background: "rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(10px)",
                    }}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-gray-700 mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(10px)",
                    }}
                    placeholder="Your Business"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="websiteType"
                    className="block text-gray-700 mb-2"
                  >
                    Website Type *
                  </label>
                  <select
                    id="websiteType"
                    name="websiteType"
                    required
                    value={formData.websiteType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <option value="">Select type...</option>
                    <option value="business">
                      Business Website
                    </option>
                    <option value="ecommerce">
                      E-commerce
                    </option>
                    <option value="portfolio">Portfolio</option>
                    <option value="blog">Blog</option>
                    <option value="landing">
                      Landing Page
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-gray-700 mb-2"
                  >
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <option value="">Select budget...</option>
                    <option value="starter">
                      Starter ($500 - $1,500)
                    </option>
                    <option value="professional">
                      Professional ($1,500 - $5,000)
                    </option>
                    <option value="enterprise">
                      Enterprise ($5,000+)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-gray-700 mb-2"
                >
                  Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]"
                  style={{
                    background: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <option value="">Select timeline...</option>
                  <option value="urgent">
                    ASAP (1-2 weeks)
                  </option>
                  <option value="normal">
                    Normal (2-4 weeks)
                  </option>
                  <option value="flexible">
                    Flexible (1-2 months)
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-700 mb-2"
                >
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-0 outline-none transition-all focus:ring-2 focus:ring-[#3B82F6] resize-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(10px)",
                  }}
                  placeholder="Tell us about your project, goals, and any specific features you need..."
                />
              </div>

              <div>
                <label
                  htmlFor="attachments"
                  className="block text-gray-700 mb-2"
                >
                  Attachments (Optional)
                </label>
                <p className="text-gray-600 mb-3">
                  Upload logos, brand assets, inspiration
                  images, or any relevant documents
                </p>

                <div className="space-y-4">
                  <label
                    htmlFor="attachments"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-700 hover:text-[#3B82F6] transition-colors cursor-pointer"
                    style={{
                      background: "rgba(160, 204, 242, 0.2)",
                    }}
                  >
                    <Paperclip className="w-5 h-5" />
                    Choose Files
                  </label>
                  <input
                    type="file"
                    id="attachments"
                    name="attachments"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {attachments.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {attachments.map((file, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="px-3 py-2 rounded-xl flex items-center gap-2"
                          style={{
                            background:
                              "rgba(160, 204, 242, 0.3)",
                          }}
                        >
                          <span className="text-gray-700">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              removeAttachment(index)
                            }
                            className="text-gray-600 hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
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
                Submit Request
              </motion.button>
            </form>
          </motion.div>

          {showSuccess && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-gray-600 mt-6"
            >
              We'll review your request and get back to you
              within 24 hours.
            </motion.p>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="max-w-md w-full p-8 rounded-3xl text-center"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(194, 220, 242, 0.5)",
              boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
              className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{
                background:
                  "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              }}
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-900 mb-3"
            >
              Request Submitted!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              Thank you for choosing webthetic! We've received
              your project details and will contact you within
              24 hours to discuss next steps.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setShowSuccess(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl text-white"
              style={{
                background:
                  "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
              }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}