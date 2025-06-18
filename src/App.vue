<template>
  <!-- <div class="main" 
    @touchstart="startTouch" 
    @touchmove="moveTouch" 
    @touchend="endTouch"
  > -->
  <div class="main">
    <video   
      v-if="isVideoPlaying"  
      @ended="handleVideoEnd"  
      autoplay  
      muted  
      style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 39;"  
    >
      <source src="/app/transfrom.webm" type="video/webm" />
    </video>
    <img id="followImage" :src="mouseSrc"/>
    <img id="followImage2" src="/app/mouse3.png"/>
    <div class="logo">
      <img alt="logo" :src="logoSrc"/>  
    </div>
    <div class="wrapper">
      <nav :class="classRet">
        <div v-for="(link, index) in navLinks" :key="index" class="hoverarea">
          <RouterLink
            :to="link.to"
            @click="playVideo();closeClick(link.num);"
            :class="{ 'no-click': link.num === disabledIndex, 'blue-text': ((disabledIndex === 3 || disabledIndex === 2) && index === 2) || link.num === disabledIndex }"
          >
            {{ link.text }}
          </RouterLink>
        </div>
      </nav>
      <div class="icon">
        <div :class="musicclass" :style="{ backgroundColor: iconColor }" @click="change" class="hoverarea"></div>
        <div class="login_icon hoverarea" :style="{ backgroundColor: iconColor }" @click="navigateToUrl('https://account.yostar.cn/login')"></div>
        <div class="share_icon  hoverarea" :style="{ backgroundColor: iconColor }" @click="controlShow"></div>
      </div>
    </div>
    <div class="sharecontent" :style="{ opacity: isShow ? 1 : 0 , visibility: isShow ? 'visible' : 'hidden' }">
      <div class="bili" :style="{ backgroundColor: iconColor }" @click="navigateToUrl('https://space.bilibili.com/3493265644980448')"></div>
      <div class="tap" :style="{ backgroundColor: iconColor }" @click="navigateToUrl('https://www.taptap.cn/app/316964?utm_medium=seo&utm_source=rep_l65QiPb3TCF')"></div>
      <div class="wb" :style="{ backgroundColor: iconColor }" @click="navigateToUrl('https://weibo.com/u/6011443154')"></div>
      <div class="wx" :style="{ backgroundColor: iconColor }" @click="controlShowqr"></div>
    </div>
    <div class="wxqr" @click="controlShowqr" :style="{ opacity: isShowqr ? 1 : 0 , visibility: isShowqr ? 'visible' : 'hidden' }">
      <div class="qrimg"  @click.stop><img src="/app/wxQR.png"></div>
      <div class="close hoverarea"><img src="/app/close.png"></div>
    </div>
    <div class="scroll">  
      <div v-for="(char, index) in transformedChars" :key="index" class="scroll_char" :style="{ color: char === '\u25C0' ? '#008cff' : '#afb1b5' }">  
        {{ char }}
      </div>
      <div class="scroll_font" :style="{color: scrollColor}">
        SCROLL
      </div>  
    </div>
    <div class="pages">
      0 {{ page }} / 0 5
    </div>
    <div id="content">
      <RouterView/>
    </div>


    <!-- 手机端新增 -->
    <div id="content2">
      <swiper 
        :direction="'vertical'"
        :slides-per-view="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <HomeView/>
        </swiper-slide>
        <swiper-slide>
          <NewsView/>
        </swiper-slide>
        <swiper-slide>
          <SetView/>
        </swiper-slide>
        <swiper-slide>
          <SetViewChild/>
        </swiper-slide>
        <swiper-slide>
          <CharacterView/>
        </swiper-slide>
        <swiper-slide>
          <PhotoView/>
        </swiper-slide>
      </swiper>
    </div>
    <transition name="fade1">
      <div class="modal2" v-if="isVisible2" @click="closeModal2">
        <div class="modal-content2" @click.stop>
          <video controls :src="videoUrl2" autoplay></video>
          <div id="close2" @click="closeModal2" @mousemove="followMouse" @mouseleave="hideImage">
            <img src="/home/close.png" />
          </div>
        </div>
      </div>
    </transition>
    <!-- <div class="mblogo"><img v-if="isHomeRoute" src="/app/LOGO2.png"></div> -->
    <div class="wxqr" @click="controlShowqr2" :style="{ opacity: isShowqr2 ? 1 : 0 , visibility: isShowqr2 ? 'visible' : 'hidden' }">
      <div class="qrimg"  @click.stop><img src="/app/wxQR.png"></div>
    </div>
    <div class="floating-box" v-if="mobileIndex != 5 && morenewshow == false">
        SCROLL
    </div>
    <div class="mobilenav" @click="navLink"><img src="/app/mobile/nav.png"></div>
    <transition
      name="fade1"
      mode="out-in"
    >
      <div class="mbnav" v-show="show">
        <div class="mblogo"><img src="/app/LOGO2.png"></div>
        <div class="mbclose" @click="navLink"><img src="/app/mobile/close.png"></div>
        <div class="mbnavlink">
          <div v-for="(link, index) in navLinks" :key="index" class="mbnavchild">
            <!-- <RouterLink
              :to="link.to"
              style="text-decoration: none;"
              class="mbnavchild2"
              @click="playVideo();closeClick(link.num);navLink();"
              :class="{ 'no-click': link.num === disabledIndex, 'activenav': ((disabledIndex === 3 || disabledIndex === 2) && index === 2) || link.num === disabledIndex }"
            >
              <div class="mbcn" :style="{ color: link.num === disabledIndex ? '#1289f9':'#2b2b2b' }">{{ link.text }}</div>
              <div class="down" :style="{ color: link.num === disabledIndex ? '#1289f9':'#afb1b5' }">
                <div class="mben">{{ link.en }}</div>
                <div class="mbtwigtext">.........................</div>
                <div class="mbno" :class="{ 'ambno': link.num === disabledIndex }">0{{ index+1 }}</div>
              </div>
            </RouterLink> -->
            <div
              style="text-decoration: none;"
              class="mbnavchild2"
              @click="playVideo();closeClick(link.num);goToSlide(link.num);navLink();"
              :class="{ 'no-click': link.num == mobileIndex, 'activenav': ((mobileIndex == 3 || mobileIndex == 2) && index == 2) || link.num == mobileIndex }"
            >
              <div class="mbcn" :style="{ color: link.num == mobileIndex ? '#1289f9':'#2b2b2b' }">{{ link.text }}</div>
              <div class="down" :style="{ color: link.num == mobileIndex ? '#1289f9':'#afb1b5' }">
                <div class="mben">{{ link.en }}</div>
                <div class="mbtwigtext">.........................</div>
                <div class="mbno" :class="{ 'ambno': link.num == mobileIndex }">0{{ index+1 }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="sharecontent2">
          <div @click="navigateToUrl('https://space.bilibili.com/3493265644980448')"><img src="/app/bili.png"></div>
          <div @click="navigateToUrl('https://www.taptap.cn/app/316964?utm_medium=seo&utm_source=rep_l65QiPb3TCF')"><img src="/app/tap.png"></div>
          <div @click="navigateToUrl('https://weibo.com/u/6011443154')"><img src="/app/wb.png"></div>
          <div @click="controlShowqr2"><img src="/app/wx.png"></div>
        </div>
        <div class="mbsplit"><img src="/app/mobile/split.png"></div>
        <div class="mbdownload">
          <div @click="navigateToUrl('https://pkg.bluearchive-cn.com/pubplat/gpp/sdkpackage/prod/task_game_apk/official/1.9.1/BlueArchive_official_1.9.1_0718_1.apk')"><img src="/app/mobile/download.png"></div>
          <div style="width: 3vw"></div>
          <div @click="navigateToUrl('https://www.taptap.cn/app/316964?utm_medium=seo&utm_source=rep_l65QiPb3TCF')"><img src="/app/mobile/tapdown.png"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
@font-face {  
  font-family: 'FZLanTYJW_Cu'; 
  src: url('/app/FZLanTYJW_Cu.c5f8d267.TTF') format('truetype');
}
@font-face {  
  font-family: 'xhy'; 
  src: url('/app/xhy.5ad8d395.TTF') format('truetype');
}
@font-face {  
  font-family: 'Gilroy-ExtraBold'; 
  src: url('/app/FontsFree-Net-Gilroy-ExtraBold.dc45e720.ttf') format('truetype');
}
@font-face {  
  font-family: 'FZLanTYJW_Xi'; 
  src: url('/app/FZLanTYJW_Xi.31158e7c.TTF') format('truetype');
}
@font-face {  
  font-family: 'junegull_rg'; 
  src: url('/app/junegull_rg.69bf2de6.ttf') format('truetype');
}
@font-face {  
  font-family: 'SourceHanSansCN-Bold'; 
  src: url('/app/SourceHanSansCN-Bold.97e5eff6.otf') format('opentype');
}
@font-face {  
  font-family: 'SourceHanSansCN-Regular'; 
  src: url('/app/SourceHanSansCN-Regular.14ec9d09.otf') format('opentype');
}
@font-face {  
  font-family: 'TVPS-Vain-Capital'; 
  src: url('/app/TVPS-Vain-Capital-2.cca90a05.ttf') format('truetype');
}
@font-face {  
  font-family: 'SourceHanSansCN-Heavy'; 
  src: url('/app/SourceHanSansCN-Heavy.f178cae1.otf') format('opentype');
}
@font-face {  
  font-family: 'SourceHanSansCN-Normal'; 
  src: url('/app/SourceHanSansCN-Normal.df5ff3ec.otf') format('opentype');
}
@font-face {  
  font-family: 'Gilroy-Light'; 
  src: url('/app/Gilroy-Light-11.de1f8bbf.otf') format('opentype');
}
@font-face {  
  font-family: 'BUNGEE'; 
  src: url('/app/BUNGEE.8703e361.TTF') format('truetype');
}
@font-face {  
  font-family: 'FZLanTYK_Zhong'; 
  src: url('/app/FZLanTYK_Zhong.c10069d1.OTF') format('opentype');
}
.main {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}
* {
  cursor: none;
}
.no-click {  
  pointer-events: none;   
  cursor: not-allowed;  
}
#followImage {
  position: absolute;
  width: 2.25vw; 
  height: auto; 
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease; 
  z-index: 50;
}
#followImage2 {
  position: absolute;
  width: 2.1vw;
  height: auto;
  pointer-events: none; 
  opacity: 0;
  transition: opacity 0.2s ease; 
  z-index: 40;
}
#content{
  position: absolute;
  width: 100%;
  height: 100%;
}
.fade1-enter-active,
.fade1-leave-active {
  transition: opacity 0.5s;
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


@media screen and (min-width: 829px) {
img {
  -webkit-user-drag: none;  /* 禁用拖动（WebKit） */
  width: 100%;
}
#content2{
  display: none;
}
.scroll {
  position: fixed;
  bottom: 3.5%;
  left: 0;
  padding: 0 2px;
  height: 4%;
  width: 26.5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 28;
}
.scroll_char {
  font-size: 1.25vw;
}
.scroll_font {
  padding-top: 2px;
  font-size: 0.75vw;
  font-family: 'Gilroy-ExtraBold';
  color: white;
}

.pages {
  position: fixed;
  bottom: 0.6%;
  left: 0;
  height: 3%;
  width: 11.8%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #b2b4b8;
  font-family: 'junegull_rg';
  font-size: 0.85vw;
  z-index: 30;
}

.logo{
  width: 11.7%;
  position: fixed;
  top: 4.1%;
  left: 3.85%;
  z-index: 30;
}

.logo img{
  width: 100%;  
  object-fit: contain;
}

.wrapper{
  position: fixed;
  width: 51.1%;
  height: 4.8%;
  z-index: 30;
  top: 5.8%;
  right: 0;
  display: flex;
  justify-content: space-between;
}

nav {
  width: 62.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon{
  position: relative;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
}
.sharecontent {
  position: fixed;
  width: 13.6%;
  height: 4.8%;
  z-index: 30;
  top: 11%;
  right: 4.8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease ;
}

.music_icon {
  position: absolute;
  aspect-ratio: 1 / 1;
  height: 87%;
  left: 3%;
  -webkit-mask: url('/app/music.png') no-repeat center;
  mask: url('/app/music.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}
.music_icon:hover {
  -webkit-mask: url('/app/music_h.png') no-repeat center;
  mask: url('/app/music_h.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}
.musicoff_icon {
  position: absolute;
  aspect-ratio: 1 / 1;
  height: 87%;
  left: 3%;
  -webkit-mask: url('/app/music_off.png') no-repeat center;
  mask: url('/app/music_off.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}
.musicoff_icon:hover {
  -webkit-mask: url('/app/music_off_h.png') no-repeat center;
  mask: url('/app/music_off_h.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.login_icon {
  position: absolute;
  aspect-ratio: 1 / 1;
  height: 87%;
  left: 26.5%;
  -webkit-mask: url('/app/login.png') no-repeat center;
  mask: url('/app/login.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}
.login_icon:hover {
  -webkit-mask: url('/app/login_h.png') no-repeat center;
  mask: url('/app/login_h.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.share_icon {
  position: absolute;
  aspect-ratio: 1 / 1;
  height: 87%;
  left: 49%;
  -webkit-mask: url('/app/share.png') no-repeat center;
  mask: url('/app/share.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}
.share_icon:hover {
  -webkit-mask: url('/app/share_h.png') no-repeat center;
  mask: url('/app/share_h.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}
.bili {
  aspect-ratio: 1 / 1;
  height: 80%;
  -webkit-mask: url('/app/bili.png') no-repeat center;
  mask: url('/app/bili.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
  transition: all .3s ease;
}
.bili:hover {
  background-color: #21bbff !important;
}
.tap {
  aspect-ratio: 1 / 1;
  height: 80%;
  -webkit-mask: url('/app/tap.png') no-repeat center;
  mask: url('/app/tap.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
  transition: all .3s ease;
}
.tap:hover {
  background-color: #21bbff !important;
}
.wb {
  aspect-ratio: 1 / 1;
  height: 80%;
  -webkit-mask: url('/app/wb.png') no-repeat center;
  mask: url('/app/wb.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
  transition: all .3s ease;
}
.wb:hover {
  background-color: #21bbff !important;
}
.wx {
  aspect-ratio: 1 / 1;
  height: 80%;
  -webkit-mask: url('/app/wx.png') no-repeat center;
  mask: url('/app/wx.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
  transition: all .3s ease;
}
.wx:hover {
  background-color: #21bbff !important;
}
.wxqr {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 35;
  transition: all 0.5s ease ;
}
.wxqr .qrimg {
  position: absolute;
  width: 15.5%;
  height: 40.5%;
  top: 29.75%;
  left: 42.25%;
}
.wxqr .close {
  position: absolute;
  width: 2.9%;
  top: 30.5%;
  left: 58.3%;
}

nav a {
  font-family: 'FZLanTYJW_Cu';
  font-size: 0.95vw;
  text-decoration: none;
  letter-spacing: 4px;
}
nav.home a {
  color: white;
}
nav.default a {
  color: #666666;
}
nav a:hover {
  color: #21bbff;
}
nav a.blue-text{
  color: #21bbff;
}

.modal2 {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 31;
}
.modal-content2 {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72vw;
  height: auto;
}
.modal-content2 video {
  width: 100%;
}
#close2 {
  position: absolute;
  top: 0;
  right: -3.8vw;
  width: 2.4vw;
}

.modal, .mobilenav, .mbnav, .mblogo, .sharecontent2, .mbsplit, .mbdownload, .floating-box {
  visibility: hidden;
}
}

@media screen and (max-width: 828px) {
.swiper {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
#content{
  display: none;
}
#content2{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper {
  height: 100%;
  overflow: hidden;
}
.swiper-slide {
  height: 100vh;
  overflow: hidden;
}
* {
  cursor: none;
}
#followImage {
  visibility: hidden;
}
#followImage2 {
  visibility: hidden;
}
img {
  -webkit-user-drag: none;
  width: 100%;
  height: auto;
}
.logo, .scroll, .pages {
  visibility: hidden;
}
nav {
  visibility: hidden;
}
.mblogo {
  position: fixed;
  width: 26.8vw;
  height: auto;
  top: 3vw;
  left: 5vw;
  z-index: 5;
}
.musicoff_icon {
  position: fixed;
  width: 5.5vw;
  height: 5.5vw;
  top: 6vw;
  right: 23.5vw;
  -webkit-mask: url('/app/music_off.png') no-repeat center;
  mask: url('/app/music_off.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
  background-color: #7d7d7d !important;
  z-index: 3;
}
.music_icon {
  position: fixed;
  width: 5.5vw;
  height: 5.5vw;
  top: 6vw;
  right: 23.5vw;
  -webkit-mask: url('/app/music.png') no-repeat center;
  mask: url('/app/music.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
  background-color: #7d7d7d !important;
  z-index: 3;
}
.login_icon {
  position: fixed;
  width: 5.5vw;
  height: 5.5vw;
  top: 6vw;
  right: 14vw;
  -webkit-mask: url('/app/login.png') no-repeat center;
  mask: url('/app/login.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
  background-color: #7d7d7d !important;
  z-index: 3;
}
.mobilenav {
  position: fixed;
  width: 5.5vw;
  height: auto;
  top: 6.5vw;
  right: 4vw;
  display: flex;
  align-items: center;
  z-index: 3;
}

.mbnav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 4;
}
.mbclose {
  position: absolute;
  width: 5.5vw;
  height: auto;
  top: 11.5vw;
  right: 10vw;
}
.mbnavlink {
  position: absolute;
  top: 17.5vw;
  width: 100%;
  height: 113vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.mbnavchild {
  width: 87%;
  height: 15vw;
  margin-top: 7.5vw;
  position: relative;
}
.mbnavchild2 {
  position: absolute;
  width: 100%;
  height: 100%;
}
.activenav {
  border-radius: 1.5vw;
  box-shadow: 0 0 1vw rgba(17, 137, 249, 0.5);
}
.activenav::before {
  content: ''; 
  position: absolute;
  left: -2vw;
  top: 40%;
  transform: translateY(-50%);
  width: 3vw;
  height: 3.5vw;
  background: url('/app/mobile/nav2.png') no-repeat;
  background-size: 100%;
}
.mbcn {
  position: absolute;
  top: 3.5vw;
  left: 3.9vw;
  font-family: FZLanTYJW_Cu;
  letter-spacing: 1vw;
  font-size: 3.5vw;
  color: #2b2b2b;
  line-height: 1;
}
.down {
  position: absolute;
  width: 91%;
  top: 6.5vw;
  left: 3.9vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  color: #afb1b5;
}
.mben {
  font-family: TVPS-Vain-Capital;
  font-size:4.1vw;
  line-height: 1;
  background-color: white;
  z-index: 1;
}
.mbtwigtext {
  letter-spacing: 1.1vw;
  margin-left: -3vw;
  line-height: 1;
}
.mbno {
  font-family: BUNGEE;
  font-size: 4.8vw;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: .15vw #AFB1B5;
  font-style: oblique;
}
.ambno {
  -webkit-text-stroke-color: #1289f9;
}
.sharecontent2 {
  position: absolute;
  width: 100%;
  height: 16vw;
  top: 130vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.sharecontent2 div {
  width: 8%;
  height: auto;
}
.mbsplit {
  position: absolute;
  top: 142vw;
  left: 8%;
  width: 84%;
  height: auto;
}
.mbdownload {
  position: absolute;
  top: 150vw;
  width: 100%;
  height: 9vw;
  display: flex;
  justify-content: center;
}
.mbdownload div {
  width: 30%;
  height: auto;
}
.wxqr {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #ffffffbd;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease ;
}
.wxqr .qrimg {
  width: 40%;
  height: auto;
}
.floating-box {
  position: fixed;
  bottom: 4vw;
  left: 25vw;
  width: 50vw;
  height: 5vw;
  font-size: 2.45vw;
  font-family: TVPS-Vain-Capital;
  color: #1289f9;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 2s ease-in-out infinite;
  z-index: 1;
}
.floating-box::after {
  content: "";
  position: absolute;
  bottom: -2vw;
  left: 50%;
  transform: translate(-50%);
  width: .704rem;
  height: .512rem;
  clip-path: polygon(100% 0, 0 0, 50% 100%);
  background-color: #1289f9;
}
@keyframes float {
  0%, 100% {
      transform: translateY(0);
  }
  50% {
      transform: translateY(-2vw);
  }
}

.modal2 {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
}
.modal-content2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: auto;
}
.modal-content2 video {
  width: 100%;
}
#close2 {
  position: absolute;
  top: -8vw;
  right: -3.8vw;
  width: 6vw;
}
}
</style>

<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { ref, reactive, computed, onMounted, onUnmounted, watch, provide, watchEffect, onBeforeUnmount } from 'vue';

const isPlaying = ref(false);
const isVisible2 = ref(false); 
const morenewshow = ref(false); 
provide('isPlaying', isPlaying); 
provide('isVisible2', isVisible2);
provide('morenewshow', morenewshow); 
const route = useRoute();

// 使用 import.meta.glob 批量导入音频文件
const audioFiles = import.meta.glob('@/assets/app/*.mp3', { eager: true });
// 将导入的音频转换为需要的格式
const audioMap = Object.keys(audioFiles).reduce((acc, path) => {
    const key = path.split('/').pop().replace('.mp3', ''); // 提取文件名作为 key
    acc[key] = audioFiles[path].default; // 获取音频的默认导出
    return acc;
}, {});
// 使用特定的音频文件
const audio = ref(new Audio(audioMap['bgm2']));
// const audio = ref(new Audio('/app/bgm3.mp3'));

audio.value.loop = true;
const logoSrc = computed(() => {  
  return route.path === '/home' ? imageMap['LOGO'] : imageMap['LOGO2']  
})
const mouseSrc = computed(() => {  
  return route.path === '/home' ? imageMap['mouse'] : imageMap['mouse2'] 
})
const classRet = computed(() => {
  return route.path === '/home' ? 'home' : 'default'
}) 
const iconColor = computed(() => {
  return route.path === '/home' ? 'white' : '#7d7d7d'
}) 
const scrollColor = computed(() => {
  return route.path === '/home' ? 'white' : '#afb1b5'
}) 
const page = ref(1)
watch(() => route.path, (newPath) => {
  switch (newPath) {
    case '/home':
      page.value = 1;
      break;
    case '/news':
      page.value = 2;
      break;
    case '/set':
      page.value = 3;
      break;
    case '/setchild':
      page.value = 3;
      break;
    case '/character':
      page.value = 4;
      break;
    case '/photo':
      page.value = 5;
      break;
    default:
      page.value = 1;
  }
});
function change(){
  isPlaying.value = !isPlaying.value;
}
watchEffect(() => {
  if (isPlaying.value == false) {
    audio.value.pause();
    audio.value.currentTime = 0;
  } else {
    audio.value.play();
  }
});
const musicclass = computed(() => {
  return isPlaying.value == false ? 'musicoff_icon' : 'music_icon'
})


const navLinks = ref([  
  { to: '/home', text: '首页', num: 0, en:'HOME'},
  { to: '/news', text: '快讯', num: 1, en:'NEWS'},
  { to: '/set', text: '设定', num: 2, en:'WORLD'},
  { to: '/character', text: '档案', num: 4, en:'ARCHIVE'},
  { to: '/photo', text: '图集', num: 5, en:'PICTURES' },
]); 


//滚动动画效果
const chars = ref(Array.from({ length: 25 }, () => '\u00B7'));  
let currentTransformIndex = ref(-1); 
const transformedChars = computed(() => {  
  return chars.value.map((char, index) => {  
    if (index === currentTransformIndex.value) {  
      return char === '\u00B7' ? '\u25C0' : '\u00B7';
    }
    return char; 
  });  
}); 
const animateChars = () => {
    currentTransformIndex.value = (currentTransformIndex.value - 1 + chars.value.length) % chars.value.length;
};
onMounted(() => {
  const intervalId = setInterval(animateChars, 150);
  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
}); 

const container = ref(null);
const hoverArea = ref([]);
const followImage = ref(null);
const followImage2 = ref(null);
onMounted(() => {
  container.value = document.getElementsByClassName('main')[0];
  hoverArea.value = document.querySelectorAll('[class*="hoverarea"]');
  followImage.value = document.getElementById('followImage');  
  followImage2.value = document.getElementById('followImage2');
  container.value.addEventListener('mousemove', (event) => {
    const viewportWidth = window.innerWidth;
    const x = (event.clientX / viewportWidth) * 100;
    const y = (event.clientY / viewportWidth) * 100;
    followImage.value.style.transform = `translate(${x-0.2}vw, ${y}vw)`;
    followImage.value.style.opacity = 1;
  });
  container.value.addEventListener('mouseleave', () => {
    followImage.value.style.opacity = 0;
  });

  Array.from(hoverArea.value).forEach(area => {  
    area.addEventListener('mousemove', (event) => {
      const viewportWidth = window.innerWidth;
      const x = (event.clientX / viewportWidth) * 100;
      const y = (event.clientY / viewportWidth) * 100;
      followImage2.value.style.transform = `translate(${x - 0.75}vw, ${y - 0.7}vw)`;
      followImage2.value.style.opacity = 1;
    });
    area.addEventListener('mouseleave', () => {
      followImage2.value.style.opacity = 0;
    });
  }); 

  // 在组件卸载时移除事件监听器  
  onUnmounted(() => {  
    eventListeners.forEach(({ area, mousemove, mouseleave }) => {  
      area.removeEventListener('mousemove', mousemove);  
      area.removeEventListener('mouseleave', mouseleave);  
    });  
  });  
});

function followMouse(event) {
  const followImage = document.getElementById('followImage2');
  followImage.style.position = 'absolute';
  const viewportWidth = window.innerWidth;
  const x = (event.clientX / viewportWidth) * 100;
  const y = (event.clientY / viewportWidth) * 100;
  followImage.style.transform = `translate(${x - 0.75}vw, ${y - 0.7}vw)`;
  followImage.style.opacity = 1;
}
function hideImage() {
  const followImage = document.getElementById('followImage2');
  followImage.style.opacity = 0;
}

const isVideoPlaying = ref(false);
const disabledIndex = ref(0);
function playVideo() {  
    isVideoPlaying.value = true;  
}
function closeClick(num) {
    if (disabledIndex.value !== num) {
        disabledIndex.value = num;
    } else {
        disabledIndex.value = null;
    }
}
function handleVideoEnd() {  
  isVideoPlaying.value = false;  
}

const navigateToUrl = (url) => {
  window.open(url, '_blank');
};

let isShow = ref(false);
const controlShow = () => {
  isShow.value = !isShow.value; 
}
let isShowqr = ref(false);
const controlShowqr = () => {
  isShowqr.value = !isShowqr.value; 
}
let isShowqr2 = ref(false);
const controlShowqr2 = () => {
  isShowqr2.value = !isShowqr2.value; 
}

const routes = ['home', 'news', 'set', 'setchild', 'character', 'photo'];
const router = useRouter();

const currentIndex = ref(routes.indexOf(route.name));
const canScroll = ref(true);

function handleScroll(event) {
  if (!canScroll.value) return;

  if (event.deltaY < 0 && currentIndex.value > 0) {
    // 向上滚动但不是第一个路由
    currentIndex.value--;
    isVideoPlaying.value = true;
    disabledIndex.value = currentIndex.value;
  } else if (event.deltaY > 0 && currentIndex.value < routes.length - 1) {
    // 向下滚动但不是最后一个路由
    currentIndex.value++;
    isVideoPlaying.value = true;
    disabledIndex.value = currentIndex.value;
  } else {
    return;
  }

  canScroll.value = false;
  router.push({ name: routes[currentIndex.value] });

  setTimeout(() => {
    canScroll.value = true;
  }, 1500); // 1.5秒暂停时间
}

let startY = 0;
const startTouch = (event) => {
  if (!canScroll.value) return;
  startY = event.touches[0].clientY;
};
const moveTouch = (event) => {
  if (!startY) return;
  const endY = event.touches[0].clientY;
  const diffY = startY - endY;
  if (diffY > 50) {
    if(currentIndex.value < routes.length - 1) {
      // 向下滑动但不是最后一个路由
      currentIndex.value++;
      isVideoPlaying.value = true;
      disabledIndex.value = currentIndex.value;
    }
    startY = 0;
  } else if (diffY < -50) {
    if(currentIndex.value > 0) {
      // 向上滑动但不是第一个路由
      currentIndex.value--;
      isVideoPlaying.value = true;
      disabledIndex.value = currentIndex.value;
    }
    startY = 0;
  }
};
const endTouch = () => {
  startY = 0;
  canScroll.value = false;
  router.push({ name: routes[currentIndex.value] });
  setTimeout(() => {
    canScroll.value = true;
  }, 1500); // 1.5秒暂停时间
};

// 监听路由变化
watch(
  () => route.name,
  (newName) => {
    currentIndex.value = routes.indexOf(newName);
  }
);

onMounted(() => {
  window.addEventListener('wheel', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll);
});


//手机端新增
const show = ref(false);
const navLink = () => {
  show.value = !show.value;
}
const isHomeRoute = computed(() => route.path === '/home');
const isPhototRoute = computed(() => route.path === '/photo');

// 使用 import.meta.glob 批量导入音频文件
const videoFiles = import.meta.glob('@/assets/home/*.mp4', { eager: true });
// 将导入的音频转换为需要的格式
const videoMap = Object.keys(videoFiles).reduce((acc, path) => {
    const key = path.split('/').pop().replace('.mp4', ''); // 提取文件名作为 key
    acc[key] = videoFiles[path].default; // 获取音频的默认导出
    return acc;
}, {});
// 使用特定的音频文件
const videoUrl2 = ref(videoMap['pv']);
// const videoUrl2 = ref('/home/pv2_cn.mp4');
const closeModal2 = () => {
  isVisible2.value = false;
};


// 使用 import.meta.glob 批量导入图片
const images = import.meta.glob('@/assets/app/*.png', { eager: true });
// 将导入的图片转换为需要的格式
const imageMap = Object.keys(images).reduce((acc, path) => {
    const key = path.split('/').pop().replace('.png', ''); // 提取文件名作为 key
    acc[key] = images[path].default; // 获取图片的默认导出
    return acc;
}, {});

// 引入 Swiper 组件和模块
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import HomeView from './views/HomeView.vue';
import NewsView from './views/NewsView.vue'
import SetView from './views/SetView.vue'
import SetViewChild from './views/SetViewChild.vue'
import CharacterView from './views/CharacterView.vue'
import PhotoView from './views/PhotoView.vue'
const swiperRef = ref(null);
const mobileIndex = ref(0);
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const goToSlide = (index) => {
  if (swiperRef.value) {
    setTimeout(() => {
      swiperRef.value.slideTo(index, 0); // 0ms 过渡 = 无动画
      mobileIndex.value = swiperRef.value.activeIndex;
    }, 1000); // 延迟 1000 毫秒（1 秒）
  }
};

const onSlideChange = () => {
  if (swiperRef.value) {
    mobileIndex.value = swiperRef.value.activeIndex;
    morenewshow.value = false;
  }
};
</script>