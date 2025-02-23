export interface IButtonProps {
    text: string;
    customStyle?: object; // another style
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onHandleClick?: () => void;
}