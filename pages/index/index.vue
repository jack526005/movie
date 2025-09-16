<template>
	<view class="video-container"  >
		<video :src="str" v-if="str" object-fit="contain" muted autoplay="false" loop id="myVideo" ></video>
		<view v-else>视频加载中...</view>
	</view>
	
</template>

<script setup>
import { ref } from 'vue'
import { onLoad, onPullDownRefresh} from '@dcloudio/uni-app'
let str=ref('');

const getVideoData = () => {
  uni.request({
    url: 'https://v2.api-m.com/api/meinv',
    data: { type: 2, id: 1 },
    success: (res) => {
       str.value=res.data.data
	 
      uni.stopPullDownRefresh()
	 
    },
    fail: () => {
      uni.stopPullDownRefresh()
    }
  })
};

onLoad(() => {
  getVideoData()
});

onPullDownRefresh(() => {
  getVideoData() // 这里不要调用 stopPullDownRefresh
});




</script>

<style scoped>


		
.video-container {
  width: 100%;
   height: 100vh;       /* 父容器宽度占满屏幕 */
  display: flex; /* 开启Flex布局 */
  justify-content: center; /* 子元素水平居中 */
  align-items: center; /* 子元素垂直居中 */
  background-color: #f5f5f5; /* 背景色（视频加载前显示） */
}


video {
	height: 100%;
	width: 100%;
 
}
</style>
