import { useQuery } from "react-query";
import { fetchNoteSnippet } from "../api/noteApi";

const useNoteSnippetsApi = () => {
  const { data: noteSnippets, ...rest } = useQuery(
    "noteSnippets",
    fetchNoteSnippet
  );
  return { ...rest, noteSnippets };
};

export { useNoteSnippetsApi };
