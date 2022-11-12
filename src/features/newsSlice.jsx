import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsList: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk("getNews", async () => {
  const API_KEY = "0385f490e28440548f50015810157970";
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  try {
    const { data } = await axios(url);
    return data.articles;
  } catch (error) {
    console.log(error);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getnews.pending, (state, actions) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.newsList = payload;
        loading = false;
      })
      .addCase(getNews.rejected, (state) => {
        state.newsList = payload;
        state.error = false;
      });
  },
});

export const { clearNewList } = newsSlice.actions;

export default newsSlice.reducer;
