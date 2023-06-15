const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "CRUISER GLOBE BIG BLAZER",
      description:
        "The Cruiser Globe Big Blazer is designed for the ultimate surf-like experience. Its compact size and wide, stable deck make it perfect for carving and cruising with ease.",
      slug: "CRUISER-GLOBE-BIG-BLAZER",
      highlight: "Ultimate surf-like experience!",
      stock: 10,
      price: 249.99,
      photo: { url: "CRUISERGLOBEBIGBLAZER_1.jpg" },
      categoryId: 2,
    },
    {
      name: "CRUISER GLOBE BLAZER",
      description: "",
      slug: "Experience precision and control with the Cruiser Globe Blazer. Its medium-sized deck and responsive trucks allow for smooth turns and agile maneuvers.",
      highlight: "Precision and control!",
      stock: 5,
      price: 279.99,
      photo: { url: "CRUISERGLOBEBLAZER_1.jpg" },
      categoryId: 2,
    },
    {
      name: "CRUISER GLOBE CHROMANTIC",
      description:
        "Unleash your freestyle skills with the Cruiser Globe Chromantic. This versatile cruiser board features a symmetrical shape and responsive trucks for optimal trick performance.",
      slug: "CRUISER-GLOBE-CHROMANTIC",
      highlight: "Unleash your freestyle!",
      stock: 15,
      price: 299.99,
      photo: { url: "CRUISERGLOBECHROMANTIC_1.jpg" },
      categoryId: 3,
    },
    {
      name: "longboard",
      description:
        "Enjoy an eco-friendly and stylish ride with this classic longboard. Its sturdy construction and smooth wheels provide a comfortable cruising experience.",
      slug: "longboard",
      highlight: "Eco-friendly and stylish!",
      stock: 20,
      price: 199.99,
      photo: { url: "longboard_1.jpg" },
      categoryId: 3,
    },
    {
      name: "LONGBOARD GLOBE ARCADIA",
      description:
        "Cruise in style with the Longboard Globe Arcadia. Its compact size and retro-inspired design make it perfect for commuting and carving through the streets.",
      slug: "LONGBOARD-GLOBE-ARCADIA",
      highlight: "Cruise in style!",
      stock: 8,
      price: 89.99,
      photo: { url: "LONGBOARDGLOBEARCADIA.jpg" },
      categoryId: 4,
    },
    {
      name: "LONGBOARD GLOBE BYRONBAY",
      description:
        "Ride in retro style with the Longboard Globe Byronbay. This board combines a vintage look with modern performance, offering a smooth and enjoyable cruising experience.",
      slug: "LONGBOARD-GLOBE-BYRONBAY",
      highlight: "Retro style, modern performance!",
      stock: 12,
      price: 79.99,
      photo: { url: "LONGBOARDGLOBEBYRONBAY.jpg" },
      categoryId: 4,
    },
    {
      name: "LONGBOARD GLOBE THE ALL TIME",
      description:
        "Experience the iconic design and superior performance of the Longboard Globe The All Time. Whether you're a beginner or an advanced rider, this board offers stability and control for all your longboarding adventures.",
      slug: "LONGBOARD-GLOBE-THE-ALL-TIME",
      highlight: "Iconic design, superior performance!",
      stock: 18,
      price: 119.99,
      photo: { url: "LONGBOARDGLOBETHEALLTIME_1.jpg" },
      categoryId: 1,
    },
    {
      name: "SKATE GLOBE G0 BLOCK SERIF",
      description:
        "Express your style on the streets with the Skate Globe G0 Block Serif. This skateboard features a compact and maneuverable design, making it perfect for tricks and street riding.",
      slug: "SKATE-GLOBE-G0-BLOCK-SERIF",
      highlight: "Express your style on the streets!",
      stock: 10,
      price: 49.99,
      photo: { url: "SKATEGLOBEG0BLOCKSERIF.jpg" },
      categoryId: 1,
    },
    {
      name: "SKATE GLOBE G1 SLIDE STACK",
      description:
        "Ride like the pros with the Skate Globe G1 Slide Stack. This skateboard is the signature model of professional skateboarder Filipe Toledo. It offers a perfect balance of stability and responsiveness, allowing you to perform tricks with precision.",
      slug: "SKATE-GLOBE-G1-SLIDE-STACK",
      highlight: "Filipe Toledo signature model!",
      stock: 7,
      price: 329.99,
      photo: { url: "SKATEGLOBEG1SLIDESTACK8125.jpg" },
      categoryId: 1,
    },
    {
      name: "SKATE GLOBE G1 STACK 80",
      description:
        "Embrace the endless summer with the Skate Globe G1 Stack 80. This skateboard features a classic design and a wide deck, providing stability and control for riders of all skill levels.",
      slug: "SKATE-GLOBE-G1-STACK-80",
      highlight: "Embrace the endless summer!",
      stock: 3,
      price: 399.99,
      photo: { url: "SKATEGLOBEG1STACK80.jpg" },
      categoryId: 3,
    },
    {
      name: "Loaded Vanguard Flex 3",
      description:
        "The Loaded Vanguard Flex 3 longboard offers a lively and responsive ride. It features a bamboo and fiberglass construction for a perfect balance of flex and control.",
      slug: "loaded-vanguard-flex-3",
      highlight: "Master the art of cruising!",
      stock: 9,
      price: 349.99,
      photo: { url: "loaded-vanguard-flex-3.jpg" },
      categoryId: 3,
    },
    {
      name: "Landyachtz Drop Cat Seeker",
      description:
        "The Landyachtz Drop Cat Seeker longboard features a drop-through design for enhanced stability and control. It's perfect for downhill rides and freeriding.",
      slug: "landyachtz-drop-cat-seeker",
      highlight: "Conquer any terrain!",
      stock: 15,
      price: 279.99,
      photo: { url: "landyachtz-drop-cat-seeker.jpg" },
      categoryId: 3,
    },
    {
      name: "Globe Blazer Cruiser",
      description:
        "The Globe Blazer Cruiser is a compact and lightweight penny board. It features a plastic deck with a kicktail for added versatility and maneuverability.",
      slug: "globe-blazer-cruiser",
      highlight: "Ride with attitude!",
      stock: 6,
      price: 99.99,
      photo: { url: "globe-blazer-cruiser.jpg" },
      categoryId: 4,
    },
    {
      name: "Ridge Retro Mini Cruiser",
      description:
        "The Ridge Retro Mini Cruiser is a compact and portable skateboard. It offers a smooth and enjoyable ride, perfect for commuting and cruising around the city.",
      slug: "ridge-retro-mini-cruiser",
      highlight: "Cruise in style and comfort!",
      stock: 10,
      price: 59.99,
      photo: { url: "ridge-retro-mini-cruiser.jpg" },
      categoryId: 1,
    },
    {
      name: "Zero Skateboards Complete",
      description:
        "The Zero Skateboards Complete is a high-quality skateboard that comes pre-assembled and ready to ride. It features a durable deck and components, making it suitable for street and park skating.",
      slug: "zero-skateboards-complete",
      highlight: "Unleash your skateboarding skills!",
      stock: 12,
      price: 89.99,
      photo: { url: "zero-skateboards-complete.jpg" },
      categoryId: 1,
    },
    {
      name: "Girl Skateboards Deck",
      description:
        "The Girl Skateboards Deck is a professional-grade skateboard deck with a stylish and eye-catching design. It offers excellent pop and durability for skateboarding enthusiasts.",
      slug: "girl-skateboards-deck",
      highlight: "Skate in style with Girl!",
      stock: 18,
      price: 54.99,
      photo: { url: "girl-skateboards-deck.jpg" },
      categoryId: 1,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Product.");
};
