import { createAsyncThunk } from '@reduxjs/toolkit';
import { CardType } from '../../types/cardsSpreadSchema';
import { ThunkConfig } from '@app/_providers/StoreProvider';

type FetchCardsProps = {
    cardsCount: number
}
export const fetchCards = createAsyncThunk<
    CardType[], //result
    FetchCardsProps, //props
    ThunkConfig<string>
    >(
        'cardsSpread/fetchCards',
        async ({ cardsCount }, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<CardType[]>('/cardsList', {
                    params: {
                        cardsCount,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
