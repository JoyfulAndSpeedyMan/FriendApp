<template>
	<view class="f-body" :style="`height: ${swiperHeight}px;`">
		<u-navbar back-text="返回" :title="sessionObject.friendName"></u-navbar>
		<scroll-view class="scroll" 
		:scroll-y="true" 
		scroll-left="120"  
		:scrollTop="chatScrollTop"
		@scrolltoupper="scrolltoupper">
			<view id="chat-scroll-view">
				<!-- 别人的聊天消息 -->
				<view v-for="msg in chatMsgs">
					<!-- <view class="message-line-other" v-if="msg.promulgator != userInfo.id "> -->
					<view class="message-line-other" v-if="msg.promulgator != userInfo.id ">
						<view class="avatar">
							<u-avatar :src="sessionObject.avatar"></u-avatar>
						</view>
						<view class="message-box">
							<view class="message-box-top">
								{{ sessionObject.friendName}}
							</view>
							<view class="message-box-content">
								<u-parse :html="msg.content"></u-parse>
							</view>
						</view>
					</view>
					<view class="message-line-me" v-else>
						<view class="message-box">
							<view class="message-box-top message-box-top-me">
								<!-- {{msg.status}} -->
							</view>
							<view class="message-box-content-me">
								<u-parse :html="msg.content"></u-parse>
							</view>
						</view>
						<view class="avatar">
							<u-avatar :src="userInfo.avatar"></u-avatar>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="bottom">
			<u-field v-model="msg" :label-width="0" type="textarea" :border-bottom="true" maxlength="2000"
				:field-style="inputStyle" :focus="true">
			</u-field>
			<!-- <input type="text" /> -->
			<view class="send-button" @click="sendClick">发送</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapActions 
	} from 'vuex';
	import wsApi from '@/common/ws_api/base.api.js'
	import chatApi from '@/common/api/chat.api.js'
	export default {
		data() {
			return {
				swiperHeight: 1660,
				scrollHeight: 1660 * 0.92,
				pageHeight: 1700,
				mitemHeight: 0,
				chatScrollTop: 0,
				content: '这是一段测试文字',
				id: '',
				index: -1,
				friendId: '',
				'inputStyle': {
					'font-size': '1.2em',
					// 'background-color': '#FF7203',
					'border': '1px',
					'width': '60vw'
				},
				msg: ''
			}
		},
		methods: {
			...mapMutations('chat', [
				'addChatMsgs'
			]),
			...mapActions('chat',[
				'loadMoreMsg',
				'clearUnreadAction'
			]),
			sendClick() {
				let msgId = this.$u.guid(4);
				console.log(msgId)
				wsApi.sendChatMsg(this.friendId,msgId,this.msg);
				this.addChatMsgs({
					friendId: this.friendId,
					msgId: msgId,
					content: this.msg,
					i: this.index
				})
				this.msg = ''

			},
			scrollToBottom: function() {
				let that = this;
				let query = uni.createSelectorQuery();
				query.selectAll('.m-item').boundingClientRect();
				query.select('#chat-scroll-view').boundingClientRect();
				query.exec((res) => {
					for(let i =0; i<res.length;i++){
						let rect = res[i]
						that.mitemHeight = 0;
						that.mitemHeight = that.mitemHeight + rect.height
						//判断子元素高度是否大于显示高度
						if (that.mitemHeight > (that.scrollHeight)) { 
							that.chatScrollTop = that.mitemHeight - that.scrollHeight 
						}
					}
				})
			},
			scrolltoupper(){
				console.log('scrolltoupper')
				this.loadMoreMsg(this.sessionObject)
					.then(()=>{
						console.log('then')
						console.log(this.chatMsgs)
						// this.$forceUpdate()
					})
			}
			
		},
		watch:{
			sessionObject(){
				this.scrollToBottom()
			}
		},
		onLoad(options) {
			if (options.id && options.index) {
				this.id = options.id;
				this.index = options.index
				this.friendId = this.sessionObject.fid
			} else if (options.friendId) {
				this.friendId = options.friendId;
			}
			this.clearUnreadAction(this.sessionObject)
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - 44 // 视口高度-顶部导航高度
					this.swiperHeight = height // A容器的高度
					this.pageHeight = res.windowHeight;
					this.scrollHeight = this.swiperHeight * 0.92
				}
			});
			this.chatObject = options
			
		},
		computed: {
			...mapState('chat', [
				'sessionList',
				'allChatMsgs'
			]),
			...mapState('user', [
				'userInfo'
			]),
			chatMsgs() {
				return this.sessionObject.msgs;
				// return this.allChatMsgs[this.id];
			},
			sessionObject() {
				if (this.index != -1) {
					return this.sessionList[this.index]
				} else {
					console.log('sessionObject')
					for(let i in this.sessionList){
						let sessionObject = this.sessionList[i];
						if(sessionObject.fid == this.friendId)
							return sessionObject
					}
					return {}
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	$page-height: 100%;
	$scroll-height: 92%;

	.f-body {
		// background-color: #19BE6B;

		.scroll {
			height: $scroll-height;

			.message-line-other {
				width: 100%;
				padding: 15rpx;
				border-bottom: 5rpx black;
				display: flex;

			}

			.message-line-me {
				width: 100%;
				padding: 15rpx;
				border-bottom: 5rpx black;
				// background-color: #fbd9ff;
				display: flex;
				justify-content: flex-end;
			}

			.message-box {
				display: flex;
				flex-flow: column;
				// background-color: #ffffff;
				padding: 5rpx;
				max-width: 70%;

				.message-box-top {
					// background-color: #dbff75;
					padding-left: 10rpx;
					// padding-top: 10rpx;
					height: 1.1em;
				}

				.message-box-content {
					padding: 15rpx;
					padding-top: 20rpx;
					font-size: 1.1em;
					background-color: #ffffff;
					border-radius: 15rpx;
					margin-top: 15rpx;
					
				}

				.message-box-top-me {
					// border-radius: 15rpx;
					// background-color: #E03997;
				}
				
				.message-box-content-me{
					border-radius: 15rpx;
					background-color: #4AA4DE;
					color: #FFFFFF;
					padding: 15rpx;
					padding-top: 20rpx;
					font-size: 1.1em;
				}
			}

			.avatar {
				padding: 10rpx;
			}

		}

		.bottom {
			position: absolute;
			bottom: 0;
			width: 100vw;
			height: ($page-height - $scroll-height);
			background-color: #e9ffe0;
			display: flex;

			.send-button {
				text-align: center;
				line-height: 120rpx;
				font-size: 1.2em;
			}
		}
	}

	// .u-field{
	// 	padding: 0px;
	// }
</style>
