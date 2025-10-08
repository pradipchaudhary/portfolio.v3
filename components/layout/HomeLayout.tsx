import React from "react";
import Footer from "../common/Footer";
import Background from "../ui/Background";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background */}
            <Background />

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 py-2 md:px-12 lg:px-24">
                <main className="w-full">
                    {children}
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default HomeLayout;
