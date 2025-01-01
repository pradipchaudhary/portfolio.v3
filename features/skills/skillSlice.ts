import { Skill } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface SkillsState {
    skills: Skill[];
    loading: boolean;
    error: string | null;
    skillsAPIData: [];
}

const initialState: SkillsState = {
    skills: [],
    loading: false,
    error: null,
    skillsAPIData: [],
};

export const fetchSkills = createAsyncThunk("skills/fetchSkills", async () => {
    const response = await fetch("/api/skills");
    const data = await response.json();
    return data;
});

export const createSkill = createAsyncThunk(
    "skills/createSkill",
    async (newSkill: Skill) => {
        const response = await fetch("/api/skills", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSkill),
        });
        return await response.json();
    }
);

export const updateSkill = createAsyncThunk(
    "skills/updateSkill",
    async (skill: Skill) => {
        const response = await fetch(`/api/skills/${skill.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(skill),
        });
        return await response.json();
    }
);

export const deleteSkill = createAsyncThunk(
    "skills/deleteSkill",
    async (id: number) => {
        await fetch(`/api/skills/${id}`, {
            method: "DELETE",
        });
        return id;
    }
);

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        addSkill: (state, action: PayloadAction<Skill>) => {
            state.skills.push(action.payload);
        },
        updateSkillState: (state, action: PayloadAction<Skill>) => {
            const index = state.skills.findIndex(
                (skill) => skill.id === action.payload.id
            );
            if (index !== -1) {
                state.skills[index] = action.payload;
            }
        },
        deleteSkillState: (state, action: PayloadAction<number>) => {
            state.skills = state.skills.filter(
                (skill) => skill.id !== action.payload
            );
        },
        getSkillsState: (state, action: PayloadAction<Skill[]>) => {
            state.skills = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkills.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSkills.fulfilled, (state, action) => {
                state.loading = false;
                state.skillsAPIData = action.payload;
            })
            .addCase(fetchSkills.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch skills";
            })
            .addCase(createSkill.fulfilled, (state, action) => {
                state.skills.push(action.payload);
            })
            .addCase(updateSkill.fulfilled, (state, action) => {
                const index = state.skills.findIndex(
                    (skill) => skill.id === action.payload.id
                );
                if (index !== -1) {
                    state.skills[index] = action.payload;
                }
            })
            .addCase(deleteSkill.fulfilled, (state, action) => {
                state.skills = state.skills.filter(
                    (skill) => skill.id !== action.payload
                );
            })
            .addMatcher(
                (
                    action
                ): action is ReturnType<
                    | typeof createSkill.rejected
                    | typeof updateSkill.rejected
                    | typeof deleteSkill.rejected
                > =>
                    [
                        createSkill.rejected.type,
                        updateSkill.rejected.type,
                        deleteSkill.rejected.type,
                    ].includes(action.type),
                (state, action) => {
                    state.error = action.payload as string;
                }
            );
    },
});

// export { skillsSlice };

export const { addSkill, updateSkillState, deleteSkillState, getSkillsState } =
    skillsSlice.actions;

export default skillsSlice.reducer;
