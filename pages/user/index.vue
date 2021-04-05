<template>
	<view>
		<view class="top"></view>
		<view class="base-info">
			<view v-if="user">
				<text class="name">{{user.nickname}}</text>
				<u-avatar :src="user.avatar" size="large"></u-avatar>
			</view>
			<view v-else>
				<navigator url="login/index" open-type="navigate" class="name">登录</navigator>
			</view>
		</view>
		<u-line></u-line>
	</view>
</template>

<script>
	import auth from '@/common/utils/auth.js'
	export default {
		data() {
			return {
				user: null
			}
		},
		onLoad() {
			console.log("load user/index")
			if (auth.isLogin()) 
				this.fetchUserInfo();
		},
		methods: {
			fetchUserInfo() {
				this.$u.api.user.getBaseInfo()
					.then(res => {
						this.user = res.data;
						console.log(res);
					})
			}
		}
	}
</script>

<style lang="scss">
	.top {
		height: 5vh;
		// background-color: #8f9130;
	}

	.base-info {
		height: 25vh;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		.name {
			font-size: 1.7em;
			color: #9384c6;
		}
	}
</style>
