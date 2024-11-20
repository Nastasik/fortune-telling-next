
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './HomePage.module.scss';
import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { Page } from '@shared/ui/Page';
import { Text } from '@shared/ui/Text';

export const HomePage = () => {
    return (
        <Page data-testid="HomePage" className={cls.btn}>
            <Text className={cls.title} title={'главная страница'} />
            <div className={classNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
            </div>
        </Page>
    );
};