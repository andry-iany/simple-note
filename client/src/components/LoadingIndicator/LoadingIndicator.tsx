import { FC } from "react";

interface ILoadingIndicator {
  isLoading: boolean;
}

const LoadingIndicator: FC<ILoadingIndicator> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="px-2 text-muted text-center">Loading...</div>
      )}
    </>
  );
};

export default LoadingIndicator;
