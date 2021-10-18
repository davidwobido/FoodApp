import { createElement } from "./elements.js";

export function createSelectionComponent(klick) {
  const radioButtonPasta = createElement("input", {
    type: "radio",
    name: "food",
    value: "Pasta",
    className: "buttonOptions",
  });

  const labelPasta = createElement("label", {
    for: "buttonPasta",
    textContent: "Pasta",
  });

  const radioButtonPizza = createElement("input", {
    type: "radio",
    name: "food",
    value: "Pizza",
    className: "buttonOptions",
  });

  const labelPizza = createElement("label", {
    for: "buttonPizza",
    textContent: "Pizza",
  });

  const radioButtonBurger = createElement("input", {
    type: "radio",
    name: "food",
    value: "Burger",
    className: "buttonOptions",
  });

  const labelBurger = createElement("label", {
    for: "buttonBurger",
    textContent: "Burger",
  });

  const radioButtonSalad = createElement("input", {
    type: "radio",
    name: "food",
    value: "Salad",
    className: "buttonOptions",
  });

  const labelSalad = createElement("label", {
    for: "buttonSalad",
    textContent: "Salad",
  });

  const radioButtons = createElement("div", { className: "radioButtons" }, [
    radioButtonPasta,
    labelPasta,
    radioButtonPizza,
    labelPizza,
    radioButtonBurger,
    labelBurger,
    radioButtonSalad,
    labelSalad,
  ]);

  const inputName = createElement("input", {
    type: "text",
    placeholder: "Type your Name here",
    className: "inputName",
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
        alert(
          inputName.value +
            "’s favorite food is " +
            formComponent.elements["food"].value
        );
        //klick(inputField.value, formComponent.elements["food"].value);
      },
    },
    [radioButtons, inputName, buttonSubmit]
  );

  return formComponent;
}
