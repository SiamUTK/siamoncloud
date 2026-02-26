const toastEl = document.getElementById("contactToast");

if (toastEl) {
  const observer = new MutationObserver(() => {
    if (!toastEl.classList.contains("hidden") && toastEl.textContent?.trim()) {
      window.clearTimeout(toastEl._hideTimer);
      toastEl._hideTimer = window.setTimeout(() => {
        toastEl.classList.add("hidden");
      }, 5000);
    }
  });

  observer.observe(toastEl, {
    attributes: true,
    attributeFilter: ["class"],
    childList: true,
    subtree: true,
  });
}

const proofTrack = document.querySelector(".proof-scroll");
const isSmallScreen = window.matchMedia("(max-width: 767px)");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

if (proofTrack && isSmallScreen.matches && !prefersReducedMotion.matches) {
  let isUserInteracting = false;
  let autoScrollTimer = null;

  const startAutoScroll = () => {
    autoScrollTimer = window.setInterval(() => {
      if (isUserInteracting) return;
      const maxScrollLeft = proofTrack.scrollWidth - proofTrack.clientWidth;
      if (proofTrack.scrollLeft >= maxScrollLeft - 8) {
        proofTrack.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        proofTrack.scrollBy({
          left: proofTrack.clientWidth * 0.82,
          behavior: "smooth",
        });
      }
    }, 3600);
  };

  const stopAutoScroll = () => {
    if (autoScrollTimer) {
      window.clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }
  };

  ["touchstart", "mousedown", "pointerdown"].forEach((eventName) => {
    proofTrack.addEventListener(eventName, () => {
      isUserInteracting = true;
    });
  });

  ["touchend", "mouseup", "pointerup", "mouseleave"].forEach((eventName) => {
    proofTrack.addEventListener(eventName, () => {
      isUserInteracting = false;
    });
  });

  startAutoScroll();
  window.addEventListener("beforeunload", stopAutoScroll);
}
