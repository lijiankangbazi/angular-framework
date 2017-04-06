
dictTableCtrl.$inject = ['$state','$stateParams','$scope'];

export default function dictTableCtrl($state,$stateParams,$scope) {
	$scope.domainName = $stateParams.domainName;
	
	$scope.gridOptions = {
		paginationPageSizes: [10,15,20],
		data:[],
		columnDefs:[
			{ name: 'nameCn', displayName:'中文名',enableCellEdit: false,cellClass:"text-center",headerCellClass:"text-center"},
			{ name: 'name', displayName:'英文名',enableCellEdit: false,cellClass:"text-center",headerCellClass:"text-center"},
    		{ name: 'comment', displayName: '描述',cellClass:"text-center",headerCellClass:"text-center"},
    		{ name: 'schemaName', displayName: '所属库',enableCellEdit: false,cellClass:"text-center",headerCellClass:"text-center"},
    		{ name: 'domainName', displayName: '所属域',enableCellEdit: false,cellClass:"text-center",headerCellClass:"text-center"},
    		{ name: 'columnNum', displayName: '列数',enableCellEdit: false,cellClass:"text-center",headerCellClass:"text-center"},
    		{ name: 'updateUser', displayName: '同步人',enableCellEdit: false,cellClass:"text-center",headerCellClass:"text-center"},
    		{ name: 'updateTime', displayName: '同步时间',enableCellEdit: false,cellClass:"text-center",headerCellClass:"text-center"},
    		{ name: 'ss',displayName: '操作',enableCellEdit: false,width:'30%',cellClass:"text-center",headerCellClass:"text-center",
    			cellTemplate :"<a class='check-field' href='javascript:void(0)'>查看字段<a/>"+
    			 " <a href='javascript:void(0)'>查看脚本</a>"+
    			 " <a href='javascript:void(0)'>查看描述</a>"+
    			 " <a class='check-ddl' href='javascript:void(0)'>查看DDL变更</a>" +
    			 " <a class='check-feedback' href='javascript:void(0)'>意见反馈</a>" +
    			 " <a href='javascript:void(0)'>订阅变更</a>"+
    			 " <a href='javascript:void(0)'>取消订阅</a>"
    		}
		]
	};
	$scope.search = function(){
		var data = [
			{name:"order.vip.com",comment:"升级",nameCn:"订单",columnNum:2},
			{name:"order.vip.com",comment:"升级",nameCn:"订单",columnNum:2},
			{name:"order.vip.com",comment:"升级",nameCn:"订单",columnNum:2},
			{name:"order.vip.com",comment:"升级",nameCn:"订单",columnNum:2},
			{name:"order.vip.com",comment:"升级",nameCn:"订单",columnNum:2},
			{name:"order.vip.com",comment:"升级",nameCn:"订单",columnNum:2},
			{name:"order.vip.com",comment:"升级",nameCn:"订单",columnNum:2}
		];
		$scope.gridOptions.data = data;
		// dictService.getDomains().then(reslut=>{
			
		// });
	}

 	$scope.search();

 	$(document).on('click','.check-ddl',function(){
		$state.go('alter',{});
	});

 	$(document).on('click','.check-field',function(){
		$state.go('dict.dictfield',{});
	});

	$(document).on('click','.check-table',function(){
		$state.go('dict.dicttable',{});
	});

	$(document).on('click','.check-feedback',function(){
		$state.go('feedback',{});
	});


}