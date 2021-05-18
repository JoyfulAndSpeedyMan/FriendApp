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
	}
}