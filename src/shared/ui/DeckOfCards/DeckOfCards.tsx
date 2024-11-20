import { classNames } from '@shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './DeckOfCards.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}


export const DeckOfCards = memo(() => (
    <Button
        className={classNames(cls.DeckOfCards, { [cls.max]: max }, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </Button>
));
