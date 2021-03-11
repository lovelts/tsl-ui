import { defineComponent, ref, inject } from 'vue'
import './swiper.less'

const SwiperSlide = defineComponent({
    name: 'SwiperSlide',
    setup(props, { slots }) {
        let translateX = ref(inject('translateX'))
        inject('pushArr')()
        return () => (
            <div className="ts-swiper-slide" style={{ transform: `translateX(${translateX.value}px)` }}>{slots.default()}</div>
        )

    }
})

export default SwiperSlide