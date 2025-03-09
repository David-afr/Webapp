'use client'
import React from "react";
import Button from './components/Button/Button';
import Image from "next/image";

export default function Page() {
    return (
        <>
            {/* Inicio */}
            <div className="bg-white pt-initPage overflow-visible bg-airplane h-[1350px] w-full">
                <div className="relative flex flex-col h-full justify-between">
                    {/* Titulo */}
                    <div className="w-full px-iniSectionX">
                        <h2 className="leading-none text-[250px] text-center font-titulo mb-[-20px]">Bienvenidos</h2>
                        <h3 className="leading-none text-semititulo">Tu mejor opción en créditos financieros</h3>
                    </div>

                    {/* Persona */}
                    <div className="absolute right-[180px] -top-[140px] w-[80%] z-0">
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
                                <li className="leading-8"><span>Con posibilidades de extensión.</span></li>
                                <li className="leading-8"><span>Consulta tu cupo y utiliza nuestro</span></li>
                                <li className="leading-8"><span>Simulador de Crédito.</span></li>
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
                                    <button type="button" className=" shadow-md shadow-gray-400 bg-verde font-titulo text-subtitulo text-white px-5 py-0 rounded-md hover:shadow-gray-500 transition-all duration-200">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#eff5fb] py-20 px-20 flex">
                <div className="block w-2/3 px-globalX">
                    <h4 className="font-bold text-2xl text-left text-[#2191d0]">
                        *Tambien puedes registrarte con la ayuda de un asesor en nuestros aliados autorizados. <span className="font-normal">Mas informacion.</span>
                    </h4>
                </div>
            </div>

            <div className="w-full bg-white py-globalY px-globalX place-content-center">
                <div className="w-full">
                    <h3 className="font-titulo pl-5 text-4xl text-left text-[#2191d0] ml-20">
                        nuestras lineas de negocios
                    </h3>
                    
                    <div className="mt-10 w-full flex justify-center p-20">
                        <div className="pl-4 mr-[5%] w-[33%]">
                            <div className="">
                                <img src="images/seccion/image1.png" className="w-full h-full object-cover"/>
                            </div>
                            <h4 className="font-extrabold text-[#2191d0] text-center mt-4">Linea de negocio 1</h4>
                            <span className="block text-center text-black">facilis fugiat itaque, debitis architecto at commodi libero ullam laboriosam
                            excepturi perferendis nobis nihil similique quasi, cumque velit aliquid.</span>
                            <div className="text-center mt-4">
                                <Button href="">Mas Informacion</Button>
                            </div>
                        </div>

                        <div className="pl-4 mr-[5%] w-[33%]">
                            <div className="">
                                <img src="images/seccion/image2.png" className="w-full h-full object-cover"/>
                            </div>
                            <h4 className="font-extrabold text-[#2191d0] text-center mt-4">Linea de negocio 1</h4>
                            <span className="block text-center text-black">facilis fugiat itaque, debitis architecto at commodi libero ullam laboriosam
                            excepturi perferendis nobis nihil similique quasi, cumque velit aliquid.</span>
                            <div className="text-center mt-4">
                                <Button href="">Mas Informacion</Button>
                            </div>
                        </div>

                        <div className="pl-4 w-[33%]">
                            <div className="">
                                <img src="images/seccion/image3.png" className="w-full h-full object-cover"/>
                            </div>
                            <h4 className="font-extrabold text-[#2191d0] text-center mt-4">Linea de negocio 1</h4>
                            <span className="block text-center text-black">facilis fugiat itaque, debitis architecto at commodi libero ullam laboriosam
                            excepturi perferendis nobis nihil similique quasi, cumque velit aliquid.</span>
                            <div className="text-center mt-4">
                                <Button href="">Mas Informacion</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-verde py-20 px-20 place-content-center">
                <div className="w-full">
                    <h3 className="capitalized font-titulo p-5 text-4xl text-center">
                        Opciones de pago
                    </h3>

                    <div className="mt-10 w-full flex justify-center">
                        <div className="border-l pl-4 mr-[5%]">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                            </a>
                            <h4 className="font-extrabold text-[#b7cc18]">Pagos Mensuales</h4>
                            <span>perzonalizados segun tus ingresos</span>
                        </div>

                        <div className="border-l pl-4 mr-[5%]">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                            </a>
                            <h4 className="font-extrabold text-[#b7cc18]">Transferencia bancarias</h4>
                            <span>o <span className="font-bold">pagos en efectivo </span>en nuestras oficinas</span>
                        </div>

                        <div className="border-l pl-4">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                            </a>
                            <h4 className="font-extrabold text-[#b7cc18]">Plataformas en linea</h4>
                            <span>perzonalizados segun tus ingresos</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex bg-white px-20 py-20">

            </div>
        </>
    );
}
