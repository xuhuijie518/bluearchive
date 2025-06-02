<template>
  <div id="setv">
    <div class="videoContainer">
      <video autoplay loop muted playsinline class="background-video">
        <source src="/app/background.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="mobile">
    </div>
    <div id="bg2"></div>
    <div id="switch">
      <div class="prev hoverarea" @click="prev();fadeOut();talkon();" :style="{ opacity: selectedIndex === 0 ? 0 : 1 ,pointerEvents: selectedIndex === 0 ? 'none' : 'auto' }">
      </div>
      <div class="next hoverarea" @click="next();fadeOut();talkon();" :style="{ opacity: selectedIndex === 5 ? 0 : 1 ,pointerEvents: selectedIndex === 5 ? 'none' : 'auto'}">
      </div>
    </div>
    <div id="bg22">
      <Transition name="nested">
        <div v-show="show">   
          <span>BLUE ARCHIVE /// CHARACTER INFO</span>
        </div>
      </Transition>
    </div>
    <div class="fade_box" 
      :style="{ opacity: isFaded === true ? 0 : 1}" 
      @touchstart="startTouch" 
      @touchmove="moveTouch" 
      @touchend="endTouch"
    >
      <Transition name="nested2">
        <div id="character_bg" v-show="show">
          <img :src="school[selectedIndex].cbsrc"/>
        </div>
      </Transition>
      <div class="split"></div>
      <div id="schoolitd">
        <Transition name="nested3">
          <div v-show="show" class="school">
            <div class="schoollogo">
              <img :src="school[selectedIndex].logosrc"/>
            </div>
            <div class="schoolname">
              <span class="en">{{school[selectedIndex].nameen}}</span>
              <span class="cn">{{school[selectedIndex].namecn}}</span>
            </div>
            <div class="introduction" v-html="school[selectedIndex].intd">
            </div>
            <div class="introduction2" v-html="school[selectedIndex].intd2">
            </div>
          </div>
        </Transition>
      </div>
    </div>
    <Transition name="nested4">
      <div id="talkbox" v-show="show">
        <div class="charbox" v-for="(item, index) in school[selectedIndex].chartalks.slice(0, 3)" :key="index" :style="{opacity: visible[index] === true ? 1 : 0}">
          <div class="charhead"><img :src="item.head"></div>
          <div class="right">
            <div class="charname">{{ item.name }}</div>
            <div class="chartalk">
              <div class="bubble">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <div id="talkbox2">
      <div class="charbox" v-for="(item, index) in school[selectedIndex].chartalks.slice(3, 6)" :key="index" :style="{opacity: visible2[index] === true ? 1 : 0}">
        <div class="charhead"><img :src="item.head"></div>
        <div class="right">
          <div class="charname">{{ item.name }}</div>
          <div class="chartalk">
            <div class="bubble">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <Transition name="nested">
      <div id="navContainer" v-show="show" 
      @touchstart="startTouch2" 
      @touchmove="moveTouch2" 
      @touchend="endTouch2"
      @mousemove="handleMouseMove">
        <div class="nav hoverarea" v-for="(item, index) in navItems" :key="index"  @click="handleClick(index);" :class="{ selected: selectedIndex === index }">{{ item }}</div>
      </div>
    </Transition>
  </div>
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
.nested-enter-active, .nested-leave-active,
.nested2-enter-active, .nested2-leave-active,
.nested3-enter-active, .nested3-leave-active,
.nested4-enter-active, .nested4-leave-active {
  transition: all 0.4s ease-in-out;
}
.nested1-enter-active {
  transition-delay: 0.1s;
}
.nested2-enter-active {
  transition-delay: 0.5s;
}
.nested3-enter-active {
  transition-delay: 1s;
}
.nested4-enter-active {
  transition-delay: 1.5s;
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

#bg2 {
  position: fixed;
  top: 12vw;
  left: 15.2%;
  background-image:url('/set/bg2.png');
  background-size: contain;
  background-repeat: no-repeat;
  height: 55%;
  width: 69.6vw;
  z-index: -10;
}

#bg22 {
  position: fixed;
  width: 100%;
  height: 4.6vw;
  top: 27.9vw;
  background-color: #e7e7e7bf;
  z-index: -9;
  display: flex;
  align-items: center;
}
#bg22 span {
  font-family: TVPS-Vain-Capital;
  font-style: italic;
  font-size: 0.685vw;
  color: #858585;
  margin-left: 14.8vw;
}

#switch {
  position: fixed;
  width: 90.5%;
  height: 9vw;
  top: 18.5vw;
  left: 4.75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
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

.fade_box {
  position: fixed;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s ease-in-out;
}
#character_bg {
  position: fixed;
  width: 100%;
  height: 100%;
}

#schoolitd {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 48%;
  z-index: 2;
}
.school {
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
}
.schoollogo {
  width: 16vw;
  height: auto;
}
.schoolname {
  position: relative;
  height: 3.2vw;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  margin-top: 0.8vw;
}
.schoolname .en {
  font-family: TVPS-Vain-Capital;
  font-size: 1.65vw;
  color: #2b2b2b;
  line-height: 1.6vw;
}
.schoolname .cn {
  font-family: xhy;
  font-size: 1.7vw;
  color: #2b2b2b;
  line-height: 1.6vw;
  display: inline-block;
  text-indent: 3vw;
  letter-spacing: 3vw;
  text-align: justify;
}
.schoolname::before {
  content: "";
  position: absolute;
  width: 1.4vw;
  height: 1.65vw;
  background: url('/set/icol.png') no-repeat;
  background-size: 100%;
  top: 50%;
  left: -4.25vw;
  transform: translateY(-50%);
} 
.schoolname::after {
  content: "";
  position: absolute;
  width: 1.4vw;
  height: 1.65vw;
  background: url('/set/icor.png') no-repeat;
  background-size: 100%;
  top: 50%;
  right: -4.25vw;
  transform: translateY(-50%);
}
.introduction {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.885vw;
  color: #2b2b2b;
  margin-top: 1.5vw;
  margin-left: 1vw;
  width: 31vw;
} 

#navContainer {
  overflow: hidden;
  white-space: nowrap;
  position: fixed;
  bottom: 8.2%;
  left: 4.5%;
  width: 91%;
  height: 4.5vw;
  display: flex;
  align-items: center;
  justify-content: start;
}
.nav {
  display: inline-block;
  margin-right: 7vw;
  color: #e3e3e3;
  -webkit-text-stroke: 0px; 
  font-size: 4.3vw;
  font-family: TVPS-Vain-Capital;
  transition: all .5s ease;
}
.nav:first-child {
  margin-left: 12.5vw;
}
.selected {
  color: #1289f9 !important;
  -webkit-text-stroke: 0px !important;
}
.nav:hover {
  color: transparent;
  -webkit-text-stroke: .1vw #1289f9;
}

#talkbox {
  position: fixed;
  width: 23.5vw;
  height: 13.3vw;
  right: 8.5vw;
  top: 17.3vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
#talkbox2 {
  position: fixed;
  width: 23.5vw;
  height: 13.3vw;
  right: 8.5vw;
  top: 17.3vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.charbox {
  width: 100%;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 0.65vw;
}
.charbox .right {
  width: 85.3%;
  display: flex;
  flex-direction: column;
}
.charhead {
  aspect-ratio: 1/1;
  width: 14.7%;
  display: flex;
  justify-content: center;
  align-items: start;
}
.charhead img{
  width: 82%;
  height: auto;
  margin-top: 10%;
}
.charname {
  width: 100%;
  color: #575757;
  font-size: 0.75vw;
  font-family: SourceHanSansCN-Heavy;
  padding-top: 0.25vw;
  padding-left: 0.25vw;
}
.chartalk {
  display: flex;
  width: 81.5%;
}
.bubble {
  position: relative;
  font-family: FZLanTYJW_Cu;
  font-size: 0.73vw;
  color: #fff;
  background-color: #1189f9;
  border-radius: 0.5vw;
  padding: 0.58vw 0.7vw;
  top: 0.15vw;
  left: 0.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bubble::after {
  content: '';
  position: absolute;
  right: 99.5%;
  top: 25%;
  border-width: 0.4vw;
  border-style: solid;
  border-color: transparent #1189f9 transparent transparent;
}

#mobile, .split, .introduction2 {
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
  .videoContainer, #bg2, #switch, #bg22, .introduction {
    display: none;
  }
  #mobile{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: url('/set/mobile/bg2.png') no-repeat;
    background-size: 100%;
    z-index: -10;
  }

  .fade_box {
    position: fixed;
    width: 100%;
    height: 90%;
    top: 0;
    transition: opacity 0.4s ease-in-out;
  }
  #character_bg {
    position: fixed;
    width: 220%;
    left: 50%;
    transform: translateX(-48%);
    height: auto;
    pointer-events: none;
  }
  .split {
    position: fixed;
    width: 100%;
    height: 10vw;
    left: 0;
    top: 78vw;
    background-color: #e7e5e5bf;
    z-index: -5;
    pointer-events: none;
  }
  #schoolitd {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 44%;
    z-index: 2;
    pointer-events: none;
  }
  .school {
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
  }
  .schoollogo {
    width: 40vw;
    height: auto;
  }
  .schoolname {
    position: relative;
    height: 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    margin-top: 0.8vw;
  }
  .schoolname .en {
    font-family: TVPS-Vain-Capital;
    font-size: 4vw;
    color: #2b2b2b;
    line-height: 4vw;
  }
  .schoolname .cn {
    font-family: xhy;
    font-size: 4.5vw;
    color: #2b2b2b;
    line-height: 4vw;
    display: inline-block;
    text-indent: 6.5vw;
    letter-spacing: 6.5vw;
    text-align: justify;
  }
  .schoolname::before {
    content: "";
    position: absolute;
    width: 3.7vw;
    height: 4vw;
    background: url('/set/icol.png') no-repeat;
    background-size: 100%;
    top: 50%;
    left: -12vw;
    transform: translateY(-50%);
  } 
  .schoolname::after {
    content: "";
    position: absolute;
    width: 3.7vw;
    height: 4vw;
    background: url('/set/icor.png') no-repeat;
    background-size: 100%;
    top: 50%;
    right: -12vw;
    transform: translateY(-50%);
  }
  .introduction2 {
    font-family: SourceHanSansCN-Regular;
    font-size: 2.8vw;
    color: #2b2b2b;
    margin-top: 3.5vw;
    margin-left: 1vw;
    line-height: 5vw;
    width: 77vw;
  }

  #talkbox {
    position: fixed;
    width: 85vw;
    height: 50vw;
    left: 10.5vw;
    transform: translateY(-30%);
    top: 70%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    pointer-events: none;
  }
  #talkbox2 {
    position: fixed;
    width: 85vw;
    height: 50vw;
    left: 10.5vw;
    transform: translateY(-30%);
    top: 70%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    pointer-events: none;
  }
  .charbox {
    width: 100%;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-top: 3vw;
  }
  .charbox .right {
    width: 91%;
    display: flex;
    flex-direction: column;
  }
  .charhead {
    aspect-ratio: 1/1;
    width: 9%;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  .charhead img{
    width: 100%;
    height: auto;
    margin-top: 10%;
  }
  .charname {
    width: 100%;
    color: #575757;
    font-size: 2.5vw;
    font-family: SourceHanSansCN-Heavy;
    padding-top: 0.25vw;
    padding-left: 2vw;
  }
  .chartalk {
    display: flex;
    width: 81.5%;
  }
  .bubble {
    position: relative;
    font-family: FZLanTYJW_Cu;
    font-size: 2.5vw;
    color: #fff;
    background-color: #1189f9;
    border-radius: 1vw;
    padding: 1.5vw 0.8vw;
    top: 0.15vw;
    left: 2.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bubble::after {
    content: '';
    position: absolute;
    right: 99.8%;
    top: 25%;
    border-width: 1.1vw;
    border-style: solid;
    border-color: transparent #1189f9 transparent transparent;
  }
  
  #navContainer {
    overflow: hidden;
    white-space: nowrap;
    position: fixed;
    bottom: 7.2%;
    left: 4.5%;
    width: 100%;
    height: 4.5vw;
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .nav {
    display: inline-block;
    margin-right: 7vw;
    color: #e3e3e3;
    -webkit-text-stroke: 0px; 
    font-size: 6vw;
    font-family: TVPS-Vain-Capital;
    transition: all .5s ease;
  }
  .nav:first-child {
    margin-left: 2.5vw;
  }
  .selected {
    color: #1289f9 !important;
    -webkit-text-stroke: 0px !important;
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
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

const isFaded = ref(false);
const fadeOut = () => {
    isFaded.value = true;
    setTimeout(() => {
        isFaded.value = false;
    }, 400);
};

const navItems = ref([
  'ABYDOS',
  'GEHENNA',
  'TRINITY',
  'MILLENNIUM',
  'HYAKKIYAKO',
  'SHANHAIJING',
]);
const selectedIndex = ref(0);
const next = () => {
  if(selectedIndex.value < 5) {
    setTimeout(() => {
      selectedIndex.value = (selectedIndex.value + 1) % navItems.value.length;
    }, 400);
  }
};
const prev = () => {
  if(selectedIndex.value > 0) {
    setTimeout(() => {
      selectedIndex.value = (selectedIndex.value - 1 + navItems.value.length) % navItems.value.length;
    }, 400);
  } 
};
const selectNav = (index) => {  
  setTimeout(() => {
    selectedIndex.value = index;
  }, 400);
};
const handleMouseMove = (event) => {
  if( !flag.value ) {
    const navContainer = document.getElementById('navContainer');
    const { clientX } = event;
    const { left, width } = navContainer.getBoundingClientRect();
    const scrollLeft = navContainer.scrollWidth - width;
    const percentage = (clientX - left) / width;
    navContainer.scrollLeft = percentage * scrollLeft;
  }
};
const school = ref([
  { chartalks: [], cbsrc: '/set/abds/acb.png', logosrc: '/set/abds/abds.png', nameen: 'ABYDOS ACADEMY', namecn: '阿拜多斯', intd: '阿拜多斯曾经面积广阔、人口众多，但随着来源不明的沙尘暴在区域内席卷，<br/>大部分土地都变成了沙漠，居民也逐渐迁出，繁华之地走向荒芜。<br/>现在，阿拜多斯只剩下五名学生注册在案了。', intd2: '阿拜多斯曾经面积广阔、人口众多，但随着来源不明的沙尘暴<br/>在区域内席卷,大部分土地都变成了沙漠，居民也逐渐迁出，<br/>繁华之地走向荒芜。<br/>现在，阿拜多斯只剩下五名学生注册在案了。' },
  { chartalks: [], cbsrc: '/set/ghn/gcb.png', logosrc: '/set/ghn/ghn.png', nameen: 'GEHENNA ACADEMY', namecn: '格黑娜', intd: '基沃托斯三大学院之一，其学生会名为“万魔殿”。<br/>用两个词来概括这里的风气，就是“自由”和“混沌”。每天都有人惹是生<br/>非，让负责维持秩序的风纪委员会非常头疼。当然，拜这些随心所欲、行为出<br/>格的家伙们所赐，格黑娜的风纪委员也锻炼出了强大的实力。<br/>和圣三一的关系相当差，但最近似乎也有少许缓和的倾向。', intd2: '基沃托斯三大学院之一，其学生会名为“万魔殿”。<br/>用两个词来概括这里的风气，就是“自由”和“混沌”。每天都<br/>有人惹是生非，让负责维持秩序的风纪委员会非常头疼。当<br/>然，拜这些随心所欲、行为出格的家伙们所赐，格黑娜的风纪委员也锻炼出了强大的实力。<br/>和圣三一的关系相当差，但最近似乎也有少许缓和的倾向。' },
  { chartalks: [], cbsrc: '/set/ssy/sscb.png', logosrc: '/set/ssy/ssy.png', nameen: 'TRINITY GENERAL ACADEMY', namecn: '圣三一', intd: '基沃托斯三大学院之一，其学生会名为“茶话会”。有自警团、正义实现部、<br/>救护骑士团等许多社团。<br/>总体来说重视纪律和文化，学生们大多诚实善良，给人不谙世事的大小姐印<br/>象，内部的治安状况有序而稳定。<br/>当然，圣三一并不是完美的。在风平浪静的学院氛围下，潜藏着不少问题。<br/>和格黑娜在传统上是敌对关系，不过近期好像提出了新的动议。', intd2: '基沃托斯三大学院之一，其学生会名为“茶话会”。有自警团、<br/>正义实现部、救护骑士团等许多社团。<br/>总体来说重视纪律和文化，学生们大多诚实善良，给人不谙世<br/>事的大小姐印象，内部的治安状况有序而稳定。<br/>当然，圣三一并不是完美的。在风平浪静的学院氛围下，潜藏<br/>着不少问题。<br/>和格黑娜在传统上是敌对关系，不过近期好像提出了新的动<br/>议。' },
  { chartalks: [], cbsrc: '/set/qx/qcb.png', logosrc: '/set/qx/qx.png', nameen: 'MILLENNIUM SCIENCE ACADEMY', namecn: '千禧年', intd: '基沃托斯三大学院之一，全名千禧年科技学院，其学生会名为“研讨会"。<br/>C&amp;C女仆部负责维持秩序，工程部也名声在外。正如名字所示，千禧年最关<br/>注技术，基沃托斯的前沿发明几乎都出自他们之手。<br/>学生以理科生居多，不乏醉心学术对现实生活反而不太关心的怪异天才。', intd2: '基沃托斯三大学院之一，全名千禧年科技学院，其学生会名为<br/>“研讨会"。C&amp;C女仆部负责维持秩序，工程部也名声在外。正<br/>如名字所示，千禧年最关注技术，基沃托斯的前沿发明几乎都<br/>出自他们之手。学生以理科生居多，不乏醉心学术对现实生活<br/>反而不太关心的怪异天才。' },
  { chartalks: [], cbsrc: '/set/bgyx/bcb.png', logosrc: '/set/bgyx/bgyx.png', nameen: 'ALLIED HYAKKIYAKO ACADEMY', namecn: '百鬼夜行', intd: '以和风为特色，旅游业发达，有庆典运营管理部、忍术研究部、修行部、阴阳<br/>部等风格独特的社团。<br/>百鬼夜行联合学院并没有正式的学生会，而是由众多彼此独立的社团、委员会<br/>联合组成的。美食、温泉和庆典，是百鬼夜行的三大关键词。不过也要提防戴<br/>着天狗面具的危险分子出现！', intd2: '以和风为特色，旅游业发达，有庆典运营管理部、忍术研究<br/>部、修行部、阴阳部等风格独特的社团。<br/>百鬼夜行联合学院并没有正式的学生会，而是由众多彼此独立<br/>的社团、委员会联合组成的。<br/>美食、温泉和庆典，是百鬼夜行的三大关键词。不过也要提防<br/>戴着天狗面具的危险分子出现！' },
  { chartalks: [], cbsrc: '/set/shj/scb.png', logosrc: '/set/shj/shj.png', nameen: 'SHANHAIJING ACADEMY', namecn: '山海经', intd: '以中华风为特色的学院，有梅花园、炼丹研究会等社团。与基沃托斯的其它<br/>学院相比，文化十分独特，并且有着悠久的历史传统。<br/>在山海经，美食店铺林立，旅游业也非常兴盛。只是内部的具体情况不太为<br/>外人所知……', intd2: '以中华风为特色的学院，有梅花园、炼丹研究会等社团。<br/>与基沃托斯的其它学院相比，文化十分独特，并且有着悠久的<br/>历史传统。<br/>在山海经，美食店铺林立，旅游业也非常兴盛。<br/>只是内部的具体情况不太为外人所知……' },
]);
const chartalks = ref([
  { name: '绫音', head: '/set/abds/abds3.png', content: '今天有风沙，出门注意安全哦！' },
  { name: '白子', head: '/set/abds/abds1.png', content: '了解了。' },  
  { name: '星野', head: '/set/abds/abds2.png', content: '真适合睡觉啊zzz' },  
  { name: '芹香', head: '/set/abds/abds5.png', content: '欢迎光临——你们怎么来了？' },
  { name: '野宫', head: '/set/abds/abds4.png', content: '我请大家吃拉面☆' },
  { name: '星野', head: '/set/abds/abds2.png', content: '芹香酱，要大碗的哦~' },
]);
const chartalks2 = ref([
  { name: '千夏', head: '/set/ghn/ghn3.png', content: '会长，万魔殿的人有请……' },
  { name: '伊织', head: '/set/ghn/ghn2.png', content: '会长，便利屋又惹事了……' },  
  { name: '日奈', head: '/set/ghn/ghn1.png', content: '知道了，亚子，列为我这周的第118和119件待办事项吧。' },  
  { name: '阿露', head: '/set/ghn/ghn4.png', content: '只要这本《打破规则的108条》大卖，我们便利屋就能声名远扬！' },
  { name: '佳代子', head: '/set/ghn/ghn5.png', content: '社长，到现在销售额还是零哦。' },
  { name: '睦月', head: '/set/ghn/ghn6.png', content: '嘻嘻，阿露酱没有想到，格黑娜的学生在打破规则方面不需要指导呢~' },
]);
const chartalks3 = ref([
  { name: '真白', head: '/set/ssy/ssy1.png', content: '日富美，偷走佩洛洛玩偶的犯人已经抓到了。' },
  { name: '日富美', head: '/set/ssy/ssy2.png', content: '太好了！谢谢各位！' },  
  { name: '真白', head: '/set/ssy/ssy1.png', content: '不幸的是，在部长正义的火力下，佩洛洛也牺牲了……' },  
  { name: '芹娜', head: '/set/ssy/ssy4.png', content: '花江酱，工作适应得怎么样？' },
  { name: '花江', head: '/set/ssy/ssy3.png', content: '非常顺利，前辈！病人们都很友好呢~' },
  { name: '花江', head: '/set/ssy/ssy3.png', content: '不过，为什么一提到打针，大家就都会从我身边溜走呢？~' },
]);
const chartalks4 = ref([
  { name: '桃', head: '/set/qx/qx1.png', content: '小绿快来！我想好新作Boss的设定啦！' },
  { name: '绿', head: '/set/qx/qx2.png', content: '唔……是什么样的呢？' },  
  { name: '桃', head: '/set/qx/qx1.png', content: '哼哼，就叫“大魔王优香”！' },  
  { name: '琴里', head: '/set/qx/qx3.png', content: '这就是……基沃托斯万千学生梦寐以求的……' },
  { name: '响', head: '/set/qx/qx5.png', content: '让人如听仙乐耳暂明的……' },
  { name: '歌原', head: '/set/qx/qx4.png', content: '带有蓝牙功能的手枪！' },
]);
const chartalks5 = ref([
  { name: '静子', head: '/set/bgyx/bgyx1.png', content: '这次的樱花节要办得不同凡响，菲娜有什么建议吗？' },
  { name: '菲娜', head: '/set/bgyx/bgyx2.png', content: '我有一堆想给大家展示的电影捏！就在百夜堂门口播放咩！' },  
  { name: '静子', head: '/set/bgyx/bgyx1.png', content: '已经猜到是什么样的电影了！拒绝！绝对不可以！！' },  
  { name: '枫', head: '/set/bgyx/bgyx4.png', content: '阿椿前辈好厉害！从中午到晚上一直坐在河畔一动不动地修行！' },
  { name: '枫', head: '/set/bgyx/bgyx4.png', content: '这等定力！不愧是完美的绝世佳人！' },
  { name: '三森', head: '/set/bgyx/bgyx3.png', content: '……阿椿又睡着了吧？' },
]);
const chartalks6 = ref([
  { name: '纱绫', head: '/set/shj/shj1.png', content: '鼠鼠……跑到哪儿了呢？' },
  { name: '瞬', head: '/set/shj/shj2.png', content: '呵呵，你要找的，是这孩子吗？' },  
  { name: '纱绫', head: '/set/shj/shj1.png', content: '鼠鼠！快谢谢这位大姐——啊不，是小姐！' },  
  { name: '瞬', head: '/set/shj/shj2.png', content: '心奈酱，我看到你了哦。' },
  { name: '心奈', head: '/set/shj/shj3.png', content: '姐姐……怎么会……我明明这么早就偷偷出门了……' },
  { name: '瞬', head: '/set/shj/shj2.png', content: '呵呵，因为是姐姐嘛～还有，就算躲起来跳\n“壮壮体操”，也不会长高的哦。' },
]); 
school.value[0].chartalks = chartalks.value;
school.value[1].chartalks = chartalks2.value; 
school.value[2].chartalks = chartalks3.value; 
school.value[3].chartalks = chartalks4.value; 
school.value[4].chartalks = chartalks5.value; 
school.value[5].chartalks = chartalks6.value; 
const visible = ref([false, false, false]);
const visible2 = ref([false, false, false]); // 控制可见性
let timers = []; // 存储定时器
onMounted(() => {
    // 依次显示每个 charbox
    visible.value.forEach((_, index) => {
        const timer = setTimeout(() => {
            visible.value[index] = true; // 显示
            if (index === visible.value.length - 1) {
                // 最后一个元素显示后2秒后全部消失
                setTimeout(() => {
                    visible.value.fill(false); // 隐藏
                }, 2000);
            }
        }, (index + 1) * 1500); // 每个之间间隔 1.5s

        timers.push(timer); // 保存定时器
    });
    visible2.value.forEach((_, index) => {
        const timer2 = setTimeout(() => {
            visible2.value[index] = true; // 显示
        }, (index + 5) * 1500); // 每个之间间隔 1.5s

        timers.push(timer2); // 保存定时器
    });
});
onBeforeUnmount(() => {
    // 清除所有定时器
    timers.forEach(timer => clearTimeout(timer));
});

const talkon = () => {
  timers.forEach(timer => clearTimeout(timer));
  visible.value.fill(false); 
  visible2.value.fill(false);
  visible.value.forEach((_, index) => {
      const timer = setTimeout(() => {
          visible.value[index] = true;
          if (index === visible.value.length - 1) {
              setTimeout(() => {
                  visible.value.fill(false);
              }, 2000);
          }
      }, (index + 1) * 1500);
      timers.push(timer);
  });
  visible2.value.forEach((_, index) => {
      const timer2 = setTimeout(() => {
          visible2.value[index] = true;
      }, (index + 5) * 1500);
      timers.push(timer2);
  });
};

let startX = 0;
const startTouch = (event) => {
  startX = event.touches[0].clientX;
};
const moveTouch = (event) => {
  if (!startX) return;
  const endX = event.touches[0].clientX;
  const diffX = startX - endX;
  if (diffX > 50) {
    if(selectedIndex.value < 5) {
      next();
      fadeOut();
      talkon();
    }
    startX = 0;
  } else if (diffX < -50) {
    if(selectedIndex.value > 0) {
      prev();
      fadeOut();
      talkon();
    }
    startX = 0;
  }
};
const endTouch = () => {
};

const flag = ref(false);
let downX = 0;
let scrollLeft = 0;
const startTouch2 = (event) => {
    flag.value = true;
    downX = event.touches[0].clientX;
    const navContainer = document.getElementById('navContainer');
    scrollLeft = navContainer.scrollLeft;
};
const moveTouch2 = (event) => {
  if (flag.value) {
    const moveX = event.touches[0].clientX;
    const scrollX = moveX - downX;
    const navContainer = document.getElementById('navContainer');
    navContainer.scrollLeft = scrollLeft - scrollX;
  }
};
const endTouch2 = () => {
  
};

const handleClick = (index) => {
  if(flag.value) {
    selectNav(index);
    fadeOut();
    talkon();
    flag.value = false;
  } else {
    selectNav(index);
    fadeOut();
    talkon();
    flag.value = false;
  }
};


const { hoverArea, followImage, followImage2 } = useHoverFollower('[class*="hoverarea"]', 'followImage', 'followImage2');
</script>