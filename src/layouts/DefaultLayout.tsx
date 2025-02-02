import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function DefaultLayout() {
    return (
        <Box sx={{ overflow: 'hidden', minHeight: '150vh' }}>
            {/* Header */}
            <Header />

            <Box>
                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
}

export default DefaultLayout;
