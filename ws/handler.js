import WSMsg from '@/common/protobuf/WSMsg_pb.js'
import ws from './web-socket.js'
import store from '@/store/ws/index.js'
export default {
	onReceive(proto){
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
	}
}