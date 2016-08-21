'use strict';

import angular from 'angular';
import navbarComponent from './navbar.component';
import ngMaterial from 'angular-material';

const name = 'navbar';

const navbarModule = angular.module(name, [
  ngMaterial
])

.component(name, navbarComponent);

export default navbarModule;
