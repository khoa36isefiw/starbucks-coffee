import { createTheme } from "@mui/material";
import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomTheme extends Theme {
        color: {
            textBlack: string;
            hoverButtonColorOutlined: string;
            hoverButtonColorContained: string;
            buttonColor: string;

        };
    }
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {
        color?: {
            textBlack?: string;
            hoverButtonColorOutlined?: string;
            hoverButtonColorContained?: string;
            buttonColor: string;
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
        hoverButtonColorOutlined: '#e5e5e5',
        hoverButtonColorContained: '#000000b3',
        buttonColor: '#00000094',

    }
});

