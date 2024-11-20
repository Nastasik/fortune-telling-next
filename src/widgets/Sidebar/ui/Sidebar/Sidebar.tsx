// "use client"
import { classNames } from '@shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';
import { SidebarItemType } from '@widgets/Sidebar/types/sidebar';
import { VStack } from '@shared/ui/Stack';
import { SidebarItem } from '../SidebarItem/ui/SidebarItem';
import cls from './Sidebar.module.scss';
import { getSidebarItemsList } from '@widgets/Sidebar/utils/getSidebarItemsList';
import { useParams } from 'next/navigation';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const params = useParams()
    console.log(params, 'PARAM2')

    const list = useMemo(() => getSidebarItemsList(params?.lang as string || 'en'), [params])
    
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-btn"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND}
                size={ButtonSize.XL}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" justify='center' gap="8" className={classNames(cls.items)}>
                {list.map((item: SidebarItemType) => (
                    <SidebarItem item={item} collapsed={collapsed} key={item.path} />
                ))}
            </VStack>   
        </aside>
    );
});
