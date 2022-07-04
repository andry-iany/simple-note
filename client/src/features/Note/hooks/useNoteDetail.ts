import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteNote, useFetchNoteDetailed } from "../../../hooks/useNoteApi";

const useNoteDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [noteId, setNoteId] = useState<string | number>(0);
  const res = useFetchNoteDetailed(noteId);
  const { deleteNote, isSuccess: isDeleteSuccess } = useDeleteNote();

  useEffect(() => {
    setNoteId(params.id || 0);
  }, [params.id]);

  const handleDelete = () => {
    const deleteConfirmed = confirm("Are you sure to delete this note?");
    if (deleteConfirmed) deleteNote([noteId]);
  };

  useEffect(() => {
    if (isDeleteSuccess) navigate("/");
  }, [isDeleteSuccess]);

  return {
    ...res,
    noteId,
    handleDelete,
  };
};

export default useNoteDetail;
