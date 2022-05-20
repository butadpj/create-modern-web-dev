# Create Modern Web Dev

Setup lightweight modern web app development with no configuration

If something doesn’t work, please [file an issue](https://github.com/butadpj/create-modern-web-dev/issues/new)

## Quick Overview

```sh
npx create-modern-web-dev my-app-name
cd my-app-name
npm start
```

**Then go to http://localhost:3005/ to open your app.**

**When you’re ready to deploy to production, create a minified bundle with `npm run build`.**

---

### Folder structure

After creation, your project should look like this:

```
my-app-name/
  node_modules/
  pages/
    index.html
  public/
    styles/
      globals.css
    favicon.ico
    ...
  scripts/
    index/
      main.js
    modules/
      showAlert.js
  package.lock.json
  package.json
  README.md
```

- #### Directories explanation

- `pages/` is where you put your html pages
- `public/` - is where you put static files like CSS styles, files like images, favicon, manifesfilet, etc. and other assets
- `scripts/[html-file-name]/main.js` is where you put html page's corresponding script.

  - Let's say you add a new page in **/pages** called `about.html`
  - Linking javascript file to that page is simply creating `about/main.js` inside the **/script** directory

- `scripts/modules/` - is where you put reusable javascript modules

#### How I worked on this project

My goal was to generate a multi-page web app boilerplate like create-react-app

- Created a utility package that will be used in webpack configuration: [modern-web-dev-utils](https://www.npmjs.com/package/modern-web-dev-utils)

- Created another package to contain webpack configuration and package.json scripts [modern-web-dev-scripts](https://www.npmjs.com/package/modern-web-dev-scripts)

- I used git tags and Pull Requests: [Example PR](https://github.com/butadpj/create-modern-web-dev/pulls?q=is%3Apr+is%3Aclosed)
