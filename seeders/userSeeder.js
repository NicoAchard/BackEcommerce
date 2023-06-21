const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");
module.exports = async () => {
  const users = [];
  let encryptedPassword = await bcrypt.hash("1234", 8);
  for (let i = 0; i < 20; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const avatar = faker.image.avatar();
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
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
};
