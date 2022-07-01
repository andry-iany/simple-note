import Markdown from "markdown-to-jsx";
import useNotePreview from "./hooks/useNotePreview";

const NotePreview = () => {
  const { note } = useNotePreview();
  return (
    <div className="text-break d-flex flex-column">
      <h1 className="mb-3">{note.title}</h1>
      <div className="h-100">
        <Markdown>{note.body}</Markdown>
      </div>
    </div>
  );
};

export default NotePreview;
