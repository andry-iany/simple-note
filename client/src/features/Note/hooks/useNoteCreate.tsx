import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchNoteDetailed } from "../../../hooks/useNoteApi";
import { INotePreview } from "../interfaces/INote";

const useNoteCreate = () => {
  const params = useParams();
  const [noteId, setNoteId] = useState<string | number>(0);
  const [notePreview, setNotePreview] = useState<INotePreview>();

  const { noteDetailed, ...rest } = useFetchNoteDetailed(noteId);

  useEffect(() => {
    setNoteId(params.id || 0);
  }, [params.id]);

  useEffect(() => {
    setNotePreview({
      title: noteDetailed?.title || "",
      body: noteDetailed?.body || "",
    });
  }, [noteDetailed]);

  const handleChange = (note: INotePreview) => {
    setNotePreview(note);
  };

  const handleSubmit = () => {
    //
  };

  return {
    ...rest,
    noteId,
    notePreview,
    noteDetailed,
    handleChange,
    handleSubmit,
  };
};

export default useNoteCreate;
