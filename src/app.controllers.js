import header from './modules/header';
//系统管理模块controllers
import systemcontrollers from './modules/system/index';
//订单模块controllers
import orderControllers from './modules/order/index';

import demo from './modules/demo/demo';


module.exports = angular.module('controllers', [systemcontrollers,orderControllers])
   .controller('header', header)
   .controller('demo', demo)
   .name;