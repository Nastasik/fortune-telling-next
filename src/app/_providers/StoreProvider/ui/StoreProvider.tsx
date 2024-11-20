'use client'
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';
import { AppStore } from '../types';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>; // для сторибука
}

export const StoreProvider = ({
    children,
    initialState,
    asyncReducers,
}: StoreProviderProps) => {
    const storeRef = useRef<AppStore>()

    if(!storeRef.current) {
        storeRef.current = createReduxStore(
            initialState as StateSchema,
            asyncReducers as ReducersMapObject<StateSchema>,
        );
    }

    return (<Provider store={storeRef.current}>{children}</Provider>);
};
