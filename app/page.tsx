export default function Home() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="container mx-auto text-center">
                <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                    <h1 className="text-center text-3xl font-medium text-gray-900 sm:text-4xl">
                        Hi there, I&apos;m Pradip Chaudhary 👋
                    </h1>
                    <p className="mt-6 text-center text-lg leading-6 text-gray-600">
                        A passionate Full Stack Software Developer 🚀 having a
                        special interest in Frontend technologies and experience
                        of building Web applications with JavaScript / Reactjs /
                        Nodejs and some other cool libraries and frameworks
                    </p>
                    <div className="mt-16 flex gap-4">
                        <a href="">
                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-800 px-6 font-medium text-neutral-200">
                                <span> Download Resume</span>
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                    <div className="relative h-full w-8 bg-white/20"></div>
                                </div>
                            </button>
                        </a>
                        <a href="">
                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-800 px-6 font-medium text-neutral-200">
                                <span>Let&apos;s Work Together</span>
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                    <div className="relative h-full w-8 bg-white/20"></div>
                                </div>
                            </button>
                        </a>
                    </div>
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold text-gray-700">
                            Follow me{" "}
                        </h2>
                        <ul>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
