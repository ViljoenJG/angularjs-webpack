// Require modules for bundling with Webpack
require('jquery');
require('bootstrap');
import angular from 'angular';

import '../style/app.css';

import routing from './app.routing.js';
import controllers from './controllers';
import components from './components';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  require('angular-route'),
  require('angular-animate'),
  require('angular-resource')
])
.config(routing)
.controller('HomeCtrl', controllers.HomeCtrl)
.component('header', components.HeaderComponent)
.component('app', components.AppComponent);

export default MODULE_NAME;
