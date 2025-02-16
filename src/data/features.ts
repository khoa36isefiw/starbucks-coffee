interface IFeature {
    image: string;
    title: string;
    content: string;
    cButton: string;
    reverse: boolean;
    color: string;
    bgcolor: string;
    btnColor: string;
}
export const features: IFeature[] = [
    {
        image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96827.jpg',
        title: 'New Blackberry Sage Refreshers',
        content: 'Sweet blackberry flavors and notes of sage are shaken with real blackberry pieces—enjoyed alone or with lemonade or coconutmilk.',
        cButton: 'See our Seasonal Refreshers',
        reverse: true,
        color: '#32472f',
        bgcolor: '#d6ddc7',
        btnColor: '#1e3932',
    },
    {
        image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96868.jpg',
        title: 'Valentine’s classics are back',
        content: 'Embrace the season with a Chocolate Hazelnut Cookie Cold Brew and Chocolate-Covered Strawberry Crème Frappuccino® blended beverage.',
        cButton: '',
        reverse: false,
        color: '#32472f',
        bgcolor: '#f5f3f0',
        btnColor: '#1e3932',
    },
    {
        image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96805.jpg',
        title: 'Iced Shaken Espressos',
        content: 'Starbucks® Blonde espresso combined with hazelnut, brown sugar or classic syrup, shaken with ice, then finished with milk or oatmilk.',
        cButton: 'See our Shaken Espressos',
        reverse: true,
        color: '#32472f',
        bgcolor: '#d6ddc7',
        btnColor: '#1e3932',
    },
    {
        image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96783.jpg',
        title: 'New Cortado',
        content: 'Three ristretto shots of Starbucks® Blonde Espresso combined with steamed whole milk and served in an 8 fl oz short cup.',
        cButton: 'Order now',
        reverse: false,
        color: '#fff',
        bgcolor: '#5f4633',
        btnColor: '#fff',
    },
    {
        image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96784.jpg',
        title: 'New Brown Sugar Oatmilk Cortado',
        content: 'Three ristretto shots of Starbucks® Blonde Espresso, brown sugar syrup, cinnamon and steamed oatmilk in an 8 fl oz short cup.',
        cButton: 'Order now',
        reverse: true,
        color: '#fff',
        bgcolor: '#5f4633',
        btnColor: '#fff',
    },
    {
        image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97057.jpg',
        title: 'Iced Matcha Latte',
        content: 'Crafted with premium matcha, custom-sweetened and served with milk over ice.',
        cButton: 'Order now',
        reverse: false,
        color: '#32472f',
        bgcolor: '#d6ddc7',
        btnColor: '#1e3932',
    },
]
