<template>
	<view>
<!-- 		<u-cell-group>
			<u-cell-item  title="退出登录" :arrow="false" :center="true" ></u-cell-item>
		</u-cell-group> -->
		<u-button :custom-style="buttonClass" @click="logout">退出登录</u-button>
	</view>
</template>

<script>
	import auth from '@/common/utils/auth.js'
	export default {
		data() {
			return {
				buttonClass:{
					'margin-top': '10rpx',
					'border-radius': '0px'
				}
			}
		},
		methods: {
			logout(){
				auth.logout();
			}
		}
	}
</script>

<style>
.c{
	
}
</style>
