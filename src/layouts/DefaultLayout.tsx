import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function DefaultLayout() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            {/* Header */}
            <Header />

            <main style={{ height: '150vh' }}>
                <Outlet />
            </main>

            <Footer />
        </Box>
    );
}

export default DefaultLayout;
