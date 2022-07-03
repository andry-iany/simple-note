import { useMutation, useQuery } from "react-query";
import {
  fetchNoteSnippets,
  fetchNoteDetailed,
  createNote as createNoteApi,
  editNote as editNoteApi,
  deleteNote as deleteNoteApi,
} from "../api/noteApi";
import { INoteDetailed } from "../features/Note/interfaces/INote";

export enum cacheKeys {
  NOTE_SNIPPETS = "noteSnippets",
  NOTE_DETAILED = "noteDetailed",
}

export const useFetchNoteSnippets = () => {
  const { data: noteSnippets, ...rest } = useQuery(
    cacheKeys.NOTE_SNIPPETS,
    () => fetchNoteSnippets()
  );
  return { ...rest, noteSnippets };
};

export const useFetchNoteDetailed = (id: INoteDetailed["id"]) => {
  const { data: noteDetailed, ...rest } = useQuery(
    [cacheKeys.NOTE_DETAILED, id],
    () => fetchNoteDetailed(id),
    {
      enabled: !!id,
    }
  );
  return { ...rest, noteDetailed };
};

export const useCreateNote = () => {
  const { mutate: createNote, ...rest } = useMutation<
    Awaited<ReturnType<typeof createNoteApi>>,
    Error,
    Parameters<typeof createNoteApi>,
    unknown
  >(async (args) => createNoteApi(...args));
  return { ...rest, createNote };
};

export const useEditNote = () => {
  const { mutate: editNote, ...rest } = useMutation<
    Awaited<ReturnType<typeof editNoteApi>>,
    Error,
    Parameters<typeof editNoteApi>,
    unknown
  >(async (args) => editNoteApi(...args));
  return { ...rest, editNote };
};

export const useDeleteNote = () => {
  const {
    mutate: deleteNote,
    data: resDataDelete,
    ...rest
  } = useMutation<
    Awaited<ReturnType<typeof deleteNoteApi>>,
    Error,
    Parameters<typeof deleteNoteApi>,
    unknown
  >(async (args) => deleteNoteApi(...args));
  return { ...rest, resDataDelete, deleteNote };
};
