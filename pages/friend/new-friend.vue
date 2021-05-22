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
	import api from '@/common/api/friend-axios.api.js'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions,
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
			...mapActions('friend',[
				'putFriendByIdAction'
			]),
			...mapMutations('friend',[
				'removeFriendRequests'
			]),
			moreDotClick(){
				console.log('moreDotClick')
			},
			clickItem(i){
				console.log('clickItem',i)
			},
			clickReject(i){
				let id = this.getRequestFid();
				api.rejectFriendRequst(id)
					.then(res=>{
						if(res.code!='00000'){
							uni.showToast({
							    title: res.message,
							    icon: 'none',
							    duration: 2000
							});
							this.removeFriendRequests(_id)
						}
					})
				console.log('clickReject',id)
			},
			clickAdd(i){
				console.log('clickAdd',i)
				let id = this.getRequestFid(i);
				let _id = this.friendRequests[i]._id;
				api.acceptFriendRequst(id)
					.then(res=>{
						if(res.code=='00000'){
							uni.showToast({
							    title: res.message,
							    icon: 'none',
							    duration: 2000
							});
							this.putFriendByIdAction(id)
							this.removeFriendRequests(_id)
						}
					})
		
			}
		},
		computed:{
			...mapState('friend',[
				'friendRequests'
			]),
			...mapGetters('friend',[
				'getRequestFid'
			])
		}
	}
</script>

<style>

</style>
