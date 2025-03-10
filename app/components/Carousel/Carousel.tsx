'use client'

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';

const Carousel = () => {
    return(
        <div>
            <Splide className="px-[20%] items-center justify-between"
                aria-label="My Favorite Images"
                options={{ type: 'loop', perPage: 5, autoplay: true, arrows: false }}
            >
                <SplideSlide>
                    <Image src={'/images/carousel/aliado.png'}  width={100} height={50} alt='image aliados 1'/>
                </SplideSlide>
                <SplideSlide>
                <Image src={'/images/carousel/aliado.png'}  width={100} height={50} alt='image aliados 1'/>
                </SplideSlide>
                <SplideSlide>
                <Image src={'/images/carousel/aliado.png'}  width={100} height={50} alt='image aliados 1'/>
                </SplideSlide>
                <SplideSlide>
                <Image src={'/images/carousel/aliado.png'}  width={100} height={50} alt='image aliados 1'/>
                </SplideSlide>
                <SplideSlide>
                <Image src={'/images/carousel/aliado.png'}  width={100} height={50} alt='image aliados 1'/>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Carousel;