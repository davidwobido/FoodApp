import { createElement } from "./elements.js";

export function createSelectionComponent(klick) {
  const radioButton1 = createElement("input", {
    type: "radio",
    name: "food",
    value: "Pasta",
    className: "button_options",
    id: "button_pasta",
  });

  const label1 = createElement("label", {
    for: "button_button_pasta",
    textContent: "Pasta",
  });

  const radioButton2 = createElement("input", {
    type: "radio",
    name: "food",
    value: "Pizza",
    className: "button_options",
    id: "button_pizza",
  });

  const label2 = createElement("label", {
    for: "button_pizza",
    textContent: "Pizza",
  });

  const radioButton3 = createElement("input", {
    type: "radio",
    name: "food",
    value: "Burger",
    className: "button_options",
    id: "button_burger",
  });

  const label3 = createElement("label", {
    for: "button_burger",
    textContent: "Burger",
  });

  const radioButton4 = createElement("input", {
    type: "radio",
    name: "food",
    value: "Salad",
    className: "button_options",
    id: "button_salad",
  });

  const label4 = createElement("label", {
    for: "button_salad",
    textContent: "Salad",
  });

  const radioButtons = createElement("div", { className: "radioButtons" }, [
    radioButton1,
    label1,
    radioButton2,
    label2,
    radioButton3,
    label3,
    radioButton4,
    label4,
  ]);

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

  const formComponent = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (event) {
        event.preventDefault();
        klick(inputField.value, formComponent.elements["food"].value);
      },
    },
    [radioButtons, inputField, buttonSubmit]
  );

  return formComponent;
}
