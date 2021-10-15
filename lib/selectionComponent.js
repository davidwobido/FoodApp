import { createElement } from "./elements.js";

export function createSelectionComponent() {
  const buttonPasta = createElement("button", {
    type: "submit",
    className: "button_options button_pasta",
    textContent: "Pasta",
  });

  const buttonPizza = createElement("button", {
    type: "submit",
    className: "button_options button_pizza",
    textContent: "Pizza",
  });

  const buttonBurger = createElement("button", {
    type: "submit",
    className: "button_options button_burger",
    textContent: "Burger",
  });

  const buttonSalad = createElement("button", {
    type: "submit",
    className: "button_options button_salad",
    textContent: "Salad",
  });

  const inputField = createElement("input", {
    type: "text",
    value: "Type your name here",
    className: "inputField",
  });

  const sectionOption = createElement(
    "section",
    {
      className: "sectionOptions",
    },
    [buttonPizza, buttonPasta, buttonBurger, buttonSalad, inputField]
  );

  return sectionOption;
}
