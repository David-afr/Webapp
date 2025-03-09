import Image from "next/image";
import React from "react";
import Link from "next/link";

interface LogoProps {
    width: number;
    height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
    return (
        <div>
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