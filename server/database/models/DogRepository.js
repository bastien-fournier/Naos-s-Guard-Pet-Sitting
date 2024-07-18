const AbstractRepository = require("./AbstractRepository");

class DogRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "offer" as configuration
    super({ table: "dog" });
  }

  async create(dog) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name,picture) VALUES (?,?)`,
      [
        dog.name,
        dog.picture,

        // review.user_id, // Assurez-vous que user_id est passé correctement
      ]
    );

    return result.insertId;
  }
}

module.exports = DogRepository;
