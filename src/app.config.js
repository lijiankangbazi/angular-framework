import routing from './app.routes';
import uirouter from 'angular-ui-router';
import controllers from './app.controllers';

/*Paging component*/
import pagination from './api/pagination';
/* Global constant */
import constant from './api/constant';

import http from './api/http';

module.exports = angular.module('app', [
  uirouter,
  controllers,
  constant
])
.config(routing)
.factory('pagination', pagination)
.factory('http', http);
