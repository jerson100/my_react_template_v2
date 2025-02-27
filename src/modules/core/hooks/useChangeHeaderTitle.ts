import { useSetAtom } from "jotai"
import { HeaderTitleAtom } from "../states"
import { useEffect } from "react";

const useChangeHeaderTitle = (title: string) => {
  const setHeaderTitle = useSetAtom(HeaderTitleAtom);
  useEffect(() => {
    setHeaderTitle(title);
  }, [title]);
}

export default useChangeHeaderTitle