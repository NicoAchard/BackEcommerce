const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "Carver C7 Skateboard",
      description:
        "The Carver C7 skateboard is designed for surf-inspired riding on the streets. It features a unique truck system that allows for smooth, fluid turns and pumping.",
      slug: "carver-c7-skateboard",
      highlight: "Ultimate surf-like experience!",
      stock: 10,
      price: 249.99,
      photo: { url: "carver-c7-skateboard.jpg" },
      categoryId: 2,
    },
    {
      name: "Carver Triton CX",
      description:
        "The Carver Triton CX is a high-performance skateboard with an advanced truck system. It offers a responsive and controlled riding experience, making it perfect for carving and maneuvering.",
      slug: "carver-triton-cx",
      highlight: "Precision and control!",
      stock: 5,
      price: 279.99,
      photo: { url: "carver-triton-cx.jpg" },
      categoryId: 2,
    },
    {
      name: "Loaded Dervish Sama",
      description:
        "The Loaded Dervish Sama is a versatile longboard designed for freestyle tricks, cruising, and carving. It offers a lively and responsive ride with great stability.",
      slug: "loaded-dervish-sama",
      highlight: "Unleash your freestyle!",
      stock: 15,
      price: 299.99,
      photo: { url: "loaded-dervish-sama.jpg" },
      categoryId: 3,
    },
    {
      name: "Sector 9 Bamboo Series",
      description:
        "The Sector 9 Bamboo Series longboard is made of sustainable bamboo and offers a smooth and comfortable ride. It's perfect for cruising and commuting.",
      slug: "sector-9-bamboo-series",
      highlight: "Eco-friendly and stylish!",
      stock: 20,
      price: 199.99,
      photo: { url: "sector-9-bamboo-series.jpg" },
      categoryId: 3,
    },
    {
      name: "Penny Nickel Board",
      description:
        "The Penny Nickel Board is a compact and lightweight cruiser skateboard. It features a plastic deck with a retro design, making it perfect for urban commuting and quick rides.",
      slug: "penny-nickel-board",
      highlight: "Cruise in style!",
      stock: 8,
      price: 89.99,
      photo: { url: "penny-nickel-board.jpg" },
      categoryId: 4,
    },
    {
      name: "Penny Classic Skateboard",
      description:
        "The Penny Classic Skateboard is a mini cruiser with a durable plastic deck. It offers a smooth and nimble ride, perfect for quick turns and tight spaces.",
      slug: "penny-classic-skateboard",
      highlight: "Retro style, modern performance!",
      stock: 12,
      price: 79.99,
      photo: { url: "penny-classic-skateboard.jpg" },
      categoryId: 4,
    },
    {
      name: "Santa Cruz Complete Skateboard",
      description:
        "The Santa Cruz Complete Skateboard is a classic skateboard with a sturdy maple deck. It's designed for street and park skating, providing excellent pop and stability.",
      slug: "santa-cruz-complete-skateboard",
      highlight: "Iconic design, superior performance!",
      stock: 18,
      price: 119.99,
      photo: { url: "santa-cruz-complete-skateboard.jpg" },
      categoryId: 1,
    },
    {
      name: "Enjoi Skateboard Deck",
      description:
        "The Enjoi Skateboard Deck is a high-quality deck made of 7-ply maple wood. It offers a solid foundation for tricks and stunts, allowing for optimal control and durability.",
      slug: "enjoi-skateboard-deck",
      highlight: "Express your style on the streets!",
      stock: 10,
      price: 49.99,
      photo: { url: "enjoi-skateboard-deck.jpg" },
      categoryId: 1,
    },
    {
      name: "SmoothStar Holy Toledo",
      description:
        "The SmoothStar Holy Toledo skateboard is designed in collaboration with professional surfer Filipe Toledo. It offers a surf-like experience with its unique turning mechanism.",
      slug: "smoothstar-holy-toledo",
      highlight: "Filipe Toledo signature model!",
      stock: 7,
      price: 329.99,
      photo: { url: "smoothstar-holy-toledo.jpg" },
      categoryId: 1,
    },
    {
      name: "Hamboards Huntington Hop",
      description:
        "The Hamboards Huntington Hop is a longboard skateboard designed for cruising and long-distance rides. It provides a smooth and stable ride, reminiscent of classic California vibes.",
      slug: "hamboards-huntington-hop",
      highlight: "Embrace the endless summer!",
      stock: 3,
      price: 399.99,
      photo: { url: "hamboards-huntington-hop.jpg" },
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
