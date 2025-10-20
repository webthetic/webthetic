import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MousePointer, Palette, Share2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MousePointer,
      title: 'Share Your Vision',
      description: 'Tell us about your business, goals, and design preferences. We\'ll discuss your requirements and create a plan.',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNzkzNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Palette,
      title: 'We Design & Build',
      description: 'Our team creates a custom website tailored to your brand. We handle all the technical details and design work.',
      image: 'https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzZXR1cHxlbnwxfHx8fDE3NjA4ODI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Share2,
      title: 'Launch Your Site',
      description: 'After your approval, we launch your website and provide ongoing support to ensure everything runs smoothly.',
      image: 'https://images.unsplash.com/photo-1741466072239-fafcc7052467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NjA4ODAwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Getting your professional website is easy. Here's how we work together.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #C2DCF2, #A0CCF2)' }}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-500 border-2" style={{ borderColor: '#C2DCF2' }}>
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-gray-900">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>

              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(194, 220, 242, 0.5)',
                  }}
                >
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-[13px]"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}