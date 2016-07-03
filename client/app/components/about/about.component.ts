///<reference path="../../../../typings/index.d.ts"/>
import controller from './about.controller.ts';

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template:require('./about.html'),
  controller
};

export default aboutComponent;
