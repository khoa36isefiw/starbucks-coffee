import { Box } from '@mui/material';
import MenuContent from '../components/ui/CoffeeMenu/MenuContent';
import PageTitle from '../components/ui/PageTitle';

function Menu() {
    return (
        <Box sx={{ minHeight: '150vh', overflow: 'visible', display: 'block' }}>
            {/* <MenuHeader /> */}
            <PageTitle title={'Menu'} />
            <MenuContent />
        </Box>
    );
}

export default Menu;
