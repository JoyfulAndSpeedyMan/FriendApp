let prefix = '/common'
let pinyin = prefix+'/pinyin';
export default {
	getSimplePinyin(content) {
		return global.$http.request({
			url: `${pinyin}/simple`,
			method: 'get',
			params:{
				content
			}
		});
	},
	getAllPinyin(content) {
		return global.$http.request({
			url: `${pinyin}/all`,
			method: 'get',
			params:{
				content
			}
		});
	},
	groupName(content) {
		return global.$http.request({
			url: `${pinyin}/groupName`,
			method: 'get',
			params:{
				content
			}
		});
	}

}
