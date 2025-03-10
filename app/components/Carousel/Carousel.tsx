'use client'

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';

const Carousel: React.FC = () => {
    return(
        <div>
            <Splide className="px-[20%] items-center justify-between"
                aria-label="My Favorite Images"
                options={{ type: 'loop', perPage: 5, autoplay: true, arrows: false }}
            >
                <SplideSlide >
                    <Image src={'/images/carousel/almacen.webp'}  width={100} height={50} alt='image aliados almacen'/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={'/images/carousel/ceimcol.webp'}  width={100} height={50} alt='image aliados ceimcol'/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={'/images/carousel/centroideas.webp'}  width={100} height={50} alt='image aliados centroideas'/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={'/images/carousel/televisores.webp'}  width={100} height={50} alt='image aliados televisores'/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={'/images/carousel/emcali.webp'}  width={100} height={50} alt='image aliados emcali'/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={'/images/carousel/motoamiga.webp'}  width={100} height={50} alt='image aliados motoamiga'/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={'/images/carousel/motored.webp'}  width={100} height={50} alt='image aliados motored'/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={'/images/carousel/tkdmotos.webp'}  width={100} height={50} alt='image aliados tkdmotos'/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={'/images/carousel/panamericana.webp'}  width={100} height={50} alt='image aliados panamericana'/>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Carousel;