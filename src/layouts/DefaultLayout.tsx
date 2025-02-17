import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MenuHeader from '../components/Header/MenuHeader';

function DefaultLayout() {
    const location = useLocation();
    // only show if path name includes /menu and not include /menu/feature
    const showMenuHeader =
        location.pathname.includes('/menu') && !location.pathname.includes('/menu/feature');
    return (
        <Box sx={{ minHeight: '150vh' }}>
            {/* Header */}
            <Header />
            {showMenuHeader && <MenuHeader />}

            <Box>
                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
}

export default DefaultLayout;
