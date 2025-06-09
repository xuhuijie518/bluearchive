<template>
  <div id="homev">
    <div class="videoContainer">
      <video autoplay loop muted playsinline class="background-video">
        <source src="/home/background.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="sixteenplus">
      <img src="/home/16+.png" alt="适龄16+"/>
    </div>
    <div class="rside">
      <div class="videoplay hoverarea" @click="openModal2">
        <img src="/home/playv.png" alt="视频播放按钮"/>
      </div>
      <div class="word">
        <div><span style="font-family: 'FZLanTYJW_Xi';margin-right: 10px;">欢迎来到</span>基沃托斯</div>
        <div style="font-size:2.25vw">WELCOME TO KIVOTOS!</div>
      </div>
      <div class="split">
        <img src="/home/10010.png"/>
      </div>
      <div class="swiper  hoverarea" @mousedown="startMouse" @mousemove="moveMouse" @mouseup="endMouse" @mouseleave="endMouse">
        <img 
        v-for="(image, index) in images" 
        :key="index" 
        :class="{ active: index === currentIndex }" 
        :src="image.src" 
        :alt="image.alt" 
         @click="navigateToUrl(image.url)"
        >
      </div>
      <div class="download">
        <div class="down">
          <div class="downpath1 hoverarea">
            <a href="https://apps.apple.com/cn/app/%E8%94%9A%E8%93%9D%E6%A1%A3%E6%A1%88/id6447541184" target="_blank">
              <img src="/home/ios.png" alt="ios下载"/>
              <img src="/home/ios_h.png" class="ignore-hover"/>
            </a>
          </div>
          <div class="downpath2 hoverarea">
            <a href="https://pkg.bluearchive-cn.com/pubplat/gpp/sdkpackage/prod/task_game_apk/official/1.9.1/BlueArchive_official_1.9.1_0718_1.apk" target="_blank">
              <img src="/home/android.png" alt="安卓下载"/>
              <img src="/home/android_h.png" class="ignore-hover"/>
            </a>
          </div>
          <div class="downpath3 hoverarea">
            <a href="https://www.taptap.cn/app/316964?utm_medium=seo&utm_source=rep_l65QiPb3TCF" target="_blank">
              <img src="/home/tap.png" alt="taptap下载"/>
              <img src="/home/tap_h.png" class="ignore-hover"/>
            </a>
          </div>
          <div class="downpath4 hoverarea">
            <a href="https://adl.netease.com/d/g/a11/c/yxwlda" target="_blank">
              <img src="/home/mu.png" alt="mumu下载"/>
              <img src="/home/mu_h.png" class="ignore-hover"/>
            </a>
          </div>
        </div>
        <div class="qr">
          <div class="qrimg"><img src="/home/qr.png" alt="下载二维码"/></div>
          <div class="qrword">扫码下载游戏</div>
        </div>
      </div>
      <div class="warnword">为了维护未成年人的健康上网环境，本游戏暂不支持18岁以下的用户游玩</div>
    </div>
  </div>
  
  <div id="mobilehome">
    <div class="bg2">
      <img src="/home/mobile/bg2.png">
    </div>
    <div class="bg3">
      <img src="/home/mobile/bg3.png">
    </div>
    <div class="bg4">
      <!-- <video   
        autoplay  
        muted
        loop
        playsinline
        class="bg44"  
      >
        <source src="/home/mobile/arona.webm" type="video/mp4" />
      </video> -->
      <div class="bggif">
        <img src="/home/mobile/arona.gif">
      </div>
    </div>
    <div class="sixteenplus">
      <img src="/home/16+.png" alt="适龄16+"/>
    </div>
    <div class="videoplay" @click="openModal2">
      <img src="/home/mobile/video_on.png" alt="视频播放按钮"/>
    </div>
    <div class="mbdown">
      <div class="mbword">
        <div><span style="margin-right: 1.5vw;color: #323232;">欢迎来到</span>基沃托斯</div>
        <div>WELCOME TO KIVOTOS</div>
      </div>
      <div class="mbdown2">
        <div @click="navigateToUrl('https://pkg.bluearchive-cn.com/pubplat/gpp/sdkpackage/prod/task_game_apk/official/1.9.1/BlueArchive_official_1.9.1_0718_1.apk')"><img src="/app/mobile/download.png"></div>
        <div @click="navigateToUrl('https://www.taptap.cn/app/316964?utm_medium=seo&utm_source=rep_l65QiPb3TCF')"><img src="/app/mobile/tapdown.png"></div>
      </div>
      <div class="mbword2">为了维护未成年人的健康上网环境，本游戏暂不支持18岁以下的用户游玩</div>
    </div>
    <div class="copyright">©版权信息</div>
  </div>
</template>

<style scoped>
#homev{
  width: 100%;
  height: 100%;
  background-image:url('/home/bg.png');
  background-size: cover;
  background-repeat: repeat;
  background-size: 100%;
}
/*@media screen and (min-width: 1900px) {
  .background-video {
    width: 100%;
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
    visibility: visible;
  }
}*/

@media screen and (min-width: 829px) {
.videoContainer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -100;
}
.background-video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
img {
  width: 100%;
  object-fit: cover;
}
.sixteenplus {
  width: 5.5%;
  position: fixed;
  bottom: 9%;
  left: 3.4%;
}
.rside {
  width: 28.3%;
  height: 70.2%;
  position: fixed;
  right: 5%;
  top: 29.8%;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.videoplay {
  width: 17.5%;
}
.word {
  width: 100%;
  height: 27%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  font-size: 3.4vw;
  color: white;
  font-family: 'FZLanTYJW_Cu';
}
.split {
  width: 100%;
  height: 9%;
  display: flex;
  align-items: center;
}
.swiper {
  position: relative;
  width: 100%;
  height: 23.5%;
  overflow: hidden;
}
.swiper img {
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: 0;
}
.swiper img.active {
  opacity: 1;
  z-index: 1;
}
.download {
  width: 100%;
  height: 21%;
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.down {
  height: 81%;
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
}
.down div {
  position: relative;
  width: 48.7%;
  height: 50%;
  display: flex;
  margin-bottom: 2.5px;
}
.down div img {
  position: absolute;
  width: 100%;
  transition: opacity 0.3s ease;
}
.down div img:hover:not(.ignore-hover) {
  opacity: 0;
}
.ignore-hover {
  z-index: -1;
}

.qr {
  height: 81%;
  width: 16.8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
.qrimg {
  width: 100%;
  height: 83%;
}
.qrword {
  width: 100%;
  height: 17%;
  font-size: .73vw;
  text-align: center;
  color: #d8d8d8;
  font-family: 'SourceHanSansCN-Bold';
}
.warnword {
  width: 100%;
  height: 3%;
  font-family: 'SourceHanSansCN-Regular';
  color: #fff;
  opacity: .3;
  align-self: start;
  font-size: .62vw;
  margin-top: .5rem;
}
#mobilehome {
  visibility: hidden;
}
}


@media screen and (max-width: 828px) {
  * {
    cursor: none;
  }
  img {
    -webkit-user-drag: none;
    width: 100%;
    height: auto;
  }
  #homev {
    visibility: hidden;
  }
  #mobilehome{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: url('/home/mobile/bg.png') no-repeat;
    background-size: 100%;
  }
  .bg2 {
    position: fixed;
    bottom: -1vw;
    width: 100%;
    z-index: -2;
  }
  .bg3 {
    position: fixed;
    width: 28%;
    bottom: 16vw;
    z-index: -1;
  }
  .bg4 {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -3;
    overflow: hidden;
  }
  .bggif {
    position: absolute;
    width: 100%;
    top: 10vw;
  }
  .bg44 {
    position: absolute;
    top: 58%;
    left: 50%;
    width: auto;
    height: 120%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    z-index: -1;
  }
  .sixteenplus {
    position: fixed;
    width: 10.5%;
    bottom: 15vw;
    left: 18vw;
  }
  .videoplay {
    position: fixed;
    width: 8.5%;
    bottom: 40vw;
    right: 4.5vw;
  }
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 30;
  }
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: auto;
  }
  .modal-content video {
    width: 100%;
  }
  #close {
    position: absolute;
    top: -8vw;
    right: -3.8vw;
    width: 6vw;
  }
  .fade1-enter-active, .fade1-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade1-enter-from {
    opacity: 0;
  }
  .fade1-enter-to{
    opacity: 1;
  }
  .fade1-leave-from {
    opacity: 1;
  }
  .fade1-leave-to {
    opacity: 0;
  }
  .mbdown {
    position: fixed;
    width: 63vw;
    height: 23vw;
    bottom: 16vw;
    left: 32vw;
  }
  .mbword {
    position: absolute;
    top: 2vw;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .mbword div:first-child {
    width: 100%;
    font-family: FZLanTYK_Zhong;
    font-size: 7.6vw;
    line-height: 1;
    color: #1f90fa;
    white-space: nowrap;
    text-align: center;
  }
  .mbword div:last-child {
    width: 100%;
    font-family: FZLanTYJW_Cu;
    color: #1289f9;
    font-size: 3.2vw;
    width: 100%;
    letter-spacing: 1.43vw;
    white-space: nowrap;
    text-align: center;
    margin-top: 1.5vw;
  }
  .mbdown2 {
    position: absolute;
    bottom: -1.5vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .mbdown2 div {
    width: 46%;
    height: auto;
  }
  .mbword2 {
    position: absolute;
    bottom: -4.5vw;
    left: -2.5vw;
    width: 100%;
    font-size: 2.1vw;
    white-space: nowrap;
    color: #939393;
    font-family: FZLanTYJW_Xi;
  }
  .copyright {
    position: fixed;
    bottom: 6.5vw;
    left: 5.5vw;
    text-decoration: underline;
    font-size: 2.5vw;
  }
}
</style>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, inject, onBeforeUnmount } from 'vue';
import { useHoverFollower } from '@/components/useHoverFollower'
// 使用 import.meta.glob 批量导入图片
const images2 = import.meta.glob('@/assets/home/*.png', { eager: true });
// 将导入的图片转换为需要的格式
const imageMap = Object.keys(images2).reduce((acc, path) => {
    const key = path.split('/').pop().replace('.png', ''); // 提取文件名作为 key
    acc[key] = images2[path].default; // 获取图片的默认导出
    return acc;
}, {});

const isPlaying = inject('isPlaying');
const isVisible2 = inject('isVisible2');
let intervalId;
const images = ref([
  { src: imageMap['r1'], alt: 'Image 1', url: 'https://bluearchive-cn.com/news/1041' },
  { src: imageMap['r2'], alt: 'Image 2', url: 'https://bluearchive-cn.com/news/1119' },
  { src: imageMap['r3'], alt: 'Image 3', url: 'https://bluearchive-cn.com/news/1008' },
]);
const currentIndex = ref(0);
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};
const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};
const startSlideshow = () => {
  intervalId = setInterval(() => {
    nextImage();
  }, 4000);
};
const navigateToUrl = (url) => {
  window.open(url, '_blank');
};

let startX = 0;
let isDragging = false;
const startMouse = (event) => {
  startX = event.clientX;
  isDragging = true;
  clearInterval(intervalId);
  startSlideshow();
};
const moveMouse = (event) => {
  if (!isDragging) return;
  const endX = event.clientX;
  const diffX = startX - endX;
  if (diffX > 50) {
    // Swiped left
    nextImage();
    isDragging = false;
  } else if (diffX < -50) {
    // Swiped right
    prevImage();
    isDragging = false;
  }
};
const endMouse = () => {
  if (isDragging) {
    clearInterval(intervalId);
    startSlideshow();
    isDragging = false;
  }
};
onMounted(() => {
  startSlideshow();
});
onBeforeUnmount(() => {
  clearInterval(intervalId);
});


const openModal2 = () => {
  isVisible2.value = true;
  isPlaying.value = false;
};

const { hoverArea, followImage, followImage2 } = useHoverFollower('[class*="hoverarea"]', 'followImage', 'followImage2');
</script>
