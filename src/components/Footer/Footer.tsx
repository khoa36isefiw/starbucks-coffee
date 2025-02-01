import { Box, Divider } from '@mui/material';

import FooterCol from '../FooterCol';
import {
    about,
    businessPartners,
    careers,
    footerIcon,
    orderPickup,
    social,
} from '../../utils/constants';
import { FooterIcon } from './FooterIcon';

function Footer() {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <FooterCol title="About Us" data={about} />
                    <FooterCol title="Careers" data={careers} />
                    <FooterCol title="Social Impact" data={social} />
                    <FooterCol title="For Business Partners" data={businessPartners} />
                    <FooterCol title="Order and Pick Up" data={orderPickup} />
                </Box>
                <Divider sx={{ my: 2, borderBottomWidth: 2 }} />
                <Box sx={{ display: 'flex' }}>
                    {footerIcon.map((path: string, index: number) => (
                        <FooterIcon icon={path} key={index} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
