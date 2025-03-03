import { createTheme } from "@mui/material";
import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomTheme extends Theme {


        color: {
            textBlack: string;
            hoverButtonColorOutlined: string;
            hoverButtonColorContained: string;
            buttonColor: string;
            shadowColor: string;
            hoverIconFooter: string;
            rewardColor?: string;
            rewardTextColor?: string;
            rewardTabBg?: string;
            rewardContainer?: string;
            policyBg?: string;
            giftCardBg?: string;


        };
    }
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {

        color?: {
            textBlack?: string;
            hoverButtonColorOutlined?: string;
            hoverButtonColorContained?: string;
            buttonColor?: string;
            shadowColor?: string;
            hoverIconFooter?: string;
            rewardColor?: string;
            rewardTextColor?: string;
            rewardTabBg?: string;
            rewardContainer?: string;
            policyBg?: string;
            giftCardBg?: string;


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
        shadowColor: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        hoverIconFooter: '#C2C0C0FF',
        rewardColor: '#188e5a',
        rewardTextColor: '#036140',
        rewardTabBg: '#f1f7f5',
        rewardContainer: '#d4e9e2',
        policyBg: '#f9f9f9',
        giftCardBg: '#d4e9e2'
    }
});

