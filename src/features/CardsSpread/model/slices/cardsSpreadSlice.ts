import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { CardsSpreadSchema, CardType } from '../types/cardsSpreadSchema';
import { fetchCards } from '../services/fetchCards/fetchCards';

const cardsSpreadSlice = createSlice({
    name: 'cardsSpread',
    initialState: <CardsSpreadSchema>({
        isLoading: false,
        error: undefined,
        cards: [],
        cardsCount: 0,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCards.fulfilled, (
                state,
                { payload }: PayloadAction<CardType[]>,
            ) => {
                state.isLoading = false;
                state.cards = payload;
            })
            .addCase(fetchCards.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { reducer: CardsSpreadReducer } = cardsSpreadSlice;
