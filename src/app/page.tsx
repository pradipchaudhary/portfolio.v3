import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Header from "@/components/Header";

export default function Home() {
    return (
        <div className="">
            {/* Spotlight Background */}
            <div className="relative group/spotlight">
                {/* Main Content Container */}
                <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                    <div className="lg:flex lg:justify-between lg:gap-6">
                        {/* Header Section */}
                        <Header />
                        <main
                            id="content"
                            className="pt-24 lg:w-full lg:py-24 lg:pl-10 lg:pr-1"
                        >
                            <AboutMe />
                            <Experience />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
