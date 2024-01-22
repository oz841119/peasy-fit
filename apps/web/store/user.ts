import { create } from 'zustand'

interface UserStore {
  id: null | string
  name: null | string
  setId: (id: string) => void
  setName: (name: string) => void
}

export const useUserStore = create<UserStore>((set) => ({
  id: null,
  name: null,
  setId: (id) => set({ id: id }),
  setName: (name) => set({ name: name })
}))