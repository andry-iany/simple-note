import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchNoteDetailed } from "../../../hooks/useNoteApi";

const useNoteDetail = () => {
  const params = useParams();
  const [noteId, setNoteId] = useState<string | number>(0);
  const res = useFetchNoteDetailed(noteId);

  useEffect(() => {
    setNoteId(params.id || 0);
  }, [params.id]);

  const handleDelete = () => {
    //
  };

  return {
    ...res,
    noteId,
    handleDelete,
  };
};

export default useNoteDetail;
