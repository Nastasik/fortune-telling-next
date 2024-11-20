"use client"
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext';


interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || Theme.LIGHT);

    useEffect(() => {
        const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
        if (defaultTheme) {          
            // @ts-ignore
            setTheme(defaultTheme);
            document.body.className = defaultTheme;
        }
    }, []);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
