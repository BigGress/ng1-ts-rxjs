import * as angular from 'angular';
import aboutComponent from './about.component.ts';

export let aboutModule = angular.module('about', [
  'ui.router'
])

aboutModule.config(($stateProvider:any) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>'
    });
})

.component('about', aboutComponent);
