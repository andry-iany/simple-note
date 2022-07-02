import api from "./api";
import { INoteSnippet } from "./../features/Note/interfaces/INote";

const url = {
  noteSnippets: "/note-snippets",
};

export const fetchNoteSnippet = async () => {
  const res = await api.get<INoteSnippet[]>(url.noteSnippets);
  return res.data;
};
