export function useScrollTo() {
  const scrollTo = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollTo };
}