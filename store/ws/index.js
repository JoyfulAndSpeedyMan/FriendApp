const ws = {
	namespaced: true,
	state: {
		receiveHandler: [],
		protoFields : [
			'ops','code','msg','msgId','target','extend','type','content','bytesContent'
		]
	},
	mutations:{
		addReceiveHandler(state, handler){
			state.receiveHandler.push(handler);
		}
	}
}
export default ws;