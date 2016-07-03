///<reference path="../../../../typings/index.d.ts"/>
import controller from './home.controller.ts';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template:require('./home.html'),
  controller
};

export default homeComponent;
