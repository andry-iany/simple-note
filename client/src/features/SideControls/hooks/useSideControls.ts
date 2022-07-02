import { INoteSnippet } from "../../Note/interfaces/INote";
import { useEffect, useState } from "react";
import { useNoteSnippetsApi } from "../../../hooks/useNoteApi";

const useSideControls = () => {
  const { noteSnippets, isLoading, isError } = useNoteSnippetsApi();
  const [filteredNoteSnippets, setFilteredNoteSnippets] =
    useState<INoteSnippet[]>();

  useEffect(() => {
    setFilteredNoteSnippets(noteSnippets);
  }, [noteSnippets]);

  const handleFilterNote = (filterValue: string = "") => {
    if (noteSnippets)
      setFilteredNoteSnippets(filterSnippets(noteSnippets, filterValue));
  };

  return {
    isError,
    isLoading,
    noteSnippets: filteredNoteSnippets,
    handleFilterNote,
  };
};

const filterSnippets = (snippets: INoteSnippet[], filterValue = "") => {
  return snippets.filter((snippet) =>
    snippet.title.toLowerCase().startsWith(filterValue.toLowerCase())
  );
};

export default useSideControls;
