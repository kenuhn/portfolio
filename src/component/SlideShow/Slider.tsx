import { Swiper, SwiperSlide } from "swiper/react";
import Card from '../Card/Card';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Modal_project from "../Modal_project/Modal_project";
import data from "../../data/data.json"

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react'

const Slider = () => {
    const project = data.projects
    const [modalOpen, setModalOpen] = useState<Boolean>(false)
    function handleClick ():void  {
        if (modalOpen === false) console.log(setModalOpen(true))
         else setModalOpen(false)
    }



    return (
        <section className="swipper_contenant">

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

     {/*            <SwiperSlide className="card_content">
                    <Card onClickProps={handleClick} titre="Réseau Social " description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "} />
                </SwiperSlide>
                <SwiperSlide className="card_content" >
                    <Card onClickProps={handleClick} titre="Data visualisation D3" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "} />
                </SwiperSlide>
                <SwiperSlide className="card_content" >
                    <Card onClickProps={handleClick} titre="Backend avce mongoDB" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "} />
                </SwiperSlide >
                <SwiperSlide className="card_content" >
                    <Card onClickProps={handleClick} titre="Interface de recherche en JS" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "} />
                </SwiperSlide>
                <SwiperSlide className="card_content" >
                    <Card onClickProps={handleClick} titre="Gestion test unitaire" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "} />
                </SwiperSlide>
 */}

{ project.map((item) => {
        return (
            <SwiperSlide key={item.name} className="card_content">
                <Card key={item.name} onClickProps={handleClick} titre={item.name} description={item.description} />
            </SwiperSlide>
        )
       
              
       

    
   } )}


            </Swiper>
            <Modal_project onClickProps={handleClick} styleModal={modalOpen} />
        </section>


    );
}
export default Slider;