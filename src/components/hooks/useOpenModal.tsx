import { useState } from 'react';

export const useOpenModal = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const handleOpen = (index: number) => {
        setOpen(true);
        setIndex(index);
    };
    const handleClose = () => setOpen(false);

    return {
        open,
        handleOpen,
        handleClose,
        index,
    };
};
