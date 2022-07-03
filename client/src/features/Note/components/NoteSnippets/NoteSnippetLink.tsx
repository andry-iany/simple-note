import { FC } from "react";
import { Link } from "react-router-dom";
import { INoteSnippet } from "../../interfaces/INote";

const NoteSnippetLink: FC<INoteSnippet> = ({ id, title }) => {
  return (
    <Link
      to={`/note/${id}`}
      className="d-block text-reset text-decoration-none border rounded px-3 py-2 mb-3"
    >
      <p className="text-secondary mb-0 text-truncate pe-4 position-relative">
        {title}
      </p>
    </Link>
  );
};

export default NoteSnippetLink;
