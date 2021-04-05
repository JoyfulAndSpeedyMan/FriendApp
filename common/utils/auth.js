import stringUtils from '@/common/utils/StringUtils.js'
export default {
	isLogin(){
		let token=uni.getStorageSync('token');
		return stringUtils.hashText(token);
	}
}