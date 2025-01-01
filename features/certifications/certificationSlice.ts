"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the Certification interface
interface Certification {
    id?: number;
    certificationYear?: number;
    achieveCertifications?: string[];
}
interface UpdateCertification {
    id?: number;
    certificationYear?: number;
    achieveCertifications?: string[];
}

// Define the initial state interface
interface CertificateState {
    certificates: Certification[];
    singleCertificate?: Certification | null; // For fetchCertificationById
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: CertificateState = {
    certificates: [],
    singleCertificate: null,
    loading: false,
    error: null,
};

// Async Thunks
export const createCertification = createAsyncThunk(
    "experiences/createExperiences",
    async (certificate: Certification, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/experiences", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(certificate),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : "Unknown error"
            );
        }
    }
);

export const fetchCertifications = createAsyncThunk(
    "certifications/fetchCertifications",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/certifications");
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            return await response.json();
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : "Unknown error"
            );
        }
    }
);

export const fetchCertificationById = createAsyncThunk(
    "certifications/fetchCertificationById",
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/certifications/${id}`);
            if (!response.ok) throw new Error(`Error: ${response.status}`);

            // const data = await response.json();
            // console.log("fetchCertificationById async thunk", data);
            return await response.json();
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : "Unknown error"
            );
        }
    }
);

export const updateCertification = createAsyncThunk(
    "certifications/updateCertification",
    async (
        {
            id,
            certification,
        }: { id: number; certification: UpdateCertification },
        { rejectWithValue }
    ) => {
        try {
            console.log("certification to send for update", certification);
            const response = await fetch(`/api/certifications/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(certification),
            });

            if (!response.ok) throw new Error(`Error: ${response.status}`);
            return await response.json();
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : "Unknown error"
            );
        }
    }
);

export const deleteCertification = createAsyncThunk(
    "certifications/deleteCertification",
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/certifications/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error(`Error: ${response.status}`);
            return id; // Return the ID of the deleted certification
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : "Unknown error"
            );
        }
    }
);

// Slice
const certificateSlice = createSlice({
    name: "certifications",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createCertification.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCertification.fulfilled, (state, action) => {
                state.loading = false;
                state.certificates.push(action.payload);
            })
            .addCase(createCertification.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(fetchCertifications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCertifications.fulfilled, (state, action) => {
                state.loading = false;
                state.certificates = action.payload;
            })
            .addCase(fetchCertifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(fetchCertificationById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCertificationById.fulfilled, (state, action) => {
                state.loading = false;
                console.log(
                    "fetchCertificationById",
                    action.payload.certification.achieveCertifications
                );
                // console.log(Object.values(action.payload));
                state.singleCertificate = action.payload.certification;
            })
            .addCase(fetchCertificationById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(updateCertification.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCertification.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.certificates.findIndex(
                    (cert) => cert.id === action.payload.id
                );
                if (index !== -1) {
                    state.certificates[index] = action.payload;
                }
            })
            .addCase(updateCertification.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(deleteCertification.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCertification.fulfilled, (state, action) => {
                state.loading = false;
                state.certificates = state.certificates.filter(
                    (cert) => cert.id !== action.payload
                );
            })
            .addCase(deleteCertification.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default certificateSlice.reducer;
