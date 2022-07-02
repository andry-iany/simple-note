import Markdown from "markdown-to-jsx";
import { FC } from "react";
import { INoteDetailed, INotePreview } from "../../interfaces/INote";

interface NotePreviewProps {
  note?: INotePreview | INoteDetailed;
}

const NotePreview: FC<NotePreviewProps> = ({ note }) => {
  return (
    <div className="text-break d-flex flex-column">
      <h1 className="mb-3">{note?.title}</h1>
      <div className="h-100">
        <Markdown>{note?.body || ""}</Markdown>
      </div>
    </div>
  );
};

export default NotePreview;
