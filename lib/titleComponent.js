import { createElement } from "./elements.js";

export function createTitleComponent() {
  const titleItem = createElement(
    "h1",
    {
      className: "headline",
    },
    ["Favorite Food"]
  );

  return titleItem;
}
