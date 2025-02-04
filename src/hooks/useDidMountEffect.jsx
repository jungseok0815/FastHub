import { useEffect, useRef } from "react";

const UseUpdateEffect = (effect, deps) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    return effect();
  }, deps);
};

export default UseUpdateEffect;
