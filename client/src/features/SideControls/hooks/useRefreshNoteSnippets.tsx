import { useQueryClient } from "react-query";
import { cacheKeys } from "../../../hooks/useNoteApi";

const useRefreshNoteSnippets = () => {
  const queryClient = useQueryClient();
  const refreshNoteSnippets = () => {
    queryClient.invalidateQueries(cacheKeys.NOTE_SNIPPETS, { exact: true });
  };
  return refreshNoteSnippets;
};

export default useRefreshNoteSnippets;
