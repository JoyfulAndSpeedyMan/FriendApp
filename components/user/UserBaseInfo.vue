<template>
	<view>
		<u-cell-group :border="groupBorder">
			<u-cell-item title="头像" @click="proxyClick('avatar')">
				<u-image width='100rpx' height='100rpx' slot="right-icon" :src="info.avatar" shape="circle"></u-image>
			</u-cell-item>
			<u-cell-item title="备注" :value="info.nickname" @click="proxyClick('noteName')" v-if="showNoteName">
				
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
		<u-popup v-model="showPopup" mode="center" @close="popupClose">
			<view class="input">
				<u-input v-model="text" type="textarea"></u-input>
				<view style="margin-top: 20rpx;">
					<u-button @click="confirm">确定</u-button>
				</view>
			</view>
		</u-popup>
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
			showNoteName: {
				type: Boolean,
				default: false
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
				showEditProfile: false,
				showPopup: false,
				currentEdit: '',
				text:'',
				oldText: ''
			}
		},
		methods: {
			checkEdit(name){
				let optionName = 'edit'+ name.charAt(0).toUpperCase() + name.substr(1);
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
				this.currentEdit = 'nickname'
				
				this.text = this.info.nickname
				this.oldText = this.text
				this.showPopup=true;
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
				this.currentEdit = 'profile'
				
				this.text = this.info.profile
				this.oldText = this.text
				this.showPopup=true;
			},
			handleCalendarChange(e){
				this.info.birthday = e.result
			},
			popupClose(){
				this.showPopup=false;
				this.text = this.oldText
			},
			confirm(){
				this.info[this.currentEdit] = this.text
				this.showPopup=false;
			}
		}
	}
</script>

<style>
.input{
	padding: 30rpx;
	width: 400rpx;
}
</style>
