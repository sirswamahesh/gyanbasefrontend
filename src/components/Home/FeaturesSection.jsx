import { Code, Users, Award, Clock, BookOpen, Zap } from "lucide-react";

const features = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Hands-on Coding",
    description:
      "Practice with real code editors and build actual projects that you can add to your portfolio.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of experience in top tech companies.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Certificates",
    description:
      "Earn industry-recognized certificates upon completion to boost your career prospects.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Flexible Learning",
    description:
      "Study at your own pace with lifetime access to course materials and updates.",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Comprehensive Curriculum",
    description:
      "From basics to advanced topics, our courses cover everything you need to know.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Interactive Learning",
    description:
      "Engage with quizzes, coding challenges, and interactive exercises throughout.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose CodeBase?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide the best learning experience with modern teaching methods
            and industry-relevant content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-900 transition-colors duration-300 border border-gray-800"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 text-green-400 rounded-xl mb-4 border border-green-500/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
