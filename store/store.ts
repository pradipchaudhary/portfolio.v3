import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "@/features/skills/skillSlice";
import certificationsSlice from "@/features/certifications/certificationSlice";
import experienceSlice from "@/features/experiences/experienceSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            skills: skillsSlice,
            certifications: certificationsSlice,
            experiences: experienceSlice,
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
