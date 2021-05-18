<template>
	<view>
		<u-row gutter="16" justify="start">
			<u-col span="6">
				<u-row gutter="16" justify="start">
					<u-col span="4">
						<u-avatar :src="item.avatar" mode="circle" @click="$emit('avatarClick')"></u-avatar>
					</u-col>
					<u-col span="8">
						<span class="nickname">{{item.nickname}}</span>
					</u-col>
				</u-row>
			</u-col>
			<u-col span="6">
				<span>{{item.createTime}}</span>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		props:["item"],
		name: "PostUserLine",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.nickname {
		font-size: 1.1em;
	}
</style>
