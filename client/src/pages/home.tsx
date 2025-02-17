import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Monitor, Paintbrush, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description: "Creating beautiful, intuitive interfaces that engage users and drive results.",
    Icon: Paintbrush,
  },
  {
    title: "Web Development",
    description: "Building robust, scalable applications with modern technologies.",
    Icon: Monitor,
  },
  {
    title: "Mobile Development",
    description: "Crafting responsive mobile experiences that work across all devices.",
    Icon: Smartphone,
  },
];

const featuredProjects = [
  {
    title: "E-commerce Platform",
    description: "Modern online shopping experience",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
  },
  {
    title: "Corporate Website",
    description: "Professional business presence",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 pb-20">
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 relative z-10 text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We Create Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 mx-auto">
            Transform your vision into reality with our expert web design and development services
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg">
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}