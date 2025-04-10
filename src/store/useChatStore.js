import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  IsUsersLoading: false,
  isMessageLoading: false,

  getUsers: async (data) => {
    set({ IsUsersLoading: false });
    try {
      const res = await axiosInstance.get("/message/users");
      set({ users: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ IsUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessageLoading: true });
    try {
      const res = await axiosInstance.get(`/message/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isMessageLoading: false });
    }
  },

  sendMessages: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      const res = await axiosInstance.post(
        `/message/send/${selectedUser._id}`,
        messageData
      );
      set({ message: [...messages, res.data] });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  setSelectedUser: (selectedUser) => set({ selectedUser: selectedUser }),
}));
