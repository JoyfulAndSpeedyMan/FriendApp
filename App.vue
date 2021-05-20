<script>
	import auth from '@/common/utils/auth.js'
	export default {
		onLaunch: function() {
			this.checkLogin();
			console.log('App Launch')
		},
		onShow: function() {
			this.checkLogin();
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		data:{
			excludePaths: ['/pages/user/login/index','/pages/user/login/code'],
		},
		methods:{
			checkLogin(){
				if(!auth.isLogin()){
					let path = this.$route.path;
					for(let i in this.excludePaths){
						let ep = this.excludePaths[i];
						if(ep != path)
							this.login();
					}
				}
			},
			login(){
				auth.navLogin();
			}
		},
		watch: {
			$route(n,o){
				this.checkLogin();
			}
		}
	}
</script>
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
