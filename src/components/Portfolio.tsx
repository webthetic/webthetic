import { motion } from "motion/react";
import { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Slider from "react-slick";

type Category =
  | "all"
  | "business"
  | "ecommerce"
  | "portfolio"
  | "landing"
  | "restaurant";

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "TechFlow Solutions",
    category: "business",
    description:
      "Modern corporate website with integrated blog and service showcase",
    image:
      "https://images.unsplash.com/photo-1733503711060-1df31554390f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHdlYnNpdGV8ZW58MXx8fHwxNzYwOTM4NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Corporate", "Responsive", "SEO"],
  },
  {
    id: 2,
    title: "Luxe Boutique",
    category: "ecommerce",
    description:
      "Elegant e-commerce platform with seamless checkout experience",
    image:
      "https://images.unsplash.com/photo-1688561807403-ba262590f86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wfGVufDF8fHx8MTc2MDg2Mjk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["E-commerce", "Payment Gateway"],
  },
  {
    id: 3,
    title: "Creative Studio",
    category: "portfolio",
    description:
      "Stunning portfolio showcasing design work with smooth animations",
    image:
      "https://images.unsplash.com/photo-1583121182724-6f84970c0e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NjA5MDc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Portfolio", "Animation", "Creative"],
  },
  {
    id: 4,
    title: "Weplan",
    category: "restaurant",
    description:
      "Appetizing restaurant site with online ordering and reservations",
    image:
      "https://images.unsplash.com/photo-1708335583165-57aa131a4969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjA4NzkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Restaurant", "Booking", "Menu"],
  },
  {
    id: 5,
    title: "FitLife Gym",
    category: "business",
    description:
      "Dynamic fitness center website with class schedules and membership",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltfGVufDF8fHx8MTc2MDkyNDUzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Fitness", "Scheduling", "Modern"],
  },
  {
    id: 6,
    title: "Premier Properties",
    category: "business",
    description:
      "Real estate platform with property listings and virtual tours",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlfGVufDF8fHx8MTc2MDkzODYyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Real Estate", "Search", "Listings"],
  },
  {
    id: 7,
    title: "Chef's Compass",
    category: "restaurant",
    description:
      "Modern culinary platform with chef profiles and interactive menus",
    image:
      "https://images.unsplash.com/photo-1629407119384-d42320c3e576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcmVzdGF1cmFudCUyMGtpdGNoZW58ZW58MXx8fHwxNzYwOTEwMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Restaurant", "Menu", "Chef"],
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "business", label: "Business" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "portfolio", label: "Portfolio" },
  { value: "restaurant", label: "Restaurant" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory,
        );

  const useSlider = filteredProjects.length > 3;

  // Custom arrow components
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center -mr-6"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(194, 220, 242, 0.5)",
        }}
      >
        <ChevronRight className="w-6 h-6 text-[#A0CCF2]" />
      </motion.button>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center -ml-6"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(194, 220, 242, 0.5)",
        }}
      >
        <ChevronLeft className="w-6 h-6 text-[#A0CCF2]" />
      </motion.button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots: any) => (
      <div style={{ bottom: "-50px" }}>
        <ul
          style={{
            margin: "0",
            padding: "0",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "rgba(160, 204, 242, 0.5)",
          transition: "all 0.3s",
        }}
        className="hover:bg-[#A0CCF2]"
      />
    ),
  };

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: useSlider ? 0 : index * 0.1,
      }}
      whileHover={{ y: -10 }}
      className="group rounded-2xl overflow-hidden mx-2"
      style={{
        background: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(194, 220, 242, 0.5)",
      }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{
            background: "rgba(160, 204, 242, 0.85)",
            backdropFilter: "blur(4px)",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
          >
            <ExternalLink className="w-6 h-6 text-[#A0CCF2]" />
          </motion.div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-gray-700"
              style={{
                background: "rgba(160, 204, 242, 0.3)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 px-6 relative" id="portfolio">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, #A0CCF2 0%, #C2DCF2 50%, transparent 70%)",
            top: "20%",
            left: "10%",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of beautiful, high-performing
            websites we've crafted for clients across various
            industries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() =>
                setActiveCategory(category.value as Category)
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl transition-all"
              style={{
                background:
                  activeCategory === category.value
                    ? "linear-gradient(135deg, #A0CCF2 0%, #B8CAD9 100%)"
                    : "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border:
                  activeCategory === category.value
                    ? "1px solid rgba(160, 204, 242, 0.5)"
                    : "1px solid rgba(194, 220, 242, 0.5)",
                color:
                  activeCategory === category.value
                    ? "#FFFFFF"
                    : "#4B5563",
              }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Display - Slider or Grid */}
        {useSlider ? (
          <div className="relative px-8">
            <Slider {...sliderSettings}>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </Slider>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-700 mb-6">
            Ready to see your vision come to life?
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-xl text-white transition-all"
            style={{
              background:
                "linear-gradient(135deg, #A0CCF2 0%, #B8CAD9 100%)",
            }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}