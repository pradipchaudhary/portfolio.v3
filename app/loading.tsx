'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(1);
        }, 1000); // Start fade in after preloader fades out

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background">
            <div
                className="text-center transition-opacity duration-1000 ease-out"
                style={{ opacity }}
            >
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-lg text-muted-foreground">Loading...</p>
                </div>
            </div>
        </div>
    );
}