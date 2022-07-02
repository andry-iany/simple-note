import { FC } from "react";
import { INoteSnippet } from "../../interfaces/INote";
import NoteSnippetLink from "./NoteSnippetLink";

interface INoteSnippetsWrapper {
  noteSnippets: INoteSnippet[];
}

const NoteSnippetsWrapper: FC<INoteSnippetsWrapper> = ({ noteSnippets }) => {
  return (
    <div className="py-3 overflow-auto mb-5">
      {noteSnippets.map((note) => (
        <div key={note.id} className="shadow-sm">
          <NoteSnippetLink {...note} />
        </div>
      ))}
    </div>
  );
};

export default NoteSnippetsWrapper;
