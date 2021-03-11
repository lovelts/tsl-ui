import { defineComponent, onMounted, ref } from 'vue'
import './swiper.less'
const Demo = defineComponent({
  name: 'demo',
  setup() {
    let swiperRef = ref()
    let num = ref(3)
    console.log(num.value);
    let arr = [1, 2, 3]
    let translateX = ref(0)
    let activeKey = ref(1)
    let temp = ref(0)
    onMounted(() => {
      temp.value -= swiperRef.value.offsetWidth
      console.log(swiperRef.value.offsetWidth, temp.value);
    })
    const getCurrent = (e) => {
      console.log(e);
      activeKey.value = e
      translateX.value = (e - 1) * temp.value
      console.log(translateX.value);
    }
    return () => (
      <>
        <div className="ts-swiper" ref={swiperRef}>
          <div className="ts-swiper-slide" style={{ transform: `translateX(${translateX.value}px)` }}>1</div>
          <div className="ts-swiper-slide" style={{ transform: `translateX(${translateX.value}px)` }}>2</div>
          <div className="ts-swiper-slide" style={{ transform: `translateX(${translateX.value}px)` }}>3</div>
          <ul>
            {
              arr.map((item) => {
                return (
                  <li
                    className={activeKey.value === item ? 'active' : ''}
                    key={item}
                    onClick={() => getCurrent(item)}></li>
                )
              })
            }
            {/* <li className={'active'} key={1} onClick={() => getCurrent(1)}></li>
            <li key={2} onClick={() => getCurrent(2)}></li>
            <li key={3} onClick={() => getCurrent(3)}></li> */}
          </ul>
        </div>
      </>
    )
  }


})

export default Demo
