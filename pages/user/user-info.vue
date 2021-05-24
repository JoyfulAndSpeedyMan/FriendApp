<template>
	<view>
		<UserBaseInfo 
		:info="userInfo"
		:editSex="true"
		:editBirthday="true"
		:editProfile="true"
		>
		</UserBaseInfo>
		<view class="bottom-buttons">
			<u-button type="primary" @click="save">保存</u-button>
		</view>
	</view>
</template>

<script>
	import UserBaseInfo from '@/components/user/UserBaseInfo.vue'
	import { mapState } from 'vuex';
	import userApi from '@/common/api/user-axios.api.js'
	export default {
		components:{
			UserBaseInfo
		},
		data() {
			return {
				
			}
		},
		methods: {
			save(){
				console.log('save')
				userApi.updateInfo(this.userInfo)
				console.log('save')
			}
		},
		computed:{
			...mapState('user',[
				'userInfo'
			])
		}
	}
</script>

<style>
.bottom-buttons{
	margin-top: 30rpx;
}
</style>
