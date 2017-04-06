
import style from './OrderEdit.css';

export default class OrderEdit {

	constructor(http,$scope) {
		this.http = http;
		this.$scope = $scope;
		this.$scope.style = style;
		this.$scope.lwhs = [{}];
	}

	addLwh(){
		var ss = {};
		this.$scope.lwhs.push(ss);
	}

	saveOrder(obj){
		if(obj.orderForm.$invalid){
			return;
		}
		this.http.post('orders/order',this.$scope.order)
		.then(data=>{
		}).catch(data=>{
			console.log(data);
			alert("订单创建失败");
		});
	}
}