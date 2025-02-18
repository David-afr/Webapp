import React from "react";
import Header from "../components/Header/Header";
import "./dashboard.css";

const Dashboard = () => {
    return (
        <div className="bg-airplane h-screen w-full px-[10%]">
            <div className="">
                <Header/>

                <div className="w-full px-globalX">
                    <h3 className="leading-none text-[210px] text-center font-titulo mb-[-20px]">Bienvenidos</h3>
                    <h2 className=" leading-none text-[34px]">Tu mejor opcion en creditos financieros</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;