import { Backdrop, Box, Fade, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    // borderRadius: 2,
    p: 4,
};

function Loading() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={true}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={true}>
                    <Box sx={style}>
                        <iframe
                            src="https://lottie.host/embed/bc347e5e-be96-48be-9e39-973fc1dcb747/wVntufnYoZ.lottie"
                            style={{
                                height: '300px',
                                width: '300px',
                                border: 'none',
                                borderStyle: 'none',
                            }}
                            title="Loading"
                        ></iframe>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}
export default Loading;
