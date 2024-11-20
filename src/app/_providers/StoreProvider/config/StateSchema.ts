import {
    AnyAction, 
    EnhancedStore, Reducer, ReducersMapObject, Store, combineReducers,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { rtkApi } from '@shared/api/rtkApi';
import { CardsSpreadSchema } from '@features/CardsSpread/model/types/cardsSpreadSchema';

export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    // // async reducers:
    cardsSpread?: CardsSpreadSchema
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => StateSchema;//ReturnType<typeof combineReducers>//CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
