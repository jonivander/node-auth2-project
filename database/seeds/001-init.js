exports.seed = function (knex) {

  const departments = [
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

  return knex("departments")
    .insert(departments)
    .then(() => console.log("\n== Seed data for departments table added. ==\n"));
};
