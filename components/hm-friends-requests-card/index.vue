<template>
  <view class="hm-friends-requests-card">
    <view class="box">
      <view class="hd">
        <text class="friendRequest">{{ options.friendRequest }}</text>
        <image class="titleClass" :src="options.titleClass" @click="moreDotClick"/>
      </view>
	  <view class="bd" style="height: 30rpx;"></view>
	  <view class="bd" v-for="(item,index) in list" :key="index" @click="clickItem(index)">
		  <view class="container" >
		    <image class="userpng" :src="item.avatar" />
		    <view class="outer">
		      <text class="name">{{ item.nickname }}</text>
		      <text class="address1">{{ item.requestMsg }}</text>
		    </view>
		  </view>

		  <view class="row1" @click.stop="clickReject(index)">
		    <image class="erroimg" :src="options.erroimg" />
		  </view>
		  <view class="addClass" @click.stop="clickAdd(index)">
		    <image class="addimg" :src="options.addimg" />
		  </view>
	  </view>
	  
    </view>
  </view>
</template>
<script>
export default {
  name: 'HmFriendsRequestsCard',
  props: {
    dataId: {
      type: String,
      default: 'hm-friends-requests-card'
    },
	list:{
		type:Array
	},
    options: {
      type: Object,
      default: function() {
        return {
          friendRequest: '好友请求',
          titleClass:
            '/static/hm-friends-requests-card/images/img_24029_0_5.png',
          erroimg:
            '/static/hm-friends-requests-card/images/img_24029_0_2.png',
          addimg:
            '/static/hm-friends-requests-card/images/img_24029_0_1.png',
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
	  moreDotClick(){
		  this.$emit('moreDotClick')
	  },
	  clickItem(id){
		  this.$emit('clickItem',id)
	  },
	  clickReject(id){
		  this.$emit('clickReject',id)
	  },
	  clickAdd(id){
		  this.$emit('clickAdd',id)
	  }
  }
};
</script>
<style>
@import './index.response.css';
</style>
