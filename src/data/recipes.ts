export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: string;
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    id: "r1",
    title: "Mediterranean Schnitzel Bowl",
    description: "An artisanal take on our classic schnitzel, served over a bed of pearl couscous with charred heirloom tomatoes and fresh labneh.",
    image: "/images/recipe_schnitzel.png",
    time: "20 min",
    difficulty: "Simple",
    tags: ["Chef Selection", "Healthy"]
  },
  {
    id: "r2",
    title: "The Signature Alwadi Slider",
    description: "Miniature elevations of our gourmet burger, topped with caramelized balsamic onions and a signature secret honey-mustard glaze.",
    image: "/images/recipe_burger.png",
    time: "15 min",
    difficulty: "Easy",
    tags: ["Guest Favorite", "Quick"]
  },
  {
    id: "r3",
    title: "Truffle-Infused Golden Nuggets",
    description: "Elevating the family classic with a drizzle of white truffle oil and a side of house-made wild mushroom dipping crema.",
    image: "/images/recipe_nuggets.png",
    time: "12 min",
    difficulty: "Artisanal",
    tags: ["Luxury Bite", "Quick"]
  }
];
