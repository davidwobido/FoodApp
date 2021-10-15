import { createTitleComponent } from "./lib/titleComponent.js";
import { createSelectionComponent } from "./lib/selectionComponent.js";
// import { createFooterComponent } from "./lib/";

function createApp() {
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();
  const selectionComponent = createSelectionComponent();
  //   const footerComponent = createFooterComponent();

  appElement.append(titleComponent);
  appElement.append(selectionComponent);
  //   appElement.append(footerComponent);
}
createApp();
