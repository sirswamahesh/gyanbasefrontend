import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const useUserStore = create((set)=>({
    users: null,
    isFetchingUsers: false,
    fetchUsers: async (userId) => {
        set({ isFetchingUsers: true })
        try {
            const res = await axiosInstance('/auth/users');
            set({ users: res.data.data })
        } catch (error) {
            console.error(error)
        } finally {
            set({ isFetchingUsers: false })
        }
    },
}))

export default useUserStore;