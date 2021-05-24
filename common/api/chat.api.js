let prefix = '/chat'
let session = prefix+'/session';
let message = prefix+'/message';
let uc = prefix+'/uc'
export default {
	getAllSession() {
		return global.$http.request({
			url: `${session}`,
			method: 'get'
		});
	},
	loadMoreMessage(sessionId,skip,size){
		return global.$http.request({
			url: `${message}`,
			method: 'get',
			params:{
				sessionId,
				skip,
				size
			}
		});
	},
	cleanUnread(id){
		return global.$http.request({
			url: `${uc}/cleanUnread`,
			method: 'put',
			data:{
				id
			}
		});
	}

}
