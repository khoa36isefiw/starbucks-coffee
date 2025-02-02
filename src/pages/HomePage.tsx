import { Box } from '@mui/material';

import HomeBanner from '../components/HomeBanner';
import { Box32 } from '../components/Box32';

function HomePage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <HomeBanner
                alt={
                    "A split image showing a close-up of coffee and a barista wearing a green apron, hat and glasses while shaking a drink. There's a wordmark that reads The Starbucks Coffee Company."
                }
                imgSrc={
                    'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96799.jpg'
                }
                title={'More reasons to stay awhile'}
                content={
                    'Mugs, glasses and the condiment bar are back—and all for-here orders include freshly brewed refills on coffee and tea.'
                }
                btnText={'Learn more'}
                reverse={true}
            />
            <HomeBanner
                alt={
                    'An icy coffee drink with creamy marbling on a counter is about to be picked up by a customer wearing a jean jacket. A barista in a green apron stands in the background.'
                }
                imgSrc={
                    'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96803.jpg'
                }
                title={'Shaken to perfection'}
                content={
                    'Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or Iced Hazelnut Oatmilk Shaken Espresso—made with Starbucks® Blonde Espresso, and just 150 calories for a grande.'
                }
                btnText={'Add to Order'}
                reverse={false}
                color={'#32472f'}
                bgcolor={'#d6ddc7'}
                btnColor="#1e3932"
            />
            <HomeBanner
                alt={
                    'A tall glass of black coffee with cream against a close up shot of of coffee and cream.'
                }
                imgSrc={
                    'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96750.jpg'
                }
                title={'It’s a great day for free coffee'}
                content={
                    'Start your Starbucks® Rewards journey with a coffee on us. Join now and enjoy a free handcrafted drink with a qualifying purchase during your first week.*'
                }
                btnText={'Join now'}
                color={'#fbf5e7'}
                bgcolor={'#5f4633'}
                reverse={true}
            />
            <Box32
                sx={{
                    fontSize: '14px',
                    width: '50%',
                    textAlign: 'center',
                    padding: '32px 0',
                }}
            >
                *Valid for new Starbucks Rewards members for 7 days from sign up. Coupon will be
                available in the offers tab of your Starbucks app following sign up and may take up
                to 48 hours to arrive. Good at participating U.S. stores for a handcrafted
                menu-sized beverage with qualifying purchase ($8 max value). Qualifying purchase
                excludes alcohol, Starbucks Card and Card reloads. Limit one. Cannot be combined
                with other offers or discounts. Excludes delivery services. Sign up before
                3/30/2025.
            </Box32>
        </Box>
    );
}

export default HomePage;
