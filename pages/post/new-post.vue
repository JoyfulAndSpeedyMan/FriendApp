<template>
	<view>
		<u-toast ref="uToast" />
		<u-field
			v-model="value"
			:label-width="0"
			required
			:error-message="errorMessage"
			:field-style="fieldStyle"
			:focus="true"
			type="textarea"
		>
		</u-field>
		<view>
			<u-button type="primary" @click="post">发布</u-button>
		</view>
	</view>
</template>

<script>
	import postApi from '@/common/api/post-axios.api.js'
	export default {
		data() {
			return {
				value: '',
				errorMessage: '内容不能为空',
				fieldStyle:{
					'font-size': '1.2em',
					// 'min-height': '400rpx',
					'background-color': '#fbffe7',
					'padding': '15rpx',
					'border-radius': '10rpx'
				}
			}
		},
		methods: {
			post(){
				postApi.post(this.value)
					.then(res=>{
						this.$refs.uToast.show({
							title: res.message,
							type: 'success'
						})
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
.s{
	border-radius: 10rpx;
}
</style>
