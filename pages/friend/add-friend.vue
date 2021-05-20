<template>
	<view>
		<u-toast ref="uToast"></u-toast>
		<view class="search-line">
			<u-search v-model="value" @search="search" @custom="search" shape="round" :clearabled="true"
				:show-action="true" placeholder="请输入手机号码" @clear="clear"></u-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				shape: 'round',
				clearabled: true,
				showAction: true,
				inputAlign: 'left'
			}
		},
		watch: {},
		methods: {
			search(phone) {
				if (this.$u.test.mobile(phone)) {
					this.$u.api.friend.findUserByPhone(phone)
						.then(res => {
							if (res.code === '00000') {
								uni.navigateTo({
									url:'./add-friend-detail'+ this.$u.queryParams(res.data)
								})
							}
							else{
								this.$refs.uToast.show({
									title: res.message,
									type: 'warning'
								})
							}
						})
				} else {
					this.$refs.uToast.show({
						title: '手机号码有误',
						type: 'warning'
					})
				}
			},

		}
	}
</script>

<style lang="scss" scoped>
	.search-line {
		padding: 40rpx;
	}
</style>
