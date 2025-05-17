import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visited: [],
};

const visitedSlice = createSlice({
  name: 'visited',
  initialState,
  reducers: {
    addVisited(state, action) {
      const title = action.payload;
      state.visited = [
        title,
        ...state.visited.filter((item) => item !== title),
      ].slice(0, 10); 
    },
  },
});

export const { addVisited } = visitedSlice.actions;
export default visitedSlice.reducer;
