import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer, // key: reducer
  },
});

export default store;
