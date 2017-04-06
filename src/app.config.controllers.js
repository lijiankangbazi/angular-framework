import header from './header';
import OrderEdit from './order/OrderEdit';
import demo from './demo/demo';

module.exports = angular.module('controllers', [])
   .controller('header', header)
   .controller('demo', demo)
   .controller('orderEdit', OrderEdit)
   .name;
