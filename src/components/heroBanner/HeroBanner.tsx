import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './heroBanner.css'
import { Pagination, Autoplay } from 'swiper/modules';
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import Button from "@mui/material/Button";

const HeroBanner = () => {
    return (
        <div className='hero-banner'>
            <div className='hero-banner-container'>
                <div className='hero-banner-container-text'>
                    <div><p className='career-portal'>Career Portal</p></div>
                    <div><p className='hero-banner-container-text-header'>Join us at TechM</p></div>
                    <div><p className='career-text'>Join our team to diverse talent and grow together</p></div>
                </div>
                <div className='hero-banner-container-caraousel'>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination,Autoplay]}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                    >
                        <SwiperSlide>
                            <div><img src={image2} /></div>
                            <div className='image-text-container'>
                                <div><p className='image-text1'>Come help us in connecting the dots as
                                we redefine the future and scale at speed</p></div>
                                {/* <div><p className='image-text2'>Gain our heritage. Leave your legacy.</p></div> */}
                                <div className='know-more-button'><Button variant="outlined">KNOW MORE</Button></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div><img src={image3} /></div>
                            <div className='image-text-container'>
                                <div><p className='image-text1'>Give yourself wings</p></div>
                                <div><p className='image-text2'>Experience the freedom to explore.</p></div>
                                <div className='know-more-button'><Button variant="outlined">KNOW MORE</Button></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div><img src={image1} /></div>
                            <div className='image-text-container'>
                                <div><p className='image-text1'>Do good while you do well</p></div>
                                <div><p className='image-text2'>Gain our heritage. Leave your legacy.</p></div>
                                <div className='know-more-button'><Button variant="outlined">KNOW MORE</Button></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div><img src={image4} /></div>
                            <div className='image-text-container'>
                                <div><p className='image-text1'>The different. The difference.</p></div>
                                <div><p className='image-text2'>We love both.</p></div>
                                <div className='know-more-button'><Button variant="outlined">KNOW MORE</Button></div>
                            </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner