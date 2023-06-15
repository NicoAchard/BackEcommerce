const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "Carver C7 Skateboard",
      description:
        "The Carver C7 skateboard is designed for surf-inspired riding on the streets. It features a unique truck system that allows for smooth, fluid turns and pumping.",
      slug: "carver-c7-skateboard",
      highlight: false,
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
      highlight: false,
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
      highlight: false,
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
      highlight: false,
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
      highlight: false,
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
      highlight: false,
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
      highlight: false,
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
      highlight: false,
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
      highlight: false,
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
      highlight: false,
      stock: 9,
      price: 349.99,
      photo: { url: "loaded-vanguard-flex-3.jpg" },
      categoryId: 3,
    },
    {
      name: "SKATE GLOBE KIDS SAVE THE BEES MID 7.6",
      description:
        "The Landyachtz Drop Cat Seeker longboard features a drop-through design for enhanced stability and control. It's perfect for downhill rides and freeriding.",
      slug: "landyachtz-drop-cat-seeker",
      highlight: false,
      stock: 15,
      price: 279.99,
      photo: { url: "SKATEGLOBEKIDSSAVETHEBEESMID76.jpg" },
      categoryId: 3,
    },
    {
      name: "TABLAS SURF CHANNEL ISLANDS G-SKATE 5.9",
      description: `The Channel Islands G-Skate 5.9 surfboard is a versatile and high-performance board designed for surfers who enjoy all types of waves and want a combination of speed, maneuverability, and stability.`,
      slug: "surfboards-channel-islands-g-skate-5-9",
      highlight: false,
      stock: 6,
      price: 99.99,
      photo: { url: "TABLASSURFCHANNELISLANDSGSKATE59_1.jpg" },
      categoryId: 4,
    },
    {
      name: "TABLAS SURF LOST DRIVER 3.0 5.11",
      description: `The Lost Driver 3.0 5.11 surfboard is a high-performance board designed for experienced surfers who seek speed, control, and responsiveness in their rides. It is part of the renowned Lost Surfboards lineup, known for their innovative designs and exceptional performance.`,
      slug: "surfboards-lost-driver-3-0-5-11",
      highlight: false,
      stock: 10,
      price: 59.99,
      photo: { url: "TABLASSURFLOSTDRIVER30511_1.jpg" },
      categoryId: 1,
    },
    {
      name: "TABLAS SURF QUIKSILVER SOFTBOARD BREAK 7.0",
      description: `The Quiksilver Softboard Break 7.0 is a versatile surfboard designed for riders of all skill levels. It offers a perfect blend of stability, maneuverability, and durability, making it an excellent choice for beginners and experienced surfers alike.
This softboard features a length of 7.0 feet, providing ample buoyancy and ease of paddling. The soft construction and rounded rails enhance safety, making it ideal for learners who are developing their skills and looking for a forgiving board.`,
      slug: "surfboards-quiksilver-softboard-break-7-0",
      highlight: false,
      stock: 12,
      price: 89.99,
      photo: { url: "TABLASSURFQUIKSILVERSOFTBOARDBREAK70_1.jpg" },
      categoryId: 1,
    },
    {
      name: "TABLAS SURF SHARP EYE HT2.5 5.11 FCSII",
      description: `The Sharp Eye HT2.5 5.11 FCSII surfboard is a high-performance board designed for experienced surfers. This board, crafted by Sharp Eye Surfboards, combines advanced technology with a versatile design. The HT2.5 model features a refined outline and a moderate rocker, providing excellent speed and maneuverability in various wave conditions. The 5.11 length offers a balanced blend of stability and responsiveness, making it suitable for both powerful waves and smaller, more playful surf.`,
      slug: "surfboards-sharp-eye-ht2-5-5-11-fcsii",
      highlight: false,
      stock: 18,
      price: 54.99,
      photo: { url: "TABLASSURFSHARPEYEHT25511FCSII_1.jpg" },
      categoryId: 1,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Product.");
};
