http.$inject = ['$state','CONSTANTS'];

export default function http($state,CONSTANTS) {
  return {
	  get(url, data) {
	    return this.request(url, data, 'GET');
		},
		post(url, data) {
			return this.request(url, JSON.stringify(data), 'POST');
		},
		put(url, data) {
	    return this.request(url, data, 'PUT');
		},
	  delete(url, data) {
	    return this.request(url, data, 'DELETE');
	  },
	  request(url, data, method) {
	    return new Promise((resolve, reject) => {
	      $.ajax({
	        url: CONSTANTS.baseUrl + url,
	        method: method,
	        contentType:'application/json',
	        data: data ? data : {},
	        cache: false,
	      }).done(resp => {
	        resolve(typeof(resp) === 'string' ? JSON.parse(resp) : resp);
	      }).fail(response => {
	      	if(response.status == '403'){
	      		//$state.go('abd',{});
	      		alert(403);
	      	}
	        reject(typeof(response) === 'string' ? JSON.parse(response) : response);
	      }).always(() => {

	      });
	    });
	  }
  }


}
