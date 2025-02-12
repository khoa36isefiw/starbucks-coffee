import { Avatar, Box, Divider, Typography } from '@mui/material';
interface IMenu {
    image: string;
    title: string;
}

interface IMenuItemCardProps {
    label: string;
    menu: IMenu[];
}
function MenuItemCard({ label, menu }: IMenuItemCardProps) {
    // console.log({ title, imgURL, altText });
    // console.log('data: ', data);
    return (
        <Box>
            <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>{label}</Typography>
            <Divider sx={{ my: 2, width: '80%' }} />
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                {menu.map((menuItem, index) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }} key={index}>
                        <Avatar
                            src={menuItem.image}
                            alt={menuItem.title}
                            sx={{ height: 128, width: 128 }}
                        />
                        <Typography sx={{ fontSize: '20px', ml: 2 }}>{menuItem.title}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default MenuItemCard;
