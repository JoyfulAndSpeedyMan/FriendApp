<script>
	import auth from '@/common/utils/auth.js'
	export default {
		onLaunch: function() {
			console.log('App Launch start')
			if(this.checkLogin()){
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App start')
			this.checkLogin();
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			checkLogin(){
				if(this.$store.state.isLoginNaving){
					return false;
				}
				if(auth.isLogin()){
					return true;
				}
				else{
					let isNav = true;
					let path = this.$route.path;
					let eps = this.$store.state.excludeLoginPaths;
					for(let i in eps){
						let ep = eps[i];
						// console.log('ep != path')
						// console.log(ep == path)
						if(ep == path){
							isNav = false;
							break;
						}
					}
					if(isNav)
						this.login();
				}
			},
			login(){
				this.$store.commit('loginNav')
				auth.navLogin();
				this.$store.commit('endNav')
			}
		},
		watch: {
			$route(n,o){
				// console.log('$route start' )
				if(o.path == n.path)
					return;
				this.checkLogin();
				// console.log('$route end' )
			}
		}
	}
</script>
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
