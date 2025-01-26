import { createTheme } from "@mui/material";
import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomTheme extends Theme {
        text: {
            textBlack: string;
        };
    }
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {
        text?: {
            textBlack?: string;
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
    text: {
        textBlack: '#000000de',
    }
});

