export interface ICoffeeOptios {
    size: string;
    capacity: number;
    images: {
        active: string;
        inactive: string;
    };
}

export const coffeeOptions: ICoffeeOptios[] = [
    {
        size: 'Short',
        capacity: 8,

        images: {
            inactive: 'https://www.starbucks.com/app-assets/0295bad53506b2b3c22b.svg',
            active: 'https://www.starbucks.com/app-assets/06ea008c02e29bbc7f8f.svg',

        }

    },
    {
        size: 'Tall',
        capacity: 12,
        images: {
            inactive: 'https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d.svg',
            active: 'https://www.starbucks.com/app-assets/8f80d6b33459b4fada56.svg',
        },
    },
    {
        size: 'Grande',
        capacity: 16,
        images: {
            inactive: 'https://www.starbucks.com/app-assets/f1c3892d2d28cade899a.svg',
            active: 'https://www.starbucks.com/app-assets/a35163e609f2058eee27.svg',
        },
    },
    {
        size: 'Venti',
        capacity: 20,
        images: {
            inactive: 'https://www.starbucks.com/app-assets/8f4f6108fbeefb3455f0.svg',
            active: 'https://www.starbucks.com/app-assets/f3bd2f05578777d6c1a6.svg',
        },
    },
];