import { previousData } from '../data/subMenu';

import { BoxLeft107 } from '../components/ui/CustomBox/BoxLeft107';
import SubMenu from '../components/ui/SubMenu';

function PreviousPage() {
    return (
        <BoxLeft107
            sx={{
                ml: { xs: 0, md: '107px' },
                px: { xs: 3, sm: 3, md: 0 },
            }}
        >
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
