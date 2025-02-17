import { Box } from '@mui/material';
import { previousData } from '../data/subMenu';
import SubMenu from '../components/SubMenu';
import { BoxLeft107 } from '../components/BoxLeft107';

function PreviousPage() {
    return (
        <BoxLeft107>
            <SubMenu
                pageTitle={previousData.pageTitle}
                image={previousData.image}
                title={previousData.title}
                content={previousData.content}
            />
        </BoxLeft107>
    );
}

export default PreviousPage;
