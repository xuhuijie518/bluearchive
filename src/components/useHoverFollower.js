import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue';  
import { useRouter } from 'vue-router';
export function useHoverFollower(selector, followImageId, followImage2Id) {  
  const hoverArea = ref([]);  
  const followImage = ref(null);  
  const followImage2 = ref(null);  
  const router = useRouter();
  onMounted(() => {  
    // 尝试获取元素，并处理可能的错误  
    try {  
      hoverArea.value = document.querySelectorAll(selector);  
      followImage.value = document.getElementById(followImageId);  
      followImage2.value = document.getElementById(followImage2Id);  
  
      if (followImage2.value) {  
        // 为每个hover区域添加事件监听器  
        const eventListeners = Array.from(hoverArea.value).map(area => {  
          area.addEventListener('mousemove', (event) => {  
            if (followImage2.value) {  
              const viewportWidth = window.innerWidth;
              const x = (event.clientX / viewportWidth) * 100;
              const y = (event.clientY / viewportWidth) * 100;
              followImage2.value.style.transform = `translate(${x - 0.75}vw, ${y - 0.7}vw)`;
              followImage2.value.style.opacity = 1;
            }  
          });  
  
          // 添加mouseleave事件监听器  
          area.addEventListener('mouseleave', () => {  
            if (followImage2.value) {  
              followImage2.value.style.opacity = 0;  
            }  
          });
          
          router.beforeEach((to, from, next) => {
            if (followImage2.value) {
              followImage2.value.style.opacity = 0;
            }
            next();
          });
  
          // 返回一个对象以便稍后移除监听器  
          return { area, mousemove: area.onmousemove, mouseleave: area.onmouseleave };  
        });  
  
        // 在组件卸载时移除事件监听器  
        onUnmounted(() => {  
          eventListeners.forEach(({ area, mousemove, mouseleave }) => {  
            area.removeEventListener('mousemove', mousemove);  
            area.removeEventListener('mouseleave', mouseleave);  
          });  
        });  
      }  
    } catch (error) {  
      console.error('Error setting up hover follower:', error);  
    }  
  });  
  
  return { hoverArea, followImage, followImage2 };  
}