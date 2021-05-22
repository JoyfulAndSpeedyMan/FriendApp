<template>
	<view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 列表左滑
			</view>
		</view>
		<u-swipe-action 
		:index="index" 
		v-for="(item, index) in list" 
		:key="item.fid" 
		@click="click"
			@open="open" :options="options">
			<view class="cu-list menu-avatar" style="width: 100vw;">
				<view class="cu-item">
					<view class="cu-avatar round lg" :style="[{backgroundImage:'url('+item.avatar+')'}]">
						<view class="cu-tag badge" v-show="item.unread>0">{{item.unread>99?'99+':item.unread}}</view>
					</view>
					<view class="content">
						<view class="text-grey">{{item.friendName}}</view>
						<view class="text-gray text-sm">
							<rich-text :nodes="item.lastMsg==undefined?'':item.lastMsg"></rich-text>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">{{item.lastMsgTime}}</view>
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
				list: [
					{
					   fid: '60a51940a05854418b8e6e43',
					   friendName: '懒羊羊',
					   avatar: 'https://img0.baidu.com/it/u=3461652273,580994694&fm=26&fmt=auto&gp=0.jpg',
					   lastMsg: '死亡如风，常伴吾身',
					   lastMsgTime: '2021-5-22',
					   unread: 2,
					}
				],
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
