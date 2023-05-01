import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { app } from "../firebase/firebaseConfig";

const auth = getAuth(app);

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
            return{
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

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            await signOut(auth);
        } catch (error) {
            const errorMessage = error.message;
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)

export const refreshing = createAsyncThunk(
    'auth/refreshing',
    async (_, thunkAPI) => {
        try {
            return new Promise(async (resolve, reject) => {
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    unsubscribe();
                    if (user) {
                        resolve({
                            email: user.email,
                            id: user.uid,
                            token: user.accessToken,
                            isLoggedIn: true,
                        });
                    } else {
                        resolve({
                            isLoggedIn: false,
                        });
                    }
                })
            });
        
        } catch (error) {
            const errorMessage = error.message;
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)

