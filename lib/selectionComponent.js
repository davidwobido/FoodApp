import { createElement } from "./elements.js";

export function createSelectionComponent(klick) {
  // Create four radio buttons + labels
  const radioButtonPasta = createElement("input", {
    type: "radio",
    name: "food",
    value: "Pasta",
    className: "buttonOptions",
  });

  const labelPasta = createElement("label", {
    textContent: "Pasta",
  });

  const radioButtonPizza = createElement("input", {
    type: "radio",
    name: "food",
    value: "Pizza",
    className: "buttonOptions",
  });

  const labelPizza = createElement("label", {
    textContent: "Pizza",
  });

  const radioButtonBurger = createElement("input", {
    type: "radio",
    name: "food",
    value: "Burger",
    className: "buttonOptions",
  });

  const labelBurger = createElement("label", {
    textContent: "Burger",
  });

  const radioButtonSalad = createElement("input", {
    type: "radio",
    name: "food",
    value: "Salad",
    className: "buttonOptions",
  });

  const labelSalad = createElement("label", {
    textContent: "Salad",
  });

  // Wrap the radio buttons into div-element 'radioButtons'
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

  // Text field where to enter user’s name
  const inputName = createElement("input", {
    type: "text",
    placeholder: "Type your Name here",
    className: "inputName",
  });

  // Button to submit the information
  const buttonSubmit = createElement("input", {
    type: "submit",
    value: "Submit",
    className: "buttonSubmit",
  });

  // Creating form element where all consts come together
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
