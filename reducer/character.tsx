import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICharacterData } from '../interface';
import { castErrorToString } from '../utils/error';

const initialState: ICharacterData = {
  characters: [],
  pagination: 1,
  loading: false,
  error: false,
};

export const fetchCharacter = createAsyncThunk(
  'home/character',
  async (arg: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${arg}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(castErrorToString(err));
    }
  },
);

const characterDataSlice = createSlice({
  name: 'home/character',
  initialState,
  extraReducers: {
    [fetchCharacter.pending as any]: (state) => {
      return { ...state, loading: true };
    },
    [fetchCharacter.rejected as any]: (state, action) => {
      return { ...state, error: action.error.message, loading: false };
    },
    [fetchCharacter.fulfilled as any]: (state, action) => {
      return {
        ...state,
        loading: false,
        characters: action.payload.results,
        pagination: action.payload.info.pages,
      };
    },
  },

  reducers: {},
});

export default characterDataSlice.reducer;
