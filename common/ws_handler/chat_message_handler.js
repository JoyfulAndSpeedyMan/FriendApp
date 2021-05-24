import store from '@/store/index.js'
export default {
	hand(data){
		let msg = JSON.parse(data.content);
		let msgId = data.msgId;
		store.commit('chat/updateChatMsg', {msgId,msg})
	},
	receiveChatMsg(data){
		let id = data.extend;
		let msg = JSON.parse(data.content);
		store.dispatch('chat/addMsgAction', {id,msg})
	}
}