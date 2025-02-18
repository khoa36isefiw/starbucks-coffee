import { Box, Typography } from '@mui/material';

import { OButton } from '../components/Button/OButton';
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

function FeatureSepcial({
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
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}>
            <Box
                component={'img'}
                sx={{
                    // height: { md: '83%', lg: '100%' },
                    // width: { md: '83%', lg: '100%' },
                    width: '100%',
                    height: '65%',
                    borderRadius: 0,
                    objectFit: 'contain',
                }}
                alt={alt}
                src={imgSrc}
            />
            <Box
                sx={{
                    bgcolor: bgcolor,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                }}
            >
                <Typography
                    sx={{
                        color: color ? color : '#fff',
                        fontWeight: 'bold',
                        fontSize: {
                            xs: '28px',
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
                            xs: '20px',
                            sm: '28px',
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
        </Box>
    );
}

export default FeatureSepcial;
