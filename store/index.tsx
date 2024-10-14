import { create } from 'zustand'

interface EventState {
  events: string[];
  addEvent: (event: string) => void;
}

const useEventStore = create<EventState>((set) => ({
  events: [],
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
}));

export default useEventStore;