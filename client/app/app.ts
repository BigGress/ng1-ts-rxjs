///<reference path="../../typings/index.d.ts"/>

import * as angular from "angular";
import {commonModule} from "./common/common.ts";
import { aboutModule } from "./about/about";
import { homeModule } from "./home/home";
import AppComponent from "./app.component.ts";
import topController from "./app.controller.ts";
import "normalize.css";


angular.module("app", [
    "ngAnimate",
    "ui.router",
    commonModule.name,
    aboutModule.name,
    homeModule.name,
  ])
  .config(($locationProvider:any) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix("!");
  })
  .component("app", AppComponent)
    .controller("topCtrl",topController)
