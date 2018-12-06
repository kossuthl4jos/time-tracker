// Basic setup for all tests
import 'babel-polyfill';
import 'src/vue-setup';

// karma-webpack alternate usage
// require all modules ending in "test" from the
// current directory and all subdirectories
const testsContext = require.context('.', true, /[Tt]est$/);
testsContext.keys().forEach(testsContext);

// isparta-loader specific
// require all src files except main.js and index.html for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../src', true, /^\.\/(?!main(\.js)?|index\.html$)/);
srcContext.keys().forEach(srcContext);
