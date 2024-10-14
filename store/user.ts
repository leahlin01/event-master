import { create } from 'zustand'

interface UserState {
  isRegistered: boolean;
  register: () => void;
  unregister: () => void;
  initialize: () => void;
}

const useUserStore = create<UserState>((set) => ({
  isRegistered: false,
  register: () => set({ isRegistered: true }),
  unregister: () => set({ isRegistered: false }),
  initialize: () => {
    const isLoggedIn = document.cookie.includes('userLoggedIn=true'); // Check cookie
    set({ isRegistered: isLoggedIn }); // Set state based on cookie
  },
}));

export default useUserStore;