import React, { useEffect } from "react";
import { Loader2 } from "lucide-react";
import useAuthStore from "../../store/useAuthStore";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const { allCourses, getAllCourse } = useAuthStore();

  useEffect(() => {
    getAllCourse();
  }, []);

  if (!allCourses) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-10 h-10 animate-spin text-white" />
      </div>
    );
  }

  return (
    <section className="bg-black text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-green-400">
        Our Courses
      </h2>
      <p className="text-center text-gray-400 mt-2">
        Choose from a variety of industry-relevant courses.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {allCourses.map((course) => (
          <div
            key={course._id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={course.courseThumbnail}
              alt={course.courseTitle}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-300">
                {course.courseTitle}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{course.subTitle}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-green-400 font-semibold">
                  ₹{course.coursePrice}
                </span>
                <Link to={`/courses/${course._id}`}>
                  <button className="bg-green-500 hover:bg-green-600 text-black px-4 py-1.5 rounded-md text-sm">
                    Enroll
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
