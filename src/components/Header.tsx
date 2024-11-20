"use client";
export default function Header() {
    return (
        <header className="w-72 h-full overflow-hidden p-5 mr-10">
            <h2 className="text-4xl font-bold tracking-tight text-slate-400 sm:text-5xl leading-7">
                Pradip <span>Chaudhary</span>
            </h2>
            <p className="mt-2 text-2xl text-slate-400">Full Stack Developer</p>
            <p className="text-gray-500 mt-4 max-w-xs leading-normal text-sm">
                React Developer creating dynamic web solutions with modern
                tools.
            </p>
        </header>
    );
}
