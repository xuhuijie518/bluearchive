<template>
  <div id="photov">
    <div id="mobilebg"></div>
    <img id="followImage4" src="/app/mouse3.png"/>
    <!-- 电脑端壁纸主页 -->
    <Transition name="nested2">
      <div class="wallpaper-container" v-show="show3">
        <transition
          name="fade2"
          mode="out-in"
        >
          <div class="scroll-container" @wheel="handleScroll" ref="scrollContainer" v-show="show">
            <div class="image-wrapper">
              <div 
                class="image hoverarea"
                v-for="(image, index) in images"
                :key="index"
                @click="photodetail();selectedphoto(index);"
              >
                <img :key="index" :src="image.pcimg"/>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </Transition>

    <!-- 手机端壁纸主页 -->
    <transition
      name="fade1"
      mode="out-in"
    >
      <div class="image-container" v-show="show"
        @touchstart="startTouch" 
        @touchmove="moveTouch" 
        @touchend="endTouch"
      >
        <transition
          :name="transitionName"
          mode="out-in"
        >
          <div :key="image_currentPage" class="image-container">
            <div class="image-wrapper2">
              <div 
                class="image2 hoverarea"
                v-for="(image, index) in displayData"
                :key="index"
                @click="photodetail();selectedphoto(index);"
              >
                <img :key="index" :src="image.pcimg"/>
              </div>
            </div>
          </div>
        </transition>
        <div class="image-pagination">
          <div class="hoverarea" @click="image_prev" :class="image_currentPage === 1 ? 'imagepageUnhover_l' : 'imageprev'"></div>
          <div class="image-pagenum hoverarea"
            v-for="page in visiblePages"
            :key="page"
            :class="{ image_pagenumactive : page === image_currentPage }"
            @click="image_goToPage(page)"
          >
            {{ page }}
          </div>
          <div class="hoverarea" @click="image_next" :class="image_currentPage === image_totalPages ? 'imagepageUnhover_r' : 'imagenext'"></div>
        </div>
      </div>
    </transition>

    <!-- 手机端壁纸详情 -->
    <Transition name="fade2">
      <div id="mbphotodetails" v-show="show4">
        <div id="mbphotodt">
          <div class="photo" v-show="mobile" @click="openPcImage(images[selectedphotoIndex].mobileimg);">
            <img :src="images[selectedphotoIndex].mobileimg">
          </div>
          <div class="photo" v-show="!mobile" @click="openPcImage(images[selectedphotoIndex].pcimg);">
            <img :src="images[selectedphotoIndex].pcimg">
          </div>
          <div id="mbclose" @click="photodetail" class="hoverarea">
            <img src="/photo/close.png">
          </div>
          <div v-show="mobile" id="changebutton2" class="button hoverarea" @click="mobile = !mobile">
            <span>切换电脑壁纸</span>
            <div class="iconbox"></div>
          </div>
          <div v-show="!mobile" id="changebutton2" class="button hoverarea" @click="mobile = !mobile">
            <span>切换手机壁纸</span>
            <div class="iconbox"></div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 手机端漫画主页 -->
    <transition
      name="fade1"
      mode="out-in"
    >
      <div class="mobilecomic" v-show="!show"
        @touchstart="startTouch2" 
        @touchmove="moveTouch2" 
        @touchend="endTouch2"
      >
        <transition
          :name="transitionName"
          mode="out-in"
        >
          <div :key="comic_currentPage" class="mobilecomic2">
            <div 
              class="mbcomic"
              v-for="(comic, index) in displayData2"
              :key="index"
              @click="comicdetail();selectedcomic(index);"
            >
              <img :key="index" :src="comic.content"/>
              <div class="mbcmtitle">
                {{ comic.title }}
              </div>
            </div>
          </div>
        </transition>
        <div class="image-pagination2">
          <div class="hoverarea" @click="comic_prev" :class="comic_currentPage === 1 ? 'imagepageUnhover_l' : 'imageprev'"></div>
          <div class="image-pagenum hoverarea"
            v-for="page in visiblePages2"
            :key="page"
            :class="{ image_pagenumactive : page === comic_currentPage }"
            @click="comic_goToPage(page)"
          >
            {{ page }}
          </div>
          <div class="hoverarea" @click="comic_next" :class="comic_currentPage === comic_totalPages ? 'imagepageUnhover_r' : 'imagenext'"></div>
        </div>
      </div>
    </transition>

    <!-- 电脑端漫画主页 -->
    <transition
      name="fade2"
      mode="out-in"
    >
      <div class="comic-container" v-show="!show">
        <div 
          class="comic"
          v-for="(comic, index) in currentImages"
          :key="index"
          @mousemove="followMouse" @mouseleave="hideImage"
          @click="comicdetail();selectedcomic(index);"
        >
          <img :key="index" :src="comic.cover"/>
          <div class="comictitle">
            <div class="split">
              <div class="no">NO.{{formatNumber(comics.length - (currentPage * itemsPerPage + index))}}</div>
            </div>
            <div class="title">
              {{ comic.title }}
            </div>
          </div>
        </div>
        <div class="pagination">
          <div class="prev hoverarea" @click="prevPage" :class="{ pageUnhover : currentPage === 0 }"></div>
          <div class="pagenum hoverarea"
            v-for="page in totalPages"
            :key="page"
            :class="{ pagenumactive : page === currentPage + 1 }"
            @click="goToPage(page)"
          >
          {{ page }}
          </div>
          <div class="next hoverarea" @click="nextPage" :class="{ pageUnhover : currentPage === totalPages - 1 }"></div>
        </div>
      </div>
    </transition>

    <div class="videoContainer">
      <video autoplay loop muted playsinline class="background-video">
        <source src="/app/background.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="bg">
      <img src="/photo/bg.png">
    </div>
    <div id="bg2">
      <Transition name="nested">
        <div class="move1" v-show="show2">
          <transition
            name="fade1"
            mode="out-in"
          >
            <div class="wp" v-show="show">
              <div class="wordcn">
                <img src="/photo/wallpaper.png">
              </div>
              <div class="wpworden">
                <div><img src="/photo/desktop.png"></div>
                <div><img src="/photo/wallp.png"></div>
              </div>
            </div>
          </transition>
          <transition
            name="fade1"
            mode="out-in"
          >
            <div class="cm" v-show="!show">
              <div class="wordcn">
                <img src="/photo/comic.png">
              </div>
              <div class="cmworden">
                <div><img src="/photo/4comic.png"></div>
              </div>
            </div>
          </transition>
        </div>
      </Transition>
    </div>
    <Transition name="nested">
      <div id="changebutton" @click="change" v-show="show2" class="hoverarea">
        <span>{{ show ? '前往四格漫画' : '前往壁纸下载' }}</span>
        <div class="iconbox"></div>
      </div>
    </Transition>
  </div>

  <!-- 电脑端壁纸详情 -->
  <Transition name="fade3">
    <div id="photodetails" v-show="show4">
      <div class="videoContainer">
        <video autoplay loop muted playsinline class="background-video">
          <source src="/app/background.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="bg3">
        <img src="/photo/bg.png">
      </div>
      <div class="wpword">
        <div><img src="/photo/desktop.png"></div>
        <div><img src="/photo/wallp.png"></div>
      </div>
      <div id="photodt">
        <div class="photo">
          <img :src="images[selectedphotoIndex].pcimg">
        </div>
        <div id="close" @click="photodetail" class="hoverarea">
          <img src="/photo/close.png">
        </div>
        <div id="changebutton2" class="button hoverarea" @click="openPcImage(images[selectedphotoIndex].pcimg);">
          <span>电脑壁纸下载</span>
          <div class="iconbox"></div>
        </div>
        <div id="changebutton3" class="button hoverarea" @click="openPcImage(images[selectedphotoIndex].mobileimg);">
          <span>手机壁纸下载</span>
          <div class="iconbox"></div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- 电脑端漫画详情 -->
  <Transition name="fade3">
    <div id="photodetails" v-show="show5">
      <div class="videoContainer">
        <video autoplay loop muted playsinline class="background-video">
          <source src="/app/background.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="comicdt">
        <div class="comiccontent"  @wheel="handleScroll2">
          <img :src="comics[selectedcomicIndex].content">
        </div>
        <div id="close2" @click="comicdetail" class="hoverarea">
          <img src="/photo/close.png">
        </div>
        <div class="number">NO.{{formatNumber(selectedcomicIndex+1)}}</div>
        <div class="comictt">{{ comics[selectedcomicIndex].title }}</div>
        <div id="prevbutton" class="button2 hoverarea" @click="prevcomic" v-show="selectedcomicIndex + 1 !== 1">
          <span>上一话</span>
          <div class="iconbox2"></div>
        </div>
        <div id="nextbutton" class="button2 hoverarea" @click="nextcomic" v-show="selectedcomicIndex + 1 !== comics.length">
          <span>下一话</span>
          <div class="iconbox2"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
#followImage4 {
  position: absolute;
  width: 2.1vw;
  height: auto;
  pointer-events: none; 
  opacity: 0;
  transition: opacity 0.2s ease; 
  z-index: 40;
}
#photov {
  position: fixed;
  width: 100%;
  height: 100%;
}
.fade1-enter-active,
.fade1-leave-active,
.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.5s;
}
.fade1-enter-active {
  transition-delay: 0.4s;
}
.fade1-enter-from,
.fade2-enter-from {
  opacity: 0;
}
.fade1-enter-to,
.fade2-enter-to {
  opacity: 1;
}
.fade1-leave-from,
.fade2-leave-from {
  opacity: 1;
}
.fade1-leave-to,
.fade2-leave-to {
  opacity: 0;
}
@media screen and (min-width: 1900px) {
  .background-video {
    width: 100%;
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
    visibility: visible;
  }
}

@media screen and (min-width:829px) {
#photodetails {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 29;
}
#bg3 {
  position: fixed;
  left: 0;
  bottom: 11.5vh;
  width: 100vw;
  height: auto;
  z-index: -99;
}
.wpword {
  position: fixed;
  width: 28.8vw;
  height: auto;
  left: 3.5vw;
  bottom: 2.7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wpword div:first-child{
  width: 21vw;
}
.wpword div:last-child{
  width: 28.8vw;
}
#close {
  position: absolute;
  width: 3.1vw;
  height: auto;
  top: 0;
  right: -4.4vw;
  transition: transform 0.3s ease;
}
#close:hover {
  transform: rotate(90deg);
}
#photodt {
  position: fixed;
  width: 65.6vw;
  height: 37.6vw;
  top: 56%;
  transform: translateY(-50%);
  right: 17.2vw;
  background-color: #fff;
  box-shadow: 0 0 .6vw rgba(0, 0, 0, 0.2);
}
.photo {
  position: absolute;
  width: 95.8%;
  height: auto;
  top: 50.4%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#comicdt {
  position: fixed;
  width: 44.5vw;
  height: 74%;
  top: 26%;
  right: 27.8vw;
  background-color: #fff;
  box-shadow: 0 0 .6vw rgba(0, 0, 0, 0.2);
}
#close2 {
  position: absolute;
  width: 3.1vw;
  height: auto;
  top: -3vw;
  right: -5.9vw;
  transition: transform 0.3s ease;
}
.number {
  position: absolute;
  top: -5.5vw;
  left: 0;
  font-family: TVPS-Vain-Capital;
  font-size: 3.5vw;
  color: #1289f9;
  line-height: 1;
}
.comictt {
  position: absolute;
  top: -2vw;
  font-family: FZLanTYK_Zhong;
  color: #1289f9;
  font-size: 1.105vw;
  line-height: 1;
}
#close2:hover {
  transform: rotate(90deg);
}
.comiccontent {
  position: absolute;
  width: 44.5vw;
  height: 100%;
  overflow-y: scroll;
}
/* 自定义滚动条 */
.comiccontent::-webkit-scrollbar {
  width: .35vw; /* 滚动条宽度 */
}
.comiccontent::-webkit-scrollbar-thumb {
  background-color: #0f7fe7; /* 滚动条颜色 */
  border-radius: 1vw; /* 滚动条圆角 */
}
.comiccontent::-webkit-scrollbar-track {
  background: #d4d4d4; /* 滚动条轨道颜色 */
}
.comiccontent img {
  position: absolute;
  top: 0;
  left: 0;
  width: 44.1vw;
  height: auto;
}

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
  object-fit: cover;
}
img {
  width: 100%;
  height: auto;
}
#bg {
  position: fixed;
  left: 0;
  top: 2.5vw;
  width: 95.2vw;
  height: auto;
  z-index: -99;
}
#bg2 {
  position: fixed;
  width: 100%;
  height: 4.6vw;
  bottom: 5.2vw;
  background-color: #e7e7e7bf;
  z-index: -99;
}
.move1 {
  position: absolute;
  width: 100%;
  height: 100%;
}
.wp,.cm {
  position: absolute;
  width: 100%;
  height: 100%;
}
.wordcn {
  position: absolute;
  width: 18.5%;
  top: -22%;
  left: 6.5%;
}
.wpworden {
  position: absolute;
  width: 33.4%;
  height: 160%;
  right: 2.75%;
  bottom: 0;
}
.wpworden div:first-child {
  position: absolute;
  top: 0;
  left: 0;
  width: 63.5%;
}
.wpworden div:nth-child(2) {
  position: absolute;
  bottom: -7%;
  right: 0;
  width: 86.5%;
}
.cmworden {
  position: absolute;
  width: 37.4%;
  height: auto;
  right: 3.35%;
  bottom: -7%;
}
#changebutton {
  position: fixed;
  bottom: 1.4vw;
  right: 3.3vw;
  width: 11.3vw;
  height: 2.75vw;
  border: .15vw solid #1189F9;
  border-radius: 1.5vw;
  transition: all .3s ease;
  display: flex;
  align-items: center;
}
#changebutton span {
  font-size: 1vw;
  font-family: SourceHanSansCN-Regular;
  color: #1189f9;
  margin-left: 1.5vw;
  transition: all .3s ease;
}
#changebutton:hover {
  background-color: #1189F9;
}
#changebutton:hover span {
  color: white;
}
.iconbox {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: .2vw;
  width: 2.1vw;
  height: 2.1vw;
  border-radius: 50%;
  overflow: hidden;
}
.iconbox:before {
  content: "";
  background-color: #1189f9;
  -webkit-mask: url('/photo/arrow.png') no-repeat;
  mask: url('/photo/arrow.png') no-repeat;
  -webkit-mask-size: 100%;
  mask-size: 100%;
  width: .55vw;
  height: .55vw;
  position: absolute;
  z-index: 1;
  top: 150%;
  left: -100%;
  transform: translate(-50%, -50%);
  transition: all .6s ease;
}
#changebutton:hover .iconbox::before {
  position: absolute;
  top: 50%;
  left: 50%; 
}
.iconbox:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .55vw;
  height: .55vw;
  border-radius: 50%;
  background-color: #1189f9;
  transition: all .3s ease;
}
#changebutton:hover .iconbox:after {
  width: 100%;
  height: 100%;
  background-color: white;
}


#changebutton2 {
  position: absolute;
  bottom: 9vw;
  right: -12.7vw;
  width: 11.3vw;
  height: 2.75vw;
  border: .15vw solid #1189F9;
  border-radius: 1.5vw;
  transition: all .3s ease;
  display: flex;
  align-items: center;
}
#changebutton3 {
  position: absolute;
  bottom: 5.65vw;
  right: -12.7vw;
  width: 11.3vw;
  height: 2.75vw;
  border: .15vw solid #1189F9;
  border-radius: 1.5vw;
  transition: all .3s ease;
  display: flex;
  align-items: center;
}
#prevbutton, #nextbutton {
  position: absolute;
  bottom: 7.6vw;
  right: -14.3vw;
  width: 8.4vw;
  height: 2.2vw;
  border: .15vw solid #1189F9;
  border-radius: 1.5vw;
  transition: all .3s ease;
  display: flex;
  align-items: center;
}
#nextbutton {
  bottom: 4.65vw;
}
.iconbox2 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: .2vw;
  width: 1.5vw;
  height: 1.5vw;
  border-radius: 50%;
  overflow: hidden;
}
.iconbox2:before {
  content: "";
  background-color: #1189f9;
  -webkit-mask: url('/photo/arrow.png') no-repeat;
  mask: url('/photo/arrow.png') no-repeat;
  -webkit-mask-size: 100%;
  mask-size: 100%;
  width: .55vw;
  height: .55vw;
  position: absolute;
  z-index: 1;
  top: 150%;
  left: -100%;
  transform: translate(-50%, -50%);
  transition: all .6s ease;
}
.iconbox2:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .35vw;
  height: .35vw;
  border-radius: 50%;
  background-color: #1189f9;
  transition: all .3s ease;
}
.button2 span {
  font-size: 0.95vw;
  font-family: SourceHanSansCN-Regular;
  color: #1189f9;
  margin-left: 1.3vw;
  transition: all .3s ease;
}
.button2:hover {
  background-color: #1189F9;
}
.button2:hover span {
  color: white;
}
.button2:hover .iconbox2::before {
  position: absolute;
  top: 50%;
  left: 50%; 
}
.button2:hover .iconbox2:after {
  width: 100%;
  height: 100%;
  background-color: white;
}


.button span {
  font-size: 1vw;
  font-family: SourceHanSansCN-Regular;
  color: #1189f9;
  margin-left: 1.5vw;
  transition: all .3s ease;
}
.button:hover {
  background-color: #1189F9;
}
.button:hover span {
  color: white;
}
.button:hover .iconbox::before {
  position: absolute;
  top: 50%;
  left: 50%; 
}
.button:hover .iconbox:after {
  width: 100%;
  height: 100%;
  background-color: white;
}



.nested-enter-active,
.nested2-enter-active {
  transition: all 0.5s ease-in-out;
}
.nested-enter-active {
  transition-delay: 0.5s;
}
.nested2-enter-active {
  transition-delay: 1s;
}
.nested-enter-from,
.nested2-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.nested-enter-to,
.nested2-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade3-enter-active,
.fade3-leave-active {
  transition: all 1s;
}
.fade3-enter-from {
  opacity: 0;
  transform: translateX(10%);
}
.fade3-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade3-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fade3-leave-to {
  opacity: 0;
  transform: translateX(10%);
}

.comic-container {
  width: 85.5vw;
  height: 26vw;
  position: fixed;
  top: 9vw;
  left: 9vw;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
}
.comic {
  width: 25.2vw;
  height: 12.9vw;
  box-shadow: 0 .15vw .3vw rgba(0, 0, 0, 0.2);
  border-radius: 1vw;
  margin-right: 3.15vw;
  margin-bottom: 0.6vw;
  overflow: hidden;
  position: relative;
}
.comic img {
  object-fit: cover;
  transition: transform 0.3s ease;
}
.comic:hover img {
  transform: scale(1.08);
}
.comictitle {
  position: absolute;
  width: 100%;
  height: 21%;
  background-color: #fff;
  bottom: 0;
}
.no {
  position: absolute;
  bottom: 30%;
  left: -3.7vw;
  font-family: BUNGEE;
  line-height: 1;
  font-size: 1.15vw;
  color: transparent;
  -webkit-text-stroke: .05vw #AFB1B5;
}
.split {
  position: absolute;
  width: 18vw;
  height: 0.6vw;
  bottom: 24%;
  left: 18%;
  background: url('/photo/split.png') no-repeat;
  background-size: 100%;
}
.title {
  position: absolute;
  color: #4e4e4e;
  font-size: 0.85vw;
  font-family: FZLanTYJW_Xi;
  background-color: #fff;
  position: absolute;
  bottom: 32%;
  right: 0.5vw;
}
.pagination {
  position: absolute;
  bottom: -3vw;
  left: 48%;
  transform: translateX(-50%);
  display: flex;
	justify-content: center;
  align-items: center;
}
.prev {
  width: 3vw;
  height: 1.45vw;
  background: url('/photo/cl.png') no-repeat;
  background-size: 100%;
}
.prev:hover {
  background: url('/photo/cl_h.png') no-repeat;
  background-size: 100%;
}
.next {
  width: 3vw;
  height: 1.45vw;
  background: url('/photo/cr.png') no-repeat;
  background-size: 100%;
}
.next:hover {
  background: url('/photo/cr_h.png') no-repeat;
  background-size: 100%;
}
.pageUnhover {
  opacity: 0.3;
  pointer-events: none;
}
.pagenum {
  font-family: TVPS-Vain-Capital;
  font-size: 1vw;
  width: 2vw;
  height: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.35vw;
  margin: 0 0.3vw;
  color: #9f9f9f;
}
.pagenum:hover {
  background-color: #ececec;
}
.pagenumactive {
  color: #008dff;
  background-color: rgba(0, 0, 0, 0) !important;
}

.wallpaper-container {
  width: 100%;
  height: 30vw;
  position: relative;
  top: 7vw;
}
.scroll-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  display: flex;
  align-items: center;
  
}
.image-wrapper {
  display: flex;
  gap: 3.1vw;
  padding-right: 1.6vw;
}
.image {
  width: 45vw;
  height: 25.3vw;
  box-shadow: 0 0 .6vw rgba(0, 0, 0, 0.5);
  border-radius: .45vw;
  overflow: hidden;
}
.image:first-child {
  margin-left: 8.8vw;
}
.image img {
  object-fit: cover;
  transition: transform 0.3s ease;
}
.image img:hover {
  transform: scale(1.08);
}
#mobilebg, .image-container, .image-pagination, .mobilecomic {
  display: none;
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
  .videoContainer, .wallpaper-container, #bg, .wpworden, #photodetails, .cmworden, .comic-container {
    display: none;
  }
  
  #mobilebg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: url('/photo/mobile/bg.png') no-repeat;
    background-size: 100%;
    z-index: -10;
  }
  #bg2 {
    position: fixed;
    width: 100%;
    height: 2vw;
    top: 19vw;
    left: 7.5vw;
    background: url('/photo/mobile/split.png') no-repeat;
    background-size: 70%;
    z-index: -9;
  }
  .move1 {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .wp,.cm {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .wordcn {
    position: absolute;
    width: 28%;
    top: -8vw;
    left: -4vw;
  }
  #changebutton {
    position: fixed;
    top: 16vw;
    right: 8.3vw;
    width: 25vw;
    height: 6.5vw;
    border: .3vw solid #1189F9;
    border-radius: 5vw;
    transition: all .3s ease;
    display: flex;
    align-items: center;
  }
  #changebutton span {
    font-size: 2.5vw;
    font-family: SourceHanSansCN-Regular;
    color: #1189f9;
    margin-left: 3vw;
    transition: all .3s ease;
  }
  .iconbox {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3vw;
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    overflow: hidden;
    background-color: #1189f9;
  }
  .image-container {
    position: fixed;
    top: 25vw;
    left: 12vw;
    width: 76vw;
    height: 135vw;
  }
  .mobilecomic {
    position: fixed;
    top: 27vw;
    left: 8vw;
    width: 84vw;
    height: 130vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  .mobilecomic2 {
    top: 27vw;
    left: 8vw;
    width: 84vw;
    height: auto;
    display: flex;
  }
  .mbcomic {
    width: 100%;
    height: auto;
    box-shadow: 0 0 1vw rgba(0, 0, 0, 0.2);
  }
  .image-pagination2 {
    margin-top: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mbcmtitle {
    position: absolute;
    color: #2b2b2b;
    font-size: 3vw;
    font-family: FZLanTYK_Zhong;
    background-color: #fff;
    position: absolute;
    top: -6vw;
  }
  .image-wrapper2 {
    position: absolute;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .image2 {
    width: 76vw;
    height: 43vw;
    box-shadow: 0 0 1vw rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 3vw;
    margin-bottom: 2vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image2 img {
    width: 98%;
    height: auto;
    border-radius: 3vw;
  }

  .image-pagination {
    position: fixed;
    top: 76.5%;
    left: 48%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imageprev {
    width: 12vw;
    height: 6vw;
    background: url('/photo/cl_h.png') no-repeat;
    background-size: 100%;
  }
  .imagenext {
    width: 12vw;
    height: 6vw;
    background: url('/photo/cr_h.png') no-repeat;
    background-size: 100%;
  }
  .imagepageUnhover_l {
    width: 12vw;
    height: 6vw;
    background: url('/photo/cl.png') no-repeat;
    background-size: 100%;
    pointer-events: none;
  }
  .imagepageUnhover_r {
    width: 12vw;
    height: 6vw;
    background: url('/photo/cr.png') no-repeat;
    background-size: 100%;
    pointer-events: none;
  }
  .image-pagenum {
    font-family: TVPS-Vain-Capital;
    font-size: 3vw;
    width: 3vw;
    height: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 3vw;
    color: black;
  }
  .image_pagenumactive {
    color: #008dff;
  }

  #mbphotodetails {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #fff;
  }
  #mbphotodt {
    position: absolute;
    width: 90%;
    height: auto;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .photo {
    width: 100%;
    height: auto;
  }
  #mbclose {
    position: absolute;
    margin-top: 2vw;
    width: 6%;
    right: 0;
  }
  #changebutton2 {
    position: absolute;
    margin-top: 2vw;
    left: 0;
    width: 28vw;
    height: 6.5vw;
    border: .3vw solid #1189F9;
    border-radius: 5vw;
    transition: all .3s ease;
    display: flex;
    align-items: center;
  }
  #changebutton2 span {
    font-size: 2.5vw;
    font-family: SourceHanSansCN-Regular;
    color: #1189f9;
    margin-left: 5vw;
    transition: all .3s ease;
  }

  .slide-enter-active,
  .slide-leave-active,
  .slide2-enter-active,
  .slide2-leave-active {
    transition: all 0.2s ease-in-out;
  }
  .slide-enter-from,
  .slide2-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
  .slide-enter-to,
  .slide2-enter-to {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-leave-from
  .slide2-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-leave-to,
  .slide2-enter-from {
    opacity: 0;
    transform: translateX(30%);
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useHoverFollower } from '@/components/useHoverFollower'
const show = ref(true);
const mobile = ref(true);
const change = () => {
  show.value = !show.value;
}
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const show5 = ref(false);
let intervalId1 = [];
onMounted(()=>{
  intervalId1.push(setTimeout(() => {
    show2.value = !show2.value;
  }, 0));
  intervalId1.push(setTimeout(() => {
    show3.value = !show3.value;
  }, 0));
})
onBeforeUnmount(() => {
  clearInterval(intervalId1);
});
const photodetail = () => {
  show4.value = !show4.value;
}
const comicdetail = () => {
  show5.value = !show5.value;
}

const comics = ref([
  { cover: '/photo/comic/cover/1.png', content: '/photo/comic/content/1.png', title: '第一部第一话：我们来迟了！' },
  { cover: '/photo/comic/cover/2.png', content: '/photo/comic/content/2.jpeg', title: '第一部第二话：美好的事物' },
  { cover: '/photo/comic/cover/3.png', content: '/photo/comic/content/3.jpeg', title: '第一部第三话：阿拜多斯的大家' },
  { cover: '/photo/comic/cover/4.png', content: '/photo/comic/content/4.jpeg', title: '第一部第四话：阿洛娜的小提示' },
  { cover: '/photo/comic/cover/5.png', content: '/photo/comic/content/5.jpeg', title: '第一部第五话：阿洛娜也想升级！？' },
  { cover: '/photo/comic/cover/6.png', content: '/photo/comic/content/6.jpeg', title: '第一部第六话：共赴邀约吧！' },
  { cover: '/photo/comic/cover/7.png', content: '/photo/comic/content/7.jpeg', title: '第一部第七话：阿洛娜的一天' },
  { cover: '/photo/comic/cover/8.png', content: '/photo/comic/content/8.jpeg', title: '第一部第八话：还...还没有结束呢！' },
  { cover: '/photo/comic/cover/9.png', content: '/photo/comic/content/9.png', title: '第二部第一话：宣传便利屋68的方法' },
  { cover: '/photo/comic/cover/10.png', content: '/photo/comic/content/10.jpeg', title: '第二部第二话：泉奈在哪里呢？' },
  { cover: '/photo/comic/cover/11.png', content: '/photo/comic/content/11.png', title: '第二部第三话：好想玩游戏！' },
  { cover: '/photo/comic/cover/12.png', content: '/photo/comic/content/12.jpeg', title: '第二部第四话：爱丽丝的长头发' },
  { cover: '/photo/comic/cover/13.png', content: '/photo/comic/content/13.png', title: '第二部第五话：来打总力战吧！' },
  { cover: '/photo/comic/cover/14.png', content: '/photo/comic/content/14.png', title: '第二部第六话：吃冰粉吗？' },
  { cover: '/photo/comic/cover/15.png', content: '/photo/comic/content/15.jpeg', title: '第二部第七话：蕴含强大力量的装备！' },
]);
const images = ref([
  { pcimg: '/photo/pc/1.jpeg', mobileimg: '/photo/mobile/1.jpeg' },
  { pcimg: '/photo/pc/2.jpeg', mobileimg: '/photo/mobile/2.jpeg' },
  { pcimg: '/photo/pc/3.jpeg', mobileimg: '/photo/mobile/3.jpeg' },
  { pcimg: '/photo/pc/4.jpeg', mobileimg: '/photo/mobile/4.jpeg' },
  { pcimg: '/photo/pc/5.jpeg', mobileimg: '/photo/mobile/5.jpeg' },
  { pcimg: '/photo/pc/6.jpeg', mobileimg: '/photo/mobile/6.jpeg' },
  { pcimg: '/photo/pc/7.jpeg', mobileimg: '/photo/mobile/7.jpeg' },
  { pcimg: '/photo/pc/8.jpeg', mobileimg: '/photo/mobile/8.jpeg' },
]);

let transitionName = ref('slide');
let image_currentPage = ref(1);
const displayData = computed(() => {
    const startIndex = (image_currentPage.value - 1) * 3;
    const endIndex = startIndex + 3;
    return images.value.slice(startIndex, endIndex);
})
const image_totalPages = computed(() => {
    return Math.ceil(images.value.length / 3);
});
const image_prev = () =>{
  if(image_currentPage.value > 1) {
    transitionName.value = 'slide';
    image_currentPage.value -= 1;
  }
}
const image_next = () =>{
  if (image_currentPage.value < image_totalPages.value) {
    transitionName.value = 'slide2';
    image_currentPage.value += 1;
  }
}
const visiblePages = computed(() => {
  if (image_totalPages.value < 3) {
    return image_totalPages.value;
  } else {
    if (image_currentPage.value === 1) {
      return [1, 2, 3];
    } else if (image_currentPage.value === image_totalPages.value) {
      return [
        image_totalPages.value - 2,
        image_totalPages.value - 1,
        image_totalPages.value,
      ];
    } else {
      return [
        image_currentPage.value - 1,
        image_currentPage.value,
        image_currentPage.value + 1,
      ];
    }
  }
})
const image_goToPage = (page) => {
  image_currentPage.value = page;
}

let comic_currentPage = ref(1);
const displayData2 = computed(() => {
  // 倒序获取数组索引
  const reversedIndex = comics.value.length - comic_currentPage.value;
  // 使用 slice 获取倒序的内容
  return comics.value.slice(reversedIndex, reversedIndex + 1);
})
const comic_totalPages = computed(() => {
    return comics.value.length;
});
const comic_prev = () =>{
  if(comic_currentPage.value > 1) {
    transitionName.value = 'slide';
    comic_currentPage.value -= 1;
  }
}
const comic_next = () =>{
  if (comic_currentPage.value < comic_totalPages.value) {
    transitionName.value = 'slide2';
    comic_currentPage.value += 1;
  }
}
const visiblePages2 = computed(() => {
  if (comic_totalPages.value < 3) {
    return comic_totalPages.value;
  } else {
    if (comic_currentPage.value === 1) {
      return [1, 2, 3];
    } else if (comic_currentPage.value === comic_totalPages.value) {
      return [
        comic_totalPages.value - 2,
        comic_totalPages.value - 1,
        comic_totalPages.value,
      ];
    } else {
      return [
        comic_currentPage.value - 1,
        comic_currentPage.value,
        comic_currentPage.value + 1,
      ];
    }
  }
})
const comic_goToPage = (page) => {
  comic_currentPage.value = page;
}


const selectedphotoIndex = ref(0);
const selectedphoto = (index) => {
  selectedphotoIndex.value = index;
}
const selectedcomicIndex = ref(0);
const selectedcomic = (index) => {
  selectedcomicIndex.value = comics.value.length - (currentPage.value * itemsPerPage + index) - 1;
}
const prevcomic = () => {
  selectedcomicIndex.value -= 1;
}
const nextcomic = () => {
  selectedcomicIndex.value += 1;
}
const scrollContainer = ref(null);
let scrollAmount = 0;
let isScrolling = false;
const smoothScroll = () => {
  const container = scrollContainer.value;
  if (!container) return;
  container.scrollLeft += scrollAmount;
  scrollAmount *= 0.7; // Damping effect
  if (Math.abs(scrollAmount) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
};
const handleScroll = (event) => {
  event.preventDefault();
  event.stopPropagation();
  scrollAmount += event.deltaY * 0.7;
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(smoothScroll);
  }
};
const openPcImage = (imageUrl) => {
  window.open(imageUrl, '_blank'); // 在新标签页打开图片
};

const handleScroll2 = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const container2 = event.currentTarget;
  container2.scrollTop += event.deltaY;
};

const itemsPerPage = 6;
const currentPage = ref(0);
const totalPages = computed(() => {
  return Math.ceil(comics.value.length / itemsPerPage);
});
const currentImages = computed(() => {
  const start = comics.value.length - (currentPage.value + 1) * itemsPerPage;
  return comics.value.slice(Math.max(start, 0), start + itemsPerPage).reverse();
});
const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
};
const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};
const goToPage = (page) => {
    currentPage.value = page-1;
}
const formatNumber = (num) => {
  return num.toString().padStart(2, '0');
};

function followMouse(event) {
  const followImage = document.getElementById('followImage4');
  followImage.style.position = 'absolute';
  const viewportWidth = window.innerWidth;
  const x = (event.clientX / viewportWidth) * 100;
  const y = (event.clientY / viewportWidth) * 100;
  followImage.style.transform = `translate(${x - 0.75}vw, ${y - 0.7}vw)`;
  followImage.style.opacity = 1;
}
function hideImage() {
  const followImage = document.getElementById('followImage4');
  followImage.style.opacity = 0;
}


let startX = 0;
const startTouch = (event) => {
  startX = event.touches[0].clientX;
};
const moveTouch = (event) => {
  if (!startX) return;
  const endX = event.touches[0].clientX;
  const diffX = startX - endX;
  if (diffX > 50) {
    if(image_currentPage.value < image_totalPages.value) {
      transitionName.value = 'slide2';
      image_currentPage.value += 1;
    }
    startX = 0;
  } else if (diffX < -50) {
    if(image_currentPage.value > 1) {
      transitionName.value = 'slide';
      image_currentPage.value -= 1;
    }
    startX = 0;
  }
};
const endTouch = () => {
  startX = 0;
};

let startX2 = 0;
const startTouch2 = (event) => {
  startX2 = event.touches[0].clientX;
};
const moveTouch2 = (event) => {
  if (!startX2) return;
  const endX2 = event.touches[0].clientX;
  const diffX2 = startX2 - endX2;
  if (diffX2 > 50) {
    if(comic_currentPage.value < comic_totalPages.value) {
      transitionName.value = 'slide2';
      comic_currentPage.value += 1;
    }
    startX2 = 0;
  } else if (diffX2 < -50) {
    if(comic_currentPage.value > 1) {
      transitionName.value = 'slide';
      comic_currentPage.value -= 1;
    }
    startX2 = 0;
  }
};
const endTouch2 = () => {
  startX2 = 0;
};

const { hoverArea, followImage, followImage2 } = useHoverFollower('[class*="hoverarea"]', 'followImage', 'followImage2');
</script>
