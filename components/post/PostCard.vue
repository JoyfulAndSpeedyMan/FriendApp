<template>
	<view>
		<u-card 
		:border="false" 
		:head-border-bottom="false"
		:foot-border-top="false"
		:border-radius="0"
		:padding="20">
			<view slot="head">
				<PostLine :item="item"></PostLine>
			</view>
			<view slot="body" v-if="item.forwardUid">
				<view>
					转发
				</view>
				<view class="bottom ">
					<span v-if="item.forwardUid" class="username">{{item.forwardUName}}:</span>
					<span class="forward"> {{item.content}}</span>
				</view>
			</view>
			<view v-else slot="body">
				{{item.content}}
			</view>
			
			<view class="" slot="foot">
				<PostCartFoot 
				:item="item" 
				:handThumb="handThumb"
				:handUnThumb="handUnThumb"
				:handForward="handForward"
				@commentClick="$emit('commentClick',item._id)"></PostCartFoot>
			</view>
		</u-card>
	</view>
</template>

<script>
	import PostLine from './PostUserLine'
	import PostCartFoot from './PostCardFoot.vue'
	export default {
		components:{
			PostLine,
			PostCartFoot
		},
		// props:['item','handleThumb','handleUnThumb','handForward'],
		props:{
			item:{
				type: Object
			},
			handThumb:{
				type:Function
			},
			handUnThumb:{
				type:Function
			},
			handForward:{
				type:Function
			}
		},
		name: "PostCard",
		created(){
		},
		data() {
			return {
				// item: {
				// 	"_id": "60a1f91342509009e5ff960d",
				// 	"userId": "5ff2aecdcfb6de362b2296bb",
				// 	"thumb": 0,
				// 	"isThumb":true,
				// 	"comment": 10,
				// 	"forward": 0,
				// 	"createTime": "2021-05-17 05:03:15",
				// 	"updateTime": "2021-05-17 05:03:15",
				// 	"content": "死亡如风，常伴吾身。",
				// 	"nickname": "灰太狼",
				// 	"avatar": "/static/ys.jpg",
				// }
			};
		}
	}
</script>

<style scoped lang="scss">
	.bottom {
		margin-top: 20rpx;
		display: flex;
		font-size: 1em;
		background-color: $u-type-info-light;
		padding: 5px;
		.username{
			color: $u-type-primary;
		}
		.forward {
			color: $u-tips-color;
			margin-left: 10rpx;
		}
	}
</style>
