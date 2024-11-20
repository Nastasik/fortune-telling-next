'use client'
import { memo } from 'react';
import { Page } from '@shared/ui/Page';
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader';
import { CardsSpread } from '@features/CardsSpread/ui/CardsSpread';
import { CardsSpreadReducer } from '@features/CardsSpread/model/slices/cardsSpreadSlice';
import { Text, TextAlign, TextSize, TextTheme } from '@shared/ui/Text';

const reducersList: ReducersList = {
    cardsSpread: CardsSpreadReducer,
};
const LABELS_LIST = ['Мысли', 'Чувства', 'Подсознание'];
const CARDS_COUNT = 3

export const RelationshipsCards = memo(() => {
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducersList}>
            <Page data-testid="RelationshipsCards" >
                <Text title="Гадание на отношения" theme = {TextTheme.PRIMARY} size={TextSize.XL} align={TextAlign.RIGHT}/>
                <CardsSpread labels={LABELS_LIST} cardsCount={CARDS_COUNT} />  
            </Page>
        </DynamicModuleLoader>
    );
});
