const ws = {
	namespaced: true,
	state: {
		receiveHandler: [],
		protoFields : [
			'ops','code','msg','target','type','content','bytesContent'
		]
	},
	mutations:{
		addReceiveHandler(state, handler){
			state.receiveHandler.push(handler);
		}
	}
}
export default ws;