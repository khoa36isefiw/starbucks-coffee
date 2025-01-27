import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import HeaderV2 from '../components/HeaderV2';

function DefaultLayout() {
    return (
        <Box>
            {/* Header */}
            {/* <Header /> */}
            <HeaderV2 />

            <main>
                <Outlet />
            </main>
            <footer>ahihihi</footer>
        </Box>
    );
}

export default DefaultLayout;
