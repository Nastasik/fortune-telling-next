'use client'
import { memo } from 'react';
import { Page } from '@shared/ui/Page';
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader';
import { CardsSpreadReducer } from '@features/CardsSpread/model/slices/cardsSpreadSlice';
import { CardsSpread } from '@features/CardsSpread/ui/CardsSpread';
import { Text, TextAlign, TextSize, TextTheme } from '@shared/ui/Text';

const reducersList: ReducersList = {
    cardsSpread: CardsSpreadReducer,
};

const LABELS_LIST = ['Текущая ситуация', 'Ближайшее будущее', 'Мысли', 'Чувства', 'Подсознание', 'Более отдаленное будущее', 'Судьба', 'Совет', 'Судьба'];
const CARDS_COUNT = 9

export const OtherCards = memo(() => {
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducersList}>
            <Page data-testid="OtherCards">
                <Text title="Детальный анализ отношений" theme = {TextTheme.PRIMARY} size={TextSize.XL} align={TextAlign.RIGHT}/>
                <CardsSpread labels={LABELS_LIST} cardsCount={CARDS_COUNT} />  
            </Page>
        </DynamicModuleLoader>
    );
});


