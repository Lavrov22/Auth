import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithRedirect,
    onAuthStateChanged
} from "firebase/auth";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { app } from "../firebase/firebaseConfig";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const auth = getAuth(app);

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
            Notify.success('Register Successfull');
            return {
                email: res.user.email,
                id: res.user.uid,
                token: res.user.accessToken
            };
        } catch (error) {
            const errorMessage = error.message;
            Notify.failure(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
            Notify.success('Login Successfull');
            return{
                email: res.user.email,
                id: res.user.uid,
                token: res.user.accessToken
            };
        } catch (error) {
            const errorMessage = error.message;
            Notify.failure(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            await signOut(auth);
            Notify.info('Are you leaving already?');
        } catch (error) {
            const errorMessage = error.message;
            Notify.failure(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)


export const refreshing = createAsyncThunk(
    'auth/refreshing',
    async (user, thunkAPI) => {
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

export const googleSignIn = createAsyncThunk(
    'auth/googleSignIn',
    async (_, thunkAPI) => {
        try {
            const provider = new GoogleAuthProvider();
            const user = signInWithRedirect(auth, provider);
            return {
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }

        } catch (error) {
            const errorMessage = error.message;
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)
