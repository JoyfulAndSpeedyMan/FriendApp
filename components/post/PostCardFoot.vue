<template>
	<view>
		<u-row gutter="16" justify="end">
			<u-col span="2">
				<u-icon name="thumb-up-fill" :color="thumbIconColor" size="34" :label="`点赞`" @click="handleThumb"></u-icon>
			</u-col>
			<u-col span="2">
				<u-icon name="chat-fill" size="34" color="" :label="`评论`"></u-icon>
			</u-col>
			<u-col span="2">
				<u-icon name="zhuanfa" size="34" color="" :label="`转发`"></u-icon>
			</u-col>
		</u-row>
		<u-icon 
		name="chat-fill" 
		size="34" 
		color="#2163BC" 
		label-color="#2163BC" 
		:label="`共${item.comment}评论`"
		@click="openComment()">
		</u-icon>
	</view>
</template>

<script>
	export default {
		props: ['item','comment'],
		data() {
			return {
				
			}
		},
		methods:{
			handleThumb(){
				if(this.item.isThumb){
					this.item.isThumb=false;
				}else{
					this.item.isThumb=true;
				}
			},
			openComment(){
				uni.navigateTo({
					url: `/pages/post/post-comment?id=${this.item._id}`
				})
			}
		},
		computed:{
			thumbIconColor(){
				if(this.item.isThumb){
					return "red";
				}else{
					return "inherit";
				}
			}
		}
	}
</script>

<style>
</style>
