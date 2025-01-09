import Header from "@/components/Header";
import Stars from "@/components/Stars";
import Footer from "@/components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen w-full">
            {/* Fixed Background */}
            <div className="fixed inset-0 ">
                {/* Base Gradient */}
                <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#1a1333]" />

                {/* Mesh Gradient */}
                <div className="fixed inset-0 opacity-30">
                    <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#6f49d8,transparent)]" />
                    <div className="fixed inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,#432a84,transparent)]" />
                    <div className="fixed inset-0 bg-[radial-gradient(circle_1000px_at_50%_-100px,#2d1f54,transparent)]" />
                </div>

                {/* Vignette Effect */}
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_80%)]" />
            </div>
            <Stars />

            {/* Main Content */}
            <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-6">
                    {/* Header  */}
                    <Header />

                    <main className=" w-full pt-20">
                        {children}
                        <Footer />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default layout;
