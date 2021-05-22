<template>
	<view>
		<!-- <input v-model="v"  type="text"/> -->
		<button @click="connect">发起连接</button>
		<button @click="disconnect">断开连接</button>
		<button @click="ping">ping</button>
		<button @click="sendChatMsg">给用户发消息</button>
		<button @click="login">登录</button>
		<u-input v-model="v"></u-input>
	</view>
</template>

<script>
	import handler from '@/ws/handler.js'
	import wsApi from '@/common/ws_api/base.api.js'
	import ws from '@/ws/web-socket.js'
	export default {
		data() {
			return {
				v: ''
			}
		},
		onLoad() {
		},
		methods: {
			connect(){
				console.log('click connect')
				ws.connect();
			},
			disconnect(){
				console.log('click disconnect')
				ws.disconnect();
			},
			ping(){
				console.log('click ping')
				wsApi.ping(this.v)
			},
			login(){
				wsApi.login();
			},
			sendChatMsg(){
				console.log('click sendChatMsg')
				let friendId = '60a51940a05854418b8e6e43';
				wsApi.sendChatMsg(friendId,this.v);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
