"use client";

import { Provider } from "react-redux";
import { useRef } from "react";
import { makeStore, AppStore } from "@/store/store";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const storeRef = useRef<AppStore>(undefined);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }

    return (
        <>
            <Provider store={storeRef.current}>{children}</Provider>
        </>
    );
};
