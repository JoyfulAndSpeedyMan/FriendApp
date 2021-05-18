<template>
	<view>
		<view>
			<qizai9527-input-comment 
			:placeholder="placeholder" 
			:valueData="tmpCommentData" 
			:isShow="isShowComment"
			:curKey="curCommentId" 
			@submitComment="submitComment" 
			@clickOther="clickOther">
			</qizai9527-input-comment>
		</view>
		<button @click="clickComment('1')">显示</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nameList: {
					1: '小心',
					2: '大呃呃',
					3: '小气鬼',
				},

				isShowComment: false,
				placeholder: "友善是交流的起点",
				tmpCommentData: [],
				curCommentId: '',
			}
		},
		methods: {
			// 点击评论触发评论输入框
			clickComment(id) {
				console.log('id')
				this.curCommentId = id;
				this.placeholder = "回复 " + this.nameList[id] + "：";
				this.isShowComment = true;
			},
			// 提交评论并清除记忆
			submitComment(e) {
				this.isShowComment = false;
				this.tmpCommentData[this.curCommentId] = '';
			},
			// 点击空白返回并保存记忆
			clickOther(e) {
				this.isShowComment = false;
				this.tmpCommentData[this.curCommentId] = e;
			}
		}
	}
</script>

<style>
</style>
