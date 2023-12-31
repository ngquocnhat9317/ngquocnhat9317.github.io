import { useCallback, useRef } from "react";

const useWrapperApi = (
  _function: (..._arg: any[]) => void,
  _dependenci: (string | boolean | number)[],
) => {
  const ref = useRef(true);

  const wrapperFunction = useCallback(() => {
    if (ref.current) {
      _function();
      ref.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_function, ..._dependenci]);

  return wrapperFunction;
};

export default useWrapperApi;
