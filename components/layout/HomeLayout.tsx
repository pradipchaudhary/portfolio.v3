import React from "react";
import Stars from "../ui/Stars";
import Footer from "../common/Footer";
import Background from "../ui/Background";
import Sidebar from "../sidebar/Sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <div className="relative min-h-screen w-full">
            {/* Fixed Background */}
            <Background />
            <Stars />

            {/* Main Content */}
            <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-6">
                    {/* Header  */}
                    <Sidebar />

                    <main className=" w-full pt-20">
                        {children}
                        {/* <Footer /> */}
                    </main>
                </div>
            </div>
        </div>
    </>;
};

export default HomeLayout;
