// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace the data below with your personal data
  personal: {
    name: "Dmytro Zeleniuk",
    birth: "1993-11-02",
    email: "dimaszelenyuk@gmail.com",
    phone: "+1 (201) 673 1891",
    location: "Garfield, NJ, USA"
  },
  // replace the dummy data below with the real firebase configs
  firebaseConfig: {
    // apiKey: "AIzaSyC2frVRAAltsVTmdwgFnATGHoVUzNHfzsM",
    // authDomain: "live-resume-a575a.firebaseapp.com",
    // databaseURL: "https://live-resume-a575a.firebaseio.com",
    // projectId: "live-resume-a575a",
    // storageBucket: "live-resume-a575a.appspot.com",
    // messagingSenderId: "681076751855",
    // appId: "1:681076751855:web:18bae3866ebfcc4fcd8a1a",
    // measurementId: "G-00VXD77WNG",
    apiKey: "AIzaSyCxCXnQ3u5zDK3cBzCJOdQQ1YVv6fduM8s",
    databaseURL: "https://web-resume-816b8-default-rtdb.firebaseio.com",
    authDomain: "web-resume-816b8.firebaseapp.com",
    projectId: "web-resume-816b8",
    storageBucket: "web-resume-816b8.appspot.com",
    messagingSenderId: "842183180481",
    appId: "1:842183180481:web:bc7ce6d29e51079cc7d440",
    measurementId: "G-6N27P22FZB"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
