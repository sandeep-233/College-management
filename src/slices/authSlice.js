import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    memberData: null,
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setMemberData(state, value) {
            state.memberData = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
        setToken(state, value){
            state.token = value.payload;
        },
    },
});


export const {setToken, setMemberData, setLoading} = authSlice.actions;
export default authSlice.reducer;