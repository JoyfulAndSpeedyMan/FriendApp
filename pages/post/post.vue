<template>
	<view>
		<view>
			<qizai9527-input-comment :placeholder="placeholder" :valueData="tmpCommentData" :isShow="isShowComment"
				:curKey="curCommentId" @submitComment="submitComment" @clickOther="clickOther">
			</qizai9527-input-comment>
		</view>
		<u-toast ref="uToast" />
		<PostCard v-for="item in list" 
		:item="item" 
		:handThumb="handThumb"
		:handUnThumb="handUnThumb"
		:handForward="handForward"
		@commentClick="clickComment"></PostCard>
	</view>
</template>

<script>
	import PostCard from '@/components/post/PostCard'
	export default {
		components: {
			PostCard
		},
		data() {
			return {
				itemMap: {},
				list: [],
				isShowComment: false,
				placeholder: "友善是交流的起点",
				tmpCommentData: [],
				curCommentId: '',
			}
		},
		onLoad() {
			this.loadData();
		},
		onShow(){
			this.loadData();
		},
		created() {
			this.loadData();
		},
		methods: {
			loadData() {
				this.$u.api.post.getAllPost(1, 10)
					.then(res => {
						this.list = res.data.list;
						for (let i in this.list) {
							let item = this.list[i];
							this.itemMap[item._id] = {
								...item,
								i: i
							};
						}
					})
			},
			handThumb(postId){
				return this.$u.api.post.thumb(postId)
				.then(res=>{
					if(res.code==='00000')
						return true;
					else{
						this.$refs.uToast.show({
							title: res.message,
							type: 'error'
						})
						return false;
					}
				})
			},
			handUnThumb(postId){
				return this.$u.api.post.unthumb(postId)
				.then(res=>{
					if(res.code==='00000')
						return true;
					else{
						this.$refs.uToast.show({
							title: res.message,
							type: 'error'
						})
						return false;
					}
				})
			},
			handForward(postId){
				return this.$u.api.post.forward(postId)
				.then(res=>{
					if(res.code==='00000'){
						this.$refs.uToast.show({
							title: res.message,
							type: 'success'
						})
						return true;
					}
					else{
						this.$refs.uToast.show({
							title: res.message,
							type: 'error'
						})
						return false;
					}
				})
			},
			clickComment(id) {
				this.curCommentId = id;
				this.placeholder = "评论 " + this.itemMap[id].nickname + "：";
				this.isShowComment = true;
			},
			// 提交评论并清除记忆
			submitComment(e) {
				this.$u.api.postComment.commentPost(e,this.curCommentId)
				.then(res=>{
					if(res.code==='00000'){
						this.$refs.uToast.show({
							title: '评论成功',
							type: 'success',
							url: `/pages/post/post-comment?id=${this.curCommentId}`
						})
						this.isShowComment = false;
						this.itemMap[this.curCommentId].comment++;
						this.$set(this.list,this.itemMap[this.curCommentId].i,this.itemMap[this.curCommentId])
						this.tmpCommentData[this.curCommentId] = '';
					}
				})
			},
			// 点击空白返回并保存记忆
			clickOther(e) {
				this.isShowComment = false;
				this.tmpCommentData[this.curCommentId] = e;
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
