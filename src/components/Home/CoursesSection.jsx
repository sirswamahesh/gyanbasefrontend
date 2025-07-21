import React, { useEffect } from "react";
import { DollarSign, Loader2 } from "lucide-react";
import useAuthStore from "../../store/useAuthStore";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const { allCourses, getAllCourse } = useAuthStore();
  useEffect(() => {
    getAllCourse();
  }, []);
  if (!allCourses) {
    return <Loader2 className="text-center" />;
  }
  return (
    <section className="py-20 px-4 bg-base-200">
      <h2 className="text-4xl font-bold text-center text-primary">
        Our Courses
      </h2>
      <p className="text-lg text-center text-base-content/80 mt-2">
        Choose from a variety of industry-relevant courses.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {allCourses.map((course) => (
          <div key={course._id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={course.courseThumbnail}
                alt={course.courseTitle}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl text-primary">
                {course.courseTitle}
              </h3>
              <p className="text-base-content/70">{course.subTitle}</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-0 text-primary font-semibold">
                  ₹{course.coursePrice}
                </div>
                <Link to={`/course/${course._id}`} key={course.id}>
                  <button className="btn btn-primary">Enroll Now</button>
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
