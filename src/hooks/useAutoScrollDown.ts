import { useEffect } from "react";

type UseAutoScrollDown = (
  ref: React.RefObject<HTMLDivElement>,
  dependencies: unknown[],
) => void;

export const useAutoScrollDown: UseAutoScrollDown = (ref, dependencies) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}