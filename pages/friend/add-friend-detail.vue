<template>
	<view class="wrap">
		<u-toast ref="uToast" />
		<u-modal v-model="showVisiable" @confirm="modelConfirm">
			<view class="model">
				<u-field type="textarea" v-model="modalContent" :border-top="true" :label-width="0"
					placeholder="请输入验证消息" :focus="true" />
			</view>
		</u-modal>
		<UserBaseInfo :info="info" :allEdit="false"></UserBaseInfo>
		<view class="operations">
			<u-button @click="addFriendClick">加好友</u-button>
		</view>
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
				showVisiable: false,
				modalContent: '',
				friReqVerMode: -1
			}
		},
		onLoad(option) {
			this.info = option;
		},
		methods: {
			addFriendClick() {
				let api = this.$u.api.friend;
				api.getFriendVerConfig(this.info.id)
					.then(res => {
						if (res.code === '00000') {
							let mode = res.data.friReqVerMode;
							this.friReqVerMode = mode;
							// 验证消息验证
							if (mode == 2) {
								this.showVisiable = true
							}
						}
					})
			},
			addFriend(id,content){
				this.$u.api.friend.addFriend(id,content)
					.then(res=>{
						if(res.code=='00000'){
							this.$refs.uToast.show({
								title: '好友请求已发送',
								type: 'sucess'
							})	
							this.$store.dispatch('friend/loadFriends');
						}
						else{
							this.$refs.uToast.show({
								title: res.message,
								type: 'error'
							})	
						}
					})
			},
			modelConfirm(v) {
				console.log('aaaa')
				console.log(this.friReqVerMode)
				if (this.friReqVerMode == 2) {
					this.addFriend(this.info.id,v)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.operations {}

	.model {
		padding: 50rpx;
	}
</style>
