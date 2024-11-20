// 'use client'
import React, { memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import { Text, TextTheme } from '@shared/ui/Text';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from '@features/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Text
                className={cls.appName}
                title={'App'}
                theme={TextTheme.SECONDARY}
            />
            <div className={classNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
            </div>
        </div>
    );
});
