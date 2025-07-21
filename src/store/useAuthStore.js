import { create } from "zustand"
import { axiosInstance } from "../lib/axios";
import { toast } from 'react-hot-toast'
const useAuthStore = create((set) => ({
  authUser: null,
  allCourses:[],
  isUpdatingProfile:false,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,
  isGettingCourse: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      set({ authUser: null })
    } finally {
      set({
        isCheckingAuth: false
      })
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data.data });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },
  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data.user });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
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
}));

export default useAuthStore;