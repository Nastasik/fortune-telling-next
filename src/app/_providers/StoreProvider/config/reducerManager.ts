
import {
    Reducer, ReducersMapObject, UnknownAction, combineReducers,
} from '@reduxjs/toolkit';
import {
    MountedReducers, ReducerManager, StateSchema, StateSchemaKey,
} from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers };
    const mountedReducers: MountedReducers = {};
    // Create the initial combinedReducer
    let combinedReducer = combineReducers(reducers);

    // An array which is used to delete state keys when reducers are removed
    let keysToRemove: Array<StateSchemaKey> = [];

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        // The root reducer function exposed by this object
        // This will be passed to the store
        reduce: (state: StateSchema, action: UnknownAction) => {
        // If any reducers have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key: StateSchemaKey) => delete state[key]);
                keysToRemove = [];
            }

            // Delegate to the combined reducer
            //@ts-ignore
            return combinedReducer(state, action);
        },

        // Adds a new reducer with the specified key
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            // Add the reducer to the reducer mapping
            //@ts-ignore
            reducers[key] = reducer;
            //@ts-ignore
            mountedReducers[key] = true;
            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },

        // Removes a reducer with the specified key
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            // Remove it from the reducer mapping
            delete reducers[key];

            // Add the key to the list of keys to clean up
            keysToRemove.push(key);
            //@ts-ignore
            mountedReducers[key] = false;
            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },
    };
}
