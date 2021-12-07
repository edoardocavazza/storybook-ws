import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ds1',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
