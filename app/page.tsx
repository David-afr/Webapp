'use client'
import React from "react";
import Image from "next/image";
import Carousel from "./components/Carousel/Carousel";

export default function Page() {
    return (
        <>
            {/* Inicio */}
            <div className="bg-white pt-initPage overflow-visible bg-airplane h-[70.4vw] w-full">
                <div className="relative flex flex-col h-full justify-between">
                    {/* Titulo */}
                    <div className="w-full px-iniSectionX">
                        <h2 className="leading-none text-[14vw] text-wrap text-center font-titulo mb-[-20px] text-white">Bienvenidos</h2>

                        {/* Info */}
                        <div className="mt-[2.2vw]">
                            <p className="text-right text-[1.1vw] text-white leading-[1.5vw]">
                                Somos una empresa dedicada a
                                <br/>ofrecer soluciones financieras
                                <br/>rápidas y confiables para que
                                <br/>puedas alcanzar tus metas.
                                <br/><strong className="font-bold text-[1.4vw]">Contamos con más de</strong>
                                <br/><strong className="font-bold text-[1.4vw]">10 años de experiencia</strong>
                                <br/>ayudando a nuestros clientes a
                                <br/>financiar sus sueños.
                            </p>
                        </div>
                    </div>

                    {/* Persona */}
                    <div className="absolute right-[9.4vw] select-none -top-[7.4vw] w-[80%] z-20">
                        <Image src={'/images/highlight.png'} layout="responsive" width={500} height={500} alt='Cliente satisfecha con Mi Plante' />
                    </div>


                    {/* Cupos */}
                    <div className="px-iniSectionX pb-[90px] z-30 relative justify-self-end">
                        {/* Titulo */}
                        <div className="inline-block">
                            <h2 className="text-semititulo bg-verde px-7 rounded-[60px] font-bold">Cupos y límites personalizados</h2>
                        </div>

                        {/* Detalles */}
                        <div className="mt-[12px]">
                            <ul className="text-semisubtitulo">
                                <li><span>Con posibilidades de extensión.</span></li>
                                <li><span>Consulta tu cupo y utiliza nuestro</span></li>
                                <li><span>Simulador de Crédito.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contacto */}
            <div className=" w-full bg-white">
                <div className="px-iniSectionX py-initSectionY">
                    {/* Titulo */}
                    <div>
                        <h2 className="font-titulo text-celeste text-titulo">¡TE CONTACTAMOS!</h2>
                    </div>

                    {/* Form */}
                    <div className="mt-[20px]">
                        <form className="w-2/3 flex-col" action="">
                            {/* Nombre */}
                            <input className="w-[63%] px-3 py-1 mb-5 text-lg rounded-xl text-gray-200 border-2 border-gray-300" type="text" placeholder="Nombre completo"/>

                            {/* Correo */}
                            <input className="w-[63%] px-3 py-1 mb-5 text-lg rounded-xl text-gray-200 border-2 border-gray-300" type="text" placeholder="Correo electrónico"/>

                            {/* Telefono */}
                            <div className="mb-5 flex">
                                {/* Telefono */}
                                <input className="w-[63%] mr-5 px-3 py-1 text-lg rounded-xl text-gray-200 border-2 border-gray-300" type="text" placeholder="Teléfono / celular"/>

                                {/* Linea */}
                                <select className="w-[63%] px-3 py-1 text-lg rounded-xl text-white bg-[#90d4f6]">
                                    <option defaultValue="">Selecciona una línea de interés</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between">
                                {/* Terminos */}
                                <div className="w-[63%]">
                                    <label className="flex items-center cursor-pointer">
                                        <input className="mr-2 bg-white rounded-lg p-2 w-8 h-8 border-2 border-gray-300" type="checkbox" />

                                        <div className="text-gray-400 text-sm">
                                            <span>Acepto los terminos y condiciones generales</span>
                                            <span>Autorizo el tratamiento de mis datos personales para el servicio de Mi Plante</span>
                                        </div>
                                    </label>
                                </div>

                                {/* Enviar */}
                                <div>
                                    <button type="button" className=" shadow-md shadow-gray-400 bg-verde font-titulo text-subtitulo text-white px-6 py-0 rounded-l-md rounded-tr-md rounded-br-[30px] hover:shadow-gray-500 transition-all duration-200">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Registro */}
            <div className="w-full bg-celesteClaro py-globalY px-iniSectionX relative">
                <div className="w-[60%] 4xl:w-[53%]">
                    <h4 className="text-celeste font-bold text-[28px] leading-8">
                        *Tambien puedes registrarte con la ayuda de un asesor en nuestros aliados autorizados.
                        <span className="text-gray-600 font-light text-[22px]"> <span className="border-b border-verde">Más información</span>.</span>
                    </h4>
                </div>

                {/* Listado */}
                <div className="absolute select-none right-[3vw] 4xl:right-[9vw] bottom-[-6.1vw] z-10">
                    <div className="bg-verde pb-[8.4vw] px-7 rounded-t-[5vw]">
                        {/* Titulo */}
                        <div className="text-right px-10">
                            <span className="font-titulo text-[250px]">¡?</span>
                        </div>

                        {/* Items */}
                        <div className="mt-[100px]">
                             {/* Item */}
                            <div className="mb-[70px] flex">
                                {/* Numero */}
                                <div className="relative ml-4 w-[70px]">
                                    <span className="inline-block w-7 h-7 bg-celeste rounded-full absolute right-[17px] top-[5px] z-10"></span>
                                    <span className="font-titulo text-8xl text-verde text-outline mr-1 relative z-20">1<span className="font-titulo ml-[2px]">.</span></span>
                                </div>

                                <div className="border-l pl-6 ml-6">
                                    {/* Titulo */}
                                    <div>
                                        <h5 className="text-[28px] text-white font-bold leading-7">Documentos<br/>necesarios:</h5>
                                    </div>

                                    {/* Listado */}
                                    <div className="mt-[10px]">
                                        <ul className="text-white">
                                            <li className="text-xl flex items-center">
                                                <span className="w-1 h-1 bg-white mr-2 rounded-full block"></span>
                                                <span>Cédula original.</span>
                                            </li>
                                            <li className="text-xl flex items-center">
                                                <span className="w-1 h-1 bg-white mr-2 rounded-full block"></span>
                                                <span>Dos facturas de servicios<br/>de EMCALI.</span>
                                            </li>
                                            <li className="text-xl flex items-center">
                                                <span className="w-1 h-1 bg-white mr-2 rounded-full block"></span>
                                                <span>Correo electrónico</span>
                                            </li>
                                            <li className="text-xl flex items-center">
                                                <span className="w-1 h-1 bg-white mr-2 rounded-full block"></span>
                                                <span>Número de celular.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="mb-[70px] flex">
                                {/* Numero */}
                                <div className="relative ml-4 w-[70px]">
                                    <span className="inline-block w-7 h-7 bg-celeste rounded-full absolute right-[6px] top-[5px] z-10"></span>
                                    <span className="font-titulo text-8xl text-verde text-outline mr-1 relative z-20">2<span className="font-titulo ml-[2px]">.</span></span>
                                </div>

                                <div className="border-l pl-6 ml-6">
                                    {/* Titulo */}
                                    <div>
                                        <h5 className="text-[28px] text-white font-bold leading-7">Regístrate<br/>y selecciona<br/>tu producto<br/>o servicio</h5>
                                    </div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="flex">
                                {/* Numero */}
                                <div className="relative ml-4 w-[70px]">
                                    <span className="inline-block w-7 h-7 bg-celeste rounded-full absolute right-[6px] top-[5px] z-10"></span>
                                    <span className="font-titulo text-8xl text-verde text-outline mr-1 relative z-20">3<span className="font-titulo ml-[2px]">.</span></span>
                                </div>

                                <div className="border-l pl-6 ml-6">
                                    {/* Titulo */}
                                    <div>
                                        <h5 className="text-[20px] text-white leading-7">
                                            Firma<br/>los documentos<br/>de forma digital<br/>
                                            <span className="font-bold text-[28px]">y ¡listo!</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Negocios */}
            <div className="w-full bg-white py-initSectionY px-iniSectionX">
                <div className="w-full">
                    {/* Titulo */}
                    <h3 className="font-titulo text-titulo text-celeste uppercase">
                        NUESTRAS LÍNEAS DE NEGOCIO
                    </h3>

                    {/* Tipos */}
                    <div className="pt-[90px] grid grid-cols-3 gap-[150px]">
                        {/* Item 1 */}
                        <div className="text-center">
                            {/* Image */}
                            <div>
                                <Image src={'/images/seccion/image1.png'} alt="Linea de negocio 1" layout="responsive" width={300} height={300} />
                            </div>

                            {/* Titulo */}
                            <div className="mt-[30px]">
                                <h3 className="text-celeste font-bold text-[26px]">Línea de negocio 1</h3>
                            </div>

                            {/* informacion */}
                            <div className="px-6 mt-[15px]">
                                <a href="#" className="bg-celeste px-2 block rounded-xl">Más información</a>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="text-center">
                            {/* Image */}
                            <div>
                                <Image src={'/images/seccion/image2.png'} alt="Linea de negocio 1" layout="responsive" width={300} height={300} />
                            </div>

                            {/* Titulo */}
                            <div className="mt-[30px]">
                                <h3 className="text-celeste font-bold text-[26px]">Línea de negocio 2</h3>
                            </div>

                            {/* informacion */}
                            <div className="px-6 mt-[15px]">
                                <a href="#" className="bg-celeste px-2 block rounded-xl">Más información</a>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="text-center">
                            {/* Image */}
                            <div>
                                <Image src={'/images/seccion/image3.png'} alt="Linea de negocio 3" layout="responsive" width={300} height={300} />
                            </div>

                            {/* Titulo */}
                            <div className="mt-[30px]">
                                <h3 className="text-celeste font-bold text-[26px]">Línea de negocio 3</h3>
                            </div>

                            {/* informacion */}
                            <div className="px-6 mt-[15px]">
                                <a href="#" className="bg-celeste px-2 block rounded-xl">Más información</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Opciones de pago */}
            <div className="w-full bg-verde py-initSectionY px-iniSectionX">
                <div className="w-full">
                    {/* Titulo */}
                    <h3 className="font-titulo text-center text-titulo text-white uppercase">
                        OPCIONES DE PAGO
                    </h3>

                    <div className="pt-[90px] grid grid-cols-3 gap-[150px]">
                        {/* Item */}
                        <div className="border-l-2 pl-8">
                            {/* Icono */}
                            <div className="relative">
                                <span className="absolute -left-[6px] bottom-0 block w-9 h-9 rounded-full bg-verdeAgua"></span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="relative z-10 size-14">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                            </div>

                            {/* Titulo */}
                            <div className="mt-2"><h4 className="font-bold text-2xl text-verdeAgua leading-7">Pagos mensuales</h4></div>

                            {/* Descripcion */}
                            <div className="mt-1">
                                <span className="text-lg">personalizados según tus ingresos</span>
                            </div>
                        </div>

                        {/* Item */}
                        <div className="border-l-2 pl-8">
                            {/* Icono */}
                            <div className="relative">
                                <span className="absolute -left-[6px] bottom-0 block w-9 h-9 rounded-full bg-verdeAgua"></span>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 size-14">
                                    <path d="M10.5 18a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                                    <path fillRule="evenodd" d="M7.125 1.5A3.375 3.375 0 0 0 3.75 4.875v14.25A3.375 3.375 0 0 0 7.125 22.5h9.75a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 16.875 1.5h-9.75ZM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 0 1 6 19.125V4.875Z" clipRule="evenodd" />
                                </svg>
                            </div>

                            {/* Titulo */}
                            <div className="mt-2"><h4 className="font-bold text-2xl text-verdeAgua leading-7">Transferencias bancarias</h4></div>

                            {/* Descripcion */}
                            <div className="mt-1">
                                <span className="text-lg"><strong>o pagos en efectivo</strong> en nuestras oficinas.</span>
                            </div>
                        </div>

                        {/* Item */}
                        <div className="border-l-2 pl-8">
                            {/* Icono */}
                            <div className="relative">
                                <span className="absolute -left-[6px] bottom-0 block w-9 h-9 rounded-full bg-verdeAgua"></span>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 size-14">
                                    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                                </svg>
                            </div>

                            {/* Titulo */}
                            <div className="mt-2"><h4 className="font-bold text-2xl text-verdeAgua leading-7">Plataformas en línea</h4></div>

                            {/* Descripcion */}
                            <div className="mt-1">
                                <span className="text-lg">para realizar pagos desde cualquier lugar.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Splide */}
            <div className="w-ful py-globalY px-14 bg-white">
                <Carousel/>
            </div>
        </>
    );
}
