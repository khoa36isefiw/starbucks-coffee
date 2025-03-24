import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import MenuHeader from '../ui/Header/MenuHeader';
import RewardHeader from '../ui/Header/RewardHeader';
import Header from '../ui/Header/Header';
import Footer from '../ui/Footer/Footer';

function DefaultLayout() {
    const location = useLocation();
    // only show if path name includes /menu and not include /menu/feature
    const showMenuHeader =
        location.pathname.includes('/menu') && !location.pathname.includes('/menu/feature');
    const showRewards = location.pathname.includes('/rewards');
    return (
        <Box sx={{ minHeight: '150vh' }}>
            {/* Header */}
            <Header />
            {showMenuHeader && <MenuHeader />}
            {showRewards && <RewardHeader />}

            <Box>
                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
}

export default DefaultLayout;
