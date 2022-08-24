import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IEpisodeData } from '../interface';
import { castErrorToString } from '../utils/error';

const initialState: IEpisodeData = {
  episodes: [],
  loading: false,
  error: false,
};

export const fetchEpisode = createAsyncThunk(
  'home/episode',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(castErrorToString(err));
    }
  },
);

const episodeDataSlice = createSlice({
  name: 'home/episode',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEpisode.pending as any]: (state) => {
      return { ...state, loading: true };
    },
    [fetchEpisode.rejected as any]: (state, action) => {
      return { ...state, error: action.error.message, loading: false };
    },
    [fetchEpisode.fulfilled as any]: (state, action) => {
      return { ...state, loading: false, episodes: action.payload.results };
    },
  },
});

export default episodeDataSlice.reducer;
