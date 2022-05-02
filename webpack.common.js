import path from 'path';
import fs from 'fs';
import {
  getPageTemplatesChunkEntryPoints,
  getPagesTemplateWithChunk,
  htmlWebpackPluginTemplates,
  createPageTemplates,
  getScriptFoldersIn,
  getPageNamesIn,
} from 'modern-web-dev-utils';

import CopyWebpackPlugin from 'copy-webpack-plugin';

const __dirname = path.resolve();

export default {
  entry: getPageTemplatesChunkEntryPoints(
    getPagesTemplateWithChunk('./pages', './script'),
    './script',
  ),
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'js/[name].js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: './public' }],
    }),
    ...htmlWebpackPluginTemplates(
      createPageTemplates(
        getPageNamesIn('./pages'),
        getScriptFoldersIn('./script'),
      ),
    ),
  ],
};
