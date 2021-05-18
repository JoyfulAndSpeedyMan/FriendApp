<template>
	<view>
		<!-- <view class="top"></view> -->
		<!-- <view class="base-info"> -->
		<view>
			<view v-if="user">
				<u-navbar :is-back="false" title="　" :border-bottom="false">
					<view class="u-flex u-row-right" style="width: 100%;">
						<view class="camera u-flex u-row-center">
							<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
						</view>
					</view>
				</u-navbar>
				<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
					<view class="u-m-r-10">
						<u-avatar :src="user.avatar" size="140"></u-avatar>
					</view>
					<view class="u-flex-1">
						<view class="u-font-18 u-p-b-20">{{ user.nickname }}</view>
						<view class="u-font-14 u-tips-color">用户ID: {{ user.phone }}</view>
					</view>
					<view class="u-m-l-10 u-p-10">
						<u-icon name="scan" color="#969799" size="28"></u-icon>
					</view>
					<view class="u-m-l-10 u-p-10">
						<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
					</view>
				</view>

				<view class="u-m-t-20">
					<u-cell-group>
						<u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
					</u-cell-group>
				</view>

				<view class="u-m-t-20">
					<u-cell-group>
						<u-cell-item icon="star" title="收藏"></u-cell-item>
						<u-cell-item icon="photo" title="相册"></u-cell-item>
						<u-cell-item icon="coupon" title="卡券"></u-cell-item>
						<u-cell-item icon="heart" title="关注"></u-cell-item>
					</u-cell-group>
				</view>

				<view class="u-m-t-20">
					<u-cell-group>
						<u-cell-item icon="setting" title="设置"></u-cell-item>
					</u-cell-group>
				</view>
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
			console.log('isLogin')
			console.log(auth.isLogin())
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
