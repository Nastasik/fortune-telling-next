import MainIcon from '@shared/assets/icons/main.svg';
import AboutIcon from '@shared/assets/icons/about.svg';
import ArticleIcon from '@shared/assets/icons/cards.svg';
import { getRouteCards, getRouteMain } from '@shared/const/router';

export const getSidebarItemsList = (lang: string) => [
    {
        path: getRouteMain(lang),
        Icon: MainIcon,
        title: 'Home',
    },{
        path: getRouteCards(lang, '1'),
        Icon: MainIcon,
        title: 'гадание на отношения',
    },
    {
        path: getRouteCards(lang, '2'),
        Icon: AboutIcon,
        title: 'гадание на судьбу',
    },
    {
        path: getRouteCards(lang, '3'),
        Icon: ArticleIcon,
        title: 'детальный анализ отношений',
        authOnly: true,
    },
];