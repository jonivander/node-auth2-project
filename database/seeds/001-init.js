exports.seed = function (knex) {

  const users = [
    {
      id: 1,
      username: "poncho1",
      password: "ponchosPassword",
      department: "web development"
    },
    {
      id: 2,
      username: "poncho2",
      password: "ponchosPasswordAgain",
      department: "data science"
    },
  ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};
