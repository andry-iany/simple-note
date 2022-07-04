import { useMutation, useQuery } from "react-query";
import {
  fetchNoteSnippets,
  fetchNoteDetailed,
  createNote as createNoteApi,
  editNote as editNoteApi,
  deleteNote as deleteNoteApi,
} from "../api/noteApi";
import { INoteDetailed } from "../features/Note/interfaces/INote";
import useRefreshNoteSnippets from "../features/SideControls/hooks/useRefreshNoteSnippets";

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
  const refreshNoteSnippets = useRefreshNoteSnippets();
  const { mutate: createNote, ...rest } = useMutation<
    Awaited<ReturnType<typeof createNoteApi>>,
    Error,
    Parameters<typeof createNoteApi>,
    unknown
  >(async (args) => createNoteApi(...args), {
    onSuccess: () => {
      refreshNoteSnippets();
    },
  });
  return { ...rest, createNote };
};

export const useEditNote = () => {
  const refreshNoteSnippets = useRefreshNoteSnippets();
  const { mutate: editNote, ...rest } = useMutation<
    Awaited<ReturnType<typeof editNoteApi>>,
    Error,
    Parameters<typeof editNoteApi>,
    unknown
  >(async (args) => editNoteApi(...args), {
    onSuccess: () => {
      refreshNoteSnippets();
    },
  });
  return { ...rest, editNote };
};

export const useDeleteNote = () => {
  const refreshNoteSnippets = useRefreshNoteSnippets();
  const {
    mutate: deleteNote,
    data: resDataDelete,
    ...rest
  } = useMutation<
    Awaited<ReturnType<typeof deleteNoteApi>>,
    Error,
    Parameters<typeof deleteNoteApi>,
    unknown
  >(async (args) => deleteNoteApi(...args), {
    onSuccess: () => {
      refreshNoteSnippets();
    },
  });
  return { ...rest, resDataDelete, deleteNote };
};
