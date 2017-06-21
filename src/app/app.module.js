import angular from 'angular';
import jquery from 'jquery';
import bootstrap from 'bootstrap';

import '../style/app.css';
import header from './components/header.js';
import app from './app.js';

const MODULE_NAME = 'app'

angular.module(MODULE_NAME, [])
  .directive('app', app.AppDirective)
  .controller('AppCtrl', app.AppCtrl)
  .directive('header', header.HeaderDirective)
  .controller('HeaderController', header.HeaderController);

export default MODULE_NAME;
