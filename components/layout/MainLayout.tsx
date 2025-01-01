import { ReactNode } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-6">
                <Header />
                <main
                    id="content"
                    className="lg:w-full lg:pb-24 lg:pl-2 lg:pr-1"
                >
                    <header className="sticky top-0 left-0 w-full  flex justify-between items-center h-24"></header>
                    <div className="">{children}</div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}
