import React, { FC, PropsWithChildren } from 'react';
import '@/app/ui/globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import "./page.css";

const rootlayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html>
            <body className="antialiased">
                <Header/>

                {children}

                <Footer/>
            </body>
        </html>
    );
};



export default rootlayout;