Installation instructions
=========================
Do the following command in the desktop's project directory
```
yarn install
```

## Env config
To enable [Sentry](https://sentry.io), you need to create a file `.env` or `.env.development` with the following variable:
```
REACT_APP_SENTRY_DSN=your_sentry_dsn
```

You'll need to indicate the API url with the following variable:
```
REACT_APP_BACKEND_URL=your_api_url
```

Starting the app
=================
To start Electron & React do the following command
```
yarn start
```

## React standalone
You can only start react by using this command
```
yarn react-start
```

Building the app
================
If you want to build the app you can do this command
```
yarn build
```

Testing the app
===============
To run the cypress tests do the following command
```
yarn cypress-test
```
