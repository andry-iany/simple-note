import FilterForm from "./components/FilterForm";
import Logo from "../../components/Logo/Logo";
import useSideControls from "./hooks/useSideControls";
import NoteSnippetsWrapper from "../Note/components/NoteSnippets/NoteSnippetsWrapper";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import EmptyNotes from "./components/EmptyNotes";
import ErrorIndicator from "../../components/ErrorIndicator/ErrorIndicator";

const SideControls = () => {
  const { isError, isLoading, noteSnippets, handleFilterNote } =
    useSideControls();

  return (
    <div className="vh-100 d-flex flex-column">
      <Logo />
      <FilterForm handleFilter={handleFilterNote} />
      <EmptyNotes isEmpty={!isLoading && !noteSnippets?.length && !isError} />
      <ErrorIndicator isError={isError} />
      <LoadingIndicator isLoading={isLoading} />
      <NoteSnippetsWrapper noteSnippets={noteSnippets || []} />
    </div>
  );
};

export default SideControls;
