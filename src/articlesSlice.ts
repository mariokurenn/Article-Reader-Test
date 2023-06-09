import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "./App";

interface ArticlesState {
  displayedArticles: Article[];
  remainingArticles: Article[];
}

const initialState: ArticlesState = {
  displayedArticles: [],
  remainingArticles: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setDisplayedArticles: (state, action: PayloadAction<Article[]>) => {
      state.displayedArticles = action.payload;
    },
    setRemainingArticles: (state, action: PayloadAction<Article[]>) => {
      state.remainingArticles = action.payload;
    },
  },
});

export const { setDisplayedArticles, setRemainingArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
