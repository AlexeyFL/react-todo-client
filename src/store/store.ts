import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import tasksReducer from './tasks/taskSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
