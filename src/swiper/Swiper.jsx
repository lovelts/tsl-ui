import { defineComponent, onMounted, ref, provide } from 'vue'
import './swiper.less'
const Swiper = defineComponent({
  name: 'Swiper',

  // eslint-disable-next-line no-unused-vars
  setup(props, { slots }) {
    let swiperRef = ref()
    let arr = ref([])
    let translateX = ref(0)
    let activeKey = ref(0)
    let autoplayTime = ref(3000)
    let temp = ref(0)
    const pushArr = () => {
      arr.value = [...arr.value, '']
    }
    provide('pushArr', pushArr)
    // eslint-disable-next-line no-unused-vars
    let timeInterval = null
    // eslint-disable-next-line no-unused-vars
    let intervalCount = 0

    provide('translateX', translateX.value)
    onMounted(() => {
      temp.value -= swiperRef.value.offsetWidth
      autoplay()
    })
    const getCurrent = (e) => {
      clearInterval(timeInterval)
      intervalCount = e
      activeKey.value = e
      translateX.value = e * temp.value
      autoplay()
    }
    const autoplay = () => {
      timeInterval = setInterval(() => {
        intervalCount++
        intervalCount %= arr.value.length
        activeKey.value = intervalCount
        translateX.value = temp.value * intervalCount
      }, autoplayTime.value);
    }
    return () => (
      <>
        <div className="ts-swiper" ref={swiperRef}>
          {slots.default()}
          {/* <div className="ts-swiper-slide" style={{ transform: `translateX(${translateX.value}px)` }}>1</div>
          <div className="ts-swiper-slide" style={{ transform: `translateX(${translateX.value}px)` }}>2</div>
          <div className="ts-swiper-slide" style={{ transform: `translateX(${translateX.value}px)` }}>3</div> */}
          <ul>
            {
              arr.value.map((item, index) => {
                return (
                  <li
                    className={activeKey.value === index ? 'active' : ''}
                    key={index}
                    onClick={() => getCurrent(index)}></li>
                )
              })
            }

          </ul>
        </div>
      </>
    )
  }


})

export default Swiper
