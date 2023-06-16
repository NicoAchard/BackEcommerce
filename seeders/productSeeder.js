const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "CRUISER GLOBE BIG BLAZER",
      description:
        "The Cruiser Globe Big Blazer is designed for the ultimate surf-like experience. Its compact size and wide, stable deck make it perfect for carving and cruising with ease.",
      slug: "CRUISER-GLOBE-BIG-BLAZER",
      highlight: false,
      stock: 10,
      price: 249.99,
      photos: [{ url: "CRUISERGLOBEBIGBLAZER_1.jpg" }, { url: "CRUISERGLOBEBIGBLAZER_2.jpg" }],
      categoryId: 2,
    },
    {
      name: "CRUISER GLOBE BLAZER",
      description:
        "The Cruiser Globe Blazer is a stylish and compact skateboard designed for cruising and commuting in style. It offers a perfect combination of functionality and aesthetics, making it an ideal choice for urban transportation.",
      slug: "skateboards-cruiser-globe-blazer",
      highlight: false,
      stock: 5,
      price: 279.99,
      photos: [{ url: "CRUISERGLOBEBLAZER_1.jpg" }, { url: "CRUISERGLOBEBLAZER_2.jpg" }],
      categoryId: 2,
    },
    {
      name: "CRUISER GLOBE CHROMANTIC",
      description:
        "Unleash your freestyle skills with the Cruiser Globe Chromantic. This versatile cruiser board features a symmetrical shape and responsive trucks for optimal trick performance.",
      slug: "CRUISER-GLOBE-CHROMANTIC",
      highlight: false,
      stock: 15,
      price: 299.99,
      photos: [{ url: "CRUISERGLOBECHROMANTIC_1.jpg" }],
      categoryId: 3,
    },
    {
      name: "longboard",
      description:
        "Enjoy an eco-friendly and stylish ride with this classic longboard. Its sturdy construction and smooth wheels provide a comfortable cruising experience.",
      slug: "longboard",
      highlight: false,
      stock: 20,
      price: 199.99,
      photos: [{ url: "longboard_1.jpg" }],
      categoryId: 3,
    },
    {
      name: "LONGBOARD GLOBE ARCADIA",
      description:
        "Cruise in style with the Longboard Globe Arcadia. Its compact size and retro-inspired design make it perfect for commuting and carving through the streets.",
      slug: "LONGBOARD-GLOBE-ARCADIA",
      highlight: false,
      stock: 8,
      price: 89.99,
      photos: [{ url: "LONGBOARDGLOBEARCADIA.jpg" }],
      categoryId: 4,
    },
    {
      name: "LONGBOARD GLOBE BYRONBAY",
      description:
        "Ride in retro style with the Longboard Globe Byronbay. This board combines a vintage look with modern performance, offering a smooth and enjoyable cruising experience.",
      slug: "LONGBOARD-GLOBE-BYRONBAY",
      highlight: false,
      stock: 12,
      price: 79.99,
      photos: [{ url: "LONGBOARDGLOBEBYRONBAY.jpg" }],
      categoryId: 4,
    },
    {
      name: "LONGBOARD GLOBE THE ALL TIME",
      description:
        "Experience the iconic design and superior performance of the Longboard Globe The All Time. Whether you're a beginner or an advanced rider, this board offers stability and control for all your longboarding adventures.",
      slug: "LONGBOARD-GLOBE-THE-ALL-TIME",
      highlight: false,
      stock: 18,
      price: 119.99,
      photos: [{ url: "LONGBOARDGLOBETHEALLTIME_1.jpg" }],
      categoryId: 1,
    },
    {
      name: "SKATE GLOBE G0 BLOCK SERIF",
      description:
        "Express your style on the streets with the Skate Globe G0 Block Serif. This skateboard features a compact and maneuverable design, making it perfect for tricks and street riding.",
      slug: "SKATE-GLOBE-G0-BLOCK-SERIF",
      highlight: false,
      stock: 10,
      price: 49.99,
      photos: [{ url: "SKATEGLOBEG0BLOCKSERIF.jpg" }],
      categoryId: 1,
    },
    {
      name: "SKATE GLOBE G1 SLIDE STACK",
      description:
        "Ride like the pros with the Skate Globe G1 Slide Stack. This skateboard is the signature model of professional skateboarder Filipe Toledo. It offers a perfect balance of stability and responsiveness, allowing you to perform tricks with precision.",
      slug: "SKATE-GLOBE-G1-SLIDE-STACK",
      highlight: false,
      stock: 7,
      price: 329.99,
      photos: [{ url: "SKATEGLOBEG1SLIDESTACK8125.jpg" }],
      categoryId: 1,
    },
    {
      name: "SKATE GLOBE G1 STACK 80",
      description:
        "Embrace the endless summer with the Skate Globe G1 Stack 80. This skateboard features a classic design and a wide deck, providing stability and control for riders of all skill levels.",
      slug: "SKATE-GLOBE-G1-STACK-80",
      highlight: false,
      stock: 3,
      price: 399.99,
      photos: [{ url: "SKATEGLOBEG1STACK80.jpg" }],
      categoryId: 3,
    },
    {
      name: "SKATE GLOBE G2 HALF DIP 2 8.25",
      description: `The SkateGlobe G2 Half Dip 28.25 is a high-performance skateboard designed for skaters who want to push their limits and excel in various skateboarding disciplines. With its advanced features and quality construction, this skateboard is built to deliver an exceptional riding experience.`,
      slug: "skateboards-skateglobe-g2-half-dip-2825",
      highlight: false,
      stock: 9,
      price: 349.99,
      photos: [{ url: "SKATEGLOBEG2HALFDIP2825.jpg" }],
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
      photos: [{ url: "SKATEGLOBEKIDSSAVETHEBEESMID76.jpg" }],
      categoryId: 3,
    },
    {
      name: "TABLAS SURF CHANNEL ISLANDS G-SKATE 5.9",
      description: `The Channel Islands G-Skate 5.9 surfboard is a versatile and high-performance board designed for surfers who enjoy all types of waves and want a combination of speed, maneuverability, and stability.`,
      slug: "surfboards-channel-islands-g-skate-5-9",
      highlight: false,
      stock: 6,
      price: 99.99,
      photos: [{ url: "TABLASSURFCHANNELISLANDSGSKATE59_1.jpg" }],
      categoryId: 4,
    },
    {
      name: "TABLAS SURF LOST DRIVER 3.0 5.11",
      description: `The Lost Driver 3.0 5.11 surfboard is a high-performance board designed for experienced surfers who seek speed, control, and responsiveness in their rides. It is part of the renowned Lost Surfboards lineup, known for their innovative designs and exceptional performance.`,
      slug: "surfboards-lost-driver-3-0-5-11",
      highlight: false,
      stock: 10,
      price: 59.99,
      photos: [{ url: "TABLASSURFLOSTDRIVER30511_1.jpg" }],
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
      photos: [{ url: "TABLASSURFQUIKSILVERSOFTBOARDBREAK70_1.jpg" }],
      categoryId: 1,
    },
    {
      name: "TABLAS SURF SHARP EYE HT2.5 5.11 FCSII",
      description: `The Sharp Eye HT2.5 5.11 FCSII surfboard is a high-performance board designed for experienced surfers. This board, crafted by Sharp Eye Surfboards, combines advanced technology with a versatile design. The HT2.5 model features a refined outline and a moderate rocker, providing excellent speed and maneuverability in various wave conditions. The 5.11 length offers a balanced blend of stability and responsiveness, making it suitable for both powerful waves and smaller, more playful surf.`,
      slug: "surfboards-sharp-eye-ht2-5-5-11-fcsii",
      highlight: false,
      stock: 18,
      price: 54.99,
      photos: [{ url: "TABLASSURFSHARPEYEHT25511FCSII_1.jpg" }],
      categoryId: 1,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Product.");
};
