import stringUtils from '@/common/utils/StringUtils.js'
import store from '@/store/index.js'
export default {
	isLogin() {
		let token = uni.getStorageSync('token');
		token = token.accessToken;
		return stringUtils.hashText(token);
	},
	getAccessToken() {
		let token = uni.getStorageSync('token');
		token = token.accessToken;
		return token;
	},
	isExcludePath() {
		let isExclude = false;
		let cps = getCurrentPages();
		let path = cps[cps.length - 1].route;
		let eps = store.state.excludeLoginPaths;
		for (let i in eps) {
			let ep = eps[i];
			if (ep == path) {
				isExclude = true;
				break;
			}
		}
		return isExclude;
	},
	checkLogin() {
		if (this.isLogin()) {
			return true;
		} else {
			if (getCurrentPages().length == 0) {
				this.navLogin();
				return false;
			}
			if (!this.isExcludePath())
				this.navLogin();
		}
	},
	navLogin() {
		console.log('navLogin')
		uni.navigateTo({
			url: '/pages/user/login/index'
		})
	},
	logout() {
		uni.removeStorageSync('token');
		uni.navigateTo({
			url: '/pages/user/login/index'
		})
	},
}
