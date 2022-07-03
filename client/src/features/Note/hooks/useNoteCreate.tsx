import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateNote,
  useEditNote,
  useFetchNoteDetailed,
} from "../../../hooks/useNoteApi";
import { INotePreview } from "../interfaces/INote";

const useNoteCreate = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [noteId, setNoteId] = useState<string | number>(0);
  const [notePreview, setNotePreview] = useState<INotePreview>();

  const { noteDetailed } = useFetchNoteDetailed(noteId);
  const { createNote, data: resCreateNote } = useCreateNote();
  const { editNote, data: resEditNote } = useEditNote();

  useEffect(() => {
    setNoteId(params.id || 0);
  }, [params.id]);

  useEffect(() => {
    setNotePreview({
      title: noteDetailed?.title || "",
      body: noteDetailed?.body || "",
    });
  }, [noteDetailed]);

  useEffect(() => {
    if (resCreateNote || resEditNote) {
      navigate(`/note/${resCreateNote?.id || resEditNote?.id}`);
    }
  }, [resEditNote, resCreateNote]);

  const handleChange = (note: INotePreview) => {
    setNotePreview(note);
  };

  const handleSubmit = () => {
    noteId ? editNote([noteId, notePreview]) : createNote([notePreview]);
  };

  return {
    noteId,
    notePreview,
    handleChange,
    handleSubmit,
  };
};

export default useNoteCreate;
