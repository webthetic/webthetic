import { motion } from "motion/react";
import { GlassButton } from "./GlassButton";
import { Check, Star } from "lucide-react";

interface PricingProps {
  onContact?: () => void;
  onGetWebsite?: () => void;
}

export function Pricing({
  onContact,
  onGetWebsite,
}: PricingProps) {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 Pages",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form",
        "30 Days Support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$1,299",
      description: "For growing businesses",
      features: [
        "Up to 15 Pages",
        "Custom Design",
        "Advanced SEO",
        "CMS Integration",
        "E-commerce Ready",
        "90 Days Support",
        "Analytics Setup",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited Pages",
        "Full Custom Design",
        "Advanced Features",
        "Dedicated Support",
        "Priority Development",
        "Training & Documentation",
        "Ongoing Maintenance",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">
            Investment in Your Success
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Quality web design packages tailored to your
            business needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl relative flex flex-col"
              style={{
                background: plan.popular
                  ? "rgba(255, 255, 255, 0.5)"
                  : "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: plan.popular
                  ? "2px solid #A0CCF2"
                  : "1px solid rgba(194, 220, 242, 0.5)",
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className="px-4 py-1 rounded-full flex items-center gap-1"
                    style={{
                      background:
                        "linear-gradient(to right, #C2DCF2, #A0CCF2)",
                    }}
                  >
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-white">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <h3 className="text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#A0CCF2" }}
                    />
                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <GlassButton
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full mt-auto"
                onClick={
                  plan.cta === "Contact Us"
                    ? onContact
                    : onGetWebsite
                }
              >
                {plan.cta}
              </GlassButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}