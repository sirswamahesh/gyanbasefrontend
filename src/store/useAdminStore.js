import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";

const useAdminStore = create((set) => ({
  fullCourse: null,
  fullLevel: null,
  isGettingFullLevel: false,
  isDeletingLecture: false,
  isGettingFullCourse: false,
  deleteLecture: async (lectureId) => {
    try {
      set({ isDeletingLecture: true });
      await axiosInstance.delete(`/lecture/${lectureId}`);
      set((state) => ({
        fullCourse: state.fullCourse
          ? {
              ...state.fullCourse,
              lectures: state.fullCourse.lectures
                ? state.fullCourse.lectures.filter(
                    (lecture) => lecture._id !== lectureId
                  )
                : [],
            }
          : null,
      }));
      toast.success("Lecture deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isDeletingLecture: false });
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
  getLevelById: async (id) => {
    try {
      set({ isGettingFullLevel: true });
      const res = await axiosInstance.get(`/level/${id}`);
      set((state) => ({ fullLevel: res.data.level }));
    } catch (error) {
      console.log("Error in getting level", error);
    } finally {
      set({ isGettingFullLevel: false });
    }
  },
}));

export default useAdminStore;
