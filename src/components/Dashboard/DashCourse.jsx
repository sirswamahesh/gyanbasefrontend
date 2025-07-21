import React, { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Loader, Trash, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCourseStore from "../../store/useCourseStore";
const CoursesTable = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getAllCourse, isGettingCourse, allCourses, deleteCourse } =
    useCourseStore();
  const [deleteCourseId, setDeleteCourseID] = useState("");
  useEffect(() => {
    getAllCourse();
  }, []);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    try {
      deleteCourse(deleteCourseId);
    } catch (error) {
      console.log("Failed to delete course");
    } finally {
      setIsModalOpen(false);
    }
  };
  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="ml-64 flex-1 p-6 bg-base-100 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Courses</h2>
        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => navigate("/dashboard/add-course")} // Navigate on click
        >
          <Plus className="w-5 h-5" />
          Add New Course
        </button>
      </div>
      {isGettingCourse ? (
        <div className="flex items-center justify-center ">
          <Loader className="size-10 animate-spin" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Level</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {allCourses.map((course, index) => (
                <tr key={index} className="hover">
                  <td>{index + 1}</td>
                  <td
                    onClick={() =>
                      navigate(`/dashboard/courses/${course._id}`, {
                        state: { course },
                      })
                    }
                  >
                    {course.courseTitle}
                  </td>
                  <td>{course.category}</td>
                  <td>{course.courseLevel}</td>
                  <td>{course.coursePrice}</td>
                  <td className="flex gap-2">
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() =>
                        navigate("/dashboard/edit-course", {
                          state: { course },
                        })
                      }
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => {
                        handleDeleteClick();
                        setDeleteCourseID(course._id);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <Trash className="text-red-500" />
              Are you sure you want to delete this course?
            </h3>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleConfirmDelete}
                className="btn btn-error flex items-center gap-2"
              >
                <Check /> Confirm
              </button>
              <button
                onClick={handleCancelDelete}
                className="btn btn-secondary flex items-center gap-2"
              >
                <X /> Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesTable;
