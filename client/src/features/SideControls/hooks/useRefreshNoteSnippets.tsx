import { useQueryClient } from "react-query";
import { cacheKeys } from "../../../hooks/useNoteApi";

const useRefreshNoteSnippets = () => {
  const queryClient = useQueryClient();
  const refreshNoteSnippets = () => {
    queryClient.invalidateQueries(cacheKeys.NOTE_SNIPPETS);
  };
  return refreshNoteSnippets;
};

export default useRefreshNoteSnippets;
