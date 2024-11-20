import { classNames } from '@shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CardDescription.module.scss';
import { Card, CardSize } from '../Card/Card';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardDescriptionProps {
    className?: string;
    title: string;
    cardName?: string;
    description?: string;
    src?: string;
}

export const CardDescription = memo(({
   src, className, title, description, cardName
}: CardDescriptionProps) => (
    <div className={classNames(cls.CardDescription, {}, [className])}>
        <h1 className={cls.title}>{title}</h1>
        <div className={cls.wrapper}>
            <Card
                src={src}
                size={CardSize.NORMAL}/>
            <div className={cls.textWrapper}>
                <h2 className={cls.cardName}>{cardName}</h2>
                <p className={cls.description}>{description}</p>
            </div>
        </div>
    </div>
));
