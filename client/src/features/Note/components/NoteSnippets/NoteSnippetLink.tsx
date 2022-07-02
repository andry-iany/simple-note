import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Image } from "react-bootstrap";
import { INoteSnippet } from "../../interfaces/INote";

import chevron from "../../../../assets/icons/chevron-down.svg";
import useNoteSnippetLink from "../../hooks/useNoteSnippetLink";

const NoteSnippetLink: FC<INoteSnippet> = ({ id, title, snippet }) => {
  const { isSnippetOpen, toggleIsSnippetOpen } = useNoteSnippetLink();

  return (
    <Link
      to={`/note/${id}`}
      className="d-block text-reset text-decoration-none border rounded px-3 py-2 mb-3"
    >
      <p className="text-secondary mb-0 text-truncate pe-4 position-relative">
        <span>{title}</span>
        <Image
          src={chevron}
          onClick={toggleIsSnippetOpen}
          className={`note-img rounded-circle position-absolute top-50 end-0 translate-middle-y p-1 ${
            isSnippetOpen ? "border-orange" : "border-gray"
          }`}
          style={{
            cursor: "pointer",
            height: "1.3rem",
            width: "1.3rem",
          }}
        />
      </p>

      <Collapse in={isSnippetOpen}>
        <p className="mb-0 overflow-hidden" style={{ maxHeight: "3rem" }}>
          <small>{snippet}</small>
        </p>
      </Collapse>
    </Link>
  );
};

export default NoteSnippetLink;
