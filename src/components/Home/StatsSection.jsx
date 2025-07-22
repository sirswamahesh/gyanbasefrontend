import { Users, BookOpen, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    number: "50,000+",
    label: "Active Students",
    description: "Learning and growing with us",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    number: "100+",
    label: "Expert Courses",
    description: "Covering all major technologies",
  },
  {
    icon: <Award className="h-8 w-8" />,
    number: "25,000+",
    label: "Certificates Issued",
    description: "Helping careers worldwide",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    number: "150+",
    label: "Countries",
    description: "Global learning community",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Join thousands of developers who have transformed their careers with
            our courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black/20 text-black rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-gray-800 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
