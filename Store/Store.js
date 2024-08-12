import categoryitemdata from "../Data/CategoryItemData.js";
import categorydata from "../Data/Categorydata.js";
import { create } from "zustand";

// Category Store
const useCategoryStore = create(() => ({
  CategoryData: categorydata,
}));

// CategoryItem Store
const useCategoryItemStore = create((set) => ({
  CategoryItemData: categoryitemdata,
  SeparateDatabyId: (id) => categoryitemdata.filter((item) => item.id === id),
  SeparateDataByCategory: (category) =>
    categoryitemdata.filter((item) => item.category === category),
}));

// Favorite Store
const useFavoriteStore = create((set) => ({
  favorite: [],
  addFavorite: (item) =>
    set((state) => {
      // Ensure item is not already in favorites
      if (!state.favorite.find((fav) => fav.id === item.id)) {
        return { favorite: [...state.favorite, item] };
      }
      return state;
    }),
  removeFavorite: (item) =>
    set((state) => ({
      favorite: state.favorite.filter((fav) => fav.id !== item.id),
    })),
}));

// Switches Store
const useSwitchStore = create((set) => ({
  switches: { Easy: true, Medium: true, Difficult: true },
  toggleSwitch: (key) =>
    set((state) => ({
      switches: { ...state.switches, [key]: !state.switches[key] },
    })),
  setSwitch: (key, value) =>
    set((state) => ({ switches: { ...state.switches, [key]: value } })),
}));
export {
  useCategoryStore,
  useCategoryItemStore,
  useFavoriteStore,
  useSwitchStore,
};
