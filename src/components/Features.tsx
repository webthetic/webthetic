import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Code,
  Smartphone,
  Globe,
  Lock,
  Layers,
  Rocket,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Code,
      title: "Expert Development",
      description:
        "Our skilled developers build clean, modern websites using the latest web technologies and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description:
        "We ensure your website looks perfect on any device - mobile, tablet, and desktop.",
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description:
        "We implement SEO best practices to help your website rank higher and reach more customers.",
    },
    {
      icon: Lock,
      title: "Secure & Fast",
      description:
        "We build with enterprise-level security and optimize for blazing fast load times.",
    },
    {
      icon: Layers,
      title: "Custom Design",
      description:
        "Every website is uniquely designed to match your brand identity and business goals.",
    },
    {
      icon: Rocket,
      title: "Full Service",
      description:
        "From design to launch, we handle everything including hosting setup and deployment.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Professional web design services that deliver
            results for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(194, 220, 242, 0.5)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(to bottom right, #C2DCF2, #A0CCF2)",
                }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}