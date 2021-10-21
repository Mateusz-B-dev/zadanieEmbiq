// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  rapidHost: 'api-formula-1.p.rapidapi.com',
  rapidKey: 'f3ba240e7amsh666ebc124f6de2ep1f18c8jsn4f88d5230338',

  connectToServer(): string {
    return 'https://api-formula-1.p.rapidapi.com/';
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
