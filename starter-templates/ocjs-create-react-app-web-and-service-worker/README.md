# Create React App opencascade.js Template using web worker, service worker and typescript
- opencascade.js operations are running on a **service worker** to avoid blocking the UI while performing CAD operations.
- The **service worker** is used in **production only** to cache the application including the large wasm file of opencascade.js to speed up loading times when visiting the website a second time.

## Development

Use `npm start` to start the development mode. In this mode the service worker does not work and therefore opencascade.js takes longer to reload.

## Production
Use `npm run build` to create a production build `including the service worker`.
To test the service worker you can then serve the build. For example with `npx serve -s build`.
You will see on a second visit opencascade initializes faster.

## More on service worker
The service worker can have some weird behaviour. It does not update the service worker on its own once a new version of the service worker is used in production build. If you find a solution for this please contribute it to this template. 

To make sure the new service worker is used unregister the service worker from within the dev tools in the browser manualy and then reload the website.

If you want to **opt out of the service** worker go into `index.tsx` and change `serviceWorkerRegistration.register();` to `serviceWorkerRegistration.unregister();`.