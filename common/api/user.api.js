let prefix='/user/'
const install = (Vue, vm) => {

	let sendLoginCode= (phone)=>vm.$u.get(prefix+'sendLoginCode',{phone})
	let login= (phone,code)=>vm.$u.put(prefix+'login',{phone,code})
	
	let getAllUser= ()=>vm.$u.get(prefix+'all')
	let getBaseInfo= ()=>vm.$u.get(prefix+'baseInfo')
	
	
	
	let fPrefix=prefix+'friend/'
	let addFriend= (params={})=>vm.$u.put(fPrefix+'request',params)
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api.user = {
		sendLoginCode,
		login,
		getAllUser,
		getBaseInfo,
		
		addFriend};
}

export default {
	install
}