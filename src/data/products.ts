export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  highlight?: string;
  nutrition?: string[];
  cookingTime?: string;
}

export const products: Product[] = [
  {
    id: "b1",
    name: "Classic Chicken Burger",
    description: "Our signature chicken burger, seasoned with an artisanal blend of traditional spices and crafted for an exceptionally juicy, premium bite.",
    image: "/images/hero_burger_cinematic.png",
    category: "Burger",
    price: "JD 4.50",
    highlight: "Popular Choice",
    nutrition: ["22g Protein", "100% Breast", "Low Sodium"],
    cookingTime: "8-10 mins"
  },
  {
    id: "b2",
    name: "Spicy Fillet Burger",
    description: "Premium hand-breaded chicken breast fillet with a bold spicy blend for the ultimate gourmet crunch and signature heat.",
    image: "/images/burger_category.png",
    category: "Burger",
    price: "JD 5.25",
    highlight: "Spicy Trend",
    nutrition: ["24g Protein", "Zesty Spice", "Real Fillet"],
    cookingTime: "10-12 mins"
  },
  {
    id: "br1",
    name: "Golden Chicken Nuggets",
    description: "Tender, high-quality chicken nuggets coated in our secret golden-brown breading for a satisfying, family-favorite crunch.",
    image: "/images/breaded_category.png",
    category: "Breaded",
    price: "JD 3.75",
    highlight: "Family Pack",
    nutrition: ["White Meat", "No Preservatives", "Classic Taste"],
    cookingTime: "6-8 mins"
  },
  {
    id: "br2",
    name: "Classic Chicken Schnitzel",
    description: "Thinly sliced, tender chicken breast, hand-breaded and perfectly seasoned for an authentic home-style culinary experience.",
    image: "/images/breaded_category.png",
    category: "Breaded",
    price: "JD 5.50",
    nutrition: ["Large Cut", "Crispy Texture", "High Protein"],
    cookingTime: "12-15 mins"
  },
  {
    id: "br3",
    name: "Chicken Popcorn",
    description: "Bite-sized pieces of premium chicken, perfect for sophisticated snacking or as a délicieux addition to any culinary spread.",
    image: "/images/breaded_category.png",
    category: "Breaded",
    price: "JD 3.25",
    nutrition: ["Bite-Sized", "Crunchy", "Kid Friendly"],
    cookingTime: "5-7 mins"
  }
];
