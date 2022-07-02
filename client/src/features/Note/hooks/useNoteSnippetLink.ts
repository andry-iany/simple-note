import { useState } from "react";

const useNoteSnippetLink = () => {
  const [isSnippetOpen, setIsSnippetOpen] = useState(false);

  const toggleIsSnippetOpen = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSnippetOpen(!isSnippetOpen);
  };

  return { isSnippetOpen, toggleIsSnippetOpen };
};

export default useNoteSnippetLink;
