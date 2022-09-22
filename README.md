
# Chrome Extension boilerplate

A boiler plate, also known as Boilerplate code, is the part of code that has to be repeatedly in use with no or a little modification. Programmers that use boilerplate code can reuse it between projects without getting them changed.

Over time, I built several chrome extensions and ended up doing the same setup each time. The goal of this project is to save you time in case you're trying to build a chrome extension from the ground up. Hope you enjoy it.

## Setup

```sh
npm install
```

## Build
To generate the code with all the files needed just run:

```sh
npm run build
```

This will generate a `/build` folder, containing the chrome extension's code to be loaded in the browser.

## Compress
To generate a zip file with the chorme extension files, just run:

```sh
npm run zip
```

This will re-build the code and create the distribution folder. The `/dist` folder, will contain a zipfile with the generated code.

## Development

While updating or adding changes to this extensions, just run:

```sh
npm start
```

This will watch the `/app` folder for changes, and each time you change a file, it'll do an `npm run build` to reflect the changes in the build folder. You'll need to have Chrome pointing to this directory in order to see the changes reflected in the browser.

## Install Extension

1. Clone this repo to your own computer.

2. Open the terminal, go to the repo folder, and type `npm install`.

3. Once you installed all the dependencies, you'll need to build the extension by doing `npm run build`.

4. Now that you have the chrome extension built, open Google Chrome. and navigate to **chrome://extensions**

5. Enable the 'Developer mode'.

6. Click “Load Unpacked Extension” button.

7. Navigate to the local folder where you have this project, and point to the `/build` folder, which contains the generated extension’s code and click OK.

8. DONE! The extension is now available to use.

Enjoy it.
