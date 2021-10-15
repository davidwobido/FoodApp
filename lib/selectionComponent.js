import { createElement } from "./elements.js";

export function createSelectionComponent() {
  const sectionOption = createElement("section", {
    className: "sectionOpions",
  });

  return sectionOption;
}
