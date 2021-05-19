let prefix='/post/comment'
const install = (Vue, vm) => {

	let commentPost = (content,postId)=>vm.$u.put(`${prefix}`,{content,postId})
	let getPostComment= (postId,page,size)=>vm.$u.get(`${prefix}`+vm.$u.queryParams({
		postId,
		page,
		size
	}))
	
	let thumb= (commentId)=> vm.$u.put(`${prefix}/thumb`,{commentId})
	let unThumb= (commentId)=> vm.$u.delete(`${prefix}/thumb`,{commentId})
	
	let reply= (postId,replyUserId,replyId,content)=> vm.$u.put(`${prefix}/reply`,{
		postId,
		replyUserId,
		replyId,
		content
	})
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api.postComment = {
		commentPost,
		getPostComment,
		thumb,
		unThumb,
		reply
	};
}

export default {
	install
}