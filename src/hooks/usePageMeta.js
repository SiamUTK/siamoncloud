import { useEffect } from "react";

function usePageMeta({ title, description, scrollToTop = true }) {
  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }

    const previousTitle = document.title;
    if (title) {
      document.title = title;
    }

    let previousMeta = "";
    let hadMeta = false;
    let metaTag = null;

    if (description) {
      metaTag = document.querySelector('meta[name="description"]');
      hadMeta = Boolean(metaTag);
      previousMeta = metaTag?.getAttribute("content") || "";

      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "description");
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;

      if (description && metaTag) {
        if (hadMeta) {
          metaTag.setAttribute("content", previousMeta);
        } else {
          metaTag.remove();
        }
      }
    };
  }, [title, description, scrollToTop]);
}

export default usePageMeta;
