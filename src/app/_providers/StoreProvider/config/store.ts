import {
    ReducersMapObject, configureStore,
} from '@reduxjs/toolkit';
import { $api } from '@shared/api/api';
import { rtkApi } from '@shared/api/rtkApi';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce, //as Reducer<CombinedState<StateSchema>>,
        // eslint-disable-next-line no-undef
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddlewar) => getDefaultMiddlewar({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
