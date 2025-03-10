'use client'

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Carousel = () => {
    return(
        <div>
            <Splide className="px-[20%] items-center justify-between"
                aria-label="My Favorite Images"
                options={{ type: 'loop', perPage: 5, autoplay: true, arrows: false }}
            >
                <SplideSlide>
                    <img src="images/carousel/aliado.png" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="images/carousel/aliado.png" alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="images/carousel/aliado.png" alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="images/carousel/aliado.png" alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="images/carousel/aliado.png" alt="Image 2"/>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Carousel;