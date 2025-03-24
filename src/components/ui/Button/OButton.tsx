import { Button } from '@mui/material';
import { theme } from '../../../theme/theme';
import { IButtonProps } from '../../../interfaces/IButton';
import React from 'react';

export const OButton = ({ text, customStyle = {}, onHandleClick, endIcon }: IButtonProps) => {
    return (
        <React.Fragment>
            {text && (
                <Button
                    disableTouchRipple
                    variant="outlined"
                    onClick={onHandleClick}
                    sx={{
                        height: '30px',
                        borderRadius: '20px',
                        borderColor: '#000',
                        textTransform: 'initial',
                        textAlign: 'center',
                        // padding: '7px 16px',
                        color: theme.color.textBlack,
                        '&:hover': {
                            color: theme.palette.primary.main,
                            cursor: 'pointer',
                        },
                        ...customStyle,
                    }}
                    endIcon={endIcon}
                >
                    {text}
                </Button>
            )}
        </React.Fragment>
    );
};
