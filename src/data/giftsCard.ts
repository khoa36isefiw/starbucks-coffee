import { IGiftCards, IGiftCardsType } from "../interfaces/IGiftCard";

export const giftsCard: IGiftCards[] = [
    {
        imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/CouldntDoItWithoutYouFY25.png',
        alt: 'Couldn\'t do it without you'
    },
    {
        imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/SpringSeasonalFY25.png',
        alt: 'Spring seasonal'
    },
    {
        imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyBirthdayFY25.png',
        alt: 'Gift card image: A sliced birthday cake sits on top of a blue table with the words Happy Birthday curved across the design in dark green.'
    },
    {
        imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/ThankYouFY25.png',
        alt: 'Gift card image: Thank You is written in shuffled letters on a blue and green multi-colored geometric background with black stars. '
    },
    {
        imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/YouAreAwesomeFY25.png',
        alt: 'Gift card image: You are Awesome is written in punched out purple and red letters on an orange splattered background. '
    },
    {
        imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/CelebrationFY25.png',
        alt: "Gift card image: An iced Starbucks cup exploding with multi-colored confetti sits in front of a dark green background."
    },
    {
        imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy24/AboveBeyondFY24.png',
        alt: 'Gift card image: Above plus Beyond equals You is written in green letters across a wavy background texture of purple, blue, green, and yellow background with a few white stars. '
    },
    {
        imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg',
        alt: 'Gift card image: A Big Thank You with the words A Big written in small pale blue letters and arched over the top of the larger words Thank You.'
    },

];






export const giftCardTypes: IGiftCardsType[] = [
    {
        heading: 'Birthday',
        data: [
            {
                imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyBirthdayFY25.png',
                alt: 'Gift card image: A sliced birthday cake sits on top of a blue table with the words Happy Birthday curved across the design in dark green.'
            },
            {
                imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/HolidayBirthdayFY25.png',
                alt: 'Gift card image: Happy Birthday is written on a vibrant pink and red birthday cake with candles sitting on a green party table.'
            },
        ]
    },
    {
        heading: 'Thank you',
        data: [
            {
                imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/ThankYouFY25.png',
                alt: 'Gift card image: Thank You is written in shuffled letters on a blue and green multi-colored geometric background with black stars. '
            },
            {
                imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy24/MyTreatFY24.jpg',
                alt: '  Gift card image: A hand extends from the right holding a steaming Starbucks beverage, with My Treat written in green letters above it against a shaded green and white background.'
            },
            {
                imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg',
                alt: 'Gift card image: A Big Thank You with the words A Big written in small pale blue letters and arched over the top of the larger words Thank You.'
            },
        ]
    },
    {
        heading: 'Celebration',
        data: [
            {
                imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/CelebrationFY25.png',
                alt: "Gift card image: An iced Starbucks cup exploding with multi-colored confetti sits in front of a dark green background."
            },
        ]

    },
    {
        heading: 'Appreciation',
        data: [
            {
                imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/YouAreAwesomeFY25.png',
                alt: 'Gift card image: You are Awesome is written in punched out purple and red letters on an orange splattered background. '
            },
            {
                imageUrl: 'https://globalassets.starbucks.com/digitalassets/cards/fy25/CouldntDoItWithoutYouFY25.png',
                alt: 'Couldn\'t do it without you'
            },
        ]
    },
];


export interface IAdvertisement {
    title: string;
    content: string[];
    button?: string;
}


export const advertisements: IAdvertisement[] = [
    {
        title: 'About eGift cards',
        content: [
            "A Starbucks eGift card (also known as an “eGift”) is a Starbucks Gift Card that is purchased and sent digitally.",
            "For Senders of an eGift, go to eGift History when signed in to view, send, or resend eGifts you’ve purchased — or, to directly contact Starbucks eGift Support for help with your order.",
        ],
        button: '',
    },
    {
        title: 'About Starbucks Gift Cards in general',
        content: [
            "Starbucks Gift Cards, including eGifts, can be used to pay in a Starbucks store or to join Starbucks® Rewards.",
            "Register Gift Cards and eGifts to a Starbucks® Rewards account and earn 2★ per dollar every time you pay with that card. Those Stars quickly add up to free food, drinks, and more!",
        ],
        button: 'Card Terms & Conditions',
    },
    {
        title: 'Questions around eGift cards?',
        content: [
            "Check our Frequently Asked Questions — your question might already be answered. There, you’ll find answers for all Starbucks Gift Cards in general (including eGifts).",

        ],
        button: 'Card FAQs',
    },


]
