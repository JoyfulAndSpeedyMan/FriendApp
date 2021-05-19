<template>
	<view>
		<view>
			<qizai9527-input-comment :placeholder="placeholder" :valueData="tmpCommentData" :isShow="isShowComment"
				:curKey="curCommentId" @submitComment="submitComment" @clickOther="clickOther">
			</qizai9527-input-comment>
		</view>
		<u-toast ref="uToast" />
		<view class="all-reply" v-if="commentList && commentList.length>0">
			<view class="item" v-for="(item, index) in commentList" :key="index">
				<view class="comment">
					<view class="top">
						<view class="left">
							<view class="heart-photo">
								<image :src="item.avatar" mode=""></image>
							</view>
							<view class="user-info">
								<view class="name">{{ item.nickname }}</view>
								<view class="date">{{ item.createTime }}</view>
							</view>
						</view>
						<view class="right" :class="{ highlight: item.isThumb }">
							<view class="num">{{ item.thumb }}</view>
							<u-icon v-if="!item.isThumb" name="thumb-up" class="like" :size="30" color="#9a9a9a"
								@click="getLike(index)"></u-icon>
							<u-icon v-if="item.isThumb" name="thumb-up-fill" class="like" :size="30"
								@click="getLike(index)"></u-icon>
						</view>
					</view>
					<view class="reply" v-if="item.replyComment">
						<view class="username">{{ item.replyComment.nickname }}</view>
						<view class="text">{{ item.replyComment.content }}</view>
					</view>
					<view class="content" @click="clickComment(item._id)">{{ item.content }}</view>
				</view>
			</view>
		</view>
		<view v-else>
			<u-empty text="当前没有评论" mode="list" style="margin-top: 50%;"></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				postId: '',
				commentList: [],
				total: 0,
				isShowComment: false,
				placeholder: "友善是交流的起点",
				tmpCommentData: [],
				curCommentId: '',
				itemMap: {},
			};
		},
		onLoad(option) {
			this.postId = option.id;
			this.getComment();
		},
		methods: {
			// 点赞
			getLike(index) {
				if (index === 0 || index > 0) {

					if (!this.commentList[index].isThumb == true) {
						this.$u.api.postComment.thumb(this.commentList[index]._id)
							.then(res => {
								if (res.code === '00000') {
									this.commentList[index].thumb++;
									this.commentList[index].isThumb = true;
								}
							})

					} else {
						this.$u.api.postComment.unThumb(this.commentList[index]._id)
							.then(res => {
								if (res.code === '00000') {
									this.commentList[index].thumb--;
									this.commentList[index].isThumb = false;
								}
							})
					}
				}
			},
			// 评论列表
			getComment() {
				this.$u.api.postComment.getPostComment(this.postId, 0, 10)
					.then(res => {
						this.commentList = res.data.list;
						this.total = res.data.total
						if(this.commentList){
							for(let item of this.commentList) {
								this.itemMap[item._id]=item;
							}
						}
					})
			},
			clickComment(id) {
				this.curCommentId = id;
				this.placeholder = "回复 " + this.itemMap[id].nickname + "：";
				this.isShowComment = true;
			},
			// 提交评论并清除记忆
			submitComment(e) {
				this.isShowComment = false;
				this.tmpCommentData[this.curCommentId] = '';
				this.$u.api.postComment.reply
				(	
					this.postId,
					this.itemMap[this.curCommentId].userId,
					this.curCommentId,
					e
				)
				.then(res=>{
					if(res.code==='00000'){
						this.$refs.uToast.show({
							title: '回复成功',
							type: 'success'
						})
						this.getComment()
					}
				})
			},
			// 点击空白返回并保存记忆
			clickOther(e) {
				this.isShowComment = false;
				this.tmpCommentData[this.curCommentId] = e;
			}
		}
	};
</script>


<style lang="scss" scoped>
	page {
		background-color: #f2f2f2;
	}

	.comment {
		padding: 30rpx;
		font-size: 32rpx;
		background-color: #ffffff;

		.top {
			display: flex;
			justify-content: space-between;
		}

		.left {
			display: flex;

			.heart-photo {
				image {
					width: 64rpx;
					height: 64rpx;
					border-radius: 50%;
					background-color: #f2f2f2;
				}
			}

			.user-info {
				margin-left: 10rpx;

				.name {
					color: #5677fc;
					font-size: 28rpx;
					margin-bottom: 4rpx;
				}

				.date {
					font-size: 20rpx;
					color: $u-light-color;
				}
			}
		}

		.right {
			display: flex;
			font-size: 20rpx;
			align-items: center;
			color: #9a9a9a;

			.like {
				margin-left: 6rpx;
			}

			.num {
				font-size: 26rpx;
				color: #9a9a9a;
			}
		}

		.highlight {
			color: #5677fc;

			.num {
				color: #5677fc;
			}
		}
	}

	.all-reply {
		margin-top: 10rpx;
		padding-top: 20rpx;
		background-color: #ffffff;

		.all-reply-top {
			margin-left: 20rpx;
			padding-left: 20rpx;
			border-left: solid 4rpx #5677fc;
			font-size: 30rpx;
			font-weight: bold;
		}

		.item {
			border-bottom: solid 2rpx $u-border-color;
		}

		.reply {
			padding: 20rpx;
			background-color: rgb(242, 242, 242);
			border-radius: 12rpx;
			margin: 10rpx 0;

			.username {
				font-size: 24rpx;
				color: #7a7a7a;
			}
		}
	}

	.bottom {
		margin-top: 20rpx;
		display: flex;
		font-size: 24rpx;
		color: #9a9a9a;

		.reply {
			color: #5677fc;
			margin-left: 10rpx;
		}
	}
</style>
