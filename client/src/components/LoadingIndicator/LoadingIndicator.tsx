import { FC } from "react";

interface ILoadingIndicator {
  isLoading: boolean;
}

const LoadingIndicator: FC<ILoadingIndicator> = ({ isLoading }) => {
  return <>{isLoading && <div>Loading...</div>}</>;
};

export default LoadingIndicator;
