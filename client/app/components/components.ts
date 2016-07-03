///<reference path="../../../typings/index.d.ts"/>
import * as angular from 'angular';
import Home from './home/home.ts';
import About from './about/about.ts';


export let componentModule = angular.module('app.components', [
  Home.name,
  About.name
]);
