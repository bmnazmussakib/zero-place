"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import SectionContainer from '../shared/SectionContainer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const serviceImages = [
    "/images/services/service-card-2.jpg",
    "/images/services/service-card-5.jpg",
    "/images/services/service-card-6.jpg",
    "/images/services/service-card-7.jpg",
    "/images/services/service-card-12.jpg",
    "/images/services/service-card-2.jpg",
    "/images/services/service-card-5.jpg",
    "/images/services/service-card-6.jpg",
];

export function ServicesPreview() {
    return (
        <section className="py-20 overflow-hidden">
            <SectionContainer className="py-0 mb-12">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our wide range of professional services tailored to help your brand grow and succeed in the digital landscape.
                    </p>
                </div>
            </SectionContainer>

            <div className="services-marquee-wrapper relative w-full">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                <Swiper
                    modules={[Autoplay, FreeMode]}
                    loop={true}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    speed={8000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    allowTouchMove={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 2.2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3.2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3.2,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 4.2,
                            spaceBetween: 20,
                        },
                        1920: {
                            slidesPerView: 4.2,
                            spaceBetween: 20,
                        },
                    }}
                    className="services-swiper marquee-linear px-4"
                >
                    {serviceImages.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative aspect-3/4 overflow-hidden rounded-2xl bg-muted transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                <img
                                    src={src}
                                    alt={`Service ${index + 1}`}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                                    <span className="text-primary-soft text-sm font-semibold mb-2 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                        Professional
                                    </span>
                                    <p className="text-white font-heading font-bold text-xl leading-tight">
                                        Creative {index % 2 === 0 ? "Design" : "Strategy"}
                                    </p>

                                    <div className="mt-4 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}


