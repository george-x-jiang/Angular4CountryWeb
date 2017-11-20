# Angular4Country

This is a small Angular 4 SPA developed with Angular CLI, and configured to run on .NET Core. The type-ahead tab demonstrates the use of switchMap operator to make multiple http requests as a Rxjs observable stream.

## Development server

Run `npm start` to start the Angular CLI (Webpack) dev server. Navigate to `http://localhost:4200/`. The app will automatically reload
if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `wwwroot/` directory. Use the `-prod` flag
for a production build.

## Running .NET Core

Run `dotnet run` to serve the built Angular app (with `ng build`) from .NET Core

## Running e2e tests

Run `ng e2e --no-serve` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `dotnet run`.
