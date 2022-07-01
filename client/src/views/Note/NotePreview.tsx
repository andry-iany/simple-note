import { FC } from "react";
import Markdown from "markdown-to-jsx";
import { INote } from "./Note";

interface INotePreview {
  note: INote;
}

const NotePreview: FC<INotePreview> = ({ note: { title, body } }) => {
  return (
    <div className="text-break d-flex flex-column">
      <h1 className="mb-3">{title}</h1>
      <div className="h-100">
        <Markdown>{body}</Markdown>
      </div>
    </div>
  );
};

export default NotePreview;
