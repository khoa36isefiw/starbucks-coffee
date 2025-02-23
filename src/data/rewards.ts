export const rewards = [

    {
        id: 1,
        title: 'Create an account',
        content: 'To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.'
    }
    , {
        id: 2,
        title: 'Order and pay how you’d like',
        content: 'Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how'
    }
    , {
        id: 3,
        title: 'Earn Stars, get Rewards',
        content: 'As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more.Start redeeming with as little as 25 Stars!'
    }
]


interface IEndlessExtra {
    image: string;
    title: string;
    content: string;
}

export const endlessExtra: IEndlessExtra[] = [
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg',
        title: 'Fun freebies',
        content: 'Not only can you earn free food, drinks and more, look forward to a birthday treat on us.'
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg',
        title: 'Order & pay ahead',
        content: 'Master the art of ordering ahead with saved favorites and payment methods.'
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg',
        title: 'Get to free faster',
        content: 'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.'
    }

]


export const extraModalData: IEndlessExtra[][] =
    [[
        {
            image: 'https://www.starbucks.com/weblx/images/rewards/benefits/1A.jpg',
            title: 'Free food, drinks & more',
            content: 'Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.'
        },
        {
            image: 'https://www.starbucks.com/weblx/images/rewards/benefits/1B.jpg',
            title: 'Complimentary birthday treat',
            content: 'Every year on your birthday get a free drink or food item of your choice.'
        },
        {
            image: 'https://www.starbucks.com/weblx/images/rewards/benefits/1C.jpg',
            title: 'Our best offers, all in the app',
            content: 'Make the most of every visit. You’ll find chances to earn Bonus Stars and more in your Offers tab.'
        }
    ],
    [
        {
            image: 'https://www.starbucks.com/weblx/images/rewards/benefits/2A.jpg',
            title: 'Tap, go.',
            content: 'Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order.'
        },
        {
            image: 'https://www.starbucks.com/weblx/images/rewards/benefits/2B.jpg',
            title: 'Just for you',
            content: 'Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.'
        }
    ],
    ]




interface ICard {
    title: string;
    subTitle: string;
    steps: {
        image: string;
        content: string;
        title: string;
    }[];
}

export const cashCardContent: ICard[] = [
    {
        title: '1★ Star per dollar',
        subTitle: 'Pay as you go',
        steps: [
            {
                image: 'https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png',
                content: 'Use cash or credit/debit card at the register.',
                title: 'Scan and pay separately'
            },
            {
                image: 'https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png',
                content: 'Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.',
                title: 'Save payment in the app'
            },
        ]
    },
    {
        title: '2★ Star per dollar',
        subTitle: 'Add funds in the app',
        steps: [
            {
                image: 'https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png',
                content: 'To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.',
                title: 'Preload'
            },
            {
                image: 'https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png',
                content: 'Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.',
                title: 'Register your gift card'
            },
        ]
    }
]

// bg: #f2f0ea

// Cash or card, you earn Stars
// No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.


export const rewardsComming = [
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png',
        title: 'Link your Delta SkyMiles ® and Starbucks ® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.'
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/bank-of-america.png',
        title: 'Link your Bank of America eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.'
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/marriott-bonvoy/marriott-logo.png',
        title: 'Link your Marriott Bonvoy® and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.3'
    },
]



export const policyContent = [
    {
        superscript: null,
        content: 'At participating stores. Restrictions apply.'
    },
    {
        superscript: '1',
        content: 'Excludes taxes and gratuities.At participating stores.Some restrictions apply.Flights purchased close to departure may not earn double Stars.Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads.For details, visit deltastarbucks.com / terms'
    },
    {
        superscript: '2',
        content: 'At participating stores only.Some restrictions apply.Linked Card members will earn 2 % Cash Back on the full purchase price of every Qualifying Purchase.Extra Star offer excludes taxes and tips.Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered.For details, visit Terms and Conditions .Bank of America, N.A.Member FDIC.'
    },
    {
        superscript: '3',
        content: 'Individuals must link loyalty program accounts to participate in offer.Members with linked accounts will earn: (a) double Starbucks Rewards Stars on Qualifying Starbucks Transactions during Eligible Stays at Participating Marriott Bonvoy Hotels, excluding stays at Homes & Villas by Marriott Bonvoy and The Ritz - Carlton Yacht Collection, and(b) earn 100 Marriott Bonvoy Points upon completion of 3 Qualifying Starbucks Transactions during Marriott Bonvoy Week.Qualifying Starbucks Transactions must be made at U.S.participating Starbucks stores and exclude purchases of alcoholic beverages, Starbucks Card eGifts and physical Starbucks gift.To earn Double Stars, the applicable stay must qualify as an Eligible Stay at a Participating Marriott Bonvoy® Hotel under offer terms and conditions.Other restrictions and exclusions apply.For full offer terms and conditions, visit Starbucks.com / MarriottBonvoy .Marriott Bonvoy® and its affiliated brands and hotels are the registered trademarks and / or service marks of Marriott International, Inc.and its affiliates.Used under license from Marriott International, Inc.'
    },
]

export const policyTitle = [
    {
        title: 'Earning Stars',
        content: [
            "Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.",
            "Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.",
            "Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.",
        ]
    },
    {
        title: 'Benefits',
        content: [
            "Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.",

        ]
    },
    {
        title: 'Terms of Use',
        content: [
            'For full program details visit starbucks.com/rewards/terms',
            'Starbucks® Rewards benefits are available at participating Starbucks stores.Not all stores have the ability to honor Rewards at this time.Visit the  Starbucks Store Locator and search for locations honoring “Redeem Rewards”.'
        ]
    }, {
        title: 'Redeeming Rewards',
        content: [
            'Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.',
        ]
    },
]