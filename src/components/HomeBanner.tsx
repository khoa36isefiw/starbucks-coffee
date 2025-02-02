import { Grid2 } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { OButton } from '../components/Button/OButton';
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
}: HomeBananerType) {
    return (
        <Grid2 container sx={{ mt: '32px' }}>
            <Grid2 size={{ xs: 12, md: 6 }} order={{ xs: 2, md: reverse ? 1 : 2 }}>
                <Box
                    component={'img'}
                    sx={{ height: '100%', width: '100%', borderRadius: 0 }}
                    alt={alt}
                    src={imgSrc}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} order={{ xs: 2, md: reverse ? 2 : 1 }}>
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
                            fontSize: '50px',
                            letterSpacing: '2px',
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography sx={{ fontSize: '24px', color: color ? color : '#fff' }}>
                        {content}
                    </Typography>
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
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default HomeBanner;
