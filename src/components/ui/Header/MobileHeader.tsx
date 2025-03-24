import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ModalProps } from '../Modal';
import { Close } from '@mui/icons-material';
import { Divider, IconButton } from '@mui/material';
import { theme } from '../../../theme/theme';
import { HEADER_DATA } from '../../util/constants';
import { OButton } from '../Button/OButton';
import { CButton } from '../Button/CButton';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function MobileMenu({ open, onHandleClose }: ModalProps) {
    const navigate = useNavigate();
    const handleNavigate = (path: string) => {
        navigate(path);
        onHandleClose();
    };
    return (
        <React.Fragment>
            <Dialog
                fullScreen={true}
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={onHandleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    height: '100%',
                    width: '80%',
                }}
                PaperProps={{
                    sx: {
                        position: 'fixed',
                        right: 0,
                        top: 0,
                        height: '100%',
                        width: '80%',
                        margin: 0,
                        borderRadius: 0,
                    },
                }}
            >
                <DialogContent>
                    <IconButton
                        sx={{ position: 'absolute', top: '1%', right: '5%' }}
                        onClick={onHandleClose}
                    >
                        <Close sx={{ color: theme.color.buttonColor }} />
                    </IconButton>

                    {HEADER_DATA.map((page) => (
                        <Button
                            disableTouchRipple
                            key={page.link}
                            sx={{
                                my: 2,
                                borderRadius: 0,
                                letterSpacing: '1px',
                                bgcolor: 'transparent',
                                display: 'block',
                                textTransform: 'initial',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                transition: 'all 0.5s',

                                fontWeight: 600,
                                color: '#000',
                            }}
                            onClick={() => handleNavigate(page.link)}
                        >
                            {page.page}
                        </Button>
                    ))}
                    <Divider sx={{ borderBottomWidth: 2, my: 2 }} />
                    <OButton
                        text={'Sign in'}
                        customStyle={{
                            mr: '16px',
                            fontWeight: 'bold',
                            color: 'black',

                            '&:hover': {
                                bgcolor: theme.color.hoverButtonColorOutlined,
                            },
                        }}
                    />
                    <CButton
                        text={'Join now'}
                        customStyle={{
                            mr: '16px',
                            fontWeight: 'bold',
                            padding: '16px',
                            '&:hover': {
                                bgcolor: '#000000b3',
                            },
                        }}
                    />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
