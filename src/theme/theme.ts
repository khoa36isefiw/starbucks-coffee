import { createTheme } from "@mui/material";
import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomTheme extends Theme {
        color: {
            textBlack: string;
            hoverButtonColor: string;
        };
    }
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {
        color?: {
            textBlack?: string;
            hoverButtonColor?: string;
        };
    }
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#00754a',
        }
    },
    color: {
        textBlack: '#000000de',
        hoverButtonColor: '#e5e5e5'
    }
});

