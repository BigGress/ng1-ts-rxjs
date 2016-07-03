///<reference path="../../typings/index.d.ts"/>
import * as angular from "angular";
import {commonModule} from "./common/common.ts";
import {componentModule} from "./components/components.ts";
import AppComponent from "./app.component.ts";
import topController from "./app.controller.ts";
import "normalize.css";


angular.module("app", [
    "ui.router",
    commonModule.name,
    componentModule.name,
    "ngAnimate"
  ])
  .config(($locationProvider:any) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix("!");
  })
  .component("app", AppComponent)
    .controller("topCtrl",topController)
