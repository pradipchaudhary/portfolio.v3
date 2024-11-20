"use client";

import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
// import LanguagesAndTools from "@/components/LanguagesAndTools";

export default function Home() {
    return (
        <div className="flex h-screen max-w-6xl mx-auto overflow-hidden text-gray-200 px-6">
            {/* Fixed Sidebar */}
            <Header />

            {/* Scrollable Content */}
            <main className="flex-1 h-full overflow-y-scroll scroll-hidden p-5 pl-14 text-slate-500 py-20">
                <Intro />
                <Experience />
                <Skills />
            </main>
        </div>
    );
}
