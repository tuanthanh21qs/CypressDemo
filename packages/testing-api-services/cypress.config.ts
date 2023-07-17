import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

import * as webpackPreprocessor from '@cypress/webpack-preprocessor';
const preprocessor = require('@cypress/webpack-preprocessor');
import * as path from 'path';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    setupNodeEvents(on, config) {
      on(
        'file:preprocessor',
        preprocessor({
          webpackOptions: {
            mode: 'development',
            devtool: 'eval-source-map',
            // webpack will transpile TS and JS files
            resolve: {
              extensions: ['.ts', '.js', '.d.ts'],
              alias: {
                '@api': path.resolve(__dirname, '../../api'),
                '@src': path.resolve(__dirname, './src'),
                '@demen/e2e-core': path.resolve(
                  __dirname,
                  '../e2e-core/src/index.ts'
                ),
              },
            },
            module: {
              rules: [
                {
                  // every time webpack sees a TS file (except for node_modules)
                  // webpack will use "ts-loader" to transpile it to JavaScript
                  test: /\.ts$/,
                  exclude: [/node_modules/],
                  use: [
                    {
                      loader: 'ts-loader',
                      options: {
                        // skip typechecking for speed
                        transpileOnly: true,
                      },
                    },
                  ],
                },
              ],
            },
          },
        })
      );
    },
  },
  env: {
    BASE_API_URL: 'https://api-istio.socidemy.com/',
    // https://api-dev.socidemy.com
    // https://api-istio.socidemy.com/
  },
});
