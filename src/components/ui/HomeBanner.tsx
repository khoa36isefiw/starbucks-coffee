import { Grid2 } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { OButton } from './Button/OButton';
import { useLocation } from 'react-router-dom';
type HomeBananerType = {
    reverse?: boolean;
    alt?: string;
    imgSrc?: string;
    title?: string;
    content?: string;
    btnText?: string;
    color?: string;
    bgcolor?: string;
    btnColor?: string;
    index?: number;
};

function HomeBanner({
    reverse,
    alt,
    imgSrc,
    title,
    content,
    btnText,
    color,
    bgcolor,
    btnColor,
    index,
}: HomeBananerType) {
    const location = useLocation();
    const isFeauture = location.pathname.includes('/feature');
    console.log('index: ', index);

    return (
        <Grid2
            container
            sx={{
                mt: { xs: '16px', sm: '32px' },
                bgcolor: bgcolor,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Grid2
                size={{ xs: 12, sm: index === 3 || index === 4 ? 12 : 6 }}
                order={{ xs: 2, sm: reverse ? 1 : 2 }}
            >
                <Box
                    component={'img'}
                    sx={{
                        // height: { md: '83%', lg: '100%' },
                        // width: { md: '83%', lg: '100%' },
                        width: '100%',
                        height: 'auto',
                        borderRadius: 0,
                        objectFit: 'contain',
                    }}
                    loading="lazy"
                    alt={alt}
                    src={imgSrc}
                />
            </Grid2>
            <Grid2
                size={{ xs: 12, sm: index === 3 || index === 4 ? 12 : 6 }}
                order={{ xs: 2, sm: reverse ? 2 : 1 }}
            >
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        bgcolor: bgcolor ? bgcolor : '#006242',
                        color: '#fff',
                        textAlign: 'center',
                        padding: '32px 48px',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            color: color ? color : '#fff',
                            fontWeight: 'bold',
                            fontSize: {
                                xs: '24px',
                                sm: '28px',
                                md: !isFeauture ? '50px' : '28px',
                            },
                            letterSpacing: '2px',
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: {
                                xs: '16px',
                                sm: '20px',
                                md: !isFeauture ? '24px' : '20px',
                            },
                            color: color ? color : '#fff',
                        }}
                    >
                        {content}
                    </Typography>
                    {btnText && (
                        <OButton
                            text={`${btnText}`}
                            customStyle={{
                                mt: '32px',
                                minHeight: '35px',
                                fontWeight: 'bold',
                                color: btnColor ? btnColor : 'white',
                                borderColor: btnColor ? btnColor : 'white',
                                padding: '7px 16px',
                                '&:hover': {
                                    bgcolor: '#0003',
                                },
                            }}
                        />
                    )}
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default HomeBanner;
