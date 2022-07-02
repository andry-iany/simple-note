import Markdown from "markdown-to-jsx";
import useNotePreview from "../hooks/useNotePreview";

const NotePreview = () => {
  const { note, preview, isEditing } = useNotePreview();
  return (
    <div className="text-break d-flex flex-column">
      <h1 className="mb-3">{isEditing ? preview.title : note.title}</h1>
      <div className="h-100">
        <Markdown>{isEditing ? preview.body : note.body}</Markdown>
      </div>
    </div>
  );
};

export default NotePreview;
