import ProjectCard from "@/components/project-card";

const projects = [
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
  {
    title: "Portfolio Website",
    description: "Creative showcase platform",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
  },
  {
    title: "Blog Platform",
    description: "Content management system",
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64",
  },
  {
    title: "Educational Platform",
    description: "Online learning management system",
    image: "https://images.unsplash.com/photo-1416339134316-0e91dc9ded92",
  },
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground">
          Explore our latest projects and see how we've helped businesses transform their digital presence
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </div>
  );
}