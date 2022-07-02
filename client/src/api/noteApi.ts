import api from "./api";
import {
  INoteSnippet,
  INoteDetailed,
} from "./../features/Note/interfaces/INote";

const url = {
  noteSnippets: "/note-snippets",
  noteDetailed: "/note",
};

export const fetchNoteSnippets = async () => {
  const res = await api.get<INoteSnippet[]>(url.noteSnippets);
  return res.data;
};

export const fetchNoteDetailed = async (id: INoteDetailed["id"]) => {
  const res = await api.get<INoteDetailed>(`${url.noteDetailed}/${id}`);
  return res.data;
};
