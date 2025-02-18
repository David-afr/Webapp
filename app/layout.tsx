import React, { FC, PropsWithChildren } from 'react';
import '@/app/ui/globals.css';

const rootlayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
};



export default rootlayout;