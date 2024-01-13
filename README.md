# Next.js + Playwright

This example shows how to configure Playwright to work with Next.js.

## Generate Coverage Report
```sh
npm i
npm run test
```
Coverage report will be found here: test-results/coverage/index.html

## Tips
- change devtool to `source-map` in development, see [next.config.js](next.config.js)
- run `next dev` with env `NODE_V8_COVERAGE=.v8-coverage` and `NODE_OPTIONS=--inspect`
- take client side coverage with [e2e/fixtures.js](e2e/fixtures.js)
- take server side coverage manually with CDP, see [global-teardown.js](global-teardown.js)