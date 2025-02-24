'use client'

import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./dashboard.css";
import Button from '../components/Button/Button';

const Dashboard = () => {
    return (
        <>
            <div className="bg-white overflow-visible bg-airplane h-[1350px] w-full px-20 z-0">
                <div className="">
                    <Header/>

                    <div className="w-full px-globalX z-30">
                        <h2 className="leading-none text-[240px] text-center font-titulo mb-[-20px]">Bienvenidos</h2>
                        <h3 className=" leading-none text-[34px]">Tu mejor opcion en creditos financiero</h3>
                        
                    </div>
                    <img src="images/highlight.png" className="w-[81%] absolute top-[70px] right-[180px]"/>
                    <div>
                        
                    </div>
                </div>
            </div>

            <div className=" w-full bg-white py-20 px-20 z-0">
                <div className="px-globalX">
                <h2 className="font-titulo text-[#2191d0] text-[60px]">Te contactamos</h2>
                    <form className="w-2/3 flex-col" action="">
                        <input className="w-[63%] m-2 rounded-md text-black border-2 border-gray focus:border-2 focus:border-[#2191d0]" type="text" name="" id="" placeholder="Nombre completo"/>
                        <input className="w-[63%] m-2 rounded-md text-black border-2 border-gray focus:border-2 focus:border-[#2191d0]" type="text" name="" id="" placeholder="Correo electronico"/>
                        <input className="w-[34%] m-2 rounded-md text-black border-2 border-gray focus:border-2 focus:border-[#2191d0]" type="text" name="" id="" placeholder="Telefono/Celular"/>
                        <select className="w-[62%] m-2 rounded-md text-white border-4 focus:border-[#90d4f6] border-[#90d4f6] bg-[#90d4f6]"> 
                            <option className="text-gray-50" defaultValue="">Selecciona una linea de interes</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <div className="w-2/3">
                            <input className="m-2 bg" type="checkbox" name="" id="" />
                            <span className="text-black ">Acepto los terminos y condiciones generados</span>
                            <br></br>
                            <span className="text-black">Autorizo el tratamiento de mis datos personales para el servision the Mi Plante</span>
                        </div>
                    </form>
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

            <div className="w-full bg-[#6cb332] py-20 px-20 place-content-center">
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

            <footer className="bg-footer w-full px-20">
                <Footer/>
            </footer>
        </>
    );
};

export default Dashboard;