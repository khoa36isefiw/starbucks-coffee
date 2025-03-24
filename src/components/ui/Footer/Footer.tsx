import { Box, Divider, Typography } from '@mui/material';

import FooterCol from './FooterCol';
import {
    about,
    businessPartners,
    careers,
    footerData,
    footerIcon,
    footerNewData,
    orderPickup,
    social,
} from '../../util/constants';
import { FooterIcon } from './FooterIcon';
import FooterAccordion from './FooterAccordion';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <Box
            sx={{
                position: 'absolute',
                marginTop: 'auto',

                left: 0,
                right: 0,
            }}
        >
            <Divider
                sx={{
                    borderBottomWidth: 2,
                    my: 2,
                    boxShadow:
                        '0 -1px 3px rgba(0, 0, 0, .1), 0 -2px 2px rgba(0, 0, 0, .06), 0 0 2px rgba(0, 0, 0, .07)',
                }}
            />
            <Box sx={{ p: 2 }}>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'flex' },
                        justifyContent: 'space-between',
                    }}
                >
                    <FooterCol title="About Us" data={about} />
                    <FooterCol title="Careers" data={careers} />
                    <FooterCol title="Social Impact" data={social} />
                    <FooterCol title="For Business Partners" data={businessPartners} />
                    <FooterCol title="Order and Pick Up" data={orderPickup} />
                </Box>
                <Box sx={{ display: { sm: 'block', md: 'none' } }}>
                    {footerNewData.map((footer, index) => (
                        <FooterAccordion
                            title={footer.title}
                            contents={footer.contents}
                            key={index}
                        />
                    ))}
                </Box>
                <Divider sx={{ my: 2, borderBottomWidth: 2 }} />
                <Box sx={{ display: 'flex' }}>
                    {footerIcon.map((path: string, index: number) => (
                        <FooterIcon icon={path} key={index} />
                    ))}
                </Box>
                <Box>
                    {footerData.map((data: string, index: number) => (
                        <Typography
                            key={index}
                            sx={{
                                my: 2,
                                '&:hover': {
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            {data}
                        </Typography>
                    ))}
                </Box>
                <Typography sx={{ opacity: 0.65, fontSize: '14px', my: 2 }}>
                    &copy; {year} Starbucks Coffee Company. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
