<template>
	<view>
		<hm-friends-requests-card 
		:list="friendRequests"
		@moreDotClick="moreDotClick"
		@clickItem="clickItem"
		@clickAdd="clickAdd"
		@clickReject="clickReject"></hm-friends-requests-card>
	</view>
</template>

<script>
	import HmFriendsRequestsCard from '@/components/hm-friends-requests-card/index.vue'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		components: {
			HmFriendsRequestsCard
		},
		data() {
			return {

			};
		},
		methods: {
			moreDotClick(){
				console.log('moreDotClick')
			},
			clickItem(id){
				console.log('clickItem',id)
			},
			clickReject(id){
				console.log('clickReject',id)
			},
			clickAdd(id){
				console.log('clickAdd',id)
			}
		},
		computed:{
			...mapState('friend',[
				'friendRequests'
			])
		}
	}
</script>

<style>

</style>
