export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 12',
    description: 'Apple iPhone 12 with A14 Bionic chip, 6.1" Super Retina XDR display, and 5G capability.',
    price: 799,
    image: require('../assets/images/iphone12.png'),
  },
  {
    id: '2',
    name: 'iPhone 12 Pro',
    description: 'Apple iPhone 12 Pro with Pro camera system, LiDAR Scanner, and 6.1" Super Retina XDR display.',
    price: 999,
    image: require('../assets/images/iphone12pro.png'),
  },
  {
    id: '3',
    name: 'Samsung Galaxy S23',
    description: 'Samsung Galaxy S23 with Snapdragon 8 Gen 2 chip, 6.1" Dynamic AMOLED 2X display, and 50MP main camera.',
    price: 799,
    image: require('../assets/images/samsungs23.jpg'),
  },
  {
    id: '4',
    name: 'Motorola Edge 40',
    description: 'Motorola Edge 40 with MediaTek Dimensity 8020 chip, 6.55" pOLED display, and 50MP main camera.',
    price: 599,
    image: require('../assets/images/motorolaedge40.png'),
  },
  {
    id: '5',
    name: 'Acer Aspire 5',
    description: 'Acer Aspire 5 laptop with Intel Core i5 processor, 15.6" Full HD display, and 8GB RAM.',
    price: 549,
    image: require('../assets/images/aceraspire5.png'),
  },
  {
    id: '6',
    name: 'ASUS VivoBook 17',
    description: 'ASUS VivoBook 17 laptop with AMD Ryzen 7 processor, 17.3" Full HD display, and 16GB RAM.',
    price: 799,
    image: require('../assets/images/asusvivobook17.png'),
  },
  {
    id: '7',
    name: 'PlayStation 5',
    description: 'Sony PlayStation 5 gaming console with Ultra HD Blu-ray, 825GB SSD, and DualSense controller.',
    price: 499,
    image: require('../assets/images/ps5.png'),
  },
  {
    id: '8',
    name: 'Apple AirPods',
    description: 'Apple AirPods (3rd generation) with Spatial Audio, Adaptive EQ, and MagSafe Charging Case.',
    price: 179,
    image: require('../assets/images/airpods.png'),
  },
];