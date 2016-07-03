import * as angular from 'angular';
import homeComponent from './home.component.ts';

let homeModule = angular.module('home', [
  'ui.router'
])

.config(($stateProvider:any, $urlRouterProvider:any) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

.component('home', homeComponent);

export default homeModule;
