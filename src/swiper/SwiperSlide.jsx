import { defineComponent, inject } from 'vue'
import './swiper.less'

const SwiperSlide = defineComponent({
    name: 'SwiperSlide',
    setup(props, { slots }) {
        inject('pushArr')()
        return () => (
            <div className="ts-swiper-slide" >{slots.default()}</div>
        )

    }
})

export default SwiperSlide