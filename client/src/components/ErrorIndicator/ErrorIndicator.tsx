import { FC } from "react";

interface IErrorIndicator {
  isError: boolean;
  message?: string;
}

const ErrorIndicator: FC<IErrorIndicator> = ({ isError, message }) => {
  return (
    <>
      {isError && (
        <div className="px-2 text-muted text-center">
          {message || "An error occured while performing the requested action."}
        </div>
      )}
    </>
  );
};

export default ErrorIndicator;
