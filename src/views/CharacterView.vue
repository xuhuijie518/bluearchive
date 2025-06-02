<template>
  <audio ref="audioPlayer" :src="school[selectedIndex].students[selectedStd].voice" @ended="handleEnded"></audio>
  <div id="charv">
    <img id="followImage4" src="/app/mouse3.png"/>
    <div class="videoContainer">
      <video autoplay loop muted playsinline class="background-video">
        <source src="/app/background.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="mobile"></div>
    <div id="bg22">
      <Transition name="nested">
        <div v-show="show">   
          <span>BLUE ARCHIVE /// CHARACTER INFO</span>
        </div>
      </Transition>
    </div>
    <Transition name="nested2">
      <div id="navcontain" v-show="show">
        <div v-for="(item, index) in navItems" :key="index" :class="['carousel-card-item', cardArray[index]]" @click="goToSlide(index);selectNav(item.num);stopAudio();" class="hoverarea">
          <img :src="item.src" :style="{opacity : index === activeIndex ? 0 : 1}">
          <img :src="item.src2" :style="{opacity : index === activeIndex ? 1 : 0}">
        </div>
      </div>
    </Transition>
    <div id="characterinfo">
      <div class="move1">
        <Transition name="nested3">
          <div v-show="show">
            <transition
              name="fade2"
              mode="out-in"
            >
              <div class="nameen" :key="`${selectedIndex}-${selectedStd}`">
                {{school[selectedIndex].students[selectedStd].nameen}}
              </div>
            </transition>
            <div class="type_name">
              <div class="type">
                <transition
                  name="fade1"
                  mode="out-in"
                >
                  <img :src="school[selectedIndex].students[selectedStd].type" :key="`${selectedIndex}-${selectedStd}`">   
                </transition>
              </div>
              <transition
                name="fade3"
                mode="out-in"
              >
                <div class="namecn" :key="`${selectedIndex}-${selectedStd}`">
                  {{school[selectedIndex].students[selectedStd].name}}
                </div>
              </transition>
            </div>
          </div>
        </Transition>
      </div>
      <div class="move2">
        <Transition name="nested4">
          <div v-show="show">
            <transition
              name="fade1"
              mode="out-in"
            >
              <div :key="`${selectedIndex}-${selectedStd}`">
                <div class="stars">
                  <div v-for="n in school[selectedIndex].students[selectedStd].stars" :key="n" class="star">
                    <img src="/character/star.png">
                  </div>
                </div>
                <div class="cv">
                  <div class="voice" @click="playAudio();" @mousemove="followMouse" @mouseleave="hideImage">
                    <img :src=" isShowgif === false ? '/character/voice.png' : '/character/voice_on.gif' ">
                  </div>
                  <div class="cv_name">
                    <div class="cv2">配音</div>
                    {{school[selectedIndex].students[selectedStd].cv}}
                  </div>
                </div>
              </div> 
            </transition>
          </div>
        </Transition>
      </div>
      <Transition name="nested3">
        <div class="move6" v-show="show">
          <div class="split">
            <div></div>
          </div>
        </div>
      </Transition>
      <div class="move3">
        <Transition name="nested3">
          <div v-show="show">
            <div class="infos">
              AFFILIATION
              <div class="info">
                所属：
                <transition
                  name="fade4"
                  mode="out-in"
                >
                  <span :key="`${selectedIndex}-${selectedStd}`">{{school[selectedIndex].schoolname}}</span>
                </transition>
              </div>
            </div>
            <div class="infos">
              AFFILIATION
              <div class="info">
                社团：
                <transition
                  name="fade4"
                  mode="out-in"
                >
                  <span :key="`${selectedIndex}-${selectedStd}`">{{school[selectedIndex].students[selectedStd].club}}</span>
                </transition>
              </div>
            </div>
            <div class="infos">
              DATE OF BIRTH
              <div class="info">
                生日：
                <transition
                  name="fade4"
                  mode="out-in"
                >
                  <span :key="`${selectedIndex}-${selectedStd}`">{{school[selectedIndex].students[selectedStd].birthday}}</span>
                </transition>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
    <Transition name="nested3">
      <div v-show="show" class="move5">
          <div id="characterwrap">
            <transition
              name="fade-slide"
              mode="out-in"
            >
              <img :src="school[selectedIndex].students[selectedStd].characterwrap" :key="`${selectedIndex}-${selectedStd}`">
            </transition>
          </div>
      </div>
    </Transition>
    <Transition name="nested3">
      <div v-show="show" class="move4">
        <transition
          name="fade1"
          mode="out-in"
        >
          <div id="infoimg" :key="`${selectedIndex}-${selectedStd}`">
            <div class="logo">
              <img :src="school[selectedIndex].logosrc">
            </div>
            <div class="card">
              <img :src="school[selectedIndex].students[selectedStd].card">
              <div>
                <img :src="school[selectedIndex].students[selectedStd].cardname">
              </div>
            </div>
            <div class="gun">
              <img :src="school[selectedIndex].students[selectedStd].gun">
            </div>
          </div>
        </transition>
      </div>
    </Transition>
    <Transition name="nested4">
      <div v-show="show" class="move7">
        <transition
          name="fade5"
          mode="out-in"
        >
          <div id="students" :key="selectedIndex">
            <div v-for="index in 5" @click="selectStds(index-1);stopAudio();" :key="index" :style=" !school[selectedIndex].students[index - 1] ? { pointerEvents: 'none' } : {}"  @mousemove="followMouse" @mouseleave="hideImage">
              <img v-if="school[selectedIndex].students[index - 1]" :src="school[selectedIndex].students[index - 1].head">
              <img v-if="school[selectedIndex].students[index - 1]" :src="school[selectedIndex].students[index - 1].head2" :style="{opacity : selectedStd === (index-1) ? 1 : 0}">
            </div>
          </div>
        </transition>
      </div>
    </Transition>
    <Transition name="nested3">
      <div id="fullname" v-html="school[selectedIndex].students[selectedStd].fullname" v-show="show">
      </div>
    </Transition>
  </div>
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
#charv {
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
.fade1-enter-to {
  opacity: 1;
}
.fade1-leave-from {
  opacity: 1;
}
.fade1-leave-to {
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active,
.fade3-enter-active,
.fade3-leave-active,
.fade4-enter-active,
.fade4-leave-active,
.fade5-enter-active,
.fade5-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade2-enter-from,
.fade3-enter-from,
.fade4-enter-from {
  opacity: 0;
  transform: translateX(7vw);
}
.fade2-enter-to,
.fade3-enter-to,
.fade4-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade2-leave-from,
.fade3-leave-from,
.fade4-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fade2-leave-to,
.fade3-leave-to,
.fade4-leave-to {
  opacity: 0;
  transform: translateX(7vw);
}
.fade3-enter-active {
  transition-delay: 0.2s;
}
.fade4-enter-active {
  transition-delay: 0.4s;
}
.fade5-enter-from {
  opacity: 0;
  transform: translateY(-4vw);
}
.fade5-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade5-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade5-leave-to {
  opacity: 0;
  transform: translateY(-4vw);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30%);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-leave-to {
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
.nested-enter-active,
.nested2-enter-active,
.nested3-enter-active,
.nested4-enter-active {
  transition: all 0.4s ease-in-out;
}
.nested-enter-active {
  transition-delay: 0.4s;
}
.nested2-enter-active {
  transition-delay: 0.5s;
}
.nested3-enter-active {
  transition-delay: 0.8s;
}
.nested4-enter-active {
  transition-delay: 1.2s;
}
.nested-enter-from,
.nested2-enter-from,
.nested3-enter-from,
.nested4-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.nested-enter-to,
.nested2-enter-to,
.nested3-enter-to,
.nested4-enter-to {
  opacity: 1;
  transform: translateX(0);
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

#bg22 {
  position: fixed;
  width: 100%;
  height: 4.6vw;
  top: 50%;
  transform: translateY(-50%);
  background-color: #e7e7e7bf;
  z-index: -9;
  display: flex;
  align-items: center;
  margin-top: 16.2vw;
}
#bg22 span {
  font-family: TVPS-Vain-Capital;
  font-style: italic;
  font-size: 0.685vw;
  color: #858585;
  margin-left: 18.4vw;
}
#navcontain {
  position: fixed;
  width: 8vw;
  height: 25vw;
  top: 13.4vw;
  left: 6.5vw;
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
}
.carousel-card-item {
  overflow: hidden;
  position: absolute;
  width: 64%;
  height: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.carousel-card-item img {
  position: absolute;
  width: 100%;
  height: auto;
}
.carousel-card-item img:nth-child(2) {
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.carousel-card-item img:nth-child(2):hover {
  opacity: 1 !important;
}

.c-toped {
  top: 0%;
  transform: translateY(-50%);
}
.c-top {
  top: 25%;
  transform: translateY(-50%);
}
.c-active {
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}
.c-bottom {
  bottom: 25%;
  transform: translateY(50%);
}
.c-bottomed {
  bottom: 0%;
  transform: translateY(50%);
}
.c-more {
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0s;
}

#characterinfo {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 18.4vw;
  width: 70vw;
  height: 25.5vw;
  display: flex;
  align-items: start;
  flex-direction: column;
}



.move1 {
  width: 70vw;
  height: 9.4vw;
  display: flex;
  align-items: start;
  flex-direction: column;
}
.nameen {
  width: 70vw;
  height: 5vw;
  font-size: 4.47vw;
  color: #1289f9;
  font-family: TVPS-Vain-Capital;
}
.type_name {
  width: 70vw;
  height: 4.4vw;
  display: flex;
  justify-content: start;
  align-items: start;
}
.type {
  width: 4%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 0.7vw;
}
.namecn {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 3.2vw;
  color: #3f3f3f;
  font-family: SourceHanSansCN-Heavy;
}

.move2 {
  width: 70vw;
  height: 6vw;
  display: flex;
  align-items: start;
  flex-direction: column;
}
.stars {
  width: 70vw;
  height: 2.2vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.star {
  width: 2.3%;
  margin-right: 0.15vw;
}
.cv {
  width: 70vw;
  height: 3.8vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.voice {
  width: 1.7%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.cv_name {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: SourceHanSansCN-Normal;
  font-size: 1.1vw;
  color: #29292c;
}
.cv2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 0.15vw solid #818181;
  height: 16.5%;
  padding: 0 0.3vw 0 0.65vw;
  margin-right: 0.45vw;
}
.move6 {
  margin-top: 0.8vw;
  margin-bottom: 0.855vw;
  width: 70vw;
  display: flex;
}
.split {
  width: 70vw;
  height: 0.05vw;
  background-color: #1189f9;
  display: flex;
  align-items: center;
}
.split div {
  position: absolute;
  width: 2.2%;
  height: 0.15vw;
  background-color: #1189f9;
}

.move3 {
  width: 70vw;
  height: 8.4vw;
  display: flex;
  align-items: start;
  flex-direction: column;
}
.infos {
  width: 70vw;
  height: 1.7vw;
  font-family: TVPS-Vain-Capital;
  font-size: 0.45vw;
  color: #29292c;
  letter-spacing: 0.4vw;
  display: flex;
  flex-direction: column;
  margin-top: 1.1vw;
}
.info {
  height: 75%;
  font-size: 1.05vw;
  font-family: SourceHanSansCN-Normal;
  color: #29292c;
  letter-spacing: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-left: 1.35vw;
  margin-top: -0.15vw;
}
.info:before {
  content: "";
  position: absolute;
  left: -1.35vw;
  top: 50%;
  transform: translateY(-50%);
  width: 0.8vw;
  height: 0.8vw;
  background-color: #1189f9;
  border-radius: 50%;
}

.move5 {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}
#characterwrap {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 53vw;
  pointer-events: none;
}

.move4 {
  position: fixed;
  right: 5.2vw;
  top: 14.5vw;
  width: 26.2vw;
  height: 15.5vw;
}
#infoimg {
  position: absolute;
  width: 100%;
  height: 100%;
}
#infoimg:hover .card {
  top: 5.5vw;
}
#infoimg:hover .gun {
  top: 0.8vw;
}
.logo {
  position: absolute;
  width: 60%;
  top: 0;
  left: 0;
  z-index: 1;
}
.card {
  z-index: 2;
  position: absolute;
  width: 56.5%;
  top: 4vw;
  right: 3.8vw;
  transition: all 0.3s ease;
}
.card div {
  position: absolute;
  width: 65%;
  bottom: 0.2vw;
  right: -3vw;
}
.gun {
  z-index: 3;
  position: absolute;
  width: 78%;
  right: -2.5vw;
  top: 1.9vw;
  transition: all 0.3s ease;
}
.move7 {
  position: fixed;
  right: 11.4vw;
  bottom: 5.2vw;
  width: 19.7vw;
  height: 11.5vw;
  z-index: 3;
}
#students {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.no-click {  
  background: #000;  
}
#students div{
  position: relative;
  width: 33.33333333%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#students div img{
  position: absolute;
  width: 77%;
}
#students div img:nth-child(2){
  z-index: 1;
  transition: opacity 0.3s ease;
  opacity: 0;
}
#students div img:nth-child(2):hover {
  opacity: 1 !important;
}
#fullname {
  font-family: Gilroy-Light;
  font-size: 0.85vw;
  color: #47494f;
  position: fixed;
  bottom: 3.3vw;
  right: 7.8vw;
  width: 10vw;
  height: 2vw;
  text-align: right;
}

#mobile {
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
  .videoContainer, #bg22, .move4, .move3, .move6 {
    display: none;
  }
  #mobile{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: url('/character/mobile/bg.png') no-repeat;
    background-size: 100%;
    z-index: -10;
  }
  #navcontain {
    position: fixed;
    width: 22vw;
    height: 70vw;
    bottom: 22vh;
    left: 5vw;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
  }
  .carousel-card-item {
    overflow: hidden;
    position: absolute;
    width: 64%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .carousel-card-item img {
    position: absolute;
    width: 100%;
    height: auto;
  }
  .carousel-card-item img:nth-child(2) {
    position: absolute;
    width: 100%;
    height: auto;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .carousel-card-item img:nth-child(2):hover {
    opacity: 1 !important;
  }
  .c-toped {
    top: 0%;
    transform: translateY(-50%);
  }
  .c-top {
    top: 25%;
    transform: translateY(-50%);
  }
  .c-active {
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
  }
  .c-bottom {
    bottom: 25%;
    transform: translateY(50%);
  }
  .c-bottomed {
    bottom: 0%;
    transform: translateY(50%);
  }
  .c-more {
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 0s;
  }

  .move5 {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    pointer-events: none;
  }
  #characterwrap {
    position: absolute;
    top: 42%;
    left: 65%;
    transform: translate(-50%, -50%);
    width: 205vw;
    pointer-events: none;
  }

  #characterinfo {
    position: fixed;
    top: 10%;
    left: 8vw;
    width: 70vw;
    height: 70vw;
    display: flex;
    align-items: start;
    flex-direction: column;
  }
  .move1 {
    width: 70vw;
    height: 20vw;
    display: flex;
    align-items: start;
    flex-direction: column;
  }
  .nameen {
    width: 70vw;
    height: 11vw;
    font-size: 9vw;
    color: #1289f9;
    font-family: TVPS-Vain-Capital;
  }
  .type_name {
    width: 70vw;
    height: 9vw;
    display: flex;
    justify-content: start;
    align-items: start;
  }
  .type {
    width: 8%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 1vw;
  }
  .namecn {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 6.3vw;
    color: #3f3f3f;
    font-family: SourceHanSansCN-Heavy;
  }
  
  .move2 {
    width: 70vw;
    height: 25vw;
    display: flex;
    align-items: start;
    flex-direction: column;
  }
  .stars {
    width: 70vw;
    height: 4vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .star {
    width: 5%;
    margin-right: 0.15vw;
  }
  .cv {
    width: 70vw;
    height: 15vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .voice {
    width: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cv_name {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: SourceHanSansCN-Normal;
    font-size: 3vw;
    color: #29292c;
    margin-left: 1vw;
  }
  .cv2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-right: 0.35vw solid #818181;
    height: 16.5%;
    padding: 0 1.5vw 0 1vw;
    margin-right: 1.3vw;
  }

  #fullname {
    font-family: Gilroy-Light;
    font-size: 2vw;
    color: #47494f;
    position: fixed;
    bottom: 17vh;
    right: 7.8vw;
    width: 20vw;
    height: 6vw;
    text-align: right;
  }

  .move7 {
    position: fixed;
    left: 0;
    bottom: 7vh;
    width: 100vw;
    height: 11.5vw;
    z-index: 3;
    background-color: #e7e7e77f;
  }
  #students {
    position: absolute;
    width: 90%;
    height: 100%;
    bottom: 0;
    right: 5%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  .no-click {  
    background: #000;  
  }
  #students div{
    position: relative;
    width: 20%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #students div img{
    position: absolute;
    width: 77%;
  }
  #students div img:nth-child(2){
    z-index: 1;
    transition: opacity 0.3s ease;
    opacity: 0;
  }
  #students div img:nth-child(2):hover {
    opacity: 1 !important;
  }

}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
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
  { src: '/character/bgyx/logo.png', src2: '/character/bgyx/logo_a.png', num: 4 },
  { src: '/character/shj/logo.png', src2: '/character/shj/logo_a.png', num: 5 },
  { src: '/character/abds/logo.png', src2: '/character/abds/logo_a.png', num: 0 },
  { src: '/character/ghn/logo.png', src2: '/character/ghn/logo_a.png', num: 1 },
  { src: '/character/ssy/logo.png', src2: '/character/ssy/logo_a.png', num: 2 },
  { src: '/character/qx/logo.png', src2: '/character/qx/logo_a.png', num: 3 },
]);
let selectedIndex = ref(0);
const selectNav = (num) => {  
  selectedIndex.value = num;
  selectedStd.value = 0;
};
const cardArray = ref(['c-toped', 'c-top', 'c-active', 'c-bottom', 'c-bottomed', ...Array(navItems.value.length - 5).fill('c-more')]);
const activeIndex = ref(2);
const goToSlide = (index) => {
  const currentIndex = cardArray.value.indexOf('c-active');
  const length = cardArray.value.length;
  if (index > currentIndex) {
    const steps = index - currentIndex;
    cardArray.value.unshift(...cardArray.value.splice(length - steps, steps));
  } else {
    const steps = currentIndex - index;
    cardArray.value.push(...cardArray.value.splice(0, steps));
  }
  updateActiveIndex();
};
const updateActiveIndex = () => {
  activeIndex.value = cardArray.value.indexOf('c-active');
};

const school = ref([
  { students: [], logosrc: '/character/abds/abds_char.png', schoolname: '阿拜多斯' },
  { students: [], logosrc: '/character/ghn/ghn_char.png', schoolname: '格黑娜' },
  { students: [], logosrc: '/character/ssy/ssy_char.png', schoolname: '圣三一' },
  { students: [], logosrc: '/character/qx/qx_char.png', schoolname: '千禧年' },
  { students: [], logosrc: '/character/bgyx/bgyx_char.png', schoolname: '百鬼夜行' },
  { students: [], logosrc: '/character/shj/shj_char.png', schoolname: '山海经' },
]);
const students1 = ref([
  { name: '砂狼白子', nameen: 'SHIROKO', fullname: 'SUNAOOKAMI<br/>SHIROKO', cv: '小仓唯', stars: 3, type: '/character/redak.png', head: '/character/abds/shiroko_ua.png', head2: '/character/abds/shiroko_a.png', club: '对策委员会', birthday: '5月16日', card: '/character/abds/shiroko_card.png', cardname: '/character/abds/shiroko.png', gun: '/character/abds/shiroko_gun.png', characterwrap: '/character/abds/shiroko_c.png', voice: '/character/abds/shiroko_v.mp3' }, 
  { name: '十六夜野宫', nameen: 'NONOMI', fullname: 'IZAYOI<br/>NONOMI', cv: '三浦千幸', stars: 2, type: '/character/yellowak.png', head: '/character/abds/nonomi_ua.png', head2: '/character/abds/nonomi_a.png', club: '对策委员会', birthday: '9月1日', card: '/character/abds/nonomi_card.png', cardname: '/character/abds/nonomi.png', gun: '/character/abds/nonomi_gun.png', characterwrap: '/character/abds/nonomi_c.png', voice: '/character/abds/nonomi_v.mp3' },
  { name: '黑见芹香', nameen: 'SERIKA', fullname: 'KUROMI<br/>SERIKA', cv: '大桥彩香', stars: 2, type: '/character/redak.png', head: '/character/abds/serika_ua.png', head2: '/character/abds/serika_a.png', club: '对策委员会', birthday: '6月25日', card: '/character/abds/serika_card.png', cardname: '/character/abds/serika.png', gun: '/character/abds/serika_gun.png', characterwrap: '/character/abds/serika_c.png', voice: '/character/abds/serika_v.mp3' },
  { name: '奥空绫音', nameen: 'AYANE', fullname: 'OKUSORA<br/>AYANE', cv: '原田彩枫', stars: 2, type: '/character/yellowtt.png', head: '/character/abds/ayane_ua.png', head2: '/character/abds/ayane_a.png', club: '对策委员会', birthday: '11月12日', card: '/character/abds/ayane_card.png', cardname: '/character/abds/ayane.png', gun: '/character/abds/ayane_gun.png', characterwrap: '/character/abds/ayane_c.png', voice: '/character/abds/ayane_v.mp3' },
  { name: '小鸟游星野', nameen: 'HOSHINO', fullname: 'TAKANASHI<br/>HOSHINO', cv: '花守由美里', type: '/character/yellowdf.png', stars: 3, head: '/character/abds/hoshino_ua.png', head2: '/character/abds/hoshino_a.png', club: '对策委员会', birthday: '1月2日', card: '/character/abds/hoshino_card.png', cardname: '/character/abds/hoshino.png', gun: '/character/abds/hoshino_gun.png', characterwrap: '/character/abds/hoshino_c.png', voice: '/character/abds/hoshino_v.mp3' },
]);
school.value[0].students = students1.value;
const students2 = ref([
  { name: '空崎日奈', nameen: 'HINA', fullname: 'SORASAKI<br/>HINA', cv: '广桥凉', stars: 3, type: '/character/redak.png', head: '/character/ghn/1ua.png', head2: '/character/ghn/1a.png', club: '风纪委员会', birthday: '2月19日', card: '/character/ghn/1card.png', cardname: '/character/ghn/1.png', gun: '/character/ghn/1gun.png', characterwrap: '/character/ghn/1c.png', voice:'/character/ghn/1v.mp3' }, 
  { name: '银镜伊织', nameen: 'IORI', fullname: 'SHIROMI<br/>IORI', cv: '佐仓绫音', stars: 3, type: '/character/yellowak.png', head: '/character/ghn/2ua.png', head2: '/character/ghn/2a.png', club: '风纪委员会', birthday: '11月8日', card: '/character/ghn/2card.png', cardname: '/character/ghn/2.png', gun: '/character/ghn/2gun.png', characterwrap: '/character/ghn/2c.png', voice:'/character/ghn/2v.mp3' },
  { name: '陆八魔阿露', nameen: 'ARU', fullname: 'RIKUHACHIMA<br/>ARU', cv: '近藤玲奈', stars: 3, type: '/character/redak.png', head: '/character/ghn/3ua.png', head2: '/character/ghn/3a.png', club: '便利屋68', birthday: '3月12日', card: '/character/ghn/3card.png', cardname: '/character/ghn/3.png', gun: '/character/ghn/3gun.png', characterwrap: '/character/ghn/3c.png', voice:'/character/ghn/3v.mp3' },
  { name: '浅黄睦月', nameen: 'MUTSUKI', fullname: 'ASAGI<br/>MUTSUKI', cv: '大久保瑠美', stars: 2, type: '/character/redak.png', head: '/character/ghn/4ua.png', head2: '/character/ghn/4a.png', club: '便利屋68', birthday: '7月29日', card: '/character/ghn/4card.png', cardname: '/character/ghn/4.png', gun: '/character/ghn/4gun.png', characterwrap: '/character/ghn/4c.png', voice:'/character/ghn/4v.mp3' },
  { name: '黑馆晴奈', nameen: 'HARUNA', fullname: 'KURODATE<br/>HARUNA', cv: '田所梓', stars: 3, type: '/character/blueak.png', head: '/character/ghn/5ua.png', head2: '/character/ghn/5a.png', club: '美食研究会', birthday: '3月1日', card: '/character/ghn/5card.png', cardname: '/character/ghn/5.png', gun: '/character/ghn/5gun.png', characterwrap: '/character/ghn/5c.png', voice:'/character/ghn/5v.mp3' },
]);
school.value[1].students = students2.value;
const students3 = ref([
  { name: '阿慈谷日富美', nameen: 'HIFUMI', fullname: 'AJITANI<br/>HIFUMI', cv: '本渡枫', stars: 3, type: '/character/yellowat.png', head: '/character/ssy/1ua.png', head2: '/character/ssy/1a.png', club: '补习部', birthday: '11月27日', card: '/character/ssy/1card.png', cardname: '/character/ssy/1.png', gun: '/character/ssy/1gun.png', characterwrap: '/character/ssy/1c.png', voice:'/character/ssy/1v.mp3' }, 
  { name: '白洲梓', nameen: 'AZUSA', fullname: 'SHIRASU<br/>AZUSA', cv: '种田梨沙', stars: 3, type: '/character/redak.png', head: '/character/ssy/azusa_ua.png', head2: '/character/ssy/azusa_a.png', club: '补习部', birthday: '12月26日', card: '/character/ssy/azusa_card.png', cardname: '/character/ssy/azusa.png', gun: '/character/ssy/azusa_gun.png', characterwrap: '/character/ssy/azusa_c.png', voice:'/character/ssy/azusa_v.mp3' },
  { name: '羽川莲见', nameen: 'HASUMI', fullname: 'HANEKAWA<br/>HASUMI', cv: '濑户麻沙美', stars: 2, type: '/character/yellowak.png', head: '/character/ssy/3ua.png', head2: '/character/ssy/3a.png', club: '便利屋68', birthday: '3月12日', card: '/character/ssy/3card.png', cardname: '/character/ssy/3.png', gun: '/character/ssy/3gun.png', characterwrap: '/character/ssy/3c.png', voice:'/character/ssy/3v.mp3' },
]);
school.value[2].students = students3.value;
const students4 = ref([
  { name: '早濑优香', nameen: 'YUUKA', fullname: 'HAYASE<br/>YUUKA', cv: '春花兰', stars: 2, type: '/character/reddf.png', head: '/character/qx/1ua.png', head2: '/character/qx/1a.png', club: '研讨会', birthday: '3月14日', card: '/character/qx/1card.png', cardname: '/character/qx/1.png', gun: '/character/qx/1gun.png', characterwrap: '/character/qx/1c.png', voice:'/character/qx/1v.mp3' }, 
  { name: '角楯花凛', nameen: 'KARIN', fullname: 'KAKUDATE<br/>KARIN', cv: '沼仓爱美', stars: 3, type: '/character/yellowak.png', head: '/character/qx/2ua.png', head2: '/character/qx/2a.png', club: 'C&C', birthday: '2月2日', card: '/character/qx/2card.png', cardname: '/character/qx/2.png', gun: '/character/qx/2gun.png', characterwrap: '/character/qx/2c.png', voice:'/character/qx/2v.mp3' },
  { name: '才羽桃', nameen: 'MOMOI', fullname: 'SAIBA<br/>MOMOI', cv: '徳井青空', stars: 2, type: '/character/yellowak.png', head: '/character/qx/3ua.png', head2: '/character/qx/3a.png', club: '游戏开发部', birthday: '12月8日', card: '/character/qx/3card.png', cardname: '/character/qx/3.png', gun: '/character/qx/3gun.png', characterwrap: '/character/qx/3c.png', voice:'/character/qx/3v.mp3' },
  { name: '才羽绿', nameen: 'MIDORI', fullname: 'SAIBA<br/>MIDORI', cv: '高田忧希', stars: 3, type: '/character/yellowak.png', head: '/character/qx/4ua.png', head2: '/character/qx/4a.png', club: '游戏开发部', birthday: '12月8日', card: '/character/qx/4card.png', cardname: '/character/qx/4.png', gun: '/character/qx/4gun.png', characterwrap: '/character/qx/4c.png', voice:'/character/qx/4v.mp3' },
  { name: '天童爱丽丝', nameen: 'ARIS', fullname: 'TENDOU<br/>ARIS', cv: '田中美海', stars: 3, type: '/character/blueak.png', head: '/character/qx/5ua.png', head2: '/character/qx/5a.png', club: '游戏开发部', birthday: '3月25日', card: '/character/qx/5card.png', cardname: '/character/qx/5.png', gun: '/character/qx/5gun.png', characterwrap: '/character/qx/5c.png', voice:'/character/qx/5v.mp3' },
]);
school.value[3].students = students4.value;
const students5 = ref([
  { name: '和乐千世', nameen: 'CHISE', fullname: 'WARAKU<br/>CHISE', cv: '岛村侑', stars: 2, type: '/character/blueak.png', head: '/character/bgyx/1ua.png', head2: '/character/bgyx/1a.png', club: '阴阳部', birthday: '7月13日', card: '/character/bgyx/1card.png', cardname: '/character/bgyx/1.png', gun: '/character/bgyx/1gun.png', characterwrap: '/character/bgyx/1c.png', voice:'/character/bgyx/1v.mp3' }, 
  { name: '久田泉奈', nameen: 'IZUNA', fullname: 'KUDA<br/>IZUNA', cv: '阿澄佳奈', stars: 3, type: '/character/blueak.png', head: '/character/bgyx/2ua.png', head2: '/character/bgyx/2a.png', club: '忍术研究部', birthday: '12月16日', card: '/character/bgyx/2card.png', cardname: '/character/bgyx/2.png', gun: '/character/bgyx/2gun.png', characterwrap: '/character/bgyx/2c.png', voice:'/character/bgyx/2v.mp3' },
]);
school.value[4].students = students5.value;
const students6 = ref([
  { name: '春原瞬', nameen: 'SHUN', fullname: 'SUNOHARA<br/>SHUN', cv: '伊藤静', stars: 3, type: '/character/redak.png', head: '/character/shj/1ua.png', head2: '/character/shj/1a.png', club: '梅花园', birthday: '2月5日', card: '/character/shj/1card.png', cardname: '/character/shj/1.png', gun: '/character/shj/1gun.png', characterwrap: '/character/shj/1c.png', voice:'/character/shj/1v.mp3' }, 
  { name: '药子纱绫', nameen: 'SAYA', fullname: 'YAKUSHI<br/>SAYA', cv: '田村由加莉', stars: 3, type: '/character/redak.png', head: '/character/shj/2ua.png', head2: '/character/shj/2a.png', club: '炼丹研究会', birthday: '1月3日', card: '/character/shj/2card.png', cardname: '/character/shj/2.png', gun: '/character/shj/2gun.png', characterwrap: '/character/shj/2c.png', voice:'/character/shj/2v.mp3' },
]);
school.value[5].students = students6.value;
let selectedStd = ref(0);
const selectStds = (num) => {  
  selectedStd.value = num;
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

const isShowgif = ref(false);
const audioPlayer = ref(null);
const playAudio = () => {
  audioPlayer.value.play();
  isShowgif.value = true;
};
const stopAudio = () => {
  audioPlayer.value.pause();
  audioPlayer.value.currentTime = 0;
  isShowgif.value = false;
};
const handleEnded = () => {
  isShowgif.value = false;
};

const { hoverArea, followImage, followImage2 } = useHoverFollower('[class*="hoverarea"]', 'followImage', 'followImage2');
</script>