import api from '@/common/api/chat.api.js'
import userState from '../user/user.js'
const chat = {
	namespaced: true,
	state: {
		sessionList:[],
		allSessionObject:{},
		allChatMsgs:{},
		msgModify: 0,
		loadingMsg: false
	},
	mutations:{
		setSessionList(state,list){
			state.sessionList = list;
		},
		setAllChatMsgs(state,msgs){
			state.allChatMsgs = msgs;
		},
		setAllSessionObject(state,allSessionObject){
			state.allSessionObject=allSessionObject
		},
		addChatMsgs(state,{friendId, msgId, content , i},rootState){
			console.log('addChatMsgs userInfo')
			console.log(userState.state.userInfo)
			let msg = {
				_id: msgId,
				type: 1,
				promulgator: userState.state.userInfo.id,
				content: content,
				status: 'SENDING'
			}
			console.log('addChatMsgs')
			console.log(msg)
			msg.i = i;
			console.log(msg)
			state.allChatMsgs[msgId] = msg;
			state.sessionList[i].lastMsg = msg;
		},
		updateChatMsg(state, {msgId , msg}){
			console.log('updateChatMsg')
			console.log('msgId:')
			console.log(msgId)
			console.log('msg')
			console.log(msg)
			let oldMsg = state.allChatMsgs[msgId];
			state.allChatMsgs[msgId] = msg;
			let sessionObject = state.sessionList[oldMsg.i]
			sessionObject.msgs.push(msg)
			sessionObject.lastMsg = msg;
			state.sessionList[oldMsg.i] = sessionObject
		},
		addMsg(state,{so, id , msg}){
			console.log('so')
			console.log(so)
			let msgs = so.msgs;
			msgs.push(msg)
			state.sessionList[so.i] = so;
		},
		addMsgs(state,{sessionObject , msgs}){
			console.log('addMsgs')
			msgs = msgs.reverse();
			let oldMsgs = sessionObject.msgs;
			sessionObject.msgs = msgs.concat(oldMsgs);
			let i = sessionObject.i;
			let list = state.sessionList;
	
			list[i] = sessionObject
			state.sessionList = list;
			
			state.allChatMsgs[sessionObject._id] = sessionObject.msgs
			
			state.loadingMsg= false;
		},
		loadingMsg(state){
			state.loadingMsg = true;
		},
		clearUnread(state,sessionObject){
			state.allChatMsgs[sessionObject._id].unread = 0;
		}
	},
	actions: {
		init({dispatch}) {
			dispatch('loadSessionList')
		},
		loadSessionList({commit,state}){
			api.getAllSession()
				.then(res=>{
					if(res.code==='00000'){
						let ss = res.data;
						console.log('loadSessionList')
						let chatMsgs = {}
						let allSessionObject = {};
						for(let k in ss){
							// 反序数组
							let o = ss[k];
							let s = o.msgs;
							if(s && s.length>0){
								o.lastMsg = s[0];
								let size = s.length;
								let mid = Math.floor(size/2)-1;
								
								for(let i = 0; i<= mid;i++){
									if(i<= mid){
										let j = size-1-i;
										let t = s[i];
										s[i] = s[j];
										s[j] = t;
										// 保存用户会话Id
										s[i].usId = o._id
										s[j].usId = o._id
										s[i].i = k;
										s[j].i = k;
									}
								}
								if(size%2 != 0){
									s[mid+1].i = k;
									s[mid+1].usId = o._id;
								}
							}
							// 建立 id和聊天记录的映射关系
							chatMsgs[o._id]= s;
							o.i = k;
							// 建立 id和会话对象的映射关系
							allSessionObject[o._id] = o;
						}
						commit('setAllSessionObject',allSessionObject)
						commit('setAllChatMsgs',chatMsgs)
						commit('setSessionList',ss)
					}
				})
		},
		addMsgAction({commit,state},{id , msg}){
			let soMap = state.allSessionObject;
			let so = soMap[id];
			let msgs = state.allChatMsgs[id];
			console.log('so')
			console.log(so)
			if(so){
				commit('addMsg',{so,id,msg})
			}
		},
		loadMoreMsg({commit,state},sessionObject){
			if(!state.loadingMsg){
				console.log('loadMoreMsg')
				let msgs = sessionObject.msgs;
				return api.loadMoreMessage(sessionObject.sessionId,msgs.length,10)
						.then(res=>{
							commit('addMsgs',
							{
								sessionObject: sessionObject ,
								msgs: res.data
							})
						})
			}
			else{
				return new Promise((res,rej)=>{
					res()
				})
			}
		},
		clearUnreadAction({commit,state},sessionObject){
			api.cleanUnread(sessionObject._id)
				.then(res=>{
					if(res.code === '00000'){
						commit('clearUnread',sessionObject)
					}
				})
		}
		
	}
}
export default chat;