"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Experience {
    title: string;
    company: string;
    companyUrl?: string;
    period: string;
    responsibilities: string[];
}

// Fetch experiences (Updated with type safety)
export const createExperience = createAsyncThunk<
    Experience, // Response type
    Experience // Argument type
>("experiences/createExperience", async (experience) => {
    const response = await fetch("/api/experiences", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(experience),
    });

    if (!response.ok) {
        throw new Error("Failed to create experience"); // Throw error if response isn't ok
    }

    const data = await response.json();
    console.log("return data: ", data);
    return data;
});

export const fetchExperiences = createAsyncThunk(
    "experiences/fetchExperiences",
    async () => {
        const response = await fetch("/api/experiences");
        const data = await response.json();
        return data;
    }
);

// Fetch single experience
export const fetchSingleExperience = createAsyncThunk(
    "experiences/fetchSingleExperience",
    async (id: string) => {
        const response = await fetch(`/api/experiences/${id}`);
        const data = await response.json();
        return data;
    }
);

// update experience
export const updateExperience = createAsyncThunk(
    "experiences/updateExperience",
    async (experience: Experience) => {
        const response = await fetch(`/api/experiences/${experience.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(experience),
        });
        const data = await response.json();
        return data;
    }
);

// Define the initial state interface
interface ExperienceState {
    experiences: Experience[];
    loading: boolean;
    error: string | null;
    singleExperience?: Experience | null;
}

// Initial state
const initialState: ExperienceState = {
    experiences: [],
    singleExperience: null,
    loading: false,
    error: null,
};

// Experience slice with extraReducers for async actions
const experienceSlice = createSlice({
    name: "experiences",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createExperience.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createExperience.fulfilled, (state, action) => {
                state.loading = false;
                state.experiences.push(action.payload);
                console.log("Post object ", action.payload);
            })
            .addCase(createExperience.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            })

            // fetch experiences
            .addCase(fetchExperiences.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchExperiences.fulfilled, (state, action) => {
                state.loading = false;
                state.experiences = action.payload;
            })
            .addCase(fetchExperiences.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            })
            // fetch single experience
            .addCase(fetchSingleExperience.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSingleExperience.fulfilled, (state, action) => {
                state.loading = false;
                state.singleExperience = action.payload;
                console.log("single experience: ", action.payload);
            })
            .addCase(fetchSingleExperience.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default experienceSlice.reducer;
