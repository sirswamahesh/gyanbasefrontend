import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import useCourseStore from "../../store/useCourseStore";
import { useLocation, useNavigate } from "react-router-dom";

const categories = [
  "Web Development",
  "Backend Development",
  "Mobile App Development",
  "Data Science",
  "Machine Learning",
  "Cyber Security",
  "Blockchain Development",
  "Game Development",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
];

const EditCourse = () => {
  const location = useLocation();
  const course = location.state?.course || {};
  const [imagePreview, setImagePreview] = useState(course.courseThumbnail);
  const [updateCourseData, setUpdateCourseData] = useState({});
 const [formData, setFormData] = useState(course);
const { updateCourse, isUpdatingCourse } = useCourseStore();
const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUpdateCourseData({
      ...updateCourseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdateCourseData({
        ...updateCourseData,
        courseThumbnail: file,
      });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(updateCourseData).length == 0) {
      toast.error("No changes made!");
      return;
    }
    const submitData = new FormData();
    Object.entries(updateCourseData).forEach(([key, value]) => {
      submitData.append(key, value);
    });
    try {
      updateCourse(submitData, course._id);
      setImagePreview(null);
      navigate("/dashboard/courses")
    } catch (error) {
      toast.error("Failed to add course");
    } finally {

    }
  };
  return (
    <div className="ml-64 flex-1 p-6 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Course</h2>

      <form onSubmit={handleSubmit}>
        {/* Course Title */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Course Title</span>
          </label>
          <input
            type="text"
            name="courseTitle"
            className="input input-bordered w-full"
            value={formData.courseTitle}
            onChange={handleChange}
            required
            placeholder="Enter course title"
          />
        </div>

        {/* Sub Title */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Sub Title</span>
          </label>
          <input
            type="text"
            name="subTitle"
            className="input input-bordered w-full"
            value={formData.subTitle}
            onChange={handleChange}
            placeholder="Enter subtitle"
          />
        </div>

        {/* Description */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter course description"
          />
        </div>

        {/* Category */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            name="category"
            className="select select-bordered w-full"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Course Level */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Course Level</span>
          </label>
          <select
            name="courseLevel"
            className="select select-bordered w-full"
            value={formData.courseLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Medium">Medium</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Course Price */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Course Price</span>
          </label>
          <input
            type="number"
            name="coursePrice"
            className="input input-bordered w-full"
            value={formData.coursePrice}
            onChange={handleChange}
            required
            min="0"
            placeholder="Enter course price"
          />
        </div>

        {/* Course Thumbnail (Image Upload) */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Course Thumbnail</span>
          </label>
          <div className="relative w-48 h-48 border-2 border-dashed flex items-center justify-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Thumbnail Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">Select Image</span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className={`btn ${
              isUpdatingCourse ? "btn-disabled" : "btn-primary"
            }`}
            disabled={isUpdatingCourse}
          >
            {isUpdatingCourse ? "Updating..." : "Update Course"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
