import handler from '@/ws/handler.js'
import ReqOps from './ReqOps.js'
import auth from '../utils/auth.js'
export default {
	ping(msg) {
		handler.send({
			ops: ReqOps.PING,
			msg: msg
		})
	},
	login() {
		handler.send({
			ops: ReqOps.LOGIN,
			content: auth.getAccessToken()
		})
	},
	logout() {
		handler.send({
			ops: ReqOps.LOGOUT
		})
	},
	sendChatMsg(friendId, content) {
		handler.send({
			ops: ReqOps.SEND_CHAT_MSG,
			content: content,
			target: friendId
		})
	}
}
