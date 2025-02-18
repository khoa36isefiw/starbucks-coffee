import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { useNavigate } from 'react-router-dom';

// get an object
interface IActiveLastBreadcrumbProps {
    menuSelected: { [key: string]: string };
}

export default function ActiveLastBreadcrumb({ menuSelected }: IActiveLastBreadcrumbProps) {
    const navigate = useNavigate();
    console.log('menuSelected: ', menuSelected);
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ fontWeight: 'bold' }}>
            {/* <Typography
                onClick={() => navigate('/menu')}
                sx={{
                    '&:hover': {
                        cursor: 'pointer',
                    },
                }}
            >
                Menu
            </Typography> */}
            <Link underline="hover" color="text.primary" href="/menu" sx={{ fontSize: '18px' }}>
                Menu
            </Link>
            {menuSelected.title && (
                <Link
                    underline="hover"
                    color="text.primary"
                    // href="/material-ui/getting-started/installation/"
                >
                    {/* {(menuSelected as { title: string }).title} */}
                    {menuSelected.title}
                </Link>
            )}
        </Breadcrumbs>
    );
}
