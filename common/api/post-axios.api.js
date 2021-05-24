let prefix = '/post'
export default {
	post(content) {
		return global.$http.request({
			url: `${prefix}`,
			method: 'put',
			data: {
				content
			}
		});
	},
	findMyPost(page,size){
		return global.$http.request({
			url: `${prefix}/user`,
			method: 'get',
			params:{
				page,
				size
			}
		});
	}
}
