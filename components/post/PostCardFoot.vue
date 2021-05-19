<template>
	<view>
		<u-row gutter="16" justify="end">
			<u-col span="2">
				<u-icon name="thumb-up-fill" :color="thumbIconColor" size="34" :label="`点赞`" @click="thumbClick"></u-icon>
			</u-col>
			<u-col span="2">
				<u-icon name="chat-fill" size="34" color="" :label="`评论`" @click="$emit('commentClick',item._id)"></u-icon>
			</u-col>
			<u-col span="2">
				<u-icon name="zhuanfa" size="34" color="" :label="`转发`" @click="forwardClick"></u-icon>
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
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		// props: ['item','handleThumb','handleUnThumb','handForward'],
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
		data() {
			return {
				
			}
		},
		methods:{
			thumbClick(){
				if(this.item.isThumb){
					this.handUnThumb(this.item._id)
					.then(b=> {
						if(b) 
							this.item.isThumb=false
					})
				}else{
					this.handThumb(this.item._id)
					.then(b=> {
						if(b) 
							this.item.isThumb=true
					})
				}
			},
			openComment(){
				uni.navigateTo({
					url: `/pages/post/post-comment?id=${this.item._id}`
				})
			},
			forwardClick(){
				this.$emit('forwardClick')
				this.handForward(this.item._id)
					.then(b=>{
						if(b){
							this.$refs.uToast.show({
								title: '转发成功',
								type: 'success'
							})
						}
					})
			}
		},
		computed:{
			thumbIconColor(){
				if(this.item.isThumb){
					return "#5677FC";
				}else{
					return "inherit";
				}
			}
		}
	}
</script>

<style>
</style>
