import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newList: [],
    loading: false,
    error: false,
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearNewLsit: () => {
      state.newsList = [];
    }
  }
});

export const {} = newsSlice.actions

export default newsSlice.reducer
