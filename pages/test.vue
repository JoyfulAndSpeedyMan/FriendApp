<template>
	<view>
		<u-button @click="click()">获取</u-button>
	</view>
</template>

<script>
	export default {
		methods: {
			click(){
				this.$u.api.user.addFriend({
					friendId:"5ff2aecdcfb6de362b2296bb",
					content:"uni-app测试"
				})
				.then(res=>{
					console.log(res);
				})
			},
			fetch(){
				
			}
		}
	}
</script>

<style>
</style>
