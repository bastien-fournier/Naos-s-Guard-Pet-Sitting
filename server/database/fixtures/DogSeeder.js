const AbstractSeeder = require("./AbstractSeeder");
// const CompanySeeder = require("./CompanySeeder");
// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const dogs = [
  {
    name: "Dax",
    picture: "dax.png",
  },
  {
    name: "Pippin",
    picture: "pippin.png",
  },
];

class DogSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "dog" });
  }

  // The run method - Populate the 'offer' table with data of jobTitles

  run() {
    dogs.forEach((dog) => {
      const values = {
        name: dog.name,
        picture: dog.picture,
        user_id: dog.user_id,

        // company_id: offer.company_id,
      };
      this.insert(values);
    });
  }
}

// Export the offerSeeder class
module.exports = DogSeeder;
