'use client'

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';

const Carousel2: React.FC = () => {
    return(
        <div>
            <Splide className="sm:px-[10%] mt-[50px] mb-[30px] sm:mb-0 sm:mt-[60px] items-center justify-center "
            aria-label="My Favorite Images"
            options={{
                type: 'loop', perPage: 3, autoplay: true, arrows: true, pagination: false, gap: '5rem', speed: 1000, interval: 9000,
                breakpoints: {
                    1024: {
                        perPage: 2,
                        gap: '2rem',
                    },
                    640: {
                        perPage: 1,
                        arrows: false,
                        gap: '1rem',
                    },
                },
            }}
            >
                <SplideSlide className="flex justify-center items-center">
                    {/* Materiales de contruccion */}
                    <div className="text-center">
                        {/* Image */}
                        <div>
                            <Image className="rounded-3xl" src={'/images/seccion/construccion.jpg'} alt="Linea de negocio 1" layout="responsive" width={300} height={300} />
                        </div>
                        {/* Titulo */}
                        <div className="mt-[30px]">
                            <h3 className="text-celeste font-bold text-[26px] leading-none">Materiales de construcción</h3>
                        </div>
                        {/* informacion */}
                        <div className="px-6 mt-[15px]">
                            <a href="https://market.miplante.com/category/713" target="_blank" className="bg-celeste px-2 block rounded-xl text-nowrap">Más información</a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide className="flex justify-center items-center">
                    {/* Educacion */}
                    <div className="text-center">
                        {/* Image */}
                        <div>
                            <Image className="rounded-3xl" src={'/images/seccion/educacion.jpg'} alt="Linea de negocio 1" layout="responsive" width={300} height={300} />
                        </div>

                        {/* Titulo */}
                        <div className="mt-[30px]">
                            <h3 className="text-celeste font-bold text-[26px] ">Educación</h3>
                        </div>

                        {/* informacion */}
                        <div className="px-6 mt-[15px]">
                            <a href="https://market.miplante.com/category/716" target="_blank" className="bg-celeste px-2 block rounded-xl text-nowrap">Más información</a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    {/* Electrodomesticos */}
                    <div className="text-center">
                        {/* Image */}
                        <div>
                            <Image className="rounded-3xl" src={'/images/seccion/electrodomesticos.jpg'} alt="Linea de negocio 3" layout="responsive" width={300} height={300} />
                        </div>
                        {/* Titulo */}
                        <div className="mt-[30px]">
                            <h3 className="text-celeste font-bold text-[26px] ">Electrodomésticos</h3>
                        </div>
                        {/* informacion */}
                        <div className="px-6 mt-[15px]">
                            <a href="https://market.miplante.com/category/712" target="_blank" className="bg-celeste px-2 block rounded-xl text-nowrap">Más información</a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    {/* Hogar */}
                    <div className="text-center">
                        {/* Image */}
                        <div>
                            <Image className="rounded-3xl" src={'/images/seccion/hogar.jpg'} alt="Linea de negocio 3" layout="responsive" width={300} height={300} />
                        </div>
                        {/* Titulo */}
                        <div className="mt-[30px]">
                            <h3 className="text-celeste font-bold text-[26px] ">Hogar</h3>
                        </div>
                        {/* informacion */}
                        <div className="px-6 mt-[15px]">
                            <a href="https://market.miplante.com/category/25" target="_blank" className="bg-celeste px-2 block rounded-xl text-nowrap">Más información</a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    {/* Movilidad */}
                    <div className="text-center">
                        {/* Image */}
                        <div>
                            <Image className="rounded-3xl" src={'/images/seccion/movilidad.jpg'} alt="Linea de negocio 3" layout="responsive" width={300} height={300} />
                        </div>
                        {/* Titulo */}
                        <div className="mt-[30px]">
                            <h3 className="text-celeste font-bold text-[26px] ">Movilidad</h3>
                        </div>
                        {/* informacion */}
                        <div className="px-6 mt-[15px]">
                            <a href="https://market.miplante.com/category/711" target="_blank" className="bg-celeste px-2 block rounded-xl text-nowrap">Más información</a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    {/* Salud y Belleza */}
                    <div className="text-center">
                        {/* Image */}
                        <div>
                            <Image className="rounded-3xl" src={'/images/seccion/salud.jpg'} alt="Linea de negocio 3" layout="responsive" width={300} height={300} />
                        </div>
                        {/* Titulo */}
                        <div className="mt-[30px]">
                            <h3 className="text-celeste font-bold text-[26px] ">Salud y Belleza</h3>
                        </div>
                        {/* informacion */}
                        <div className="px-6 mt-[15px]">
                            <a href="https://market.miplante.com/category/717" target="_blank" className="bg-celeste px-2 block rounded-xl text-nowrap">Más información</a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    {/* Seguros */}
                    <div className="text-center">
                        {/* Image */}
                        <div>
                            <Image className="rounded-3xl" src={'/images/seccion/seguros.jpg'} alt="Linea de negocio 3" layout="responsive" width={300} height={300} />
                        </div>
                        {/* Titulo */}
                        <div className="mt-[30px]">
                            <h3 className="text-celeste font-bold text-[26px] ">Seguros</h3>
                        </div>
                        {/* informacion */}
                        <div className="px-6 mt-[15px]">
                            <a href="https://market.miplante.com/category/715" target="_blank" className="bg-celeste px-2 block rounded-xl text-nowrap">Más información</a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    {/* Tecnologia */}
                    <div className="text-center">
                        {/* Image */}
                        <div>
                            <Image className="rounded-3xl" src={'/images/seccion/tecnologia.jpg'} alt="Linea de negocio 3" layout="responsive" width={300} height={300} />
                        </div>
                        {/* Titulo */}
                        <div className="mt-[30px]">
                            <h3 className="text-celeste font-bold text-[26px] ">Tecnología</h3>
                        </div>
                        {/* informacion */}
                        <div className="px-6 mt-[15px]">
                            <a href="https://market.miplante.com/category/618" target="_blank" className="bg-celeste px-2 block rounded-xl text-nowrap">Más información</a>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    {/* Viajes */}
                    <div className="text-center">
                        {/* Image */}
                        <div>
                            <Image className="rounded-3xl" src={'/images/seccion/viajes.jpg'} alt="Linea de negocio 3" layout="responsive" width={300} height={300} />
                        </div>
                        {/* Titulo */}
                        <div className="mt-[30px]">
                            <h3 className="text-celeste font-bold text-[26px] ">Viajes</h3>
                        </div>
                        {/* informacion */}
                        <div className="px-6 mt-[15px]">
                            <a href="https://market.miplante.com/category/714" target="_blank" className="bg-celeste px-2 block rounded-xl text-nowrap">Más información</a>
                        </div>
                    </div>
                </SplideSlide>
            
            </Splide>
        </div>
    );
};

export default Carousel2;