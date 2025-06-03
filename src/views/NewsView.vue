<template>
  <div id="newsv">
    <div class="videoContainer">
      <video autoplay loop muted playsinline class="background-video">
        <source src="/app/background.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="mobile">
    </div>
    <Transition name="nested">
      <div id="newsnav" v-show="show">
        <div class="title">
          <img src="/news/10022.png" alt="title"/>
        </div>
        <div class="navword">
          <div v-for="(item, index) in navItems" :key="index" class="nav-link"><div @click="selectNav(index);changeCategory(item.type)" class="hoverarea" :class="{ selected: selectedIndex === index }">{{ item.name }}</div><p v-if="index !== 3">&#8226;</p></div>
        </div>
        <div class="split">
          <img src="/news/10025.png"/>
        </div>
        <div class="newswp">
          <img src="/news/10023.png"/>
        </div>
        <div id="newscontent">
          <div v-for="(item, index) in displayData.slice(0, 4)" :key="index" class="item hoverarea" @click="navigateToUrl(item.web)">
            <div class="name">{{ item.name }}</div>
            <div class="time">{{ formatDate(item.time) }}</div>
            <div class="newstitle">{{ item.title }}</div>
            <div class="bottom_border"></div>
          </div>
        </div>
        <div class="morenews hoverarea" @click="morenew">
          更多新闻 >>
        </div>
      </div>
    </Transition>
    <Transition name="nested2">
      <div id="swipercontainer" v-show="show">
        <div class="slideshow-container">
          <div class="swipercontainer" 
            @mousedown="startMouse" 
            @mousemove="moveMouse" 
            @mouseup="endMouse" 
            @mouseleave="endMouse"
            @touchstart="startTouch" 
            @touchmove="moveTouch" 
            @touchend="endTouch">
            <div id="newsswiper" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }" class="hoverarea">
              <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" @click="navigateToUrl(image.url)">
            </div>
          </div>
        </div>
        <div class="dots-container">
          <span
            v-for="(dot, index) in images"
            :key="index"
            class="dot hoverarea"
            :class="{ active: currentImageIndex === index }"
            @click="handleDotClick(index)"
          ></span>
        </div>
      </div>
    </Transition>
    <Transition name="nested3">
      <div id="newsswp" v-show="show">
        <img src="/news/10024.png"/>
      </div>
    </Transition>
  </div>

  <Transition name="fade3">
    <div id="newsdetails" v-show="show5">
      <img id="followImage4" src="/app/mouse3.png"/>
      <div class="videoContainer">
        <video autoplay loop muted playsinline class="background-video">
          <source src="/app/background.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="navword2">
        <div v-for="(item, index) in navItems" :key="index" class="nav-link"><div @click="selectNav(index);changeCategory(item.type)" class="hoverarea" :class="{ selected: selectedIndex === index }">{{ item.name }}</div><p v-if="index !== 3">&#8226;</p></div>
      </div>
      <div id="close" @click="morenew" class="hoverarea">
        <img src="/photo/close.png">
      </div>
      <div id="close2" @click="morenew">返回 >></div>

      <div class="pagination">
        <div class="hoverarea" @click="prev" :class="state.currentPage === 1 ? 'pageUnhover_l' : 'prev'"></div>
        <div class="pagenum hoverarea"
          v-for="page in visiblePages"
          :key="page"
          :class="{ pagenumactive : page === state.currentPage }"
          @click="goToPage(page)"
        >
        {{ page }}
        </div>
        <div class="hoverarea" @click="next" :class="state.currentPage === totalPages ? 'pageUnhover_r' : 'next'"></div>
      </div>

      <div class="split2">
        <div></div>
      </div>
      <transition
      :name="state.transitionName"
      mode="out-in"
      >
        <div id="newscontainer" :key="state.currentPage"
          @wheel="handleScroll" 
          @touchstart="startTouch2" 
          @touchmove="moveTouch2" 
          @touchend="endTouch2"
        >
          <div 
            class="newsc"
            v-for="(item, index) in displayData"
            :key="index"
          >
            <div class="container" @mousemove="followMouse" @mouseleave="hideImage">
              <div class="image"><img :src="item.image"></div>
              <div class="name2">{{ item.name }}</div>
              <div class="time2">{{ formatDate(item.time) }}</div>
              <div class="newstitle2">{{ item.title }}</div>
              <div class="content" v-html="item.content"></div>
              <div id="changebutton">
                <span>READ MORE</span>
                <div class="iconbox"></div>
              </div>
            </div>
            <div class="split3" v-if="index !== 4 && index !== 5">
              <img src="/news/split.png">
            </div>
            <div class="split4" v-if="index !== 5">
              <img src="/news/split.png">
            </div>
          </div>
        </div>
      </transition>
      <div id="switch">
        <div class="prev hoverarea" @click="prev();" :style="{ opacity: state.currentPage === 1 ? 0 : 1 ,pointerEvents: state.currentPage === 1 ? 'none' : 'auto' }">
        </div>
        <div class="next hoverarea" @click="next();" :style="{ opacity: state.currentPage === totalPages ? 0 : 1 ,pointerEvents: state.currentPage === totalPages ? 'none' : 'auto'}">
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
#newsv {
  width: 100%;
  height: 100%;
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

@media screen and (min-width: 1900px) {
  .background-video {
    width: 100%;
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
    visibility: visible;
  }
}
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
  object-fit: cover;
}
img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.nested-enter-active,
.nested-leave-active,
.nested2-enter-active,
.nested2-leave-active,
.nested3-enter-active,
.nested3-leave-active {
  transition: all 0.5s ease-in-out;
}
.nested-enter-from,
.nested-leave-to,
.nested2-enter-from,
.nested2-leave-to,
.nested3-enter-from,
.nested3-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.nested2-enter-active {
  transition-delay: 0.5s;
}
.nested3-enter-active {
  transition-delay: 1s;
}

#newsnav {
  position: fixed;
  width: 82.7%;
  height: 35.2vw;
  top: 18.5%;
  left: 10.4%;
  display: flex;
}
.title {
  width: 17.45%;
  position: absolute;
  top: 3%;
  left: 0.7%;
}
.navword {
  position: absolute;
  top: 11.3%;
  left: 21.5%;
  width: 16.6%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'FZLanTYJW_Cu';
  font-size: 0.95vw;
  color: #6a6a6a
}
.navword p {
  font-size: 0.7vw;
}
.nav-link {
  display: flex;
}
.nav-link div:hover {
  color: #1189f9;
}
.selected {  
  color: #1189f9;
}
.nav-link p {
  margin-left: 0.8vw;
}

.split {
  position: absolute;
  width: 35.8%;
  top: 16.5%;
  left: 10%;
  z-index: -2;
}
.newswp {
  position: absolute;
  top: 1.1%;
  right: 0.1%;
  width: 28%;
  z-index: -1;
}
.morenews {
  position: absolute;
  font-family: "FZLanTYJW_Cu";
  color: #1289f9;
  font-size: 0.9vw;
  left: 2.6%;
  top: 95%;
}
#newscontent {
  position: absolute;
  width: 69%;
  height: 66.3%;
  top: 22%;
  left: 0;
  display: flex;
  flex-direction: column;
}
.item {
  border-bottom:0.2vh solid #c4c4c4;
  width: 100%;
  height: 25%;
  margin-left: 2.2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  position: relative;
  transition: all 0.3s ease;
}
.item:hover .time {
  color: #1289f9;
}
.item:hover {
  margin-left: 0;
  border-bottom:0.2vh solid #1289f9;
}
.item .bottom_border {
  position: absolute;
  margin-left: 0;
  bottom: 0;
  width: 1.5vw;
  height: 1vw;
  border-bottom:0.25vh solid #1289f9;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.item:hover .bottom_border {
  opacity: 1;
}

.item .name {
  position: absolute;
  top: 2.7vh;
  width: 6.5%;
  height: 2.4vh;
  line-height: 2.4vh;
  border-radius: 0.4vw;
  text-align: center;
  font-size: 0.9vw;
  color: white;
  background-color: #1189f9;
  font-family: "FZLanTYJW_Cu";
}
.item .newstitle {
  position: absolute;
  height: 2.4vh;
  line-height: 2.4vh;
  font-size: 0.9vw;
  font-family: "FZLanTYJW_Cu";
  color: #696969;
  width: 100%;
  left: 0.5vw;
  top: 7vh;
}
.item .time {
  position: absolute;
  top: 2.7vh;
  left: 4.6vw;
  height: 2.4vh;
  line-height: 2.4vh;
  font-size: 0.9vw;
  font-family: "junegull_rg";
  color: #878787;
  width: 90%;
}

#swipercontainer {
  position: relative;
  top: 27%;
  left: 43.5%;
  width: 43.9%;
}
.slideshow-container {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skew(170deg) !important;
  transform-origin: left bottom;
  border-radius: .8rem;
  border: .3rem solid #ffffff;
  filter: drop-shadow(.5rem .5rem rgba(138, 138, 138, .2823529412));
}
.swipercontainer {
  display: flex;
  justify-content: center; 
  align-items: center;
  transform: skew(-170deg);
}
#newsswiper {
  display: flex;
  width: 48vw;
  transition: transform 0.5s ease;
}
#newsswiper img {
  height: auto;
  max-width: 100%;
}

.dots-container {
  margin-top: 3vh;
  margin-left: 0.2vw;
}
.dot {
  width: 0.6vw;
  aspect-ratio: 1 / 1;
  margin-right: 1.05vw;
  background-color: white;
  border:0.15rem solid #1189F9;
  border-radius: 50%;
  display: inline-block;
}
.dot.active {
  background-color: #1189F9;
}

#newsswp {
  position: relative;
  width: 27.35%;
  top: 10.2%;
  left: 65%;
  z-index: 1;
  pointer-events: none;
}

#newsdetails {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 29;
  top: 0;
}
#close {
  position: absolute;
  width: 2.4vw;
  height: auto;
  top: 15.2%;
  right: 10.95%;
  transition: transform 0.3s ease;
}
#close:hover {
  transform: rotate(90deg);
}
.navword2 {
  position: absolute;
  top: 16.5%;
  left: 10.9%;
  width: 13.9%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'FZLanTYJW_Cu';
  font-size: 0.95vw;
  color: #6a6a6a;
}
.navword2 p {
  font-size: 0.7vw;
}
.split2 {
  position: absolute;
  top: 21.5%;
  left: 10.9%;
  width: 78.1vw;
  height: 0.05vw;
  background-color: #1189f9;
  display: flex;
  align-items: center;
}
.split2 div {
  position: absolute;
  width: 1.9%;
  height: 0.15vw;
  background-color: #1189f9;
}
#newscontainer {
  position: absolute;
  top: 22.5%;
  left: 10.9%;
  width: 85.1vw;
  height: 37.5vw;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
}
.newsc {
  width: 37.3vw;
  height: 12.9vw;
  margin-right: 3.5vw;
  position: relative;
}
.container {
  position: absolute;
  width: 103%;
  height: 80%;
  top: 5%;
  right: 0%;
  transition: all 0.3s ease;
}
.container:hover {
  width: 106.5%;
  border-radius: 1vw;
  box-shadow: 0 0 .3vw rgba(17, 137, 249, 0.5);
}
.image {
  position: absolute;
  width: 14.3vw;
  height: 78%;
  top: 12%;
  left: 1.1vw;
  box-shadow: -0.1vw .1vw .3vw rgba(0, 0, 0, 0.2);
  border-radius: 1vw;
  overflow: hidden;
}
.name2 {
  position: absolute;
  top: 75%;
  left: 16.7vw;
  width: 3.5vw;
  height: 2.4vh;
  line-height: 2.4vh;
  border-radius: 0.4vw;
  text-align: center;
  font-size: 0.85vw;
  color: white;
  background-color: #1189f9;
  font-family: "FZLanTYJW_Cu";
}
.newstitle2 {
  position: absolute;
  height: 2.4vh;
  line-height: 2.4vh;
  font-size: 0.88vw;
  font-family: "FZLanTYJW_Cu";
  color: #696969;
  width: 100%;
  left: 16.7vw;
  top: 12%;
}
.time2 {
  position: absolute;
  top: 75%;
  left: 20.7vw;
  height: 2.4vh;
  line-height: 2.4vh;
  font-size: 0.7vw;
  font-family: "TVPS-Vain-Capital";
  color: #878787;
  width: 90%;
}
.split3 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
}
.content {
  position: absolute;
  top: 44%;
  left: 16.7vw;
  font-family: SourceHanSansCN-Regular;
  font-size: 0.68vw;
  color: #919191;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 21.7vw;
  height: 18%;
  text-overflow: ellipsis;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
#switch {
  position: absolute;
  width: 89%;
  height: 9vw;
  top: 23.5vw;
  left: 5.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  pointer-events: none;
}
#switch div {
  width: 3.4%;
  height: 8vw;
  transition: all 0.3s ease;
}
.prev {
  background-image:url('/set/left.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.prev:hover {
  background-image:url('/set/left_h.png');
}
.next {
  background-image:url('/set/right.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.next:hover {
  background-image:url('/set/right_h.png');
}

#followImage4 {
  position: absolute;
  width: 2.1vw;
  height: auto;
  pointer-events: none; 
  opacity: 0;
  transition: opacity 0.2s ease; 
  z-index: 40;
}

#changebutton {
  position: absolute;
  top: 73%;
  left: 31.95vw;
  width: 6.5vw;
  height: 1.5vw;
  border: .15vw solid #1189F9;
  border-radius: 1.5vw;
  transition: all .3s ease;
  display: flex;
  align-items: center;
}
#changebutton span {
  font-size: .62vw;
  font-family: TVPS-Vain-Capital;
  color: #1189f9;
  margin-left: .7vw;
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
  right: .1vw;
  width: 1.2vw;
  height: 1.2vw;
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
  width: .4vw;
  height: .4vw;
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
  width: .5vw;
  height: .5vw;
  border-radius: 50%;
  background-color: #1189f9;
  transition: all .3s ease;
}
#changebutton:hover .iconbox:after {
  width: 100%;
  height: 100%;
  background-color: white;
}

#mobile, .split4, #close2, .pagination {
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
  .videoContainer, #followImage4, #changebutton, .content, .split3, #switch {
    display: none;
  }
  #mobile{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: url('/news/mobile/bg.png') no-repeat;
    background-size: 100%;
    z-index: -10;
  }
  #newsnav {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
  }
  .title, #close {
    display: none;
  }
  .newswp {
    position: absolute;
    width: 50vw;
    top: 13vw;
    left: 8vw;
    z-index: -1;
  }
  .navword {
    position: absolute;
    top: 81vw;
    left: 10vw;
    width: 80%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'FZLanTYJW_Cu';
    font-size: 3.8vw;
    color: #6a6a6a;
  }
  .navword p {
    font-size: 2vw;
  }
  .nav-link {
    display: flex;
    align-items: center;
  }
  .nav-link div:hover {
    color: #1189f9;
  }
  .selected {  
    color: #1189f9;
  }
  .nav-link p {
    margin-left: 8vw;
  }
  .split {
    position: absolute;
    width: 80vw;
    top: 89vw;
    left: 10vw;
    z-index: -2;
  }
  .morenews {
    position: absolute;
    font-family: "FZLanTYJW_Cu";
    color: #1289f9;
    font-size: 3vw;
    right: 10vw;
    top: 160vw;
  }
  #newscontent {
    position: absolute;
    width: 80%;
    height: 65vw;
    top: 94vw;
    left: 10vw;
    display: flex;
    flex-direction: column;
  }
  .item {
    border-bottom: .5vw solid #c4c4c4;
    width: 100%;
    height: 25%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    position: relative;
    transition: all 0.3s ease;
  }
  .item:last-child {
    border: none;
  }
  .item .name {
    position: absolute;
    top: 3vw;
    width: 11%;
    height: 3vw;
    line-height: 3.5vw;
    border-radius: 1vw;
    text-align: center;
    font-size: 2vw;
    color: white;
    background-color: #1189f9;
    font-family: "FZLanTYJW_Cu";
  }
  .item .newstitle {
    position: absolute;
    height: 3vw;
    line-height: 3vw;
    font-size: 3vw;
    font-family: "FZLanTYJW_Cu";
    color: #696969;
    width: 100%;
    left: 0.2vw;
    top: 9vw;
  }
  .item .time {
    position: absolute;
    top: 8.5vw;
    right: 0;
    height: 3vw;
    line-height: 3vw;
    font-size: 2vw;
    font-family: "junegull_rg";
    color: #b1b4b7;
    width: auto;
  }
  .item .bottom_border {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 4vw;
    height: 1vw;
    border-bottom: .1vw solid #c4c4c4;
  }
  .item:last-child .bottom_border {
    border: none;
  }

  #swipercontainer {
    position: fixed;
    top: 20vw;
    left: 5.5vw;
    width: 80vw;
  }
  .slideshow-container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skew(170deg) !important;
    transform-origin: left bottom;
    border-radius: 2vw;
    border: 1vw solid #ffffff;
    filter: drop-shadow(.3rem .3rem rgba(138, 138, 138, .2823529412));
  }
  .swipercontainer {
    display: flex;
    justify-content: center; 
    align-items: center;
    transform: skew(-170deg);
  }
  #newsswiper {
    display: flex;
    width: 88vw;
    transition: transform 0.5s ease;
  }
  #newsswiper img {
    height: auto;
    max-width: 100%;
  }
  
  .dots-container {
    margin-top: 1.5vh;
    display: flex;
    justify-content: end;
  }
  .dot {
    width: 1vw;
    height: 1vw;
    margin-right: 2vw;
    background-color: #dadada;
    border-radius: 50%;
    display: inline-block;
  }
  .dot.active {
    background-color: #1189F9;
    width: 4vw;
    border-radius: 1.5vw;
  }
  #newsswp {
    position: fixed;
    width: 50vw;
    top: 60vw;
    right: 5vw;
    z-index: 1;
    pointer-events: none;
  }


  #newsdetails {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: url('/news/mobile/bg.png') no-repeat;
    background-size: 100%;
    top: 0;
  }
  .navword2 {
    position: absolute;
    top: 12vw;
    left: 10vw;
    width: 80%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'FZLanTYJW_Cu';
    font-size: 3.8vw;
    color: #6a6a6a;
  }
  .navword2 p {
    font-size: 2vw;
  }
  .split2 {
    position: absolute;
    top: 22vw;
    left: 10vw;
    width: 80vw;
    height: 0.05vw;
    background-color: #1189f9;
    display: flex;
    align-items: center;
  }
  .split2 div {
    position: absolute;
    width: 5%;
    height: 0.45vw;
    background-color: #1189f9;
  }
  #newscontainer {
    position: absolute;
    top: 22vw;
    left: 10vw;
    width: 80vw;
    height: 144vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
  .newsc {
    width: 80vw;
    height: 24vw;
    margin-right: 3.5vw;
    position: relative;
  }
  .container {
    position: absolute;
    width: 100%;
    height: 80%;
    top: 5%;
    right: 0%;
  }
  .image {
    position: absolute;
    width: 26.5vw;
    height: 78%;
    top: 12%;
    left: 0vw;
    box-shadow: -0.1vw .1vw .3vw rgba(0, 0, 0, 0.2);
    border-radius: 1vw;
    overflow: hidden;
  }
  .name2 {
    position: absolute;
    top: 72%;
    left: 29.5vw;
    width: 9vw;
    height: 3vw;
    line-height: 3vw;
    border-radius: 0.8vw;
    text-align: center;
    font-size: 2.2vw;
    color: white;
    background-color: #1189f9;
    font-family: "FZLanTYJW_Cu";
  }
  .newstitle2 {
    position: absolute;
    height: 2vw;
    line-height: 2vw;
    font-size: 2.5vw;
    font-family: "FZLanTYJW_Cu";
    color: #696969;
    width: 100%;
    left: 29.5vw;
    top: 15%;
  }
  .time2 {
    position: absolute;
    top: 68%;
    right: 0vw;
    height: 2.4vh;
    line-height: 2.4vh;
    font-size: 2.2vw;
    font-family: "TVPS-Vain-Capital";
    color: #878787;
    width: 13%;
  }
  .split4 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
  }

  #switch {
    position: absolute;
    width: 89%;
    height: 9vw;
    top: 23.5vw;
    left: 5.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    pointer-events: none;
  }
  #switch div {
    width: 3.4%;
    height: 8vw;
    transition: all 0.3s ease;
  }
  .prev {
    background-image:url('/set/left.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
  .next {
    background-image:url('/set/right.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
  #close2 {
    position: absolute;
    width: 15vw;
    height: auto;
    top: 77%;
    right: 10.95%;
    font-family: "FZLanTYJW_Cu";
    color: #1289f9;
    font-size: 3vw;
    right: 6vw;
  }

  .pagination {
    position: absolute;
    top: 76.5%;
    left: 48%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .prev {
    width: 12vw;
    height: 6vw;
    background: url('/photo/cl_h.png') no-repeat;
    background-size: 100%;
  }
  .next {
    width: 12vw;
    height: 6vw;
    background: url('/photo/cr_h.png') no-repeat;
    background-size: 100%;
  }
  .pageUnhover_l {
    width: 12vw;
    height: 6vw;
    background: url('/photo/cl.png') no-repeat;
    background-size: 100%;
    pointer-events: none;
  }
  .pageUnhover_r {
    width: 12vw;
    height: 6vw;
    background: url('/photo/cr.png') no-repeat;
    background-size: 100%;
    pointer-events: none;
  }
  .pagenum {
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
  .pagenumactive {
    color: #008dff;
  }
}
</style>

<script setup>
import { ref, reactive, onMounted, onUnmounted, onBeforeUnmount, computed } from 'vue'
import { useHoverFollower } from '@/components/useHoverFollower'
const show = ref(false);
let intervalId1 = [];
onMounted(()=>{
  intervalId1.push(setTimeout(() => {
    show.value = !show.value;
  }, 0));
})

onBeforeUnmount(() => {
  clearInterval(intervalId1);
});

const navItems = ref([  
  { name: '最新', type: 'all' },  
  { name: '新闻', type: 'type1' },  
  { name: '公告', type: 'type2' },  
  { name: '活动', type: 'type3' },  
]);  
const selectedIndex = ref(0);
const selectNav = (index) => {  
  selectedIndex.value = index;  
};

// 使用 import.meta.glob 批量导入图片
const image = import.meta.glob('@/assets/news/*.png', { eager: true });
// 将导入的图片转换为需要的格式
const imageMap = Object.keys(image).reduce((acc, path) => {
    const key = path.split('/').pop().replace('.png', ''); // 提取文件名作为 key
    acc[key] = image[path].default; // 获取图片的默认导出
    return acc;
}, {});

const images = ref([
  { src: imageMap['r1'], alt: 'Image 1', url: 'https://bluearchive-cn.com/news/1119' },
  { src: imageMap['r2'], alt: 'Image 2', url: 'https://bluearchive-cn.com/news/1041' },
  { src: imageMap['r3'], alt: 'Image 3', url: 'https://bluearchive-cn.com/news/1008' },
  { src: imageMap['r4'], alt: 'Image 4', url: 'https://bluearchive-cn.com/news/791' },
  { src: imageMap['r5'], alt: 'Image 5', url: 'https://bluearchive-cn.com/news/781' },
  { src: imageMap['r6'], alt: 'Image 6', url: 'https://bluearchive-cn.com/news/686' },
  { src: imageMap['r7'], alt: 'Image 7', url: 'https://bluearchive-cn.com/news/685' },
  { src: imageMap['r8'], alt: 'Image 8', url: 'https://bluearchive-cn.com/news/160' },
]);
const currentImageIndex = ref(0);
let intervalId2;
const startSlideshow = () => {
  intervalId2 = setInterval(() => {
    nextImage();
  }, 3000);
};
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};
const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length;
};
const handleDotClick = (index) => {
  if (index !== currentImageIndex.value) {
    clearInterval(intervalId2);
    goToImage(index);
    startSlideshow();
  }
};
const goToImage = (index) => {
  currentImageIndex.value = index;
};

let startX = 0;
let isDragging = false;
const startMouse = (event) => {
  startX = event.clientX;
  isDragging = true;
  clearInterval(intervalId2);
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
    clearInterval(intervalId2);
    startSlideshow();
    isDragging = false;
  }
};

const startTouch = (event) => {
  startX = event.touches[0].clientX;
  clearInterval(intervalId2);
  startSlideshow();
};
const moveTouch = (event) => {
  if (!startX) return;
  const endX = event.touches[0].clientX;
  const diffX = startX - endX;
  if (diffX > 50) {
    nextImage();
    startX = 0;
  } else if (diffX < -50) {
    prevImage();
    startX = 0;
  }
};
const endTouch = () => {
  clearInterval(intervalId2);
  startSlideshow();
};

onMounted(() => {
  startSlideshow();
});
onBeforeUnmount(() => {
  clearInterval(intervalId2);
});

const navigateToUrl = (url) => {
  window.open(url, '_blank');
  clearInterval(intervalId2);
  startSlideshow();
};

const { hoverArea, followImage, followImage2 } = useHoverFollower('[class*="hoverarea"]', 'followImage', 'followImage2');

const state = reactive({
  currentPage: 1,
  itemsPerPage: 6,
  currentCategory: 'all',
  transitionName: 'slide',
  categories: [
    { id: 'type1', sub: [] },
    { id: 'type2', sub: [] },
    { id: 'type3', sub: [] },
    { id: 'all', sub: [] } 
  ]
})

const news = ref([
  { name: '新闻', image: '/news/morenews/news/maintenance.jpeg', title: '10月17日维护更新说明', time: '2024-10-16', web:'https://bluearchive.jp/news/newsJump/327', 
  content:`
&nbsp; 
“欢迎连接【什亭之箱】，老师。”  
为保证更好的游戏体验，我们计划于 10月17日 14:00 开始进行维护更新，预计持续 4小时 ，维护开始后将无法登录游戏，在游戏中的玩家会被系统强制要求下线。  
为确保账号数据正常，请在维护前结束关卡并关闭游戏。  
开服时间根据实际情况可能会出现提前或延后的情况，请关注官方消息。  
以下是本次维护更新的详细内容：  
■ 维护时间  
10月17日 14:00 ~ 18:00（预计）  
■ 更新内容  
1、更新限时复刻活动【船上的兔子追击者】，C&amp;C接到逮捕千禧年的问题成员“白兔”的任务。而白兔逃跑的地方竟然是其他自管区的豪华邮轮！C&amp;C成员们为了隐藏身份，装扮上特殊的衣服潜入……  
2、更新限时招募【过午时分的六六大顺】，在本次招募中，全新成员“茜（邦妮）”登场，且招募概率得到提升！  
3、更新限定限时复刻招募【不容分说的孤注一掷】，成员“妮露（邦妮）”招募概率得到提升！  
4、更新限定限时复刻招募【艳光四射的金玉满堂】，成员“花凛（邦妮）”招募概率得到提升！  
5、更新限时复刻招募【出其不意的帽子戏法】，成员“明日奈（邦妮）”招募概率得到提升！  
6、更新总力战【格兹 • 室内战】，挑战总力战首领可获得累计积分奖励和排名奖励；刷新【总力战商店】商品可购买次数。  
7、更新【支线剧情】，新增“Cleaning&amp;Clearing”相关支线故事。  
8、更新日程区域【百鬼夜行中心区】，拥有5名及以上百鬼夜行成员即可解锁。  
9、更新【家具互动动作】：“&nbsp;茜（邦妮）&amp;黑金吧台椅”、“明日奈（邦妮）&amp;银蓝吧台椅”、“花凛（邦妮）&amp;深紫吧台椅”、“妮露（邦妮）&amp;金红吧台椅”。  
10、更新【成就任务】内容。  
■ 资源预加载  
1、提前加载下列活动对应的游戏资源，活动预计于10月24日14:00开启，详情请关注后续消息：  
&nbsp;• 提前加载限时复刻活动【沙勒的快乐♥情人节巡逻&amp;若藻的沉默与欢宴】，全新成员“美祢”、复刻成员“濑名”、“千寻”对应招募活动的游戏资源  
&nbsp;• 提前加载家具互动动作【美祢&amp;优雅的花朵茶几】对应的游戏资源  
&nbsp;• 提前加载限时活动【与联邦理事会一起的沙勒回忆录】对应的游戏资源  
&nbsp;• 提前加载综合战术测试【突破 • 轻装甲】的游戏资源    
2、提前加载下列活动对应的游戏资源，活动预计于10月31日14:00开启，详情请关注后续消息：  
&nbsp;• 提前加载主线剧情【最终篇 一切奇迹的起点篇 第1章 “沙勒夺回战”（1~15话）】对应的游戏资源  
&nbsp;• 提前加载总力战【比纳 • 街区战】对应的游戏资源  
3、提前加载【各游戏道具商店】下一期的商品资源，预计于11月01日04:00可更新到最新的商品：  
&nbsp;• 神名精髓Ⅱ商店：秘仪之书、完整的撞针、铬合金撞针、以太系列、费斯托斯圆盘系列、沃尔夫塞格铁系列、圆盘吊坠系列  
&nbsp;• 悬赏通缉商店：各等级的战术教育光盘&amp;技术笔记（崔尼蒂）、各等级的战术教育光盘&amp;技术笔记（百鬼夜行）、罗洪特写本系列、伏尼契手稿系列  
&nbsp;• 熟练证书商店：新增“泉奈（泳装）”、“千世（泳装）”的神名文字  
&nbsp; 
※ 限时活动【新年开胃菜 ~一局定输赢~】、限时招募【改岁不移志 笑意盈盈春风里 纵情饱口福】、【初诣未迁昔日愿 款待之思恒久远】、【迎候黎明的咖啡 印予手背的誓言】将于10月17日13:59结束，还请各位老师留意结束时间。  
■ 维护补偿  
以邮件的形式发放【青辉石×480】作为补偿    
■ 补偿范围  
10月17日14:00维护前注册账号并创建游戏角色的玩家    
■ 发放时间  
维护结束后 ~ 10月20日 03:59    
■ 有效时间  
邮件在邮箱内的有效期为7*24小时，请及时领取  
给您带来不便我们深感歉意，感谢您的包容与理解。  
祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
《蔚蓝档案》运营团队
` },
  { name: '新闻', image: '/news/morenews/news/notice.jpeg', title: '2024年10月11日封禁公示说明', time: '2024-10-11',web:'https://bluearchive.jp/news/newsJump/324', 
  content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
 &nbsp; 
  为保证各位老师的游戏体验与账号安全，联邦理事会将会一直严厉打击任何以不正当手段破坏游戏公平性的行为，绝不容忍任何外挂、非法第三方工具在基沃托斯出现。致力于为老师提供绿色、安全、公平的游戏体验。  
 &nbsp; 
  自上次09月20日公示封禁至今，我们仍持续对服务器游戏数据进行检验、核实及分析，针对其中违反游戏安全条例，使用第三方非法外挂、脚本或恶意修改游戏内数据行为的账号，进行相应封停、冻结处罚。  
 &nbsp; 
  在09月20日至10月11日这段时间内，总计处理违规账号66个，详细名单可见公告最下方。  
  后续我们仍会实时监控服务器数据查处违规账号。  
 &nbsp; 
  若您对封禁结果存在疑问，可通过客服邮箱进行账号申诉。  
  客服邮箱：cs@blue-archive.cn  
 &nbsp; 
  在我们竭力保证老师游戏体验的同时，请老师切勿购买、使用游戏外挂、辅助脚本等第三方工具。为了保护您的利益安全，也请您不要在各类第三方平台上进行账号交易、代充值行为。若因在第三方账号交易中产生了个人经济损失或账号纠纷，我们将不予处理。还请各位老师相互监督，共同维护基沃托斯的公平健康游戏生态。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
   《蔚蓝档案》运营团队  
 &nbsp; 
 &nbsp; 
  违规账号公示如下：  
 &nbsp; 
  ■ 永久冻结账号  
  10008*****2 10009*****9 20009*****3 10009*****8 10011*****9 10007*****9 10011*****2  
 &nbsp; 
  ■ 限时封禁账号（7天/14天）  
  10009*****9 10009*****2 10008*****2 10007*****0 10010*****2 10011*****0 10012*****0 10006*****0 20009*****6 10011*****5 20010*****5 10012*****2 10009*****4 10012*****6 10012*****7 10009*****3 10012*****7 10010*****2 10011*****4 20010*****0 20007*****1 20009*****1 10009*****0 10012*****9 10009*****9 10010*****1 10010*****1 10009*****3 20009*****2 10010*****2 10011*****2 10011*****7 10010*****2 10008*****0 10009*****8 10006*****3 10012*****0 20009*****3 10010*****0 20010*****2 10011*****2 10008*****9 10012*****3 10012*****9 20009*****8 20007*****4 20010*****5 20009*****6 20009*****7 10010*****9 10009*****3 10009*****8 10010*****7 10006*****7 10011*****9 10009*****6 10007*****0 20010*****3 10007*****8  ` },
  { name: '新闻', image: '/news/morenews/news/note13.jpeg', title: '阿洛娜的日程笔记（第13期）', time: '2024-10-09',web:'https://bluearchive.jp/news/newsJump/324', 
  content:`     
 &nbsp; 
  “欢迎连接什亭之箱，老师。”  
  &nbsp;  
  救护骑士团的慈善活动已经圆满结束了！芹娜小姐与花江小姐亲手织好的帽子和手套还暖和吗？她们还去参加了正义实现部的年会呢！那里有美味的蛋糕、香喷喷的红茶……不过，做奶茶时，是往牛奶里倒入红茶呢，还是往红茶里加牛奶呢？好复杂……阿洛娜也搞不清楚……  
  对了，美食研究会的各位正在和风香小姐一起拯救宝藏餐厅麻雀亭，据晴奈小姐说，那里的年糕汤可是一绝呢！您一定要去尝尝！  
  &nbsp;  
  在老师辛苦工作的同时，阿洛娜也已经准备了后续的新内容哦！为了避免错过，希望您在百忙之中抽空阅读一下最新的日程笔记！  
  &nbsp;  
  老师可以通过日程笔记，继续规划后续的工作安排。接下来在基沃托斯，又会发生什么故事呢？老师一定很期待吧~  
   除此之外，阿洛娜还为老师准备了【青辉石×600】作为本次日程笔记纪念奖励，当前已通过游戏内邮件发放。请老师注意查收！  邮件有效期：2024年10月09日 16:00 ~ 2024年10月17日 03:59  
  &nbsp;  
  事不宜迟，老师快来看看本期的【阿洛娜日程笔记】吧！    
    【船上的兔子追击者】限时复刻活动更新预告   
  一、限时复刻活动【船上的兔子追击者】即将开启      
 &nbsp; 
  活动持续时间：10月17日 维护结束后 ~ 10月24日 13:59  
 &nbsp; 
  行动点助力：10月17日起，将连续7天每天发放【行动点×240】，总计发放【行动点×1680】     
  二、限时招募即将开启          
 &nbsp; 
  限时招募【过午时分的六六大顺】即将开启！全新3★成员“茜（邦妮）”登场，且招募概率得到提升！  
  限定限时复刻招募【不容分说的孤注一掷】即将开启！在本次招募中，3★限定成员“妮露（邦妮）”的招募概率得到提升！  
  限定限时复刻招募【艳光四射的金玉满堂】即将开启！在本次招募中，3★限定成员“花凛（邦妮）”的招募概率得到提升！  
  限时复刻招募【出其不意的帽子戏法】即将开启！在本次招募中，3★成员“明日奈（邦妮）”的招募概率得到提升！  
   招募时间：10月17日 维护结束后 ~ 10月24日 13:59    
      
 &nbsp; 
  【总力战：格兹（室内战）】 开启时间：10月17日 维护结束后 ~ 10月24日 03:59  
  &nbsp;  
  除此之外，还将增加熟练商店商品内容，以及更新日程区域【百鬼夜行中心部】、新增支线剧情等。    【沙勒的快乐情人节巡逻】限时复刻活动更新预告  一、限时复刻活动【沙勒的快乐情人节巡逻】即将开启    
 &nbsp; 
  活动持续时间：10月24日 14:00 ~ 11月07日 维护开始前   
  11月07日维护更新将于当日10:00开启，限时复刻活动【沙勒的快乐情人节巡逻】将于11月07日维护开启时结束，请老师注意活动时间避免造成损失。  行动点助力：10月24日起，将连续7天每天发放【行动点×240】，总计发放【行动点×1680】  
      
  二、【最终篇 一切奇迹的起点】第1章 即将更新    
 &nbsp; 
  更新时间：10月31日 14:00   
   最终篇剧情开启纪念礼物：青辉石 × 1200、总力战奖币 × 500  
  邮件领取时间：10月31日 14:00 ~ 11月07日 维护开始前     
  三、限时招募即将开启      
 &nbsp; 
  限时招募【着装规范是钢铁白衣】即将开启！全新3★成员“美祢”登场，且招募概率得到提升！  
  限时复刻招募【郑重自主，以骄傲宣誓】即将开启！在本次招募中，3★成员“濑名”的招募概率得到提升！  
  限时复刻招募【从大教堂到市集】即将开启！在本次招募中，3★成员“千寻”的招募概率得到提升！  
   招募时间：10月24日 14:00 ~ 11月07日 维护开始前  
      
  四、综合战术测试【突破测试·轻装甲】即将开启  
     
 &nbsp; 
  开启时间：10月24日 14:00 ~ 10月31日 03:59     
  五、总力战预告  
     
 &nbsp; 
  【总力战：比纳（街区战）】  
  开启时间：10月31日 14:00 ~ 11月07日 03:59     
  六、限时任务【与联邦理事会一起的沙勒回忆录】即将开启    
  开启时间：10月24日 14:00 ~ 12月05日 维护开始前  
 &nbsp; 
  11月07日维护预计将于当日10:00开启。限时复刻活动【沙勒的快乐情人节巡逻】与相关限时招募将于11月07日维护开启时结束。请老师注意活动结束时间避免造成损失。  
  11月07日维护更新需要重新下载安装游戏客户端，维护更新后，将实装各项功能新增及优化。  
      
   【最终篇 一切奇迹的起点】第2章更新预告   
  一、【最终篇 一切奇迹的起点】第2章即将更新    
  更新时间：11月07日 维护结束后     
  二、限时联合作战【虚妄圣所攻略战】即将开启    
 &nbsp; 
  活动时间：11月07日 维护结束后 ~ 12月05日维护开始前  
  虚妄圣所攻略战进行时间：11月08日 11:00 ~ 11月21日 13:59    
  联合作战助力应援邮件：青辉石 × 1200、总力战奖币、熟练证书以及各类养成素材等   
  可领取时间：11月07日 维护结束后 ~ 11月21日 13:59     
  三、庆典招募即将开启     
  庆典招募【你是夜色中的纯真希望】即将开启！全新3★限定成员“未花”登场，且招募概率得到提升！  
  在本次庆典招募中，3★成员的整体招募概率将从3%提升至➟ 6% ，其中3★限定成员“未花”的招募概率为0.7%。  
  招募时间：11月07日 维护结束后 ~ 11月14日 13:59  庆典招募助力：10次招募券×1  
  助力邮件可领取时间：11月07日 维护结束后 ~ 11月14日13:59     
  四、限时招募即将开启  
        
  限时招募【正义如咖啡般醇香】即将开启！全新3★成员“康娜”登场，且招募概率得到提升！  
  限时招募【勇气如温泉般炽热】即将开启！全新3★成员“惠”登场，且招募概率得到提升！  
   招募时间：11月14日 14:00 ~ 11月24日 13:59     
  五、每日免费招募即将开启     
  只要登录游戏就可至多获得100次免费招募次数，这是老师与更多成员相遇的绝好机会，可千万别错过啦！  
  活动时间：11月14日 14:00 ~ 11月24日 13:59  
  活动期间登录游戏，每天都可以获得免费招募次数，总计至多可获得100次免费招募次数。  
  &nbsp;  
    ※ 免费招募次数可用于活动时间内开启的“限时招募”与“长期招募”，且每次进行招募都可以获得相应数量的招募点数。未使用的免费招募次数，在活动期间内可以累积。       
  六、限时签到活动【最终篇特别纪念登录奖励！】即将开启  
    活动时间：11月07日 维护结束后 ~ 12月05日 维护开始前     
  七、限时网页活动【梦幻美味挑战！未花的蛋糕卷修行】即将开启     
  开启时间：11月07日 维护结束后 ~ 11月21日 03:59  
  限时网页活动奖励内容：青辉石 × 300、信用积分、熟练证书及各类养成素材。  
  &nbsp;  
  除此之外，11月07日维护结束后还将实装【特别委托】难度L关卡、【等级】上限提升、【爱用品更新】、【好友人数】扩充、【小组最大人数】扩充等相关内容。      
   【冒失修女与古书馆的魔法师】限时复刻活动更新预告  一、限时复刻活动【冒失修女与古书馆的魔法师】即将开启     
  活动持续时间：11月24日 14:00 ~ 12月05日 维护开始前     二、限时招募即将开启         
  限时招募【无伪信仰 甘甜果实】即将开启！全新3★成员“樱子”登场，且招募概率得到提升！  
  限时复刻招募【无声话语，仿似残荷】即将开启！在本次招募中，3★成员“忧”的招募概率得到提升！  
  限时复刻招募【无私相助，一曲赞歌】即将开启！在本次招募中，3★成员“日向”的招募概率得到提升！  
   招募时间：11月24日 14:00 ~ 12月05日 维护开始前     
  三、综合战术测试【射击测试·轻装甲】即将开启     
  活动时间：11月28日 14:00 ~ 12月05日 03:59     
   【道具掉落量2倍活动】更新预告    
    【任务（普通难度）】道具掉落量2倍  
  开启时间：10月17日 04:00 ~ 10月21日 03:59    
  【任务（困难难度）】道具掉落量2倍  
  开启时间：10月21日 04:00 ~ 10月24日 03:59      
   【道具掉落量3倍活动】更新预告      
  【悬赏通缉】、【日程】、【学院交流会】道具掉落量3倍  
  开启时间：10月24日 04:00 ~ 10月31日 03:59  【任务（普通难度）】道具掉落量3倍  
  开启时间：10月31日 04:00 ~ 11月04日 03:59  【任务（困难难度）】道具掉落量3倍  
  开启时间：11月04日 04:00 ~ 11月07日 03:59  【悬赏通缉】、【日程】、【学院交流会】、【特别委托】道具掉落量3倍  
  开启时间：11月07日 04:00 ~ 11月14日 03:59  
   【任务（普通难度）】道具掉落量3倍  
  开启时间：11月14日 04:00 ~ 11月18日 03:59  
   【任务（困难难度）】道具掉落量3倍  
  开启时间：11月18日 04:00 ~ 11月21日 03:59  
   【悬赏通缉】、【日程】、【特别委托】道具掉落量3倍  
  开启时间：11月21日 04:00 ~ 11月28日 03:59  
   【学院交流会】道具掉落量3倍  
  开启时间：11月28日 04:00 ~ 12月05日 03:59  
   【任务（普通难度）】道具掉落量3倍  
  开启时间：11月28日 04:00 ~ 12月02日 03:59  
   【任务（困难难度）】道具掉落量3倍  
  开启时间：12月02日 04:00 ~ 12月05日 03:59     
   【账号经验值2倍活动】更新预告      
  【账号经验值2倍活动】即将开启！活动期间，完成任务区域、特别委托、学院交流会、活动等行动点消耗内容时获得的账号经验值将变为2倍，老师可千万不要错过哦！   活动开启时间： 11月09日 04:00 ~ 11月11日 03:59  11月16日 04:00 ~ 11月18日 03:59 11月23日 04:00 ~ 11月25日 03:59  11月30日 04:00 ~ 12月02日 03:59  
 &nbsp; 
  日程笔记仅供老师参考未来版本更新后活动内容及招募时间等内容，具体活动规则还请老师关注后续官方社媒及游戏内、官网的公告。    
  那么老师，下一期的日程笔记再见！  
   &nbsp;   ` },
  { name: '新闻', image: '/news/morenews/news/maintenance.jpeg', title: '09月26日维护更新说明', time: '2024-9-25',web:'https://bluearchive.jp/news/newsJump/324', 
  content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”    
  为保证更好的游戏体验，我们计划于  09月26日 14:00  开始进行维护更新，预计持续 4小时 ，维护开始后将无法登录游戏，在游戏中的玩家会被系统强制要求下线。  
  为确保账号数据正常，请在维护前结束关卡并关闭游戏。  
  开服时间根据实际情况可能会出现提前或延后的情况，请关注官方消息。  
 &nbsp; 
  以下是本次维护更新的详细内容：  
   ■ 维护时间  
  09月26日 14:00 ~ 18:00（预计）  
   ■ 更新内容  
  1、更新限时复刻活动【227号温泉乡运营记录！】，某一日，红冬的旧楼突然喷出了温泉。以此为契机，227号特别班的学员们开始经营大规模的温泉浴场。和香和她的朋友们能否克服重重困难，顺利地将温泉乡经营下去呢？  
  2、更新限时招募【银装素裹，一樽星月】，新成员“时雨”登场，且招募概率得到提升！  
  3、更新限时复刻招募【革命与极乐的恩威并济】，成员“切里诺（温泉）”招募概率得到提升！  
  4、更新限时复刻招募【职责与休息的二律背反】，成员“千夏（温泉）”招募概率得到提升！  
  5、更新限时复刻招募【氤氲水汽 融于星月夜中】，成员“和香（温泉）”招募概率得到提升！  
  6、更新总力战【白&amp;黑 • 街区战】（本期为紧急总力战，赛季时间和奖励领取时间较短），挑战总力战首领可获得累计积分奖励和排名奖励；刷新【总力战商店】商品可购买次数。  
  7、更新【区域21】，可获得咖啡厅升级道具和“好美、佳代子、日富美（泳装）”的【神名文字】。  
  8、更新限时招募活动【3★必得招募】，活动期间使用【3★成员必得招募券】可以进行10次招募，且必定能招募到至少1名3★成员；【3★成员必得招募券】可在礼包界面购买【福袋礼包】获得。  
  9、更新【家具互动动作】：时雨&amp;清新水果吧。  
  10、新增【限时礼包】：福袋礼包。  
  11、更新【成就任务】内容。  
   ■ 资源预加载  
  1、提前加载【各游戏道具商店】下一期的商品资源，预计于10月01日04:00可更新到最新的商品：  
  &nbsp;• 神名精髓Ⅱ商店：秘仪之书、完整的撞针、铬合金撞针、水晶埴轮系列、尼姆鲁德透镜系列、罗洪特写本系列、图腾柱系列。  
  &nbsp;• 悬赏通缉商店：各等级的战术教育光盘&amp;技术笔记（瓦尔基丽）、各等级的战术教育光盘&amp;技术笔记（阿拜多斯）、曼德拉草系列、以太系列。  
  &nbsp;• 熟练证书商店：新增T6装备设计图选择券。  
  2、提前加载下列活动对应的游戏资源，活动预计于10月03日14:00开启，详情请关注后续消息：  
  &nbsp;• 提前加载限时活动【新年开胃菜 ~一局定输赢~】，全新限定成员“晴奈（新年）、风香（新年）”、复刻成员“亚子”对应招募活动的游戏资源。  
  &nbsp;• 提前加载家具互动动作【晴奈（新年）、纯子（新年） &amp; 新年美食套装桌】、【风香（新年） &amp; 花纹丝绸和服挂饰】对应的游戏资源。  
  &nbsp;• 提前加载限时活动【沙勒黄金周指引任务】的游戏资源。  
  &nbsp;• 提前加载总力战【回转 FX Mk.0 • 野外战】的游戏资源。  
  3、提前预加载综合战术测试【防御 • 重装甲】，活动预计将于10月10日14:00开启，详情请关注后续消息。  
   ※ 限时活动【圣堂的圣夜祝福 ~救护骑士团的礼物~】、限时招募【响彻圣夜的慈爱颂歌】、【赠与雪夜的温暖祝福！】将于09月26日13:59结束，还请各位老师留意结束时间。  
   ■ 维护补偿  
  以邮件的形式发放【青辉石×480】作为补偿。  
   ■ 补偿范围  
  09月26日14:00维护前注册账号并创建游戏角色的玩家。  
   ■ 发放时间  
  维护结束后 ~ 09月29日 03:59    
  ■ 有效时间  
  邮件在邮箱内的有效期为7*24小时，请及时领取。  
   给您带来不便我们深感歉意，感谢您的包容与理解。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },
  { name: '新闻', image: '/news/morenews/news/notice.jpeg', title: '2024年09月20日封禁公示说明', time: '2024-09-20',web:'https://bluearchive.jp/news/newsJump/318', 
  content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
 &nbsp; 
  为保证各位老师的游戏体验与账号安全，联邦理事会将会一直严厉打击任何以不正当手段破坏游戏公平性的行为，绝不容忍任何外挂、非法第三方工具在基沃托斯出现。致力于为老师提供绿色、安全、公平的游戏体验。  
 &nbsp; 
  自上次09月03日公示封禁至今，我们仍持续对服务器游戏数据进行检验、核实及分析，针对其中违反游戏安全条例，使用第三方非法外挂、脚本或恶意修改游戏内数据行为的账号，进行相应封停、冻结处罚。  
 &nbsp; 
  在09月03日至09月20日这段时间内，总计处理违规账号56个，详细名单可见公告最下方。  
  后续我们仍会实时监控服务器数据查处违规账号。  
 &nbsp; 
  若您对封禁结果存在疑问，可通过客服邮箱进行账号申诉。  
  客服邮箱：cs@blue-archive.cn  
 &nbsp; 
  在我们竭力保证老师游戏体验的同时，请老师切勿购买、使用游戏外挂、辅助脚本等第三方工具。为了保护您的利益安全，也请您不要在各类第三方平台上进行账号交易、代充值行为。若因在第三方账号交易中产生了个人经济损失或账号纠纷，我们将不予处理。还请各位老师相互监督，共同维护基沃托斯的公平健康游戏生态。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
   《蔚蓝档案》运营团队  
 &nbsp; 
 &nbsp; 
  违规账号公示如下：  
 &nbsp; 
  ■ 永久冻结账号  
  10006*****7 20007*****5 20007*****7 20010*****3 10011*****5 10010*****0  
 &nbsp; 
  ■ 限时封禁账号（7天/14天）  
  10007*****9 20007*****5 20007*****7 10009*****7 20009*****0 20007*****2 20010*****3 10010*****2 10007*****2 10011*****8 10009*****8 10011*****1 10007*****0 10009*****3 10009*****9 10007*****3 20007*****6 20010*****8 20006*****1 20009*****3 20010*****4 10009*****8 10011*****2 10008*****4 20010*****1 20010*****5 10009*****1 10006*****3 10006*****9 10011*****5 10012*****5 10010*****9 10011*****9 10011*****7 10008*****8 10011*****6 10011*****5 10012*****9 20009*****1 10012*****1 10009*****7 10012*****1 20008*****9 10007*****4 10011*****6 20009*****4 10007*****3 10009*****2 20007*****3 10010*****0  ` },
  { name: '新闻', image: '/news/morenews/news/maintenance.jpeg', title: '09月05日维护更新说明', time: '2024-09-04',web:'https://bluearchive.jp/news/newsJump/315', 
  content:`   
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
 &nbsp; 
  为保证更好的游戏体验，我们计划于 09月05日 14:00 开始进行维护更新，预计持续4小时，维护开始后将无法登录游戏，在游戏中的玩家会被系统强制要求下线。  
  为确保账号数据正常，请在维护前结束关卡并关闭游戏。  
  开服时间根据实际情况可能会出现提前或延后的情况，请关注官方消息。  
   以下是本次维护更新的详细内容：  
   ■ 维护时间  
  09月05日 14:00 ~ 18:00（预计）  
   ■ 更新内容  
  1、更新限时复刻活动【日奈会长的夏日休假！】，为了能让日奈休假，老师和风纪委员会来到了海边！但麻烦总是接连不断地发生！老师和风纪委员会究竟能不能让日奈度过一个美好的假期呢？  
  2、更新限时限定复刻招募【威震七海的温柔月光】，成员“日奈（泳装）”招募概率得到提升！  
  3、更新限时限定复刻招募【扰乱夏日的无情艳阳】，成员“伊织（泳装）”招募概率得到提升！  
  4、更新综合战术测试【射击•特殊装甲•街区战】，参与综合战术测试可获得“综合战术测试奖币”并兑换各式各样的奖励。  
  5、更新【家具互动动作】：“日奈（泳装） &amp; 泳圈套装小型泳池”。  
  6、更新【综合战术测试商店】内容，新增“鹤城的神名文字”。    
   ■ 资源预加载  
  1、提前加载限时活动【圣堂的圣夜祝福 ~救护骑士团的礼物~】、成员“芹娜（圣诞）、花江（圣诞）”对应招募活动的游戏资源。  
  2、提前加载家具互动动作【芹娜（圣诞） &amp; 轻快的乐谱架】、【花江（圣诞） &amp; 温暖的圣诞壁炉】。  
  3、提前加载迷你故事【万魔殿的红冬巡回录】，被神秘所笼罩，万魔殿的秘密红冬巡回录。如今，访问记录的全貌终于揭晓。  
  4、提前加载限时签到活动【Surprise！阿洛娜的特别礼物！】，活动期间累计登录游戏，即可获得青辉石和互动家具奖励！  
  5、提前加载总力战【佩洛洛斯拉•室内战】的游戏资源。  
 &nbsp; 
  以上预加载内容预计将于09月12日14:00开启，详情请关注后续消息。  
   ※ 限时招募【清新梦想的可能性】、【机器们会梦见去旅行吗？】、【共鸣的风信子】、【鸣奏梦想的迎春RPG】将于09月05日13:59结束，还请各位老师留意结束时间。  
   ■ 维护补偿  
  以邮件的形式发放【青辉石×480】作为补偿    
  ■ 补偿范围  
  09月05日14:00维护前注册账号并创建游戏角色的玩家    
  ■ 发放时间  
  维护结束后 ~ 09月08日 03:59    
  ■ 有效时间  
  邮件在邮箱内的有效期为7*24小时，请及时领取  
   给您带来不便我们深感歉意，感谢您的包容与理解。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },
  { name: '新闻', image: '/news/morenews/news/notice.jpeg', title: '2024年09月03日封禁公示说明', time: '2024-09-03',web:'https://bluearchive.jp/news/newsJump/315', content:'' },
  { name: '新闻', image: '/news/morenews/news/note12.png', title: '阿洛娜的日程笔记（第12期）', time: '2024-08-28',web:'https://bluearchive.jp/news/newsJump/315', content:'' },
  { name: '新闻', image: '/news/morenews/news/notice.jpeg', title: '08月22日维护更新说明', time: '2024-08-21',web:'https://bluearchive.jp/news/newsJump/315', content:'' },
  { name: '新闻', image: '/news/morenews/news/notice.jpeg', title: '2024年08月20日封禁公示说明', time: '2024-08-20',web:'https://bluearchive.jp/news/newsJump/315' },
  { name: '新闻', image: '/news/morenews/news/notice.jpeg', title: '08月10日账号经验值2倍异常问题公告', time: '2024-08-10',web:'https://bluearchive.jp/news/newsJump/315', content:'' },
  { name: '新闻', image: '/news/morenews/news/notice.jpeg', title: '【总力战：格兹】异常封禁补偿公告', time: '2024-08-09',web:'https://bluearchive.jp/news/newsJump/315', content:'' },
]);
const notice = ref([
  { name: '公告', image: '/news/morenews/notice/1.png', title: '【预告】掉落量3倍活动', time: '2024-10-21',web:'https://bluearchive.jp/news/newsJump/333', 
  content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
 &nbsp; 
  【掉落量3倍活动】即将开启！请不要错过哦！  
   一、【悬赏通缉】掉落量3倍  
  ■ 活动时间  
  &nbsp;• 10月24日 04:00 ~ 10月31日 03:59  
   二、【日程】道具掉落量3倍  
  ■ 活动时间  
  &nbsp;• 10月24日 04:00 ~ 10月31日 03:59  
   三、【学院交流会】道具掉落量3倍  
  ■ 活动时间  
  &nbsp;• 10月24日 04:00 ~ 10月31日 03:59  
   四、【任务（普通难度）】道具掉落量3倍  
  ■ 活动时间  
  &nbsp;• 10月31日 04:00 ~ 11月04日 03:59  
   五、【任务（困难难度）】道具掉落量3倍  
  ■ 活动时间  
  &nbsp;• 11月04日 04:00 ~ 11月07日 03:59  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },
  { name: '公告', image: '/news/morenews/notice/2.png', title: '行动点助力计划', time: '2024-10-21',web:'https://bluearchive.jp/news/newsJump/328', 
  content:`       
  “欢迎连接【什亭之箱】，老师。”    
  在10月24日 至 10月30日活动期间，每日登录游戏即可从邮箱中领取【行动点×240】！具体规划如下：  
  &nbsp;• 行动点助力（1/7），可领取时间：10月24日 11:00 ~ 10月27日 03:59  
  &nbsp;• 行动点助力（2/7），可领取时间：10月25日 11:00 ~ 10月28日 03:59  
  &nbsp;• 行动点助力（3/7），可领取时间：10月26日 11:00 ~ 10月29日 03:59  
  &nbsp;• 行动点助力（4/7），可领取时间：10月27日 11:00 ~ 10月30日 03:59  
  &nbsp;• 行动点助力（5/7），可领取时间：10月28日 11:00 ~ 10月31日 03:59  
  &nbsp;• 行动点助力（6/7），可领取时间：10月29日 11:00 ~ 11月01日 03:59  
  &nbsp;• 行动点助力（7/7），可领取时间：10月30日 11:00 ~ 11月02日 03:59  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》  
  《蔚蓝档案》运营团队  ` },
  { name: '公告', image: '/news/morenews/notice/3.jpeg', title: '【任务(困难难度)】掉落量2倍！', time: '2024-10-21',web:'https://bluearchive.jp/news/newsJump/329', 
  content:`       
  “欢迎连接【什亭之箱】，老师。”  
   【任务（困难难度）】掉落量2倍将开启！请不要错过哦！    
  ■ 活动时间  
  &nbsp;• 10月21日 04:00 ~ 10月24日 03:59  
   ■ 活动内容  
  活动期间，完成【任务（困难难度）】时，获得的道具掉落奖励数量变为2倍。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },
  { name: '公告', image: '/news/morenews/notice/4.jpeg', title: '【预告】活动复刻：夏莱的快乐♥情人节巡逻', time: '2024-10-18',web:'https://bluearchive.jp/news/newsJump/322', 
  content:`     
 &nbsp; 
  基沃托斯迎来了情人节！  
  为了维护情人节庆典现场的治安，桐乃和吹雪带着老师一起在盛大的情人节活动会场巡逻……  
  这项工作能否顺利完成呢？  
 &nbsp; 
  ■ 活动时间  
  &nbsp;• 活动持续时间：10月24日 14:00 ~ 11月07日 维护开启前  
  &nbsp;• 商店开放时间：10月24日 14:00 ~ 11月14日 13:59前  
   ■ 参加条件  
  &nbsp;• 通关任务 2-3（普通难度）    
  另外，本次活动将开放难度较高的挑战关卡，首通和三星通关均可获得青辉石奖励，关卡的具体信息还请进入活动界面查看吧~  
 &nbsp; 
  活动指南1：快获取“活动限定成员”！    
 &nbsp; 
  通关活动故事关卡01“D.U.135区域”即可直接获得活动限定成员“吹雪（1★）”。  
  ■ 成员【吹雪（1★）】的信息  
  &nbsp;• 部队类型：突击  
  &nbsp;• 战术角色：输出  
  &nbsp;• 战场位置：后排  
  &nbsp;• 攻击类型：贯穿  
  &nbsp;• 防御类型：重装甲  
   ■ 成员【吹雪（1★）】的技能  
  &nbsp;• 必杀技能【先来美美地休息下吧】：  
  攻击力增加。  
   &nbsp;• 基础技能【再吃最后一口！】：  
  当前剩余弹药数量低于或等于3时，基于攻击力对1名敌人造成伤害并造成晕厥，同时弹药数量减少3发。  
   &nbsp;• 被动技能【指挥交通】：  
  群体控制强化力增加。  
   &nbsp;• 辅助技能【搭个顺风车吧】：  
  除自身之外的我方角色使用必杀技能时，自身的攻击力增加。  
   &nbsp;  
  活动指南2：收集“活动积分和活动道具”吧！     
  通关活动关卡可以获得  活动积分  与活动限定道具（  问题儿童检讨书 、 没收的不健康零食 、 环境美化活动垃圾袋  ）  
   *提示：使用有奖励加成效果的成员通关活动任务关卡时，可以获得更多的活动积分与活动限定道具！   
 &nbsp; 
   活动指南3：请善用成员的“加成效果”！     
  使用特定成员通关活动任务关卡时，可以获得更多的  活动积分  与活动限定道具（  问题儿童检讨书 、 没收的不健康零食 、 环境美化活动垃圾袋  ）！  
   提示：重复通关活动关卡时，将以当前活动任务关卡的历史最高加成进行结算   
   举例说明：当以“问题儿童检讨书加成10%、没收的不健康零食加成0%”的队伍通关某活动任务关卡后，后续如果使用“问题儿童检讨书加成0%、没收的不健康零食加成10%”的队伍再通关，则会以“问题儿童检讨书加成10%、没收的不健康零食加成10%”进行结算。   
   详细的加成效果请在游戏中确认吧~  
   &nbsp;  
  活动指南4：特殊事件“狐坂若藻的沉默与欢宴”！     
  嘈杂的枪声，华丽的爆炸！  
  然后，伴随着刺鼻的火药味，若藻出现了！  
  情人节庆典现场陷入了混乱，若藻的真正目的是什么？！  
   在“沙勒的快乐♥情人节巡逻”活动中消耗一定数量的行动点，则特殊事件将会触发，活动将变更为“狐坂若藻的沉默与欢宴”！  
  当特殊事件触发时，可以获得特殊道具“ 若藻逮捕令 ”。使用该道具可挑战“狐坂若藻的沉默与欢宴”相应关卡，成功后可获得“活动限定道具”和“吹雪的神名文字”作为奖励。  
   通过“狐坂若藻的沉默与欢宴”获得的“活动限定道具”将不享受成员的加成效果。  
    ■ 特殊事件参与条件   
  通关“沙勒的快乐♥情人节巡逻”故事关卡1“D.U.135区域”    
   ■ 特殊事件注意事项   
  &nbsp;• 触发特殊事件后，将有一小时的时间逮捕若藻；如果“ 若藻逮捕令 ”使用完毕或未成功逮捕若藻（被若藻逃跑），则特殊事件将会结束并回到“沙勒的快乐♥情人节巡逻”活动  
  &nbsp;• 特殊事件每日最多可触发8次，分别在“沙勒的快乐♥情人节巡逻”活动中累计消耗“20 / 50 / 100 / 180 / 300 / 540 / 780 / 1020”行动点时触发，每次触发时将自动获得“ 若藻逮捕令 ×1”（如果通过快速战斗功能一次性消耗大量行动点，将根据实际的行动点消耗量决定若藻逮捕令的获得量），特殊事件触发次数和行动点消耗进度将在每日凌晨4点重置  
  &nbsp;• 特殊事件“狐坂若藻的沉默与欢宴”中部分关卡难度较高，请在挑战前确认敌方信息和相克信息。  
 &nbsp; 
 &nbsp; 
  活动指南5：去“活动商店”兑换奖励吧！     
  &nbsp;•   活动积分  和活动限定道具（  问题儿童检讨书 、 没收的不健康零食 、 环境美化活动垃圾袋  ）可以在【活动商店】中兑换“活动报告书”、“强化珠”、“技术笔记”、“战斗教育光盘”、“互动家具”，以及其他各种养成材料！   &nbsp;   &nbsp;■ 【  问题儿童检讨书  】可兑换的奖励  
  &nbsp;• 桐乃的神名文字  
  &nbsp;• 各等级的活动报告书  
  &nbsp;• 各等级的技术笔记选择券  
  &nbsp;• 各等级的技术笔记（百鬼夜行）  
  &nbsp;• 各等级的技术笔记（瓦尔基丽）  
  &nbsp;• 家具：优雅的花朵茶几  
   &nbsp;■ 【  没收的不健康零食  】可兑换的奖励  
  &nbsp;• 优香的神名文字  
  &nbsp;• 各等级的强化珠  
  &nbsp;• 各等级的战术教育光盘选择券  
  &nbsp;• 各等级的战术教育光盘（百鬼夜行）  
  &nbsp;• 各等级的战术教育光盘（瓦尔基丽）  
  &nbsp;• 家具：情人节曲奇沙发  
   &nbsp;■ 【  环境美化活动垃圾袋  】可兑换的奖励  
  &nbsp;• 吹雪的神名文字  
  &nbsp;• 各等级的撞针  
  &nbsp;• 各等级的神秘古物选择券  
  &nbsp;• 巴格达电池系列  
  &nbsp;• 伏尼契手稿系列  
  &nbsp;• 家具：多功能彩电  
   &nbsp;■ 【  活动积分  】可兑换的奖励  
  &nbsp;• 情人节外出券  
   可以通过【游戏内】➟【活动主界面】➟【商店】查看商店的详细内容，请努力获得活动积分和活动道具吧！  
   *提示：活动商店关闭后，剩余的“活动积分”、“问题儿童检讨书”、“没收的不健康零食”和“环境美化活动垃圾袋”将以1:1的比例转化为信用积分   
 &nbsp; 
  活动指南6：积累“活动积分”也可以获得大量奖励！     
  根据累积的  活动积分  ，可以获得的奖励  
  &nbsp;• 吹雪的神名文字  
  &nbsp;• 秘仪之书  
  &nbsp;• 神名精髓  
  &nbsp;• 以及活动报告书、强化珠、信用积分等道具  
     可以通过【游戏内】➟【活动主界面】➟【奖励信息】查看积分奖励的详细内容，请努力获得积分吧！  
    活动指南7：“邀请成员外出”将有惊喜！    
 &nbsp; 
  &nbsp;• 【活动商店】中兑换的“情人节外出券”可在本次活动期间邀请成员外出，并解锁相应的情人节故事！  
   ■ 注意事项  
  &nbsp;• 可以邀请已拥有的成员以及“阿洛娜、凛、桃可、空、步”  
  &nbsp;• 邀约完成后，可获得“该成员的特殊礼物、信用积分×200000、该成员的神名文字×5”  
  &nbsp;• 若在之前活动中已邀请过某位成员，在本次复刻活动中将无法再次进行邀请  
   如果邀请的是“阿洛娜、凛、桃可、空、步”，则“神名文字×5”的这部分奖励将变更为“神名精髓×15”  
 &nbsp; 
 &nbsp; 
  活动指南8：不要忘记阅读“后记”！     
  &nbsp;• 活动期间将开放“后记”，阅读后记剧情可获得青辉石奖励！  
 &nbsp; 
 &nbsp; 
  活动指南9：完成“活动成就任务”将得到额外奖励！    
 &nbsp; 
  &nbsp;• 活动期间完成“活动成就任务”，可获得“青辉石”、“信用积分”、“秘仪之书”等奖励。  
   ■ 活动成就任务  
  &nbsp;• 活动任务可完成时间：11月07日 维护开始前  
  &nbsp;• 任务奖励可领取时间：11月14日 13:59 前    
  可以通过【游戏内】➟【活动主界面】➟【任务】查看详细内容，请努力完成任务吧！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },
  { name: '公告', image: '/news/morenews/notice/5.jpeg', title: '【预告】限时招募：美祢', time: '2024-10-18',web:'https://bluearchive.jp/news/newsJump/322', 
  content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”    
  限时招募【着装规范是钢铁白衣】即将开启！在本次招募中，全新3★成员“美祢”登场，且招募概率得到提升！    
  ■ 招募时间  
  10月24日 14:00 ~ 11月07日 维护开始前    
  ■ 注意事项  
  &nbsp;• 在此招募中，3★成员“濑名”和“千寻”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
  &nbsp;• “美祢”将加入同期和后续的【长期招募】、【限时招募】中。  
    ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。      
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“美祢”、“千寻”或者“濑名”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。    
  ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
   ■ 成员【美祢（3★）】的信息  
  &nbsp;• 部队类型：突击  
  &nbsp;• 战术角色：坦克  
  &nbsp;• 战场位置：前排  
  &nbsp;• 攻击类型：爆发  
  &nbsp;• 防御类型：轻装甲  
   ■ 成员【美祢】的技能  
  &nbsp;• 必杀技能【信念与荣耀】：  
  移动到指定位置后，基于攻击力对圆形范围内的敌人造成伤害。同时使敌人的闪避值与防御力减少，敌人为中型目标时，增加减益效果。    
  &nbsp;• 基础技能【严正宣告】：  
  救援精神”状态清除后发动，基于防御力对圆形范围内的敌人造成伤害。在一定时间内，使其闪避值与防御力减少。    
  &nbsp;• 被动技能【骑士团的意志】：  
  增加体力上限。  
   &nbsp;• 辅助技能【不屈的勇气】：  
  使用必杀技能后，获得“救援精神”状态与基于治疗力的持续恢复。  
  若自身已存在“救援精神”状态，则在一定时间内增加暴击抵抗力。  
   ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },
  { name: '公告', image: '/news/morenews/notice/6.png', title: '【预告】限时招募：濑名', time: '2024-10-18',web:'https://bluearchive.jp/news/newsJump/322', 
  content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”    
  限时复刻招募【郑重自主，以骄傲宣誓】即将开启！在本次招募中，3★成员“濑名”招募概率得到提升！    
  ■ 招募时间  
  10月24日 14:00 ~ 11月07日 维护开始前    
  ■ 注意事项  
  &nbsp;• 在此招募中，3★成员“千寻”、“美祢”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
    ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。      
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“濑名”、“美祢”或者“千寻”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。  
   ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
   ■ 成员【濑名（3★）】的信息  
  &nbsp;• 部队类型：支援  
  &nbsp;• 战术角色：战术辅助  
  &nbsp;• 战场位置：后排  
  &nbsp;• 攻击类型：神秘  
  &nbsp;• 防御类型：重装甲    
  ■ 成员【濑名（3★）】的技能  
  &nbsp;• 必杀技能【救护车紧急出动】：  
  濑名搭乘载具登场。濑名在场期间，以载具为中心的圆形范围内，除自身以外的角色攻击力提高，且每隔一段时间获得基于治疗力的体力恢复。    
  &nbsp;• 基础技能【注射能量补剂】：  
  每隔一段时间，使我方攻击力最高的1名角色攻击力提高。    
  &nbsp;• 被动技能【紧急支援】：  
  治疗力增加。    
  &nbsp;• 辅助技能【越快越好】：  
  我方角色的攻击力增加。    
  ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },
  { name: '公告', image: '/news/morenews/notice/7.png', title: '【预告】限时招募：千寻', time: '2024-10-18',web:'https://bluearchive.jp/news/newsJump/322', content:'' },
  { name: '公告', image: '/news/morenews/notice/8.jpeg', title: '【预告】综合战术测试：突破 • 轻装甲', time: '2024-10-18',web:'https://bluearchive.jp/news/newsJump/322', content:'' },
  { name: '公告', image: '/news/morenews/notice/9.jpeg', title: '【预告】限时活动：夏莱回忆录', time: '2024-10-18',web:'https://bluearchive.jp/news/newsJump/322', content:'' },
  { name: '公告', image: '/news/morenews/notice/10.png', title: '【预告】家具互动即将更新', time: '2024-10-18',web:'https://bluearchive.jp/news/newsJump/322', content:'' },
  { name: '公告', image: '/news/morenews/notice/11.png', title: '复刻活动【船上的兔子追击者】已开启！', time: '2024-10-17',web:'https://bluearchive.jp/news/newsJump/322', content:'' },
  { name: '公告', image: '/news/morenews/notice/12.png', title: '限时招募【茜（邦妮）】开启！', time: '2024-10-17',web:'https://bluearchive.jp/news/newsJump/322', content:'' },
  { name: '公告', image: '/news/morenews/notice/13.jpeg', title: '限时招募【妮露（邦妮）】开启！', time: '2024-10-17',web:'https://bluearchive.jp/news/newsJump/322', content:'' },
  { name: '公告', image: '/news/morenews/notice/14.png', title: '【预告】限时招募：花凛（邦妮）', time: '2024-10-17',web:'https://bluearchive.jp/news/newsJump/322', content:'' },
]);
const activity = ref([
  { name: '活动', image: '/news/morenews/activity/1.jpeg', title: '复刻活动【船上的兔子追击者】已开启！', time: '2024-10-17',web:'https://bluearchive.jp/news/newsJump/325', 
  content:`     
 &nbsp; 
  C&amp;C接到逮捕千禧年的问题成员“白兔”的任务。  
  而白兔逃跑的地方竟然是其他自管区的豪华邮轮！  
  C&amp;C成员们为了隐藏身份，装扮上特殊的衣服潜入……  
 &nbsp; 
   活动指南1：请多多留意“活动时间&amp;参与条件”！   
 &nbsp; 
  ■ 活动时间  
  &nbsp;• 活动持续时间：10月17日 维护结束后 ~ 10月24日 13:59  
  &nbsp;• 商店开放时间：10月17日 维护结束后 ~ 10月31日 13:59    
  ■ 参加条件  
  &nbsp;• 通关任务 2-3（普通难度）    
  另外，活动的还将开放难度较高的挑战关卡，首通和三星通关可获得青辉石奖励，具体信息还请进入活动界面查看吧~    
 &nbsp; 
  活动指南2：收集“活动道具”吧！  
   
 &nbsp; 
  通关活动关卡可以获得活动限定道具（    巧克力币 、 兔子贴纸 、 登船券    ）  
   &nbsp;* 提示：使用有奖励加成效果的成员通关活动任务关卡时，可以获得更多的活动限定道具！   
 &nbsp; 
   活动指南3：请善用成员的“加成效果”！  
    使用特定成员通关活动任务关卡时，可以获得更多的活动限定道具（    巧克力币 、 兔子贴纸 、 登船券    ）！    
   提示：重复通关活动关卡时，将以当前活动任务关卡的历史最高加成进行结算   
   举例说明：当以“巧克力币加成20%、兔子贴纸加成0%”的队伍通关某活动任务关卡后，后续如果使用“巧克力币加成0%、兔子贴纸加成20%”的队伍再通关，则会以“巧克力币加成20%、兔子贴纸加成20%”进行结算。   
   详细的加成效果请在游戏中确认吧~  
 &nbsp; 
   活动指南4：去“活动卡牌商店”抽取奖励吧！  
     
 &nbsp; 
  活动关卡中获得的“    巧克力币    ”可以在【活动卡牌商店】中抽取卡牌，并根据卡牌的稀有度和类型可获得“花凛的神名文字”、“妮露的神名文字”、“费斯托斯圆盘”、“安提基瑟拉装置”、“活动报告书”、“强化珠”、“装备箱”、“骰子”等各种各样的豪华奖励！卡牌稀有度越高则奖励越丰厚！    
  • 每次将以背面陈列4张卡牌，消耗“巧克力币”即可抽取卡牌，根据抽取的次数所需的“    巧克力币    ”也会有所不同（第1次需200、第2次需210、第3次需220、第4次需230）  
  • 4张卡牌抽取任意一张后，即可通过“洗牌”按钮刷新卡牌；当4张卡牌全部抽取完后将会自动刷新卡牌  
  • 卡牌稀有度可分为“终极稀有、超稀有、稀有、普通”，每次陈列的4张卡牌中必定包含1张“超稀有”或以上稀有度的卡牌    
  可以通过【游戏内】➟【活动主界面】➟【抽卡】查看详细内容~   
   &nbsp;* 提示：活动奖励兑换所关闭后，剩余的“巧克力币”将以1:1的比例转化为信用积分   
 &nbsp; 
   活动指南5：“活动商店”中也有好多奖励可以兑换！  
    活动关卡中获得的“    兔子贴纸    ”和“    登船券    ”，以及通过抽取活动卡牌获得的“ 骰子 ”可以在【活动商店】中兑换“明日奈的神名文字”、“青辉石”、“神名精髓”、“秘仪之书”，以及其他各种养成材料！  
   【    兔子贴纸    】可兑换的奖励  
  &nbsp;• 各等级的活动报告书  
  &nbsp;• 各等级的战术教育光盘（千禧年）  
  &nbsp;• 安提基瑟拉装置系列  
  &nbsp;• 互动家具：黑金吧台椅  
  &nbsp;• 互动家具：金红吧台椅  
   【    登船券    】可兑换的奖励  
  &nbsp;• 各等级的强化珠  
  &nbsp;• 各等级的战术笔记（千禧年）  
  &nbsp;• 费斯托斯圆盘系列  
  &nbsp;• 互动家具：银蓝吧台椅  
  &nbsp;• 互动家具：深紫吧台椅  
  &nbsp;• 信用积分    
  【 骰子 】可兑换的奖励  
  &nbsp;• 明日奈的神名文字  
  &nbsp;• 青辉石  
  &nbsp;• 神名精髓  
  &nbsp;• 秘仪之书  
  &nbsp;• 信用积分  
 &nbsp; 
  可以通过【游戏内】➟【活动主界面】➟【商店】查看商店的详细内容，请努力获得活动积分和活动道具吧！  
   &nbsp;* 提示：活动商店关闭后，剩余的“兔子贴纸”、“登船券”和“骰子”将以1:1的比例转化为信用积分   
 &nbsp; 
   活动指南6：挑战“成就任务”获得额外奖励！  
    活动期间完成“活动成就任务”，可获得“青辉石”、“信用积分”等奖励。  
   ■ 活动成就任务  
  &nbsp;• 活动任务可完成时间：10月24日 13:59 前  
  &nbsp;• 任务奖励可领取时间：10月31日 13:59 前  
   可以通过【游戏内】➟【活动主界面】➟【任务】查看详细内容，请努力完成任务吧！    
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },
  { name: '活动', image: '/news/morenews/activity/2.jpeg', title: '限时招募【茜（邦妮）】开启！', time: '2024-10-17',web:'https://bluearchive.jp/news/newsJump/319', 
  content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”    
  限时招募【过午时分的六六大顺】即将开启！在本次招募中，全新3★成员“茜（邦妮）”登场，且招募概率得到提升！    
  ■ 招募时间  
  10月17日 维护结束后 ~ 10月24日 13:59    
  ■ 注意事项  
  &nbsp;• 在此招募中，3★限定成员“妮露（邦妮）”、“花凛（邦妮）”和3★成员“明日奈（邦妮）”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
  &nbsp;• 成员“茜（邦妮）”将加入同期和后续的【长期招募】、【限时招募】中。  
    ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。      
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“茜（邦妮）”、“妮露（邦妮）”、“花凛（邦妮）”或者“明日奈（邦妮）”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。  
 &nbsp; 
  ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
 &nbsp; 
  ■ 3★成员【茜（邦妮）】的信息  
  &nbsp;• 部队类型：支援  
  &nbsp;• 战术角色：输出  
  &nbsp;• 战场位置：后排  
  &nbsp;• 攻击类型：神秘  
  &nbsp;• 防御类型：重装甲    
  ■ 3★成员【茜（邦妮）】的技能  
  &nbsp;• 必杀技能【精心地准备】：  
  设置进入范围内会自动爆炸的地雷，地雷将造成伤害  
   &nbsp;• 基础技能【优雅地扫除】：  
  每隔一段时间，对圆形范围内的敌人造成伤害。  
   &nbsp;• 被动技能【周密地捕捉】：  
  攻击力增加  
   &nbsp;• 辅助技能【迅速地支援】：  
  神秘类型的学员攻击力增加  
   ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},
  { name: '活动', image: '/news/morenews/activity/3.png', title: '限时招募【妮露（邦妮）】开启！', time: '2024-10-17',web:'https://bluearchive.jp/news/newsJump/316', 
  content:`   
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  限定限时复刻招募【不容分说的孤注一掷】即将开启！在本次招募中，3★限定成员“妮露（邦妮）”招募概率得到提升！  
 &nbsp; 
  ■ 招募时间  
  10月17日 维护结束后 ~ 10月24日 13:59   
 &nbsp; 
  ■ 注意事项  
  &nbsp;• 3★限定成员“妮露（邦妮）”在本次限定限时招募结束后，将不会加入后续的【长期招募】、【限时招募】中，请务必留意。  
  &nbsp;• 在此招募中，3★限定成员“花凛（邦妮）”和3★成员“明日奈（邦妮）、茜（邦妮）”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
   ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。   
 &nbsp; 
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“妮露（邦妮）”、“花凛（邦妮）、“茜（邦妮）”或者“明日奈（邦妮）”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。  
 &nbsp; 
  ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
 &nbsp; 
  ■ 3★限定成员【妮露（邦妮）】的信息  
  &nbsp;• 部队类型：突击  
  &nbsp;• 战术角色：坦克  
  &nbsp;• 战场位置：前排  
  &nbsp;• 攻击类型：爆发  
  &nbsp;• 防御类型：重装甲    
  ■ 3★限定成员【妮露（邦妮）】的技能  
  &nbsp;• 必杀技能【喂，别动！】：  
  移动至指定位置，基于治疗力生成护盾，并基于攻击力对圆形范围内的敌人造成伤害。  
 &nbsp; 
  &nbsp;• 基础技能【看什么看？！】：  
  每隔一段时间，闪避值增加。  
 &nbsp; 
  &nbsp;• 被动技能【疾言厉色】：  
  暴击伤害增加。  
 &nbsp; 
  &nbsp;• 辅助技能【想要更疼一点？】：  
  攻击时，对中型目标造成额外伤害。  
 &nbsp; 
  ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},
  { name: '活动', image: '/news/morenews/activity/4.png', title: '限时招募【明日奈（邦妮）】开启！', time: '2024-10-17',web:'https://bluearchive.jp/news/newsJump/308', 
  content:`   
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  限时复刻招募【出其不意的帽子戏法】即将开启！在本次招募中，3★成员“明日奈（邦妮）”招募概率得到提升！  
 &nbsp; 
  ■ 招募时间  
  10月17日 维护结束后 ~ 10月24日 13:59   
 &nbsp; 
  ■ 注意事项  
  &nbsp;• 在此招募中，3★限定成员“妮露（邦妮）”、“花凛（邦妮）”和3★成员“茜（邦妮）”也有一定概率招募到，概率与其他同星级非概率提升的成员一致。  
   ※ 具体成员信息和概率信息可以前往游戏内招募界面查看。   
 &nbsp; 
  ■ 关于招募点数  
  &nbsp;• 本次招募期间，每次进行限时招募或长期招募都可以获得【招募点数】，每招募1次即可获得1点数。  
  &nbsp;• 本次招募期间，通过收集一定数量的【招募点数】，可以用来直接引进指定3★成员“明日奈（邦妮）”、“妮露（邦妮）”、“茜（邦妮）”或者“花凛（邦妮）”，所需的【招募点数】为200点。  
  &nbsp;• 本次招募结束后，剩余的【招募点数】在下次登录后会自动转换为“制造”中可使用的道具【拱心石碎片】（转换比例为1:1），并发送至“邮箱”中，而原有的【招募点数】将会重置。    
  ■ 当招募到重复的成员时  
      
 
 
   情况举例   
   获得神名文字的数量   
   获得神名精髓的数量   
 
 
  &nbsp;重复招募到1★成员  
  1  
  1  
 
 
  &nbsp;重复招募到2★成员  
  5  
  10   
 
 
  &nbsp;重复招募到3★成员  
  30  
  50   
 
 
  &nbsp;重复招募到概率提升的3★成员  
  100  
  50  
 
 
 
 &nbsp; 
  ■ 3★成员【明日奈（邦妮）】的信息  
  &nbsp;• 部队类型：突击  
  &nbsp;• 战术角色：辅助  
  &nbsp;• 战场位置：中排  
  &nbsp;• 攻击类型：神秘  
  &nbsp;• 防御类型：轻装甲  
 &nbsp; 
  ■ 3★成员【明日奈（邦妮）】的技能  
  &nbsp;• 必杀技能【快看这个！】：  
  减少圆形范围内敌人的防御力，并基于攻击力造成伤害。  
 &nbsp; 
  &nbsp;• 基础技能【开心起来吧！】：  
  每隔一段时间，攻击力增加。  
 &nbsp; 
  &nbsp;• 被动技能【多玩一会吧！】：  
  体力上限增加。  
 &nbsp; 
  &nbsp;• 辅助技能【这是赠品！】：  
  使用必杀技能时，攻击速度增加。  
   ■ 特别提醒  
  ※【招募点数】在本次招募结束后将会全部重置，建议老师们要在本次招募期间使用完毕！  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },
  { name: '活动', image: '/news/morenews/activity/5.png', title: '总力战【格兹 • 室内战】开启！', time: '2024-10-17',web:'https://bluearchive.jp/news/newsJump/308', 
  content:`     
 &nbsp; 
  许久之前因财政困难而停止营业的游乐园【斯兰匹亚】发生了原因不明的诡异现象。原本已停止运行的娱乐玩偶和各种娱乐设备竟在夜晚自行启动并开始袭击市民。  
  娱乐玩偶格兹在空荡荡的【斯兰匹亚】继续唱着只属于自己的独角戏。隐藏在那奇异微笑下的本性究竟是善还是恶？我们难以推测。  
 &nbsp; 
  ■ 活动简介  
  &nbsp;• 总力战是与极其强大的首领进行战斗的任务。  
  &nbsp;• 一天内可以参加战斗的次数是有限的，所以要慎重考虑后再进行战斗。  
  &nbsp;• 总力战分为不同的难度，越困难的难度就可以获得越丰厚的奖励。  
 &nbsp; 
  ■ 活动时间  
  &nbsp;• 赛季持续时间：10月17日 维护结束后 ~ 10月24日 03:59  
  &nbsp;• 排名奖励结算时间：10月24日 04:00 ~ 10月24日 23:59  
  &nbsp;• 排名奖励领取时间：10月25日 00:00 ~ 10月31日 13:59    
  ■ 首领“格兹”的信息  
  &nbsp;• 地形：室内战  
  &nbsp;• 难度：分为6种（NORMAL、HARD、VERYHARD、HARDCORE、EXTREME、INSANE）  
  &nbsp;• 防御类型：特殊装甲  
  &nbsp;• 攻击类型：爆发（INSANE）    
  ■ 参加条件  
  &nbsp;• 通关任务（普通难度）4-1    
  ■ 关于挑战券  
  &nbsp;• 使用1张【总力战挑战券】即可开启一场总力战，并会获得1小时的挑战时间  
  &nbsp;• 在挑战时间内可以无限次使用“再次入场”，并不需要消耗额外的【总力战挑战券】  
  &nbsp;• 赛季期间每天凌晨4点，总力战挑战券的数量都会恢复到最大值（最大值为3张）  
  &nbsp;• 1小时的挑战时间用尽后，则无法再次入场，并将以首领的剩余HP结算分数    
  ■ 关于累计积分奖励  
  &nbsp;• 战斗结束后，将会根据剩余时间、首领的剩余血量和挑战难度等因素决定此次战斗可获得的积分  
  &nbsp;• 在赛季期间累计获得的积分，便可获得相应的累计积分奖励  
  &nbsp;• 详细的积分奖励可前往“总力战”界面查看    
  ■ 关于排名奖励  
  &nbsp;• 赛季结束时，将根据排名获得相应的排名奖励  
  &nbsp;• 获得的排名越高，可以领取的奖励越丰厚   
      
 
 
   段位   
   区间   
   奖励   
 
 
  铂金  
  第1~20000名  
  青辉石*1200 + 总力战奖币*575 + 高级总力战奖币*300 + 格兹（室内战）铂金、黄金、白银、青铜奖杯各1个  
 
 
  黄金  
  第20001~120000名  
  青辉石*1000 + 总力战奖币*500 + 高级总力战奖币*250 + 格兹（室内战）黄金、白银、青铜奖杯各1个   
 
 
  白银  
  第120001~240000名  
  青辉石*800 + 总力战奖币*425 + 高级总力战奖币*200 +格兹（室内战）白银、青铜奖杯各1个   
 
 
  青铜  
  第240001~100%名  
  青辉石*600 + 总力战奖币*325 + 高级总力战奖币*150 + 格兹（室内战）青铜奖杯1个   
 
 
 
  &nbsp;  
  ■ 关于通关奖励  
  &nbsp;• 成功通关总力战首领后，将根据挑战的难度获得相应的【总力战奖币】、【高级总力战奖币】  
  &nbsp;• 每个难度的挑战每天只要通关一次，就可以使用“扫荡”功能快速通关   
     
 
 
   难度   
   奖励   
 
 
  NORMAL  
  &nbsp;总力战奖币*40  
 
 
  HARD  
  &nbsp;总力战奖币*60   
 
 
  VERYHARD  
  &nbsp;总力战奖币*80   
 
 
  HARDCORE  
  &nbsp;总力战奖币*100 + 高级总力战奖币*10   
 
 
  EXTREME  
  &nbsp;总力战奖币*120 + 高级总力战奖币*20  
 
 
  INSANE  
  &nbsp;总力战奖币*140 + 高级总力战奖币*40  
 
 
 
  &nbsp;  
  ■ 关于总力战商店  
  &nbsp;• 在“总力战商店”中，可使用【总力战奖币】、【高级总力战奖币】购买各式各样的道具  
  &nbsp;• 可购买的道具包含：部分成员的神名文字、秘仪之书、加速券、战术教育光盘和技术笔记等等  
  &nbsp;• 详细的商品内容可前往“总力战商店”界面查看    
  ■ 关于部队编成  
  &nbsp;• 参与过1次作战的成员将变为“无法作战”状态，可以通过变更部队编成使新成员参与总力战    
  ■ 关于模拟战  
  &nbsp;• 在“模拟战”中，即使不消耗挑战券也可以进行与首领的战斗演习，参与作战的成员也不会变为“无法作战”状态，但无法通过模拟战获得奖励    
  ■ 关于助力者  
  &nbsp;• 在一场总力战中可使用一次“助力者”，今日已使用过的助力者，在“总力战、综合战术测试”等玩法中将无法再次使用，需等到次日04:00后才可再次使用  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  `},
  { name: '活动', image: '/news/morenews/activity/6.jpeg', title: '【特别委托】掉落量2倍！', time: '2024-10-10',web:'https://bluearchive.jp/news/newsJump/308', 
  content:`     
 &nbsp; 
  “欢迎连接【什亭之箱】，老师。”  
   【特别委托】掉落量2倍将开启！请不要错过哦！    
  ■ 活动时间  
  &nbsp;• 10月10日 04:00 ~ 10月17日 03:59    
  ■ 活动内容  
  活动期间，完成【特别委托】时，获得的道具掉落奖励数量变为2倍。  
 
  祝您游戏愉快，今后也请多多支持《蔚蓝档案》。  
  《蔚蓝档案》运营团队  ` },  
  { name: '活动', image: '/news/morenews/activity/7.jpeg', title: '限时活动：【新年开胃菜】已开启！', time: '2024-10-03',web:'https://bluearchive.jp/news/newsJump/325', content:'' },
  { name: '活动', image: '/news/morenews/activity/8.jpeg', title: '限时招募【晴奈（新年）】已开启！', time: '2024-10-03',web:'https://bluearchive.jp/news/newsJump/319', content:'' },
  { name: '活动', image: '/news/morenews/activity/9.png', title: '限时招募【风香（新年）】已开启！', time: '2024-10-03',web:'https://bluearchive.jp/news/newsJump/316', content:'' },
  { name: '活动', image: '/news/morenews/activity/10.png', title: '限时招募【亚子】已开启！', time: '2024-10-03',web:'https://bluearchive.jp/news/newsJump/308', content:'' },
  { name: '活动', image: '/news/morenews/activity/11.png', title: '总力战【回转 FX•野外战】开启！', time: '2024-10-03',web:'https://bluearchive.jp/news/newsJump/308', content:'' },
  { name: '活动', image: '/news/morenews/activity/12.png', title: '夏莱的黄金周指引任务已开启！', time: '2024-10-03',web:'https://bluearchive.jp/news/newsJump/308', content:'' },
]);

const sortedNews = news.value.sort((a, b) => new Date(b.time) - new Date(a.time));
const sortedNotice = notice.value.sort((a, b) => new Date(b.time) - new Date(a.time));
const sortedActivity = activity.value.sort((a, b) => new Date(b.time) - new Date(a.time));
state.categories[0].sub = sortedNews;
state.categories[1].sub = sortedNotice;
state.categories[2].sub = sortedActivity;
const allItems = [...sortedNews, ...sortedNotice, ...sortedActivity];
state.categories[3].sub = allItems.sort((a, b) => new Date(b.time) - new Date(a.time));

const displayData = computed(() => {
    const categoryData = state.categories.find(cat => cat.id === state.currentCategory)?.sub || [];
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    return categoryData.slice(startIndex, endIndex);
})
const totalPages = computed(() => {
    const { categories, currentCategory, itemsPerPage } = state;
    const categoryData = categories.find(cat => cat.id === currentCategory)?.sub || [];
    return Math.ceil(categoryData.length / itemsPerPage);
});
const prev = () =>{
  if(state.currentPage > 1) {
    state.transitionName = 'slide';
    state.currentPage -= 1;
  }
}
const next = () =>{
  if (state.currentPage < totalPages.value) {
    state.transitionName = 'slide2';
    state.currentPage += 1;
  }
}
const visiblePages = computed(() => {
  if (totalPages.value < 3) {
    return totalPages.value;
  } else {
    if (state.currentPage === 1) {
      return [1, 2, 3];
    } else if (state.currentPage === totalPages.value) {
      return [
        totalPages.value - 2,
        totalPages.value - 1,
        totalPages.value,
      ];
    } else {
      return [
        state.currentPage - 1,
        state.currentPage,
        state.currentPage + 1,
      ];
    }
  }
})
const goToPage = (page) => {
  state.currentPage = page;
}
const changeCategory = category => {
    state.currentCategory = category;
    state.currentPage = 1;
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = String(date.getFullYear()).slice(-2); // 取后两位
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，补零
  const day = String(date.getDate()).padStart(2, '0'); // 补零
  return `${year}.${month}.${day}`;
};

const show5 = ref(false);
const morenew = () => {
  show5.value = !show5.value;
}

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

const handleScroll = (event) => {
event.preventDefault();
event.stopPropagation();
if (event.deltaY > 0) {
    // 向下滚动，翻页 +1
    if (state.currentPage < totalPages.value) {
      state.transitionName = 'slide2';
      state.currentPage++;
    }
} else if (event.deltaY < 0) {
    // 向上滚动，翻页 -1
    if (state.currentPage > 1) {
      state.transitionName = 'slide';
      state.currentPage--;
    }
}
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
    if(state.currentPage < totalPages.value) {
      state.transitionName = 'slide2';
      state.currentPage += 1;
    }
    startX2 = 0;
  } else if (diffX2 < -50) {
    if(state.currentPage > 1) {
      state.transitionName = 'slide';
      state.currentPage -= 1;
    }
    startX2 = 0;
  }
};
const endTouch2 = () => {
  startX2 = 0;
};
</script>