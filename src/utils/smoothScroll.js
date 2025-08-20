export const smoothScrollTo = (sectionId, callback) => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (callback) callback(sectionId);
      }, 1000);
    }
  }
};
