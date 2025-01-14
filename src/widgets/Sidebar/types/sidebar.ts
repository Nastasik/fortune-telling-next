import React from 'react';

export interface SidebarItemType {
    path: string;
    title: string;
    Icon: React.VFC<React.SVGProps<SVGElement>>;
    authOnly?: boolean;
}
