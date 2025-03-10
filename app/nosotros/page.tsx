export default function Page() {
    return (
        <>
            {/* Inicio */}
            <div className="pt-initPage bg-nosotros flex justify-center h-[78vh]">
                <div className="max-w-[50%] text-subtitulo py-initSectionY">
                    <div className="font-light text-center">
                        <p className="text-white">
                            Somos una empresa dedicada a ofrecer soluciones financieras rápidas y confiables para que puedas alcanzar tus metas.
                            <br/><strong className="bg-verde px-3 rounded font-bold">Contamos con más de 10 años de experiencia</strong> ayudando a nuestros clientes a financiar sus sueños.
                        </p>
                    </div>
                </div>
            </div>

            {/* Nosotros */}
            <div className="bg-background py-initSectionY px-iniSectionX flex flex-col items-center justify-center">
                {/* Titulo */}
                <div className="text-center">
                    <h2 className="text-titulo text-celeste font-titulo">Nosotros</h2>
                </div>

                {/* Text */}
                <div className="mt-[40px] max-w-[60%]">
                    <p className="text-center text-gray-800 text-xl">
                    HHO Renting S.A.S. es una empresa colombiana constituida en el 2014 en la ciudad de Cali, Valle del Cauca; inició sus operaciones enfocada en impulsar 
                    soluciones sostenibles a través de un modelo innovador, orientado a la instalación de generadores de combustible limpio HHO en diversos tipos de vehículos. 
                    Su propósito principal era prevenir, minimizar y controlar la generación de contaminantes, al tiempo que mejoraba la eficiencia energética mediante el uso de 
                    combustibles más limpios.
                    <br/>
                    <br/>
                    Con más de 14 años de experiencia, ha consolidado su reputación como un referente en el desarrollo de soluciones innovadoras con impacto social. 
                    Durante su trayectoria, ha colaborado con reconocidas empresas a nivel nacional, promoviendo tecnologías sostenibles y prácticas responsables con el 
                    medio ambiente.
                    <br/>
                    <br/>
                    En su proceso de evolución, la empresa identificó nuevas oportunidades de crecimiento, integrando un modelo de negocio más inclusivo y accesible a través 
                    de su marca MI PLANTE. Este nuevo enfoque ofrece servicios financieros digitales especialmente diseñados para los suscriptores residenciales de Emcali. 
                    Su misión es fomentar la inclusión financiera principalmente en los estratos 1, 2 y 3, facilitando el acceso a bienes y servicios mediante procesos de 
                    financiación accesibles, ágiles y 100% digitales.
                    <br/>
                    <br/>
                    Este sistema permite a los usuarios acceder a microcréditos personalizados, con opciones de pago flexibles adaptadas a su capacidad económica. Además, 
                    incluye innovadoras alternativas de cobro, como la integración de pagos a través de facturas de servicios públicos domiciliarios. El modelo está 
                    especialmente diseñado para beneficiar a personas sin historial crediticio o con empleo informal, ofreciendo soluciones que responden a las necesidades de 
                    sectores tradicionalmente excluidos del sistema financiero formal.
                    <br/>
                    <br/>
                    La evolución de la empresa se alinea con diversas políticas nacionales e internacionales enfocadas en el fomento de la sostenibilidad, la reducción de 
                    emisiones contaminantes y la promoción de la inclusión financiera.
                    <br/>
                    <br/>
                    Hoy, HHO Renting S.A.S. combina su enfoque en la sostenibilidad con soluciones financieras innovadoras, posicionándose como un líder en tecnología limpia, 
                    responsabilidad social y acceso inclusivo al crédito en el mercado colombiano.
                    </p>
                </div>
            </div>

            {/* Mision/Vision */}
            <div className="bg-celeste py-initSectionY px-iniSectionX">
                <div className="w-full flex justify-center">
                    {/* Mision */}
                    <div className="text-center mr-[60px] w-[40%]">
                        <h3 className="text-white font-titulo text-titulo">Misión</h3>
                        <p className="text-white text-xl">Somos un servicio de financiación inclusivo que facilita a los clientes residenciales de empresas de servicios públicos 
                                                            la adquisición de productos y servicios mediante créditos fáciles, rápidos y seguros. Nuestro objetivo es mejorar la 
                                                            calidad de vida de las familias, reconociendo su buen comportamiento de pago en sus facturas de servicios públicos.</p>
                    </div>

                    {/* Vision */}
                    <div className="text-center w-[40%]">
                        <h3 className="text-white font-titulo text-titulo">Visión</h3>
                        <p className="text-white text-xl">Para 2030, nos posicionaremos como un líder en el sector de financiación inclusiva, alcanzando una participación 
                                                            significativa en el mercado de créditos para clientes residenciales. Nos comprometemos a ser reconocidos por nuestra 
                                                            innovación en productos financieros accesibles y por mejorar la calidad de vida de las familias, estableciendo 
                                                            relaciones de confianza y ofreciendo soluciones que fomenten el bienestar económico y social de nuestros clientes.</p>
                    </div>
                </div>
            </div>

            {/* Ubicacion */}
            <div className="bg-background py-initSectionY px-iniSectionX flex flex-col items-center justify-center">
                {/* Titulo */}
                <div className="text-center">
                    <h2 className="text-titulo text-celeste font-titulo">Ubicación</h2>
                </div>

                {/* Map */}
                <div className="mt-[40px] max-w-[85%] rounded-[30px] overflow-hidden">
                    <img src="images/backgrounds/map.png" alt="google map" />
                </div>
            </div>

            {/* Contacto */}
            <div className="bg-verde py-initSectionY px-iniSectionX flex flex-col items-center justify-center">
                {/* Titulo */}
                <div className="text-center">
                    <h2 className="text-titulo text-white font-titulo">Contacto</h2>
                </div>

                {/* Text */}
                <div className="mt-[40px] max-w-[60%]">
                    <p className="text-center text-white text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur reiciendis praesentium voluptas modi. Nemo excepturi debitis, commodi iure animi laudantium sit repellendus rerum facilis hic perspiciatis? Odio libero ad a.
                    </p>
                </div>
            </div>
        </>
    );
}