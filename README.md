# Welcome to NuxtPastebin

Small Pastebin app built with Nuxt and Vue.js
Written by Stepan Rutz.

This project includes: Server, Client and Databasecode. You must install Sqlite3 however.

## Preview

![preview](https://raw.githubusercontent.com/srutz/nuxtpastebin/main/public/pastebin.gif)


## Development


First time after cloning the repository, install the dependencies:
```sh
npm install  
```

Also install sqlite3 with your package manager. On Ubuntu, you can do this with:
```sh
sudo apt-get install sqlite3
```

On Mac, you can do this with:
```sh
brew install sqlite3
```

On Windows, you can download the installer from the official website: https://www.sqlite.org/download.html


Run the dev server:
```sh
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```


