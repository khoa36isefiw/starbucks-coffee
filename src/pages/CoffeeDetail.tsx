import { Box, Divider, Typography } from '@mui/material';
import { theme } from '../theme/theme';
import { coffeeOptions } from '../data/coffeeOptions';

function CoffeeDetail() {
    return (
        <Box>
            <Box sx={{ bgcolor: theme.color.pDetailBg, width: '100%', height: '300px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4,
                    }}
                >
                    <Box
                        component={'img'}
                        src={
                            'https://globalassets.starbucks.com/digitalassets/products/bev/BrewedCoffee.jpg?impolicy=1by1_wide_topcrop_630'
                        }
                        alt={'coffee'}
                        sx={{ maxWidth: '300px' }}
                    />
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '24px',
                                color: '#fff',
                                fontWeight: 'bold',
                                maxWidth: 400,
                            }}
                        >
                            Featured Medium Roast - Pike Place® Roast
                        </Typography>
                        <Typography sx={{ fontSize: '20px', color: '#f9f9f9' }}>
                            5 Calogries
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* Select Size */}
            <Box
                sx={{
                    my: 8,
                    mx: { lg: '80px' },
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
                    sx={{ borderWidth: 2, bgcolor: '#d4e9e2', borderRadius: 2, width: 400, my: 2 }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        gap: 4,
                        my: 4,
                    }}
                >
                    {coffeeOptions.map((size, index) => (
                        <Box key={index} sx={{ textAlign: 'center' }}>
                            <Box
                                component={'img'}
                                src={size.images.inactive}
                                alt={size.size}
                                sx={{ maxWidth: '300px' }}
                            />
                            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                {size.size}
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>{size.capacity} fl oz</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default CoffeeDetail;
