<template>
	<view>
		<PostCard v-for="item in list"
		:item="item" 
		@commentClick="clickComment"></PostCard>
	</view>
</template>

<script>
	import PostCard from '@/components/post/PostCard'
	import postApi from '@/common/api/post-axios.api.js'
	export default {
		components: {
			PostCard
		},
		data() {
			return {
				list: []
			}
		},
		methods: {
			
		},
		onLoad(){
			console.log('findMyPost')
			postApi.findMyPost(0,100)
				.then(res=>{
					this.list = res.data.list
				})
		}
	}
</script>

<style>

</style>
