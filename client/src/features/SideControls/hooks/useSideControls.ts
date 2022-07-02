import { INoteSnippet } from "../../Note/interfaces/INote";
import { useEffect, useState } from "react";
const initialNoteSnippets = [
  {
    id: 1,
    title: "some heading goes herehereherehereherehereherehere",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 2,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 3,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 4,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 5,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 6,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 7,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 8,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 9,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 10,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 11,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 12,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    id: 13,
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
];

const useSideControls = () => {
  const [noteSnippets, setNoteSnippets] = useState<INoteSnippet[] | null>(null);
  const [filteredNoteSnippets, setFilteredNoteSnippets] = useState<
    INoteSnippet[] | null
  >(null);

  useEffect(() => {
    // fetch the initial snippets
    setNoteSnippets(initialNoteSnippets);
  }, []);

  useEffect(() => {
    setFilteredNoteSnippets(noteSnippets);
  }, [noteSnippets]);

  const handleFilterNote = (filterValue: string = "") => {
    if (noteSnippets)
      setFilteredNoteSnippets(filterSnippets(noteSnippets, filterValue));
  };

  return { noteSnippets: filteredNoteSnippets, handleFilterNote };
};

const filterSnippets = (snippets: INoteSnippet[], filterValue = "") => {
  return snippets.filter((snippet) =>
    snippet.title.toLowerCase().startsWith(filterValue.toLowerCase())
  );
};

export default useSideControls;
