import { useState } from 'react';

export const useAdminModal = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState<number | null>(null);

    const handleOpen = (id: number | null) => {
        setOpen(true);
        if (id !== null) {
            setIndex(id);
        }
    };

    const handleClose = () => setOpen(false);
    return {
        open,
        handleOpen,
        handleClose,
        index,
    };
};
