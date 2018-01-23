// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD-jFzNI12wozQOIGMU4y1LhTKvhXc0Muo",
    authDomain: "pokedex-3dada.firebaseapp.com",
    databaseURL: "https://pokedex-3dada.firebaseio.com",
    projectId: "pokedex-3dada",
    storageBucket: "pokedex-3dada.appspot.com",
    messagingSenderId: "509458914462"
  }
};
