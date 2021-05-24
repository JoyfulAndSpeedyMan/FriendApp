import WSMsg from '@/common/protobuf/WSMsg_pb.js'
import ws from './web-socket.js'
import store from '@/store/ws/index.js'
import ResCode from '@/common/ws_api/ResCode.js'
import reqOps from '@/common/ws_api/ReqOps.js'
import ResOps from '@/common/ws_api/ResOps.js'
import ResTarget from '@/common/ws_api/ResTarget.js'
import chatMessageHandler from '@/common/ws_handler/chat_message_handler.js'
export default {
	onReceive(proto){
		// console.log('收到数据：');
		let data = {}
		let fields = store.state.protoFields;
		for(let i in fields){
			let name = fields[i];
			let Uname = name.charAt(0).toUpperCase() + name.substr(1);
			let getter = 'get'+Uname;
			if(proto[getter] && proto[getter]()){
				data[name]=proto[getter]();
			}
		}
		console.log('收到服务器内容：');
		console.log(data);
		this.handerResult(data)
	},
	send(data){
		console.log('send')
		console.log(data)
		let proto = new WSMsg.Msg();
		let fields = store.state.protoFields;
		for(let i in fields){
			let name = fields[i];
			let Uname = name.charAt(0).toUpperCase() + name.substr(1);
			// console.log(name)
			let settter = 'set'+Uname;
			if(data[name]){
				proto[settter](data[name]);
			}
		}
		ws.send(proto)
		console.log('send end：');
	},
	handerResult(data){
		switch(data.ops){
			case ResOps.PUSH:
				if(data.target == ResTarget.PUSH_CHAT_MSG){
					chatMessageHandler.receiveChatMsg(data)
				}
				break;
			case ResOps.RESPONSE:
				if(data.code == ResCode.OK){
					if(data.target == ResTarget.SEND_CHAT_MSG){
						chatMessageHandler.hand(data);
					}
				}
				break;
		}

	}
}