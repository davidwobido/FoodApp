import { createElement } from "./elements.js";

export function createFooterComponent() {
  const footerComponent = createElement(
    "footer",
    {
      className: "footerBar",
    },
    ["Favorite Food is an upcoming app"]
  );
  return footerComponent;
}
