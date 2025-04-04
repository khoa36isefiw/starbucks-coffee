import { Breadcrumbs, Link } from '@mui/material';
import { useLocationContext } from '../../../context/LocationContext';

function CoffeeDetailBreadcrumb() {
    const { locations } = useLocationContext();

    return (
        <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ ml: { xs: 0, lg: '107px' }, my: 2, px: { xs: 3 } }}
        >
            <Link underline="hover" color="text.primary" href="/menu" sx={{ fontSize: '14px' }}>
                Menu
            </Link>

            <Link underline="hover" color="text.primary" href={`/`} sx={{ fontSize: '14px' }}>
                {locations.path}
            </Link>

            <Link underline="hover" color="text.primary" href={`/`} sx={{ fontSize: '14px' }}>
                {locations.title}
            </Link>
        </Breadcrumbs>
    );
}

export default CoffeeDetailBreadcrumb;
