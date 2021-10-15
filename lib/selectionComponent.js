import { createElement } from "./elements.js";

export function createSelectionComponent(klick) {
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
    placeholder: "Type your Name here",
    className: "inputField",
  });

  const buttonSubmit = createElement("input", {
    type: "submit",
    value: "Submit",
    className: "buttonSubmit",
  });

  const sectionOption = createElement(
    "form",
    {
      className: "sectionOptions",
      onsubmit: function (event) {
        alert(inputField.value);
        // klick(inputField.value);
        // event.preventDefault();
        // klick(inputField.value);
      },
    },
    [
      buttonPizza,
      buttonPasta,
      buttonBurger,
      buttonSalad,
      inputField,
      buttonSubmit,
    ]
  );

  return sectionOption;
}
