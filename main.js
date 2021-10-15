import { createTitleComponent } from "./lib/";
import { createSelectionComponent } from "./lib/";
import { createFooterComponent } from "./lib/";

function createApp() {
  const titleComponent = createTitleComponent();
  const selectionComponent = createSelectionComponent();
  const footerComponent = createFooterComponent();

  appElement.append(titleComponent);
  appElement.append(selectionComponent);
  appElement.append(footerComponent);
}
createApp();
