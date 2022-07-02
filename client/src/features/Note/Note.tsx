import { Outlet } from "react-router-dom";
import NoteContextProvider from "./contexts/NoteContext";

export interface INote {
  title: string;
  body: string;
}

export const isNote = (note: any): note is INote => {
  return typeof note?.title === "string" && typeof note?.body === "string";
};

const Note = () => {
  return (
    <NoteContextProvider>
      <div className="px-5 py-4 vh-100 d-flex flex-column">
        <div className="bg-light p-4 h-100">
          <Outlet />
        </div>
      </div>
    </NoteContextProvider>
  );
};

export default Note;
