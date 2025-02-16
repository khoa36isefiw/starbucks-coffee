import { Box, Typography } from '@mui/material';
import React from 'react';
import HomeBanner from '../components/HomeBanner';
import { features } from '../data/features';
import FeatureSepcial from '../components/FeatureSepcial';

function FeaturePage() {
    // get feature index item in 3, 4
    const specialFeatures = features.filter((_, index) => index === 3 || index === 4);
    const thirthFeatures = features.slice(0, 3); // 3 values
    const lastFeature = features[features.length - 1]; // get the last item

    return (
        <Box sx={{ mt: 4 }}>
            <Typography
                sx={{
                    color: '#1e3932',
                    fontWeight: 'bold',
                    fontSize: '32px',
                    textAlign: 'center',
                }}
            >
                Handcrafted just for you
            </Typography>
            {thirthFeatures.map((feature, index) => (
                <HomeBanner
                    reverse={feature.reverse}
                    alt={feature.title}
                    imgSrc={feature.image}
                    title={feature.title}
                    content={feature?.content}
                    btnText={feature?.cButton}
                    color={feature.color}
                    bgcolor={feature.bgcolor}
                    btnColor={feature.btnColor}
                    key={index}
                />
            ))}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                {specialFeatures.map((feature, index) => (
                    <FeatureSepcial
                        reverse={feature.reverse}
                        alt={feature.title}
                        imgSrc={feature.image}
                        title={feature.title}
                        content={feature?.content}
                        btnText={feature?.cButton}
                        color={feature.color}
                        bgcolor={feature.bgcolor}
                        btnColor={feature.btnColor}
                        key={index}
                    />
                ))}
            </Box>

            <HomeBanner
                reverse={lastFeature.reverse}
                alt={lastFeature.title}
                imgSrc={lastFeature.image}
                title={lastFeature.title}
                content={lastFeature?.content}
                btnText={lastFeature?.cButton}
                color={lastFeature.color}
                bgcolor={lastFeature.bgcolor}
                btnColor={lastFeature.btnColor}
            />
        </Box>
    );
}

export default FeaturePage;
