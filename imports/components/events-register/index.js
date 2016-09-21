'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import eventsRegisterComponent from './events-register.component';

const eventsRegister = angular
  .module('eventsRegister', [
    uiRouter
  ])
  .component('eventsRegister', eventsRegisterComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('event', {
        url: '/evento',
        component: 'eventsRegister'
      });
  })
  .name;

export default eventsRegister;