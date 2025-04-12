import Image from "next/image";
import React from "react";
import Link from "next/link";

interface LogoProps {
    width: number;
    height: number;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ width, height, className }) => {
    return (
        <div className={`select-none ${className}`}>
            <Link href={"/"}>
                <Image
                    src={'/images/logo.png'}
                    alt="Logo mi plante"
                    width={width}
                    height={height}
                />
            </Link>
        </div>
    );
}

export default Logo;