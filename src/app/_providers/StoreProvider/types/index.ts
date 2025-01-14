import { createReduxStore } from '../config/store';

// Infer the type of makeStore
export type AppStore = ReturnType<typeof createReduxStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']