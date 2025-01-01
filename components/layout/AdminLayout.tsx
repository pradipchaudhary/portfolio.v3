import Sidebar from "../admin/Sidebar";
import TopBar from "../admin/TopBar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex  mx-auto min-h-screen max-w-7xl py-12  lg:py-0 ">
            {/* Sidebar */}
            <div className="g:flex lg:justify-between lg:gap-6 ">
                <Sidebar />
            </div>

            {/* Main Content */}
            <main className=" flex-1">
                <TopBar />
                <div className=" lg:w-full lg:pr-1 p-4 text-gray-300">
                    {children}
                </div>
            </main>
        </div>
    );
}
