import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, AppThunk} from '../store';
import {fetchCount} from './calculateAPI';
export interface CalculteState {
    reuslt: number;
    loading: boolean;
  }
  const initialState: CalculteState = {
    reuslt: 0,
    loading: false,
  };

  export const calculateSlice = createSlice({
    name: 'calculate',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        Addition: (state, action: PayloadAction<{ num1: number, num2: number }>) => {
            state.reuslt = action.payload.num1 + action.payload.num2;
            // state.loading = true;
            // setTimeout(() => {
            // state.loading = false;
            // }, 2000); 
        },
        
        Subtraction: (state, action: PayloadAction<{ num1: number, num2: number }>) => {
            state.reuslt = action.payload.num1 - action.payload.num2;
            // state.loading = true;
            // setTimeout(() => {
            // state.loading = false;
            // }, 2000); 
        },

        Multiplication: (state, action: PayloadAction<{ num1: number, num2: number }>) => {
            state.reuslt = action.payload.num1 * action.payload.num2;
            // state.loading = true;
            // setTimeout(() => {
            // state.loading = false;
            // }, 2000); 
        },

        Division: (state, action: PayloadAction<{ num1: number, num2: number }>) => {
            state.reuslt = action.payload.num1 / action.payload.num2;
            // state.loading = true;
            // setTimeout(() => {
            // state.loading = false;
            // }, 2000); 
        },
    },

    
  });
  export const {Addition, Subtraction, Multiplication, Division} = calculateSlice.actions;
  export const selectResult = (state: RootState) => state.calculate.reuslt;
  export default calculateSlice.reducer;