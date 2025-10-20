import { motion } from "motion/react";
import { GlassButton } from "./GlassButton";
import { PerspectiveButton } from "./PerspectiveButton";
import { Sparkles, Zap, Palette } from "lucide-react";

interface HeroProps {
  onGetWebsite: () => void;
}

export function Hero({ onGetWebsite }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        style={{ background: "#C2DCF2" }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        style={{ background: "#A0CCF2" }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        style={{ background: "#B8CAD9" }}
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(194, 220, 242, 0.5)",
          }}
        >
          <Sparkles
            className="w-4 h-4"
            style={{ color: "#A0CCF2" }}
          />
          <span className="text-gray-800">
            Professional websites delivered in days
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-900 mb-6 tracking-tight"
        >
          We Create Beautiful Websites
          <br />
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-[rgba(0,0,0,0)]">
            So You Don't Have To
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          webthetic is your dedicated web design partner. We
          craft stunning, professional websites tailored to your
          vision while you focus on your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <GlassButton variant="primary" onClick={onGetWebsite}>
            Get Your Website
          </GlassButton>
          <PerspectiveButton
            onClick={() => {
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Our Work
          </PerspectiveButton>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Zap,
              title: "Fast Delivery",
              desc: "Your website ready in days, not months",
            },
            {
              icon: Palette,
              title: "Custom Design",
              desc: "Tailored to match your brand perfectly",
            },
            {
              icon: Sparkles,
              title: "Hassle-Free",
              desc: "We handle everything from start to finish",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                background: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                border: "1px solid rgba(160, 204, 242, 0.8)",
              }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(194, 220, 242, 0.5)",
              }}
            >
              <feature.icon
                className="w-8 h-8 mb-4 mx-auto"
                style={{ color: "#A0CCF2" }}
              />
              <h3 className="text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}