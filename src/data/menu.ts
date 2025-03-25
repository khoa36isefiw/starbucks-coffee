import useSWR from "swr";
import { useCommonApi } from "../api/common";

export const menuData = [
    {
        id: 'id-drinks',
        label: 'Drinks',
        menu: [
            {
                image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_tight_288',
                title: 'Hot Coffee',
                path: 'hot-coffee',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    }, {
                        pType: 'Americano',
                        pList: [
                            {
                                pName: 'Caffè Americano',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/CaffeAmericano.jpg?impolicy=1by1_wide_topcrop_630'
                            }
                        ]
                    },
                    {
                        pType: 'Americano',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630'
                            },
                            {
                                pName: 'Pistachio Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/FY22Crop_PistachioLatte-onGreen.jpg?impolicy=1by1_wide_topcrop_630'
                            },
                            {
                                pName: 'Cinnamon Dolce Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CinnamonDolceLatte.jpg?impolicy=1by1_wide_topcrop_630'
                            },
                            {
                                pName: 'Starbucks® Blonde Vanilla Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630'

                            }
                        ]
                    }

                ],



            },
            {
                image: 'https://globalassets.starbucks.com/digitalassets/products/bev/ColdBrew.jpg?impolicy=1by1_tight_288',
                title: 'Cold Coffee',
                path: 'cold-coffee',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    }

                ],



            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Hot Tea',
                path: 'hot-tea',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],


            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Cold Tea',
                path: 'cold-tea',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],


            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Refreshers',
                path: 'refreshers',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],


            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Frappuccino® Blended Beverage',
                path: 'frappuccino®-blended-beverage',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],


            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Iced Energy',
                path: 'iced-energy',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],


            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Hot Chocolate, Lemonade & More',
                path: 'hot-chocolate,-lemonade-&-more',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],


            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Bottled Beverages',
                path: 'bottled-beverages',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],


            },
        ],
    },
    {
        id: 'id-food',
        label: 'Food',
        menu: [
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Breakfast',
                path: 'breakfast',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],

            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Bakery',
                path: 'bakery',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],

            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Treats',
                path: 'treats',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],

            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Lunch',
                path: 'lunch',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],

            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Snacks',
                path: 'snacks',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],

            },
        ],
    },
    {
        id: 'id-at-home-coffee',
        label: 'At Home Coffee',

        menu: [
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Whole Bean',
                path: 'whole-bean',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],

            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'VIA® Instant',
                path: 'via®-instant',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
                                // 
                            },
                        ]

                    }

                ],

            },
            {
                image: 'https://www.starbucks.com/weblx/images/product-placeholder.png',
                title: 'Shopping Bag',
                path: 'shopping-bag',
                menu: [

                    {
                        pType: 'Brewed Coffee',
                        pList: [
                            {
                                pName: 'Featured Blonde - Single-Origin Ethiopia',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Medium Roast - Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Featured Dark Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Decaf Pike Place® Roast',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                            {
                                pName: 'Caffè Misto',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
                            },
                        ]

                    },
                    {
                        pType: 'Latte',
                        pList: [
                            {
                                pName: 'Caffè Latte',
                                pImage: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',

                            },
                        ]

                    }

                ],

            },
        ],
    },
];






export const useMenu = () => {
    const { FETCH_PUBLIC_DATA } = useCommonApi();
    const key = '/menu'  // this key will be passed into FETCH_PUBLIC_DATA function as a parameter
    const { data, mutate, error } = useSWR(key, FETCH_PUBLIC_DATA)
    const loading = !data && !error;

    return {
        loading,
        menu: data || {},
        mutate
    }

}