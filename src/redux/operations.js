import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from '@reduxjs/toolkit';

const auth = getAuth();

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
            return {
                email: res.user.email,
                id: res.user.uid,
                token: res.user.accessToken
            };
        } catch (error) {
            const errorMessage = error.message;
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
            return {
                email: res.user.email,
                id: res.user.uid,
                token: res.user.accessToken
            };
        } catch (error) {
            const errorMessage = error.message;
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)
