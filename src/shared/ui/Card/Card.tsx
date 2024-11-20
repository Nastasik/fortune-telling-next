import { classNames } from '@shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Card.module.scss';

export enum CardSize {
    SMALL = 'small',
    NORMAL = 'normal',
    BIG = 'big',
}

const DEFAULT_CARD_SRC = "http://localhost:8000/assets/images/_back_card_brown.png"

interface CardProps {
    className?: string;
    src?: string;
    size?: string;
}

export const Card = memo(({
   src = DEFAULT_CARD_SRC, 
   size = CardSize.BIG,
   className
}: CardProps) => (
    <img
        src={src}
    // alt='rfhnf'
        className={classNames(cls.Card, {}, [className, cls[size]])}
    />
));
