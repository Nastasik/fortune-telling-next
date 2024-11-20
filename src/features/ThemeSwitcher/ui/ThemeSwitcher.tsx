"use client"
import React, { memo, useCallback, useContext } from 'react';
import { Theme } from '@app/_providers/ThemeProvider';
import { Select } from '@shared/ui/Select';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '@app/_providers/ThemeProvider/lib/ThemeContext';

const THEMES = [{
    value: Theme.DARK,
    content: 'DARK'
}, {
    value: Theme.LIGHT,
    content: 'LIGHT'
}, {
    value: Theme.PINK,
    content: 'BRIGHT'
}]
export const ThemeSwitcher = memo(() => {
    const { theme, setTheme } = useContext(ThemeContext);

    const onToggleTheme = useCallback((newTheme: Theme) => {
        if(setTheme) {
            setTheme(newTheme)
            document.body.className = newTheme;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
    }, [])

    return (
        <Select options={THEMES}
            value={theme}
            onChange={onToggleTheme}
            label='label'
            readonly={false} />
    );
});
