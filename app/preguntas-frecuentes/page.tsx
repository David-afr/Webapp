export default function Page() {
    return (
        <>
            {/* Inicio */}
            <div className="pt-initPage bg-celeste flex justify-center h-[110px]">
                <div className="max-w-[50%] text-subtitulo py-initSectionY">
                    <div className="font-light text-center">                        
                    </div>
                </div>
            </div>

            {/* Preguntas Frecuentes */}
            <div className="bg-background py-initSectionY px-iniSectionX flex flex-col items-center justify-left">

                {/* Text */}
                <div className="max-w-[60%] text-left text-black text-xl">
                    <p className="text-xl text-celeste font-titulo mb-5">¿Qué es Mi Plante?</p>
                    
                    <p>
                    Es un Servicio de financiación inclusivo otorgado a los usuarios residenciales de EMCALI que han tenido un buen comportamiento de pago en los últimos 18 meses.
                    <br/>
                    <br/>
                    Nuestra misión es promover la inclusión financiera en los estratos residenciales, facilitando el acceso a bienes y servicios mediante un proceso de 
                    financiación accesible, ágil y 100% digital, permitiendo acceder a financiamiento flexible mediante plataformas digitales, con opciones de pago ajustadas a 
                    su capacidad económica, contribuyendo a mejorar su calidad de vida. 
                    </p>
                </div>

                <div className="mt-12 max-w-[60%] text-black text-xl">
                    <p className="text-xl text-verde font-titulo mb-5">¿Quiénes pueden acceder a Mi Plante?</p>
                    
                    <p>Pueden acceder los usuarios de EMCALI que cumplan con los siguientes requisitos:</p>
                    <br/>
                    <ul className=" list-disc pl-5">
                        <li>Mayor de edad.</li>
                        <li>Ser ciudadano colombiano o tener estatus migratorio legalizado.</li>
                        <li>Clientes que tengan 18 meses de buen comportamiento de pagos en el servicio público domiciliario, sin suspensión y/o castigo del servicio, ni moras mayores a 60 días por otros conceptos. </li>
                        <li>Que el servicio esté activo.</li>
                        <li>Que no tenga refinanciaciones por ningún concepto.</li>
                        <li>Que no tenga procesos de fraude identificados. </li>
                    </ul>
                </div>

                <div className="mt-12 max-w-[60%] text-black text-xl">
                    <p className="text-xl text-celeste font-titulo mb-5">¿Dónde puedo comprar con Mi Plante?</p>
                    
                    <p>Puedes comprar en cualquiera de nuestros aliados comerciales. Para mayor información, tienes las siguientes opciones:</p>
                    <br/>
                    <p><strong className="font-bold">Compra en línea:</strong> Accede a nuestro MarketPlace y realiza tu compra en <a href="www.miplante.com">www.miplante.com.</a></p>
                    <p><strong className="font-bold">Puntos de venta físicos:</strong> Visita los establecimientos de nuestros aliados comerciales y recibe asesoría personalizada.</p>
                    <p><strong className="font-bold">Más Información</strong> completa el siguiente <strong className="font-bold">formulario:</strong> </p>

                    {/* Form */}
                    <div className="mt-[20px]">
                        <form className="w-2/3 flex-col" action="">
                            {/* Nombre */}
                            <input className="w-[63%] px-3 py-1 mb-5 text-lg rounded-xl text-gray-700 border-2 border-gray-300" type="text" placeholder="Nombre completo"/>

                            {/* Correo */}
                            <input className="w-[63%] px-3 py-1 mb-5 text-lg rounded-xl text-gray-700 border-2 border-gray-300" type="text" placeholder="Correo electrónico"/>

                            {/* Telefono */}
                            <input className="w-[63%] px-3 py-1 mb-5 text-lg rounded-xl text-gray-700 border-2 border-gray-300" type="text" placeholder="Teléfono / celular"/>

                            {/* Linea */}
                            <select className="w-[63%] px-3 py-1 mb-5 text-lg rounded-xl text-white bg-[#90d4f6]">
                                <option defaultValue="">Selecciona una línea de interés</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>

                            {/* Solicitud */}
                            <input className="w-[100%] pb-20 px-3 py-1 mb-5 text-lg rounded-xl text-gray-700 border-2 border-gray-300  " type="text" placeholder="Solicitud"/>

                            <div className="flex items-center justify-between">
                                {/* Terminos */}
                                <div className="w-[63%]">
                                    <label className="flex items-center cursor-pointer">
                                        <input className="mr-2 bg-white rounded-lg p-2 w-8 h-8 border-2 border-gray-300" type="checkbox" />

                                        <div className="text-gray-700 text-sm">
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

                <div className="mt-12 max-w-[60%] text-black text-xl">
                    <p className="text-xl text-verde font-titulo mb-5">¿Qué puedo comprar con Mi Plante?</p>
                    
                    <p>Puedes comprar una variedad de <strong className="font-bold">productos y servicios</strong> para ayudarte a cumplir tus metas y sueños. Contamos con 10 líneas de productos y más de 50 sublineas. 
                        Explora nuestras opciones y encuentra lo que necesitas en <a href="www.miplante.com">www.miplante.com.</a></p>

                </div>

                <div className="mt-12 max-w-[60%] text-black text-xl">
                    <p className="text-xl text-celeste font-titulo mb-5">¿Qué sucede con la deuda en caso de fallecimiento del titular?</p>
                    
                    <p>La deuda queda cancelada gracias al seguro de vida a deudores. Este seguro cubre el 100% del saldo pendiente en caso de fallecimiento o incapacidad total y permanente del titular.</p>
                    <p><strong className="font-bold">Consulta los términos y condiciones en</strong> <a href="www.miplante.com">www.miplante.com.</a></p>
                </div>

                <div className="mt-12 max-w-[60%] text-black text-xl">
                    <p className="text-xl text-verde font-titulo mb-5">¿Cuál es la tasa de financiación de Mi Plante?</p>
                    
                    <p><strong className="font-bold">Es una tasa de interés fija</strong> durante todo el periodo de financiamiento, establecida siempre conforme al marco regulatorio de la <strong className="font-bold">Superintendencia Financiera.</strong></p>
                </div>

                <div className="mt-12 max-w-[100%] text-black text-xl">
                    <p className="text-xl text-celeste font-titulo mb-5">¿Otorgan préstamos de dinero?</p>
                    
                    <p>El pago de las cuotas lo realizas a través de la factura de EMCALI</p>
                </div>                

                <div className="mt-12 max-w-[60%] text-black text-xl">
                    <p className="text-xl text-verde font-titulo mb-5">¿Cómo puedo reportar un fraude?</p>
                    
                    <p>Si fuiste víctima de suplantación de identidad o suplantación de recibo u otros fraudes, debes acercarte inmediatamente a nuestros puntos de atención con la siguiente información:</p>
                    <br/>
                    <ul className=" list-disc pl-5">
                        <li><strong className="font-bold">Tipo y número de documento:</strong></li>
                        <li><strong className="font-bold">Nombre completo:</strong></li>
                        <li><strong className="font-bold">Teléfono de contacto:</strong></li>
                        <li><strong className="font-bold">Denuncia ante la Fiscalía General de la Nación.</strong></li>
                    </ul>
                </div>


            </div>  
        </>
    );
}