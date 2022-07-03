import { FC } from "react";
import { NavLink } from "react-router-dom";
import { INoteSnippet } from "../../interfaces/INote";

const NoteSnippetLink: FC<INoteSnippet> = ({ id, title }) => {
  return (
    <NavLink
      to={`/note/${id}`}
      className={({ isActive }) =>
        `${isActive ? "snippet-active" : "snippet"} 
        d-block text-reset text-decoration-none rounded px-3 py-2 mb-3`
      }
    >
      <p className="text-secondary mb-0 text-truncate pe-4 position-relative">
        {title}
      </p>
    </NavLink>
  );
};

export default NoteSnippetLink;
