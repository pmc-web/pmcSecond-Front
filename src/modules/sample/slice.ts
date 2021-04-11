import { createSlice } from '@reduxjs/toolkit';

export type SampleState = {
  get: { error: boolean; loading: boolean; data: null | string };
  post: { error: boolean; loading: boolean; data: null | string[] };
};

const initialState: SampleState = {
  get: { error: false, loading: false, data: null },
  post: { error: false, loading: false, data: null },
};

const sampleSlice = createSlice({
  name: 'sample',
  initialState: initialState as SampleState,
  reducers: {
    getRequest: (state) => {
      state.get.loading = true;
      state.get.error = false;
    },
    getSuccess: (state, action) => {
      state.get.loading = false;
      state.get.data = action.payload;
    },
    getFailure: (state) => {
      state.get.loading = false;
      state.get.error = false;
    },
    postRequest: {
      reducer: (state) => {
        state.post.loading = true;
        state.post.error = false;
      },
      prepare: (payload: string) => ({ payload }),
    },
    postSuccess: (state, action) => {
      state.post.loading = false;
      state.post.data = action.payload;
    },
    postFailure: (state) => {
      state.post.loading = false;
      state.post.error = false;
    },
  },
});

export const { actions: sampleActions, reducer: sampleReducer } = sampleSlice;

export default sampleReducer;
