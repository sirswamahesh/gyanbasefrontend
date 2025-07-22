import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Frontend Developer at TCS",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "CodeLearn's React course helped me land my dream job. The projects were industry-relevant and the instructors were amazing!",
  },
  {
    name: "Rahul Kumar",
    role: "Full Stack Developer at Infosys",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The Python course was comprehensive and well-structured. I went from beginner to building real applications in just 3 months.",
  },
  {
    name: "Anita Patel",
    role: "Software Engineer at Wipro",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Excellent teaching methodology and hands-on approach. The certificate helped me get a 40% salary increase!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real success stories from developers who transformed their careers
            with CodeBase
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8 relative hover:border-gray-600 transition-colors"
            >
              <div className="absolute top-4 right-4 text-green-400">
                <Quote className="h-8 w-8" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
