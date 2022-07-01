import { useContext, Context } from "react";

const useCustContext = <T>(context: Context<T>) => {
  const value = useContext(context);
  if (!value) throw new Error("must be used inside a context provider");
  return value;
};

export default useCustContext;
