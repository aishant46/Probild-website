import TeamCard from "@/components/team-card";

const team = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
  },
  {
    name: "Mike Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    name: "David Wilson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-muted-foreground">
          We're a team of passionate designers and developers dedicated to creating
          exceptional digital experiences that drive business growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {team.map((member, index) => (
          <TeamCard key={member.name} {...member} index={index} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6">
            To empower businesses with innovative digital solutions that enhance
            their online presence and drive meaningful results.
          </p>
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg text-muted-foreground">
            We combine creativity with technical expertise to deliver custom
            solutions that perfectly align with our clients' goals and exceed
            their expectations.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8"
            alt="Our office"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}