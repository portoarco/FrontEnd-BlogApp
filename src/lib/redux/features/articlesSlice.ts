import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IArticle {
  newsTitle: string;
  badgeTitle: string;
  pictureSrc: string;
  thumbnailSrc: string;
  leadArticle: string;
  content: string;
  name: string;
  date:string;
}

interface IArticleState {
    articles:IArticle[];
}

const initialState:IArticleState = {
    articles: [],
}

const articleSlice = createSlice({
    name:"article",
    initialState:initialState,
    reducers : {
        addArticle: (state,action:PayloadAction<IArticle>) => {
            state.articles.push(action.payload)
        },
    },
});

export const {addArticle} = articleSlice.actions;
export default articleSlice.reducer


