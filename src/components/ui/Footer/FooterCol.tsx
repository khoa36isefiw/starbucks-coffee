import { Box, Typography } from '@mui/material';

type Props = {
    title: string;
    data: string[];
};
function FooterCol({ title, data }: Props) {
    return (
        <Box sx={{ maxWidth: 200 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>{title}</Typography>
            {data.map((item, index) => (
                <Typography
                    sx={{
                        mb: 1,
                        mt: 2,
                        opacity: 0.65,
                        '&:hover': {
                            cursor: 'pointer',
                            opacity: 1,
                        },
                    }}
                    key={index}
                >
                    {item}
                </Typography>
            ))}
        </Box>
    );
}

export default FooterCol;
