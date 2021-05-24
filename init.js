import store from '@/store/index.js'
import auth from '@/common/utils/auth.js'
import ws from './ws/web-socket.js'
let init = () => {
	if(auth.checkLogin()){
		store.dispatch('init')
		ws.connect()
	}
}
export default init;
