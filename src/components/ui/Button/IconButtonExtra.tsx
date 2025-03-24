import { IconButton } from "@mui/material";

export const IconButtonExtra = ({
    onHandleClick,
    icon,
}: {
    onHandleClick?: () => void;
    icon?: React.ReactNode;
}) => {
    return (
        <IconButton sx={{ padding: 0 }} onClick={onHandleClick}>
            {icon}
        </IconButton>
    );
};
