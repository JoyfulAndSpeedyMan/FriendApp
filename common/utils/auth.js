import stringUtils from '@/common/utils/StringUtils.js'
export default {
	isLogin(){
		let token=uni.getStorageSync('token');
		token=token.accessToken;
		return stringUtils.hashText(token);
	},
	getAccessToken(){
		let token=uni.getStorageSync('token');
		token=token.accessToken;
		return token;
	},
	navLogin(){
		console.log('navLogin')
		uni.navigateTo({
			url:'/pages/user/login/index'
		})
	},
	logout(){
		uni.removeStorageSync('token');
		uni.navigateTo({
			url:'/pages/user/login/index'
		})
	}
}