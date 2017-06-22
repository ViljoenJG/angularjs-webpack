import angular from 'angular';
import jquery from 'jquery';
import bootstrap from 'bootstrap';

import '../style/app.css';

import routing from './app.routing.js';
import { HomeCtrl } from './controllers';
import { HeaderComponent, AppComponent } from './components';

// Use variable for appName so it still works after minifying
const MODULE_NAME = 'app';

let app =  angular.module(MODULE_NAME, [
  require('angular-resource'),
  require('angular-animate'),
  require('angular-route')
])
.config(routing)
.controller('HomeCtrl', HomeCtrl)
.component('header', HeaderComponent)
.component('app', AppComponent);

module.exports = {
  app
}
