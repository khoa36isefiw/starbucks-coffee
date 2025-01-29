import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function DefaultLayout() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            {/* Header */}
            <Header />

            <main>
                <Outlet />
            </main>
            <footer>ahihihi</footer>
        </Box>
    );
}

export default DefaultLayout;
