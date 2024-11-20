'use client'
import { memo } from 'react';
import cls from './FortuneCards.module.scss';
import { Page } from '@shared/ui/Page';
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader';
import { CardsSpreadReducer } from '../../../features/CardsSpread/model/slices/cardsSpreadSlice';
import { CardsSpread } from '@features/CardsSpread/ui/CardsSpread';
import { Text, TextAlign, TextSize, TextTheme } from '@shared/ui/Text';

const reducersList: ReducersList = {
    cardsSpread: CardsSpreadReducer,
};

const LABELS_LIST = ['Текущая ситуация', 'Ближайшее будущее', 'Мысли', 'Чувства', 'Подсознание', 'Более отдаленное будущее', 'Судьба', 'Совет'];
const CARDS_COUNT = 8

export const FortuneCards = memo(() => {
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducersList}>
            <Page data-testid="FortuneCards" className={cls.btn}>
                <Text title="Гадание на судьбу" theme = {TextTheme.PRIMARY} size={TextSize.XL} align={TextAlign.RIGHT}/>
                <CardsSpread labels={LABELS_LIST} cardsCount={CARDS_COUNT} />  
            </Page>
        </DynamicModuleLoader>
    );
});
