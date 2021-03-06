import React, { useReducer, createContext, FC } from "react";
import noteReducer, {
  INoteState,
  INoteAction,
  initialState,
} from "../reducers/noteReducer";

type INoteContext = INoteState & {
  dispatch: React.Dispatch<INoteAction>;
};

export const NoteContext = createContext<INoteContext | null>(null);

interface INoteContextProvider {
  children: React.ReactNode;
}

const NoteContextProvider: FC<INoteContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  return (
    <NoteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
