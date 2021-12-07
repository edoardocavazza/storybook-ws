import { setCustomElements } from '@storybook/web-components';
import { defineCustomElements } from '../loader/index.js';
import json from '../custom-elements.json';

defineCustomElements();
setCustomElements(json.components);

const tokenContext = require.context(
  '!!raw-loader!../src',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  designToken: {
    files: tokenFiles
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
