import { addParameters } from "@storybook/react";
import { setConsoleOptions } from "@storybook/addon-console";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

setConsoleOptions({
  panelExclude: [],
});

addParameters({
  viewport: {
    //viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: "someDefault",
  },
});
