
export default class FeedbackCtrl {
	constructor(pagination) {
		this.page = pagination.initPage();
		this.pagination = pagination;
		this.showPagebar = true;
		this.isLoading = false;
		this.search();
	}


	search(){
		this.isLoading = true;
		// this.feedbackService.getFeedbacks().then(reslut=>{
		// 	debugger
		// })
		var data = {"totalCount":"11","rows":[
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"},
				{"domain":"订单分库","systemName":"订单","product":"订单表数据量太大"}
		]}
		this.rowCollection = data.rows;
		this.pagination.setPage(this.page,data);
		this.page;
		this.isLoading = false;
	}

}