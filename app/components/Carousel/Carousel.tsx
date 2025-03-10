'use client'

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';

const Carousel: React.FC = () => {
    return(
        <div>
            <Splide className="px-[20%] items-center justify-center"
            aria-label="My Favorite Images"
            options={{ type: 'loop', perPage: 5, autoplay: true, arrows: false, pagination: false, gap: '1rem' }}
            >
            {['almacen', 'ceimcol', 'centroideas', 'televisores', 'emcali', 'motoamiga', 'motored', 'tkdmotos', 'panamericana'].map((image, index) => (
                <SplideSlide key={index} className="flex justify-center items-center">
                    <Image src={`/images/carousel/${image}.webp`} width={180} height={100} alt={`image aliados ${image}`} className="object-contain" />
                </SplideSlide>
            ))}
            </Splide>
        </div>
    );
};

export default Carousel;