import { atom, selector } from "recoil";

export const isDarkState = atom<boolean>({
  key: "isDarkState",
  default: false,
  effects: [
    ({ setSelf, onSet }) => {
      const darkKey = "dark";
      const savedValue = localStorage.getItem(darkKey);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(darkKey)
          : localStorage.setItem(darkKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const categories: string[] = ["TODO", "DOING", "DONE"];

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoryState = atom<string>({
  key: "category",
  default: categories[0],
});

export const categoriesState = atom<string[]>({
  key: "categoriesState",
  default: categories,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const toDoKey = "toDo";
      const savedValue = localStorage.getItem(toDoKey);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(toDoKey)
          : localStorage.setItem(toDoKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
