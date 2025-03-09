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

            {/* Mision/Vision */}
            <div className="bg-background py-initSectionY px-iniSectionX">
                <div className="w-full flex justify-center">
                    {/* Mision */}
                    <div className="text-center mr-[60px] w-[40%]">
                        <h3 className="text-celeste font-titulo text-titulo">Misión</h3>
                        <p className="text-gray-700 text-xl">Brindar soluciones financieras personalizadas, rápidas y seguras para todos nuestros clientes.</p>
                    </div>

                    {/* Vision */}
                    <div className="text-center w-[40%]">
                        <h3 className="text-celeste font-titulo text-titulo">Visión</h3>
                        <p className="text-gray-800 text-xl">Ser reconocidos como la empresa líder de créditos financieros, destacándonos por nuestra excelencia en el servicio al cliente y adaptabilidad a sus necesidades.</p>
                    </div>
                </div>
            </div>

            {/* Ubicacion */}
            <div className="bg-celeste py-initSectionY px-iniSectionX flex flex-col items-center justify-center">
                {/* Titulo */}
                <div className="text-center">
                    <h2 className="text-titulo text-white font-titulo">Ubicación</h2>
                </div>

                {/* Map */}
                <div className="mt-[40px] max-w-[85%] rounded-[30px] overflow-hidden">
                    <img src="images/backgrounds/map.png" alt="google map" />
                </div>
            </div>

            {/* Contacto */}
            <div className="bg-background py-initSectionY px-iniSectionX flex flex-col items-center justify-center">
                {/* Titulo */}
                <div className="text-center">
                    <h2 className="text-titulo text-verde font-titulo">Contacto</h2>
                </div>

                {/* Text */}
                <div className="mt-[40px] max-w-[60%]">
                    <p className="text-center text-gray-800 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur reiciendis praesentium voluptas modi. Nemo excepturi debitis, commodi iure animi laudantium sit repellendus rerum facilis hic perspiciatis? Odio libero ad a.
                    </p>
                </div>
            </div>
        </>
    );
}