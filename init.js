import store from '@/store/index.js'
import auth from '@/common/utils/auth.js'
let init = () => {
	if(auth.checkLogin()){
		store.dispatch('init')
	}
}
export default init;
