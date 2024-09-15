# Next.js + Playwright

This example shows how to configure Playwright to work with Next.js.

## Generate Coverage Report
```sh
npm i
npm run test

[MCR] Next.js V8 Coverage Report
┌────────────────┬──────────┬────────────┬──────────┬───────────┬──────────┬─────────────────┐
│ Name           │    Bytes │ Statements │ Branches │ Functions │    Lines │ Uncovered Lines │
├────────────────┼──────────┼────────────┼──────────┼───────────┼──────────┼─────────────────┤
│ src/app        │          │            │          │           │          │                 │
│ ├ about        │          │            │          │           │          │                 │
│ │ ├ actions.ts │  95.11 % │    87.50 % │  50.00 % │  100.00 % │  91.67 % │ 8               │
│ │ └ page.tsx   │ 100.00 % │   100.00 % │          │  100.00 % │ 100.00 % │                 │
│ ├ counter.tsx  │  86.80 % │    81.82 % │  66.67 % │  100.00 % │  73.91 % │ 12-17           │
│ ├ layout.tsx   │ 100.00 % │   100.00 % │          │  100.00 % │ 100.00 % │                 │
│ └ page.tsx     │ 100.00 % │   100.00 % │          │  100.00 % │ 100.00 % │                 │
├────────────────┼──────────┼────────────┼──────────┼───────────┼──────────┼─────────────────┤
│ Summary        │  94.68 % │    88.46 % │  62.50 % │  100.00 % │  90.79 % │                 │
└────────────────┴──────────┴────────────┴──────────┴───────────┴──────────┴─────────────────┘
```
HTML coverage report will be found here: `monocart-report/coverage/index.html`

## Tips
- change devtool to `source-map` in development, see [next.config.js](next.config.js)
- run `next dev` with env `NODE_V8_COVERAGE=.v8-coverage` and `NODE_OPTIONS=--inspect=9229`
- take client side coverage with [e2e/fixtures.js](e2e/fixtures.js)
- take server side coverage manually with CDP, see [global-teardown.js](global-teardown.js)

### Debugging port
The debugging port is `9229` by default
```sh
"scripts": {
    "test:start": "cross-env NODE_V8_COVERAGE=.v8-coverage NODE_OPTIONS=--inspect=9229 next dev",
}
```
But we should use `9230` (9229 + 1) as the CDP port base on the following prompt:
```sh
[WebServer] Debugger listening on ws://127.0.0.1:9229/07ad38a2-2d5a-48df-a4de-07010e2d9b18
For help, see: https://nodejs.org/en/docs/inspector
[WebServer] Debugger listening on ws://127.0.0.1:9230/a3a46ea2-6994-43f2-b6a6-e5834362da4c
For help, see: https://nodejs.org/en/docs/inspector
[WebServer]    the --inspect option was detected, the Next.js router server should be inspected at port 9230.
[WebServer]    ▲ Next.js 14.1.0
[WebServer]    - Local:        http://localhost:3000
```
see [global-teardown.js](global-teardown.js)
```js
const client = await CDP({
    port: 9230
});
```
If you are using a different port like `8112`, then the CDP port should be `8113` (8112 + 1).

## If you want to use `Istanbul`, please refer to:
- [nextjs-with-playwright-istanbul](https://github.com/cenfun/nextjs-with-playwright-istanbul)