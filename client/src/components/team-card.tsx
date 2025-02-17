import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

export default function TeamCard({ name, role, image, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card>
        <CardHeader className="p-0">
          <img
            src={image}
            alt={name}
            className="h-64 w-full object-cover"
          />
        </CardHeader>
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-muted-foreground">{role}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
