import { memo, ReactElement, ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactNode;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = memo(({ className, content, toolbar, header, sidebar }: MainLayoutProps) => {
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.navbar}>{header}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.sidebar}>{sidebar}</div>
        </div>
    );
});
