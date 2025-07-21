import React, { useState } from "react";
import useCourseStore from "../store/useCourseStore";
import { Loader } from "lucide-react"; // Import the Loader from lucide-react
import { useNavigate, useParams } from "react-router-dom";

const AddLecturePage = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const [lecture, setLecture] = useState({
    title: "",
    description: "",
  });

  const { isAddingLecture, addLecture } = useCourseStore();

  const handleChange = (e) => {
    setLecture({ ...lecture, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addLecture(lecture, levelId);
      navigate(`/dashboard/level/${levelId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-64 flex-1 flex items-center justify-center min-h-screen bg-base-200 p-6">
      <div className="w-full max-w-2xl bg-base-100 shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">
          ➕ Add New Lecture
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Lecture Title
              </span>
            </label>
            <input
              type="text"
              name="title"
              value={lecture.title}
              onChange={handleChange}
              placeholder="Enter lecture title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Description
              </span>
            </label>
            <textarea
              name="description"
              value={lecture.description}
              onChange={handleChange}
              placeholder="Enter lecture description"
              rows="4"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn btn-primary w-full ${
              isAddingLecture ? "loading" : ""
            }`}
            disabled={isAddingLecture}
          >
            {isAddingLecture ? (
              <div className="flex items-center justify-center space-x-2">
                {" "}
                {/* Flex container */}
                <Loader className="animate-spin w-5 h-5 text-white" />{" "}
                {/* Adjust size */}
                <span>Loading...</span> {/* Loading text */}
              </div>
            ) : (
              "Add Lecture"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLecturePage;
