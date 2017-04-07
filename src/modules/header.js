// import $ from 'jquery';
import style from './header.css';
export default class HeaderController {
	
	constructor($scope) {
    $scope.style = style;
		this.test = "test1";
    this.style = style;
	}


}


// HeaderController.$inject = ['$scope'];
// export default function HeaderController($scope) {
// 		$scope.header = "323";
// }
