'use client'
import React from "react";
import Image from "next/image";
import Carousel from "./components/Carousel/Carousel";
import Carousel2 from "./components/Carousel2/Carousel2";

export default function Page() {
    return (
        <>
            {/* Inicio */}
            <div className="bg-white pt-[60px] sm:pt-initPage overflow-visible bg-airplane h-[70.4vw] w-full">
                <div className="relative flex flex-col h-full justify-between">
                    {/* Titulo */}
                    <div className="w-full px-iniSectionX">
                        <h2 className="leading-none text-[14vw] text-wrap text-center font-titulo mb-[-20px] text-white">Bienvenidos</h2>
                    </div>

                    {/* Persona */}
                    <div className="absolute right-[9.4vw] select-none -top-[7.4vw] w-[80%] z-20">
                        <Image src={'/images/highlight.png'} layout="responsive" width={500} height={500} alt='Cliente satisfecha con Mi Plante' />
                    </div>


                    {/* Cupos */}
                    <div className="hidden sm:block px-iniSectionX pb-[100px] z-30 relative justify-self-end">
                        {/* Titulo */}
                        <div></div>
                        <div className="inline-block">
                            <h2 className="text-semititulo font-titulo bg-verde px-7 rounded-[60px]">NUESTROS PLANTES</h2>
                        </div>

                        {/* Detalles */}
                        <div className="mt-[12px] w-[50%] bg-gray-900 bg-opacity-20 backdrop-blur-sm rounded p-2">
                            <ul className="text-[3.8vw] sm:text-semisubtitulo">
                                <li><span>⦁ Plante Básico: encuéntralo en tu factura o consultado<a className=" text-blue-500"> AQUÍ.</a></span></li>
                                <li><span>⦁	Plante plus: aumenta tu cupo hasta $9.964.500</span></li>
                                <li><span>⦁	Plante personalizado: Cupo ilimitado, asignado según tu capacidad de endeudamiento. </span></li>
                                <li><span>⦁	Plante de temporada: 3 veces en el año Mi Plante te aumenta tu cupo</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white flex flex-col-reverse sm:block">
                {/* Contacto */}
                <div className="w-full bg-white">
                    <div className="px-iniSectionX py-initSectionY">
                        {/* Titulo */}
                        <div>
                            <h2 className="text-center sm:text-left font-titulo text-celeste text-[8vw] sm:text-titulo">¡TE CONTACTAMOS!</h2>
                        </div>

                        {/* Form */}
                        <div className="mt-[20px]">
                            <form className="w-full sm:w-2/3 flex-col" action="">
                                {/* Nombre */}
                                <input   className="w-full sm:w-[63%] px-3 py-1 mb-5 text-lg rounded-xl text-black border-2 border-gray-300"  type="text"  placeholder="Nombre completo" />
                                {/* Correo */}
                                <input className="w-full sm:w-[63%] px-3 py-1 mb-5 text-lg rounded-xl text-black border-2 border-gray-300" type="text" placeholder="Correo electrónico"/>

                                {/* Contrato */}
                                <input className="w-full sm:w-[63%] px-3 py-1 mb-5 text-lg rounded-xl text-black border-2 border-gray-300" type="number" placeholder="Contrato"/>

                                {/* Telefono */}
                                <div className="mb-5 sm:flex">
                                    {/* Telefono */}
                                    <input className="w-full sm:w-[63%] mr-5 px-3 py-1 text-lg rounded-xl text-black border-2 border-gray-300" type="text" placeholder="Teléfono / celular"/>

                                    {/* Linea */}
                                    <select className="mt-5 sm:mt-0 w-full sm:w-[63%] px-3 py-2 sm:py-1 text-lg rounded-xl text-white bg-[#90d4f6]">
                                        <option defaultValue="">Selecciona una línea de interés</option>
                                        <option value="1">Movilidad</option>
                                        <option value="2">Electrodomésticos</option>
                                        <option value="3">Material de construcción</option>
                                        <option value="4">Viajes</option>
                                        <option value="5">Seguros</option>
                                        <option value="6">Educación</option>
                                        <option value="7">Salud y Belleza</option>
                                        <option value="8">Tecnología</option>
                                        <option value="9">Hogar</option>
                                    </select>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                    {/* Terminos */}
                                    <div className="w-full sm:w-[63%]">
                                        <label className="flex items-center cursor-pointer">
                                            <input className="mr-2 bg-white rounded-lg p-2 w-8 h-8 border-2 border-gray-300" type="checkbox" />

                                            <div className="text-gray-400 text-sm">
                                                <span>Acepto los terminos y condiciones generales. </span>
                                                <span>Autorizo el tratamiento de mis datos personales para el servicio de Mi Plante</span>
                                            </div>
                                        </label>
                                    </div>

                                    {/* Enviar */}
                                    <div>
                                        <button type="button" className="mt-5 sm:mt-0 shadow-md shadow-gray-400 bg-verde font-titulo text-[4.4vw] sm:text-subtitulo text-white px-6 py-0 rounded-l-md rounded-tr-md rounded-br-[30px] hover:shadow-gray-500 transition-all duration-200">
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    +
                {/* Registro */}
                <div className="w-full bg-white sm:bg-celesteClaro py-globalY px-iniSectionX relative flex flex-col-reverse sm:block">
                    <div className="w-full sm:w-[60%] 4xl:w-[53%]">
                        <h4 className="text-center sm:text-left text-celeste font-bold text-[23px] sm:text-[28px] leading-8">
                            *Tambien puedes registrarte con la ayuda de un asesor en nuestros aliados autorizados.
                            <span className="text-gray-600 font-light text-[20px] sm:text-[22px]"> <a href="https://market.miplante.com/#brands-revolu-section" className="border-b border-verde">Más información</a>.</span>
                        </h4>
                    </div>

                    {/* Listado */}
                    <div className="relative -top-[50px] sm:absolute flex items-end select-none sm:right-[3vw] 4xl:right-[10vw] bottom-[-6.1vw] z-10">
                        <div className="hidden sm:block translate-y-[-10vw] w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-r-[60px] border-r-verde"></div>

                        <div className="bg-verde pb-[10vw] sm:pb-[8.4vw] px-7 rounded-t-[5vw] pt-[100px] sm:pt-[130px]">

                            <div className="text-center">
                                <span className="font-titulo text-[50px] sm:text-[60px] z-20 leading-10"> Aqui todo <br/> es Simple</span>
                            </div>

                            {/* Items */}
                            <div className="mt-[90px]">
                                {/* Item */}
                                <div className="mb-[40px] sm:mb-[70px] flex">
                                    {/* Numero */}
                                    <div className="relative ml-4 w-[55px] sm:w-[70px]">
                                        <span className="inline-block w-5 sm:w-7 h-5 sm:h-7 bg-celeste rounded-full absolute right-[8px] top-[5px] z-10"></span>
                                        <span className="font-titulo text-7xl sm:text-8xl text-verde text-outline mr-1 relative z-20">1<span className="font-titulo ml-[2px]">.</span></span>
                                    </div>

                                    <div className="border-l pl-6 ml-6">
                                        {/* Titulo */}
                                        <div>
                                            <h5 className="text-[20px] sm:text-[28px] text-white font-bold leading-7">Documentos<br/>necesarios:</h5>
                                        </div>

                                        {/* Listado */}
                                        <div className="mt-[10px]">
                                            <ul className="text-white">
                                                <li className="sm:text-xl flex items-center">
                                                    <span className="w-1 h-1 bg-white mr-2 rounded-full block"></span>
                                                    <span>Cédula original.</span>
                                                </li>
                                                <li className="sm:text-xl flex items-center">
                                                    <span className="w-1 h-1 bg-white mr-2 rounded-full block"></span>
                                                    <span>Dos facturas de servicios<br/>de EMCALI.</span>
                                                </li>
                                                <li className="sm:text-xl flex items-center">
                                                    <span className="w-1 h-1 bg-white mr-2 rounded-full block"></span>
                                                    <span>Correo electrónico</span>
                                                </li>
                                                <li className="sm:text-xl flex items-center">
                                                    <span className="w-1 h-1 bg-white mr-2 rounded-full block"></span>
                                                    <span>Número de celular.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Item */}
                                <div className="mb-[40px] sm:mb-[70px] flex">
                                    {/* Numero */}
                                    <div className="relative ml-4 w-[55px] sm:w-[70px]">
                                        <span className="inline-block w-5 sm:w-7 h-5 sm:h-7 bg-celeste rounded-full absolute right-[6px] top-[5px] z-10"></span>
                                        <span className="font-titulo text-7xl sm:text-8xl text-verde text-outline mr-1 relative z-20">2<span className="font-titulo ml-[2px]">.</span></span>
                                    </div>

                                    <div className="border-l pl-6 ml-6">
                                        {/* Titulo */}
                                        <div>
                                            <h5 className="text-[20px] sm:text-[28px] text-white font-bold leading-7">Regístrate<br/>y selecciona<br/>tu producto<br/>o servicio</h5>
                                        </div>
                                    </div>
                                </div>

                                {/* Item */}
                                <div className="flex">
                                    {/* Numero */}
                                    <div className="relative ml-4 w-[55px] sm:w-[70px]">
                                        <span className="inline-block w-5 sm:w-7 h-5 sm:h-7 bg-celeste rounded-full absolute right-[6px] top-[5px] z-10"></span>
                                        <span className="font-titulo text-7xl sm:text-8xl text-verde text-outline mr-1 relative z-20">3<span className="font-titulo ml-[2px]">.</span></span>
                                    </div>

                                    <div className="border-l pl-6 ml-6">
                                        {/* Titulo */}
                                        <div>
                                            <h5 className="text-[17px] sm:text-[20px] text-white leading-7">
                                                Firma<br/>los documentos<br/>de forma digital<br/>
                                                <span className="font-bold text-[20px] sm:text-[28px]">y ¡listo!</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Negocios */}
            <div className="w-full bg-gray-100 bg-hands py-initSectionY px-iniSectionX">
                <div className="w-full">
                    {/* Titulo */}
                    <h3 className="font-titulo text-[8vw] sm:text-titulo text-celeste uppercase">
                        NUESTRAS LÍNEAS DE NEGOCIO
                    </h3>

                    {/* Carousel 2 */}
                    <Carousel2/>
                </div>
            </div>

            {/* Opciones de pago */}
            <div className="w-full bg-verde py-initSectionY sm:py-globalY px-iniSectionX">
                <div className="sm:w-[60%] items-center mx-auto">
                    {/* Titulo */}
                    <h3 className="font-titulo text-center text-[8vw] sm:text-titulo text-white uppercase">
                        OPCIONES DE PAGO
                    </h3>

                    <div className="pt-[20px] pb-[10px] sm:pb-0 sm:pt-[10px] flex justify-center">
                        {/* Item */}
                        <div>
                            {/* Icono */}
                            <div className="relative">
                                <span className="absolute -left-[6px] bottom-0 block w-4 sm:w-9 h-4 sm:h-9 rounded-full bg-verdeAgua"></span>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 size-10 sm:size-14">
                                    <path d="M10.5 18a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                                    <path fillRule="evenodd" d="M7.125 1.5A3.375 3.375 0 0 0 3.75 4.875v14.25A3.375 3.375 0 0 0 7.125 22.5h9.75a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 16.875 1.5h-9.75ZM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 0 1 6 19.125V4.875Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {/* Titulo */}
                            <div className="mt-2"><h4 className="font-bold text-2xl text-verdeAgua leading-7 ">Fácil Pago</h4></div>

                            {/* Descripcion */}
                            <div className="mt-1">
                                <span className="text-lg">Podrás pagar tus cuotas a través <br/>de tu factura de servicios públicos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Splide */}
            <div className="w-full sm:px-14 bg-white">
                <Carousel/>
            </div>
        </>
    );
}
