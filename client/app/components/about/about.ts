
import * as angular from 'angular';
import aboutComponent from './about.component.ts';

let aboutModule = angular.module('about', [
  'ui.router'
])

.config(($stateProvider:any) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>'
    });
})

.component('about', aboutComponent);

export default aboutModule;
