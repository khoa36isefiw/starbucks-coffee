import { giftCardTypes } from '../../../data/giftsCard';
import GiftCardHeading from './GiftCardHeading';
import { IGiftCardsType } from '../../../interfaces/IGiftCard';
import { Box } from '@mui/material';

function ListGiftCardHeading() {
    return (
        <Box sx={{ paddingTop: 1 }}>
            {giftCardTypes.map((card: IGiftCardsType, index: number) => (
                <GiftCardHeading heading={card.heading} data={card.data} key={index} />
            ))}
        </Box>
    );
}

export default ListGiftCardHeading;
