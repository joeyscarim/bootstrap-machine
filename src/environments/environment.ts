// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
     apiKey: "AIzaSyDURLn-II17DztsSM-Ilvg63JAt8OozIxM",
    authDomain: "bootstrap-machine.firebaseapp.com",
    databaseURL: "https://bootstrap-machine.firebaseio.com",
    projectId: "bootstrap-machine",
    storageBucket: "bootstrap-machine.appspot.com",
    messagingSenderId: "252376714310"
  }
};