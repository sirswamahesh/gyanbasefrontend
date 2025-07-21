import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";

const useCourseStore = create((set) => ({
  allCourses: [],
  fullCourse: null,
  lecture: null,
  isGettingFullCourse: false,
  isGettingCourse: false,
  isAddingCourse: false,
  isUpdatingCourse: false,
  isDeletingCourse: false,
  isAddingLecture: false,
  isUpdatingLecture: false,
  isAddingLevel: false,
  isGettingLecture: false,

  getAllCourse: async () => {
    try {
      set({ isGettingCourse: true });
      const res = await axiosInstance.get("/course");
      set((state) => ({ ...state, allCourses: res.data.courses }));
    } catch (error) {
      console.log(error);
    } finally {
      set({ isGettingCourse: false });
    }
  },
  addCourse: async (data) => {
    try {
      set({ isAddingCourse: true });
      const res = await axiosInstance.post("/course", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Course added successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAddingCourse: false });
    }
  },
  updateCourse: async (data, id) => {
    try {
      set({ isUpdatingCourse: true });
      const res = await axiosInstance.put(`/course/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Course update successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingCourse: false });
    }
  },
  deleteCourse: async (id) => {
    try {
      set({ isDeletingCourse: true });
      await axiosInstance.delete(`/course/${id}`);
      set((state) => ({
        allCourses: state.allCourses.filter((course) => course._id !== id),
      }));
      toast.success("Course delete successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isDeletingCourse: false });
    }
  },
  addLecture: async (data, levelId) => {
    try {
      set({ isAddingLecture: true });
      const res = await axiosInstance.post(`/lecture/${levelId}`, data);
      toast.success("Lecture added successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAddingLecture: false });
    }
  },
  updateLecture: async (data, LectureId) => {
    try {
      set({ isUpdatingLecture: true });
      const res = await axiosInstance.put(`/lecture/${LectureId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Lecture updated successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingLecture: false });
    }
  },
  getCourseById: async (id) => {
    try {
      set({ isGettingFullCourse: true });
      const res = await axiosInstance.get(`/course/${id}`);
      set((state) => ({ fullCourse: res.data.course }));
    } catch (error) {
      console.log("Error in getting course", error);
    } finally {
      set({ isGettingFullCourse: false });
    }
  },
  getLectureById: async (id) => {
    try {
      set({ isGettingLecture: true });
      const res = await axiosInstance.get(`/lecture/${id}`);
      set((state) => ({ lecture: res.data.lecture }));
    } catch (error) {
      console.log("Error in getting lecture", error);
    } finally {
      set({ isGettingLecture: false });
    }
  },

  addLevel: async (data, courseId) => {
    try {
      set({ isAddingLevel: true });
      const res = await axiosInstance.post(`/level/${courseId}`, data);
      toast.success("Level added successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAddingLevel: false });
    }
  },
}));

export default useCourseStore;
