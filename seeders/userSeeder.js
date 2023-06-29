const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");
module.exports = async () => {
  const users = [];
  const Avatars = [
    "image_36OXym-C_1687999352964_raw.jpg",
    "image_aN61hZl5_1687999261665_raw.jpg",
    "image_aVPmmM12_1687999181635_raw.jpg",
    "image_dnSeD6c1_1687999289665_raw.jpg",
    "image_F2dyrWLb_1687999244491_raw.jpg",
    "image_f7qL7Exg_1687999320511_raw.jpg",
    "image_Fe3ZHIHE_1687999318869_raw.jpg",
    "image_GGZuiQif_1687999286456_raw.jpg",
    "image_KzruY9j5_1687999242909_raw.jpg",
    "image_MQA-kdvC_1687999323677_raw.jpg",
    "image_nyJDxx2k_1687999356222_raw.jpg",
    "image_QgtUNtCH_1687999246074_raw.jpg",
    "image_RGuECfBq_1687999291363_raw.jpg",
    "image_YksqKsbB_1687999288018_raw.jpg",
    "image_yrHE9Mu2_1687999354567_raw.jpg",
    "image_YZEEE_Ea_1687999322059_raw.jpg",
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
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
};
