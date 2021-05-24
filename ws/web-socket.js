import WSMsg from '@/common/protobuf/WSMsg_pb.js'
import cfg from '@/common/config.js'
import store from '@/store/ws/index.js'
import handler from './handler.js'
import wsApi from '@/common/ws_api/base.api.js'

const ws = {
	connect() {
		uni.connectSocket({
			url: cfg.wsUrl
		});

		uni.onSocketOpen(function(res) {
			console.log("WebSocket 已打开");
			wsApi.login()
			setInterval(()=>{
				wsApi.ping();
			},3000)
		});
		uni.onSocketClose(function(res) {
			console.log('WebSocket 已关闭！');
		});
		
		uni.onSocketMessage((res) =>{
			// var arraybuffer = new ArrayBuffer(8);//实例化时，仅需传入字节数
			// ArrayBuffer.length;  // 1
			// arraybuffer.byteLength;  // 8
			 
			// var int8a = new Int8Array(buffer.length);//类方法ArrayBuffer.isView()判断某对象是否为视图
			// ArrayBuffer.isView(int8a)
			let buffer = res.data;
			var uint8Array = new Uint8Array(buffer, 0);
			let resProto = WSMsg.Msg.deserializeBinary(uint8Array);
			// let resProto = WSMsg.Msg.deserializeBinary(res.data.buffer);
			// let resProto = ResProto.BaseRes.deserializeBinary(res.data);
			this.onReceive(resProto)
		});
	},
	disconnect() {
		uni.closeSocket();
	},
	send(proto){
		uni.sendSocketMessage({
			data: proto.serializeBinary()
		})
	},
	onReceive(proto){
		handler.onReceive(proto)
	}
}
export default ws