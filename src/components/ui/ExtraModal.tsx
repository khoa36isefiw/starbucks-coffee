import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { extraModalData } from '../../data/rewards';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { theme } from '../../theme/theme';
import { OButton } from './Button/OButton';
import 'animate.css';
import { IconButtonExtra } from './Button/IconButtonExtra';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};

export default function ExtraModal({
    open,
    handleClose,
    index,
}: {
    open: boolean;
    handleClose: () => void;
    index: number;
}) {
    const dataSelected = extraModalData[index];
    const itemsPerPage = 1; // the number of items per page
    const [currentPage, setCurrentPage] = React.useState(1); // the current page number

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = dataSelected.slice(startIndex, endIndex);

    const totalPages = Math.ceil(dataSelected.length / itemsPerPage); // the total pages will have
    console.log('paginatedData: ', paginatedData);
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
        console.log('currentPage: ', currentPage);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSelectPage = (page: number) => {
        setCurrentPage(page);
    };

    console.log({ currentPage });

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <IconButton
                    disableTouchRipple
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        fontSize: '24px',
                        color: '#000',
                        '&:hover': {
                            bgcolor: 'transparent',
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>
                {paginatedData.map((data, dataIndex) => {
                    return (
                        <Box
                            key={dataIndex}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: '400px',
                                transition: 'all 0.3s',
                            }}
                        >
                            <Avatar
                                src={data.image}
                                alt={data.title}
                                sx={{ height: '240px', width: '100%', objectFit: 'cover' }}
                            />
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                sx={{ mt: 2, fontWeight: 'bold' }}
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2, textAlign: 'center' }}
                            >
                                {data.content}
                            </Typography>
                        </Box>
                    );
                })}

                {/* Pagination */}
                {/* render page from totalPages */}

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 2,
                    }}
                >
                    <IconButtonExtra
                        icon={
                            <NavigateBeforeIcon
                                sx={{
                                    fontSize: '32px',
                                    display: currentPage === 1 ? 'none' : 'block',
                                }}
                            />
                        }
                        onHandleClick={handlePrevPage}
                    />
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                height: 14,
                                width: 14,
                                bgcolor:
                                    index + 1 === currentPage
                                        ? theme.color.rewardTextColor
                                        : '#00000094',
                                borderRadius: '50%',
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={() => handleSelectPage(index + 1)}
                        />
                    ))}
                    <IconButtonExtra
                        icon={
                            <NavigateNextIcon
                                sx={{
                                    fontSize: '32px',
                                    display: currentPage === totalPages ? 'none' : 'block',
                                }}
                            />
                        }
                        onHandleClick={handleNextPage}
                    />
                    <OButton
                        onHandleClick={handleClose}
                        text={'Ok'}
                        customStyle={{
                            display: currentPage === totalPages ? 'flex' : 'none',
                            fontWeight: 'bold',
                            '&:hover': {
                                bgcolor: '#ccc',
                            },
                        }}
                    />
                </Box>
            </Box>
        </Modal>
    );
}
