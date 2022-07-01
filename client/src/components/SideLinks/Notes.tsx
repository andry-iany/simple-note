import { FC, useState } from "react";
import { Collapse, Image } from "react-bootstrap";
import chevron from "../../assets/icons/chevron-down.svg";

interface INote {
  title: string;
  snippet: string;
}

const notes: INote[] = [
  {
    title: "some heading goes herehereherehereherehereherehere",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
  {
    title: "some heading goes here",
    snippet: "what about the snippet? don't worry we have section for that",
  },
];

const Notes = () => {
  return (
    <div className="py-3 overflow-auto mb-5">
      {notes.map((note, idx) => (
        <Note key={idx} {...note} />
      ))}
    </div>
  );
};

const Note: FC<INote> = ({ title, snippet }) => {
  const [isSnippetOpen, setIsSnippetOpen] = useState(false);

  return (
    <div className="border rounded px-3 py-2 mb-3 shadow-sm">
      <p className="text-secondary mb-0 text-truncate pe-4 position-relative">
        <span>{title}</span>
        <Image
          src={chevron}
          onClick={() => setIsSnippetOpen(!isSnippetOpen)}
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
    </div>
  );
};

export default Notes;
