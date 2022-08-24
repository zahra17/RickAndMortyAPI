import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ILocationData } from '../interface';
import { castErrorToString } from '../utils/error';

const initialState: ILocationData = {
  locations: [],
  loading: false,
  error: false,
};

export const fetchLocation = createAsyncThunk(
  'home/location',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/location`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(castErrorToString(err));
    }
  },
);

const locationDataSlice = createSlice({
  name: 'home/location',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLocation.pending as any]: (state) => {
      return { ...state, loading: true };
    },
    [fetchLocation.rejected as any]: (state, action) => {
      return { ...state, error: action.error.message, loading: false };
    },
    [fetchLocation.fulfilled as any]: (state, action) => {
      return { ...state, loading: false, locations: action.payload.results };
    },
  },
});

export default locationDataSlice.reducer;
