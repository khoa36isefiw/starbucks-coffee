import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Typography } from '@mui/material';
import { theme } from '../theme/theme';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const ratingData = [
    {
        id: 1,
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/25.png',
        rate: '25',
        title: 'Customize your drink',
        content:
            'Make your drink just right with an extra espresso shot or a dash of your favorite syrup.',
    },
    {
        id: 2,
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png',
        rate: '100',
        title: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
        content: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.',
    },
    {
        id: 3,
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png',
        rate: '200',
        title: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
        content:
            'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.',
    },
    {
        id: 4,
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png',
        rate: '300',
        title: 'Sandwich, protein box or at-home coffee',
        content:
            'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.',
    },
    {
        id: 5,
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png',
        rate: '400',
        title: 'Select Starbucks® merchandise',
        content:
            'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.',
    },
];

export default function RatingTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log('value', newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Tabs
                    aria-label="basic tabs example"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                        '& .MuiTabs-indicator': {
                            height: '4px',
                        },
                    }}
                    onChange={handleChange}
                    value={value}
                >
                    {ratingData.map((rating, index) => (
                        <Tab
                            key={index}
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                                        {rating.rate}
                                    </Typography>
                                    <StarIcon sx={{ color: '#e0a34d', marginLeft: '2px' }} />
                                </Box>
                            }
                            sx={{
                                px: 1,
                                [theme.breakpoints.down('sm')]: {
                                    minWidth: '10px',
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#d4e9e2',
                    boxShadow: '-1px -4px 1px 0px rgba(0,0,0,0.06)',
                }}
            >
                {ratingData.map((rating, index) => (
                    <CustomTabPanel key={index} value={value} index={index}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                                width: 850,
                                py: '32px',
                                [theme.breakpoints.down('sm')]: {
                                    flexDirection: 'column',
                                    width: '100%',
                                },
                                [theme.breakpoints.down('md')]: {
                                    width: '100%',
                                },
                            }}
                        >
                            <Avatar
                                src={rating.image}
                                sx={{
                                    width: '375px',
                                    height: '211px',
                                    objectFit: 'contain',
                                    borderRadius: 0,
                                    my: '32px',
                                }}
                            />
                            <Box sx={{ ml: 4 }}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: '16px',
                                            textAlign: 'center',
                                        },
                                    }}
                                >
                                    {rating.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        mt: 2,
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: '13px',
                                            textAlign: 'center',
                                        },
                                    }}
                                >
                                    {rating.content}
                                </Typography>
                            </Box>
                        </Box>
                    </CustomTabPanel>
                ))}
            </Box>
        </Box>
    );
}
