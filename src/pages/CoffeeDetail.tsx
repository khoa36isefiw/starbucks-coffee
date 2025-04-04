import { Box, Divider, Typography } from '@mui/material';
import { theme } from '../theme/theme';
import { coffeeOptions } from '../data/coffeeOptions';
import { useState } from 'react';
import { CButton } from '../components/ui/Button/CButton';
import { useLocationContext } from '../context/LocationContext';
import CoffeeDetailBreadcrumb from '../components/ui/Breadcrumbs/CoffeeDetailBreadcrumb';

function CoffeeDetail() {
    const { locations } = useLocationContext();
    console.log('locations: ', locations);
    const [sizeSelected, setSizeSelected] = useState<string>('');
    return (
        <Box>
            <CoffeeDetailBreadcrumb />
            <Box
                sx={{
                    bgcolor: theme.color.pDetailBg,
                    width: '100%',
                    height: { xs: '350px', lg: '300px' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4,
                        p: 1,
                        [theme.breakpoints.down('sm')]: {
                            flexDirection: ' column',
                            gap: 0,
                        },
                    }}
                >
                    <Box
                        component={'img'}
                        src={
                            'https://globalassets.starbucks.com/digitalassets/products/bev/BrewedCoffee.jpg?impolicy=1by1_wide_topcrop_630'
                        }
                        alt={'coffee'}
                        sx={{ maxWidth: 250 }}
                    />
                    <Box
                        sx={{
                            [theme.breakpoints.down('sm')]: {
                                textAlign: 'center',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: 18, lg: 24 },
                                color: '#fff',
                                fontWeight: 'bold',
                                maxWidth: 400,
                                [theme.breakpoints.down('sm')]: {
                                    width: 300,
                                },
                            }}
                        >
                            Featured Medium Roast - Pike Place® Roast
                        </Typography>
                        <Typography sx={{ fontSize: { xs: 14, lg: 20 }, color: '#f9f9f9' }}>
                            5 Calogries
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* Select Size */}
            <Box
                sx={{
                    my: { xs: 4, lg: 8 },
                    mx: { xs: '20px', lg: '80px' },
                }}
            >
                <Typography
                    sx={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    Size options
                </Typography>
                <Divider
                    sx={{
                        borderWidth: 2,
                        bgcolor: '#d4e9e2',
                        borderRadius: 2,
                        width: { xs: '95%', lg: 400 },
                        my: 2,
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        gap: 4,
                        my: 4,
                    }}
                >
                    {coffeeOptions.map((size, index) => (
                        <Box
                            key={index}
                            sx={{ textAlign: 'center' }}
                            onClick={() => setSizeSelected(size.size)}
                        >
                            <Box
                                sx={{
                                    border:
                                        sizeSelected === size.size
                                            ? `2px solid ${theme.color.borderDetail}`
                                            : null,
                                    bgcolor:
                                        sizeSelected === size.size ? theme.color.bgDetail : null,
                                    borderRadius: '50%',
                                    // backgroundImage: `url(${size.images.active})`,
                                    // backgroundRepeat: 'no-repeat',
                                    // backgroundPosition: 'center',
                                    width: '60px',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 1,
                                    transition:
                                        'border 0.3s ease-in-out, backgroundColor 0.3s ease-in-out',
                                }}
                            >
                                <Box
                                    component={'img'}
                                    src={
                                        sizeSelected === size.size
                                            ? size.images.active
                                            : size.images.inactive
                                    }
                                    alt={size.size}
                                    sx={{
                                        zIndex: 2,
                                        maxWidth: '180px',
                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            </Box>
                            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', mt: 1 }}>
                                {size.size}
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>{size.capacity} fl oz</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <CButton
                text={'Add to Cart'}
                customStyle={{
                    bgcolor: theme.color.borderDetail,
                    borderRadius: '36px',
                    boxShadow: '4px 2px 4px #ccc',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    padding: '28px',
                    position: 'fixed',
                    top: '90%',
                    right: '5%',
                    zIndex: 3,
                }}
            />
        </Box>
    );
}

export default CoffeeDetail;
