import { Swiper, SwiperSlide } from "swiper/react";
import Card from '../Card/Card';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import data from "../../data/data.json"

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react'

const Slider = () => {
    const projects = data
    console.log(projects)
    const [modalOpen, setModalOpen] = useState<Boolean>(false)
    function handleClick(): void {
        if (modalOpen === false) console.log(setModalOpen(true))
        else setModalOpen(false)
    }



    return (
        <section className="swipper_contenant" id="projects" >

            <h3 className="slider_title"> Mes projects </h3>
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
                initialSlide={0}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container">


                {projects.map((project) => {
                    return (
                        <SwiperSlide key={project.name} className="card_content" >
                            <Card key={project.name} onClickProps={handleClick} titre={project.name} description={project.description} id={project.id} />
                        </SwiperSlide>
                    )
                })}


            </Swiper>
        </section>


    );
}
export default Slider;