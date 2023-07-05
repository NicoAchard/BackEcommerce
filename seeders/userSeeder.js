const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");
module.exports = async () => {
  const users = [];
  const Avatars = [
    "seeder_man_1.jpg",
    "seeder_man_10.jpg",
    "seeder_man_11.jpg",
    "seeder_man_12.jpg",
    "seeder_man_2.jpg",
    "seeder_man_3.jpg",
    "seeder_man_4.jpg",
    "seeder_man_5.jpg",
    "seeder_man_6.jpg",
    "seeder_man_7.jpg",
    "seeder_man_8.jpg",
    "seeder_man_9.jpg",
    "seeder_woman_1.jpg",
    "seeder_woman_10.jpg",
    "seeder_woman_11.jpg",
    "seeder_woman_12.jpg",
    "seeder_woman_13.jpg",
    "seeder_woman_2.jpg",
    "seeder_woman_3.jpg",
    "seeder_woman_4.jpg",
    "seeder_woman_5.jpg",
    "seeder_woman_6.jpg",
    "seeder_woman_7.jpg",
    "seeder_woman_8.jpg",
    "seeder_woman_9.jpg",
  ];

  let encryptedPassword = await bcrypt.hash("1234", 8);
  for (let i = 0; i < 20; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();

    const randomIndex = Math.floor(Math.random() * Avatars.length);
    const avatar = Avatars[randomIndex];
    users.push({
      firstname: firstname,
      lastname: lastname,
      email: `${firstname}_${lastname}@gmail.com`,
      password: encryptedPassword,
      phone_number: faker.phone.number("09#-###-###"),
      address: faker.location.streetAddress(),
      roleId: Math.random() < 0.5 ? 200 : 100,
      avatar: avatar,
    });
  }
  users.push({
    firstname: "Maria",
    lastname: "Perez",
    email: "maria.perez@gmail.com",
    password: encryptedPassword,
    phone_number: faker.phone.number("09#-###-###"),
    address: faker.location.streetAddress(),
    roleId: 100,
    avatar: "seeder_woman_1.jpg",
  });

  users.push({
    firstname: "Admin",
    lastname: "Admin",
    email: "admin@gmail.com",
    password: encryptedPassword,
    phone_number: faker.phone.number("09#-###-###"),
    address: faker.location.streetAddress(),
    roleId: 200,
    avatar: "seeder_man_1.jpg",
  });
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
};
