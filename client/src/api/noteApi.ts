import api from "./api";
import {
  INoteSnippet,
  INoteDetailed,
} from "./../features/Note/interfaces/INote";

const url = {
  noteSnippets: "/note",
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

export const createNote = async (body: unknown) => {
  const res = await api.post<INoteDetailed>(`${url.noteDetailed}`, body);
  return res.data;
};

export const editNote = async (id: INoteDetailed["id"], body: unknown) => {
  const res = await api.put<INoteDetailed>(`${url.noteDetailed}/${id}`, body);
  return res.data;
};

export const deleteNote = async (id: INoteDetailed["id"]) => {
  const res = await api.delete(`${url.noteDetailed}/${id}`);
  return res.data;
};
