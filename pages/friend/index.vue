<template>
	<view>
		<u-navbar 
		:is-back="false" 
		:title="'我的好友'"
		:title-color="'#303133'"
		:title-size="'1.4em'"
		:title-bold="true"
		:background="background"
		:border-bottom="false">
		<view slot="right" class="right-add">
			<u-icon name="man-add" color="rgb(131 129 129)" size="50" @click="handleAddFriend"></u-icon>
		</view>
		
		</u-navbar>
		<u-cell-group>
			<u-cell-item title="新朋友" @click="clickNewFriends"></u-cell-item>
		</u-cell-group>
		<u-index-list :scrollTop="scrollTop" :index-list="indexList">
			<view v-for="(lv,lk, i) in friends" :key="i">
				<u-index-anchor :index="lk" />
				<view class="list-cell u-border-bottom" v-for="(o,k,j) in lv" :key="j" @click="clickUser(o)">
					<u-avatar :src="o.fAvatar"></u-avatar>
					<span class= "username">{{o.friendName}}</span>
				</view>
			</view>
		</u-index-list>
	</view>
</template>

<script>
	import indexList from "@/common/index.list.js";
	import {
		mapState,
		mapActions
	} from 'vuex'
	const letterArr = indexList.list.map(val => {
		return val.letter;
	})
	export default {
		data() {
			return {
				scrollTop: 0,
				list: indexList.list,
				background: {
					backgroundColor: '#f3f4f6',
				}
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad() {
			
		},
		methods: {
			...mapActions('friend',[
				'init'
			]),
			handleAddFriend(){
				uni.navigateTo({
					url:'./add-friend'
				})
			},
			clickNewFriends(){
				uni.navigateTo({
					url:'./new-friend'
				})
			},
			clickUser(o){
				uni.navigateTo({
					url:'./friend-info'+this.$u.queryParams(o)
				})
			}
		},
		computed: {
			...mapState('friend',[
				'friends'
			]),
			indexList(){
				let  arr = [];
				for(let s in this.friends){
					arr.push(s)
				}
				return arr;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: $u-content-color;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
		align-items: center;
	}
	.username {
		font-size: 1.2em;
		margin-left: 20px;
	}
	.right-add{
		padding: 20rpx;
	}
</style>
