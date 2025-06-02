<template>
  <div id="setv">
    <div class="videoContainer">
      <video autoplay loop muted playsinline class="background-video">
        <source src="/app/background.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="mobile">
    </div>
  </div>
  <Transition name="nested">
    <div v-show="show" id="bg1">    
    </div>
  </Transition>
  <Transition name="nested2">
    <div v-show="show" id="worldview">
      <div class="title">
        <h1>KIVOTOS</h1>
        <h2>KIVOTOS<br/>WORLDVIEW</h2>
      </div>
      <div class="photo">
        <img src="/set/kivotos.png"/>
        <div class="split">
          <span>BLUE ARCHIVE /// KIVOTOS</span>
          <img src="/set/split.png"/>
          <img src="/set/mobile/split.png"/>
        </div>
        <div class="content">
          <img src="/set/10026.png"/>
          <div class="content_word">
            <pre class="text">
              <span class="blue">基沃托斯</span>，一片神秘而辽阔的土地，头上有着奇异光环的学生们生
              活在这里。然而，联邦学生会管理下的平静生活随着会长的不辞而
              别被打破，在群龙无首的基沃托斯，危机一触即发！
              在这样的混乱之中，会长留下的搜查社“夏莱”将扮演怎样的角色？
              从外面的世界来到基沃托斯的老师又将与学生们发生怎样的邂逅？
              
              巨额债务、废部危机、两大对立势力间的条约签订……
              各种各样的难题，等待着老师去解决。
              友情、青春和爱的故事即将展开。
            </pre>
            <pre class="text2">
              <span class="blue">基沃托斯</span>，一片神秘而辽阔的土地，头上有着奇异光环的学生们生
              活在这里。然而，联邦学生会管理下的平静生活随着会长的不辞而
              别被打破，在群龙无首的基沃托斯，危机一触即发！

              在这样的混乱之中，会长留下的搜查社“夏莱”将扮演怎样的角色？
              从外面的世界来到基沃托斯的老师又将与学生们发生怎样的邂逅？
              
              巨额债务、废部危机、两大对立势力间的条约签订……
              各种各样的难题，等待着老师去解决。
              友情、青春和爱的故事即将展开。
            </pre>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
#setv {
  width: 100%;
  height: 100%;
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
  .nested-leave-active,
  .nested2-enter-active,
  .nested2-leave-active {
    transition: all 0.6s ease-in-out;
  }
  .nested-enter-from,
  .nested2-enter-from {
    transform: translateX(100%);
    opacity: 0;
  }
  .nested-enter-to,
  .nested2-enter-to {
    transform: translateX(0);
    opacity: 1;
  }
  .nested2-enter-active {
    transition-delay: 0.6s;
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

#bg1 {
  position: fixed;
  top: 17%;
  left: 5.5%;
  background-image:url('/set/bg1.png');
  background-size: contain;
  background-repeat: no-repeat;
  height: 80%;
  width: 89%;
}
#worldview {
  position: fixed;
  bottom: 6%;
  left: 13.3%;
  height: 80%;
  width: 80.5%;
}
.title {
  position: absolute;
  left: 0;
  bottom: 58vh;
  height: 19%;
  width: 97%;
  display: flex;
  justify-content: space-between;
}
.title h1 {
  font-size: 7.2vw;
  font-family: TVPS-Vain-Capital;
  font-weight: bold;
  color: #1289f9;
  margin-left: -0.2vw;
  margin-top: -0.5vh;
  letter-spacing: 1.5px;
}
.title h2 {
  font-size: 1.5vw;
  text-align: right;
  font-family: TVPS-Vain-Capital;
  font-weight: bold;
  margin-top: -0.5vh;
  color: #e7e7e7;
}
.photo {
  position: absolute;
  top: 0vh;
  right: 0;
  width: 69%;
}
.photo img {
  height: auto;
}
.content {
  position: absolute;
  bottom: 10vh;
  left: -26.5vw;
  width: 45%;
  height: 55%;
}
.content img {
  width: 76%;
  height: auto;
}
.blue {
  color: #1289f9;
  font-family: SourceHanSansCN-Bold;
}
.text {
  display: block;
  font-family: 'SourceHanSansCN-Regular'; 
  font-size: 0.79vw;
  line-height: 3.05vh;
  color: #2b2b2b;
  unicode-bidi: isolate;
  white-space: pre;
  margin-top: 4.6vh;
  margin-left: -1vw;
}
.split {
  position: absolute;
  bottom: 6.2vh;
  right: 2.8vw;
  width: 140%;
  z-index: -1;
}
.split span {
  font-family: TVPS-Vain-Capital;
  font-size: 0.69vw;
  color: #d3d3d3;
  padding-right: 1.6vw;
}
.split img:first-of-type {
  width: 60%;
}
.split img:nth-of-type(2) {
  display: none;
}
#mobile,.text2 {
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
  .videoContainer, #bg1, .text {
    display: none;
  }
  #mobile{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: url('/set/mobile/bg.png') no-repeat;
    background-size: 100%;
    z-index: -10;
  }
  #worldview {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .title {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .title h1 {
    font-size: 13.5vw;
    font-family: TVPS-Vain-Capital;
    font-weight: bold;
    color: #1289f9;
    position: absolute;
    left: 9vw;
    top: 72vw;
    letter-spacing: 1.5px;
  }
  .title h2 {
    font-size: 3.1vw;
    text-align: right;
    font-family: TVPS-Vain-Capital;
    font-weight: bold;
    position: absolute;
    top: 15vw;
    right: 6vw;
    color: #e7e7e7;
  }
  .photo {
    position: absolute;
    top: 10vw;
    left: 6vw;
    width: 88vw;
  }
  .photo img {
    height: auto;
  }
  .content {
    position: fixed;
    top: 88vw;
    left: 0;
    width: 100%;
    height: 80vw;
  }
  .content img {
    position: absolute;
    top: 0;
    left: 5vw;
    width: 38%;
    height: auto;
  }
  .blue {
    color: #1289f9;
    font-family: SourceHanSansCN-Bold;
  }
  .text2 {
    display: block;
    font-family: 'SourceHanSansCN-Regular'; 
    font-size: 2.8vw;
    line-height: 4.5vw;
    color: #2b2b2b;
    unicode-bidi: isolate;
    white-space: pre;
    position: absolute;
    top: 10vw;
    left: 0vw;
  }
  .split {
    position: fixed;
    top: 148vw;
    left: 9vw;
    width: 100%;
    z-index: -1;
  }
  .split span {
    font-family: TVPS-Vain-Capital;
    font-size: 1.8vw;
    color: #d3d3d3;
    padding-right: 1.6vw;
  }
  .split img:first-of-type {
    display: none;
  }
  .split img:nth-of-type(2) {
    margin-left: 5vw;
    width: 50%;
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const show = ref(false)
let intervalId1 = [];
onMounted(()=>{
  intervalId1.push(setTimeout(() => {
    show.value = !show.value;
  }, 100));
})
onBeforeUnmount(() => {
  clearInterval(intervalId1);
});
</script>