
routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');

   $stateProvider
	  .state('header', {
	      url: '/header',
	      controller: 'header',
	      controllerAs: 'model'
	   }).state('orderedit', {
	      url: '/orderedit',
	      template: require('./modules/order/orderEdit.html'),
	      controller: 'orderEdit',
	      controllerAs: 'model'
	   }).state('demo', {
        url: '/demo',
        template: require('./modules/demo/demo.html'),
        controller: 'demo',
        controllerAs: 'model'
     }).state('user', {
        url: '/user',
        template: require('./modules/system/user.html'),
        controller: 'user',
        controllerAs: 'model'
     });
}
