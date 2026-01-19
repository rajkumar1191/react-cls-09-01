import { useReducer } from "react";
import { IllustrationContext } from "./IllustrationContext";

const initialState = {
  illustrations: [
    { name: "Sunset", year: 2022, date: "05-15" },
    { name: "Mountain", year: 2023, date: "08-22" },
    { name: "Ocean", year: 2024, date: "11-30" },
    { name: "Sky", year: 2026, date: "11-30" },
  ],
};

const illustrationReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        illustrations: [...state.illustrations, action.illustration],
      };
    default:
      return state;
  }
};

export const IllustrationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(illustrationReducer, initialState);

  return (
    <IllustrationContext.Provider value={{ state, dispatch }}>
      {children}
    </IllustrationContext.Provider>
  );
};
