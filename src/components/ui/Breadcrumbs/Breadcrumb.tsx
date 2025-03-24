import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
// get an object
interface IActiveLastBreadcrumbProps {
    menuSelected: { [key: string]: string };
}

export default function ActiveLastBreadcrumb({ menuSelected }: IActiveLastBreadcrumbProps) {
    console.log('menuSelected: ', menuSelected);
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ fontWeight: 'bold' }}>
            <Link underline="hover" color="text.primary" href="/menu" sx={{ fontSize: '18px' }}>
                Menu
            </Link>
            {menuSelected.title && (
                <Link underline="hover" color="text.primary">
                    {menuSelected.title}
                </Link>
            )}
        </Breadcrumbs>
    );
}
