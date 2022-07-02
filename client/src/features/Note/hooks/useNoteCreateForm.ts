import { INoteCreateForm } from "./../components/NoteCreate/NoteCreateForm";
import { useState } from "react";

const useNoteCreateForm = (args: INoteCreateForm) => {
  const [validated, setValidated] = useState(false);

  const handleChange = (e: React.SyntheticEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const note = {
      title: (form.formTitle?.value as string) || "",
      body: (form.formBody?.value as string) || "",
    };
    args.handleChange(note);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const note = {
        title: (form.formTitle?.value as string) || "",
        body: (form.formBody?.value as string) || "",
      };
      args.handleSubmit(note);
    }
    setValidated(true);
  };

  return {
    initialNote: args.initialNote,
    validated,
    handleChange,
    handleSubmit,
  };
};

export default useNoteCreateForm;
