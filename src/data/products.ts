export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "Burger" | "Breaded";
  price: string;
  highlight?: string;
}

export const products: Product[] = [
  {
    id: "b1",
    name: "Classic Chicken Burger",
    description: "Our signature chicken burger, seasoned with traditional spices and crafted for a perfect juicy bite.",
    image: "/images/hero_burger_cinematic.png",
    category: "Burger",
    price: "JD 4.50",
    highlight: "Popular Choice"
  },
  {
    id: "b2",
    name: "Spicy Fillet Burger",
    description: "Premium breaded chicken breast fillet with a bold spicy blend for the ultimate crunch and heat.",
    image: "/images/burger_category.png",
    category: "Burger",
    price: "JD 5.25",
    highlight: "Spicy Trend"
  },
  {
    id: "br1",
    name: "Golden Chicken Nuggets",
    description: "Tender, high-quality chicken nuggets coated in our secret golden-brown breading for a satisfying crunch.",
    image: "/images/breaded_category.png",
    category: "Breaded",
    price: "JD 3.75",
    highlight: "Family Pack"
  },
  {
    id: "br2",
    name: "Classic Chicken Schnitzel",
    description: "Thinly sliced, tender chicken breast, hand-breaded and perfectly seasoned for a traditional home-style meal.",
    image: "/images/breaded_category.png",
    category: "Breaded",
    price: "JD 5.50"
  },
  {
    id: "br3",
    name: "Chicken Popcorn",
    description: "Bite-sized pieces of premium chicken, perfect for snacking or as a delicious addition to any meal.",
    image: "/images/breaded_category.png",
    category: "Breaded",
    price: "JD 3.25"
  }
];
