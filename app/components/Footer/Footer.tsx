import React from "react";
import Logo from "../Global/Logo";
import Link from "next/link";

const Footer = () => {
    return(
        <div className="bg-footer w-full px-iniSectionX py-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="order-2 sm:order-1">
                    {/* Menu */}
                    <div className="mt-4 border-l pl-3 py-1 border-[#a4d7e198]">
                        <ul className="text-left">
                            <li>
                                <Link href="/" className="cursor-pointer">Inicio</Link>
                            </li>
                            <li>
                                <Link href="/nosotros" className="cursor-pointer">Nosotros</Link>
                            </li>
                            <li>
                                <a href="https://market.miplante.com" className="cursor-pointer">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="cursor-pointer">Conoce sobre tu seguro</a>
                            </li>
                            <li>
                                <Link href="/preguntas-frecuentes" className="cursor-pointer">Preguntas frecuentes</Link>
                            </li>
                            <li>
                                <a href="#" className="cursor-pointer">Equipo</a>
                            </li>
                            <li>
                                <a href="#" className="cursor-pointer">Protección de datos</a>
                            </li>

                            <li>
                                <a href="#" className="cursor-pointer">Términos y Condiciones de uso</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright y Redes Sociales */}
                <div className="order-3 sm:order-2 text-center sm:text-left mt-8 sm:mt-0">
                    <footer><span className="text-[3.8vw] sm:text-semisubtitulo">© 2024 Mi Plante, Todos los derechos reservados.</span></footer>

                    <div className="flex justify-center sm:justify-start items-center mt-2">
                        {/* Facebook */}
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="cursor-pointer w-[32px] h-[32px] mr-[6px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-white">
                                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"/>
                            </svg>
                        </a>
                        {/* Twitter */}
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-white rounded-full p-[7px] w-[32px] h-[32px] mr-[6px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-celeste">
                                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/>
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-white rounded-full p-1 w-[32px] h-[32px] mr-[6px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-celeste">
                                <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 33 C 4 39.063407 8.9365932 44 15 44 L 33 44 C 39.063407 44 44 39.063407 44 33 L 44 15 C 44 8.9365932 39.063407 4 33 4 L 15 4 z M 15 6 L 33 6 C 37.982593 6 42 10.017407 42 15 L 42 33 C 42 37.982593 37.982593 42 33 42 L 15 42 C 10.017407 42 6 37.982593 6 33 L 6 15 C 6 10.017407 10.017407 6 15 6 z M 35 11 C 33.895 11 33 11.895 33 13 C 33 14.105 33.895 15 35 15 C 36.105 15 37 14.105 37 13 C 37 11.895 36.105 11 35 11 z M 24 14 C 18.488666 14 14 18.488666 14 24 C 14 29.511334 18.488666 34 24 34 C 29.511334 34 34 29.511334 34 24 C 34 18.488666 29.511334 14 24 14 z M 24 16 C 28.430666 16 32 19.569334 32 24 C 32 28.430666 28.430666 32 24 32 C 19.569334 32 16 28.430666 16 24 C 16 19.569334 19.569334 16 24 16 z"/>
                            </svg>
                        </a>
                        {/* Youtube */}
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-white rounded-full p-1 w-[32px] h-[32px] mr-[6px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="fill-celeste">
                                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"/>
                            </svg>
                        </a>
                        {/* Whatsapp */}
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-white rounded-full p-[5px] w-[32px] h-[32px] mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-celeste">
                                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"/>
                            </svg>
                        </a>
                    </div>

                    <span className="text-[3.8vw] sm:text-semisubtitulo inline-block mt-2"><a  href="">Términos y Condiciones</a> - <a href="">Legal</a></span>
                </div>

                {/* Logo */}
                <div className="order-1 sm:order-3 mb-6 sm:mb-0">
                    <Logo width={280} height={500} className="w-[150px] h-auto lg:w-[280px]"/>
                </div>

            </div>
        </div>
    );
};

export default Footer;
