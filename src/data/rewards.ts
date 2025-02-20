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