import { Swiper, SwiperSlide } from "swiper/react";
// import Card from '../Card/Card'; 
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <section className="swipper_contenant">
            <Swiper 
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                     /* loop={true}  */
                    slidesPerView={'auto'}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation
                    initialSlide={2} 
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container">
            
                    <SwiperSlide className="card_content">
                       SALUT
                    </SwiperSlide>
                    <SwiperSlide className="card_content" >
                       SALUT
                    </SwiperSlide>
                    <SwiperSlide className="card_content" >
                       SALUT
                    </SwiperSlide >
                    <SwiperSlide className="card_content" >
                       SALUT
                    </SwiperSlide>
                    <SwiperSlide className="card_content" > 
                       SALUT
                    </SwiperSlide>


        {/* <SwiperSlide className="card_content"><Card /></SwiperSlide>
        <SwiperSlide className="card_content" ><Card /></SwiperSlide>
        <SwiperSlide className="card_content"><Card /></SwiperSlide>
        <SwiperSlide className="card_content"><Card /></SwiperSlide> */}
            
        </Swiper>
        </section>
      

    );
}
export default Slider;