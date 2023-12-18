import { useDispatch as useRegularDispatch } from "react-redux";
import { Action } from "redux";

export type VoidDispatch<A extends Action> = <T extends A>(_action: T) => void;

export const useDispatch = <A extends Action>(): VoidDispatch<A> => {
  const regularDispatch = useRegularDispatch();

  return (action: A) => { regularDispatch(action); };
};