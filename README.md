# Create Modern Web Dev

Setup lightweight modern web app development with no configuration

If something doesn’t work, please [file an issue](https://github.com/butadpj/create-modern-web-dev/issues/new)

## Quick Overview

```sh
npx create-modern-web-dev my-app-name
cd my-app-name
npm start
```

**Then go to http://localhost:3000/ to open your app.**

**When you’re ready to deploy to production, create a minified bundle with `npm run build`.**

---

#### How I worked on this project

My goal was to generate a multi-page web app boilerplate like create-react-app

- I created a utility package that will be used in webpack configuration: [modern-web-dev-utils](https://github.com/butadpj/modern-web-dev-utils)

- I used git tags and Pull Requests: [Example PR](https://github.com/butadpj/create-modern-web-dev/pulls?q=is%3Apr+is%3Aclosed)
