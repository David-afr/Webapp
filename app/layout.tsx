
import React, { FC, PropsWithChildren } from 'react';
import '@/app/ui/globals.css';

const rootlayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html>
            <body className='bg-slate-500'>{children}</body>
        </html>
    );
};

export default rootlayout;