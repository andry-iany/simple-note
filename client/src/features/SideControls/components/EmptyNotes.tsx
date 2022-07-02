import { FC } from "react";

interface IEmptyNotes {
  isEmpty: boolean;
}

const EmptyNotes: FC<IEmptyNotes> = ({ isEmpty }) => {
  return (
    <>
      {isEmpty && (
        <div className="px-2 text-muted text-center">Nothing to show...</div>
      )}
    </>
  );
};

export default EmptyNotes;
