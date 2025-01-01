// Import necessary Redux Toolkit methods
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API endpoint for certifications (replace with your actual endpoint)
const API_URL = "https://example.com/api/certifications";

// Async thunk for fetching certifications
export const fetchCertifications = createAsyncThunk(
    "certifications/fetchCertifications",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for adding a certification
export const addCertification = createAsyncThunk(
    "certifications/addCertification",
    async (certification, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_URL, certification);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for updating a certification
export const updateCertification = createAsyncThunk(
    "certifications/updateCertification",
    async ({ id, certification }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, certification);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for deleting a certification
export const deleteCertification = createAsyncThunk(
    "certifications/deleteCertification",
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Initial state
const initialState = {
    certifications: [],
    status: "idle",
    error: null,
};

// Certification slice
const certificationSlice = createSlice({
    name: "certifications",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle fetchCertifications
            .addCase(fetchCertifications.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCertifications.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.certifications = action.payload;
            })
            .addCase(fetchCertifications.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            // Handle addCertification
            .addCase(addCertification.fulfilled, (state, action) => {
                state.certifications.push(action.payload);
            })
            // Handle updateCertification
            .addCase(updateCertification.fulfilled, (state, action) => {
                const index = state.certifications.findIndex(
                    (cert) => cert.id === action.payload.id
                );
                if (index !== -1) {
                    state.certifications[index] = action.payload;
                }
            })
            // Handle deleteCertification
            .addCase(deleteCertification.fulfilled, (state, action) => {
                state.certifications = state.certifications.filter(
                    (cert) => cert.id !== action.payload
                );
            });
    },
});

export default certificationSlice.reducer;
