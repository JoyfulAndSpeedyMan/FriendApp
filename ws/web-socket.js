import WSMsg from '@/common/protobuf/WSMsg_pb.js'
import cfg from '@/common/config.js'
import store from '@/store/ws/index.js'
import handler from './handler.js'

const ws = {
	connect() {
		uni.connectSocket({
			url: cfg.wsUrl
		});

		uni.onSocketOpen(function(res) {
			console.log("WebSocket 已打开");
		});
		uni.onSocketClose(function(res) {
			console.log('WebSocket 已关闭！');
		});
		
		uni.onSocketMessage((res) =>{
			let resProto = WSMsg.Msg.deserializeBinary(res.data);
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