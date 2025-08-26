/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    blockList: exclusionList([
      /.*\.cxx.*/,              // ignore CMake .cxx temp files
      /.*\/android\/build\/.*/, // ignore android build outputs
      /.*\/ios\/build\/.*/,     // ignore ios build outputs
      /.*\/\.gradle\/.*/,       // ignore gradle cache
      /.*\/\.idea\/.*/,         // ignore IDE project files
    ]),
  },
};
