<template>
	<view>
		<u-cell-group :border="groupBorder">
			<u-cell-item title="头像" @click="proxyClick('avatar')">
				<u-image width='100rpx' height='100rpx' slot="right-icon" :src="info.avatar" shape="circle"></u-image>
			</u-cell-item>
			<u-cell-item title="昵称" :value="info.nickname" @click="proxyClick('nickname')"></u-cell-item>
			<u-cell-item title="性别" :value="info.sex" @click="proxyClick('sex')"></u-cell-item>
			<u-cell-item title="出生日期" :value="info.birthday" @click="proxyClick('birthday')"></u-cell-item>
			<u-cell-item title="个人简介" @click="proxyClick('profile')" >
				<view class="u-line-1 u-p-l-30">
					{{info.profile}}
				</view>
			</u-cell-item>
		</u-cell-group>
		<u-calendar v-model="showEditBirthday" @change="handleCalendarChange"></u-calendar>
	</view>
</template>

<script>
	export default {
		props:{
			info:{
				type:Object
			},
			groupBorder:{
				type: Boolean,
				default: true
			},
			allEdit: {
				type:Boolean,
				default:false
			},
			editAvatar:{
				type:Boolean,
				default:false
			},
			editSex:{
				type:Boolean,
				default:false
			},
			editBirthday: {
				type:Boolean,
				default:false
			},
			editProfile: {
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				showEditBirthday: false,
				showEditProfile: false
			}
		},
		methods: {
			checkEdit(name){
				let optionName = 'edit'+ name.charAt(0).toUpperCase();
				if(this.allEdit || this[optionName])
					return true;
				else
					return false;
			},
			proxyClick(name){
				if(this.checkEdit(name)){
					let methodName = name + 'Click';
					this[methodName]();
				}
			},
			avatarClick(){
				console.log('avatarClick')
				uni.chooseImage({
				    count: 1, 
				    success: (res)=> {
						this.headImg = res.tempFilePaths[0]
				    }
				});
			},
			nicknameClick(){
				console.log('nicknameClick')
			},
			sexClick() {
				console.log('sexClick')
				const arr = ['男', '女', '保密']
				uni.showActionSheet({
					itemList: arr,
					success: (res) => {
						this.info.sex = arr[res.tapIndex]
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			birthdayClick(){
				console.log('birthdayClick')
				this.showEditBirthday= true;
			},
			profileClick(){
				console.log('profileClick')
			},
			handleCalendarChange(e){
				this.info.birthday = e.result
			},

		}
	}
</script>

<style>

</style>
