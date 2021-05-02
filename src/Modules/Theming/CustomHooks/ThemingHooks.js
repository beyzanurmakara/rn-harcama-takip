import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeActions, ThemeSelectors } from '../Redux/ThemingRedux';
import { ThemeModes } from '../ThemingConstants';
import { lightColors, darkColors } from '../Colors';
import { Texts, useLocale, useLocalization } from '../../Localization';

export function useTheme() {
    return useSelector(ThemeSelectors.themeMode);
}

export function useThemedColors() {
    const themeMode = useTheme();

    const themedColors = useMemo(() => {
        const colors = themeMode === ThemeModes.light ? lightColors : darkColors;
        return colors;
    }, [themeMode]);

    return themedColors;
}

export function useThemedStyles(getStyles, otherParams) {
    const colors = useThemedColors();

    const themedStyles = useMemo(() => {
        const styles = getStyles(colors, otherParams);
        return styles;
    }, [colors, getStyles, otherParams]);

    return themedStyles;
}

export function useThemedOption(...options) {
    const themeMode = useTheme();
    switch (themeMode) {
        case ThemeModes.light:
            return options[0];
        case ThemeModes.dark:
            return options[1] || options[0];
    }
}

export function useDispatchChangeTheme() {
    const dispatch = useDispatch();
    return key => dispatch(ThemeActions.changeTheme({themeMode: key}));
}

export function useThemeOptions(){
    const locale = useLocale();
    const loc = useLocalization();

    const themeOptions = useMemo(()=>{
        return [
            {
                key:ThemeModes.dark,
                title:loc.t(Texts.dark),
            },
            {
                key:ThemeModes.light,
                title:loc.t(Texts.light),
            }
        ]
    },[locale])
    return themeOptions;
}

export function useChangeTheme() {
    const dispatch = useDispatch();
    return (themeMode) => dispatch(ThemeActions.changeTheme(themeMode));
}