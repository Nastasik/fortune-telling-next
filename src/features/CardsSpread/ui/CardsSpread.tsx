import { Card } from '@shared/ui/Card';
import { CardDescription } from '@shared/ui/CardDescription';
import React from 'react';
import { useSelector } from 'react-redux';
import { getCardsSpreadCards } from '../model';
import cls from './CardsSpread.module.scss';
import { Button } from '@shared/ui/Button';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { fetchCards } from '../model/services/fetchCards/fetchCards';
import { useThrottle } from '@shared/lib/hooks/useThrottle';

type CardsSpreadProps = {
  labels: string[],
  cardsCount: number
}

export const CardsSpread = ({ labels, cardsCount }: CardsSpreadProps) => {
  const cards = useSelector(getCardsSpreadCards);

  const dispatch = useAppDispatch();
   
  const handleClick = useThrottle(async() => {
      await dispatch(fetchCards({ cardsCount }))
  }, 3000)

  return <div className={cls.CardsSpread}>
            <Button onClick={handleClick}>Начать расклад</Button>
            <div className={cls.cards}>
              <div className={cls.cardsList}>
                {labels.map((label, index) => <Card key={index} src={cards[index] ? cards[index].src : undefined}/>) }
              </div>
              {cards ? cards.map(({src, description, cardName }, index) => <CardDescription key={index} src={src} title={labels[index]} description={description} cardName={cardName} />) : null}
            </div>
          </div>
};