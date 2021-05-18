<template>
	<view class="content">
		<u-gap height="50"></u-gap>
		<u-field v-model="text" label="数据" class="row"></u-field><br />
		<view class="row">
			<u-button type="primary" @click="connect()" throttleTime="0">连接</u-button>
			<u-button type="primary" @click="disconnect()" throttleTime="0">断开</u-button>
			<u-button type="primary" @click="send()" throttleTime="0">发送</u-button>
		</view>
		<u-gap height="50"></u-gap>
		<u-link href="/pages/test">导航</u-link>
		<navigator url="/pages/test">
			在当前页打开
		</navigator>
		<!-- <u-tabbar :list="tabbar" :mid-button="true"></u-tabbar> -->
	</view>
</template>

<script>
	import Inbound from '@/common/protobuf/InboundProto_pb.js'
	import ReqProto from '@/common/protobuf/ReqProto_pb.js'
	import ResProto from '@/common/protobuf/ResProto_pb.js'
	export default {
		data() {
			return {
				text: '',
				title: 'Hello uView',
				tabbar: ''
			}
		},
		onLoad() {
			this.tabbar = this.$store.state.tabber;
		},
		methods: {
			connect() {
				uni.connectSocket({
					url: 'ws://localhost:10001/ws'
				});

				uni.onSocketOpen(function(res) {
					console.log("WebSocket 已打开");
				});
				uni.onSocketClose(function(res) {
					console.log('WebSocket 已关闭！');
				});


			},
			disconnect() {
				uni.closeSocket();
			},
			send() {
				let reqProto = new ReqProto.BaseReq();
				reqProto.setOps(1);
				uni.sendSocketMessage({
					data: reqProto.serializeBinary()
				})
				uni.onSocketMessage(function(res) {
					let resProto = ResProto.BaseRes.deserializeBinary(res.data);
					console.log('收到服务器内容：' + resProto.getOps());
				});
				/*
				let a = Buffer.from(this.text);
				let data = new proto.protocol.InProto();
				data.setType(1);
				data.setContent(a);
				uni.sendSocketMessage({
					data: data.serializeBinary()
				})
				console.log("send: " + this.text);*/
			}
		},
		computed:{
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.row {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			width: 100%;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
