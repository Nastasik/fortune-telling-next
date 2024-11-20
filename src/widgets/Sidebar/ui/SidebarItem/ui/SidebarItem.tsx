// 'use client'
import { classNames } from '@shared/lib/classNames/classNames';
import React, { FC, memo } from 'react';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink';
import { SidebarItemType } from '@widgets/Sidebar/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({
    item: {
        Icon, title, path,
    }, collapsed
}: SidebarProps) => {
    return (
        <AppLink
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [])}
            theme={AppLinkTheme.PRIMARY}
            href={path}
        >
        <>
            <div className={classNames(cls.icon)}><Icon /></div>
            <span className={classNames(cls.link)}>{title}</span></>
        </AppLink>
    );
});
