const faker = require('faker');

function generateEmployees() {
  let employees = [];

  for (let id = 0; id < 50; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    employees.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    });
  }

  return { "employees": employees };
}

module.exports = generateEmployees;