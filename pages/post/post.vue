<template>
	<view>
		<PostCard v-for="item in list" :item="item"></PostCard>
	</view>
</template>

<script>
	import PostCard from '@/components/post/PostCard'
	export default {
		components:{
			PostCard
		},
		data() {
			return {
				list: []
			}
		},
		onLoad(){
			this.loadData();
		},
		created(){
			this.loadData();
		},
		methods:{ 
			loadData(){
				console.log('loadData')
				this.$u.api.post.getAllPost(1,10)
					.then(res => {
						this.list = res.data.list;
						console.log(res);
					})
			}
		}
	}
</script>

<style>

</style>
