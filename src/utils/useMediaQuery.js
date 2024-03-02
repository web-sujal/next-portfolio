import { useState, useEffect } from "react";

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      const listener = (e) => setMatches(e.matches);

      // Check the initial state
      setMatches(mediaQueryList.matches);

      mediaQueryList.addEventListener("change", listener);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        mediaQueryList.removeEventListener("change", listener);
      };
    }
  }, [query]); // Re-run if the query changes

  return matches;
}
