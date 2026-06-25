
import AOS from 'aos'
import 'aos/dist/aos.css'

// 初始化 AOS
AOS.init({
  duration: 800,      // 动画时长
  once: true,         // 是否只触发一次
  offset: 120,        // 提前触发距离
  easing: 'ease-out'
})