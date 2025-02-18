import Image from "next/image";
import React from "react";

const HomeIcon = () => {
    return (
        <div>
            <Image
                src={'/images/home.png'}
                alt="Home Icon"
                width={24}
                height={24}
            />
        </div>
    );
}

export default HomeIcon;