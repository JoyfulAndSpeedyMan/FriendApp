<template>
	<view>
		<!-- <navigator url="/pages/test">test页面</navigator> -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 列表左滑
			</view>
		</view>
		<u-swipe-action :index="index" v-for="(item, index) in sessionList" :key="item.fid" 
			@click="click"
			@close="close" 
			@open="open" 
			@content-click="contentClick" :options="options">
			<view class="cu-list menu-avatar" style="width: 100vw;">
				<view class="cu-item">
					<view class="cu-avatar round lg" :style="[{backgroundImage:'url('+item.avatar+')'}]">
						<view class="cu-tag badge" v-show="item.unread>0">{{item.unread>99?'99+':item.unread}}</view>
					</view>
					<view class="content">
						<view class="text-grey">{{item.friendName}}</view>
						<view class="text-gray text-sm">
							<rich-text :nodes="item.lastMsg.content==undefined?'':item.lastMsg.content"></rich-text>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">{{timeFormat(item.lastMsg.createTime)}}</view>
					</view>
				</view>
			</view>
		</u-swipe-action>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				list: [{
					fid: '60a51940a05854418b8e6e43',
					friendName: '懒羊羊',
					avatar: 'https://img0.baidu.com/it/u=3461652273,580994694&fm=26&fmt=auto&gp=0.jpg',
					lastMsg: '死亡如风，常伴吾身',
					lastMsgTime: '2021-5-22',
					unread: 2,
				}],
				options: [{
						text: '置顶',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			}


		},
		onLoad() {},
		methods: {
			showData() {
				console.log(this.sessionList)
			},
			timeFormat(date) {
				return this.$u.timeFrom(date, 'hh:MM');
			},
			click(i, j) {
				console.log('click', i, j)
			},
			close(i) {
				let item = this.sessionList[i];
				uni.navigateTo({
					url: `./chat?id=${item._id}&index=${i}`
				})
				console.log('close', i)
			},
			open(i) {
				console.log('open', i)
			},
			contentClick(i) {
				console.log('contentClick', i)
			}
		},
		computed: {
			...mapState('chat', [
				'sessionList'
			])
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}
</style>
