import { Edit, Loader, Trash } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCourseStore from "../store/useCourseStore";
import useAdminStore from "../store/useAdminStore";

const FullCoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { isGettingFullCourse, getCourseById, fullCourse, deleteLecture } =
    useAdminStore();

  useEffect(() => {
    getCourseById(courseId);
  }, [courseId]); // Dependency array fix
  if (isGettingFullCourse) {
    return (
      <div className="flex-1 flex justify-center items-center min-h-[400px]">
        <Loader className="size-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!fullCourse) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h2 className="text-2xl font-bold text-red-500">Course not found!</h2>
      </div>
    );
  }

  const handleDeleteLecture = async (lectureId) => {
    if (window.confirm("Are you sure you want to delete this lecture?")) {
      deleteLecture(lectureId);
      getCourseById(courseId); // Delete ke baad UI refresh
    }
  };
  console.log(fullCourse);

  return (
    <div className="ml-64 flex-1 min-h-screen bg-gray-100 dark:bg-gray-900 p-10">
      {/* Course Thumbnail & Title */}
      <div className="max-w-4xl mx-auto">
        <img
          src={fullCourse.courseThumbnail}
          alt={fullCourse.courseTitle}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <h1 className="mt-4 text-4xl font-bold text-gray-800 dark:text-white">
          {fullCourse.courseTitle}
        </h1>
        {fullCourse.subTitle && (
          <h2 className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            {fullCourse.subTitle}
          </h2>
        )}
      </div>

      {/* Course Details */}
      <div className="max-w-4xl mx-auto mt-6 text-lg space-y-4">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {fullCourse.description}
        </p>
        <div className="border-t border-gray-300 dark:border-gray-700 my-6"></div>
        <p>
          <strong>Category:</strong> {fullCourse.category}
        </p>
        <p>
          <strong>Level:</strong> {fullCourse.courseLevel}
        </p>
        <p>
          <strong>Price:</strong> ₹{fullCourse.coursePrice}
        </p>
        <p>
          <strong>Published:</strong> {fullCourse.isPublished ? "Yes" : "No"}
        </p>
        <p>
          <strong>Creator:</strong> {fullCourse.creator?.name || "Unknown"}
        </p>
        <p>
          <strong>Enrolled Students:</strong>{" "}
          {fullCourse.enrolledStudents?.length || 0}
        </p>
        <div className="border-t border-gray-300 dark:border-gray-700 my-6"></div>
        {/* Levels Section */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          Levels
        </h2>
        {fullCourse.levels?.length > 0 ? (
          <ul className="space-y-4">
            {fullCourse.levels.map((Level, index) => (
              <li
                key={Level._id}
                className="border-l-4 border-blue-500 pl-4 py-2 px-2 bg-gray-50 dark:bg-gray-800 shadow-md rounded-md flex justify-between items-center"
              >
                <span className="text-gray-800 dark:text-gray-300 font-medium">
                  {index + 1}. {Level.title}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleDeleteLecture(Level._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/level/${Level._id}`, {
                        state: { Level },
                      })
                    }
                    className="btn btn-sm bg-blue-400 text-white hover:bg-blue-600"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            No Levels available.
          </p>
        )}
        {/* Add Levels Button */}
        <button
          onClick={() => navigate(`/dashboard/add-level/${fullCourse._id}`)}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Add Level
        </button>
      </div>
    </div>
  );
};

export default FullCoursePage;

{
  /* Lectures Section
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          Lectures
        </h2>

        {fullCourse.lectures?.length > 0 ? (
          <ul className="space-y-4">
            {fullCourse.lectures.map((lecture, index) => (
              <li
                key={lecture._id}
                className="border-l-4 border-blue-500 pl-4 py-2 px-2 bg-gray-50 dark:bg-gray-800 shadow-md rounded-md flex justify-between items-center"
              >
                <span className="text-gray-800 dark:text-gray-300 font-medium">
                  {index + 1}. {lecture.title}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleDeleteLecture(lecture._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/edit-lecture/${lecture._id}`, {
                        state: { lecture },
                      })
                    }
                    className="btn btn-sm bg-blue-400 text-white hover:bg-blue-600"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            No lectures available.
          </p>
        )}

        Add Lecture Button
        <button
          onClick={() => navigate(`/dashboard/add-lecture/${fullCourse._id}`)}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Add Lecture
        </button> */
}
