<template>
	<view>
		<u-navbar :is-back="true" :title-color="'#303133'" :title-size="'1.4em'" :title-bold="true"
			:background="background" :border-bottom="false">
			<view slot="right" class="right-dot">
				<u-icon name="more-dot-fill" color="rgb(131 129 129)" size="50" @click="handleDotFriend"></u-icon>
			</view>
		</u-navbar>
		<UserBaseInfo :info="info" :groupBorder="false"></UserBaseInfo>
		<view class="bottom-buttons">
			<u-button size="medium" type="primary" @click="sendMsgClick">发消息</u-button>
		</view>
		<u-toast ref="uToast" />
		<u-action-sheet :list="list" v-model="sheetVisable" @click="sheetItemClick"></u-action-sheet>
	</view>
</template>

<script>
	import UserBaseInfo from '@/components/user/UserBaseInfo.vue'
	export default {
		components: {
			UserBaseInfo
		},
		data() {
			return {
				info: {},
				background: {
					backgroundColor: '#FFFFFF',
				},
				list: [{
					text: '删除好友',
					color: 'red',
					fontSize: 28
				}],
				sheetVisable: false
			}
		},
		onLoad(options) {
			this.$u.api.user.getBaseInfo2(options.fId)
				.then(res => {
					if (res.code === '00000') {
						this.info = res.data;
					}
				});
		},
		methods: {
			handleDotFriend() {
				this.sheetVisable=true
			},
			sheetItemClick(i){
				if(i==0){
					this.$u.api.friend.deleteFriend(this.info.id)
						.then(res=>{
							if(res.code=='00000'){
								this.$refs.uToast.show({
									title: '操作成功',
									type: 'success'
								})
								this.$store.dispatch('friend/loadFriends');
								uni.navigateBack();
							}
							else{
								this.$refs.uToast.show({
									title: res.message,
									type: 'error'
								})	
							}
						})
				}
			},
			sendMsgClick(){
				uni.navigateTo({
					url:'/pages/chat/chat?friendId='+this.info.id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.right-dot {
		padding: 20rpx;
	}
	.bottom-buttons{
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 20rpx;
		// background-color: #39B54A;
		display: flex;
		justify-content: space-around;
	}
</style>
