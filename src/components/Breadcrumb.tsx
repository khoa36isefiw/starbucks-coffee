import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ActiveLastBreadcrumb() {
    const navigate = useNavigate();
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
            <Link
                underline="hover"
                color="text.primary"
                href="/material-ui/getting-started/installation/"
            >
                Core
            </Link>
        </Breadcrumbs>
    );
}
