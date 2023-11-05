```sh

gh repo clone https://github.com/kfarkasHU/lazy-peon
yarn
cd app # not neccessary
yarn start 
# open localhost:4200
# feel the power of peons

```

structure
* `/app` - an angular app to do the business
* `/packages/framework.types` same as `@wraithlight/core.nullable` but without tests, utils (`isNil()`), different (dumb) build process, and ofc with different name. [ref](https://github.com/wraithlight/wraithlight-mono/tree/main/applications/packages/core/core.nullable)
* `/packages/core.http` dumb version `@wraithlight/core.http.evo` (not public yet) - does agnostic http communication magic over http1.1
* `/packages/common.hackernews.sdk` - communicates with HNAPI in a very straightforward way - would be better to use `rxjs` properly with observale concatenations to make the UX moar fluent

would be awesome to do task
* [ ] add `knip`
* [ ] buy me a beer
* [ ] add `jest` to do unit tests
* [ ] write tests for angular
* [ ] design a better CD to GHP
* [ ] freeze lockfile
* [ ] configure lerna (nx) better
* [ ] add a properly configured linter
* [ ] configure prettier
* [ ] configure launchjson for jest
* [ ] add husky
* [x] add root level scripts
