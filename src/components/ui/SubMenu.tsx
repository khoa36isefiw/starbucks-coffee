import { Avatar, Box, Typography } from '@mui/material';
import { OButton } from './Button/OButton';
import { ISubMenu } from '../../interfaces/IMenu';

function SubMenu({ pageTitle, image, title, content }: ISubMenu) {
    return (
        <Box>
            <Typography sx={{ fontWeight: 'bold', fontSize: '24px', my: '40px' }}>
                {pageTitle}
            </Typography>
            <Box sx={{ maxWidth: '314px' }}>
                <Avatar
                    src={image}
                    alt={title}
                    sx={{ height: 'auto', width: '256px', borderRadius: 0 }}
                    // add loading lazy for avatar
                    slotProps={{
                        img: {
                            loading: 'lazy',
                        },
                    }}
                />

                <Typography sx={{ mt: '16px', fontWeight: 'bold', fontSize: '24px' }}>
                    {title}
                </Typography>
                <Typography sx={{ my: '16px', fontSize: '18px' }} color="text.secondary">
                    {content}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <OButton text={'Sign in'} customStyle={{ fontWeight: 'bold', paddingY: 2 }} />
                    <OButton
                        text={'Join now'}
                        customStyle={{
                            fontWeight: 'bold',
                            paddingY: 2,
                            color: '#fff',
                            bgcolor: '#000',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default SubMenu;
