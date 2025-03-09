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
                        <p className="text-gray-700 text-xl">Ser reconocidos como la empresa líder de créditos financieros, destacándonos por nuestra excelencia en el servicio al cliente y adaptabilidad a sus necesidades.</p>
                    </div>
                </div>
            </div>
        </>
    );
}