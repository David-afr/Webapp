import React from "react";
import Logo from "./Logo";

const Header = () => {
    return(
        <header className="py-globalY px-globalX">
            <div className="flex items-center justify-between w-full">
                {/* Logo */}
                <div><Logo/></div>

                {/* Menu */}
                <div className="flex items-center capitalize">
                    <div className="border-r pr-2 mr-3">
                        <a >home</a>
                    </div>
                    <div className="border-r pr-2 mr-3">
                        <a href="">Nosotros</a>
                    </div>

                    <div>
                        <a href="">Preguntas frecuentes</a> 
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Header;


