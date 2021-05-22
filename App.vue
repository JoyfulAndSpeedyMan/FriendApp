<script>
	import init from '@/init.js'
	export default {
		onLaunch: function() {
			console.log('App Launch start')
			init();
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
		}
	}
</script>
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	@import "@/colorui/main.css";
	@import "@/colorui/icon.css";
</style>
