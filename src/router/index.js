import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import SetView from '../views/SetView.vue'
import SetViewChild from '../views/SetViewChild.vue'
import CharacterView from '../views/CharacterView.vue'
import PhotoView from '../views/PhotoView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/set',
      name: 'set',
      component: SetView
    },
    {
      path: '/setchild',
      name: 'setchild',
      component: SetViewChild
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/photo',
      name: 'photo',
      component: PhotoView
    }
  ]
})

let isInitialLoad = true;
router.beforeEach((to, from, next) => {  
  if (isInitialLoad) {  
    // 浏览器刷新，初始加载，重定向至/home  
    if (to.path !== '/home') {
      next({ path: '/home' });
    } else {
      // 如果是初始加载，则不延迟并标记为已加载  
      isInitialLoad = false;
      next();
    } 
  } else {  
    // 否则，延迟 1 秒后切换路由  
    setTimeout(() => {  
      next();  
    }, 1000);  
  }  
}); 
export default router
