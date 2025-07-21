import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UploadCloud, Save, X } from "lucide-react";
import toast from "react-hot-toast";
import useCourseStore from "../store/useCourseStore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Preview from "../components/Preview";
const EditLecturePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lecture } = location.state || {};
  const [updatedData, setUpdatedData] = useState({});
  const [title, setTitle] = useState(lecture?.title || "");
  const [description, setDescription] = useState(lecture?.description || "");
  const [videoUrl, setVideoUrl] = useState(lecture?.videoUrl || "");
  const [isPreviewFree, setIsPreviewFree] = useState(
    lecture?.isPreviewFree || false
  );
  const [newVideo, setNewVideo] = useState(null);
  const { isUpdatingLecture, updateLecture } = useCourseStore();
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewVideo(file);
      setUpdatedData({ ...updatedData, video: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.keys(updatedData).length > 0) {
      toast.error("No changes made!");
      return;
    }
    try {
      updateLecture(updatedData, lecture._id);
      navigate(`/dashboard/courses`);
    } catch (error) {
      toast.error("Failed to update lecture.");
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"], // <-- Add this
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };
  return (
    <div className="ml-64 flex-1 bg-base-200 p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Lecture</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Lecture Title</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setUpdatedData({ ...updatedData, title: e.target.value });
            }}
            required
          />
        </div>

        {/* Description Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Write something..."
            className="h-72 w-full p-4 mb-12 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={description.trimStart()}
            onChange={(e) => {
              const trimmed = e.target.value.trimStart();
              setDescription(trimmed);
              setUpdatedData({
                ...updatedData,
                description: trimmed,
              });
            }}
          />

          <Preview content={description} />
        </div>

        {/* Video Upload & Preview */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload New Video</span>
          </label>
          <label className="input input-bordered flex items-center gap-3 cursor-pointer">
            <UploadCloud className="w-5 h-5 text-primary" />
            <input
              type="file"
              className="hidden"
              accept="video/*"
              onChange={handleVideoChange}
            />
            <span>{newVideo ? newVideo.name : "Choose a file..."}</span>
          </label>
        </div>

        {/* Video Preview */}
        <div className="mt-4">
          <label className="label">
            <span className="label-text">Video Preview</span>
          </label>
          {newVideo || videoUrl ? (
            <video
              controls
              className="w-full  rounded-lg border border-gray-300 shadow-sm"
            >
              <source
                src={newVideo ? URL.createObjectURL(newVideo) : videoUrl}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p className="text-gray-500 text-sm">No video selected.</p>
          )}
        </div>

        {/* Free Preview Checkbox */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">
              Is this lecture free for preview?
            </span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={isPreviewFree}
              onChange={(e) => {
                setIsPreviewFree(e.target.checked);
                setUpdatedData({
                  ...updatedData,
                  isPreviewFree: e.target.checked,
                });
              }}
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-error flex items-center gap-2"
          >
            <X className="w-5 h-5" /> Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary flex items-center gap-2"
          >
            <Save className="w-5 h-5" /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditLecturePage;
