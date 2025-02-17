import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { Feedback } from "@shared/schema";

export default function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Feedback[]>({
    queryKey: ["/api/feedback"],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">Loading testimonials...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
        <p className="text-xl text-muted-foreground">
          See what our clients have to say about working with us
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials?.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-lg mb-4">{testimonial.testimonial}</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{testimonial.clientName}</span>
                  <span>{testimonial.projectType}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
