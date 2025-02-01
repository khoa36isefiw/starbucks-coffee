import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

function DefaultLayout() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            {/* Header */}
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </Box>
    );
}

export default DefaultLayout;
