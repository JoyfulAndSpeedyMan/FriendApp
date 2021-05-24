let prefix = '/user'
export default {
	getBaseInfo2(fid) {
		return global.$http.request({
			url: `${prefix}/baseInfo2`,
			method: 'get',
			params:{
				fid
			},
		});
	},
	getBaseInfo() {
		return global.$http.request({
			url: `${prefix}/baseInfo`,
			method: 'get',
		});
	},
	updateInfo(user){
		return global.$http.request({
			url: `${prefix}`,
			method: 'put',
			data: user
		});
	}

}
