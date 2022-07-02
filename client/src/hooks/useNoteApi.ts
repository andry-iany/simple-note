import { useQuery } from "react-query";
import { fetchNoteSnippets, fetchNoteDetailed } from "../api/noteApi";
import { INoteDetailed } from "../features/Note/interfaces/INote";

export enum cacheKeys {
  NOTE_SNIPPETS = "noteSnippets",
  NOTE_DETAILED = "noteDetailed",
}

const useFetchNoteSnippets = () => {
  const { data: noteSnippets, ...rest } = useQuery(
    cacheKeys.NOTE_SNIPPETS,
    () => fetchNoteSnippets()
  );
  return { ...rest, noteSnippets };
};

const useFetchNoteDetailed = (id: INoteDetailed["id"]) => {
  const { data: noteDetailed, ...rest } = useQuery(
    [cacheKeys.NOTE_DETAILED, id],
    () => fetchNoteDetailed(id),
    {
      enabled: !!id,
    }
  );
  return { ...rest, noteDetailed };
};

export { useFetchNoteSnippets, useFetchNoteDetailed };
